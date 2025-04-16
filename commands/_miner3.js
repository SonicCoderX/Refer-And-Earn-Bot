/*CMD
  command: /miner3
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

// command: /miner4
if (Bot.getProperty(user.telegramid) === "Ban") {
  Api.sendMessage({ text: "<b>🚫 Access Denied!</b>", parse_mode: "html" });
  return;
}
if (Bot.getProperty("maintenanceStatus") === "On") {
  Api.sendMessage({ text: "<b>🛠️ Maintenance in progress. Try later.</b>", parse_mode: "html" });
  return;
}
var miner4Profit = Libs.ResourcesLib.userRes("miner4Profit");
if (miner4Profit.value() >= 120) { // 120 days cycle for VIP 3
  Api.sendMessage({ text: "<b>⚠️ Your ETH/USDT Arbitrade (VIP 3) has expired.</b>", parse_mode: "html" });
  return;
}
var balance = Libs.ResourcesLib.userRes("balance");
var dailyProfit = 13.50;
balance.add(dailyProfit);
miner4Profit.add(1);
var minerProfitBalance = Libs.ResourcesLib.userRes("minerProfitBalance");
minerProfitBalance.add(dailyProfit);
var currentDay = miner4Profit.value();
Api.sendMessage({
  text: "<b>🎉 Profit Added from ETH/USDT Arbitrade (VIP 3)!</b>\n\n" +
        "<b>💰 Amount:</b> <i>" + dailyProfit.toFixed(2) + " USDT</i>\n" +
        "<b>💹 Updated Balance:</b> <i>" + balance.value().toFixed(2) + " USDT</i>\n" +
        "<b>♻️ Profit Cycle:</b> <i>(Day " + currentDay + ")</i>\n\n" +
        "<b>💡 Tip:</b> <i>Upgrade to a higher VIP plan for even more rewards! 🚀</i>",
  parse_mode: "html"
});
Bot.run({ command: "/miner3", run_after: 86400 });
