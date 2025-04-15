/*CMD
  command: /getExchangeRates
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

/* Command: /getExchangeRates */
if (request.data) {
  // If triggered by inline button, we store chat_id & message_id for editing
  let chatID = request.message.chat.id;
  let messageID = request.message.message_id;

  // We can show a "loading..." message by editing
  Api.editMessageText({
    chat_id: chatID,
    message_id: messageID,
    text: "Fetching latest exchange rates...",
    parse_mode: "html"
  });

  // Make an HTTP request
  HTTP.get({
    url: "https://api.exchangerate-api.com/v4/latest/USD",
    success: "/handleExchangeRates " + chatID + " " + messageID,
    error: "/handleExchangeRatesError " + chatID + " " + messageID
  });
} else {
  // If user runs it manually
  Bot.sendMessage("Please use the inline button to fetch exchange rates!");
}
