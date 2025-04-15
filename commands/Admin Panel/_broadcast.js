/*CMD
  command: /broadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Add admin ID directly
var admins = "7303887249"; // You can add more like: "7303887249,1234567890"

// Check if user is admin
if (!admins || !admins.split(",").map(e => e.trim()).includes(user.telegramid.toString())) {
  Api.sendMessage({
    text: "🚫 You are not authorized to do this.\n\nOnly admins can do this and you are not an admin"
  });
  return;
}

// Ensure private chat
if (!chat || chat.chat_type !== "private") {
  return;
}

// Get replied message and chat info
var message_id = request?.reply_to_message?.message_id;
var chat_id = request?.reply_to_message?.chat?.id;

if (!message_id) {
  Api.sendMessage({
    text: "Please reply to a message to broadcast it.",
    reply_to_message_id: request.message_id,
  });
  return;
}

// Start broadcasting
Bot.runAll({
  command: "/notification",
  for_chats: "private-chats",
  on_create: "/broadcast_task",
  options: {
    chat_id: chat_id,
    message_id: message_id,
  }
});
