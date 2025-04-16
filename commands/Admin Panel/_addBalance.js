/*CMD
  command: /addBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *➕ Send user's telegram id whom you want to add balance*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Language-specific data for /addBalance command
var addBalanceLangData = {
  "EN": {
    notNumber: "<i>⚠️ Send only user's telegram id.</i>",
    addUserIDText: "<b>💸 Now send the amount which you want to add.\n\n🆔 User ID :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ You're not the admin of {botLink}.</i>"
  },
  "IT": {
    notNumber: "<i>⚠️ Invia solo l'ID telegram dell'utente.</i>",
    addUserIDText: "<b>💸 Ora invia l'importo che vuoi aggiungere.\n\n🆔 ID utente :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ Non sei l'amministratore di {botLink}.</i>"
  },
  "ES": {
    notNumber: "<i>⚠️ Envía solo el ID de Telegram del usuario.</i>",
    addUserIDText: "<b>💸 Ahora envía el monto que deseas agregar.\n\n🆔 ID de usuario :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ No eres el administrador de {botLink}.</i>"
  },
  "PT": {
    notNumber: "<i>⚠️ Envie apenas o ID do Telegram do usuário.</i>",
    addUserIDText: "<b>💸 Agora envie o valor que você deseja adicionar.\n\n🆔 ID do usuário :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ Você não é o administrador de {botLink}.</i>"
  },
  "DE": {
    notNumber: "<i>⚠️ Sende nur die Telegram-ID des Benutzers.</i>",
    addUserIDText: "<b>💸 Sende nun den Betrag, den du hinzufügen möchtest.\n\n🆔 Benutzer-ID :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ Du bist nicht der Administrator von {botLink}.</i>"
  },
  "FR": {
    notNumber: "<i>⚠️ Envoyez uniquement l'ID Telegram de l'utilisateur.</i>",
    addUserIDText: "<b>💸 Envoyez maintenant le montant que vous souhaitez ajouter.\n\n🆔 ID de l'utilisateur :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ Vous n'êtes pas l'administrateur de {botLink}.</i>"
  },
  "RU": {
    notNumber: "<i>⚠️ Отправьте только Telegram ID пользователя.</i>",
    addUserIDText: "<b>💸 Теперь отправьте сумму, которую хотите добавить.\n\n🆔 ID пользователя :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ Вы не администратор {botLink}.</i>"
  },
  "ZH": {
    notNumber: "<i>⚠️ 仅发送用户的 Telegram ID。</i>",
    addUserIDText: "<b>💸 现在发送您想要添加的金额。\n\n🆔 用户ID :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ 您不是 {botLink} 的管理员。</i>"
  },
  "HI": {
    notNumber: "<i>⚠️ कृपया केवल उपयोगकर्ता का Telegram ID भेजें।</i>",
    addUserIDText: "<b>💸 अब उस राशि को भेजें जिसे आप जोड़ना चाहते हैं।\n\n🆔 उपयोगकर्ता ID :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ आप {botLink} के एडमिन नहीं हैं।</i>"
  },
  "UR": {
    notNumber: "<i>⚠️ براہ کرم صرف صارف کا Telegram ID بھیجیں۔</i>",
    addUserIDText: "<b>💸 اب وہ رقم بھیجیں جو آپ شامل کرنا چاہتے ہیں۔\n\n🆔 صارف ID :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ آپ {botLink} کے ایڈمن نہیں ہیں۔</i>"
  },
  "BN": {
    notNumber: "<i>⚠️ শুধুমাত্র ব্যবহারকারীর Telegram ID পাঠান।</i>",
    addUserIDText: "<b>💸 এখন সেই পরিমাণ পাঠান যা আপনি যোগ করতে চান।\n\n🆔 ব্যবহারকারীর ID :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ আপনি {botLink} এর অ্যাডমিন নন।</i>"
  },
  "AR": {
    notNumber: "<i>⚠️ أرسل فقط معرف Telegram الخاص بالمستخدم.</i>",
    addUserIDText: "<b>💸 الآن أرسل المبلغ الذي تريد إضافته.\n\n🆔 معرف المستخدم :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ أنت لست المسؤول عن {botLink}.</i>"
  },
  "TR": {
    notNumber: "<i>⚠️ Lütfen sadece kullanıcının Telegram ID'sini gönderin.</i>",
    addUserIDText: "<b>💸 Eklemek istediğiniz miktarı şimdi gönderin.\n\n🆔 Kullanıcı ID'si :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ {botLink} yönetici değilsiniz.</i>"
  },
  "KO": {
    notNumber: "<i>⚠️ 사용자의 Telegram ID만 보내세요.</i>",
    addUserIDText: "<b>💸 추가하려는 금액을 지금 보내세요.\n\n🆔 사용자 ID :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ 당신은 {botLink}의 관리자가 아닙니다.</i>"
  },
  "FIL": {
    notNumber: "<i>⚠️ Magpadala lamang ng Telegram ID ng user.</i>",
    addUserIDText: "<b>💸 Ipadala ngayon ang halaga na nais mong idagdag.\n\n🆔 User ID :</b> <code>{addID}</code>",
    notAdmin: "<i>⚠️ Hindi ka admin ng {botLink}.</i>"
  },
  "JA": {
    notNumber: "<i>⚠️ ユーザーのTelegram IDのみを送信してください。</i>",
    addUserIDText: "<b>💸 追加したい金額を今すぐ送信してください。\n\n🆔 ユーザーID :</b> <code>{addID}</code>",
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
var lang = addBalanceLangData[userLang] || addBalanceLangData["EN"];

if (users === admin) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  var addID = message;

  if (!isNumeric(addID)) {
    var notNumberText = lang.notNumber;
    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    });
    Bot.runCommand("/addBalance");
    return;
  }

  Bot.setProperty("addID", addID, "integer");

  var text = lang.addUserIDText.replace("{addID}", addID);

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  });

  Bot.runCommand("/addBalance2");
} else {
  var notAdminText = lang.notAdmin.replace("{botLink}", botLink);
  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  });
}
