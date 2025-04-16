/*CMD
  command: /removeBalance2
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

// Language-specific data for /removeBalance2 command
var removeBalanceLangData = {
  "EN": {
    notNumber: "<i>⚠️ Send only amount.</i>",
    adminText: "<b>💸 Amount</b> <code>{amount} {currency}</code> <b>is removed from</b> <code>{removeID}</code> <b>balance.</b>",
    userText: "<b>💸 Amount</b> <code>{amount} {currency}</code> <b>is removed by system.</b>",
    notAdmin: "<i>⚠️ You're not the admin of {botLink}.</i>"
  },
  "IT": {
    notNumber: "<i>⚠️ Invia solo l'importo.</i>",
    adminText: "<b>💸 L'importo</b> <code>{amount} {currency}</code> <b>è stato rimosso dal saldo dell'utente con ID</b> <code>{removeID}</code>.",
    userText: "<b>💸 L'importo</b> <code>{amount} {currency}</code> <b>è stato rimosso dall'amministratore.</b>",
    notAdmin: "<i>⚠️ Non sei l'amministratore di {botLink}.</i>"
  },
  "ES": {
    notNumber: "<i>⚠️ Envía solo la cantidad.</i>",
    adminText: "<b>💸 La cantidad</b> <code>{amount} {currency}</code> <b>se ha eliminado del saldo del usuario con ID</b> <code>{removeID}</code>.",
    userText: "<b>💸 La cantidad</b> <code>{amount} {currency}</code> <b>ha sido eliminada por el administrador.</b>",
    notAdmin: "<i>⚠️ No eres el administrador de {botLink}.</i>"
  },
  "PT": {
    notNumber: "<i>⚠️ Envie apenas o valor.</i>",
    adminText: "<b>💸 O valor</b> <code>{amount} {currency}</code> <b>foi removido do saldo do usuário com ID</b> <code>{removeID}</code>.",
    userText: "<b>💸 O valor</b> <code>{amount} {currency}</code> <b>foi removido pelo administrador.</b>",
    notAdmin: "<i>⚠️ Você não é o administrador de {botLink}.</i>"
  },
  "DE": {
    notNumber: "<i>⚠️ Sende nur den Betrag.</i>",
    adminText: "<b>💸 Der Betrag</b> <code>{amount} {currency}</code> <b>wurde vom Saldo des Benutzers mit der ID</b> <code>{removeID}</code> <b>entfernt.</b>",
    userText: "<b>💸 Der Betrag</b> <code>{amount} {currency}</code> <b>wurde vom Administrator entfernt.</b>",
    notAdmin: "<i>⚠️ Du bist nicht der Administrator von {botLink}.</i>"
  },
  "FR": {
    notNumber: "<i>⚠️ Envoyez uniquement le montant.</i>",
    adminText: "<b>💸 Le montant</b> <code>{amount} {currency}</code> <b>a été retiré du solde de l'utilisateur avec l'ID</b> <code>{removeID}</code>.",
    userText: "<b>💸 Le montant</b> <code>{amount} {currency}</code> <b>a été retiré par l'administrateur.</b>",
    notAdmin: "<i>⚠️ Vous n'êtes pas l'administrateur de {botLink}.</i>"
  },
  "RU": {
    notNumber: "<i>⚠️ Отправьте только сумму.</i>",
    adminText: "<b>💸 Сумма</b> <code>{amount} {currency}</code> <b>была удалена с баланса пользователя с ID</b> <code>{removeID}</code>.",
    userText: "<b>💸 Сумма</b> <code>{amount} {currency}</code> <b>была удалена администратором.</b>",
    notAdmin: "<i>⚠️ Вы не администратор {botLink}.</i>"
  },
  "ZH": {
    notNumber: "<i>⚠️ 仅发送金额。</i>",
    adminText: "<b>💸 金额</b> <code>{amount} {currency}</code> <b>已从用户 (ID: {removeID}) 的余额中扣除。</b>",
    userText: "<b>💸 金额</b> <code>{amount} {currency}</code> <b>已被管理员扣除。</b>",
    notAdmin: "<i>⚠️ 你不是 {botLink} 的管理员。</i>"
  },
  "HI": {
    notNumber: "<i>⚠️ केवल राशि भेजें।</i>",
    adminText: "<b>💸 राशि</b> <code>{amount} {currency}</code> <b>उपयोगकर्ता ID</b> <code>{removeID}</code> <b>के बैलेंस से हटा दी गई है।</b>",
    userText: "<b>💸 राशि</b> <code>{amount} {currency}</code> <b>एडमिन द्वारा हटा दी गई है।</b>",
    notAdmin: "<i>⚠️ आप {botLink} के एडमिन नहीं हैं।</i>"
  },
  "UR": {
    notNumber: "<i>⚠️ صرف رقم بھیجیں۔</i>",
    adminText: "<b>💸 رقم</b> <code>{amount} {currency}</code> <b>صارف کے ID</b> <code>{removeID}</code> <b>کے بیلنس سے نکال دی گئی ہے۔</b>",
    userText: "<b>💸 رقم</b> <code>{amount} {currency}</code> <b>ایڈمن نے نکال دی ہے۔</b>",
    notAdmin: "<i>⚠️ آپ {botLink} کے ایڈمن نہیں ہیں۔</i>"
  },
  "BN": {
    notNumber: "<i>⚠️ শুধুমাত্র পরিমাণ পাঠান।</i>",
    adminText: "<b>💸 পরিমাণ</b> <code>{amount} {currency}</code> <b>ব্যবহারকারীর ID</b> <code>{removeID}</code> <b>এর ব্যালেন্স থেকে বাদ দেওয়া হয়েছে।</b>",
    userText: "<b>💸 পরিমাণ</b> <code>{amount} {currency}</code> <b>সিস্টেম দ্বারা বাদ দেওয়া হয়েছে।</b>",
    notAdmin: "<i>⚠️ আপনি {botLink} এর অ্যাডমিন নন।</i>"
  },
  "AR": {
    notNumber: "<i>⚠️ أرسل فقط المبلغ.</i>",
    adminText: "<b>💸 المبلغ</b> <code>{amount} {currency}</code> <b>تمت إزالته من رصيد المستخدم ذو المعرف</b> <code>{removeID}</code>.",
    userText: "<b>💸 المبلغ</b> <code>{amount} {currency}</code> <b>تمت إزالته بواسطة المسؤول.</b>",
    notAdmin: "<i>⚠️ أنت لست المسؤول عن {botLink}.</i>"
  },
  "TR": {
    notNumber: "<i>⚠️ Lütfen sadece miktarı gönderin.</i>",
    adminText: "<b>💸 Miktar</b> <code>{amount} {currency}</code> <b>, ID'si {removeID} olan kullanıcının bakiyesinden çıkarıldı.</b>",
    userText: "<b>💸 Miktar</b> <code>{amount} {currency}</code> <b>yönetici tarafından çıkarıldı.</b>",
    notAdmin: "<i>⚠️ {botLink} yönetici değilsiniz.</i>"
  },
  "KO": {
    notNumber: "<i>⚠️ 금액만 보내세요.</i>",
    adminText: "<b>💸 금액</b> <code>{amount} {currency}</code> <b>가 사용자 ID</b> <code>{removeID}</code> <b>의 잔액에서 차감되었습니다.</b>",
    userText: "<b>💸 금액</b> <code>{amount} {currency}</code> <b>가 관리자에 의해 차감되었습니다.</b>",
    notAdmin: "<i>⚠️ 당신은 {botLink}의 관리자가 아닙니다.</i>"
  },
  "FIL": {
    notNumber: "<i>⚠️ Magpadala lamang ng halaga.</i>",
    adminText: "<b>💸 Halaga</b> <code>{amount} {currency}</code> <b>ay tinanggal mula sa balanse ng user na may ID</b> <code>{removeID}</code>.",
    userText: "<b>💸 Halaga</b> <code>{amount} {currency}</code> <b>ay tinanggal ng admin.</b>",
    notAdmin: "<i>⚠️ Hindi ka admin ng {botLink}.</i>"
  },
  "JA": {
    notNumber: "<i>⚠️ 数値のみを送信してください。</i>",
    adminText: "<b>💸 金額</b> <code>{amount} {currency}</code> <b>がユーザーID</b> <code>{removeID}</code> <b>の残高から削除されました。</b>",
    userText: "<b>💸 金額</b> <code>{amount} {currency}</code> <b>が管理者によって削除されました。</b>",
    notAdmin: "<i>⚠️ あなたは {botLink} の管理者ではありません。</i>"
  }
};

var admin = Bot.getProperty("admin");
var users = user.telegramid;
var botLink = "@" + bot.name;

// Get user's language; default to EN if not set
var userLang = User.getProperty("Language");
if (!userLang) { userLang = "EN"; }
var lang = removeBalanceLangData[userLang] || removeBalanceLangData["EN"];

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
    Bot.runCommand("/removeBalance2");
    return;
  }
  
  var removeID = Bot.getProperty("removeID");
  var balance = Libs.ResourcesLib.anotherUserRes("balance", removeID);
  balance.remove(parseFloat(amount));
  
  var currency = "TRX";
  var adminText = lang.adminText
                      .replace("{amount}", amount)
                      .replace("{currency}", currency)
                      .replace("{removeID}", removeID);
  Api.sendMessage({
    text: adminText,
    parse_mode: "html"
  });
  
  var userText = lang.userText
                     .replace("{amount}", amount)
                     .replace("{currency}", currency);
  Api.sendMessage({
    chat_id: removeID,
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
