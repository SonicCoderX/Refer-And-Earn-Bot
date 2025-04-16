/*CMD
  command: /handleCoinData
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

/* Command: /handleCoinData */
let args = params.split(" ");
let chatID = args[0];
let messageID = args[1];
let coinId = args[2];

// Parse the CoinGecko JSON
try {
  let apiData = JSON.parse(content);

  // Extract relevant fields
  let coinName = apiData.name;
  let coinSymbol = apiData.symbol.toUpperCase();
  let currentPrice = apiData.market_data.current_price.usd;
  let priceChange24h = apiData.market_data.price_change_percentage_24h;
  let marketCap = apiData.market_data.market_cap.usd;

  // Build the text
  let detailText = "<b>" + coinName + " (" + coinSymbol + ")</b>\n\n";
  detailText += "💰 <b>Price (USD):</b> $" + currentPrice + "\n";
  detailText += "📉 <b>24h Change:</b> " + priceChange24h.toFixed(2) + "%\n";
  detailText += "🏦 <b>Market Cap:</b> $" + marketCap.toLocaleString() + "\n\n";
  detailText += "Powered by <b>CoinGecko</b> API.\n\n";
  detailText += "Select another coin or go back.";

  // Build the inline buttons
  let buttons = [
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
  ];

  // Edit the existing message
  Api.editMessageText({
    chat_id: chatID,
    message_id: messageID,
    text: detailText,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: buttons
    }
  });

} catch (e) {
  // If JSON parse fails
  Bot.sendMessage("❌ Error parsing coin data. Please try again later.");
}
