/*CMD
  command: /setChannels
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
*🏘️ Send channel(s) username(s) without @ and space between them.

👉 Example :* `channel channel channel channel channel channel`

_⚠️ Note : You can add upto 6 channels only & must make the bot admin in channel(s)._
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Language-specific data for /setChannels command
var setChannelsLangData = {
  "EN": {
    disableText: "<b>✅ Join channel requirement disabled.</b>",
    notText: "<i>⚠️ Send channel username without '@' only.</i>",
    greaterText: "<i>⚠️ You can send up to 6 channels only.</i>",
    channelSet: "<b>🏘️ Channel set to : @ {channel}</b>",
    channelsSet: "<b>🏘️ Channels set to :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ You're not the admin of {botLink}.</i>"
  },
  "IT": {
    disableText: "<b>✅ Requisito di unione canale disabilitato.</b>",
    notText: "<i>⚠️ Invia il nome utente del canale senza '@'.</i>",
    greaterText: "<i>⚠️ Puoi inviare fino a 6 canali soltanto.</i>",
    channelSet: "<b>🏘️ Canale impostato su : @ {channel}</b>",
    channelsSet: "<b>🏘️ Canali impostati su :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ Non sei l'amministratore di {botLink}.</i>"
  },
  "ES": {
    disableText: "<b>✅ Requisito de unirse al canal deshabilitado.</b>",
    notText: "<i>⚠️ Envía el nombre de usuario del canal sin '@'.</i>",
    greaterText: "<i>⚠️ Solo puedes enviar hasta 6 canales.</i>",
    channelSet: "<b>🏘️ Canal configurado a : @ {channel}</b>",
    channelsSet: "<b>🏘️ Canales configurados a :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ No eres el administrador de {botLink}.</i>"
  },
  "PT": {
    disableText: "<b>✅ Requisito de ingresso no canal desabilitado.</b>",
    notText: "<i>⚠️ Envie o nome de usuário do canal sem '@'.</i>",
    greaterText: "<i>⚠️ Você pode enviar até 6 canais somente.</i>",
    channelSet: "<b>🏘️ Canal configurado para : @ {channel}</b>",
    channelsSet: "<b>🏘️ Canais configurados para :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ Você não é o administrador de {botLink}.</i>"
  },
  "DE": {
    disableText: "<b>✅ Anforderung zum Beitreten des Kanals deaktiviert.</b>",
    notText: "<i>⚠️ Sende den Kanalbenutzernamen ohne '@'.</i>",
    greaterText: "<i>⚠️ Du kannst maximal 6 Kanäle senden.</i>",
    channelSet: "<b>🏘️ Kanal eingestellt auf : @ {channel}</b>",
    channelsSet: "<b>🏘️ Kanäle eingestellt auf :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ Du bist nicht der Administrator von {botLink}.</i>"
  },
  "FR": {
    disableText: "<b>✅ Exigence de rejoindre le canal désactivée.</b>",
    notText: "<i>⚠️ Envoyez le nom d'utilisateur du canal sans '@'.</i>",
    greaterText: "<i>⚠️ Vous pouvez envoyer jusqu'à 6 canaux seulement.</i>",
    channelSet: "<b>🏘️ Canal défini sur : @ {channel}</b>",
    channelsSet: "<b>🏘️ Canaux définis sur :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ Vous n'êtes pas l'administrateur de {botLink}.</i>"
  },
  "RU": {
    disableText: "<b>✅ Требование присоединиться к каналу отключено.</b>",
    notText: "<i>⚠️ Отправьте имя канала без '@'.</i>",
    greaterText: "<i>⚠️ Вы можете отправить только до 6 каналов.</i>",
    channelSet: "<b>🏘️ Канал установлен на : @ {channel}</b>",
    channelsSet: "<b>🏘️ Каналы установлены на :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ Вы не администратор {botLink}.</i>"
  },
  "ZH": {
    disableText: "<b>✅ 加入频道要求已禁用。</b>",
    notText: "<i>⚠️ 请发送不含 '@' 的频道用户名。</i>",
    greaterText: "<i>⚠️ 您最多只能发送6个频道。</i>",
    channelSet: "<b>🏘️ 频道设置为 : @ {channel}</b>",
    channelsSet: "<b>🏘️ 频道设置为 :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ 你不是 {botLink} 的管理员。</i>"
  },
  "HI": {
    disableText: "<b>✅ चैनल ज्वाइन करने की आवश्यकता अक्षम कर दी गई है।</b>",
    notText: "<i>⚠️ '@' के बिना चैनल उपयोगकर्ता नाम भेजें।</i>",
    greaterText: "<i>⚠️ आप केवल 6 चैनल तक ही भेज सकते हैं।</i>",
    channelSet: "<b>🏘️ चैनल सेट किया गया है : @ {channel}</b>",
    channelsSet: "<b>🏘️ चैनल सेट किए गए हैं :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ आप {botLink} के एडमिन नहीं हैं।</i>"
  },
  "UR": {
    disableText: "<b>✅ جوائن چینل کی ضرورت بند کر دی گئی ہے۔</b>",
    notText: "<i>⚠️ '@' کے بغیر چینل یوزرنیم بھیجیں۔</i>",
    greaterText: "<i>⚠️ آپ صرف 6 چینلز تک بھیج سکتے ہیں۔</i>",
    channelSet: "<b>🏘️ چینل سیٹ کر دیا گیا ہے : @ {channel}</b>",
    channelsSet: "<b>🏘️ چینلز سیٹ کر دیے گئے ہیں :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ آپ {botLink} کے ایڈمن نہیں ہیں۔</i>"
  },
  "BN": {
    disableText: "<b>✅ জয়েন চ্যানেল প্রয়োজনীয়তা অক্ষম করা হয়েছে।</b>",
    notText: "<i>⚠️ '@' ছাড়া চ্যানেলের ইউজারনেম পাঠান।</i>",
    greaterText: "<i>⚠️ আপনি সর্বোচ্চ 6 টি চ্যানেল পাঠাতে পারেন।</i>",
    channelSet: "<b>🏘️ চ্যানেল সেট করা হয়েছে : @ {channel}</b>",
    channelsSet: "<b>🏘️ চ্যানেল সেট করা হয়েছে :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ আপনি {botLink} এর অ্যাডমিন নন।</i>"
  },
  "AR": {
    disableText: "<b>✅ تم تعطيل شرط الانضمام إلى القناة.</b>",
    notText: "<i>⚠️ أرسل اسم مستخدم القناة بدون '@'.</i>",
    greaterText: "<i>⚠️ يمكنك إرسال ما يصل إلى 6 قنوات فقط.</i>",
    channelSet: "<b>🏘️ تم تعيين القناة على : @ {channel}</b>",
    channelsSet: "<b>🏘️ تم تعيين القنوات على :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ أنت لست المسؤول عن {botLink}.</i>"
  },
  "TR": {
    disableText: "<b>✅ Kanal katılım gerekliliği devre dışı bırakıldı.</b>",
    notText: "<i>⚠️ Lütfen '@' içermeyen kanal kullanıcı adı gönderin.</i>",
    greaterText: "<i>⚠️ En fazla 6 kanal gönderebilirsiniz.</i>",
    channelSet: "<b>🏘️ Kanal ayarlandı: @ {channel}</b>",
    channelsSet: "<b>🏘️ Kanallar ayarlandı:\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ {botLink} yönetici değilsiniz.</i>"
  },
  "KO": {
    disableText: "<b>✅ 채널 가입 요구 사항이 비활성화되었습니다.</b>",
    notText: "<i>⚠️ '@' 없이 채널 사용자명을 보내세요.</i>",
    greaterText: "<i>⚠️ 최대 6개의 채널만 보낼 수 있습니다.</i>",
    channelSet: "<b>🏘️ 채널이 설정되었습니다 : @ {channel}</b>",
    channelsSet: "<b>🏘️ 채널이 설정되었습니다 :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ 당신은 {botLink}의 관리자가 아닙니다.</i>"
  },
  "FIL": {
    disableText: "<b>✅ Na-disable na ang kinakailangan para sumali sa channel.</b>",
    notText: "<i>⚠️ Magpadala ng channel username nang walang '@'.</i>",
    greaterText: "<i>⚠️ Maaari kang magpadala ng hanggang 6 na channel lamang.</i>",
    channelSet: "<b>🏘️ Na-set ang channel sa : @ {channel}</b>",
    channelsSet: "<b>🏘️ Na-set ang mga channel sa :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ Hindi ka admin ng {botLink}.</i>"
  },
  "JA": {
    disableText: "<b>✅ チャンネル参加要件は無効化されました。</b>",
    notText: "<i>⚠️ '@' を含まないチャンネルのユーザー名を送信してください。</i>",
    greaterText: "<i>⚠️ 最大6つのチャンネルまで送信できます。</i>",
    channelSet: "<b>🏘️ チャンネルが設定されました : @ {channel}</b>",
    channelsSet: "<b>🏘️ チャンネルが設定されました :\n\n@ {channel1}\n@ {channel2}</b>",
    notAdmin: "<i>⚠️ あなたは {botLink} の管理者ではありません。</i>"
  }
};

var admin = Bot.getProperty("admin");
var users = user.telegramid;
var botLink = "@" + bot.name;

var userLang = User.getProperty("Language");
if (!userLang) { userLang = "EN"; }
var lang = setChannelsLangData[userLang] || setChannelsLangData["EN"];

if (users === admin) {
  var channels = message.trim();

  // 1) If user sends "/empty", disable the join-channel requirement
  if (channels.toLowerCase() === "/empty") {
    Bot.setProperty("channel1", null, "string");
    Bot.setProperty("channel2", null, "string");
    var disableText = lang.disableText;
    Api.sendMessage({ text: disableText, parse_mode: "html" });
    return;
  }

  // 2) Otherwise, proceed with normal channel-setting logic
  if (channels.includes("@")) {
    var notText = lang.notText;
    Api.sendMessage({ text: notText, parse_mode: "html" });
    Bot.runCommand("/setChannels");
    return;
  }

  var prompt = channels.split(" ");
  var length = prompt.length;

  if (length > 2) {
    var greaterText = lang.greaterText;
    Api.sendMessage({ text: greaterText, parse_mode: "html" });
    Bot.runCommand("/setChannels");
    return;
  }

  if (length === 1) {
    if (prompt[0].includes("@")) {
      var notUsernameText = lang.notText;
      Api.sendMessage({ text: notUsernameText, parse_mode: "html" });
      Bot.runCommand("/setChannels");
    } else {
      Bot.setProperty("channel1", prompt[0], "string");
      var text = lang.channelSet.replace("{channel}", prompt[0]);
      Api.sendMessage({ text: text, parse_mode: "html" });
    }
  } else if (length === 2) {
    if (prompt[0].includes("@") && prompt[1].includes("@")) {
      var notUsernameText = lang.notText;
      Api.sendMessage({ text: notUsernameText, parse_mode: "html" });
      Bot.runCommand("/setChannels");
    } else {
      Bot.setProperty("channel1", prompt[0], "string");
      Bot.setProperty("channel2", prompt[1], "string");
      var text = lang.channelsSet
                    .replace("{channel1}", prompt[0])
                    .replace("{channel2}", prompt[1]);
      Api.sendMessage({ text: text, parse_mode: "html" });
    }
  }
} else {
  var notAdminText = lang.notAdmin.replace("{botLink}", botLink);
  Api.sendMessage({ text: notAdminText, parse_mode: "html" });
}
