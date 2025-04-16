/*CMD
  command: /confirm
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/* ========================================================= */
/*               Modified /confirm Command               */
/* ========================================================= */

// Parse parameters and withdrawal amount
var params = request.data.split(" ");
var amount = params[1];
var wallet = User.getProperty("wallet");

var autowithStatus = Bot.getProperty("autowithStatus");
var withdrawalStatus = Bot.getProperty("withdrawalStatus");
var withdrawalAmount = parseFloat(amount); // Convert amount to a number

// ✅ **Auto Withdrawal Logic:**  
// If Auto Withdraw is ON, withdrawal status is OFF and amount is ≤ 5 USDT,
// then use auto withdrawal via OxaPay. For amounts > 5 USDT, force manual processing.
if (autowithStatus === "On" && withdrawalStatus === "Off" && withdrawalAmount <= 5) {
  let amountToWithdraw = withdrawalAmount;
  let options = {
    url: "api/send",
    fields: {
      amount: parseFloat(amountToWithdraw.toFixed(4)),
      currency: "USDT",
      network: "BEP20",
      address: wallet,
      onCallback: "/confirm2"
    },
    onSuccess: "/confirm3 " + amountToWithdraw
  };
  Libs.OxaPayLib.apiCall(options);
  return;
}

// ✅ **Manual Withdrawal Processing:**  
// This block handles manual withdrawal requests (used when amount > 5 USDT).
if (request.data.startsWith("/confirm")) {
  var chatID = request.message.chat.id;
  var messageID = request.message.message_id;
  Api.deleteMessage({ chat_id: chatID, message_id: messageID });

  var userId = user.telegramid;
  var currency = "USDT";
  var balance = Libs.ResourcesLib.userRes("balance");

  // Retrieve pending withdrawal record
  var pendingKey = "pendingWithdrawal_" + userId;
  var pendingData = Bot.getProperty(pendingKey);
  if (!pendingData || !pendingData.deducted) {
    Api.sendMessage({
      chat_id: chatID,
      text: "<i>❌ No pending withdrawal found or it's already finalized.</i>",
      parse_mode: "html"
    });
    return;
  }

  if (!wallet || !amount) {
    Api.sendMessage({
      chat_id: chatID,
      text: "<i>❌ Error: Withdrawal details incomplete.</i>",
      parse_mode: "html"
    });
    return;
  }

  // Inform the user that the withdrawal is processing
  var userText = "<b>✅ Your withdrawal is being processed.</b>\n\n" +
                 "<b>💸 Amount:</b> " + amount + " " + currency + "\n" +
                 "<b>🗂️ Wallet:</b> <code>" + wallet + "</code>\n\n" +
                 "<i>⏳ Please wait while we process your request.</i>";
  Api.sendMessage({ chat_id: chatID, text: userText, parse_mode: "html" });

  // ----- Gather additional user data for admin notification -----
  var minerProfit = Libs.ResourcesLib.userRes("minerProfitBalance").value() || 0;
  var totalBalance = balance.value() || 0;
  var referralCount = Libs.ReferralLib.getRefCount() || 0;
  
  // **Fetch referral commission using /withdrawCommission logic**
  var refCommissionResource = Libs.ResourcesLib.userRes("refCommission");
  if (refCommissionResource.value() === null || refCommissionResource.value() === undefined) {
    refCommissionResource.set(0);
  }
  var referralCommissionTotal = refCommissionResource.value();
  
  // Other miner counts for Arbitrade plans
  var demoCount = Number(User.getProperty("demoArbitradeCount") || 0);
  var vip1Count = Number(User.getProperty("vip1Count") || 0);
  var vip2Count = Number(User.getProperty("vip2Count") || 0);
  var vip3Count = Number(User.getProperty("vip3Count") || 0);
  var vip4Count = Number(User.getProperty("vip4Count") || 0);
  var vip5Count = Number(User.getProperty("vip5Count") || 0);
  
  // Compute total withdrawals from withdrawal history
  var histKey = "withdrawalHistory_" + userId;
  var withdrawalHistory = Bot.getProperty(histKey, []);
  var totalWithdrawals = 0;
  if (Array.isArray(withdrawalHistory)) {
    for (var i = 0; i < withdrawalHistory.length; i++) {
      totalWithdrawals += parseFloat(withdrawalHistory[i].amount) || 0;
    }
  }
  // Fetch total deposits from global resource
  var totalDeposits = Libs.ResourcesLib.anotherChatRes("totalDeposits", "global").value() || 0;
  
  // ✅ **Calculate All-Time Miner Profit Using Mining History:**
  var miningHistoryString = User.getProperty("miningHistory");
  var miningHistory = [];
  if (miningHistoryString) {
    try {
      miningHistory = JSON.parse(miningHistoryString);
    } catch(e) {
      miningHistory = [];
    }
  }
  var profitExperience = 0, countExperience = 0;
  var profitXRP = 0, countXRP = 0;
  var profitBNB = 0, countBNB = 0;
  var profitETH = 0, countETH = 0;
  var profitENA = 0, countENA = 0;
  var profitBTC = 0, countBTC = 0;
  var now = Date.now();
  for (var i = 0; i < miningHistory.length; i++){
    var rec = miningHistory[i];
    // Calculate elapsed days (capped by the plan's expirationDays)
    var elapsedDays = Math.floor((now - rec.purchaseTimestamp) / 86400000);
    if (elapsedDays > rec.expirationDays) {
      elapsedDays = rec.expirationDays;
    }
    var profitReceived = elapsedDays * rec.dailyProfit;
    if (rec.planName.indexOf("Experience") > -1) {
      profitExperience += profitReceived;
      countExperience++;
    } else if (rec.planName.indexOf("XRP") > -1) {
      profitXRP += profitReceived;
      countXRP++;
    } else if (rec.planName.indexOf("BNB") > -1) {
      profitBNB += profitReceived;
      countBNB++;
    } else if (rec.planName.indexOf("ETH") > -1) {
      profitETH += profitReceived;
      countETH++;
    } else if (rec.planName.indexOf("ENA") > -1) {
      profitENA += profitReceived;
      countENA++;
    } else if (rec.planName.indexOf("BTC") > -1) {
      profitBTC += profitReceived;
      countBTC++;
    }
  }
  
  // ----- Build detailed admin notification with updated miner profit and referral commission info -----
  var adminNotification = "<b>🚨 New Withdrawal Request</b>\n\n" +
    "<b>👤 User:</b> @" + user.username + "\n" +
    "<b>User id:</b> <code>" + userId + "</code>\n\n" +
    "<b>💰 Requested Amount:</b> " + amount + " " + currency + "\n" +
    "<b>🏦 Wallet:</b> <code>" + wallet + "</code>\n\n" +
    "<b>💸 Total Miner Profit:</b> " + minerProfit.toFixed(2) + " " + currency + "\n" +
    "<b>💼 Total Balance:</b> " + totalBalance.toFixed(2) + " " + currency + "\n" +
    "<b>🧑‍🤝‍🧑 Total Referrals:</b> " + referralCount + "\n" +
    "<b>🎁 Total Referral Commissions Earned:</b> " + referralCommissionTotal.toFixed(2) + " " + currency + "\n\n" +
    "<b>✅ Experience:</b> " + countExperience + " Running (total profit: " + profitExperience.toFixed(2) + " USDT)\n" +
    "<b>🚀 XRP:</b> " + countXRP + " Running (profit: " + profitXRP.toFixed(2) + " USDT)\n" +
    "<b>🚀 BNB:</b> " + countBNB + " Running (profit: " + profitBNB.toFixed(2) + " USDT)\n" +
    "<b>🚀 ETH:</b> " + countETH + " Running (profit: " + profitETH.toFixed(2) + " USDT)\n" +
    "<b>🚀 ENA:</b> " + countENA + " Running (profit: " + profitENA.toFixed(2) + " USDT)\n" +
    "<b>🚀 BTC:</b> " + countBTC + " Running (profit: " + profitBTC.toFixed(2) + " USDT)\n\n" +
    "<b>💼 Total Withdrawals:</b> " + totalWithdrawals.toFixed(2) + " " + currency + "\n" +
    "<b>💳 Total Deposits:</b> " + totalDeposits.toFixed(2) + " " + currency;

  // Inline buttons for admin actions remain unchanged
  var adminButtons = [
    [
      { text: "💵 Pay Manual", callback_data: `/pay_manual ${userId} ${amount}` },
      { text: "❌ Cancel/Refund", callback_data: `/cancel_refund ${userId} ${amount}` }
    ]
  ];

  // Notify the admin with the detailed message
  var adminId = Bot.getProperty("admin");
  Api.sendMessage({
    chat_id: adminId,
    text: adminNotification,
    reply_markup: { inline_keyboard: adminButtons },
    parse_mode: "html"
  });
}
