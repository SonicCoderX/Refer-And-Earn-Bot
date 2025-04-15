/*CMD
  command: /confirm1
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

if (request.message) {
  var chatID = request.message.chat_id;
  var messageID = request.message.message_id;
  Api.deleteMessage({ chat_id: chatID, message_id: messageID });
}

var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>";
  Api.sendMessage({ text: banText, parse_mode: "html" });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  var onText = "<i>🛠️ Bot is under maintenance, please come back after some time.</i>";
  Api.sendMessage({ text: onText, parse_mode: "html" });
  return;
}

var userId = user.telegramid;
var wallet = User.getProperty("wallet");
var params = request.data.split(" ");
var amount = parseFloat(params[1]);

// Use USDT exclusively
let options = {
  url: "api/send",
  fields: {
    amount: amount,
    currency: "USDT",
    address: wallet,
    onCallback: "/confirm2"
  },
  onSuccess: "/confirm3 " + amount + " USDT"
};

Libs.OxaPayLib.apiCall(options);
