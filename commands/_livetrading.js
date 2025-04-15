/*CMD
  command: /livetrading
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

if (params && params === "goBack") {
  // Delete the current message
  Api.deleteMessage({
    chat_id: chat.id,
    message_id: request.message.message_id
  });
  // Then navigate to /mainMenu
  Bot.runCommand("/mainMenu");
  return;
}

// Helper function to generate a random float between min and max
function getRandomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

// Current date/time for the dashboard header
let updateTime = new Date().toLocaleString();

// Start building our HTML message
let message = "<b>### Live Trades Dashboard</b>\n\n";
message += "⭐ Latest Update: " + updateTime + " ⭐\n\n";
message += "---\n\n";
message += "🔄 You dont Have Active Trade Positions 🔄\n\n";
message += "---\n\n";

/*
  For each crypto:
    1) Convert from coin to USDT (CurrencyQuote.convert).
    2) Calculate Entry (4% less), Target (5% more), SL (10% less).
    3) Generate random Unrealised PnL and Potential Gain.
    4) Append to 'message' in bold (HTML).
*/

// 1) XRPUSDT
let xrpPrice = CurrencyQuote.convert({ from: "XRP", to: "USDT", amount: 1 });
let xrpEntry = (xrpPrice * 0.96).toFixed(2);
let xrpTarget = (xrpPrice * 1.05).toFixed(2);
let xrpSL = (xrpPrice * 0.90).toFixed(2);
let xrpPnL = getRandomNumber(237, 340);
let xrpGain = getRandomNumber(250.7, 320);

message += "<b>📊 XRPUSDT Trade Details</b>\n";
message += "📈 Position: <b>Buy</b>\n";
message += "🏦 Leverage: <b>5x</b>\n";
message += "✅ Entry: <b>$" + xrpEntry + "</b>\n";
message += "⏩ Mark Price: <b>$" + xrpPrice.toFixed(2) + "</b>\n";
message += "🎯 Target: <b>$" + xrpTarget + "</b>\n";
message += "⛔️ SL: <b>$" + xrpSL + "</b>\n";
message += "💰 Unrealised PnL: <b>$" + xrpPnL + "</b>\n";
message += "💹 Potential Gain: <b>" + xrpGain + "%</b>\n\n";
message += "🔔 <b>Tip:</b> XRP has shown resilience in past market dips, potentially a good buy at current levels!\n\n";
message += "---\n\n";

// 2) BNBUSDT
let bnbPrice = CurrencyQuote.convert({ from: "BNB", to: "USDT", amount: 1 });
let bnbEntry = (bnbPrice * 0.96).toFixed(2);
let bnbTarget = (bnbPrice * 1.05).toFixed(2);
let bnbSL = (bnbPrice * 0.90).toFixed(2);
let bnbPnL = getRandomNumber(1250, 1340);
let bnbGain = getRandomNumber(450.7, 480);

message += "<b>📊 BNBUSDT Trade Details</b>\n";
message += "📈 Position: <b>Buy</b>\n";
message += "🏦 Leverage: <b>5x</b>\n";
message += "✅ Entry: <b>$" + bnbEntry + "</b>\n";
message += "⏩ Mark Price: <b>$" + bnbPrice.toFixed(2) + "</b>\n";
message += "🎯 Target: <b>$" + bnbTarget + "</b>\n";
message += "⛔️ SL: <b>$" + bnbSL + "</b>\n";
message += "💰 Unrealised PnL: <b>$" + bnbPnL + "</b>\n";
message += "💹 Potential Gain: <b>" + bnbGain + "%</b>\n\n";
message += "🔔 <b>Tip:</b> BNB has shown resilience in past market dips, potentially a good buy at current levels!\n\n";
message += "---\n\n";

// 3) ETHUSDT
let ethPrice = CurrencyQuote.convert({ from: "ETH", to: "USDT", amount: 1 });
let ethEntry = (ethPrice * 0.96).toFixed(2);
let ethTarget = (ethPrice * 1.05).toFixed(2);
let ethSL = (ethPrice * 0.90).toFixed(2);
let ethPnL = getRandomNumber(2030, 2210);
let ethGain = getRandomNumber(480, 550.7);

message += "<b>📊 ETHUSDT Trade Details</b>\n";
message += "📈 Position: <b>Buy</b>\n";
message += "🏦 Leverage: <b>5x</b>\n";
message += "✅ Entry: <b>$" + ethEntry + "</b>\n";
message += "⏩ Mark Price: <b>$" + ethPrice.toFixed(2) + "</b>\n";
message += "🎯 Target: <b>$" + ethTarget + "</b>\n";
message += "⛔️ SL: <b>$" + ethSL + "</b>\n";
message += "💰 Unrealised PnL: <b>$" + ethPnL + "</b>\n";
message += "💹 Potential Gain: <b>" + ethGain + "%</b>\n\n";
message += "🔔 <b>Tip:</b> Keep an eye on Ethereum's network upgrades, they could boost its value!\n\n";
message += "---\n\n";

// 4) ENAUSDT
let enaPrice = CurrencyQuote.convert({ from: "ENA", to: "USDT", amount: 1 });
let enaEntry = (enaPrice * 0.96).toFixed(2);
let enaTarget = (enaPrice * 1.05).toFixed(2);
let enaSL = (enaPrice * 0.90).toFixed(2);
let enaPnL = getRandomNumber(4030, 4210);
let enaGain = getRandomNumber(750.7, 880);

message += "<b>📊 ENAUSDT Trade Details</b>\n";
message += "📈 Position: <b>Buy</b>\n";
message += "🏦 Leverage: <b>10x</b>\n";
message += "✅ Entry: <b>$" + enaEntry + "</b>\n";
message += "⏩ Mark Price: <b>$" + enaPrice.toFixed(2) + "</b>\n";
message += "🎯 Target: <b>$" + enaTarget + "</b>\n";
message += "⛔️ SL: <b>$" + enaSL + "</b>\n";
message += "💰 Unrealised PnL: <b>$" + enaPnL + "</b>\n";
message += "💹 Potential Gain: <b>" + enaGain + "%</b>\n\n";
message += "🔔 <b>Tip:</b> ENA is less known but keep an eye on its adoption in DeFi!\n\n";
message += "---\n\n";

// 5) BTCUSDT
let btcPrice = CurrencyQuote.convert({ from: "BTC", to: "USDT", amount: 1 });
let btcEntry = (btcPrice * 0.96).toFixed(2);
let btcTarget = (btcPrice * 1.05).toFixed(2);
let btcSL = (btcPrice * 0.90).toFixed(2);
let btcPnL = getRandomNumber(6030, 7210);
let btcGain = getRandomNumber(850.7, 930);

message += "<b>📊 BTCUSDT Trade Details</b>\n";
message += "📈 Position: <b>Buy</b>\n";
message += "🏦 Leverage: <b>25x</b>\n";
message += "✅ Entry: <b>$" + btcEntry + "</b>\n";
message += "⏩ Mark Price: <b>$" + btcPrice.toFixed(2) + "</b>\n";
message += "🎯 Target: <b>$" + btcTarget + "</b>\n";
message += "⛔️ SL: <b>$" + btcSL + "</b>\n";
message += "💰 Unrealised PnL: <b>$" + btcPnL + "</b>\n";
message += "💹 Potential Gain: <b>" + btcGain + "%</b>\n\n";
message += "🔔 <b>Tip:</b> Bitcoin remains the king of crypto; always consider market sentiment!\n\n";
message += "---\n\n";

// Finally, send with an inline button named "◀️ Go To Main Menu"
Bot.sendInlineKeyboard(
  [{ title: "◀️ Go To Main Menu", command: "/close_menu" }],
  message,
  { parse_mode: "HTML" }
);
