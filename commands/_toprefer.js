/*CMD
  command: /toprefer
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

/* 
   Command: /toprefer
   Shows the referral leaderboard in English.
*/

// If triggered by an inline button, delete the old message
if (request.data) {
  var chatID = request.message.chat.id;
  var messageID = request.message.message_id;
  Api.deleteMessage({ chat_id: chatID, message_id: messageID });
}

// Some sample stats (you can replace with real data)
var userFullName = user.first_name + " " + (user.last_name || "");
var userReferralEarnings = parseFloat(Libs.ResourcesLib.userRes("refCommission").value() || 0).toFixed(2);
var userRank = Math.floor(Math.random() * (1000 - 980 + 1)) + 980;

// Helper function to generate a random value
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fake top referral amounts
var top1 = randomValue(5075, 5175);
var top2 = randomValue(4870, 4970);
var top3 = randomValue(4575, 4675);
var top4 = randomValue(4275, 4375);
var top5 = randomValue(4050, 4150);
var top6 = randomValue(3875, 3975);
var top7 = randomValue(3575, 3675);
var top8 = randomValue(3275, 3375);
var top9 = randomValue(3075, 3175);
var top10 = randomValue(2875, 2975);

var topReferralText = "<b>🏆 TOP REFERRAL LEADERBOARD</b>\n\n" +
  "<b>Your Referral Stats:</b>\n" +
  "🔹 User Name: <i>" + userFullName + "</i>\n" +
  "🔹 Referral Earnings: <i>$" + userReferralEarnings + "</i>\n" +
  "🔹 Current Rank: <i>#" + userRank + "</i>\n\n" +
  "<b>Top 10 Referrals:</b>\n" +
  "🥇 <b>John Doe</b> (<i>USA 🇺🇸</i>) – <b>$" + top1 + "</b>\n" +
  "🥈 <b>ARAVN</b> (<i>India 🇮🇳</i>) – <b>$" + top2 + "</b>\n" +
  "🥉 <b>Olivia Rules</b> (<i>UK 🇬🇧</i>) – <b>$" + top3 + "</b>\n" +
  "4️⃣ <b>WeiWin</b> (<i>China 🇨🇳</i>) – <b>$" + top4 + "</b>\n" +
  "5️⃣ <b>Maria Magic</b> (<i>Spain 🇪🇸</i>) – <b>$" + top5 + "</b>\n" +
  "6️⃣ <b>PedroPo</b> (<i>Brazil 🇧🇷</i>) – <b>$" + top6 + "</b>\n" +
  "7️⃣ <b>Emma Elite</b> (<i>Canada 🇨🇦</i>) – <b>$" + top7 + "</b>\n" +
  "8️⃣ <b>MarcoMomen</b> (<i>Italy 🇮🇹</i>) – <b>$" + top8 + "</b>\n" +
  "9️⃣ <b>Ahmed</b> (<i>Egypt 🇪🇬</i>) – <b>$" + top9 + "</b>\n" +
  "🔟 <b>Anna</b> (<i>Russia 🇷🇺</i>) – <b>$" + top10 + "</b>\n\n" +
  "<b>Pro Tip:</b>\n" +
  "👫 Invite your friends using your unique referral link, share your profit screenshots, and watch your rank skyrocket! After 10 successful referrals, you get a <b>500 USDT Bonus</b> 💰";

var topReferralButtons = [
  [
    { text: "🔙 Back", callback_data: "/leaderboard" },
    { text: "🏠 Main Menu", callback_data: "/close_menu" }
  ]
];

Api.sendMessage({
  text: topReferralText,
  reply_markup: { inline_keyboard: topReferralButtons },
  parse_mode: "html"
});
