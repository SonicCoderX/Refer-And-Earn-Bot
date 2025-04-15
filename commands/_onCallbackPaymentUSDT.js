/*CMD
  command: /onCallbackPaymentUSDT
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
  var banText =
    "<i>🚫 Access Denied!</i>\n\n<b>Reason:</b> You are currently banned from using this bot.\n\n💡 <b>Note:</b> If you believe this is an error, please contact support.";
  Api.sendMessage({ text: banText, parse_mode: "html" });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ System Under Maintenance</i>\n\n<b>🔧 Status:</b> Our team is enhancing the bot to bring you a better experience. 🚀\n\n⏳ <b>Estimated Downtime:</b> Please check back later and start earning again!";
  Api.sendMessage({ text: onText, parse_mode: "html" });
  return;
}

const alertsChannel = Bot.getProp("alertsChannel");
if (!options) return;

if (options.status == "Confirming") {
  Bot.sendMessage(`*⁉️ Your payment is processing....\n\n💸 Amount :* ${options.payAmount} ${options.payCurrency}`);
} else if (options.status == "Paid") {
  const text = `<b>✅ New deposit successful\n\n🧑 User: ${user.first_name}\n💸 Amount:</b> <code>${options.payAmount} ${options.payCurrency}</code>\n\n✔️<b> Bot: @${bot.name}</b>`;
  
  // Send deposit success message to the user
  Api.sendMessage({ text: text, parse_mode: "html" });
  
  // Update user's balance (in USDT) using the deposited amount
  const balance = Libs.ResourcesLib.userRes("balance");
  const amount = parseFloat(options.payAmount);
  balance.add(amount);
  
  // Update user's total deposit (non-withdrawable funds)
  var currentTotalDeposit = Number(User.getProperty("totalDeposit") || 0);
  User.setProperty("totalDeposit", currentTotalDeposit + amount, "number");
  
  // ----- Update Deposit History for the User -----
  var depositHistory = User.getProperty("depositHistory") || "";
  var now = new Date();
  var dateTime = now.toLocaleString();
  var newDepositRecord = dateTime + " - Deposited " + options.payAmount + " " + options.payCurrency;
  if (depositHistory !== "") {
    depositHistory = newDepositRecord + "\n" + depositHistory;
  } else {
    depositHistory = newDepositRecord;
  }
  User.setProperty("depositHistory", depositHistory, "string");
  // ------------------------------------------------
  
  // ----- Update Global Total Deposits -----
  var globalTotalDeposits = Libs.ResourcesLib.anotherChatRes("totalDeposits", "global");
  globalTotalDeposits.add(amount);
  // ----------------------------------------
  
  // Set last deposit notification (for admin panel display)
  Bot.setProperty("lastDeposit",
    `<b>User:</b> ${user.first_name} (${user.telegramid}) deposited <code>${options.payAmount} ${options.payCurrency}</code>`,
    "string"
  );
  
  // Send alert message to alertsChannel if set and not current user's chat id
  if (alertsChannel && alertsChannel != user.telegramid) {
    Api.sendMessage({ chat_id: alertsChannel, text: text, parse_mode: "html" });
  }
  
  // ----- Notify Admin of New Deposit -----
  var adminId = Bot.getProperty("admin");
  if (adminId) {
    var adminMsg = "🔔 <b>New Deposit Alert!</b>\n" +
                   "👤 <b>User:</b> " + user.first_name + " " + (user.username ? "(@" + user.username + ")" : "") + "\n" +
                   "🆔 <b>User ID:</b> " + user.telegramid + "\n" +
                   "💰 <b>Deposited:</b> " + options.payAmount + " " + options.payCurrency + "\n" +
                   "🏦 <b>Current Balance:</b> " + balance.value().toFixed(4) + " USDT\n" +
                   "⏰ <b>Date & Time:</b> " + dateTime + "\n\n" +
                   "Keep up the great work! 🚀";
    Api.sendMessage({ chat_id: adminId, text: adminMsg, parse_mode: "html" });
  }
  // ---------------------------------------
  
  // Process referral commission using the updated commission structure
  const refUser = Libs.ReferralLib.getAttractedBy();
  if (refUser) {
    // Count first deposit for referrer if not already done
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
    var depositAmount = amount; // deposit amount in USDT
    var commission = (commissionRate / 100) * depositAmount;
    var refCommissionRes = Libs.ResourcesLib.anotherUserRes("refCommission", refUser.telegramid);
    refCommissionRes.add(commission);
    var refDepositTotalRes = Libs.ResourcesLib.anotherUserRes("refDepositTotal", refUser.telegramid);
    refDepositTotalRes.add(depositAmount);
    
    Api.sendMessage({
      chat_id: refUser.telegramid,
      text:
        "<b>💸 New Referral Commission Earned!</b>\n\n" +
        "<b>👤 From:</b> <i>" + user.first_name + "</i>\n" +
        "<b>💰 Deposit Amount:</b> <code>" + depositAmount + " " + options.payCurrency + "</code>\n" +
        "<b>📊 Commission Rate:</b> <code>" + commissionRate + "%</code>\n" +
        "<b>💵 Commission Earned:</b> <code>" + commission.toFixed(2) + " USDT</code>\n\n" +
        "Remember, commission withdrawals become available once you reach 1 USDT—the more you refer, the more you earn! 💰",
      parse_mode: "html"
    });
    
    // ----- Record Referral Transaction for Referrer (Top 10) -----
    var refHistoryKey = "referralHistory_" + refUser.telegramid;
    var currentRefHistory = Bot.getProperty(refHistoryKey) || "";
    var newRefRecord = dateTime + " - " + (user.username ? "@" + user.username : user.first_name) +
                       " deposited " + options.payAmount + " " + options.payCurrency +
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
