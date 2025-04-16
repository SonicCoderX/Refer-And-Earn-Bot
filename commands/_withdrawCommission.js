/*CMD
  command: /withdrawCommission
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

/* Command: /withdrawCommission */

// If triggered by an inline callback, try to delete the triggering message.
if (request.data && request.message && request.message.message_id) {
  try {
    Api.deleteMessage({ 
      chat_id: request.message.chat.id, 
      message_id: request.message.message_id 
    });
  } catch (e) {
    // Ignore deletion errors if the message is not found.
  }
}

// Initialize the referral commission resource if not already set.
var refCommission = Libs.ResourcesLib.userRes("refCommission");
if (refCommission.value() === null || refCommission.value() === undefined) {
  refCommission.set(0);
}
var commissionAmount = refCommission.value();

// Check if the user meets the minimum withdrawal threshold (1 USDT).
if (commissionAmount < 1) {
  Api.sendMessage({
    text:
      "💡 <b>Insufficient Commission!</b>\n\n" +
      "👉 You need a minimum of <code>1 USDT</code> commission to withdraw.\n" +
      "💰 You currently have: <code>" + commissionAmount.toFixed(2) + " USDT</code> in referral commissions.\n\n" +
      "🚀 Keep referring to boost your earnings!",
    parse_mode: "html"
  });
  return;
}

// **Updated Miner Data Check:** Verify if the user has purchased any Arbitrade plan
var demoCount = User.getProperty("demoArbitradeCount") || 0;
var vip1Count = User.getProperty("vip1Count") || 0;
var vip2Count = User.getProperty("vip2Count") || 0;
var vip3Count = User.getProperty("vip3Count") || 0;
var vip4Count = User.getProperty("vip4Count") || 0;
var vip5Count = User.getProperty("vip5Count") || 0;
var totalArbitradeCount = demoCount + vip1Count + vip2Count + vip3Count + vip4Count + vip5Count;
if (totalArbitradeCount === 0) {
  Api.sendMessage({
    text:
      "🚫 <b>Commission Withdrawals Locked!</b>\n\n" +
      "💎 To withdraw your referral commissions, you must purchase at least one Arbitrade plan.\n" +
      "👉 Invest in any Arbitrade plan to unlock your earnings!",
    parse_mode: "html"
  });
  return;
}

// Check if the user's wallet address is set.
var wallet = User.getProperty("wallet");
if (!wallet) {
  Api.sendMessage({
    text:
      "⚠️ <b>Wallet Address Not Found!</b>\n\n" +
      "👉 Please set your wallet address using 🗂️ Wallet before withdrawing your commission.",
    parse_mode: "html"
  });
  return;
}

// Save a pending withdrawal record for admin review.
var pendingWithdrawal = {
  amount: commissionAmount,
  wallet: wallet,
  time: new Date().toISOString()
};
Bot.setProperty("pendingWithdrawal_" + user.telegramid, pendingWithdrawal, "json");

// Notify the user that the withdrawal request has been initiated.
Api.sendMessage({
  text:
    "⏳ <b>Referral Commission Withdrawal Request Initiated!</b>\n\n" +
    "🎉 You have requested to withdraw <code>" + commissionAmount.toFixed(2) + " USDT</code> from your referral commissions.\n" +
    "💸 The funds will be transferred to your wallet: <code>" + wallet + "</code> once approved by the System.\n\n" +
    "👉 Please wait for confirmation.",
  parse_mode: "html"
});

// Prepare an attractive admin notification message.
var userName = user.first_name;
var username = (user.username) ? "@" + user.username : user.first_name;
var userID = user.telegramid;
var currentBalance = Libs.ResourcesLib.userRes("balance").value();
var adminText =
  "🔔 <b>New Referral Commission Withdrawal Request</b>\n\n" +
  "🧒 <b>User:</b> " + userName + " (" + username + ")\n" +
  "🆔 <b>User ID:</b> <code>" + userID + "</code>\n" +
  "💸 <b>Requested Amount:</b> <code>" + commissionAmount.toFixed(2) + " USDT</code>\n" +
  "💳 <b>User Balance:</b> <code>" + currentBalance.toFixed(4) + " USDT</code>\n" +
  "🏦 <b>Wallet:</b> <code>" + wallet + "</code>\n\n" +
  "Please review and decide whether to process or refund this withdrawal request.";

// Inline keyboard for admin actions.
var adminButtons = [
  [
    { text: "💵 Pay Manual", callback_data: "/pay_manual " + userID + " " + commissionAmount.toFixed(2) },
    { text: "❌ Cancel/Refund", callback_data: "/cancel_refund " + userID + " " + commissionAmount.toFixed(2) }
  ]
];

// Retrieve admin and alerts channel IDs.
var adminId = Bot.getProperty("admin");
var alertsChannel = Bot.getProperty("alertsChannel");

// Send the notification message to the admin.
if (adminId) {
  Api.sendMessage({
    chat_id: adminId,
    text: adminText,
    reply_markup: { inline_keyboard: adminButtons },
    parse_mode: "html"
  });
}
if (alertsChannel) {
  Api.sendMessage({
    chat_id: alertsChannel,
    text: adminText,
    reply_markup: { inline_keyboard: adminButtons },
    parse_mode: "html"
  });
}
