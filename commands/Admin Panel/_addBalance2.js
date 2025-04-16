/*CMD
  command: /addBalance2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Language-specific data for /addBalance2 command (adding amount to user's balance)
var addBalance2LangData = {
  "EN": {
    notNumber: "<i>⚠️ Send only amount.</i>",
    adminText: "<b>💸 Amount</b> <code>{amount} {currency}</code> <b>is added to</b> <code>{addID}</code> <b>balance.</b>",
    userText: "<b>💸 Amount</b> <code>{amount} {currency}</code> <b>is added by system.</b>",
    notAdmin: "<i>⚠️ You're not the admin of {botLink}.</i>"
  },
  "IT": {
    notNumber: "<i>⚠️ Invia solo l'importo.</i>",
    adminText: "<b>💸 L'importo</b> <code>{amount} {currency}</code> <b>è stato aggiunto al saldo dell'utente con ID</b> <code>{addID}</code>.",
    userText: "<b>💸 L'importo</b> <code>{amount} {currency}</code> <b>è stato aggiunto dal sistema.</b>",
    notAdmin: "<i>⚠️ Non sei l'amministratore di {botLink}.</i>"
  },
  "ES": {
    notNumber: "<i>⚠️ Envía solo la cantidad.</i>",
    adminText: "<b>💸 La cantidad</b> <code>{amount} {currency}</code> <b>se ha añadido al saldo del usuario con ID</b> <code>{addID}</code>.",
    userText: "<b>💸 La cantidad</b> <code>{amount} {currency}</code> <b>ha sido añadida por el sistema.</b>",
    notAdmin: "<i>⚠️ No eres el administrador de {botLink}.</i>"
  },
  "PT": {
    notNumber: "<i>⚠️ Envie apenas o valor.</i>",
    adminText: "<b>💸 O valor</b> <code>{amount} {currency}</code> <b>foi adicionado ao saldo do usuário com ID</b> <code>{addID}</code>.",
    userText: "<b>💸 O valor</b> <code>{amount} {currency}</code> <b>foi adicionado pelo sistema.</b>",
    notAdmin: "<i>⚠️ Você não é o administrador de {botLink}.</i>"
  },
  "DE": {
    notNumber: "<i>⚠️ Sende nur den Betrag.</i>",
    adminText: "<b>💸 Der Betrag</b> <code>{amount} {currency}</code> <b>wurde dem Saldo des Benutzers mit der ID</b> <code>{addID}</code> <b>hinzugefügt.</b>",
    userText: "<b>💸 Der Betrag</b> <code>{amount} {currency}</code> <b>wurde vom System hinzugefügt.</b>",
    notAdmin: "<i>⚠️ Du bist nicht der Administrator von {botLink}.</i>"
  },
  "FR": {
    notNumber: "<i>⚠️ Envoyez uniquement le montant.</i>",
    adminText: "<b>💸 Le montant</b> <code>{amount} {currency}</code> <b>a été ajouté au solde de l'utilisateur avec l'ID</b> <code>{addID}</code>.",
    userText: "<b>💸 Le montant</b> <code>{amount} {currency}</code> <b>a été ajouté par le système.</b>",
    notAdmin: "<i>⚠️ Vous n'êtes pas l'administrateur de {botLink}.</i>"
  },
  "RU": {
    notNumber: "<i>⚠️ Отправьте только сумму.</i>",
    adminText: "<b>💸 Сумма</b> <code>{amount} {currency}</code> <b>добавлена к балансу пользователя с ID</b> <code>{addID}</code>.",
    userText: "<b>💸 Сумма</b> <code>{amount} {currency}</code> <b>была добавлена системой.</b>",
    notAdmin: "<i>⚠️ Вы не администратор {botLink}.</i>"
  },
  "ZH": {
    notNumber: "<i>⚠️ 仅发送金额。</i>",
    adminText: "<b>💸 金额</b> <code>{amount} {currency}</code> <b>已添加到用户 (ID: {addID}) 的余额中。</b>",
    userText: "<b>💸 金额</b> <code>{amount} {currency}</code> <b>已由系统添加。</b>",
    notAdmin: "<i>⚠️ 你不是 {botLink} 的管理员。</i>"
  },
  "HI": {
    notNumber: "<i>⚠️ केवल राशि भेजें।</i>",
    adminText: "<b>💸 राशि</b> <code>{amount} {currency}</code> <b>उपयोगकर्ता ID</b> <code>{addID}</code> <b>के बैलेंस में जोड़ दी गई है।</b>",
    userText: "<b>💸 राशि</b> <code>{amount} {currency}</code> <b>सिस्टम द्वारा जोड़ दी गई है।</b>",
    notAdmin: "<i>⚠️ आप {botLink} के एडमिन नहीं हैं।</i>"
  },
  "UR": {
    notNumber: "<i>⚠️ صرف رقم بھیجیں۔</i>",
    adminText: "<b>💸 رقم</b> <code>{amount} {currency}</code> <b>صارف کے ID</b> <code>{addID}</code> <b>کے بیلنس میں شامل کر دی گئی ہے۔</b>",
    userText: "<b>💸 رقم</b> <code>{amount} {currency}</code> <b>سسٹم کے ذریعے شامل کر دی گئی ہے۔</b>",
    notAdmin: "<i>⚠️ آپ {botLink} کے ایڈمن نہیں ہیں۔</i>"
  },
  "BN": {
    notNumber: "<i>⚠️ শুধুমাত্র পরিমাণ পাঠান।</i>",
    adminText: "<b>💸 পরিমাণ</b> <code>{amount} {currency}</code> <b>ব্যবহারকারীর ID</b> <code>{addID}</code> <b>এর ব্যালেন্সে যোগ করা হয়েছে।</b>",
    userText: "<b>💸 পরিমাণ</b> <code>{amount} {currency}</code> <b>সিস্টেম দ্বারা যোগ করা হয়েছে।</b>",
    notAdmin: "<i>⚠️ আপনি {botLink} এর অ্যাডমিন নন।</i>"
  },
  "AR": {
    notNumber: "<i>⚠️ أرسل فقط المبلغ.</i>",
    adminText: "<b>💸 المبلغ</b> <code>{amount} {currency}</code> <b>تمت إضافته إلى رصيد المستخدم ذو المعرف</b> <code>{addID}</code>.",
    userText: "<b>💸 المبلغ</b> <code>{amount} {currency}</code> <b>تمت إضافته بواسطة النظام.</b>",
    notAdmin: "<i>⚠️ أنت لست المسؤول عن {botLink}.</i>"
  },
  "TR": {
    notNumber: "<i>⚠️ Lütfen sadece miktarı gönderin.</i>",
    adminText: "<b>💸 Miktar</b> <code>{amount} {currency}</code> <b>, ID'si {addID} olan kullanıcının bakiyesine eklendi.</b>",
    userText: "<b>💸 Miktar</b> <code>{amount} {currency}</code> <b>sistem tarafından eklendi.</b>",
    notAdmin: "<i>⚠️ {botLink} yönetici değilsiniz.</i>"
  },
  "KO": {
    notNumber: "<i>⚠️ 금액만 보내세요.</i>",
    adminText: "<b>💸 금액</b> <code>{amount} {currency}</code> <b>가 사용자 ID</b> <code>{addID}</code> <b>의 잔액에 추가되었습니다.</b>",
    userText: "<b>💸 금액</b> <code>{amount} {currency}</code> <b>가 시스템에 의해 추가되었습니다.</b>",
    notAdmin: "<i>⚠️ 당신은 {botLink}의 관리자가 아닙니다.</i>"
  },
  "FIL": {
    notNumber: "<i>⚠️ Magpadala lamang ng halaga.</i>",
    adminText: "<b>💸 Halaga</b> <code>{amount} {currency}</code> <b>ay idinagdag sa balanse ng user na may ID</b> <code>{addID}</code>.",
    userText: "<b>💸 Halaga</b> <code>{amount} {currency}</code> <b>ay idinagdag ng sistema.</b>",
    notAdmin: "<i>⚠️ Hindi ka admin ng {botLink}.</i>"
  },
  "JA": {
    notNumber: "<i>⚠️ 数値のみを送信してください。</i>",
    adminText: "<b>💸 金額</b> <code>{amount} {currency}</code> <b>がユーザーID</b> <code>{addID}</code> <b>の残高に追加されました。</b>",
    userText: "<b>💸 金額</b> <code>{amount} {currency}</code> <b>がシステムによって追加されました。</b>",
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
var lang = addBalance2LangData[userLang] || addBalance2LangData["EN"];

if (users === admin) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  var amount = message;
  
  if (!isNumeric(amount)) {
    var notNumberText = lang.notNumber;
    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    });
    Bot.runCommand("/addBalance2");
    return;
  }
  
  var addID = Bot.getProperty("addID");
  var balance = Libs.ResourcesLib.anotherUserRes("balance", addID);
  balance.add(parseFloat(amount));
  
  var currency = "USDT";
  var adminText = lang.adminText
                      .replace("{amount}", amount)
                      .replace("{currency}", currency)
                      .replace("{addID}", addID);
  Api.sendMessage({
    text: adminText,
    parse_mode: "html"
  });
  
  var userText = lang.userText
                     .replace("{amount}", amount)
                     .replace("{currency}", currency);
  Api.sendMessage({
    chat_id: addID,
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
