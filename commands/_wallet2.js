/*CMD
  command: /wallet2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Define translation strings for 16 languages
var translations = {
  en: {
    banned: "<i>🚫 You're banned.</i>",
    maintenance: "<i>🛠️ Bot is under maintenance, please come back after some time.</i>",
    invalidWallet: "<i>⚠️ Invalid USDT (BEP20) wallet address. Please try again.</i>",
    walletSet: "<b>🗂️ Your USDT (BEP20) wallet has been set to:</b> <code>{wallet}</code>"
  },
  it: {
    banned: "<i>🚫 Sei bannato.</i>",
    maintenance: "<i>🛠️ Il bot è in manutenzione, per favore riprova più tardi.</i>",
    invalidWallet: "<i>⚠️ Indirizzo wallet USDT (BEP20) non valido. Riprova.</i>",
    walletSet: "<b>🗂️ Il tuo wallet USDT (BEP20) è stato impostato su:</b> <code>{wallet}</code>"
  },
  es: {
    banned: "<i>🚫 Estás baneado.</i>",
    maintenance: "<i>🛠️ El bot está en mantenimiento, por favor vuelve más tarde.</i>",
    invalidWallet: "<i>⚠️ Dirección de wallet USDT (BEP20) inválida. Inténtalo de nuevo.</i>",
    walletSet: "<b>🗂️ Tu wallet USDT (BEP20) se ha establecido en:</b> <code>{wallet}</code>"
  },
  pt: {
    banned: "<i>🚫 Você está banido.</i>",
    maintenance: "<i>🛠️ O bot está em manutenção, por favor volte mais tarde.</i>",
    invalidWallet: "<i>⚠️ Endereço de wallet USDT (BEP20) inválido. Por favor, tente novamente.</i>",
    walletSet: "<b>🗂️ Seu wallet USDT (BEP20) foi definido para:</b> <code>{wallet}</code>"
  },
  de: {
    banned: "<i>🚫 Du bist gesperrt.</i>",
    maintenance: "<i>🛠️ Der Bot ist in Wartung, bitte komm später wieder.</i>",
    invalidWallet: "<i>⚠️ Ungültige USDT (BEP20) Wallet-Adresse. Bitte versuche es erneut.</i>",
    walletSet: "<b>🗂️ Deine USDT (BEP20) Wallet wurde gesetzt auf:</b> <code>{wallet}</code>"
  },
  fr: {
    banned: "<i>🚫 Vous êtes banni.</i>",
    maintenance: "<i>🛠️ Le bot est en maintenance, veuillez revenir plus tard.</i>",
    invalidWallet: "<i>⚠️ Adresse de wallet USDT (BEP20) invalide. Veuillez réessayer.</i>",
    walletSet: "<b>🗂️ Votre wallet USDT (BEP20) a été défini sur :</b> <code>{wallet}</code>"
  },
  ru: {
    banned: "<i>🚫 Вы заблокированы.</i>",
    maintenance: "<i>🛠️ Бот на обслуживании, пожалуйста, попробуйте позже.</i>",
    invalidWallet: "<i>⚠️ Неверный адрес USDT (BEP20) кошелька. Попробуйте снова.</i>",
    walletSet: "<b>🗂️ Ваш USDT (BEP20) кошелек установлен на:</b> <code>{wallet}</code>"
  },
  zh: {
    banned: "<i>🚫 您已被禁止使用此机器人。</i>",
    maintenance: "<i>🛠️ 机器人正在维护中，请稍后再试。</i>",
    invalidWallet: "<i>⚠️ 无效的 USDT (BEP20) 钱包地址。请重试。</i>",
    walletSet: "<b>🗂️ 您的 USDT (BEP20) 钱包已设置为：</b> <code>{wallet}</code>"
  },
  hi: {
    banned: "<i>🚫 आपको प्रतिबंधित कर दिया गया है।</i>",
    maintenance: "<i>🛠️ बॉट मेंटेनेंस पर है, कृपया बाद में प्रयास करें।</i>",
    invalidWallet: "<i>⚠️ अमान्य USDT (BEP20) वॉलेट पता। कृपया पुनः प्रयास करें।</i>",
    walletSet: "<b>🗂️ आपका USDT (BEP20) वॉलेट सेट हो गया है:</b> <code>{wallet}</code>"
  },
  ur: {
    banned: "<i>🚫 آپ کو پابندی لگا دی گئی ہے۔</i>",
    maintenance: "<i>🛠️ بوٹ کی مرمت جاری ہے، براہ کرم بعد میں کوشش کریں۔</i>",
    invalidWallet: "<i>⚠️ غلط USDT (BEP20) والٹ ایڈریس۔ دوبارہ کوشش کریں۔</i>",
    walletSet: "<b>🗂️ آپ کا USDT (BEP20) والٹ سیٹ ہو گیا ہے:</b> <code>{wallet}</code>"
  },
  bn: {
    banned: "<i>🚫 আপনাকে নিষিদ্ধ করা হয়েছে।</i>",
    maintenance: "<i>🛠️ বট রক্ষণাবেক্ষণে আছে, অনুগ্রহ করে পরে চেষ্টা করুন।</i>",
    invalidWallet: "<i>⚠️ ভুল USDT (BEP20) ওয়ালেট ঠিকানা। অনুগ্রহ করে আবার চেষ্টা করুন।</i>",
    walletSet: "<b>🗂️ আপনার USDT (BEP20) ওয়ালেট সেট করা হয়েছে:</b> <code>{wallet}</code>"
  },
  ar: {
    banned: "<i>🚫 تم حظرك.</i>",
    maintenance: "<i>🛠️ البوت تحت الصيانة، يرجى المحاولة لاحقاً.</i>",
    invalidWallet: "<i>⚠️ عنوان محفظة USDT (BEP20) غير صالح. يرجى المحاولة مرة أخرى.</i>",
    walletSet: "<b>🗂️ تم تعيين محفظتك USDT (BEP20) إلى:</b> <code>{wallet}</code>"
  },
  tr: {
    banned: "<i>🚫 Erişim Reddedildi!</i>",
    maintenance: "<i>🛠️ Bot bakımda, lütfen daha sonra tekrar deneyin.</i>",
    invalidWallet: "<i>⚠️ Geçersiz USDT (BEP20) cüzdan adresi. Lütfen tekrar deneyin.</i>",
    walletSet: "<b>🗂️ USDT (BEP20) cüzdanınız şuna ayarlandı:</b> <code>{wallet}</code>"
  },
  ko: {
    banned: "<i>🚫 접근 거부!</i>",
    maintenance: "<i>🛠️ 봇이 점검 중입니다, 나중에 다시 시도해주세요.</i>",
    invalidWallet: "<i>⚠️ 잘못되었거나 누락된 USDT (BEP20) 지갑 주소입니다. 다시 시도해주세요.</i>",
    walletSet: "<b>🗂️ 귀하의 USDT (BEP20) 지갑이 다음으로 설정되었습니다:</b> <code>{wallet}</code>"
  },
  fil: {
    banned: "<i>🚫 Banned ka na.</i>",
    maintenance: "<i>🛠️ Nasa maintenance ang bot, pakisubukang muli mamaya.</i>",
    invalidWallet: "<i>⚠️ Mali o kulang ang USDT (BEP20) wallet address. Pakisubukang muli.</i>",
    walletSet: "<b>🗂️ Na-set na ang iyong USDT (BEP20) wallet sa:</b> <code>{wallet}</code>"
  },
  ja: {
    banned: "<i>🚫 アクセス拒否！</i>",
    maintenance: "<i>🛠️ ボットはメンテナンス中です。後ほどお試しください。</i>",
    invalidWallet: "<i>⚠️ 無効な USDT (BEP20) ウォレットアドレスです。再度お試しください。</i>",
    walletSet: "<b>🗂️ あなたの USDT (BEP20) ウォレットは次に設定されました：</b> <code>{wallet}</code>"
  }
};

// Determine the user's language; default to English if not set
var userLang = Bot.getProperty("lang_" + user.telegramid) || "en";
var texts = translations[userLang];

// Get the wallet address from the user's message, trimmed
var wallet = message.trim();
var currency = "USDT (BEP20)";

// Validate the wallet address using a regex pattern
if (!/^0x[a-fA-F0-9]{40}$/.test(wallet)) {
  Api.sendMessage({
    text: texts.invalidWallet,
    parse_mode: "html"
  });
  return;
}

// Save the wallet address to the user's properties
User.setProperty("wallet", wallet, "string");

// Send confirmation message with the wallet address inserted into the localized text
var confirmation = texts.walletSet.replace("{wallet}", wallet);
Api.sendMessage({
  text: confirmation,
  parse_mode: "html"
});

// Redirect to main menu
Bot.runCommand("/mainMenu");
