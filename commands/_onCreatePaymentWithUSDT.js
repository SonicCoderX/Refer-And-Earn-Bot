/*CMD
  command: /onCreatePaymentWithUSDT
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

if (!options) { return }

var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {
  var banText =
    "<i>🚫 Access Denied!</i>\n\n<b>Reason:</b> You are currently banned from using this bot.\n\n💡 <b>Note:</b> If you believe this is an error, please contact support."

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ System Under Maintenance</i>\n\n<b>🔧 Status:</b> Our team is enhancing the bot to bring you a better experience. 🚀\n\n⏳ <b>Estimated Downtime:</b> Please check back later and start earning again!"

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

if (options.result!= 100) {
  // not success
  Bot.sendMessage(options.message);
  return
}

// result is 100 / success
let toDate = new Date(options.expiredAt * 1000).toISOString();
let caption = `📨Address: <code>${options.address}</code>\nCoin: ${options.currency}\nNetwork: ${options.network}\nAmount: <code>${options.payAmount}</code> ${options.payCurrency}\n‼️ Sending less may result fund loss. Wait Patiently until deposit arrives if deposit didnt get credited then put a message in Support or contact: @onlinebot_support\n‼️ Please only send ${options.currency} on ${options.network}\n network to the address until ${toDate}`;

Api.sendPhoto({
  photo: options.QRCode,
  caption: caption,
  parse_mode: "HTML",
});
