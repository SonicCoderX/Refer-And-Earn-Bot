/*CMD
  command: /confirm2
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

/* ========================================================= */
/*                Modified /confirm2 Command             */
/* ========================================================= */

// This command is triggered as a callback from the OxaPay API after initiating a withdrawal.
// It handles confirmation and finalization of the withdrawal process.

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

// Ensure the API callback options exist
if (!options) return;

// Check if withdrawals are stopped for this user
if (Bot.getProperty("withdrawalsStopped_" + user.telegramid, false)) {
  Api.sendMessage({ text: "<b>Withdrawal Limit Expired. Please contact support.</b>", parse_mode: "html" });
  return;
}

// Retrieve withdrawal details from the callback options
var wallet = User.getProperty("wallet");
var amount = options.amount;        // Withdrawal amount in USDT
var currency = options.currency;    // Expected currency: "USDT"
var status = options.status;        // Status can be "Confirming" or "Complete"
var userName = user.first_name;
var botLink = "@" + bot.name;
var alertsChannel = Bot.getProperty("alertsChannel");
var admin = Bot.getProperty("admin");
var balance = Libs.ResourcesLib.userRes("balance");
var totalWithdrawn = Libs.ResourcesLib.anotherChatRes("totalWithdrawn", "global");
var userID = user.telegramid;
var username = (user.username) ? "@" + user.username : user.first_name;
var date = new Date().toLocaleString("en-US", { timeZone: "Asia/kolkata" });

// Process the withdrawal based on the status from the API callback
if (status === "Confirming") {
  // Inform the user that the withdrawal is processing
  var confirmingText = "<b>⁉️ Your withdrawal is processing....\n\n💸 Amount:</b> <code>" +
      amount + " " + currency + "</code>\n<b>🗂️ Address:</b> <code>" + wallet + "</code>";
  Api.sendMessage({ text: confirmingText, parse_mode: "html" });
} else if (status === "Complete") {
  // Finalize the withdrawal: update balances, record history, and notify the user
  balance.remove(parseFloat(amount));
  totalWithdrawn.add(parseFloat(amount));
  
  // Update the user's total withdrawn amount property
  var currentWithdrawn = Number(Bot.getProperty("withdrawn_" + user.telegramid) || 0);
  Bot.setProperty("withdrawn_" + user.telegramid, currentWithdrawn + parseFloat(amount), "number");
  
  // Update withdrawal history for record-keeping
  var withdrawalHistory = Bot.getProperty("withdrawalHistory_" + user.telegramid, []);
  var newWithdrawalRecord = { 
    amount: amount, 
    date: date, 
    wallet: wallet 
  };
  withdrawalHistory.push(newWithdrawalRecord);
  Bot.setProperty("withdrawalHistory_" + user.telegramid, withdrawalHistory, "json");
  
  // Notify the user of a successful withdrawal
  var completeText = "<b>✅ New withdrawal successful\n\n🧒 User: " + userName +
      "\n💸 Amount:</b> <code>" + amount + " " + currency +
      "</code>\n<b>🗂️ Address:</b> <code>" + wallet +
      "</code>\n\n<b>✔️ Bot: " + botLink + "</b>";
  Api.sendMessage({ text: completeText, parse_mode: "html" });
  Bot.runCommand("/mainMenu");
  Api.sendMessage({ chat_id: alertsChannel, text: completeText, parse_mode: "html" });
  
  // Send a basic admin notification with withdrawal info
  var currentBalance = balance.value().toFixed(4);
  var adminText = "<b>✅ New withdrawal successful!</b>\n\n" +
      "🧒 <b>User:</b> " + userName + "\n" +
      "🆔 <b>User ID:</b> <code>" + userID + "</code>\n" +
      "👉 <b>Username:</b> " + username + "\n" +
      "💸 <b>Withdrawn Amount:</b> <code>" + amount + " " + currency + "</code>\n" +
      "⏰ <b>Date & Time:</b> " + date + "\n" +
      "🏦 <b>Current Balance after withdrawal:</b> <code>" + currentBalance + " USDT</code>\n\n" +
      "Keep monitoring withdrawals! 🚀";
  Api.sendMessage({ chat_id: admin, text: adminText, parse_mode: "html" });
}
