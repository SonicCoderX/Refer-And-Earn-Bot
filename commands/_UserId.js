/*CMD
  command: /UserId
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

var adminId = 7303887249;

if (user.telegramid != adminId) {
  Bot.sendMessage("You are not authorized to use this command.");
  return;
}

var userId = message;
User.setProperty("ban_user_id", userId, "integer");

Bot.sendInlineKeyboard(
  [
    [{ title: "1 minute", command: "/banUser 60" }, { title: "15 minutes", command: "/banUser 900" }],
    [{ title: "30 minutes", command: "/banUser 1800" }, { title: "1 hour", command: "/banUser 3600" }],
    [{ title: "6 hours", command: "/banUser 21600" }, { title: "12 hours", command: "/banUser 43200" }],
    [{ title: "1 day", command: "/banUser 86400" }, { title: "7 days", command: "/banUser 604800" }],
    [{ title: "Permanent", command: "/banUser -1" }]
  ],
  "Choose the ban duration for user: " + userId
);
