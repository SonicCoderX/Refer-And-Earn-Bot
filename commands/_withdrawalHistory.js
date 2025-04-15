/*CMD
  command: /withdrawalHistory
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
    withdrawalHeader: "<b>🏧 Your Withdrawal History:</b>\n\n",
    noWithdrawals: "<i>No withdrawals have been made yet.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>Amount:</b> <code>{amount} USDT</code>\n📅 <b>Date:</b> <i>{date}</i>\n🏦 <b>Address:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 Back"
  },
  it: {
    banned: "<i>🚫 Sei bannato.</i>",
    maintenance: "<i>🛠️ Il bot è in manutenzione, per favore riprova più tardi.</i>",
    withdrawalHeader: "<b>🏧 La tua cronologia dei prelievi:</b>\n\n",
    noWithdrawals: "<i>Non sono stati effettuati prelievi.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>Importo:</b> <code>{amount} USDT</code>\n📅 <b>Data:</b> <i>{date}</i>\n🏦 <b>Indirizzo:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 Indietro"
  },
  es: {
    banned: "<i>🚫 Estás baneado.</i>",
    maintenance: "<i>🛠️ El bot está en mantenimiento, por favor vuelve más tarde.</i>",
    withdrawalHeader: "<b>🏧 Tu Historial de Retiros:</b>\n\n",
    noWithdrawals: "<i>No se han realizado retiros aún.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>Monto:</b> <code>{amount} USDT</code>\n📅 <b>Fecha:</b> <i>{date}</i>\n🏦 <b>Dirección:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 Atrás"
  },
  pt: {
    banned: "<i>🚫 Você está banido.</i>",
    maintenance: "<i>🛠️ O bot está em manutenção, por favor volte mais tarde.</i>",
    withdrawalHeader: "<b>🏧 Seu Histórico de Saques:</b>\n\n",
    noWithdrawals: "<i>Nenhum saque foi realizado ainda.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>Quantia:</b> <code>{amount} USDT</code>\n📅 <b>Data:</b> <i>{date}</i>\n🏦 <b>Endereço:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 Voltar"
  },
  de: {
    banned: "<i>🚫 Du bist gesperrt.</i>",
    maintenance: "<i>🛠️ Der Bot ist in Wartung, bitte komm später wieder.</i>",
    withdrawalHeader: "<b>🏧 Deine Auszahlungsverlauf:</b>\n\n",
    noWithdrawals: "<i>Es wurden noch keine Auszahlungen vorgenommen.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>Betrag:</b> <code>{amount} USDT</code>\n📅 <b>Datum:</b> <i>{date}</i>\n🏦 <b>Adresse:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 Zurück"
  },
  fr: {
    banned: "<i>🚫 Vous êtes banni.</i>",
    maintenance: "<i>🛠️ Le bot est en maintenance, veuillez revenir plus tard.</i>",
    withdrawalHeader: "<b>🏧 Votre Historique de Retraits :</b>\n\n",
    noWithdrawals: "<i>Aucun retrait n'a encore été effectué.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>Montant :</b> <code>{amount} USDT</code>\n📅 <b>Date :</b> <i>{date}</i>\n🏦 <b>Adresse :</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 Retour"
  },
  ru: {
    banned: "<i>🚫 Вы заблокированы.</i>",
    maintenance: "<i>🛠️ Бот на обслуживании, пожалуйста, попробуйте позже.</i>",
    withdrawalHeader: "<b>🏧 Ваша История Выводов:</b>\n\n",
    noWithdrawals: "<i>Вывод средств ещё не осуществлялся.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>Сумма:</b> <code>{amount} USDT</code>\n📅 <b>Дата:</b> <i>{date}</i>\n🏦 <b>Адрес:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 Назад"
  },
  zh: {
    banned: "<i>🚫 您已被禁止使用此机器人。</i>",
    maintenance: "<i>🛠️ 机器人正在维护中，请稍后再试。</i>",
    withdrawalHeader: "<b>🏧 您的提现记录：</b>\n\n",
    noWithdrawals: "<i>尚未进行任何提现。</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>金额:</b> <code>{amount} USDT</code>\n📅 <b>日期:</b> <i>{date}</i>\n🏦 <b>地址:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 返回"
  },
  hi: {
    banned: "<i>🚫 आपको प्रतिबंधित कर दिया गया है।</i>",
    maintenance: "<i>🛠️ बॉट मेंटेनेंस पर है, कृपया बाद में प्रयास करें।</i>",
    withdrawalHeader: "<b>🏧 आपका निकासी इतिहास:</b>\n\n",
    noWithdrawals: "<i>अभी तक कोई निकासी नहीं हुई है।</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>राशि:</b> <code>{amount} USDT</code>\n📅 <b>तारीख:</b> <i>{date}</i>\n🏦 <b>पता:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 वापस"
  },
  ur: {
    banned: "<i>🚫 آپ کو پابندی ہے۔</i>",
    maintenance: "<i>🛠️ بوٹ کی مرمت جاری ہے، براہ کرم بعد میں کوشش کریں۔</i>",
    withdrawalHeader: "<b>🏧 آپ کی واپسی کی تاریخ:</b>\n\n",
    noWithdrawals: "<i>ابھی تک کوئی واپسی نہیں ہوئی ہے۔</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>رقم:</b> <code>{amount} USDT</code>\n📅 <b>تاریخ:</b> <i>{date}</i>\n🏦 <b>پتہ:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 واپس"
  },
  bn: {
    banned: "<i>🚫 আপনাকে নিষিদ্ধ করা হয়েছে।</i>",
    maintenance: "<i>🛠️ বট রক্ষণাবেক্ষণে আছে, অনুগ্রহ করে পরে চেষ্টা করুন।</i>",
    withdrawalHeader: "<b>🏧 আপনার উইথড্রয়াল ইতিহাস:</b>\n\n",
    noWithdrawals: "<i>এখনো পর্যন্ত কোনো উইথড্রয়াল হয়নি।</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>পরিমাণ:</b> <code>{amount} USDT</code>\n📅 <b>তারিখ:</b> <i>{date}</i>\n🏦 <b>ঠিকানা:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 ফিরে যান"
  },
  ar: {
    banned: "<i>🚫 تم حظرك.</i>",
    maintenance: "<i>🛠️ البوت تحت الصيانة، يرجى المحاولة لاحقاً.</i>",
    withdrawalHeader: "<b>🏧 سجل عمليات السحب الخاص بك:</b>\n\n",
    noWithdrawals: "<i>لم يتم إجراء أي سحوبات حتى الآن.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>المبلغ:</b> <code>{amount} USDT</code>\n📅 <b>التاريخ:</b> <i>{date}</i>\n🏦 <b>العنوان:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 رجوع"
  },
  tr: {
    banned: "<i>🚫 Erişim Reddedildi!</i>",
    maintenance: "<i>🛠️ Bot bakımda, lütfen daha sonra tekrar deneyin.</i>",
    withdrawalHeader: "<b>🏧 Çekim Geçmişiniz:</b>\n\n",
    noWithdrawals: "<i>Henüz herhangi bir çekim yapılmadı.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>Miktar:</b> <code>{amount} USDT</code>\n📅 <b>Tarih:</b> <i>{date}</i>\n🏦 <b>Adres:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 Geri"
  },
  ko: {
    banned: "<i>🚫 접근 거부!</i>",
    maintenance: "<i>🛠️ 봇 점검 중입니다, 나중에 다시 시도해주세요.</i>",
    withdrawalHeader: "<b>🏧 출금 내역:</b>\n\n",
    noWithdrawals: "<i>아직 출금 내역이 없습니다.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>금액:</b> <code>{amount} USDT</code>\n📅 <b>날짜:</b> <i>{date}</i>\n🏦 <b>주소:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 뒤로"
  },
  fil: {
    banned: "<i>🚫 Banned ka na.</i>",
    maintenance: "<i>🛠️ Nasa maintenance ang bot, pakisubukang muli mamaya.</i>",
    withdrawalHeader: "<b>🏧 Ang Iyong Withdrawal History:</b>\n\n",
    noWithdrawals: "<i>Wala pang ginawa na withdrawal.</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>Halaga:</b> <code>{amount} USDT</code>\n📅 <b>Petsa:</b> <i>{date}</i>\n🏦 <b>Address:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 Balik"
  },
  ja: {
    banned: "<i>🚫 アクセス拒否！</i>",
    maintenance: "<i>🛠️ ボットはメンテナンス中です、後ほどお試しください。</i>",
    withdrawalHeader: "<b>🏧 あなたの出金履歴:</b>\n\n",
    noWithdrawals: "<i>まだ出金は行われていません。</i>",
    withdrawalEntry: "<b>{index}.</b> 💸 <b>金額:</b> <code>{amount} USDT</code>\n📅 <b>日付:</b> <i>{date}</i>\n🏦 <b>アドレス:</b> <code>{wallet}</code>\n\n",
    backButton: "🔙 戻る"
  }
};

// Determine the user's language; default to English if not set
var userLang = Bot.getProperty("lang_" + user.telegramid) || "en";
var texts = translations[userLang];

// Delete inline request message if exists
if (request.data) {
  var chatID = request.message.chat.id;
  var messageID = request.message.message_id;
  Api.deleteMessage({ chat_id: chatID, message_id: messageID });
}

// Check if the user is banned
var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  Api.sendMessage({ text: texts.banned, parse_mode: "html" });
  return;
}

// Check for maintenance mode
var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  Api.sendMessage({ text: texts.maintenance, parse_mode: "html" });
  return;
}

// Retrieve withdrawal history from the Bot property (as an array)
var withdrawalHistory = Bot.getProperty("withdrawalHistory_" + user.telegramid, []);
var text = texts.withdrawalHeader;

if (withdrawalHistory.length > 0) {
  withdrawalHistory.forEach((entry, index) => {
    text += texts.withdrawalEntry
      .replace("{index}", index + 1)
      .replace("{amount}", entry.amount)
      .replace("{date}", entry.date)
      .replace("{wallet}", entry.wallet);
  });
} else {
  text += texts.noWithdrawals;
}

var button = [
  [{ text: texts.backButton, callback_data: "/close_minning" }]
];

Api.sendMessage({
  text: text,
  reply_markup: { inline_keyboard: button },
  parse_mode: "html"
});
