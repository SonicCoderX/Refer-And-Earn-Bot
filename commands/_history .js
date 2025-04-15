/*CMD
  command: /history 
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

var img = "https://t.me/Crunchyroll_Anime_in_Hindi_Dub_c/3868"
var set = AdminPanel.getPanelValues("PANEL")
var currency = set.CURRENCY || "TRX"

var historyList = new List({ name: "withdraw_history", user_id: user.id })
var history = historyList.getAll()

let msg = "<b>📤 Withdrawal History:</b>\n\n"

if (!history || history.length === 0) {
  msg += "❌ No withdrawals yet."
} else {
  history.reverse().forEach((item, index) => {
    msg += `▎${index + 1}. <b>Amount:</b> ${item.amount} ${currency}\n   🕒 <b>Time:</b> ${item.time}\n\n`
  })
}

var btns = {
  inline_keyboard: [
    [{ text: "▷ Back", callback_data: "/start" }]
  ]
}

if (request.message?.message_id) {
  Api.editMessageMedia({
    chat_id: chat.chatid,
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: img,
      caption: msg,
      parse_mode: "HTML"
    },
    reply_markup: btns
  })
} else {
  Api.sendPhoto({
    chat_id: chat.chatid,
    photo: img,
    caption: msg,
    parse_mode: "HTML",
    reply_markup: btns
  })
}
