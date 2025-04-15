/*CMD
  command: /save_wallet
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

let wallet = message;

// Optional: basic validation
if (wallet.length < 10) {
  return Bot.sendMessage("❌ Invalid wallet address. Please try again.");
}

// ✅ Save it to user property (so it works with your profile script)
User.setProperty("wallet", wallet, "string");

Bot.sendMessage("✅ Your wallet address has been saved:\n<code>" + wallet + "</code>", { parse_mode: "HTML" });
