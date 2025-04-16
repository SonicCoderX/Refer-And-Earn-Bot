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

/* ========================================================= */  
/*                   Command: 👩‍💻 Account                */  
/* ========================================================= */  
var ban = Bot.getProperty(user.telegramid);  
if (ban === "Ban") {  
  var banText = "<b>🚫 You are banned from using this bot.</b>\n<b>💡 Contact support for more information.</b>";  
  Api.sendMessage({ text: banText, parse_mode: "html" });  
  return;  
}  
  
var maintenanceStatus = Bot.getProperty("maintenanceStatus");  
if (maintenanceStatus === "On") {  
  var onText = "<b>🛠️ The bot is currently under maintenance.</b>\n<b>⏳ Please check back later!</b>";  
  Api.sendMessage({ text: onText, parse_mode: "html" });  
  return;  
}  
  
var userName = user.first_name;  
var userID = user.telegramid;  
var balance = Libs.ResourcesLib.userRes("balance");  
var minerProfitBalance = Libs.ResourcesLib.userRes("minerProfitBalance");  
var currency = "USDT";  
  
// Arbitrade Plan Counts  
var vip1Count = User.getProperty("vip1Count") || 0;  
var vip2Count = User.getProperty("vip2Count") || 0;  
var vip3Count = User.getProperty("vip3Count") || 0;  
var vip4Count = User.getProperty("vip4Count") || 0;  
var vip5Count = User.getProperty("vip5Count") || 0;  
  
var totalActive = vip1Count + vip2Count + vip3Count + vip4Count + vip5Count;  
  
// Investment and Profit Summary  
var totalInvestment = (vip1Count * 9.10) + (vip2Count * 40) + (vip3Count * 150) + (vip4Count * 600) + (vip5Count * 3000);  
var totalPlanProfit = (vip1Count * 172.90) + (vip2Count * 432) + (vip3Count * 1620) + (vip4Count * 7200) + (vip5Count * 43200);  
var hourlyProfit = (vip1Count * 0.06) + (vip2Count * 0.15) + (vip3Count * 0.56) + (vip4Count * 2.5) + (vip5Count * 15);  
var profit24hr = hourlyProfit * 24;  
  
// Updated Account Information Text  
var text =  
  "🔹 Name: <b>" + userName + "</b>\n" +  
  "🔹 User ID: <code>" + userID + "</code>\n\n" +  
  "💰 Wallet Details:\n" +  
  "✅ Available Balance: <b>" + balance.value().toFixed(4) + " " + currency + "</b>\n" +  
  "💸 Total Profit Earned: <b>" + minerProfitBalance.value().toFixed(4) + " " + currency + "</b>\n\n" +  
  "⚡ Total Active VIP Plans:\n" +  
  "🔹 VIP 1: <b>" + vip1Count + " running</b>\n" +  
  "🔹 VIP 2: <b>" + vip2Count + " running</b>\n" +  
  "🔹 VIP 3: <b>" + vip3Count + " running</b>\n" +  
  "🔹 VIP 4: <b>" + vip4Count + " running</b>\n" +  
  "🔹 VIP 5: <b>" + vip5Count + " running</b>\n\n" +  
  "📊 Investment Summary:\n" +  
  "💼 Total Investment: <b>" + totalInvestment.toFixed(2) + " USDT</b>\n" +  
  "💵 Daily Profit: <b>" + profit24hr.toFixed(2) + " USDT</b>\n\n" +  
  "💹 Start earning passive income—deposit and grow your crypto effortlessly! 🚀";  
  
var buttons = [  
  [ { text: "💸 Mining History", callback_data: "/miningHistory" } ],  
  [ { text: "➕ Deposit History", callback_data: "/depositHistory" } ],  
  [ { text: "🏧 Withdrawal History", callback_data: "/withdrawalHistory" } ],  
  [ { text: "🏠 Go to Main Menu", callback_data: "/close_menu" } ] // Added Main Menu button  
];  
  
Api.sendMessage({  
  text: text,  
  reply_markup: { inline_keyboard: buttons },  
  parse_mode: "html"  
});
