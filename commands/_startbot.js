/*CMD
  command: /startbot
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

/* Command: /start */
function startCommand() {
  // We'll store the initial text in a variable
  let welcomeText = "<b>Welcome to Pro Trading Bot</b>\n\n" +
                    "Your all-in-one solution for live coin data, exchange rates, and more!\n\n" +
                    "Select an option below to get started.";

  // Inline buttons
  let buttons = [
    [{ text: "💰 CoinGecko Live Data", callback_data: "/coingecko" }],
    [{ text: "💱 Exchange Rates", callback_data: "/getExchangeRates" }]
  ];

  Api.sendMessage({
    text: welcomeText,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: buttons
    }
  });
}

startCommand();
