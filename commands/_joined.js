/*CMD
  command: /joined
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

// If the user has already joined, bypass join checks and go directly to main menu.
if (User.getProperty("joined") === "Yes") {
  Bot.runCommand("/mainMenu");
  return;
}

if (request.data) {
  var chatID = request.message.chat_id;
  var messageID = request.message.message_id;

  Api.deleteMessage({
    chat_id: chatID,
    message_id: messageID
  });
}

var channel1 = Bot.getProperty("channel1");
var channel2 = Bot.getProperty("channel2");
var userID = user.telegramid;

if (channel1 === undefined) {
  Bot.runCommand("/mainMenu");
} else if (channel2 === undefined) {
  var channels = "@" + channel1;
  Api.getChatMember({
    chat_id: channels,
    user_id: userID,
    on_result: "/check1"
  });
} else {
  Api.getChatMember({
    chat_id: "@" + channel1,
    user_id: userID,
    on_result: "/check1"
  });
  Api.getChatMember({
    chat_id: "@" + channel2,
    user_id: userID,
    on_result: "/check2"
  });
}
