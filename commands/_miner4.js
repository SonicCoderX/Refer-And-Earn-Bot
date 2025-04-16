/*CMD
  command: /miner4
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

// command: /miner5
if (Bot.getProperty(user.telegramid) === "Ban") {
  Api.sendMessage({ text: "<b>🚫 Access Denied!</b>", parse_mode: "html" });
  return;
}
if (Bot.getProperty("maintenanceStatus") === "On") {
  Api.sendMessage({ text: "<b>🛠️ Maintenance in progress. Try later.</b>", parse_mode: "html" });
  return;
}
var miner5Profit = Libs.ResourcesLib.userRes("miner5Profit");
if (miner5Profit.value() >= 120) { // 120 days cycle for VIP 4
  Api.sendMessage({ text: "<b>⚠️ Your ENA/USDT Arbitrade (VIP 4) has expired.</b>", parse_mode: "html" });
  return;
}
var balance = Libs.ResourcesLib.userRes("balance");
var dailyProfit = 60.00;
balance.add(dailyProfit);
miner5Profit.add(1);
var minerProfitBalance = Libs.ResourcesLib.userRes("minerProfitBalance");
minerProfitBalance.add(dailyProfit);
var currentDay = miner5Profit.value();
Api.sendMessage({
  text: "<b>🎉 Profit Added from ENA/USDT Arbitrade (VIP 4)!</b>\n\n" +
        "<b>💰 Amount:</b> <i>" + dailyProfit.toFixed(2) + " USDT</i>\n" +
        "<b>💹 Updated Balance:</b> <i>" + balance.value().toFixed(2) + " USDT</i>\n" +
        "<b>♻️ Profit Cycle:</b> <i>(Day " + currentDay + ")</i>\n\n" +
        "<b>💡 Tip:</b> <i>Upgrade to a higher VIP plan for even more rewards! 🚀</i>",
  parse_mode: "html"
});
Bot.run({ command: "/miner4", run_after: 86400 });
