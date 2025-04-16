/*CMD
  command: /withdraw
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

/* ========================================================= */
/*                   // Command: /withdraw                    */
/* ========================================================= */

// Basic ban and maintenance checks remain unchanged
var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  Api.sendMessage({ text: "<i>🚫 You're banned.</i>", parse_mode: "html" });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  Api.sendMessage({ text: "<i>🛠️ Bot is under maintenance, please come back after some time.</i>", parse_mode: "html" });
  return;
}

var wallet = User.getProperty("wallet");
if (!wallet || !/^0x[a-fA-F0-9]{40}$/.test(wallet)) {
  Api.sendMessage({
    text: "<i>⚠️ Invalid or missing USDT (BEP20) wallet address.</i>",
    parse_mode: "html"
  });
  return;
}

var balance = Libs.ResourcesLib.userRes("balance");
var minerProfitBalance = Libs.ResourcesLib.userRes("minerProfitBalance"); // aggregator

var minimumWithdraw = parseFloat(Bot.getProperty("minimumWithdraw"));
var maximumWithdraw = parseFloat(Bot.getProperty("maximumWithdraw"));

var requestedAmount = parseFloat(message);
if (isNaN(requestedAmount)) {
  Api.sendMessage({ text: "<i>⚠️ Please enter a valid withdrawal amount.</i>", parse_mode: "html" });
  return;
}

// Check minimum and maximum withdrawal limits
if (requestedAmount < minimumWithdraw) {
  Api.sendMessage({
    text: `<i>⚠️ Minimum withdraw is:</i> <code>${minimumWithdraw} USDT</code>`,
    parse_mode: "html"
  });
  Bot.runCommand("/mainMenu");
  return;
}
if (requestedAmount > maximumWithdraw) {
  Api.sendMessage({
    text: `<i>⚠️ Maximum withdraw is:</i> <code>${maximumWithdraw} USDT</code>`,
    parse_mode: "html"
  });
  Bot.runCommand("/mainMenu");
  return;
}

// Global profit-only and main balance checks
if (requestedAmount > minerProfitBalance.value()) {
  Api.sendMessage({
    text: `⚠️ You can withdraw a maximum of ~${minerProfitBalance.value().toFixed(4)} USDT (miner profit only).`,
    parse_mode: "html"
  });
  Bot.runCommand("/mainMenu");
  return;
}
if (requestedAmount > balance.value()) {
  Api.sendMessage({
    text: "<i>⚠️ The requested amount is more than your current balance.</i>",
    parse_mode: "html"
  });
  Bot.runCommand("/mainMenu");
  return;
}

// Now proceed with immediate deduction from balances (without miner profit limits)
balance.remove(requestedAmount);
minerProfitBalance.remove(requestedAmount);

// Store a pending record in case we need to restore on cancel/refund
var pendingKey = "pendingWithdrawal_" + user.telegramid;
var pendingData = {
  amount: requestedAmount,
  wallet: wallet,
  deducted: true
};
Bot.setProperty(pendingKey, pendingData, "json");

// Calculate fee (if any) and net amount
var fee = 0.0; // adjust fee if needed (e.g., 0.25 USDT)
var netAmount = requestedAmount - fee;
var text = `<b>⁉️ Withdrawal Confirmation</b>\n\n` +
    `<b>Requested Amount:</b> <code>${requestedAmount} USDT</code>\n` +
    `<b>Withdrawal Fee:</b> <code>${fee} USDT</code>\n` +
    `<b>Amount to Receive:</b> <code>${netAmount.toFixed(4)} USDT</code>\n` +
    `<b>Wallet:</b> <code>${wallet}</code>\n\n` +
    `<b>✅ Click the button below to confirm or cancel 👇</b>`;
var buttons = [
  [
    { text: "✅ Confirm", callback_data: `/confirm ${requestedAmount}` },
    { text: "❌ Cancel",  callback_data: `/cancel ${requestedAmount}` }
  ]
];

Api.sendMessage({
  text: text,
  parse_mode: "html",
  reply_markup: { inline_keyboard: buttons }
});
