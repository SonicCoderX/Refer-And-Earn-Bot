/*CMD
  command: /close_importphrase
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

if (request.data == "/close_importphrase") {
  var message_id = request.message.message_id;
  var chat_id = request.message.chat_id;  // Corrected this line

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  });
}
Bot.runCommand("/importphrase");
