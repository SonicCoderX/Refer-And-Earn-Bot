/*CMD
  command: /bonus
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

// Define translation strings for 16 languages
var translations = {
  en: {
    banned: "<i>🚫 You're banned.</i>",
    maintenance: "<i>🛠️ Bot is under maintenance, please come back after some time.</i>",
    bonusReady: "<b>🎁 Your bonus is ready to claim again.</b>",
    claimNow: "🎁 Claim now"
  },
  it: {
    banned: "<i>🚫 Sei bannato.</i>",
    maintenance: "<i>🛠️ Il bot è in manutenzione, per favore riprova più tardi.</i>",
    bonusReady: "<b>🎁 Il tuo bonus è pronto per essere richiesto nuovamente.</b>",
    claimNow: "🎁 Richiedi ora"
  },
  es: {
    banned: "<i>🚫 Estás baneado.</i>",
    maintenance: "<i>🛠️ El bot está en mantenimiento, por favor vuelve más tarde.</i>",
    bonusReady: "<b>🎁 Tu bono está listo para reclamarse de nuevo.</b>",
    claimNow: "🎁 Reclamar ahora"
  },
  pt: {
    banned: "<i>🚫 Você está banido.</i>",
    maintenance: "<i>🛠️ O bot está em manutenção, por favor volte mais tarde.</i>",
    bonusReady: "<b>🎁 Seu bônus está pronto para ser reivindicado novamente.</b>",
    claimNow: "🎁 Reivindicar agora"
  },
  de: {
    banned: "<i>🚫 Du bist gesperrt.</i>",
    maintenance: "<i>🛠️ Der Bot wird gewartet, bitte versuche es später erneut.</i>",
    bonusReady: "<b>🎁 Dein Bonus ist wieder abholbereit.</b>",
    claimNow: "🎁 Jetzt einfordern"
  },
  fr: {
    banned: "<i>🚫 Vous êtes banni.</i>",
    maintenance: "<i>🛠️ Le bot est en maintenance, veuillez revenir plus tard.</i>",
    bonusReady: "<b>🎁 Votre bonus est prêt à être réclamé.</b>",
    claimNow: "🎁 Réclamer maintenant"
  },
  ru: {
    banned: "<i>🚫 Вы забанены.</i>",
    maintenance: "<i>🛠️ Бот на обслуживании, пожалуйста, зайдите позже.</i>",
    bonusReady: "<b>🎁 Ваш бонус готов к повторному получению.</b>",
    claimNow: "🎁 Получить сейчас"
  },
  zh: {
    banned: "<i>🚫 你已被禁止使用。</i>",
    maintenance: "<i>🛠️ 机器人正在维护中，请稍后再来。</i>",
    bonusReady: "<b>🎁 您的奖金已可再次领取。</b>",
    claimNow: "🎁 立即领取"
  },
  hi: {
    banned: "<i>🚫 आपको प्रतिबंधित कर दिया गया है।</i>",
    maintenance: "<i>🛠️ बॉट मेंटेनेंस पर है, कृपया बाद में आएँ।</i>",
    bonusReady: "<b>🎁 आपका बोनस फिर से प्राप्त करने के लिए तैयार है।</b>",
    claimNow: "🎁 अभी क्लेम करें"
  },
  ur: {
    banned: "<i>🚫 آپ کو بین کر دیا گیا ہے۔</i>",
    maintenance: "<i>🛠️ بوٹ مرمت کے عمل میں ہے، براہ کرم بعد میں واپس آئیں۔</i>",
    bonusReady: "<b>🎁 آپ کا بونس دوبارہ کلیم کرنے کے لئے تیار ہے۔</b>",
    claimNow: "🎁 ابھی کلیم کریں"
  },
  bn: {
    banned: "<i>🚫 আপনাকে নিষিদ্ধ করা হয়েছে।</i>",
    maintenance: "<i>🛠️ বট রক্ষণাবেক্ষণে আছে, দয়া করে কিছুক্ষণ পর আবার চেষ্টা করুন।</i>",
    bonusReady: "<b>🎁 আপনার বোনাস আবার ক্লেইম করার জন্য প্রস্তুত।</b>",
    claimNow: "🎁 এখন ক্লেইম করুন"
  },
  ar: {
    banned: "<i>🚫 أنت محظور.</i>",
    maintenance: "<i>🛠️ الروبوت تحت الصيانة، يرجى العودة لاحقاً.</i>",
    bonusReady: "<b>🎁 بونصك جاهز للاستلام مرة أخرى.</b>",
    claimNow: "🎁 استلم الآن"
  },
  tr: {
    banned: "<i>🚫 Yasaklandınız.</i>",
    maintenance: "<i>🛠️ Bot bakımda, lütfen daha sonra tekrar deneyin.</i>",
    bonusReady: "<b>🎁 Bonusunuz tekrar talep edilmeye hazır.</b>",
    claimNow: "🎁 Hemen Talep Et"
  },
  ko: {
    banned: "<i>🚫 당신은 차단되었습니다.</i>",
    maintenance: "<i>🛠️ 봇이 유지보수 중입니다. 잠시 후 다시 시도해주세요.</i>",
    bonusReady: "<b>🎁 보너스를 다시 클레임할 준비가 되었습니다.</b>",
    claimNow: "🎁 지금 클레임하기"
  },
  fil: {
    banned: "<i>🚫 Banned ka na.</i>",
    maintenance: "<i>🛠️ Ang bot ay nasa maintenance, pakihintay at bumalik ulit mamaya.</i>",
    bonusReady: "<b>🎁 Handa na ang iyong bonus para muling kunin.</b>",
    claimNow: "🎁 Kunin na ngayon"
  },
  ja: {
    banned: "<i>🚫 あなたはBANされています。</i>",
    maintenance: "<i>🛠️ ボットはメンテナンス中です。しばらくしてからお試しください。</i>",
    bonusReady: "<b>🎁 あなたのボーナスは再度請求できる状態です。</b>",
    claimNow: "🎁 今すぐ請求"
  }
};

// Determine the user's language; default to English if not set
var userLang = Bot.getProperty("lang_" + user.telegramid) || "en";
var texts = translations[userLang];

// Check if user is banned
var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  Api.sendMessage({
    text: texts.banned,
    parse_mode: "html"
  });
  return;
}

// Check for maintenance status
var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  Api.sendMessage({
    text: texts.maintenance,
    parse_mode: "html"
  });
  return;
}

// Set bonusCollected property to "No"
User.setProperty("bonusCollected", "No", "string");

// Prepare the bonus-ready message and inline button using translations
var text = texts.bonusReady;
var button = [
  [
    {
      text: texts.claimNow,
      callback_data: "🎁 Bonus"
    }
  ]
];

Api.sendMessage({
  text: text,
  reply_markup: { inline_keyboard: button },
  parse_mode: "html"
});
