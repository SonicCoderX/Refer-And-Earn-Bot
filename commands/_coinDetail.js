/*CMD
  command: /coinDetail
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

/* Command: /coinDetail */
let paramsArray = params.split(" ");
let coinId = paramsArray[0]; // e.g. "btc", "ethereum", "ripple", "bnb"

// If triggered by inline button, we have to edit the old message
if (request.data) {
  // We'll store the old chat_id and message_id to edit
  var chatID = request.message.chat.id;
  var messageID = request.message.message_id;

  // Make an HTTP request to CoinGecko
  HTTP.get({
    url: "https://api.coingecko.com/api/v3/coins/" + coinId + "?localization=false&sparkline=false",
    success: "/handleCoinData " + chatID + " " + messageID + " " + coinId,
    error: "/handleCoinError " + chatID + " " + messageID
  });
} else {
  // If run manually, you can handle it similarly or just do nothing
  Bot.sendMessage("Please select a coin from the inline menu!");
}
