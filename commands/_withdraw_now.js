/*CMD
  command: /withdraw_now
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

// Load admin settings
let config = AdminPanel.getPanelValues("PANEL")
let minAmount = Number(config.MINIMUM_WITHDRAW || 5)
let maxAmount = Number(config.MAXIMUM_WITHDRAW || 100)
let notifyChannel = config.WITHDRAW_NOTIFICATION_CHANNEL
let wallet = User.getProperty("wallet")
let balance = Libs.ResourcesLib.userRes("balance")
let userBalance = balance.value()

// User message for command usage
let usageMsg = `To request a withdrawal, use the command:\n\n<b>Example:</b>\n<code>/withdraw_now 25</code>\n\nMinimum: ${minAmount} | Maximum: ${maxAmount}`
if (!params) {
  return Api.sendMessage({ text: usageMsg, parse_mode: "HTML" })
}

// Wallet Check
if (!wallet) {
  return Api.sendMessage({
    text: "❌ Wallet address not found. Please set it first.",
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[{ text: "Set Wallet", callback_data: "/setwallet" }]]
    }
  })
}

// Parse withdrawal amount
let amount = parseFloat(params)
if (isNaN(amount)) {
  return Api.sendMessage({ text: "❌ Enter a valid number.", parse_mode: "HTML" })
}
if (amount < minAmount || amount > maxAmount) {
  return Api.sendMessage({
    text: `❌ Amount must be between ${minAmount} and ${maxAmount}.`,
    parse_mode: "HTML"
  })
}
if (amount > userBalance) {
  return Api.sendMessage({
    text: `❌ Insufficient balance.\nCurrent balance: <code>${userBalance}</code>`,
    parse_mode: "HTML"
  })
}
if (!notifyChannel) {
  return Api.sendMessage({
    text: "❌ Withdraw channel is not set. Please contact support.",
    parse_mode: "HTML"
  })
}

// Format timestamp in IST
let now = new Date()
let options = {
  timeZone: "Asia/Kolkata",
  year: "numeric", month: "2-digit", day: "2-digit",
  hour: "2-digit", minute: "2-digit", hour12: true
}
let timeIST = now.toLocaleString("en-GB", options).replace(",", " -")

// Generate Request
let requestId = Libs.Random.randomInt(10000000, 99999999)
let requestText =
`<b>🧑‍💼 User:</b> <a href="tg://user?id=${user.telegramid}">${user.first_name}</a>
<b>💵 Amount:</b> ${amount}
<b>💼 Wallet:</b> <code>${wallet}</code>
<b>⏱ Time:</b> ${timeIST} (IST)`

// Save Request Data
Bot.setProp(requestId, requestText)
balance.add(-amount)

// Notify Admin
Api.sendMessage({
  chat_id: notifyChannel,
  text: `💸 <b>New Withdraw Request</b>\n\n${requestText}\n\nPlease verify before approval.`,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "✅ Sent", callback_data: `/approve ${requestId} ${user.telegramid} ${amount}` },
        { text: "❌ Decline", callback_data: `/decline ${requestId} ${user.telegramid}` }
      ]
    ]
  }
})

// Notify User
Api.sendMessage({
  text: `✅ Your withdraw request has been submitted for approval.\n\n${requestText}`,
  parse_mode: "HTML"
})
