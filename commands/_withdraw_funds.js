/*CMD
  command: /withdraw_funds
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER
✅The Minimum withdrawal amount is: $1 USDT
✅No Withdrawal Fee 
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/* Command: 🏧 Withdraw */

// UNCHANGED sections: checks for ban, maintenance, autowithStatus, etc.
// NEW: we display aggregator resource so user knows the max profit they can withdraw

var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>";
  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  var onText = "<i>🛠️ Bot is under maintenance, please come back after some time.</i>";
  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  });
  return;
}

var autowithStatus = Bot.getProperty("autowithStatus");
var withdrawalStatus = Bot.getProperty("withdrawalStatus");
var minimumWithdraw = Bot.getProperty("minimumWithdraw");
const toWithdraw = CurrencyQuote.convert({ from: "USDT", to: "USDT", amount: minimumWithdraw });

// NEW: aggregator resource for total miner profit
var minerProfitBalance = Libs.ResourcesLib.userRes("minerProfitBalance");
var maxProfit = minerProfitBalance.value().toFixed(4);

if (autowithStatus === "Off" && withdrawalStatus === "On") {
  var wallet = User.getProperty("wallet");
  if (wallet === undefined) {
    var undefinedText = "<i>⚠️ Set your wallet first by clicking the button below 👇</i>";
    var button = [[ { text: "🗂️ Set wallet", callback_data: "🗂️ Wallet" } ]];

    Api.sendMessage({
      text: undefinedText,
      reply_markup: { inline_keyboard: button },
      parse_mode: "html"
    });
    return;
  }

  var balance = Libs.ResourcesLib.userRes("balance");
  var currency = "USDT";

  if (balance.value() < minimumWithdraw) {
    var lowText = "<i>⚠️ You need at least</i> <code>" + minimumWithdraw + " " + currency +
                  "</code> ~ $" + toWithdraw.toFixed(4) + "<i> to withdraw.</i>";
    Api.sendMessage({ text: lowText, parse_mode: "html" });
    return;
  }

  // NEW: show aggregator profit
  var text = "Max Withdrawable Miner Profit: <b>" + maxProfit + " USDT</b>\n\n" +
             "*🏧 Send the amount which you want to withdraw.*";
  Bot.sendKeyboard("❌ Cancel", text);
  Bot.runCommand("/withdraw");

} else if (autowithStatus === "On" && withdrawalStatus === "Off") {
  var wallet = User.getProperty("wallet");
  if (wallet === undefined) {
    var undefinedText = "<i>⚠️ Set your wallet first by clicking the button below 👇</i>";
    var button = [[ { text: "🗂️ Set wallet", callback_data: "🗂️ Wallet" } ]];

    Api.sendMessage({
      text: undefinedText,
      reply_markup: { inline_keyboard: button },
      parse_mode: "html"
    });
    return;
  }

  var balance = Libs.ResourcesLib.userRes("balance");
  var currency = "USDT";

  if (balance.value() < minimumWithdraw) {
    var lowText = "<i>⚠️ You need at least</i> <code>" + minimumWithdraw + " " + currency +
                  "</code>  ~ $" + toWithdraw.toFixed(4) + " <i>to withdraw.</i>";
    Api.sendMessage({ text: lowText, parse_mode: "html" });
    return;
  }

  // NEW: aggregator profit
  var text = "Max Withdrawable Miner Profit: <b>" + maxProfit + " USDT</b>\n\n" +
             "*🏧 Send the amount which you want to withdraw.*";
  Bot.sendKeyboard("❌ Cancel", text);
  Bot.runCommand("/withdraw");
}
