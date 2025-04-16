/*CMD
  command: /trx2
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

var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  Api.sendMessage({ text: "<i>🚫 You're banned.</i>", parse_mode: "html" });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  Api.sendMessage({ text: "<i>🛠️ Bot is under maintenance, please come back after some time.</i>", parse_mode: "html" });
  return;
}

if (!options) { return; }

var status = options.status;
var amount = options.payAmount;
var currency = options.payCurrency;
var trackID = options.trackId;
var orderID = options.orderId;
var admin = Bot.getProperty("admin");
var userName = user.first_name;
var userID = user.telegramid;
var username = "@" + user.username;
var alertsChannel = Bot.getProperty("alertsChannel");
var botLink = "@" + bot.name;
var userAmount = User.getProperty("amountUSDT"); // deposit amount in USDT
var balance = Libs.ResourcesLib.userRes("balance");
var totalDeposits = Libs.ResourcesLib.anotherChatRes("totalDeposits", "global");
var depositHistory = User.getProperty("depositHistory") || "";
var date = new Date().toLocaleString("en-US", { timeZone: "Asia/kolkata" });

if (status === "Confirming") {
  var confirmingText =
    "<b>⁉️ Your payment is processing....\n\n💸 Amount :</b> <code>" +
    amount + " " + currency + "</code>";
  Api.sendMessage({ text: confirmingText, parse_mode: "html" });
} else if (status === "Paid") {
  // Update user's balance and global total deposits
  balance.add(parseFloat(userAmount));
  totalDeposits.add(parseFloat(userAmount));
  
  // ----- Update Deposit History (prepend new record) -----
  var newDepoRecord = "👉 Deposited: " + amount + " " + currency + " on " + date;
  if (depositHistory !== "") {
    depositHistory = newDepoRecord + "\n" + depositHistory;
  } else {
    depositHistory = newDepoRecord;
  }
  User.setProperty("depositHistory", depositHistory, "string");
  // --------------------------------------------------------
  
  var text =
    "<b>✅ New deposit successful\n\n🧒 User: " + userName +
    "\n💸 Amount: </b><code>" + amount + " " + currency +
    "</code>\n<b>🆔 Order ID: </b><code>" + orderID + "</code>\n\n<b>✔️ Bot: " + botLink + "</b>";
  Api.sendMessage({ text: text, parse_mode: "html" });
  Bot.runCommand("/mainMenu");
  Api.sendMessage({ chat_id: alertsChannel, text: text, parse_mode: "html" });
  
  // ----- Admin Notification Message -----
  var adminText =
    "<b>✅ New deposit successful\n\n🧒 User: " + userName +
    "\n👉 Username: " + username +
    "\n🆔 User ID: </b><code>" + userID +
    "</code>\n<b>💸 Amount: </b><code>" + amount + " " + currency +
    "</code>\n<b>🆔 Order ID: </b><code>" + orderID +
    "</code>\n<b>⚠️ Track ID: </b><code>" + trackID +
    "</code>\n\n<b>✔️ Bot: " + botLink + "</b>";
  Api.sendMessage({ chat_id: admin, text: adminText, parse_mode: "html" });
  // ----------------------------------------
  
  // === Referral Commission Processing ===
  var refUser = Libs.ReferralLib.getAttractedBy();
  if (refUser) {
    if (!User.getProperty("hasDeposited")) {
      User.setProperty("hasDeposited", true, "boolean");
      var refCountRes = Libs.ResourcesLib.anotherUserRes("referralCount", refUser.telegramid);
      refCountRes.add(1);
    }
    var refCount = Libs.ResourcesLib.anotherUserRes("referralCount", refUser.telegramid).value();
    var commissionRate = 10;
    if (refCount >= 20) {
      commissionRate = 30;
    } else if (refCount >= 10) {
      commissionRate = 20;
    } else if (refCount >= 5) {
      commissionRate = 15;
    }
    var depositAmount = parseFloat(userAmount);
    var commission = (commissionRate / 100) * depositAmount;
    var refCommissionRes = Libs.ResourcesLib.anotherUserRes("refCommission", refUser.telegramid);
    refCommissionRes.add(commission);
    var refDepositTotalRes = Libs.ResourcesLib.anotherUserRes("refDepositTotal", refUser.telegramid);
    refDepositTotalRes.add(depositAmount);
    
    Api.sendMessage({
      chat_id: refUser.telegramid,
      text:
        "<b>💸 New Referral Commission Earned!</b>\n\n" +
        "<b>👤 From:</b> <i>" + userName + "</i>\n" +
        "<b>💰 Deposit Amount:</b> <code>" + depositAmount + " " + currency + "</code>\n" +
        "<b>📊 Commission Rate:</b> <code>" + commissionRate + "%</code>\n" +
        "<b>💵 Commission Earned:</b> <code>" + commission.toFixed(2) + " USDT</code>\n\n" +
        "Remember, commission withdrawals are locked until you subscribe to VIP1 or higher.",
      parse_mode: "html"
    });
    
    // ----- Record Referral Transaction for Referrer (Top 10) -----
    var refHistoryKey = "referralHistory_" + refUser.telegramid;
    var currentRefHistory = Bot.getProperty(refHistoryKey) || "";
    var newRefRecord = date + " - " + (user.username ? "@" + user.username : userName) +
                       " deposited " + amount + " " + currency +
                       ", Commission: " + commission.toFixed(2) + " USDT";
    var combinedRefHistory = newRefRecord;
    if (currentRefHistory !== "") {
      combinedRefHistory += "\n" + currentRefHistory;
    }
    var refLines = combinedRefHistory.split("\n");
    if (refLines.length > 10) {
      refLines = refLines.slice(0, 10);
    }
    Bot.setProperty(refHistoryKey, refLines.join("\n"), "string");
    // -----------------------------------------------------------
  }
}
