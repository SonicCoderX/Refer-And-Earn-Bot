/*CMD
  command: /referral
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

// ----------------------------
// ✅ Settings
// ----------------------------
var values = AdminPanel.getPanelValues("PANEL");
var referralBonus = values.REFER_REWARD || 0.5;
var currency = values.CURRENCY || "TRX";

var referralLink = RefLib.getRefLink(bot.name, values.REFER_PREFIX || "user");
var image_url = "https://t.me/Crunchyroll_Anime_in_Hindi_Dub_c/3868"
var referrals = RefLib.getRefCount();

// ----------------------------
// ✅ QR Code URL
// ----------------------------
var qrWebAppUrl =
  "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
  encodeURIComponent(referralLink);

// ----------------------------
// ✅ Share Message for Inline
// ----------------------------
var shareMessage =
  "💰 *Earn Money By Referring!* 💰\n\n" +
  "*Get $0.50 For Each Referral!* 🚀\n" +
  "*Join Now And Start Earning!*\n\n" +
  "*Join Through My Link:* " + referralLink;

// ----------------------------
// ✅ Caption Message
// ----------------------------
var message =
  "<b>🩵 Your Referral Link:</b>\n<code>" + referralLink + "</code>\n\n" +
  "<b>🩷 Total Referrals:</b> " + referrals + "\n" +
  "<b>🌈 Per Referral Earning:</b> $" + referralBonus + "\n\n" +
  "<b>💳 Share Your Link and Earn Rewards!</b>";

// ----------------------------
// ✅ Inline Buttons
// ----------------------------
var buttons = {
  inline_keyboard: [
    // Row 1
    [{ text: "➯ Share Referral", switch_inline_query: shareMessage }],

    // Row 2
    [
      { text: "☍ My Refers", callback_data: "/myreferrals" },
      { text: "Copy Link", copy_text: { text: referralLink } }
    ],

    // Row 3
    [{ text: "⎆ Generate QR", web_app: { url: qrWebAppUrl } }],

    // Row 4
    [{ text: "▷ Back", callback_data: "/start" }]
  ]
};

// ----------------------------
// ✅ Send or Edit Message
// ----------------------------
if (request.message?.message_id) {
  Api.editMessageMedia({
    chat_id: chat.chatid,
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: image_url,
      caption: message,
      parse_mode: "HTML"
    },
    reply_markup: buttons
  });
} else {
  Api.sendPhoto({
    chat_id: chat.chatid,
    photo: image_url,
    caption: message,
    parse_mode: "HTML",
    reply_markup: buttons
  });
}
