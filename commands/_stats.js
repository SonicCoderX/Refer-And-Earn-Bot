/*CMD
  command: /stats
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

var botLink = "@" + bot.name;
var photo = "https://ibb.co/31HjNRT";
var currency = "USDT";

// Dynamically generated statistics
var totalUsers = Libs.Random.randomInt(700, 800); // Example: between 700 and 800
var totalDeposits = Libs.Random.randomInt(7000000, 8000000);
var totalWithdrawn = Libs.Random.randomInt(3000000, 4000000);
var totalReferralPayout = Libs.Random.randomInt(15000, 20000);

var runningTrades = Libs.Random.randomInt(1230, 1340); // Random between 1,230 and 1,340
var accuracy = 95;
var profitableTrades = Libs.Random.randomInt(1200, 1300);
var losingTrades = Libs.Random.randomInt(60, 80);
var overallProfit = Libs.Random.randomInt(120000, 130000);

// Construct the caption using HTML formatting
var caption =
  "<b>🤖 Bot Status:</b>\n" +
  "✅ Paying | ✅ Auto Withdrawals\n\n" +
  "<b>📊 Users & Investments:</b>\n" +
  "👥 Active Users: " + totalUsers + "\n" +
  "📥 Total Deposits: " + totalDeposits.toLocaleString() + " " + currency + "\n" +
  "📤 Total Withdrawn: " + totalWithdrawn.toLocaleString() + " " + currency + "\n\n" +
  "<b>📈 Trading Performance:</b>\n" +
  "🔄 Live Trades: " + runningTrades + "\n" +
  "🎯 Accuracy: " + accuracy + "%\n" +
  "💹 Profitable: " + profitableTrades + "\n" +
  "📉 Losses: " + losingTrades + "\n\n" +
  "💰 24H Profit: " + overallProfit.toLocaleString() + " " + currency;

// Create an inline keyboard with buttons for live trades, refresh, and back to main menu
var keyboard = {
  inline_keyboard: [
    [{ text: "📈 Live Trades", callback_data: "/close_Trade" }],
    [{ text: "🔙 Back To Main Menu", callback_data: "/close_menu" }]
  ]
};

Api.sendPhoto({
  photo: photo,
  caption: caption,
  parse_mode: "html",
  reply_markup: JSON.stringify(keyboard)
});
