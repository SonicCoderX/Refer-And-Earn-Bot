/*CMD
  command: /withdrawhistory 
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

var withdrawalHistory = history.get(user.telegramid) || [];

var img = "https://t.me/Crunchyroll_Anime_in_Hindi_Dub_c/3868"; // Replace with your image
var historyText = "";

if (withdrawalHistory.length === 0) {
  historyText = "*❌ No withdrawal history found.*";
} else {
  historyText = "*💸 Your Withdrawal History:*\n\n";

  for (var i = 0; i < withdrawalHistory.length; i++) {
    let entry = withdrawalHistory[i];
    let statusIcon = entry.status.toLowerCase() === "success" ? "✅" : "⏳";

    historyText +=
`*#${i + 1}*
*Amount:* ${entry.amount}
*Wallet:* \`${entry.wallet}\`
*Date:* ${entry.date}
*Status:* ${entry.status} ${statusIcon}

`;
  }
}

var btns = {
  inline_keyboard: [
    [{ text: "🔙 Back", callback_data: "/balance" }]
  ]
};

if (request.message?.message_id) {
  Api.editMessageMedia({
    chat_id: chat.chatid,
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: img,
      caption: historyText,
      parse_mode: "Markdown"
    },
    reply_markup: btns
  });
} else {
  Api.sendPhoto({
    chat_id: chat.chatid,
    photo: img,
    caption: historyText,
    parse_mode: "Markdown",
    reply_markup: btns
  });
}
