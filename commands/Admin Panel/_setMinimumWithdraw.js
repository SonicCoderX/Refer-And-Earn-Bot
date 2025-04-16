/*CMD
  command: /setMinimumWithdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *💸 Send the amount which you want to set as minimum withdraw*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  var minimumWithdraw = message

  if (!isNumeric(minimumWithdraw)) {
    var notNumberText = "<i>⚠️ Send only numerical value.</i>"

    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    })

    Bot.runCommand("/setMinimumWithdraw")
    return
  }

  Bot.setProperty("minimumWithdraw", minimumWithdraw, "string")

  var currency = "TRX"
  var text =
    "<b>💸 Minimum withdraw set to :</b> <code>" +
    minimumWithdraw +
    " " +
    currency +
    "</code>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })

  Bot.runCommand("/adminPanel")
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

