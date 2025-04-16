/*CMD
  command: /miner2
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

// command: /miner3
if (Bot.getProperty(user.telegramid) === "Ban") {
  Api.sendMessage({ text: "<b>🚫 Access Denied!</b>", parse_mode: "html" });
  return;
}
if (Bot.getProperty("maintenanceStatus") === "On") {
  Api.sendMessage({ text: "<b>🛠️ Maintenance in progress. Try later.</b>", parse_mode: "html" });
  return;
}
var miner3Profit = Libs.ResourcesLib.userRes("miner3Profit");
if (miner3Profit.value() >= 120) { // 120 days cycle for VIP 2
  Api.sendMessage({ text: "<b>⚠️ Your BNB/USDT Arbitrade (VIP 2) has expired.</b>", parse_mode: "html" });
  return;
}
var balance = Libs.ResourcesLib.userRes("balance");
var dailyProfit = 3.60;
balance.add(dailyProfit);
miner3Profit.add(1);
var minerProfitBalance = Libs.ResourcesLib.userRes("minerProfitBalance");
minerProfitBalance.add(dailyProfit);
var currentDay = miner3Profit.value();
Api.sendMessage({
  text: "<b>🎉 Profit Added from BNB/USDT Arbitrade (VIP 2)!</b>\n\n" +
        "<b>💰 Amount:</b> <i>" + dailyProfit.toFixed(2) + " USDT</i>\n" +
        "<b>💹 Updated Balance:</b> <i>" + balance.value().toFixed(2) + " USDT</i>\n" +
        "<b>♻️ Profit Cycle:</b> <i>(Day " + currentDay + ")</i>\n\n" +
        "<b>💡 Tip:</b> <i>Upgrade to a higher VIP plan for even more rewards! 🚀</i>",
  parse_mode: "html"
});
Bot.run({ command: "/miner2", run_after: 86400 });
