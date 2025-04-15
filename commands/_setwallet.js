/*CMD
  command: /setwallet
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

// 🔐 Only for Private Chats
if (!chat.chat_type || chat.chat_type != "private") {
  return Bot.sendMessage("⚠️ Please use this command in a private chat.");
}

// ⚙️ Ask for Wallet Address
Bot.sendMessage("💳 Please send your wallet address now:");
Bot.runCommand("/save_wallet");
