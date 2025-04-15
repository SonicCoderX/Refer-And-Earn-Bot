/*CMD
  command: /myreferrals
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
var image_url = values.REFER_IMAGE_URL || "https://telegra.ph/file/48041b64392e58130f23a.jpg";

// ----------------------------
// ✅ Referral List
// ----------------------------
let refList = Libs.ReferralLib.getRefList();
let referredUsers = refList.getUsers();
let totalReferrals = Libs.ReferralLib.getRefCount();

var caption = "";

// ----------------------------
// ✅ Handle Empty State
// ----------------------------
if (!refList.exist || !referredUsers.length) {
  caption = "❌ <b>No affiliated users found.</b>";
} else {
  caption =
    `➺ <b>Total Invites:</b> ${totalReferrals}\n` +
    `➺ <b>First Invite:</b> ${refList.created_at}\n\n` +
    `👨‍👨‍👦 <b>Your Invites:</b>\n`;

  for (var index in referredUsers) {
    var user = referredUsers[index];
    var name = user.first_name || "Unknown";
    caption += `➥ <a href="tg://user?id=${user.telegramid}">${name}</a>\n`;
  }
}

// ----------------------------
// ✅ Inline Back Button
// ----------------------------
var backButton = {
  inline_keyboard: [[{ text: "▷ Bᴀᴄᴋ", callback_data: "/referral" }]]
};

// ----------------------------
// ✅ Edit Image + Caption
// ----------------------------
Api.editMessageMedia({
  chat_id: chat.chatid,
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: image_url,
    caption: caption,
    parse_mode: "HTML"
  },
  reply_markup: backButton
});
