/*CMD
  command: /reply2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🌈 Eɴᴛᴇʀ Tʜᴇ Mᴇssᴀɢᴇ Yᴏᴜ Wᴀɴᴛ Tᴏ Rᴇᴘʟʏ*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /reply2
  help: Enter the message to reply to the user
  need_reply: true
  answer: "📝 *Enter your reply message:*"
CMD*/

let panel = AdminPanel.getPanelValues("PANEL");
let adminList = panel.ADMINS;

if (!adminList) {
  Bot.sendMessage("❌ *Admin configuration missing!*", { parse_mode: "Markdown" });
  return;
}

let isAdmin = adminList.split(",").map(id => id.trim()).includes(user.telegramid.toString());

if (!isAdmin) {
  Bot.sendMessage("❌ *You are not authorized to use this command.*", { parse_mode: "Markdown" });
  return;
}

// Get the stored user ID
let userId = Bot.getProperty("reply_user_id");

if (!userId) {
  Bot.sendMessage("❌ *No user ID found! Use* `/reply user_id` *to store a user ID.*", { parse_mode: "Markdown" });
  return;
}

// Check if message exists
if (!message) {
  Bot.sendMessage("❌ *Please enter a valid message.*", { parse_mode: "Markdown" });
  return;
}

// Send the reply message to the user
Api.sendMessage({
  chat_id: userId,
  text: "📨 *Message From Administrator:*\n\n" + message,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "↩️ Reply to Administrator", callback_data: "/support" }]
    ]
  }
});

// Confirmation to admin
Bot.sendMessage("✅ *Message sent to user ID:* `" + userId + "`", { parse_mode: "Markdown" });
