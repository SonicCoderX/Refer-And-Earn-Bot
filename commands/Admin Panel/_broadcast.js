/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *📢 Send the message to broadcast*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Language-specific data for /adminBroadcast command
var adminBroadcastLangData = {
  "EN": {
    notAuthorized: "<i>⚠️ You're not authorized to broadcast.</i>",
    header: "🚀 <b>Bot Update</b> 🚀\n\n",
    success: "<b>✅ Broadcast sent successfully to {count} users.</b>"
  },
  "IT": {
    notAuthorized: "<i>⚠️ Non sei autorizzato a inviare broadcast.</i>",
    header: "🚀 <b>Aggiornamento Bot</b> 🚀\n\n",
    success: "<b>✅ Broadcast inviato con successo a {count} utenti.</b>"
  },
  "ES": {
    notAuthorized: "<i>⚠️ No estás autorizado para enviar broadcast.</i>",
    header: "🚀 <b>Actualización del Bot</b> 🚀\n\n",
    success: "<b>✅ Broadcast enviado con éxito a {count} usuarios.</b>"
  },
  "PT": {
    notAuthorized: "<i>⚠️ Você não está autorizado a transmitir.</i>",
    header: "🚀 <b>Atualização do Bot</b> 🚀\n\n",
    success: "<b>✅ Broadcast enviado com sucesso para {count} usuários.</b>"
  },
  "DE": {
    notAuthorized: "<i>⚠️ Du bist nicht berechtigt, Broadcasts zu senden.</i>",
    header: "🚀 <b>Bot-Update</b> 🚀\n\n",
    success: "<b>✅ Broadcast erfolgreich an {count} Benutzer gesendet.</b>"
  },
  "FR": {
    notAuthorized: "<i>⚠️ Vous n'êtes pas autorisé à diffuser.</i>",
    header: "🚀 <b>Mise à jour du Bot</b> 🚀\n\n",
    success: "<b>✅ Broadcast envoyé avec succès à {count} utilisateurs.</b>"
  },
  "RU": {
    notAuthorized: "<i>⚠️ Вы не уполномочены на рассылку.</i>",
    header: "🚀 <b>Обновление бота</b> 🚀\n\n",
    success: "<b>✅ Рассылка успешно отправлена {count} пользователям.</b>"
  },
  "ZH": {
    notAuthorized: "<i>⚠️ 你没有权限广播。</i>",
    header: "🚀 <b>机器人更新</b> 🚀\n\n",
    success: "<b>✅ 广播已成功发送给 {count} 个用户。</b>"
  },
  "HI": {
    notAuthorized: "<i>⚠️ आप प्रसारण करने के लिए अधिकृत नहीं हैं।</i>",
    header: "🚀 <b>बॉट अपडेट</b> 🚀\n\n",
    success: "<b>✅ {count} उपयोगकर्ताओं को सफलतापूर्वक प्रसारण भेजा गया।</b>"
  },
  "UR": {
    notAuthorized: "<i>⚠️ آپ کو براڈکاسٹ کرنے کا اختیار نہیں ہے۔</i>",
    header: "🚀 <b>بوٹ اپ ڈیٹ</b> 🚀\n\n",
    success: "<b>✅ {count} صارفین کو کامیابی کے ساتھ براڈکاسٹ بھیج دیا گیا۔</b>"
  },
  "BN": {
    notAuthorized: "<i>⚠️ আপনি ব্রডকাস্ট করার জন্য অনুমোদিত নন।</i>",
    header: "🚀 <b>বট আপডেট</b> 🚀\n\n",
    success: "<b>✅ {count} ব্যবহারকারীকে সফলভাবে ব্রডকাস্ট পাঠানো হয়েছে।</b>"
  },
  "AR": {
    notAuthorized: "<i>⚠️ لست مخولًا للبث.</i>",
    header: "🚀 <b>تحديث البوت</b> 🚀\n\n",
    success: "<b>✅ تم إرسال البث بنجاح إلى {count} مستخدم.</b>"
  },
  "TR": {
    notAuthorized: "<i>⚠️ Yayın yapmaya yetkiniz yok.</i>",
    header: "🚀 <b>Bot Güncellemesi</b> 🚀\n\n",
    success: "<b>✅ Yayın başarıyla {count} kullanıcıya gönderildi.</b>"
  },
  "KO": {
    notAuthorized: "<i>⚠️ 방송할 권한이 없습니다.</i>",
    header: "🚀 <b>봇 업데이트</b> 🚀\n\n",
    success: "<b>✅ {count}명의 사용자에게 방송이 성공적으로 전송되었습니다.</b>"
  },
  "FIL": {
    notAuthorized: "<i>⚠️ Hindi ka awtorisadong mag-broadcast.</i>",
    header: "🚀 <b>Bot Update</b> 🚀\n\n",
    success: "<b>✅ Matagumpay na naipadala ang broadcast sa {count} na mga user.</b>"
  },
  "JA": {
    notAuthorized: "<i>⚠️ あなたはブロードキャストする権限がありません。</i>",
    header: "🚀 <b>ボットのアップデート</b> 🚀\n\n",
    success: "<b>✅ {count}人のユーザーにブロードキャストが正常に送信されました。</b>"
  }
};

var admin = Bot.getProperty("admin");
var botLink = "@" + bot.name;

// Get user's language; default to EN if not set
var userLang = User.getProperty("Language");
if (!userLang) { userLang = "EN"; }
var lang = adminBroadcastLangData[userLang] || adminBroadcastLangData["EN"];

if (user.telegramid !== admin) {
  Api.sendMessage({
    text: lang.notAuthorized.replace("{botLink}", botLink),
    parse_mode: "html"
  });
  return;
}

var broadcastList = Bot.getProperty("Broadcast") || [];

// Combine text and caption (if available) into one broadcast message
var adminText = "";
if (message && message.trim() !== "") {
  adminText += message.trim();
}
if (request.caption && request.caption.trim() !== "") {
  if (adminText) {
    adminText += "\n" + request.caption.trim();
  } else {
    adminText = request.caption.trim();
  }
}
var header = lang.header;
var broadcastMessage = header + adminText;

// Check for multimedia attachments and send accordingly
if (request.photo && request.photo.length > 0) {
  var photoId = request.photo[request.photo.length - 1].file_id;
  broadcastList.forEach(function(chatId) {
    Api.sendPhoto({
      chat_id: chatId,
      photo: photoId,
      caption: broadcastMessage,
      parse_mode: "html"
    });
  });
} else if (request.video) {
  var videoId = request.video.file_id;
  broadcastList.forEach(function(chatId) {
    Api.sendVideo({
      chat_id: chatId,
      video: videoId,
      caption: broadcastMessage,
      parse_mode: "html"
    });
  });
} else if (request.document) {
  var documentId = request.document.file_id;
  broadcastList.forEach(function(chatId) {
    Api.sendDocument({
      chat_id: chatId,
      document: documentId,
      caption: broadcastMessage,
      parse_mode: "html"
    });
  });
} else if (request.audio) {
  var audioId = request.audio.file_id;
  broadcastList.forEach(function(chatId) {
    Api.sendAudio({
      chat_id: chatId,
      audio: audioId,
      caption: broadcastMessage,
      parse_mode: "html"
    });
  });
} else {
  broadcastList.forEach(function(chatId) {
    Api.sendMessage({
      chat_id: chatId,
      text: broadcastMessage,
      parse_mode: "html"
    });
  });
}

Bot.sendMessage(lang.success.replace("{count}", broadcastList.length));
