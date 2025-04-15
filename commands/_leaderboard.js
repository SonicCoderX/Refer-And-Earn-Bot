/*CMD
  command: /leaderboard
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🏆 leaderboard
  group: 
CMD*/

// Command: /leaderboard

// 1) If this is a callback query, delete the triggering message
if (request.data) {
  var chatID = request.message.chat_id;
  var messageID = request.message.message_id;
  Api.deleteMessage({ chat_id: chatID, message_id: messageID });
}

// 2) Detect user language or default to "EN"
var userLang = User.getProperty("Language") || "EN";

// 3) Define multi-language data
const leaderboardLangData = {
  "EN": {
    leaderboardText: "<b>🔥 WELCOME TO THE LEADERBOARD 🔥</b>\nGet ready to level up and earn awesome rewards! Check your stats and see how you stack up against top performers from around the world.",
    topReferralEarners: "Top Referral Earners🔥",
    topMoneyMakers: "Top Money Makers 🏆"
  },
  "IT": {
    leaderboardText: "<b>🔥 BENVENUTO NELLA CLASSIFICA 🔥</b>\nPreparati a salire di livello e guadagnare fantastici premi! Controlla le tue statistiche e scopri come ti confronti con i migliori performer di tutto il mondo.",
    topReferralEarners: "Migliori Referral🔥",
    topMoneyMakers: "Maggiori Guadagni 🏆"
  },
  "ES": {
    leaderboardText: "<b>🔥 ¡BIENVENIDO AL TABLERO DE LÍDERES! 🔥</b>\n¡Prepárate para subir de nivel y ganar recompensas increíbles! Revisa tus estadísticas y compara tu rendimiento con los mejores del mundo.",
    topReferralEarners: "Mejores Referidos🔥",
    topMoneyMakers: "Mayores Ganancias 🏆"
  },
  "PT": {
    leaderboardText: "<b>🔥 BEM-VINDO AO RANKING 🔥</b>\nPrepare-se para subir de nível e ganhar recompensas incríveis! Verifique suas estatísticas e veja como você se compara aos melhores do mundo.",
    topReferralEarners: "Principais Indicadores🔥",
    topMoneyMakers: "Maiores Ganhos 🏆"
  },
  "DE": {
    leaderboardText: "<b>🔥 WILLKOMMEN IN DER BESTENLISTE 🔥</b>\nMach dich bereit, aufzusteigen und tolle Belohnungen zu verdienen! Überprüfe deine Statistiken und vergleiche dich mit den Top-Performern weltweit.",
    topReferralEarners: "Top Empfehlungsverdiener🔥",
    topMoneyMakers: "Top Verdiener 🏆"
  },
  "FR": {
    leaderboardText: "<b>🔥 BIENVENUE DANS LE CLASSEMENT 🔥</b>\nPréparez-vous à monter de niveau et à gagner des récompenses incroyables ! Vérifiez vos statistiques et comparez-vous aux meilleurs performeurs du monde.",
    topReferralEarners: "Meilleurs Parrainages🔥",
    topMoneyMakers: "Meilleurs Gagneurs 🏆"
  },
  "RU": {
    leaderboardText: "<b>🔥 ДОБРО ПОЖАЛОВАТЬ В ТАБЛИЦУ ЛИДЕРОВ 🔥</b>\nБудьте готовы повышать уровень и получать крутые награды! Проверьте свою статистику и сравните себя с топ-игроками со всего мира.",
    topReferralEarners: "Лучшие рефералы🔥",
    topMoneyMakers: "Топ заработков 🏆"
  },
  "ZH": {
    leaderboardText: "<b>🔥 欢迎来到排行榜 🔥</b>\n准备好升级并获得丰厚奖励吧！查看你的统计数据，看看你与世界顶尖选手相比如何。",
    topReferralEarners: "最高推荐者🔥",
    topMoneyMakers: "最高盈利者 🏆"
  },
  "HI": {
    leaderboardText: "<b>🔥 लीडरबोर्ड में आपका स्वागत है 🔥</b>\nस्तर बढ़ाने और शानदार इनाम कमाने के लिए तैयार हो जाइए! अपनी स्टैट्स देखें और दुनिया भर के टॉप परफॉर्मर्स से मुकाबला करें।",
    topReferralEarners: "सर्वोच्च रेफरल अर्जक🔥",
    topMoneyMakers: "सबसे ज्यादा कमाई 🏆"
  },
  "UR": {
    leaderboardText: "<b>🔥 لیڈر بورڈ میں خوش آمدید 🔥</b>\nتیار ہوجائیں اپنے لیول کو اپ کرنے اور شاندار انعامات جیتنے کے لیے! اپنی اسٹیٹس چیک کریں اور دنیا کے بہترین پرفارمرز کے ساتھ مقابلہ کریں۔",
    topReferralEarners: "بہترین ریفرل ارنرز🔥",
    topMoneyMakers: "سب سے زیادہ کمانے والے 🏆"
  },
  "BN": {
    leaderboardText: "<b>🔥 লিডারবোর্ডে স্বাগতম 🔥</b>\nলেভেল আপ করতে এবং দুর্দান্ত পুরস্কার জিততে প্রস্তুত হন! আপনার পরিসংখ্যান পরীক্ষা করুন এবং বিশ্বব্যাপী শীর্ষ কর্মীদের সাথে তুলনা করুন।",
    topReferralEarners: "শীর্ষ রেফারার🔥",
    topMoneyMakers: "সর্বোচ্চ উপার্জনকারী 🏆"
  },
  "AR": {
    leaderboardText: "<b>🔥 أهلاً بك في لوحة المتصدرين 🔥</b>\nاستعد للارتقاء والحصول على مكافآت مذهلة! تحقق من إحصائياتك وشاهد مدى منافستك لأفضل المنجزين حول العالم.",
    topReferralEarners: "أفضل المحيلين🔥",
    topMoneyMakers: "أعلى الكاسبين 🏆"
  },
  "TR": {
    leaderboardText: "<b>🔥 LİDERLİK TABLOSUNA HOŞ GELDİN 🔥</b>\nSeviyeni yükseltmeye ve harika ödüller kazanmaya hazır ol! İstatistiklerini kontrol et ve dünya çapındaki en iyi performans gösterenlerle kıyasla.",
    topReferralEarners: "En İyi Yönlendirme Kazananları🔥",
    topMoneyMakers: "En Çok Kazananlar 🏆"
  },
  "KO": {
    leaderboardText: "<b>🔥 리더보드에 오신 것을 환영합니다 🔥</b>\n레벨을 올리고 멋진 보상을 얻을 준비를 하세요! 통계를 확인하고 전 세계 최고 수행자들과 비교해보세요.",
    topReferralEarners: "최고 추천 수익자🔥",
    topMoneyMakers: "최고 수익자 🏆"
  },
  "FIL": {
    leaderboardText: "<b>🔥 MALIGAYANG PAGDATING SA LEADERBOARD 🔥</b>\nMaghanda upang mag-level up at kumita ng kahanga-hangang mga gantimpala! Suriin ang iyong stats at tingnan kung paano ka makikipagkumpetensya sa mga nangungunang performer sa buong mundo.",
    topReferralEarners: "Nangungunang Referral Earners🔥",
    topMoneyMakers: "Nangungunang Kumita 🏆"
  },
  "JA": {
    leaderboardText: "<b>🔥 リーダーボードへようこそ 🔥</b>\nレベルアップして素晴らしい報酬を獲得する準備をしましょう！自分の統計を確認して、世界中のトップパフォーマーと比較してみてください。",
    topReferralEarners: "トップリファラ🔥",
    topMoneyMakers: "トップ収益者 🏆"
  }
};

// 3) Prepare multi-lingual text and buttons
var lang = leaderboardLangData[userLang] || leaderboardLangData["EN"];

// 4) Send the photo with a caption in the user’s language
var leaderboardButtons = [
  [
    { text: lang.topReferralEarners, callback_data: "/toprefer" },
    { text: lang.topMoneyMakers, callback_data: "/topearners" }
  ]
];

// Photo link from Telegram
var photoLink = "https://t.me/Crunchyroll_Anime_in_Hindi_Dub_c/3842";

// 5) Send the photo with caption
Api.sendPhoto({
  photo: photoLink,
  caption: lang.leaderboardText,
  parse_mode: "html",
  reply_markup: { inline_keyboard: leaderboardButtons }
});
