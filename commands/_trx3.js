/*CMD
  command: /trx3
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
  var onText = "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"
  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

if (!options) {
  return
}

var statusCode = options.result

if (statusCode !== 100) {
  var error = options.message
  var notSuccessText = "<b>⚠️ Error :</b>\n<i>" + error + "</i>"
  Api.sendMessage({
    text: notSuccessText,
    parse_mode: "html"
  })
  
  Bot.runCommand("/mainMenu")
  return
}

var expiryDate = new Date(options.expiredAt * 1000).toISOString()
var address = options.address
var coin = options.currency
var amount = options.payAmount
var network = options.network
var payCurrency = options.payCurrency
var QRCode = options.QRCode

// Build the main caption without the final note
var captionText =
  "<b>ℹ️ Payment Information Generated</b>\n\n" +
  "<b>🗂️ Address :</b> <code>" + address + "</code>\n" +
  "<b>🪙 Coin :</b> <code>" + coin + "</code>\n" +
  "<b>👉 Network :</b> <code>" + network + "</code>\n" +
  "<b>💸 Amount :</b> <code>" + amount + " " + payCurrency + "</code>\n\n" +
  "<b>⚠️ Note :</b> <i>Sending less may result in fund loss. Please only send After paying, please wait patiently for your deposit to be processed. If your deposit is not credited within 5 minutes, then contact: @onlinebot_Support </i>" +
  "<code>" + coin + "</code> " +
  "<i>on </i>" +
  "<code>" + network + "</code> " +
  "<i> After paying, please wait patiently for your deposit to be processed. If your deposit is not credited within 5 minutes, then contact: @onlinebot_Support network to the address until " + expiryDate + ".</i>"

// Send the photo with the main caption
Api.sendPhoto({
  photo: QRCode,
  caption: captionText,
  parse_mode: "html"
})

// Send a separate message with the final note
Api.sendMessage({
  text: "<i>After paying, please wait patiently for your deposit to be processed. " +
        "If your deposit is not credited within 5 minutes, then contact: @onlinebot_Support.</i>",
  parse_mode: "html"
})
