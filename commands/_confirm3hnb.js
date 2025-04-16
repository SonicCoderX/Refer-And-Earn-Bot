/*CMD
  command: /confirm3hnb
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

if (request.data.startsWith("/confirm3")) {
  var params = request.data.split(" ");
  var userId = params[1]; // Extract the user's Telegram ID
  var amount = params[2]; // Extract the amount

  // Notify the user of successful payment
  Bot.sendMessageToChatWithId(
    userId,
    "<b>✅ Your withdrawal has been processed successfully.</b>\n\n<b>Amount:</b> <code>" +
      amount +
      "</code>\n<b>Wallet:</b> <code>" +
      User.getProperty("wallet", null, userId) +
      "</code>",
    { parse_mode: "html" }
  );

  // Notify the admin of successful payment completion
  Api.sendMessage({
    chat_id: request.from.id,
    text: "<b>✅ Payment has been processed successfully for the user.</b>\n\n<b>User ID:</b> <code>" + 
      userId + "</code>\n<b>Amount:</b> <code>" + amount + "</code>",
    parse_mode: "html"
  });

  return;
}

