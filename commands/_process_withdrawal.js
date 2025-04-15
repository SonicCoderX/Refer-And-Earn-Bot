/*CMD
  command: /process_withdrawal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /process_withdrawal
  help: Process withdrawal amount input
  need_reply: true
  auto_retry_time:
  folder: Withdraw
CMD*/

let values = AdminPanel.getPanelValues("PANEL");
let minimumWithdraw = parseFloat(values.MINIMUM_WITHDRAW) || 50;
let maximumWithdraw = parseFloat(values.MAXIMUM_WITHDRAW) || 100;
let wallet = User.getProperty("wallet");
let userRes = Libs.ResourcesLib.userRes("balance");
let notificationChannel = values.WITHDRAW_NOTIFICATION_CHANNEL;

let amount = parseFloat(message);

if (!wallet) {
  Bot.sendMessage("❌ You need to set your wallet first using /withdraw");
  return;
}

if (isNaN(amount)) {
  Bot.sendMessage("❌ Invalid input. Please enter a numeric amount.");
  Bot.runCommand("/process_withdrawal");
  return;
}

if (amount < minimumWithdraw || amount > maximumWithdraw) {
  Bot.sendMessage(`❌ You can only withdraw between ${minimumWithdraw} and ${maximumWithdraw}.`);
  Bot.runCommand("/process_withdrawal");
  return;
}

if (amount > userRes.value()) {
  Bot.sendMessage("❌ Insufficient balance. Your current balance is: " + userRes.value());
  return;
}

if (!notificationChannel) {
  Bot.sendMessage("❌ Withdraw notification channel is not configured. Contact support.");
  return;
}

// Deduct balance
userRes.add(-amount);

let requestId = Libs.Random.randomInt(10000000, 99999999);
let date = new Date();
let formattedTime = date.toLocaleString("en-GB", {
  timeZone: "Asia/Kolkata",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true
}).replace(",", " -");

let info = `<b>👤 User:</b> <a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>
<b>💸 Amount:</b> ${amount}
<b>💰 Wallet:</b> <code>${wallet}</code>
<b>🩷 Time:</b> ${formattedTime} (IST)`;

Bot.setProperty(requestId, info, "string");

// Notify Admin
Api.sendMessage({
  chat_id: notificationChannel,
  text: `🔔 <b>New Withdraw Request</b>\n\n${info}`,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "✅ Approve", callback_data: `/approve ${requestId} ${user.telegramid}` },
        { text: "❌ Cancel", callback_data: `/cancel ${requestId} ${user.telegramid}` }
      ]
    ]
  }
});

// Notify User
Bot.sendMessage(`✅ Your withdraw request has been submitted.\n\n${info}`, { parse_mode: "HTML" });
