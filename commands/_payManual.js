/*CMD
  command: /payManual
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

/* Command: /payManual */

// This command runs after the admin enters their custom message for a manual withdrawal.

var customMessage = message;               // The admin's custom message
var targetUserId = Bot.getProperty("payTargetUserId");
var amount = Bot.getProperty("payTargetAmount");

if (!targetUserId || isNaN(amount)) {
  Api.sendMessage({ text: "⚠️ Error: Missing payment parameters.", parse_mode: "html" });
  return;
}

// Retrieve any pending data if it exists (for the user's wallet)
var pendingKey = "pendingWithdrawal_" + targetUserId;
var pendingData = Bot.getProperty(pendingKey);
var walletAddress = "Unknown";
if (pendingData && pendingData.wallet) {
  walletAddress = pendingData.wallet;
}

// If you want to reset referral commissions for this user, do so here:
var targetRefCommission = Libs.ResourcesLib.userRes("refCommission", targetUserId);
targetRefCommission.set(0);

// Add a record to the user’s withdrawalHistory
var histKey = "withdrawalHistory_" + targetUserId;
var withdrawalHistory = Bot.getProperty(histKey, []);
if (!Array.isArray(withdrawalHistory)) {
  withdrawalHistory = [];
}
var newRecord = {
  amount: amount.toFixed(2),
  date: new Date().toLocaleString("en-US", { timeZone: "Asia/kolkata" }),
  wallet: walletAddress
  // if it's referral, set referral: true
};
withdrawalHistory.push(newRecord);
Bot.setProperty(histKey, withdrawalHistory, "json");

// Clear the pending withdrawal
Bot.setProperty(pendingKey, "", "string");

// Notify the user
Bot.sendMessageToChatWithId(
  targetUserId,
  "✅ <b>Your withdrawal has been processed successfully.</b>\n\n" +
    "🎉 Withdrawn Amount: <code>" + amount.toFixed(2) + " USDT</code>\n" +
    "💸 Funds have been transferred to your wallet.\n\n" +
    "💬  Message: " + customMessage + "\n\n" +
    "🚀 Thank you for trading and happy earning!",
  { parse_mode: "html" }
);

// Notify admin
Api.sendMessage({
  text: "✅ Payment processed successfully for user <code>" + targetUserId + "</code>.\n" +
        "Withdrawn Amount: <code>" + amount.toFixed(2) + " USDT</code>.",
  parse_mode: "html"
});

// Clear stored parameters
Bot.setProperty("payTargetUserId", "", "string");
Bot.setProperty("payTargetAmount", "", "float");
