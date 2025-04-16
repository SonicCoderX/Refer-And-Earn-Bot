/*CMD
  command: /handleExchangeRates
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

/* Command: /handleExchangeRates */
let args = params.split(" ");
let chatID = args[0];
let messageID = args[1];

if (request.success) {
  try {
    let apiData = JSON.parse(request.body);

    // Extract base and rates
    let baseCurrency = apiData.base;
    let rates = apiData.rates;

    let msg = "<b>💱 Exchange Rates (" + baseCurrency + ")</b>\n\n";
    msg += "EUR: <b>" + (rates.EUR || "N/A") + "</b>\n";
    msg += "GBP: <b>" + (rates.GBP || "N/A") + "</b>\n";
    msg += "JPY: <b>" + (rates.JPY || "N/A") + "</b>\n";
    msg += "INR: <b>" + (rates.INR || "N/A") + "</b>\n\n";
    msg += "Select another option or go back.";

    // Build inline keyboard
    let buttons = [
      [{ text: "🔄 Refresh", callback_data: "/getExchangeRates" }],
      [{ text: "🔙 Back", callback_data: "/backToMenu" }]
    ];

    Api.editMessageText({
      chat_id: chatID,
      message_id: messageID,
      text: msg,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: buttons
      }
    });
  } catch (err) {
    Api.editMessageText({
      chat_id: chatID,
      message_id: messageID,
      text: "❌ Error parsing exchange rates. Please try again later."
    });
  }
} else {
  Api.editMessageText({
    chat_id: chatID,
    message_id: messageID,
    text: "❌ Failed to fetch exchange rates. Please try again later."
  });
}
