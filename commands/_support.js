/*CMD
  command: /support
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🌈 *Eɴᴛᴇʀ Yᴏᴜʀ Mᴇssᴀɢᴇ Tᴏ Sᴇɴᴅ Tᴏ Sᴜᴘᴘᴏʀᴛ*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let panel = AdminPanel.getPanelValues("PANEL");
let adminList = panel.ADMINS;

if (!adminList) {
  Bot.sendMessage("❌ *Admin configuration missing!*");
  return;
}

let admins = adminList.split(",").map(id => id.trim());

// Notify each admin from panel
admins.forEach(function(adminId) {
  Api.sendMessage({
    chat_id: adminId,
    text: "🔔 *New Support Message!*\n\n" +
          "👤 *User:* [" + user.first_name + "](tg://user?id=" + user.telegramid + ")\n" +
          "📝 *Message:* `" + message + "`",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [{ text: "📩 Reply To User", callback_data: "/reply " + user.telegramid }]
      ]
    }
  });
});

// Confirmation message to the user
Bot.sendMessage("✅ *Message sent!*\n\n" +
                "🛎️ *Our support team will respond soon.*", 
{ parse_mode: "Markdown" });
