/*CMD
  command: /unbanUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *✔️ Send user's telegram id whom you want to unban*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Language-specific data for /unbanUser command
var unbanUserLangData = {
  "EN": {
    notNumber: "<i>⚠️ Send only user's telegram id.</i>",
    adminText: "<b>🆔 User with telegram id</b> <code>{unbanID}</code> <b>is unbanned now ✔️.</b>",
    userText: "<i>✔️ You're unbanned by the admin.</i>",
    notAdmin: "<i>⚠️ You're not the admin of {botLink}.</i>"
  },
  "IT": {
    notNumber: "<i>⚠️ Invia solo l'ID telegram dell'utente.</i>",
    adminText: "<b>🆔 L'utente con l'ID telegram</b> <code>{unbanID}</code> <b>è stato riammesso ora ✔️.</b>",
    userText: "<i>✔️ Sei stato riammesso dall'amministratore.</i>",
    notAdmin: "<i>⚠️ Non sei l'amministratore di {botLink}.</i>"
  },
  "ES": {
    notNumber: "<i>⚠️ Envía solo el ID de Telegram del usuario.</i>",
    adminText: "<b>🆔 El usuario con el ID de Telegram</b> <code>{unbanID}</code> <b>ha sido readmitido ahora ✔️.</b>",
    userText: "<i>✔️ Has sido readmitido por el administrador.</i>",
    notAdmin: "<i>⚠️ No eres el administrador de {botLink}.</i>"
  },
  "PT": {
    notNumber: "<i>⚠️ Envie apenas o ID do Telegram do usuário.</i>",
    adminText: "<b>🆔 O usuário com o ID do Telegram</b> <code>{unbanID}</code> <b>foi readmitido agora ✔️.</b>",
    userText: "<i>✔️ Você foi readmitido pelo administrador.</i>",
    notAdmin: "<i>⚠️ Você não é o administrador de {botLink}.</i>"
  },
  "DE": {
    notNumber: "<i>⚠️ Sende nur die Telegram-ID des Benutzers.</i>",
    adminText: "<b>🆔 Benutzer mit der Telegram-ID</b> <code>{unbanID}</code> <b>wurde jetzt entsperrt ✔️.</b>",
    userText: "<i>✔️ Du wurdest vom Administrator entsperrt.</i>",
    notAdmin: "<i>⚠️ Du bist nicht der Administrator von {botLink}.</i>"
  },
  "FR": {
    notNumber: "<i>⚠️ Envoyez uniquement l'ID Telegram de l'utilisateur.</i>",
    adminText: "<b>🆔 L'utilisateur avec l'ID Telegram</b> <code>{unbanID}</code> <b>a été rétabli maintenant ✔️.</b>",
    userText: "<i>✔️ Vous avez été rétabli par l'administrateur.</i>",
    notAdmin: "<i>⚠️ Vous n'êtes pas l'administrateur de {botLink}.</i>"
  },
  "RU": {
    notNumber: "<i>⚠️ Отправьте только Telegram ID пользователя.</i>",
    adminText: "<b>🆔 Пользователь с Telegram ID</b> <code>{unbanID}</code> <b>был разблокирован сейчас ✔️.</b>",
    userText: "<i>✔️ Вы были разблокированы администратором.</i>",
    notAdmin: "<i>⚠️ Вы не администратор {botLink}.</i>"
  },
  "ZH": {
    notNumber: "<i>⚠️ 仅发送用户的 Telegram ID。</i>",
    adminText: "<b>🆔 Telegram ID为</b> <code>{unbanID}</code> <b>的用户现已解禁 ✔️。</b>",
    userText: "<i>✔️ 你已被管理员解禁。</i>",
    notAdmin: "<i>⚠️ 你不是 {botLink} 的管理员。</i>"
  },
  "HI": {
    notNumber: "<i>⚠️ कृपया केवल उपयोगकर्ता का Telegram ID भेजें।</i>",
    adminText: "<b>🆔 Telegram ID वाले उपयोगकर्ता</b> <code>{unbanID}</code> <b>को अब अनबैन कर दिया गया है ✔️।</b>",
    userText: "<i>✔️ आपको एडमिन द्वारा अनबैन कर दिया गया है।</i>",
    notAdmin: "<i>⚠️ आप {botLink} के एडमिन नहीं हैं।</i>"
  },
  "UR": {
    notNumber: "<i>⚠️ براہ کرم صرف صارف کا Telegram ID بھیجیں۔</i>",
    adminText: "<b>🆔 Telegram ID والا صارف</b> <code>{unbanID}</code> <b>اب انبن کر دیا گیا ہے ✔️۔</b>",
    userText: "<i>✔️ آپ کو ایڈمن نے انبن کر دیا ہے۔</i>",
    notAdmin: "<i>⚠️ آپ {botLink} کے ایڈمن نہیں ہیں۔</i>"
  },
  "BN": {
    notNumber: "<i>⚠️ শুধুমাত্র ব্যবহারকারীর Telegram ID পাঠান।</i>",
    adminText: "<b>🆔 Telegram ID সহ ব্যবহারকারী</b> <code>{unbanID}</code> <b>এখন আনব্যান করা হয়েছে ✔️।</b>",
    userText: "<i>✔️ আপনাকে অ্যাডমিন দ্বারা আনব্যান করা হয়েছে।</i>",
    notAdmin: "<i>⚠️ আপনি {botLink} এর অ্যাডমিন নন।</i>"
  },
  "AR": {
    notNumber: "<i>⚠️ أرسل فقط معرف Telegram الخاص بالمستخدم.</i>",
    adminText: "<b>🆔 المستخدم ذو معرف Telegram</b> <code>{unbanID}</code> <b>تم إلغاء حظره الآن ✔️.</b>",
    userText: "<i>✔️ لقد تم إلغاء حظرك من قبل المسؤول.</i>",
    notAdmin: "<i>⚠️ أنت لست المسؤول عن {botLink}.</i>"
  },
  "TR": {
    notNumber: "<i>⚠️ Lütfen sadece kullanıcının Telegram ID'sini gönderin.</i>",
    adminText: "<b>🆔 Telegram ID'si</b> <code>{unbanID}</code> <b>olan kullanıcı şimdi engeli kaldırıldı ✔️.</b>",
    userText: "<i>✔️ Yönetici tarafından engeliniz kaldırıldı.</i>",
    notAdmin: "<i>⚠️ {botLink} yönetici değilsiniz.</i>"
  },
  "KO": {
    notNumber: "<i>⚠️ 사용자의 Telegram ID만 보내세요.</i>",
    adminText: "<b>🆔 Telegram ID가</b> <code>{unbanID}</code> <b>인 사용자가 이제 차단 해제되었습니다 ✔️.</b>",
    userText: "<i>✔️ 관리자에 의해 차단이 해제되었습니다.</i>",
    notAdmin: "<i>⚠️ 당신은 {botLink}의 관리자가 아닙니다.</i>"
  },
  "FIL": {
    notNumber: "<i>⚠️ Magpadala lamang ng Telegram ID ng user.</i>",
    adminText: "<b>🆔 User na may Telegram ID</b> <code>{unbanID}</code> <b>ay na-unban na ngayon ✔️.</b>",
    userText: "<i>✔️ Na-unban ka ng admin.</i>",
    notAdmin: "<i>⚠️ Hindi ka admin ng {botLink}.</i>"
  },
  "JA": {
    notNumber: "<i>⚠️ ユーザーのTelegram IDのみを送信してください。</i>",
    adminText: "<b>🆔 Telegram IDが</b> <code>{unbanID}</code> <b>のユーザーは今、アンバンされました ✔️。</b>",
    userText: "<i>✔️ 管理者によりアンバンされました。</i>",
    notAdmin: "<i>⚠️ あなたは {botLink} の管理者ではありません。</i>"
  }
};

var admin = Bot.getProperty("admin");
var users = user.telegramid;
var botLink = "@" + bot.name;

// Get user's language; default to EN if not set
var userLang = User.getProperty("Language");
if (!userLang) {
  userLang = "EN";
}
var lang = unbanUserLangData[userLang] || unbanUserLangData["EN"];

if (users === admin) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  var unbanID = message;
  
  if (!isNumeric(unbanID)) {
    var notNumberText = lang.notNumber;
    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    });
    Bot.runCommand("/unbanUser");
    return;
  }
  
  Bot.setProperty(unbanID, "Unban");
  
  var adminText = lang.adminText.replace("{unbanID}", unbanID);
  Api.sendMessage({
    text: adminText,
    parse_mode: "html"
  });
  
  var userText = lang.userText;
  Api.sendMessage({
    chat_id: unbanID,
    text: userText,
    parse_mode: "html"
  });
} else {
  var notAdminText = lang.notAdmin.replace("{botLink}", botLink);
  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  });
}
