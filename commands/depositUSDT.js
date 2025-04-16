/*CMD
  command: depositUSDT
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
 Available VIP Plans:
💠 VIP1: with 9.10 USDT | Daily Profit: 15% (1.37 USDT)
💎 VIP2: with 150 USDT | Daily Profit: 9% (13.5 USDT)
🚀 VIP3: with 600 USDT | Daily Profit: 10% (60 USDT)
🔱 VIP4: with 3,000 USDT | Daily Profit: 12% (360 USDT)

💡 The higher you invest, the higher your profits! Start your journey to financial freedom now! 🚀 
💸 Send the amount of USDT which you wanna deposit.
  ANSWER
  keyboard: ❌ Cancel
  aliases: 
  group: 
CMD*/

// Define translations for deposit command messages in 16 languages
var depositMsgs = {
  ban: {
    "EN": "<i>🚫 Access Denied!</i>\n\n<b>Reason:</b> You are currently banned from using this bot.\n\n💡 <b>Note:</b> If you believe this is an error, please contact support.",
    "IT": "<i>🚫 Accesso Negato!</i>\n\n<b>Motivo:</b> Sei attualmente bannato dall'uso di questo bot.\n\n💡 <b>Nota:</b> Se pensi che sia un errore, contatta il supporto.",
    "ES": "<i>🚫 Acceso Denegado!</i>\n\n<b>Razón:</b> Actualmente estás baneado de usar este bot.\n\n💡 <b>Nota:</b> Si crees que es un error, contacta al soporte.",
    "PT": "<i>🚫 Acesso Negado!</i>\n\n<b>Razão:</b> Você está banido de usar este bot.\n\n💡 <b>Nota:</b> Se você acha que isso é um erro, entre em contato com o suporte.",
    "DE": "<i>🚫 Zugriff verweigert!</i>\n\n<b>Grund:</b> Du bist derzeit von der Nutzung dieses Bots ausgeschlossen.\n\n💡 <b>Hinweis:</b> Wenn du glaubst, dass dies ein Fehler ist, kontaktiere bitte den Support.",
    "FR": "<i>🚫 Accès Refusé!</i>\n\n<b>Raison:</b> Vous êtes actuellement banni de l'utilisation de ce bot.\n\n💡 <b>Note:</b> Si vous pensez qu'il s'agit d'une erreur, veuillez contacter le support.",
    "RU": "<i>🚫 Доступ Запрещён!</i>\n\n<b>Причина:</b> Вы в настоящее время заблокированы для использования этого бота.\n\n💡 <b>Примечание:</b> Если вы считаете, что это ошибка, свяжитесь с поддержкой.",
    "ZH": "<i>🚫 拒绝访问！</i>\n\n<b>原因：</b> 您当前被禁止使用此机器人。\n\n💡 <b>注意：</b> 如果您认为这是错误，请联系支持。",
    "HI": "<i>🚫 पहुँच अस्वीकृत!</i>\n\n<b>कारण:</b> इस बोट का उपयोग करने से आपको वर्तमान में प्रतिबंधित किया गया है।\n\n💡 <b>नोट:</b> यदि आपको लगता है कि यह त्रुटि है, तो कृपया सपोर्ट से संपर्क करें।",
    "UR": "<i>🚫 رسائی سے انکار!</i>\n\n<b>وجہ:</b> آپ کو اس بوٹ کے استعمال سے فی الحال پابندی ہے۔\n\n💡 <b>نوٹ:</b> اگر آپ کو لگتا ہے کہ یہ غلطی ہے، تو براہ کرم سپورٹ سے رابطہ کریں۔",
    "BN": "<i>🚫 অ্যাক্সেস বাতিল!</i>\n\n<b>কারণ:</b> আপনি বর্তমানে এই বটটি ব্যবহার করতে নিষিদ্ধ।\n\n💡 <b>দ্রষ্টব্য:</b> যদি আপনি মনে করেন এটি একটি ত্রুটি, তাহলে সাপোর্টের সাথে যোগাযোগ করুন।",
    "AR": "<i>🚫 تم رفض الوصول!</i>\n\n<b>السبب:</b> أنت محظور حاليًا من استخدام هذا البوت.\n\n💡 <b>ملاحظة:</b> إذا كنت تعتقد أن هذا خطأ، يرجى الاتصال بالدعم.",
    "TR": "<i>🚫 Erişim Reddedildi!</i>\n\n<b>Neden:</b> Bu botu kullanmanız şu anda yasaklanmıştır.\n\n💡 <b>Not:</b> Bunun bir hata olduğunu düşünüyorsanız, lütfen destek ile iletişime geçin.",
    "KO": "<i>🚫 접근 거부!</i>\n\n<b>사유:</b> 현재 이 봇 사용이 차단되었습니다.\n\n💡 <b>참고:</b> 오류라고 생각되면 지원팀에 문의하세요.",
    "FIL": "<i>🚫 Access Denied!</i>\n\n<b>Rason:</b> Banned ka na sa paggamit ng bot na ito.\n\n💡 <b>Tandaan:</b> Kung sa tingin mo ay isang error ito, mangyaring makipag-ugnayan sa support.",
    "JA": "<i>🚫 アクセス拒否！</i>\n\n<b>理由:</b> 現在、このボットの使用は禁止されています。\n\n💡 <b>注意:</b> もし間違いだと思われる場合は、サポートに連絡してください。"
  },
  maintenance: {
    "EN": "<i>🛠️ System Under Maintenance</i>\n\n<b>Status:</b> Our team is enhancing the bot to bring you a better experience. 🚀\n\n⏳ <b>Estimated Downtime:</b> Please check back later.",
    "IT": "<i>🛠️ Sistema in Manutenzione</i>\n\n<b>Stato:</b> Il nostro team sta migliorando il bot per offrirti un'esperienza migliore. 🚀\n\n⏳ <b>Tempo di inattività stimato:</b> Riprova più tardi.",
    "ES": "<i>🛠️ Sistema en Mantenimiento</i>\n\n<b>Estado:</b> Nuestro equipo está mejorando el bot para brindarte una mejor experiencia. 🚀\n\n⏳ <b>Tiempo estimado de inactividad:</b> Por favor, vuelve más tarde.",
    "PT": "<i>🛠️ Sistema em Manutenção</i>\n\n<b>Status:</b> Nossa equipe está aprimorando o bot para oferecer uma melhor experiência. 🚀\n\n⏳ <b>Tempo estimado de inatividade:</b> Por favor, tente novamente mais tarde.",
    "DE": "<i>🛠️ System in Wartung</i>\n\n<b>Status:</b> Unser Team verbessert den Bot für ein besseres Erlebnis. 🚀\n\n⏳ <b>Geschätzte Ausfallzeit:</b> Bitte später wiederkommen.",
    "FR": "<i>🛠️ Système en Maintenance</i>\n\n<b>Statut:</b> Notre équipe améliore le bot pour une meilleure expérience. 🚀\n\n⏳ <b>Temps d'arrêt estimé:</b> Veuillez réessayer plus tard.",
    "RU": "<i>🛠️ Система на обслуживании</i>\n\n<b>Статус:</b> Наша команда улучшает бота для лучшего опыта. 🚀\n\n⏳ <b>Ожидаемое время простоя:</b> Пожалуйста, попробуйте позже.",
    "ZH": "<i>🛠️ 系统维护中</i>\n\n<b>状态:</b> 我们的团队正在改进机器人以带来更好的体验。🚀\n\n⏳ <b>预计停机时间:</b> 请稍后再试。",
    "HI": "<i>🛠️ सिस्टम मेंटेनेंस में है</i>\n\n<b>स्थिति:</b> हमारी टीम बेहतर अनुभव के लिए बोट को उन्नत कर रही है। 🚀\n\n⏳ <b>अनुमानित डाउनटाइम:</b> कृपया बाद में प्रयास करें।",
    "UR": "<i>🛠️ سسٹم کی مرمت جاری ہے</i>\n\n<b>حالت:</b> ہماری ٹیم آپ کو بہتر تجربہ فراہم کرنے کے لیے بوٹ کو بہتر بنا رہی ہے۔ 🚀\n\n⏳ <b>متوقع بندش کا وقت:</b> براہ کرم بعد میں کوشش کریں۔",
    "BN": "<i>🛠️ সিস্টেম রক্ষণাবেক্ষণে আছে</i>\n\n<b>অবস্থা:</b> আমাদের দল আপনাকে আরও ভালো অভিজ্ঞতা দেওয়ার জন্য বটটি উন্নত করছে। 🚀\n\n⏳ <b>অনুমানিত ডাউনটাইম:</b> অনুগ্রহ করে পরে আবার চেষ্টা করুন।",
    "AR": "<i>🛠️ النظام تحت الصيانة</i>\n\n<b>الحالة:</b> فريقنا يعمل على تحسين البوت لتجربة أفضل. 🚀\n\n⏳ <b>الوقت المتوقع للتوقف:</b> يرجى المحاولة مرة أخرى لاحقًا.",
    "TR": "<i>🛠️ Sistem Bakımda</i>\n\n<b>Durum:</b> Ekibimiz, daha iyi bir deneyim sunmak için botu geliştiriyor. 🚀\n\n⏳ <b>Tahmini Çalışmama Süresi:</b> Lütfen daha sonra tekrar deneyin.",
    "KO": "<i>🛠️ 시스템 점검 중</i>\n\n<b>상태:</b> 더 나은 경험을 제공하기 위해 봇을 개선하고 있습니다. 🚀\n\n⏳ <b>예상 다운타임:</b> 나중에 다시 시도해주세요.",
    "FIL": "<i>🛠️ System Under Maintenance</i>\n\n<b>Status:</b> Pinapabuti ng aming team ang bot para sa mas magandang karanasan. 🚀\n\n⏳ <b>Estimated Downtime:</b> Pakisubukang muli mamaya.",
    "JA": "<i>🛠️ システムメンテナンス中</i>\n\n<b>状況:</b> より良い体験を提供するために、私たちのチームがボットを改善しています。🚀\n\n⏳ <b>予想ダウンタイム:</b> 後でもう一度お試しください。"
  },
  invalid_amount: {
    "EN": "_❌ Please send a valid amount._",
    "IT": "_❌ Invia un importo valido._",
    "ES": "_❌ Por favor, envía una cantidad válida._",
    "PT": "_❌ Por favor, envie um valor válido._",
    "DE": "_❌ Bitte sende einen gültigen Betrag._",
    "FR": "_❌ Veuillez envoyer un montant valide._",
    "RU": "_❌ Пожалуйста, введите корректную сумму._",
    "ZH": "_❌ 请发送有效的金额._",
    "HI": "_❌ कृपया एक मान्य राशि भेजें._",
    "UR": "_❌ براہ کرم ایک درست رقم بھیجیں._",
    "BN": "_❌ দয়া করে একটি বৈধ পরিমাণ পাঠান._",
    "AR": "_❌ الرجاء إرسال مبلغ صالح._",
    "TR": "_❌ Lütfen geçerli bir miktar gönderin._",
    "KO": "_❌ 유효한 금액을 보내주세요._",
    "FIL": "_❌ Pakisend ang isang wastong halaga._",
    "JA": "_❌ 有効な金額を送信してください._"
  },
  min_deposit: {
    "EN": "_❌ Minimum deposit is 1 USDT._",
    "IT": "_❌ Il deposito minimo è 1 USDT._",
    "ES": "_❌ El depósito mínimo es de 1 USDT._",
    "PT": "_❌ O depósito mínimo é de 1 USDT._",
    "DE": "_❌ Die Mindesteinzahlung beträgt 1 USDT._",
    "FR": "_❌ Le dépôt minimum est de 1 USDT._",
    "RU": "_❌ Минимальный депозит составляет 1 USDT._",
    "ZH": "_❌ 最低存款为 1 USDT._",
    "HI": "_❌ न्यूनतम जमा 1 USDT है._",
    "UR": "_❌ کم از کم جمع 1 USDT ہے._",
    "BN": "_❌ সর্বনিম্ন জমা 1 USDT._",
    "AR": "_❌ الحد الأدنى للإيداع هو 1 USDT._",
    "TR": "_❌ Minimum depozito 1 USDT'dir._",
    "KO": "_❌ 최소 입금액은 1 USDT입니다._",
    "FIL": "_❌ Ang minimum deposit ay 1 USDT._",
    "JA": "_❌ 最低入金額は1 USDTです._"
  }
};

// Get user's language preference (default to English "EN")
var userLang = User.getProperty("Language") || "EN";

// Check for ban
var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  Api.sendMessage({
    text: depositMsgs.ban[userLang] || depositMsgs.ban["EN"],
    parse_mode: "html"
  });
  return;
}

// Check for maintenance
var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  Api.sendMessage({
    text: depositMsgs.maintenance[userLang] || depositMsgs.maintenance["EN"],
    parse_mode: "html"
  });
  return;
}

// Convert the message to a number
const amount = parseFloat(message);

if (isNaN(amount)) {
  Bot.sendMessage(depositMsgs.invalid_amount[userLang] || depositMsgs.invalid_amount["EN"]);
  Bot.runCommand("depositUSDT");
  return;
}

if (amount < 1) {
  Bot.sendMessage(depositMsgs.min_deposit[userLang] || depositMsgs.min_deposit["EN"]);
  Bot.runCommand("depositUSDT");
  return;
}

User.setProperty("USDTDepositAmount", amount, "string");

let options = {
  url: "merchants/request/whitelabel",
  fields: {
    amount: amount,
    currency: "USDT",
    payCurrency: "USDT",
    network: "BEP20",
    lifeTime: 90,
    orderId: Libs.Random.randomInt(10000, 99999999999),
    onCallback: "/onCallbackPaymentUSDT"
  },
  onSuccess: "/onCreatePaymentWithUSDT"
};

Libs.OxaPayLib.apiCall(options);
