/*CMD
  command: /refreshing
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

var ResourcesLib = Libs.ResourcesLib;
var usersData = Bot.getProperty("leaderboard_data") || {};

// ⚙️ Cache Current User's Data
var userId = user.telegramid;
var balance = ResourcesLib.anotherUserRes("balance", userId).value();
usersData[userId] = {
  balance: balance,
  first_name: user.first_name
};
Bot.setProperty("leaderboard_data", usersData, "json");

// ⚙️ Fetch Currency from Admin Panel
var config = AdminPanel.getPanelValues("PANEL");
var currency = config.CURRENCY || "BBP";

// Sort Top 10 Users by Balance
var leaderboard = Object.entries(usersData)
  .map(([id, data]) => ({
    id: id,
    balance: data.balance,
    first_name: data.first_name
  }))
  .filter(user => user.balance > 0) // ✅ Only include users with balance > 0
  .sort((a, b) => b.balance - a.balance)
  .slice(0, 10);

// 🎖️ Compose Leaderboard Message
var msg = "<b>🏆 Top Earners Leaderboard ( ⟳ )</b>\n";
msg += "━━━━━━━━━━━━━━━━━━━━━\n";

if (leaderboard.length === 0) {
  msg += "\n⚠️ No data available yet.";
} else {
  for (var i = 0; i < leaderboard.length; i++) {
    var rankNum = i + 1;
    var rankEmoji = "⭐";
    var rankTag = "";

    if (i === 0) {
      rankEmoji = "🥇";
      rankTag = "";
    } else if (i === 1) {
      rankEmoji = "🥈";
      rankTag = "";
    } else if (i === 2) {
      rankEmoji = "🥉";
      rankTag = "";
    }

    msg += `${rankNum}. ${rankEmoji} <b><a href="tg://user?id=${leaderboard[i].id}">${leaderboard[i].first_name}${rankTag}</a></b> — <code>${leaderboard[i].balance.toFixed(2)} ${currency}</code>\n`;
  }
}
msg += "━━━━━━━━━━━━━━━━━━━━━";

// 🔘 Inline Buttons
var keyboard = {
  inline_keyboard: [
    [{ text: "⟳ Refresh", callback_data: "/refresh" }],
    [{ text: "▷ Back", callback_data: "/start" }]
  ]
};

// 🖼️ Optional Leaderboard Banner
var banner_url = "https://t.me/Crunchyroll_Anime_in_Hindi_Dub_c/3868";

if (request.message) {
  // Update Existing Leaderboard
  Api.editMessageMedia({
    chat_id: chat.chatid,
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: banner_url,
      caption: msg,
      parse_mode: "html"
    },
    reply_markup: keyboard
  });
} else {
  // Send New Leaderboard Message
  Api.sendPhoto({
    photo: banner_url,
    caption: msg,
    parse_mode: "html",
    reply_markup: keyboard
  });
}

Bot.runCommand("/leaderboard");
