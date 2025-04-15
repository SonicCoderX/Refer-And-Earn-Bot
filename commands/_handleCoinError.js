/*CMD
  command: /handleCoinError
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

/* Command: /handleCoinError */
let args = params.split(" ");
let chatID = args[0];
let messageID = args[1];

// We edit the message to show an error
Api.editMessageText({
  chat_id: chatID,
  message_id: messageID,
  text: "❌ Failed to fetch coin data. Please try again later."
});
