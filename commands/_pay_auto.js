/*CMD
  command: /pay_auto
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

if (request.data.startsWith("/pay_auto")) {
  var userId = request.data.split(" ")[1]; // Extract the user's Telegram ID

  var ban = Bot.getProperty(userId);

  if (ban === "Ban") {
    Api.sendMessage({
      chat_id: request.from.id,
      text: "<i>🚫 This user is banned. Payment cannot be processed.</i>",
      parse_mode: "html"
    });
    return;
  }

  var withdrawalStatus = Bot.getProperty("withdrawalStatus");
  if (withdrawalStatus === "Off") {
    Api.sendMessage({
      chat_id: request.from.id,
      text: "<i>🏧 Withdrawals are currently disabled. Payment cannot be processed.</i>",
      parse_mode: "html"
    });
    return;
  }

  var wallet = User.getProperty("wallet"); // Get the user's wallet address
  var amount = User.getProperty("amount", null, userId); // Get the withdrawal amount

  if (!wallet || !amount) {
    Api.sendMessage({
      chat_id: request.from.id,
      text: "<i>❌ User's wallet or amount is not set. Payment cannot be processed.</i>",
      parse_mode: "html"
    });
    return;
  }

  // Options for OxaPay API call
  let options = {
    url: "api/send",
    fields: {
      amount: amount,
      currency: "TRX",
      address: wallet,
      onCallback: "/confirm2"
    },
    onSuccess: "/confirm3 " + userId + " " + amount + " TRX"
  };

  // Call OxaPay API
  Libs.OxaPayLib.apiCall(options);

  // Notify the admin
  Api.sendMessage({
    chat_id: request.from.id,
    text: "<b>🤖 Automatic payment initiated for the user.</b>\n\n<b>User ID:</b> <code>" + 
      userId + "</code>\n<b>Amount:</b> <code>" + amount + " TRX</code>\n<b>Wallet:</b> <code>" + wallet + "</code>",
    parse_mode: "html"
  });

  return;
}

// Confirm the payment to the user

