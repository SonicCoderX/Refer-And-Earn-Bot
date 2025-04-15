/*CMD
  command: /referHistory
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
  Api.sendMessage({ text: "<i>🛠️ Bot is under maintenance, please come back after some time.</i>", parse_mode: "html" });
  return;
}

var refHistoryKey = "referralHistory_" + user.telegramid;
var refHistory = Bot.getProperty(refHistoryKey) || "";
if (refHistory === "") {
  refHistory = "<i>No referral transactions available.</i>";
}

var text = "<b>👬 Your Top 10 Referral Transactions:</b>\n" + refHistory;
var button = [
  [
    { text: "🔙 Back", callback_data: "🧑‍🤝‍🧑 Refer" }
  ]
];

Api.sendMessage({
  text: text,
  reply_markup: { inline_keyboard: button },
  parse_mode: "html"
});
