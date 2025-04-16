/*CMD
  command: /handleExchangeRatesError
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

/* Command: /handleExchangeRatesError */
let args = params.split(" ");
let chatID = args[0];
let messageID = args[1];

Api.editMessageText({
  chat_id: chatID,
  message_id: messageID,
  text: "❌ Exchange rates API error. Please try again later."
});
