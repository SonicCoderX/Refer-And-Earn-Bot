/*CMD
  command: /unbanUser
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
Bot.setProperty("ban_" + userId, null);
Bot.sendMessage("User [" + userId + "](tg://user?id=" + userId + ") has been unbanned.");
Bot.sendMessageToChatWithId(adminId, "User " + userId + " has been unbanned by admin.");
