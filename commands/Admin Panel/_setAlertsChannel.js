/*CMD
  command: /setAlertsChannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *🔴 Send the channel username without "@" which you want to set as alerts channel*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Language-specific data for /setAlertsChannel command
var setAlertsLangData = {
  "EN": {
    withoutAt: "<i>⚠️ Send username without '@' only.</i>",
    alertSet: "<b>🔴 Alerts channel set to : @ {channel}</b>",
    notAdmin: "<i>⚠️ You're not the admin of {botLink}.</i>"
  },
  "IT": {
    withoutAt: "<i>⚠️ Invia il nome utente senza '@' solamente.</i>",
    alertSet: "<b>🔴 Canale degli avvisi impostato su : @ {channel}</b>",
    notAdmin: "<i>⚠️ Non sei l'amministratore di {botLink}.</i>"
  },
  "ES": {
    withoutAt: "<i>⚠️ Envía el nombre de usuario sin '@' solamente.</i>",
    alertSet: "<b>🔴 Canal de alertas establecido en : @ {channel}</b>",
    notAdmin: "<i>⚠️ No eres el administrador de {botLink}.</i>"
  },
  "PT": {
    withoutAt: "<i>⚠️ Envie o nome de usuário do canal sem '@' somente.</i>",
    alertSet: "<b>🔴 Canal de alertas definido para : @ {channel}</b>",
    notAdmin: "<i>⚠️ Você não é o administrador de {botLink}.</i>"
  },
  "DE": {
    withoutAt: "<i>⚠️ Sende den Kanalnamen ohne '@' nur.</i>",
    alertSet: "<b>🔴 Alarmkanal eingestellt auf : @ {channel}</b>",
    notAdmin: "<i>⚠️ Du bist nicht der Administrator von {botLink}.</i>"
  },
  "FR": {
    withoutAt: "<i>⚠️ Envoyez le nom d'utilisateur du canal sans '@' uniquement.</i>",
    alertSet: "<b>🔴 Canal d'alertes défini sur : @ {channel}</b>",
    notAdmin: "<i>⚠️ Vous n'êtes pas l'administrateur de {botLink}.</i>"
  },
  "RU": {
    withoutAt: "<i>⚠️ Отправьте имя канала без '@' только.</i>",
    alertSet: "<b>🔴 Канал оповещений установлен на : @ {channel}</b>",
    notAdmin: "<i>⚠️ Вы не администратор {botLink}.</i>"
  },
  "ZH": {
    withoutAt: "<i>⚠️ 仅发送不含 '@' 的用户名。</i>",
    alertSet: "<b>🔴 警报频道设置为 : @ {channel}</b>",
    notAdmin: "<i>⚠️ 你不是 {botLink} 的管理员。</i>"
  },
  "HI": {
    withoutAt: "<i>⚠️ कृपया '@' के बिना उपयोगकर्ता नाम भेजें।</i>",
    alertSet: "<b>🔴 अलर्ट्स चैनल सेट किया गया: @ {channel}</b>",
    notAdmin: "<i>⚠️ आप {botLink} के एडमिन नहीं हैं।</i>"
  },
  "UR": {
    withoutAt: "<i>⚠️ براہ کرم '@' کے بغیر یوزرنیم بھیجیں۔</i>",
    alertSet: "<b>🔴 الرٹس چینل سیٹ کیا گیا: @ {channel}</b>",
    notAdmin: "<i>⚠️ آپ {botLink} کے ایڈمن نہیں ہیں۔</i>"
  },
  "BN": {
    withoutAt: "<i>⚠️ '@' ছাড়া ইউজারনেম পাঠান।</i>",
    alertSet: "<b>🔴 অ্যালার্টস চ্যানেল সেট করা হয়েছে: @ {channel}</b>",
    notAdmin: "<i>⚠️ আপনি {botLink} এর অ্যাডমিন নন।</i>"
  },
  "AR": {
    withoutAt: "<i>⚠️ أرسل اسم المستخدم بدون '@' فقط.</i>",
    alertSet: "<b>🔴 تم تعيين قناة التنبيهات على : @ {channel}</b>",
    notAdmin: "<i>⚠️ أنت لست المسؤول عن {botLink}.</i>"
  },
  "TR": {
    withoutAt: "<i>⚠️ Lütfen '@' içermeyen kanal kullanıcı adı gönderin.</i>",
    alertSet: "<b>🔴 Uyarı kanalı ayarlandı: @ {channel}</b>",
    notAdmin: "<i>⚠️ {botLink} yönetici değilsiniz.</i>"
  },
  "KO": {
    withoutAt: "<i>⚠️ '@' 없이 채널 사용자명을 보내세요.</i>",
    alertSet: "<b>🔴 알림 채널이 설정되었습니다 : @ {channel}</b>",
    notAdmin: "<i>⚠️ 당신은 {botLink}의 관리자가 아닙니다.</i>"
  },
  "FIL": {
    withoutAt: "<i>⚠️ Magpadala lamang ng username nang walang '@'.</i>",
    alertSet: "<b>🔴 Na-set ang alerts channel sa : @ {channel}</b>",
    notAdmin: "<i>⚠️ Hindi ka admin ng {botLink}.</i>"
  },
  "JA": {
    withoutAt: "<i>⚠️ '@' を含まないユーザー名を送信してください。</i>",
    alertSet: "<b>🔴 アラートチャンネルが設定されました : @ {channel}</b>",
    notAdmin: "<i>⚠️ あなたは {botLink} の管理者ではありません。</i>"
  }
};

var admin = Bot.getProperty("admin");
var users = user.telegramid;
var botLink = "@" + bot.name;

// Get user's language; default to EN if not set
var userLang = User.getProperty("Language");
if (!userLang) { userLang = "EN"; }
var lang = setAlertsLangData[userLang] || setAlertsLangData["EN"];

if (users === admin) {
  var alertChannel = message.trim();

  // 1) If user sends "/empty", disable the join-channel requirement
  if (alertChannel.toLowerCase() === "/empty") {
    Bot.setProperty("channel1", null, "string");
    Bot.setProperty("channel2", null, "string");
    var disableText = "<b>✅ Join channel requirement disabled.</b>";
    Api.sendMessage({ text: disableText, parse_mode: "html" });
    return;
  }

  // 2) Otherwise, proceed with normal channel-setting logic
  if (alertChannel.includes("@")) {
    var notText = lang.withoutAt;
    Api.sendMessage({ text: notText, parse_mode: "html" });
    Bot.runCommand("/setAlertsChannel");
    return;
  }

  Bot.setProperty("alertsChannel", "@" + alertChannel, "string");
  var text = lang.alertSet.replace("{channel}", alertChannel);
  Api.sendMessage({ text: text, parse_mode: "html" });
  Bot.runCommand("/adminPanel");
} else {
  var notAdminText = lang.notAdmin.replace("{botLink}", botLink);
  Api.sendMessage({ text: notAdminText, parse_mode: "html" });
}
