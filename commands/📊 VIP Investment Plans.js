/*CMD
  command: 📊 VIP Investment Plans
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /vipplans
  group: 
CMD*/

if (Bot.getProperty(user.telegramid) === "Ban") {
  Api.sendMessage({
    text: "<b>🚫 You are banned.</b>\n<b>❗ Contact support for more info.</b>",
    parse_mode: "html"
  })
  return
}
if (Bot.getProperty("maintenanceStatus") === "On") {
  Api.sendMessage({
    text:
      "<b>🛠️ Maintenance Mode Enabled!</b>\n<b>Please check back later. 🙏</b>",
    parse_mode: "html"
  })
  return
}

const XRPPrice = CurrencyQuote.convert({
  from: "XRP",
  to: "USDT",
  amount: 1
}).toFixed(3)
const BNBPrice = CurrencyQuote.convert({
  from: "BNB",
  to: "USDT",
  amount: 1
}).toFixed(3)
const ETHPrice = CurrencyQuote.convert({
  from: "ETH",
  to: "USDT",
  amount: 1
}).toFixed(3)
const ENAPrice = CurrencyQuote.convert({
  from: "ENA",
  to: "USDT",
  amount: 1
}).toFixed(3)
const BTCPrice = CurrencyQuote.convert({
  from: "BTC",
  to: "USDT",
  amount: 1
}).toFixed(3)

var message =
  "<b>🚀 VIP Investment Plans 🚀</b>\n\n" +
  "💰 Invest Today & Earn <b>Daily Passive Income!</b>\n" +
  "🔒 <b>100% Transparency | Instant Profits | Fast Withdrawals</b>\n\n" +
  "🔹 <b>Basic - VIP 1</b>\n💵 <b>Investment:</b> <b>9.10 USDT</b>\n📈 Daily Profit: <b>1.37 USDT</b> ~ 11%\n⏳ Duration: <b>4 Months (120 Days)</b>\n💰 Total Earnings: <b>172.90 USDT</b>\n\n" +
  "🔹 <b>Advanced - VIP 2</b>\n💵 <b>Investment:</b> <b>40 USDT</b>\n📈 Daily Profit: <b>3.60 USDT</b> ~ 9%\n⏳ Duration: <b>4 Months (120 Days)</b>\n💰 Total Earnings: <b>432.00 USDT</b>\n\n" +
  "🔹 <b>Platinum - VIP 3</b>\n💵 <b>Investment:</b> <b>150 USDT</b>\n📈 Daily Profit: <b>13.50 USDT</b> ~ 9%\n⏳ Duration: <b>4 Months (120 Days)</b>\n💰 Total Earnings: <b>1,620.00 USDT</b>\n\n" +
  "🔹 <b>Gold - VIP 4</b>\n💵 <b>Investment:</b> <b>600 USDT</b>\n📈 Daily Profit: <b>60.00 USDT</b> ~ 10%\n⏳ Duration: <b>4 Months (120 Days)</b>\n💰 Total Earnings: <b>7,200.00 USDT</b>\n\n" +
  "🔹 <b>Diamond - VIP 5</b>\n💵 <b>Investment:</b> <b>3,000 USDT</b>\n📈 Daily Profit: <b>360.00 USDT</b> ~ 12%\n⏳ Duration: <b>4 Months (120 Days)</b>\n💰 Total Earnings: <b>43,200.00 USDT</b>\n\n" +
  "✅ <b>Choose Your VIP Plan Below</b>\n📌 Tap a button to invest instantly"

var buttons = [
  [{ text: "✨ VIP 1 - Start Small (9.10 USDT)", callback_data: "/buy 1" }],
  [{ text: "💎 VIP 2 - Grow Steady (40 USDT)", callback_data: "/buy 2" }],
  [{ text: "🚀 VIP 3 - High Returns  (150 USDT)", callback_data: "/buy 3" }],
  [{ text: "🔥 VIP 4 - Pro Investor (600 USDT)", callback_data: "/buy 4" }],
  [{ text: "👑 VIP 5 - Ultimate Profits (3,000 USDT)", callback_data: "/buy 5" }],
  [{ text: "🏡 Back To Main Menu", callback_data: "/close_menu" }]
]

Api.sendMessage({
  text: message,
  parse_mode: "html",
  reply_markup: { inline_keyboard: buttons }
})

