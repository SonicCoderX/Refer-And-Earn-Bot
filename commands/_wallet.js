/*CMD
  command: /wallet
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

if (request.message) {
  var chatID = request.message.chat_id;
  var messageID = request.message.message_id;

  Api.deleteMessage({
    chat_id: chatID,
    message_id: messageID
  });
}

var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>";
  Api.sendMessage({ text: banText, parse_mode: "html" });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  var onText = "<i>🛠️ Bot is under maintenance, please come back after some time.</i>";
  Api.sendMessage({ text: onText, parse_mode: "html" });
  return;
}

// Define translations for the wallet prompt and Cancel button in 16 languages
var walletMsgs = {
  "send_address": {
    "EN": "*🗂️ Send your USDT (BEP20) address.*",
    "IT": "*🗂️ Invia il tuo indirizzo USDT (BEP20).*",
    "ES": "*🗂️ Envía tu dirección USDT (BEP20).*",
    "PT": "*🗂️ Envie seu endereço USDT (BEP20).*",
    "DE": "*🗂️ Sende deine USDT (BEP20) Adresse.*",
    "FR": "*🗂️ Envoyez votre adresse USDT (BEP20).*",
    "RU": "*🗂️ Отправьте свой адрес USDT (BEP20).*",
    "ZH": "*🗂️ 发送您的 USDT (BEP20) 地址。*",
    "HI": "*🗂️ अपना USDT (BEP20) पता भेजें.*",
    "UR": "*🗂️ اپنا USDT (BEP20) پتہ بھیجیں۔*",
    "BN": "*🗂️ আপনার USDT (BEP20) ঠিকানা পাঠান.*",
    "AR": "*🗂️ أرسل عنوان USDT (BEP20) الخاص بك.*",
    "TR": "*🗂️ USDT (BEP20) adresinizi gönderin.*",
    "KO": "*🗂️ USDT (BEP20) 주소를 보내세요.*",
    "FIL": "*🗂️ Ipadala ang iyong USDT (BEP20) address.*",
    "JA": "*🗂️ あなたのUSDT (BEP20)アドレスを送信してください。*"
  },
  "cancel": {
    "EN": "❌ Cancel",
    "IT": "❌ Annulla",
    "ES": "❌ Cancelar",
    "PT": "❌ Cancelar",
    "DE": "❌ Abbrechen",
    "FR": "❌ Annuler",
    "RU": "❌ Отмена",
    "ZH": "❌ 取消",
    "HI": "❌ रद्द करें",
    "UR": "❌ منسوخ کریں",
    "BN": "❌ বাতিল করুন",
    "AR": "❌ إلغاء",
    "TR": "❌ İptal",
    "KO": "❌ 취소",
    "FIL": "❌ Kanselahin",
    "JA": "❌ キャンセル"
  }
};

// Retrieve user's language preference (default to English "EN")
var userLang = User.getProperty("Language") || "EN";

// Get the translated text and keyboard label
var text = walletMsgs.send_address[userLang] || walletMsgs.send_address["EN"];
var keyboard = walletMsgs.cancel[userLang] || walletMsgs.cancel["EN"];

// Send the inline keyboard with the translated prompt
Bot.sendKeyboard(keyboard, text);

// Run the next command
Bot.runCommand("/wallet2");
