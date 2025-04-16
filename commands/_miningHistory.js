/*CMD
  command: /miningHistory
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

// command: miningHistory
if (request.data) {
var chatID = request.message.chat_id;
var messageID = request.message.message_id;
Api.deleteMessage({ chat_id: chatID, message_id: messageID });
}

var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
Api.sendMessage({
text: "<i>🚫 You're banned.</i>",
parse_mode: "html"
});
return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
Api.sendMessage({
text: "<i>🛠️ Bot is under maintenance, please come back after some time.</i>",
parse_mode: "html"
});
return;
}

var historyString = User.getProperty("miningHistory");
var history = [];
if (historyString) {
try {
history = JSON.parse(historyString);
} catch (e) {
history = [];
}
}

if (history.length === 0) {
var noHistoryText = "<b>⛏️ Mining History</b>\n\n<i>No active VIP plans found. Please purchase VIP plans to see your mining history.</i>";
Api.sendMessage({ text: noHistoryText, parse_mode: "html" });
return;
}

var now = Date.now();
var text = "<b>⛏️ Your Mining History:</b>\n\n";
for (var i = 0; i < history.length; i++) {
var record = history[i];
var purchaseDate = new Date(record.purchaseTimestamp).toLocaleString();
var elapsedDays = Math.floor((now - record.purchaseTimestamp) / 86400000);
if (elapsedDays > record.expirationDays) {
elapsedDays = record.expirationDays;
}
var profitReceived = (elapsedDays * record.dailyProfit).toFixed(2);
var remainingDays = record.expirationDays - elapsedDays;
text += "<b>🔹 Plan:</b> " + record.planName + "\n" +
"<b>📆 Purchased:</b> " + purchaseDate + "\n" +
"<b>💰 Total Profit Earned:</b> " + profitReceived + " USDT\n" +
"<b>♻️ Progress:</b> " + elapsedDays + " of " + record.expirationDays + " days\n" +
"<b>⏳ Time Remaining:</b> " + (remainingDays > 0 ? remainingDays + " days left" : "Expired") + "\n\n";
}

var button = [
[{ text: "🔙 Back", callback_data: "/close_minning" }]
];

Api.sendMessage({
text: text,
reply_markup: { inline_keyboard: button },
parse_mode: "html"
});


