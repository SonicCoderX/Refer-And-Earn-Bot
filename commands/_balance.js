/*CMD
  command: /balance
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

var set = AdminPanel.getPanelValues("PANEL")  
var prefix = set.REFER_PREFIX || "user"  
var img = "https://t.me/Crunchyroll_Anime_in_Hindi_Dub_c/3868"

var userid = user.telegramid  
var name = user.first_name  
var uname = user.username ? "@" + user.username : "No username"  
var refBy = RefLib.getAttractedBy()  
var link = Libs.ReferralLib.getRefLink(bot.name, prefix)  
var bal = Libs.ResourcesLib.userRes("balance").value().toFixed(2)  
var wallet = User.getProperty("wallet") || "Not Set"  
  
var msg =
"▎🩵 <b>Name:</b> " + name + "\n" +  
"▎🆔 <b>User ID:</b> <code>" + userid + "</code>\n" +  
"▎⚡ <b>Username:</b> " + uname + "\n" +  
"▎🩷 <b>Invite Link:</b>\n" +  
"<code>" + link + "</code>\n\n" +  
"▎ 💰 Balance: <code>" + bal + " " + (set.CURRENCY || "TRX") + "</code>\n" +  
"▎ 🌈 Wallet: <code>" + wallet + "</code>"
  
var btns = {  
  inline_keyboard: [[{ text: "▷ Back", callback_data: "/start" }]]  
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
