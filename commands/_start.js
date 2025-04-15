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

// Get bot settings from admin panel
var values = AdminPanel.getPanelValues("PANEL");
var linkPrefix = values.REFER_LINK_PREFIX || "Bot"
// Run referral tracking at the top
var tracks = {
  onTouchOwnLink: function () {
    Bot.sendMessage("*❌ Stop Clicking Your Own Referral Link!*");
  },
  
  onAtractedByUser: function (byUser) {
    Api.sendMessage({
      text: `🎁 You are invited by <a href='tg://user?id=${byUser.telegramid}'>${byUser.first_name}</a>`,
      parse_mode: "HTML"
    });
    Api.sendMessage({
      chat_id: byUser.telegramid,
      text: `🎉 You have successfully invited <a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`,
      parse_mode: "HTML"
    });
  },
  
  onAlreadyAttracted: function () {
    Bot.sendMessage("*🚫 You Have Already Started The Bot!*");
  },
  
  linkPrefix: linkPrefix
};
RefLib.track(tracks);


// Check and get not joined chats if available
let chats = Libs.MembershipChecker.getNotJoinedChats();
Libs.MembershipChecker.check();
let isMember = Libs.MembershipChecker.isMember();

// If user hasn't joined all required chats
if (!isMember) {
  var chatArray = chats.split(",").map(function (chat) {
    return chat.trim();
  });

  var inlineKeyboard = [];
  for (var i = 0; i < chatArray.length; i += 2) {
    let row = [];
    if (chatArray[i]) {
      row.push({ text: chatArray[i], url: "https://t.me/" + chatArray[i].replace("@", "") });
    }
    if (chatArray[i + 1]) {
      row.push({ text: chatArray[i + 1], url: "https://t.me/" + chatArray[i + 1].replace("@", "") });
    }
    inlineKeyboard.push(row);
  }

  inlineKeyboard.push([{ text: "✅ Joined", callback_data: "/start" }]);

  var msg = values.NEED_JOIN_MSG || `
📢 *Join Required Channels!*

To continue using this bot, please join all the required channels below:
`;
  Api.sendMessage({
    text: msg,
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: inlineKeyboard }
  });
  return;
}

// Get inviter and reward after joining all chats, if not rewarded yet
let inviter = RefLib.getAttractedBy();
if (inviter && !User.getProperty("rewarded")) {
  let referralBonus = parseFloat(values.REFER_REWARD) || 0.5;
  Libs.ResourcesLib.anotherUserRes("balance", inviter.telegramid).add(referralBonus);
  Api.sendMessage({
    chat_id: inviter.telegramid,
    text: `🎉 You have received a referral bonus of *${referralBonus} ${values.CURRENCY}* for inviting ${user.first_name}!`,
    parse_mode: "Markdown"
  });
  User.setProperty("rewarded", true);
}

// Start message and buttons
let Message = `*🩵 Welcome to the Refer And Earn Bot! 🩵*
 
*🩷 Earn rewards by referring your friends! 🩷*

*🌈 Invite your friends and start earning now!*`;

// Define the inline buttons (keeping your original layout intact)
var buttons = {
    inline_keyboard: [
        [
            { text: "💰 Balance", callback_data: "/balance" },
            { text: "➥ Refer & Earn", callback_data: "/referral" }
        ],
        [
            { text: "🏆 Leaderboard", callback_data: "/leaderboard" },
            { text: "🛍️ Withdraw", callback_data: "/withdraw" }
        ]
    ]
};

let Image = "https://t.me/Crunchyroll_Anime_in_Hindi_Dub_c/3868";

if (request.message?.message_id) {
  Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: Image,
      caption: Message,
      parse_mode: "Markdown"
    },
    reply_markup: buttons
  });
} else {
  Api.sendPhoto({
    photo: Image,
    caption: Message,
    parse_mode: "Markdown",
    reply_markup: buttons
  });
}
