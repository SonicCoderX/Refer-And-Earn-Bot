/*CMD
  command: /invite
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

if (request.data) {
  var chatID = request.message.chat_id;
  var messageID = request.message.message_id;
  Api.deleteMessage({ chat_id: chatID, message_id: messageID });
}

var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  Api.sendMessage({ text: "<i>🚫 You're banned.</i>", parse_mode: "html" });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  Api.sendMessage({
    text:
      "<i>🛠️ Bot is under maintenance, please come back after some time.</i>",
    parse_mode: "html"
  });
  return;
}

// Referral system stats 
var referralCount = Libs.ReferralLib.getRefCount();
var refDepositTotal = Libs.ResourcesLib.userRes("refDepositTotal").value() || 0;
var refCommission = Libs.ResourcesLib.userRes("refCommission").value() || 0;
var inviteLink = Libs.ReferralLib.getLink();

var text =
  "*🔥 Exclusive Referral Commission System! 🔥*\n\n" +
  "💰 **Earn 10% on every deposit** made by your referrals! The more you refer, the more you earn! 🚀\n\n" +
  "*🏆 Referral Stats:*\n" +
  "🔹 *Total Referrals:* " + referralCount + "\n" +
  "🔹 *Total Deposits:* " + parseFloat(refDepositTotal).toFixed(2) + " USDT\n" +
  "🔹 *Total Earnings:* " + parseFloat(refCommission).toFixed(2) + " USDT\n\n" +
  "👬 *Your Invite Link:*\n" +
  "🔗 " + inviteLink + "\n\n" +
  "*💎 How to Start?*\n\n" +
  "📢 **1. Share your link** (WhatsApp, Telegram, X, Instagram, YouTube)\n" +
  "💰 **2. Earn 10% commissions** on your referrals’ deposits\n" +
  "💳 **3. Withdraw anytime!**\n\n" +
  "🚀 **More referrals = More earnings!**";

var button = [
  [{ text: "👬 Referral History", callback_data: "/referHistory" }],
  [{ text: "💸 Withdraw Commission", callback_data: "/withdrawCommission" }],
    [ { text: "🏠 Back to Main Menu", callback_data: "/close_menu" } ]
];

Api.sendMessage({
  text: text,
  reply_markup: { inline_keyboard: button },
  parse_mode: "Markdown"
});
