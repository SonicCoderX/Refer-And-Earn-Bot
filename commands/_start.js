/*CMD
  command: /start
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

// If the user has already joined, send them directly to the main menu.
if (User.getProperty("joined") === "Yes") {
  Bot.runCommand("/mainMenu")
  return
}

var newUser = User.getProperty("newUser")

if (!newUser) {
  User.setProperty("newUser", "Yes", "string")

  var admin = Bot.getProperty("admin")
  var userName = user.first_name
  var username = "@" + user.username
  var userID = user.telegramid
  var userLink = "<a href='tg://user?id=" + userID + "'>" + userName + "</a>"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")

  status.add(1)

  var adminText =
    "<b>🎉 New User Alert! 🎉</b>\n\n" +
    "👤 <b>Name:</b> " +
    userName +
    "\n" +
    "📧 <b>Username:</b> " +
    username +
    "\n" +
    "🔗 <b>User Link:</b> " +
    userLink +
    "\n" +
    "🆔 <b>User ID:</b> <code>" +
    userID +
    "</code>\n\n" +
    "📊 <b>Total Users:</b> <code>" +
    status.value() +
    "</code>"

  Api.sendMessage({
    chat_id: admin,
    text: adminText,
    parse_mode: "html"
  })
}

var broadcast = Bot.getProperty("Broadcast") ? Bot.getProperty("Broadcast") : []

if (!broadcast.includes(user.telegramid)) {
  broadcast.push(user.telegramid)
  Bot.setProperty("Broadcast", broadcast, "json")
}

function doTouchOwnLink() {
  var ownText =
    "<i>⚠️ Oops! You can't invite yourself. Share your invite link with others to earn rewards!</i>"

  Api.sendMessage({
    text: ownText,
    parse_mode: "html"
  })
}

function doAttracted(refUser) {
  var userText =
    "<b>👋 Welcome to the community!</b>\n" +
    "🎉 <b>You were invited by:</b> <a href='tg://user?id=" +
    refUser.telegramid +
    "'>" +
    refUser.first_name +
    "</a>"

  Api.sendMessage({
    text: userText,
    parse_mode: "html"
  })

  var refUserText =
    "<b>👬 New Referral!</b>\n" +
    "🎉 <b>A new user joined through your invite link:</b> <a href='tg://user?id=" +
    user.telegramid +
    "'>" +
    user.first_name +
    "</a>"

  Api.sendMessage({
    chat_id: refUser.telegramid,
    text: refUserText,
    parse_mode: "html"
  })
}

function doAlreadyAttracted() {
  var alreadyText =
    "<i>⚠️ You’ve already started exploring @" +
    bot.name +
    ". Keep going and enjoy the benefits!</i>"

  Api.sendMessage({
    text: alreadyText,
    parse_mode: "html"
  })
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.track(trackOptions)

var channel1 = Bot.getProperty("channel1")
var channel2 = Bot.getProperty("channel2")
var photo = "https://ibb.co/Qjn1VvPm"
var text =
  "<b>🚀 Join and Start Earning!</b>\n\n" +
  "🌟 <i>Experience hassle-free trading with our advanced AI-driven quantitative trading system.</i>\n\n" +
  "💼 <b>How it works:</b>\n" +
  "✔️ Automatically analyze exchange rate differences\n" +
  "✔️ Buy low, sell high, and earn daily profits effortlessly\n\n" +
  "📢 <b>Join Channel To unlock all features and start your journey:</b>\n"

// If join channel requirement is disabled (empty), go straight to the main menu.
if (!channel1 || channel1.trim() === "") {
  Bot.runCommand("/mainMenu")
  return
}

if (channel2 === undefined) {
  var buttons = [
    [
      {
        text: "🔗 Join Channel",
        url: "https://t.me/" + channel1
      }
    ],
    [
      {
        text: "✅ I've Joined",
        callback_data: "/joined"
      }
    ]
  ]

  Api.sendPhoto({
    photo: photo,
    caption: text,
    reply_markup: { inline_keyboard: buttons },
    parse_mode: "html"
  })
} else {
  var buttons = [
    [
      {
        text: "🔗 Join Channel 1",
        url: "https://t.me/" + channel1
      },
      {
        text: "🔗 Join Channel 2",
        url: "https://t.me/" + channel2
      }
    ],
    [
      {
        text: "✅ I've Joined",
        callback_data: "/joined"
      }
    ]
  ]

  Api.sendPhoto({
    photo: photo,
    caption: text,
    reply_markup: { inline_keyboard: buttons },
    parse_mode: "html"
  })
}

