/*CMD
  command: /setBonus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *🎁 Send the amount which you want to set as bonus*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin");
var users = user.telegramid;
var botLink = "@" + bot.name;

var adminBonusLangData = {
  "EN": {
    notNumber: "<i>⚠️ Send only numerical value.</i>",
    bonusSet: "<b>🎁 Bonus set to :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ You're not the admin of {botLink}.</i>"
  },
  "IT": {
    notNumber: "<i>⚠️ Invia solo un valore numerico.</i>",
    bonusSet: "<b>🎁 Bonus impostato a :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ Non sei l'amministratore di {botLink}.</i>"
  },
  "ES": {
    notNumber: "<i>⚠️ Envía solo un valor numérico.</i>",
    bonusSet: "<b>🎁 Bono establecido en :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ No eres el administrador de {botLink}.</i>"
  },
  "PT": {
    notNumber: "<i>⚠️ Envie apenas um valor numérico.</i>",
    bonusSet: "<b>🎁 Bônus definido para :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ Você não é o administrador de {botLink}.</i>"
  },
  "DE": {
    notNumber: "<i>⚠️ Bitte sende nur einen numerischen Wert.</i>",
    bonusSet: "<b>🎁 Bonus festgelegt auf :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ Du bist nicht der Administrator von {botLink}.</i>"
  },
  "FR": {
    notNumber: "<i>⚠️ Veuillez envoyer uniquement une valeur numérique.</i>",
    bonusSet: "<b>🎁 Bonus défini à :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ Vous n'êtes pas l'administrateur de {botLink}.</i>"
  },
  "RU": {
    notNumber: "<i>⚠️ Отправьте только числовое значение.</i>",
    bonusSet: "<b>🎁 Бонус установлен на :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ Вы не администратор {botLink}.</i>"
  },
  "ZH": {
    notNumber: "<i>⚠️ 仅发送数字值。</i>",
    bonusSet: "<b>🎁 奖金设置为 :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ 您不是 {botLink} 的管理员。</i>"
  },
  "HI": {
    notNumber: "<i>⚠️ कृपया केवल संख्यात्मक मान भेजें।</i>",
    bonusSet: "<b>🎁 बोनस सेट किया गया :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ आप {botLink} के एडमिन नहीं हैं।</i>"
  },
  "UR": {
    notNumber: "<i>⚠️ صرف عددی قدر بھیجیں۔</i>",
    bonusSet: "<b>🎁 بونس سیٹ کیا گیا :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ آپ {botLink} کے ایڈمن نہیں ہیں۔</i>"
  },
  "BN": {
    notNumber: "<i>⚠️ শুধুমাত্র সংখ্যাসূচক মান পাঠান।</i>",
    bonusSet: "<b>🎁 বোনাস সেট করা হয়েছে :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ আপনি {botLink} এর এডমিন নন।</i>"
  },
  "AR": {
    notNumber: "<i>⚠️ الرجاء إرسال قيمة رقمية فقط.</i>",
    bonusSet: "<b>🎁 تم تعيين البونص على :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ أنت لست المسؤول عن {botLink}.</i>"
  },
  "TR": {
    notNumber: "<i>⚠️ Lütfen sadece sayısal değer gönderin.</i>",
    bonusSet: "<b>🎁 Bonus ayarlandı :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ {botLink} yöneticisi değilsiniz.</i>"
  },
  "KO": {
    notNumber: "<i>⚠️ 숫자 값만 보내세요.</i>",
    bonusSet: "<b>🎁 보너스가 설정되었습니다 :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ 당신은 {botLink}의 관리자가 아닙니다.</i>"
  },
  "FIL": {
    notNumber: "<i>⚠️ Magpadala lamang ng numerical value.</i>",
    bonusSet: "<b>🎁 Nakapset ang Bonus sa :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ Hindi ka ang admin ng {botLink}.</i>"
  },
  "JA": {
    notNumber: "<i>⚠️ 数値のみを送信してください。</i>",
    bonusSet: "<b>🎁 ボーナスが設定されました :</b> <code>{bonus} {currency}</code>",
    notAdmin: "<i>⚠️ あなたは {botLink} の管理者ではありません。</i>"
  }
};

var userLang = User.getProperty("Language");
if (!userLang) {
  userLang = "EN";
}
var lang = adminBonusLangData[userLang] || adminBonusLangData["EN"];

if (users === admin) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  var bonus = message;

  if (!isNumeric(bonus)) {
    var notNumberText = lang.notNumber;
    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    });
    Bot.runCommand("/setBonus");
    return;
  }

  Bot.setProperty("bonus", bonus, "string");

  var currency = "TRX";
  var text = lang.bonusSet
                .replace("{bonus}", bonus)
                .replace("{currency}", currency);

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
