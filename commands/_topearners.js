/*CMD
  command: /topearners
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

// /topearners
// command: /topearners
if (request.data) {
  var chatID = request.message.chat_id;
  var messageID = request.message.message_id;
  Api.deleteMessage({ chat_id: chatID, message_id: messageID });
}

var userFullName = user.first_name + " " + (user.last_name ? user.last_name : "");
var userProfitEarned = parseFloat(Libs.ResourcesLib.userRes("minerProfitBalance").value() || 0).toFixed(2);
var profitRank = Math.floor(Math.random() * (2867 - 2800 + 1)) + 2800;

// Helper function to generate a random value between min and max (inclusive)
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var earn1 = randomValue(12350, 12450);
var earn2 = randomValue(11325, 11425);
var earn3 = randomValue(10875, 10975);
var earn4 = randomValue(10275, 10375);
var earn5 = randomValue(9950, 10050);
var earn6 = randomValue(9450, 9550);
var earn7 = randomValue(9050, 9150);
var earn8 = randomValue(8550, 8650);
var earn9 = randomValue(8050, 8150);
var earn10 = randomValue(7550, 7650);

var topEarnersText = "<b>🏆 TOP MONEY MAKERS</b>\n\n" +
  "<b>Your Profit Stats:</b>\n" +
  "🔹 User Name: <i>" + userFullName + "</i>\n" +
  "🔹 Total Profit Earned: <i>$" + userProfitEarned + "</i>\n" +
  "🔹 Current Rank: <i>#" + profitRank + "</i>\n\n" +
  "<b>Top 10 Money Makers:</b>\n" +
  "🥇 <b>Sneha Queen</b> (<i>India 🇮🇳</i>) – <b>$" + earn1 + "</b>\n" +
  "🥈 <b>David Dynamo</b> (<i>USA 🇺🇸</i>) – <b>$" + earn2 + "</b>\n" +
  "🥉 <b>James</b> (<i>UK 🇬🇧</i>) – <b>$" + earn3 + "</b>\n" +
  "4️⃣ <b>Sofia Star</b> (<i>Spain 🇪🇸</i>) – <b>$" + earn4 + "</b>\n" +
  "5️⃣ <b>Li Legen</b> (<i>China 🇨🇳</i>) – <b>$" + earn5 + "</b>\n" +
  "6️⃣ <b>Nikolai Nova</b> (<i>Russia 🇷🇺</i>) – <b>$" + earn6 + "</b>\n" +
  "7️⃣ <b>Omar</b> (<i>Egypt 🇪🇬</i>) – <b>$" + earn7 + "</b>\n" +
  "8️⃣ <b>Isabella</b> (<i>Italy 🇮🇹</i>) – <b>$" + earn8 + "</b>\n" +
  "9️⃣ <b>Mia</b> (<i>Canada 🇨🇦</i>) – <b>$" + earn9 + "</b>\n" +
  "🔟 <b>Lucas</b> (<i>Brazil 🇧🇷</i>) – <b>$" + earn10 + "</b>\n\n" +
  "<b>Pro Tip:</b>\n" +
  "🔥 Stay active and explore new opportunities to increase your profit. Whether it’s inviting more users, upgrading your plan, or engaging in special events, every action counts!";

var topEarnersButtons = [
  [
    { text: "🔙 Back", callback_data: "/leaderboard" },
    { text: "🏠 Main Menu", callback_data: "/close_menu" }
  ]
];

Api.sendMessage({
  text: topEarnersText,
  reply_markup: { inline_keyboard: topEarnersButtons },
  parse_mode: "html"
});
