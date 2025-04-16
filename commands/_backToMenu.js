/*CMD
  command: /backToMenu
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

/* Command: /backToMenu */
if (request.data) {
  let chatID = request.message.chat.id;
  let messageID = request.message.message_id;

  let menuText = "<b>Pro Trading Bot</b>\n\n" +
                 "Select an option below:";

  let buttons = [
    [{ text: "💰 CoinGecko Live Data", callback_data: "/coingecko" }],
    [{ text: "💱 Exchange Rates", callback_data: "/getExchangeRates" }]
  ];

  Api.editMessageText({
    chat_id: chatID,
    message_id: messageID,
    text: menuText,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: buttons
    }
  });
} else {
  // If run manually, just run /start
  Bot.runCommand("/startbot");
}
