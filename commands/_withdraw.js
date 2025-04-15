/*CMD
  command: /withdraw
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

var values = AdminPanel.getPanelValues("PANEL")
var minimumWithdraw = values.MINIMUM_WITHDRAW || 10
var maximumWithdraw = values.MAXIMUM_WITHDRAW || 50
var image_url = "https://t.me/Crunchyroll_Anime_in_Hindi_Dub_c/3868"
var currency = values.CURRENCY || "TRX"
var wallet = User.getProperty("wallet")
var userBalance = Libs.ResourcesLib.userRes("balance").value()

let message = `<b>💵 Withdraw</b>\n\n`

if (!wallet) {
  message += `❌ <b>You haven't set your wallet address yet.</b>\nUse the button below to set it now.\n\n`
} else {
  message += `<b>💳 Wallet:</b> <code>${wallet}</code>\n\n`
}

message +=
  `<b>💰 Balance:</b> ${userBalance} ${currency}\n` +
  `<b>📤 Min Withdraw:</b> ${minimumWithdraw} ${currency}\n` +
  `<b>📥 Max Withdraw:</b> ${maximumWithdraw} ${currency}`
  
  var buttons = {
  inline_keyboard: [
    [{ text: "💵 Withdraw", callback_data: "/withdraw_now" }],
    [{ text: "📜 Withdraw History", callback_data: "/history" }],
    [
      {
        text: wallet ? "✏️ Change Wallet" : "⭐ Set Wallet",
        callback_data: "/setwallet"
      }
    ],
    [{ text: "▷ Back", callback_data: "/start" }]
  ]
}

if (request.message?.message_id) {
  Api.editMessageMedia({
    chat_id: chat.chatid,
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: image_url,
      caption: message,
      parse_mode: "HTML"
    },
    reply_markup: buttons
  })
} else {
  Api.sendPhoto({
    chat_id: chat.chatid,
    photo: image_url,
    caption: message,
    parse_mode: "HTML",
    reply_markup: buttons
  })
}

