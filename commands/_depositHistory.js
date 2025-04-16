/*CMD
  command: /depositHistory
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
  
// Retrieve deposit history (or fallback if empty)  
var depositHistory = User.getProperty("depositHistory") || "";  
if (depositHistory === "") {  
  depositHistory = "No deposit history available.";  
}  
var text = "<b>➕ Your deposit history :-</b>\n<i>" + depositHistory + "</i>";  
  
var button = [  
  [  
    { text: "🔙 Back", callback_data: "/close_minning" }  
  ]  
];  
  
Api.sendMessage({  
  text: text,  
  reply_markup: { inline_keyboard: button },  
  parse_mode: "html"  
});
