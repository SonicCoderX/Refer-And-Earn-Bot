/*CMD
  command: refresh
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

if (!params) {
  return;
}

function deleteMessage(command) {
  Api.deleteMessage({
    chat_id: request.message.chat_id,
    message_id: request.message.message_id
  });
  
  Bot.runCommand(command);
}
 
if (params === "account") {
  deleteMessage("👩‍💻 Account");
} else if (params === "refer") {
  deleteMessage("🧑‍🤝‍🧑 Refer");
} else if (params === "statistics") {
  deleteMessage("📊 Statistics");
}
