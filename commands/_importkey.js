/*CMD
  command: /importkey
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

// /importkey command - Import Private Key

// Set awaiting property to capture the next user message
Bot.setProperty("awaiting_wallet_" + user.telegramid, "importkey", "string");

// Define multi-language translations
var importKeyLangData = {
  "EN": { enterPrivateKey: "<b>🔑 Enter Private Key ⬇️</b>" },
  "IT": { enterPrivateKey: "<b>🔑 Inserisci la Chiave Privata ⬇️</b>" },
  "ES": { enterPrivateKey: "<b>🔑 Introduce la Clave Privada ⬇️</b>" },
  "PT": { enterPrivateKey: "<b>🔑 Digite a Chave Privada ⬇️</b>" },
  "DE": { enterPrivateKey: "<b>🔑 Gib den Private Key ein ⬇️</b>" },
  "FR": { enterPrivateKey: "<b>🔑 Entrez la Clé Privée ⬇️</b>" },
  "RU": { enterPrivateKey: "<b>🔑 Введите Приватный Ключ ⬇️</b>" },
  "ZH": { enterPrivateKey: "<b>🔑 输入私钥 ⬇️</b>" },
  "HI": { enterPrivateKey: "<b>🔑 प्राइवेट की दर्ज करें ⬇️</b>" },
  "UR": { enterPrivateKey: "<b>🔑 پرائیویٹ کی داخل کریں ⬇️</b>" },
  "BN": { enterPrivateKey: "<b>🔑 প্রাইভেট কী লিখুন ⬇️</b>" },
  "AR": { enterPrivateKey: "<b>🔑 أدخل المفتاح الخاص ⬇️</b>" },
  "TR": { enterPrivateKey: "<b>🔑 Özel Anahtarı Girin ⬇️</b>" },
  "KO": { enterPrivateKey: "<b>🔑 개인 키를 입력하세요 ⬇️</b>" },
  "FIL": { enterPrivateKey: "<b>🔑 Ipasok ang Private Key ⬇️</b>" },
  "JA": { enterPrivateKey: "<b>🔑 プライベートキーを入力してください ⬇️</b>" }
};

// Detect user language or default to English
var userLang = User.getProperty("Language") || "EN";
var lang = importKeyLangData[userLang] || importKeyLangData["EN"];

// Send message prompting the user to enter their private key
Api.sendMessage({
  text: lang.enterPrivateKey,
  parse_mode: "html"
});
Bot.runCommand("/send_message");
