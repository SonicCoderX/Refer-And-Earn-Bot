/*CMD
  command: /miner5
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

// command: /miner6
if (Bot.getProperty(user.telegramid) === "Ban") {
  Api.sendMessage({ text: "<b>🚫 Access Denied!</b>", parse_mode: "html" });
  return;
}
if (Bot.getProperty("maintenanceStatus") === "On") {
  Api.sendMessage({ text: "<b>🛠️ Maintenance in progress. Try later.</b>", parse_mode: "html" });
  return;
}
var miner6Profit = Libs.ResourcesLib.userRes("miner6Profit");
if (miner6Profit.value() >= 120) { // 120 days cycle for VIP 5
  Api.sendMessage({ text: "<b>⚠️ Your BTC/USDT Arbitrade (VIP 5) has expired.</b>", parse_mode: "html" });
  return;
}
var balance = Libs.ResourcesLib.userRes("balance");
var dailyProfit = 360.00;
balance.add(dailyProfit);
miner6Profit.add(1);
var minerProfitBalance = Libs.ResourcesLib.userRes("minerProfitBalance");
minerProfitBalance.add(dailyProfit);
var currentDay = miner6Profit.value();
Api.sendMessage({
  text: "<b>🎉 Profit Added from BTC/USDT Arbitrade (VIP 5)!</b>\n\n" +
        "<b>💰 Amount:</b> <i>" + dailyProfit.toFixed(2) + " USDT</i>\n" +
        "<b>💹 Updated Balance:</b> <i>" + balance.value().toFixed(2) + " USDT</i>\n" +
        "<b>♻️ Profit Cycle:</b> <i>(Day " + currentDay + ")</i>\n\n" +
        "<b>💡 Tip:</b> <i>Enjoy your VIP status! Explore more investment opportunities for even more rewards 💼</i>",
  parse_mode: "html"
});
Bot.run({ command: "/miner5", run_after: 86400 });
