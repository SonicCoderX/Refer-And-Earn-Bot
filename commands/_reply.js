/*CMD
  command: /reply
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

/*CMD
  command: /reply
  help: Store the user ID for reply
  need_reply: false
CMD*/

let panel = AdminPanel.getPanelValues("PANEL");
let adminList = panel.ADMINS;

if (!adminList) {
  Bot.sendMessage("❌ *Admin configuration missing!*", { parse_mode: "Markdown" });
  return;
}

// Check if current user is in admin list
let isAdmin = adminList.split(",").map(id => id.trim()).includes(user.telegramid.toString());

if (!isAdmin) {
  Bot.sendMessage("❌ *You are not authorized to use this command.*", { parse_mode: "Markdown" });
  return;
}

// Get the user ID from params
let userId = params;

if (!userId || isNaN(userId)) {
  Bot.sendMessage("❌ *Invalid user ID! Please use the format:* `/reply user_id`", { parse_mode: "Markdown" });
  return;
}

// Store the user ID for reply
Bot.setProperty("reply_user_id", userId, "integer");

Bot.sendMessage("✅ *User ID:* `" + userId + "` *has been stored.*\n\n" +
                "📝 *Use* `/reply2` *to enter your message.*", 
{ parse_mode: "Markdown" });

Bot.runCommand("/reply2");
