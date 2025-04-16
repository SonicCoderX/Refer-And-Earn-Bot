/*CMD
  command: /coingecko
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

/* Command: /coingecko */
if (request.data) {
  // If triggered by inline button, we edit the previous message
  Api.editMessageText({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id,
    text: "Select a coin to view live data:",
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "BTC", callback_data: "/coinDetail btc" },
          { text: "ETH", callback_data: "/coinDetail ethereum" }
        ],
        [
          { text: "XRP", callback_data: "/coinDetail ripple" },
          { text: "BNB", callback_data: "/coinDetail bnb" }
        ],
        [
          { text: "🔙 Back", callback_data: "/backToMenu" }
        ]
      ]
    }
  });
} else {
  // If run manually, just run the same logic:
  Bot.runCommand("/coingecko");
}
