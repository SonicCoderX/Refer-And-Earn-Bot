/*CMD
  command: /mainMenu
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

/*––––––[ Ban Check ]––––––*/
var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  return Api.sendMessage({
    text: "<i>🚫 You're banned.</i>",
    parse_mode: "html"
  });
}

/*––––––[ Maintenance Check ]––––––*/
var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  return Api.sendMessage({
    text: "<i>🛠️ Bot is under maintenance, please come back later.</i>",
    parse_mode: "html"
  });
}

/*––––––[ Referral Bonus Logic ]––––––*/
var referCount = User.getProperty("referCount");
if (!referCount) {
  let refUser = Libs.ReferralLib.getAttractedBy();
  if (refUser) {
    var perRefer = Bot.getProperty("perRefer") || 0;
    Api.sendMessage({
      chat_id: refUser.telegramid,
      text: "<b>💖 Your referral joined our channels!\n\n💸 You'll get :</b> <code>" +
            perRefer +
            "%</code> <b>commission on your friend's deposits.</b>",
      parse_mode: "html"
    });
    User.setProperty("referCount", 1, "integer");
    User.setProperty("referStatus", "valid", "string");
  }
}

/*––––––[ Welcome Message ]––––––*/
var userName = user.first_name || "Trader";
var welcomeText =
  "🚀 <b>Welcome, " + userName + "!</b>\n" +
  "Your <b>Smart Auto-Trading Bot! 🤖</b>\n\n" +
  "Trade effortlessly with <b>Predictum signals</b> for precision, growth, and real-time updates! 📈✨\n\n" +
  "✅ <b>Auto-trade & diversify</b>\n" +
  "💡 <b>Smart risk management</b>\n" +
  "📊 <b>Live performance tracking</b>\n\n" +
  "✅ <b>Minimum Deposit:</b> 10 USDT\n" +
  "✅ <b>Minimum Withdraw:</b> 1 USDT\n\n" +
  "📊 <b>Live Earnings:</b> [Link]\n\n" +
  "🚀 <b>Let’s trade smarter, not harder! Make a deposit to kick-start your journey.</b>";

/*––––––[ Inline Keyboard Buttons ]––––––*/
var inlineButtons = [
  [{ text: "💰 My Balance", callback_data: "/balance" }],
  [
    { text: "🏦 Deposit Funds", callback_data: "/deposit" },
    { text: "🏧 Withdraw Funds", callback_data: "/withdraw_funds" }
  ],
  [{ text: "📊 VIP Investment Plans", callback_data: "/vipplans" }],
  [
    { text: "🎯 Set Wallet", callback_data: "/setwallet" },
    { text: "🤝 Invite & Earn", callback_data: "/invite" }
  ],
  [
    { text: "📞 Support", callback_data: "/support" },
    { text: "📊 Bot Stats", callback_data: "/stats" }
  ]
];

/*––––––[ Send or Edit Message ]––––––*/
if (request.message && request.message.message_id) {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: welcomeText,
    reply_markup: { inline_keyboard: inlineButtons },
    parse_mode: "html"
  });
} else {
  Api.sendMessage({
    text: welcomeText,
    reply_markup: { inline_keyboard: inlineButtons },
    parse_mode: "html"
  });
}
