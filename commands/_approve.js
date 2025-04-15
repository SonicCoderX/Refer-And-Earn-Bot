/*CMD
  command: /approve
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
var admins = values.ADMINS ? values.ADMINS.split(",").map(e => e.trim()) : []

// 🔒 Admin check
if (!admins.includes(user.telegramid.toString())) {
  Api.answerCallbackQuery({
    text: "⛔ Access Denied\n\nOnly admins can perform this action",
    show_alert: true,
    callback_query_id: request.id
  })
  return
}

// 📦 Message validation
var messageId = request.message.message_id
if (!messageId) {
  return
}

// 🆔 Request parameters
let [requestId, userId] = params.split(" ")
if (!requestId || !userId) {
  return
}

// ✨ Get request info
var requestInfo = Bot.getProp(requestId)

// ✏️ Edit original message
Api.editMessageText({
  message_id: messageId,
  text:
    "💎 Withdrawal Request\n\n" +
    requestInfo +
    "\n\n━━━━━━━━━━━━━━\n✅ Approved",
  parse_mode: "HTML",
});

// 🔔 Alert admin
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Withdraw request approved",
  show_alert: true
})

// 📩 Notify user
Api.sendMessage({
  chat_id: userId,
  text: "✅ Your withdraw request has been approved",
  parse_mode: "HTML"
})

// 📢 Announce to channel
if (values.ANNOUNCEMENT_CHANNEL) {
  Api.sendMessage({
    chat_id: values.ANNOUNCEMENT_CHANNEL,
    text: "📢 New Payout\n\n" + requestInfo + "\n\n━━━━━━━━━━━━━━\n✅ Approved",
    parse_mode: "HTML"
  })
}

// 🧹 Cleanup
Bot.deleteProp(requestId)

