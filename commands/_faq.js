/*CMD
  command: /faq
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
    banned: "<i>🚫 Access Denied! You are banned from using this bot.</i>",
    maintenance: "<i>🛠️ Bot Maintenance in Progress! Please check back later. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>Your Gateway to Revolutionary Automated Trading</b>\n\n" +
      "<b>In the fast-paced cryptocurrency market, CEI Limited Ventures Capital Telegram Bot is your one-stop quantitative trading platform, leveraging the power of artificial intelligence to deliver unparalleled speed and accuracy.</b>\n\n" +
      "Imagine this:\n" +
      "You buy BTC/USDT at <b>95,634 USDT</b> on Bitget and sell at <b>95,736 USDT</b> on Bybit simultaneously within 1 second, earning <b>100 USDT</b> in profit!\n\n" +
      "This precision and speed are impossible for humans but made seamless by CEI Limited Ventures Capital.\n\n" +
      "⚡️ Make smarter trades with CEI Limited Ventures Capital today!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>Learn more</a>"
  },
  it: {
    banned: "<i>🚫 Accesso Negato! Sei bannato dall'uso di questo bot.</i>",
    maintenance: "<i>🛠️ Manutenzione del Bot in corso! Riprova più tardi. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>La tua porta d'accesso al trading automatizzato rivoluzionario</b>\n\n" +
      "<b>Nel frenetico mercato delle criptovalute, il Bot Telegram di CEI Limited Ventures Capital è la tua piattaforma unica per il trading quantitativo, sfruttando la potenza dell'intelligenza artificiale per offrire velocità e precisione senza pari.</b>\n\n" +
      "Immagina questo:\n" +
      "Acquisti BTC/USDT a <b>95,634 USDT</b> su Bitget e vendi a <b>95,736 USDT</b> su Bybit simultaneamente in 1 secondo, guadagnando <b>100 USDT</b> di profitto!\n\n" +
      "Questa precisione e velocità sono impossibili per gli umani, ma rese possibili da CEI Limited Ventures Capital.\n\n" +
      "⚡️ Effettua operazioni più intelligenti con CEI Limited Ventures Capital oggi!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>Scopri di più</a>"
  },
  es: {
    banned: "<i>🚫 ¡Acceso Denegado! Estás baneado de usar este bot.</i>",
    maintenance: "<i>🛠️ Mantenimiento del Bot en Progreso! Por favor, vuelve más tarde. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>Tu puerta de entrada al trading automatizado revolucionario</b>\n\n" +
      "<b>En el vertiginoso mercado de criptomonedas, el Bot de Telegram de CEI Limited Ventures Capital es tu plataforma única de trading cuantitativo, aprovechando la inteligencia artificial para ofrecer una velocidad y precisión inigualables.</b>\n\n" +
      "Imagina esto:\n" +
      "Compras BTC/USDT a <b>95,634 USDT</b> en Bitget y vendes a <b>95,736 USDT</b> en Bybit simultáneamente en 1 segundo, ganando <b>100 USDT</b> de beneficio!\n\n" +
      "¡Esta precisión y velocidad son imposibles para los humanos pero posibles gracias a CEI Limited Ventures Capital!\n\n" +
      "⚡️ ¡Realiza operaciones más inteligentes con CEI Limited Ventures Capital hoy!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>Más información</a>"
  },
  pt: {
    banned: "<i>🚫 Acesso Negado! Você está banido de usar este bot.</i>",
    maintenance: "<i>🛠️ Manutenção do Bot em Andamento! Por favor, volte mais tarde. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>Sua porta de entrada para o trading automatizado revolucionário</b>\n\n" +
      "<b>No acelerado mercado de criptomoedas, o Bot Telegram da CEI Limited Ventures Capital é sua plataforma única de trading quantitativo, aproveitando o poder da inteligência artificial para oferecer velocidade e precisão incomparáveis.</b>\n\n" +
      "Imagine isto:\n" +
      "Você compra BTC/USDT a <b>95,634 USDT</b> na Bitget e vende a <b>95,736 USDT</b> na Bybit simultaneamente em 1 segundo, ganhando <b>100 USDT</b> de lucro!\n\n" +
      "Essa precisão e velocidade são impossíveis para os humanos, mas viabilizadas pela CEI Limited Ventures Capital.\n\n" +
      "⚡️ Faça trades mais inteligentes com a CEI Limited Ventures Capital hoje!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>Saiba mais</a>"
  },
  de: {
    banned: "<i>🚫 Zugriff verweigert! Du bist von der Nutzung dieses Bots ausgeschlossen.</i>",
    maintenance: "<i>🛠️ Bot-Wartung im Gange! Bitte versuche es später noch einmal. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>Dein Tor zum revolutionären automatisierten Handel</b>\n\n" +
      "<b>Im schnelllebigen Kryptowährungsmarkt ist der Telegram Bot von CEI Limited Ventures Capital deine zentrale Plattform für quantitativen Handel, der die Kraft künstlicher Intelligenz nutzt, um unvergleichliche Geschwindigkeit und Präzision zu liefern.</b>\n\n" +
      "Stell dir vor:\n" +
      "Du kaufst BTC/USDT für <b>95,634 USDT</b> bei Bitget und verkaufst es für <b>95,736 USDT</b> bei Bybit – beides gleichzeitig in 1 Sekunde, was einen Gewinn von <b>100 USDT</b> bringt!\n\n" +
      "Diese Präzision und Geschwindigkeit sind für Menschen unmöglich, aber mit CEI Limited Ventures Capital möglich.\n\n" +
      "⚡️ Handle heute noch intelligenter mit CEI Limited Ventures Capital!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>Mehr erfahren</a>"
  },
  fr: {
    banned: "<i>🚫 Accès Refusé ! Vous êtes banni d'utiliser ce bot.</i>",
    maintenance: "<i>🛠️ Maintenance du Bot en cours ! Veuillez revenir plus tard. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>Votre porte d'entrée vers un trading automatisé révolutionnaire</b>\n\n" +
      "<b>Dans le marché effréné des cryptomonnaies, le Bot Telegram de CEI Limited Ventures Capital est votre plateforme unique de trading quantitatif, exploitant la puissance de l'intelligence artificielle pour offrir une rapidité et une précision inégalées.</b>\n\n" +
      "Imaginez ceci :\n" +
      "Vous achetez BTC/USDT à <b>95,634 USDT</b> sur Bitget et vendez à <b>95,736 USDT</b> sur Bybit simultanément en 1 seconde, réalisant ainsi un profit de <b>100 USDT</b> !\n\n" +
      "Cette précision et cette rapidité sont impossibles pour les humains mais rendues possibles par CEI Limited Ventures Capital.\n\n" +
      "⚡️ Faites des transactions plus intelligentes avec CEI Limited Ventures Capital dès aujourd'hui !\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>En savoir plus</a>"
  },
  ru: {
    banned: "<i>🚫 Доступ Запрещён! Вы заблокированы от использования этого бота.</i>",
    maintenance: "<i>🛠️ Бот на обслуживании! Пожалуйста, попробуйте позже. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>Ваш путь к революционному автоматизированному трейдингу</b>\n\n" +
      "<b>В стремительном мире криптовалют, Telegram-бот CEI Limited Ventures Capital – это ваша универсальная платформа для количественного трейдинга, использующая искусственный интеллект для достижения непревзойденной скорости и точности.</b>\n\n" +
      "Представьте себе:\n" +
      "Вы покупаете BTC/USDT по <b>95,634 USDT</b> на Bitget и продаёте по <b>95,736 USDT</b> на Bybit одновременно за 1 секунду, получая <b>100 USDT</b> прибыли!\n\n" +
      "Эта точность и скорость невозможны для человека, но становятся реальностью с помощью CEI Limited Ventures Capital.\n\n" +
      "⚡️ Совершайте более умные сделки с CEI Limited Ventures Capital уже сегодня!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>Узнать больше</a>"
  },
  zh: {
    banned: "<i>🚫 拒绝访问！您已被禁止使用此机器人。</i>",
    maintenance: "<i>🛠️ 机器人正在维护中！请稍后再试。🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>开启革命性自动化交易之门</b>\n\n" +
      "<b>在快速变化的加密货币市场中，CEI Limited Ventures Capital Telegram 机器人为您提供一站式定量交易平台，利用人工智能的力量实现无与伦比的速度和准确性。</b>\n\n" +
      "想象一下：\n" +
      "您在 Bitget 以 <b>95,634 USDT</b> 买入 BTC/USDT，并在 Bybit 以 <b>95,736 USDT</b> 卖出，同时在 1 秒内实现 <b>100 USDT</b> 的利润！\n\n" +
      "这种精确和速度对于人类来说是不可能的，但由 CEI Limited Ventures Capital 实现了无缝对接。\n\n" +
      "⚡️ 今天就用 CEI Limited Ventures Capital 进行更聪明的交易！\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>了解更多</a>"
  },
  hi: {
    banned: "<i>🚫 एक्सेस अस्वीकृत! इस बॉट का उपयोग करने से आपको प्रतिबंधित कर दिया गया है।</i>",
    maintenance: "<i>🛠️ बॉट मेंटेनेंस चल रहा है! कृपया बाद में पुनः प्रयास करें। 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>क्रांतिकारी ऑटोमेटेड ट्रेडिंग का आपका प्रवेश द्वार</b>\n\n" +
      "<b>तेजी से बदलते क्रिप्टोकरेंसी बाजार में, CEI Limited Ventures Capital Telegram बॉट आपका वन-स्टॉप क्वांटिटेटिव ट्रेडिंग प्लेटफॉर्म है, जो आर्टिफिशियल इंटेलिजेंस की शक्ति का उपयोग करके अतुलनीय गति और सटीकता प्रदान करता है।</b>\n\n" +
      "कल्पना कीजिए:\n" +
      "आप Bitget पर <b>95,634 USDT</b> पर BTC/USDT खरीदते हैं और Bybit पर <b>95,736 USDT</b> पर एक ही समय में 1 सेकंड में बेचते हैं, जिससे <b>100 USDT</b> का लाभ होता है!\n\n" +
      "यह सटीकता और गति मनुष्यों के लिए असंभव है, पर CEI Limited Ventures Capital इसे संभव बनाता है।\n\n" +
      "⚡️ आज ही CEI Limited Ventures Capital के साथ स्मार्ट ट्रेडिंग करें!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>और जानें</a>"
  },
  ur: {
    banned: "<i>🚫 رسائی سے انکار! آپ کو اس بوٹ کے استعمال سے پابندی لگا دی گئی ہے۔</i>",
    maintenance: "<i>🛠️ بوٹ کی مرمت جاری ہے! براہ کرم بعد میں کوشش کریں۔ 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>انقلابی خودکار تجارت کے لیے آپ کا دروازہ</b>\n\n" +
      "<b>تیز رفتار کرپٹوکرنسی مارکیٹ میں، CEI Limited Ventures Capital Telegram بوٹ آپ کا ون اسٹاپ کوانٹیٹیٹو ٹریڈنگ پلیٹ فارم ہے، جو غیر معمولی رفتار اور درستگی فراہم کرنے کے لیے مصنوعی ذہانت کی طاقت کا استعمال کرتا ہے۔</b>\n\n" +
      "تصور کریں:\n" +
      "آپ Bitget پر <b>95,634 USDT</b> میں BTC/USDT خریدتے ہیں اور Bybit پر <b>95,736 USDT</b> میں ایک ہی وقت میں 1 سیکنڈ میں بیچتے ہیں، جس سے <b>100 USDT</b> کا منافع حاصل ہوتا ہے!\n\n" +
      "یہ درستگی اور رفتار انسانوں کے لیے ناممکن ہے، لیکن CEI Limited Ventures Capital سے ممکن ہوتی ہے۔\n\n" +
      "⚡️ آج ہی CEI Limited Ventures Capital کے ساتھ سمجھدارانہ تجارت کریں!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>مزید جانیں</a>"
  },
  bn: {
    banned: "<i>🚫 এক্সেস নিষিদ্ধ! এই বট ব্যবহার করতে আপনাকে নিষিদ্ধ করা হয়েছে।</i>",
    maintenance: "<i>🛠️ বট রক্ষণাবেক্ষণে রয়েছে! অনুগ্রহ করে পরে আবার চেষ্টা করুন। 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>পাই আপনার বিপ্লবী স্বয়ংক্রিয় ট্রেডিংয়ের দ্বারপ্রান্তে</b>\n\n" +
      "<b>দ্রুত গতির ক্রিপ্টোকারেন্সি বাজারে, CEI Limited Ventures Capital Telegram বট আপনার ওয়ান-স্টপ কোয়ান্টিটেটিভ ট্রেডিং প্ল্যাটফর্ম, যা কৃত্রিম বুদ্ধিমত্তার সাহায্যে অতুলনীয় গতি এবং নির্ভুলতা প্রদান করে।</b>\n\n" +
      "ভাবুন দেখুন:\n" +
      "আপনি Bitget-এ <b>95,634 USDT</b> দরে BTC/USDT কিনছেন এবং Bybit-এ <b>95,736 USDT</b> দরে একসাথে 1 সেকেন্ডে বিক্রি করছেন, ফলে <b>100 USDT</b> মুনাফা অর্জিত হচ্ছে!\n\n" +
      "এই নির্ভুলতা ও গতি মানুষের জন্য অসম্ভব, কিন্তু CEI Limited Ventures Capital এর মাধ্যমে তা সম্ভব।\n\n" +
      "⚡️ আজই CEI Limited Ventures Capital এর সাথে স্মার্ট ট্রেডিং করুন!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>আরো জানুন</a>"
  },
  fil: {
    banned: "<i>🚫 Access Denied! Banned ka na sa paggamit ng bot na ito.</i>",
    maintenance: "<i>🛠️ Nasa maintenance ang bot! Pakisubukang muli mamaya. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>Ang Iyong Gateway sa Rebolusyonaryong Automated Trading</b>\n\n" +
      "<b>Sa mabilis na takbo ng cryptocurrency market, ang CEI Limited Ventures Capital Telegram Bot ay ang iyong one-stop quantitative trading platform, gamit ang kapangyarihan ng artificial intelligence para maghatid ng walang kapantay na bilis at katumpakan.</b>\n\n" +
      "Isipin mo ito:\n" +
      "Bumili ka ng BTC/USDT sa halagang <b>95,634 USDT</b> sa Bitget at magbenta sa <b>95,736 USDT</b> sa Bybit sabay-sabay sa loob ng 1 segundo, kumita ng <b>100 USDT</b>!\n\n" +
      "Ang precision at bilis na ito ay imposibleng makamtan ng tao ngunit posible sa tulong ng CEI Limited Ventures Capital.\n\n" +
      "⚡️ Maging mas matalino sa trading gamit ang CEI Limited Ventures Capital ngayon!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>Matuto pa</a>"
  },
  ko: {
    banned: "<i>🚫 접근 거부! 이 봇 사용이 차단되었습니다.</i>",
    maintenance: "<i>🛠️ 봇 점검 중입니다! 나중에 다시 시도해주세요. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>혁신적 자동 거래로 가는 당신의 관문</b>\n\n" +
      "<b>급변하는 암호화폐 시장에서, CEI Limited Ventures Capital Telegram 봇은 인공지능의 힘을 활용하여 비할 데 없는 속도와 정확성을 제공하는 당신의 원스톱 정량적 거래 플랫폼입니다.</b>\n\n" +
      "이것을 상상해보세요:\n" +
      "당신은 Bitget에서 <b>95,634 USDT</b>에 BTC/USDT를 구매하고, Bybit에서 <b>95,736 USDT</b>에 동시에 1초 안에 판매하여 <b>100 USDT</b>의 이익을 얻습니다!\n\n" +
      "이러한 정밀도와 속도는 인간에게는 불가능하지만 CEI Limited Ventures Capital을 통해 가능해집니다.\n\n" +
      "⚡️ 지금 바로 CEI Limited Ventures Capital과 함께 더 스마트한 거래를 시작하세요!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>자세히 알아보기</a>"
  },
  ja: {
    banned: "<i>🚫 アクセス拒否！このボットの使用は禁止されています。</i>",
    maintenance: "<i>🛠️ ボットはメンテナンス中です！後ほど再度お試しください。 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>革命的な自動取引へのあなたのゲートウェイ</b>\n\n" +
      "<b>急速に変化する暗号通貨市場において、CEI Limited Ventures Capital Telegramボットは、人工知能の力を活用して比類なきスピードと精度を実現する、あなたのワンストップ定量取引プラットフォームです。</b>\n\n" +
      "想像してみてください:\n" +
      "Bitgetで <b>95,634 USDT</b> でBTC/USDTを購入し、Bybitで <b>95,736 USDT</b> で同時に1秒以内に売却して、<b>100 USDT</b> の利益を得る！\n\n" +
      "この精度とスピードは人間には不可能ですが、CEI Limited Ventures Capitalによって可能となります。\n\n" +
      "⚡️ 今日からCEI Limited Ventures Capitalでよりスマートな取引を始めましょう！\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>詳細はこちら</a>"
  },
  ar: {
    banned: "<i>🚫 تم رفض الوصول! لقد تم حظرك من استخدام هذا البوت.</i>",
    maintenance: "<i>🛠️ جارٍ صيانة البوت! يرجى المحاولة مرة أخرى لاحقاً. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>بوابتك للتداول الآلي الثوري</b>\n\n" +
      "<b>في سوق العملات المشفرة السريع الوتيرة، يُعد بوت تليجرام CEI Limited Ventures Capital منصتك الشاملة للتداول الكمي، حيث يستخدم قوة الذكاء الاصطناعي لتقديم سرعة ودقة لا مثيل لهما.</b>\n\n" +
      "تخيل هذا:\n" +
      "تشتري BTC/USDT بسعر <b>95,634 USDT</b> على Bitget وتبيع بسعر <b>95,736 USDT</b> على Bybit في ثانية واحدة، محققاً ربحاً قدره <b>100 USDT</b>!\n\n" +
      "هذه الدقة والسرعة مستحيل تحقيقها للبشر، ولكنها ممكنة مع CEI Limited Ventures Capital.\n\n" +
      "⚡️ قم بتداول أذكى مع CEI Limited Ventures Capital اليوم!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>اعرف المزيد</a>"
  },
  tr: {
    banned: "<i>🚫 Erişim Reddedildi! Bu botu kullanmanız yasaklanmıştır.</i>",
    maintenance: "<i>🛠️ Bot Bakımda! Lütfen daha sonra tekrar deneyin. 🕒</i>",
    photoCaption:
      "💎 <b>CEI Limited Ventures Capital</b>\n" +
      "🚀 <b>Devrim niteliğindeki otomatik ticarete açılan kapınız</b>\n\n" +
      "<b>Hızlı tempolu kripto para piyasasında, CEI Limited Ventures Capital Telegram Bot, yapay zekanın gücünü kullanarak eşsiz hız ve hassasiyet sunan tek duraklı nicel ticaret platformunuzdur.</b>\n\n" +
      "Şunu hayal edin:\n" +
      "Bitget'te <b>95,634 USDT</b> fiyatından BTC/USDT alıp, Bybit'te <b>95,736 USDT</b> fiyatından aynı anda 1 saniyede satarak <b>100 USDT</b> kar elde ediyorsunuz!\n\n" +
      "Bu hassasiyet ve hız insan için imkansızdır, ancak CEI Limited Ventures Capital ile mümkün hale gelir.\n\n" +
      "⚡️ Bugün CEI Limited Ventures Capital ile daha akıllı işlemler yapın!\n\n" +
      "🔗 <a href='https://t.me/+wxAyNS2ozRgyODc1'>Daha fazla bilgi edin</a>"
  }
};

// Determine the user's language; default to English if not set
var userLang = Bot.getProperty("lang_" + user.telegramid) || "en";
var texts = translations[userLang];

// Check if the user is banned
var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  Api.sendMessage({
    text: texts.banned,
    parse_mode: "html"
  });
  return;
}

// Check for maintenance mode
var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  Api.sendMessage({
    text: texts.maintenance,
    parse_mode: "html"
  });
  return;
}

// Send the image and description
Api.sendPhoto({
  photo: "https://ibb.co/hHsvd67", // Replace with your direct image link
  caption: texts.photoCaption,
  parse_mode: "html"
});
