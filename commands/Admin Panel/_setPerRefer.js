/*CMD
  command: /setPerRefer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *👬 Send the amount percentage which you want to set as referral bonus*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Language-specific data for /setPerRefer command
var setPerReferLangData = {
  "EN": {
    notNumber: "<i>⚠️ Send only numerical value.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer set to :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ You're not the admin of {botLink}.</i>"
  },
  "IT": {
    notNumber: "<i>⚠️ Invia solo un valore numerico.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer impostato a :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ Non sei l'amministratore di {botLink}.</i>"
  },
  "ES": {
    notNumber: "<i>⚠️ Envía solo un valor numérico.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer establecido en :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ No eres el administrador de {botLink}.</i>"
  },
  "PT": {
    notNumber: "<i>⚠️ Envie apenas um valor numérico.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer definido para :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ Você não é o administrador de {botLink}.</i>"
  },
  "DE": {
    notNumber: "<i>⚠️ Sende nur einen numerischen Wert.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer festgelegt auf :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ Du bist nicht der Administrator von {botLink}.</i>"
  },
  "FR": {
    notNumber: "<i>⚠️ Envoyez uniquement une valeur numérique.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer défini à :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ Vous n'êtes pas l'administrateur de {botLink}.</i>"
  },
  "RU": {
    notNumber: "<i>⚠️ Отправьте только числовое значение.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer установлен на :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ Вы не администратор {botLink}.</i>"
  },
  "ZH": {
    notNumber: "<i>⚠️ 仅发送数字值。</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer 设置为 :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ 你不是 {botLink} 的管理员。</i>"
  },
  "HI": {
    notNumber: "<i>⚠️ केवल संख्यात्मक मान भेजें।</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer सेट किया गया है :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ आप {botLink} के एडमिन नहीं हैं।</i>"
  },
  "UR": {
    notNumber: "<i>⚠️ صرف عددی قدر بھیجیں۔</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer سیٹ کیا گیا ہے :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ آپ {botLink} کے ایڈمن نہیں ہیں۔</i>"
  },
  "BN": {
    notNumber: "<i>⚠️ শুধুমাত্র সংখ্যাসূচক মান পাঠান।</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer সেট করা হয়েছে :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ আপনি {botLink} এর অ্যাডমিন নন।</i>"
  },
  "AR": {
    notNumber: "<i>⚠️ أرسل فقط قيمة رقمية.</i>",
    success: "<b>🧑‍🤝‍🧑 تم تعيين Per refer إلى :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ أنت لست المسؤول عن {botLink}.</i>"
  },
  "TR": {
    notNumber: "<i>⚠️ Lütfen sadece sayısal değer gönderin.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer ayarlandı :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ {botLink} yönetici değilsiniz.</i>"
  },
  "KO": {
    notNumber: "<i>⚠️ 숫자 값만 보내세요.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer 설정됨 :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ 당신은 {botLink}의 관리자가 아닙니다.</i>"
  },
  "FIL": {
    notNumber: "<i>⚠️ Magpadala lamang ng numerical value.</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer na-set sa :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ Hindi ka admin ng {botLink}.</i>"
  },
  "JA": {
    notNumber: "<i>⚠️ 数値のみを送信してください。</i>",
    success: "<b>🧑‍🤝‍🧑 Per refer が設定されました :</b> <code>{perRefer}%</code>",
    notAdmin: "<i>⚠️ あなたは {botLink} の管理者ではありません。</i>"
  }
};

var admin = Bot.getProperty("admin");
var users = user.telegramid;
var botLink = "@" + bot.name;

// Get user's language; default to EN if not set
var userLang = User.getProperty("Language");
if (!userLang) { userLang = "EN"; }
var lang = setPerReferLangData[userLang] || setPerReferLangData["EN"];

if (users === admin) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  var perRefer = message;
  
  if (!isNumeric(perRefer)) {
    var notNumberText = lang.notNumber;
    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    });
    Bot.runCommand("/setPerRefer");
    return;
  }
  
  Bot.setProperty("perRefer", perRefer, "string");
  
  var text = lang.success.replace("{perRefer}", perRefer);
  Api.sendMessage({
    text: text,
    parse_mode: "html"
  });
  
  Bot.runCommand("/adminPanel");
} else {
  var notAdminText = lang.notAdmin.replace("{botLink}", botLink);
  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  });
}
