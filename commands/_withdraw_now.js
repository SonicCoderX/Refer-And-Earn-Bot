/*CMD
  command: /withdraw_now
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

let values = AdminPanel.getPanelValues("PANEL");
let minimum = values.MINIMUM_WITHDRAW || 50;
let maximum = values.MAXIMUM_WITHDRAW || 100;

Bot.sendMessage(
  `💸 <b>Enter the amount you want to withdraw.</b>\n\n` +
  `<b>• Example:</b> <code>100</code>\n` +
  `<b>• Minimum:</b> <code>${minimum}</code>\n<b>• Maximum:</b> <code>${maximum}</code>\n\n`,
  { parse_mode: "HTML" }
);

Bot.runCommand("/process_withdrawal");
