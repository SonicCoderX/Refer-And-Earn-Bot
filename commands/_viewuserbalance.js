/*CMD
  command: /viewuserbalance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// /viewuserbalance – Admin view of a specific user's details.
// Usage: /viewuserbalance <userID>
if (!params || params.trim() === "" || params.trim() === "/viewuserbalance") {
  Api.sendMessage({ 
    text: "<b>Please enter a valid User ID with the command. For example: /viewuserbalance 123456789</b>", 
    parse_mode: "html" 
  });
  return;
}

var targetId = params.trim();

// Helper function for relative time display
function timeAgo(dateString) {
  var joinDate = new Date(dateString);
  var now = new Date();
  var diff = now - joinDate;
  var seconds = Math.floor(diff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  if (days > 0) return days + " day(s) ago";
  if (hours > 0) return hours + " hour(s) ago";
  if (minutes > 0) return minutes + " minute(s) ago";
  return seconds + " second(s) ago";
}

// Retrieve user current balance using anotherUserRes
var userBalance = Libs.ResourcesLib.anotherUserRes("balance", targetId).value() || 0;

// Retrieve miner profit counts (if applicable)
var miner2 = Libs.ResourcesLib.anotherUserRes("miner2Profit", targetId).value() || 0;
var miner3 = Libs.ResourcesLib.anotherUserRes("miner3Profit", targetId).value() || 0;
var miner4 = Libs.ResourcesLib.anotherUserRes("miner4Profit", targetId).value() || 0;
var miner5 = Libs.ResourcesLib.anotherUserRes("miner5Profit", targetId).value() || 0;
var totalProfit = (miner2 * 0.06) + (miner3 * 0.56) + (miner4 * 2.5) + (miner5 * 15);

// Retrieve joined date from Bot property (should be set when the user joins)
var joinDate = Bot.getProperty("joinDate_" + targetId);
var joinedText = "Not available";
if (joinDate) {
  joinedText = timeAgo(joinDate) + " (" + joinDate + ")";
}

// Retrieve last 5 withdrawal transactions (stored as an array in Bot property)
var withdrawalHistory = Bot.getProperty("withdrawalHistory_" + targetId, []);
var withdrawalText = "";
if (withdrawalHistory.length > 0) {
  var recentWithdrawals = withdrawalHistory.slice(-5).reverse();
  recentWithdrawals.forEach(function(entry, index) {
    withdrawalText += "<b>" + (index + 1) + ".</b> " +
                      "💸 <b>Amount:</b> <code>" + entry.amount + " USDT</code>\n" +
                      "📅 <b>Date:</b> <i>" + entry.date + "</i>\n\n";
  });
} else {
  withdrawalText = "<i>No withdrawal transactions available.</i>";
}

// Retrieve referral info from ResourcesLib
var referralCount = Libs.ResourcesLib.anotherUserRes("referralCount", targetId).value() || 0;
var referralCommission = Libs.ResourcesLib.anotherUserRes("refCommission", targetId).value() || 0;
var commissionWithdrawn = Bot.getProperty("commissionWithdrawn_" + targetId) || 0;

// Build output text
var output = "<b>User Balance Details for ID " + targetId + ":</b>\n\n" +
             "💵 <b>Current Balance:</b> " + userBalance.toFixed(4) + " USDT\n" +
             "📈 <b>Total Profit (from Miner VIP plans):</b> " + totalProfit.toFixed(4) + " USDT\n" +
             "📆 <b>Joined:</b> " + joinedText + "\n\n" +
             "<b>Last 5 Withdrawal Transactions:</b>\n" + withdrawalText + "\n" +
             "👥 <b>Total Referrals:</b> " + referralCount + "\n" +
             "💰 <b>Referral Commission Earned:</b> " + referralCommission.toFixed(4) + " USDT\n" +
             "🔻 <b>Referral Commission Withdrawn:</b> " + commissionWithdrawn + " USDT\n";

// Inline buttons for further admin actions (Send Private Message and Back)
var buttons = [
  [
    { text: "✉️ Send Private Message", callback_data: "/sendPrivMsg " + targetId }
  ],
  [
    { text: "🔙 Back", callback_data: "/adminPanel" }
  ]
];

Api.sendMessage({
  text: output,
  reply_markup: { inline_keyboard: buttons },
  parse_mode: "html"
});
