/*CMD
  command: /importphrase
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

// /importphrase command - Import By Seed Phrase

// उपयोगकर्ता के लिए Awaiting Wallet प्रॉपर्टी सेट करें
Bot.setProperty("awaiting_wallet_" + user.telegramid, "importphrase", "string");

// भाषा-विशिष्ट डेटा
var importPhraseLangData = {
  "EN": { enterMnemonic: "<b>📝 Enter 12-24 Word Mnemonic / Recovery Phrase ⬇️</b>" },
  "IT": { enterMnemonic: "<b>📝 Inserisci una frase mnemonica di 12-24 parole / Frase di recupero ⬇️</b>" },
  "ES": { enterMnemonic: "<b>📝 Ingresa una mnemónica de 12-24 palabras / Frase de recuperación ⬇️</b>" },
  "PT": { enterMnemonic: "<b>📝 Digite uma mnemônica de 12-24 palavras / Frase de recuperação ⬇️</b>" },
  "DE": { enterMnemonic: "<b>📝 Gib einen 12-24 Wörter Mnemonic / Wiederherstellungsphrase ein ⬇️</b>" },
  "FR": { enterMnemonic: "<b>📝 Entrez une mnémonique de 12-24 mots / Phrase de récupération ⬇️</b>" },
  "RU": { enterMnemonic: "<b>📝 Введите мнемоническую фразу из 12-24 слов / Фразу восстановления ⬇️</b>" },
  "ZH": { enterMnemonic: "<b>📝 输入12-24个单词的助记词 / 恢复短语 ⬇️</b>" },
  "HI": { enterMnemonic: "<b>📝 12-24 शब्दों वाला मेमनॉमिक / रिकवरी फ्रेज दर्ज करें ⬇️</b>" },
  "UR": { enterMnemonic: "<b>📝 12-24 لفظوں پر مشتمل میمونک / ریکاوری فریز درج کریں ⬇️</b>" },
  "BN": { enterMnemonic: "<b>📝 12-24 শব্দের মেমোনিক / রিকভারি ফ্রেজ লিখুন ⬇️</b>" },
  "AR": { enterMnemonic: "<b>📝 أدخل عبارة مميزة أو عبارة استرداد من 12-24 كلمة ⬇️</b>" },
  "TR": { enterMnemonic: "<b>📝 12-24 Kelimelik Mnemonic / Kurtarma İfadesi Girin ⬇️</b>" },
  "KO": { enterMnemonic: "<b>📝 12-24 단어의 니모닉 / 복구 문구를 입력하세요 ⬇️</b>" },
  "FIL": { enterMnemonic: "<b>📝 Ipasok ang 12-24 na Salitang Mnemonic / Recovery Phrase ⬇️</b>" },
  "JA": { enterMnemonic: "<b>📝 12-24語のニーモニック / リカバリーフレーズを入力してください ⬇️</b>" }
};

// उपयोगकर्ता की भाषा प्राप्त करें; अगर सेट नहीं है तो डिफ़ॉल्ट "EN" का उपयोग करें
var userLang = User.getProperty("Language");
if (!userLang) {
  userLang = "EN";
}
var lang = importPhraseLangData[userLang] || importPhraseLangData["EN"];

// संदेश भेजें
Api.sendMessage({
  text: lang.enterMnemonic,
  parse_mode: "html"
});
Bot.runCommand("/sended");
