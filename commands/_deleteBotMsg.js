/*CMD
  command: /deleteBotMsg
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

try {
  var commandName = "start"; // कमांड का नाम

  // संग्रहीत संदेश आईडी प्राप्त करें
  var storedMsgs = User.getProperty("bot_msg_ids_" + commandName);

  if (storedMsgs) {
    for (var i = 0; i < storedMsgs.length; i++) {
      var messageId = storedMsgs[i];
      Api.deleteMessage({
        chat_id: chat.chatid,
        message_id: messageId
      });
    }
    // संदेश आईडी की सूची को साफ़ करें
    User.setProperty("bot_msg_ids_" + commandName, [], "json");
  }

} catch (e) {
  Bot.sendMessage("❌ संदेश हटाते समय त्रुटि: " + e.message);
}
