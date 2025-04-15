/*CMD
  command: 🎁 Bonus
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

if (request.data) {
  var chatID = request.message.chat_id
  var messageID = request.message.message_id

  Api.deleteMessage({
    chat_id: chatID,
    message_id: messageID
  })
}

var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>"

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

var bonusCollected = User.getProperty("bonusCollected")

if (bonusCollected === "Yes") {
  var collectedText =
    ""

  Api.sendMessage({
    text: collectedText,
    parse_mode: "html"
  })
  return
}

var bonus = Bot.getProperty("bonus")
var balance = Libs.ResourcesLib.userRes("balance")
var currency = "USDT"

balance.add(parseFloat(bonus))

User.setProperty("bonusCollected", "Yes", "string")

var text =
  "<b>🎁 Congratulations, you've received bonus of</b> <B>" +
  bonus +
  " " +
  currency +
  "</B>."

Api.sendMessage({
  text: text,
  parse_mode: "html"
})

Bot.run({
  command: "/bonus",
  run_after: 86400
})

