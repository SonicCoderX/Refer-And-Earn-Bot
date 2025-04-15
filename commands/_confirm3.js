/*CMD
  command: /confirm3
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
/*                Modified /confirm3 Command             */
/* ========================================================= */

// This command handles the final callback from the payment API.
// It informs the user about the transaction status and provides the track ID if available.

var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>";
  Api.sendMessage({ text: banText, parse_mode: "html" });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  var onText = "<i>🛠️ Bot is under maintenance, please come back after some time.</i>";
  Api.sendMessage({ text: onText, parse_mode: "html" });
  return;
}

// Ensure that the callback options exist before proceeding
if (!options) return;

// Delete the triggering message to keep the chat clean
if (request.data) {
  Api.deleteMessage({
    chat_id: request.message.chat_id,
    message_id: request.message.message_id
  });
}

// Retrieve details from the API callback
var result = options.result;
var amount = params // Use the amount from options (in USDT)
var trackID = options.trackId;
var failed = options.message;

// Process the API callback result
if (result === 100) {
  // Notify the user that the withdrawal is submitting along with the track ID
  var processingText = "<b>⁉️ Your withdrawal of</b> <code>" +
      amount + "</code> <b>is submitting.\n\n👉 Track ID :</b> <code>" +
      trackID + "</code>";
  Api.sendMessage({ text: processingText, parse_mode: "html" });
} else {
  // Inform the user of a failure and return to the main menu
  var failedText = "<b>☹️ Withdrawal failed please enter amount greater than 5 usdt.</b>\n<i>" + failed + "</i>";
  Api.sendMessage({ text: failedText, parse_mode: "html" });
  Bot.runCommand("/mainMenu");
}

// If the options status indicates completion, confirm success to the user
if (options.status === "complete") {
  var successText = "<b>✔️ Your withdrawal is successful.</b>";
  Api.sendMessage({ text: successText, parse_mode: "html" });
}
