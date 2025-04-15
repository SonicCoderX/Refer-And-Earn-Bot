/*CMD
  command: /ban
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

var adminId = 7303887249;

if (user.telegramid != adminId) {
  Bot.sendMessage("You are not authorized to use this command.");
  return;
}

Bot.sendMessage("Please provide the User ID of the person you want to ban.");
Bot.runCommand("/UserId");
