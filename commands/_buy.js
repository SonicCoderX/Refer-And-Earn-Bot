/*CMD
  command: /buy
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

// command: /buy
if (request.data) {
  // Delete triggering message if it exists
  var chatID = request.message.chat_id
  var messageID = request.message.message_id
  Api.deleteMessage({ chat_id: chatID, message_id: messageID })
}

var ban = Bot.getProperty(user.telegramid)
if (ban === "Ban") {
  Api.sendMessage({
    text:
      "<b>🚫 You are banned from using this bot.</b>\n<b>Please contact support for assistance.</b>",
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")
if (maintenanceStatus === "On") {
  Api.sendMessage({
    text:
      "<b>🛠️ The bot is currently under maintenance.</b>\n<b>Please check back later!</b>",
    parse_mode: "html"
  })
  return
}

var plan = params.toString().trim()
var cost
var dailyProfit = 0
var totalProfit = 0
var expirationDays = 120 // default for 120-day plans
var planName = ""

if (plan === "1") {
  // VIP 1: XRP/USDT Arbitrade
  cost = 9.1
  dailyProfit = 1.37
  totalProfit = 172.9
  planName = "(VIP 1)"
} else if (plan === "2") {
  // VIP 2: BNB/USDT Arbitrade
  cost = 40
  dailyProfit = 3.6
  totalProfit = 432.0
  planName = "(VIP 2)"
} else if (plan === "3") {
  // VIP 3: ETH/USDT Arbitrade
  cost = 150
  dailyProfit = 13.5
  totalProfit = 1620.0
  planName = "(VIP 3)"
} else if (plan === "4") {
  // VIP 4: ENA/USDT Arbitrade
  cost = 600
  dailyProfit = 60.0
  totalProfit = 7200.0
  planName = "(VIP 4)"
} else if (plan === "5") {
  // VIP 5: BTC/USDT Arbitrade
  cost = 3000
  dailyProfit = 360.0
  totalProfit = 43200.0
  planName = "(VIP 5)"
} else {
  Api.sendMessage({
    text:
      "<b>⚠️ Invalid selection.</b>\n<b>Please choose plan '1', '2', '3', '4', or '5'.</b>",
    parse_mode: "html"
  })
  return
}

// Plan-Specific Limit Checks
if (plan === "1") {
  var countVIP1 = User.getProperty("vip1Count") || 0
  if (countVIP1 >= 1) {
    Api.sendMessage({
      text:
        "<b>❌ You have already unlocked the XRP/USDT Arbitrade (VIP 1).</b> 🚫\n<b>This plan can only be purchased once. Upgrade to VIP 2 for more benefits!</b>",
      parse_mode: "html"
    })
    return
  }
} else if (plan === "2") {
  var countVIP2 = User.getProperty("vip2Count") || 0
  if (countVIP2 >= 1) {
    Api.sendMessage({
      text:
        "<b>❌ You have already unlocked the BNB/USDT Arbitrade (VIP 2).</b> 🚫\n<b>This plan can only be purchased once. Upgrade to VIP 3 for additional benefits!</b>",
      parse_mode: "html"
    })
    return
  }
} else if (plan === "3") {
  var countVIP3 = User.getProperty("vip3Count") || 0
  if (countVIP3 >= 2) {
    Api.sendMessage({
      text:
        "<b>❌ You have already unlocked the ETH/USDT Arbitrade (VIP 3). Upgrade to VIP 4 for higher profits.</b> 🚫\n<b>This plan can only be purchased twice.</b>",
      parse_mode: "html"
    })
    return
  }
} else if (plan === "4") {
  var countVIP4 = User.getProperty("vip4Count") || 0
  if (countVIP4 >= 3) {
    Api.sendMessage({
      text:
        "<b>❌ You have already unlocked the ENA/USDT Arbitrade (VIP 4). Please upgrade to VIP 5 for higher profits.</b> 🚫\n<b>This plan can only be purchased three times.</b>",
      parse_mode: "html"
    })
    return
  }
} else if (plan === "5") {
  var countVIP5 = User.getProperty("vip5Count") || 0
  if (countVIP5 >= 3) {
    Api.sendMessage({
      text:
        "<b>❌ You have already unlocked the BTC/USDT Arbitrade (VIP 5).</b> 🚫\n<b>This plan can only be purchased three times.</b>",
      parse_mode: "html"
    })
    return
  }
}

var balance = Libs.ResourcesLib.userRes("balance")
if (balance.value() < cost) {
  Api.sendMessage({
    text: "<b>❌ Insufficient balance.</b>\n<b>Please deposit more USDT.</b>",
    parse_mode: "html"
  })
  return
}

// Deduct cost from balance
balance.remove(cost)

// Update plan purchase count
if (plan === "1") {
  User.setProperty("vip1Count", 1, "integer")
} else if (plan === "2") {
  var countVIP2 = User.getProperty("vip2Count") || 0
  User.setProperty("vip2Count", countVIP2 + 1, "integer")
} else if (plan === "3") {
  var countVIP3 = User.getProperty("vip3Count") || 0
  User.setProperty("vip3Count", countVIP3 + 1, "integer")
} else if (plan === "4") {
  var countVIP4 = User.getProperty("vip4Count") || 0
  User.setProperty("vip4Count", countVIP4 + 1, "integer")
} else if (plan === "5") {
  var countVIP5 = User.getProperty("vip5Count") || 0
  User.setProperty("vip5Count", countVIP5 + 1, "integer")
}

// Add immediate first day profit
balance.add(dailyProfit)
var minerProfitBalance = Libs.ResourcesLib.userRes("minerProfitBalance")
minerProfitBalance.add(dailyProfit)

// Send confirmation message
var buyMessage =
  "<b>✅ " +
  planName +
  " Unlocked Successfully! 🚀</b>\n\n" +
  "<b>💰 Daily Profit:</b> <i>" +
  dailyProfit.toFixed(2) +
  " USDT</i>\n" +
  "<b>📅 Total in " +
  expirationDays +
  " Days:</b> <i>" +
  totalProfit.toFixed(2) +
  " USDT</i>\n\n" +
  "<b>👉 Reminder:</b> Next profit will be added in 24hrs. You can withdraw your " +
  dailyProfit.toFixed(2) +
  " USDT profit now with zero fee 🥳"

Api.sendMessage({ text: buyMessage, parse_mode: "html" })

// Schedule next profit update after 86400 seconds (24 hrs)
if (plan === "1") {
  Bot.run({ command: "/miner1", run_after: 86400 })
} else if (plan === "2") {
  Bot.run({ command: "/miner2", run_after: 86400 })
} else if (plan === "3") {
  Bot.run({ command: "/miner3", run_after: 86400 })
} else if (plan === "4") {
  Bot.run({ command: "/miner4", run_after: 86400 })
} else if (plan === "5") {
  Bot.run({ command: "/miner5", run_after: 86400 })
}

// Record Mining Details in mining history
var miningRecord = {
  planName: planName,
  purchaseTimestamp: Date.now() - 86400000, // one day in the past for immediate profit
  dailyProfit: dailyProfit,
  expirationDays: expirationDays
}
var miningHistory = User.getProperty("miningHistory")
if (!miningHistory) {
  miningHistory = []
} else {
  try {
    miningHistory = JSON.parse(miningHistory)
  } catch (e) {
    miningHistory = []
  }
}
miningHistory.push(miningRecord)
User.setProperty("miningHistory", JSON.stringify(miningHistory), "string")

