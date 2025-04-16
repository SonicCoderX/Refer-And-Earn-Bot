/*CMD
  command: /importwallet
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

// भाषा-विशिष्ट डेटा
var importWalletLangData = {
  "EN": {
    importWalletTitle: "<b>🗒️ Import Wallet</b>",
    noActiveWallet: "You don’t have an active wallet. Tap below to start trading ⭐️",
    importExistingWallet: "<b>Import Existing Wallet Manually</b>",
    currentWalletBalance: "Current Wallet Balance: <b>$0.00</b>",
    balanceDisplay: "After connecting, your balance will display here.",
    recoveryPhraseAdvice: "Keep your recovery phrase safe and do not share it with anyone.",
    note: "NOTE: All info is encrypted and secure. Once completed, the message will auto-delete.",
    buttonImportPrivateKey: "📥 Import Private Key",
    buttonImportSeedPhrase: "📥 Import By Seed Phrase"
  },
  "IT": {
    importWalletTitle: "<b>🗒️ Importa Portafoglio</b>",
    noActiveWallet: "Non hai un portafoglio attivo. Tocca qui sotto per iniziare a fare trading ⭐️",
    importExistingWallet: "<b>Importa manualmente un portafoglio esistente</b>",
    currentWalletBalance: "Saldo attuale del portafoglio: <b>$0.00</b>",
    balanceDisplay: "Dopo la connessione, il saldo verrà visualizzato qui.",
    recoveryPhraseAdvice: "Tieni al sicuro la tua frase di recupero e non condividerla con nessuno.",
    note: "NOTA: Tutte le informazioni sono criptate e sicure. Una volta completato, il messaggio verrà eliminato automaticamente.",
    buttonImportPrivateKey: "📥 Importa Chiave Privata",
    buttonImportSeedPhrase: "📥 Importa per Frase Seed"
  },
  "ES": {
    importWalletTitle: "<b>🗒️ Importar Billetera</b>",
    noActiveWallet: "No tienes una billetera activa. Toca abajo para comenzar a operar ⭐️",
    importExistingWallet: "<b>Importa manualmente una billetera existente</b>",
    currentWalletBalance: "Saldo actual de la billetera: <b>$0.00</b>",
    balanceDisplay: "Después de conectarte, tu saldo se mostrará aquí.",
    recoveryPhraseAdvice: "Mantén tu frase de recuperación segura y no la compartas con nadie.",
    note: "NOTA: Toda la información está encriptada y es segura. Una vez completado, el mensaje se eliminará automáticamente.",
    buttonImportPrivateKey: "📥 Importar Clave Privada",
    buttonImportSeedPhrase: "📥 Importar por Frase Semilla"
  },
  "PT": {
    importWalletTitle: "<b>🗒️ Importar Carteira</b>",
    noActiveWallet: "Você não possui uma carteira ativa. Toque abaixo para começar a negociar ⭐️",
    importExistingWallet: "<b>Importar manualmente uma carteira existente</b>",
    currentWalletBalance: "Saldo atual da carteira: <b>$0.00</b>",
    balanceDisplay: "Após a conexão, seu saldo será exibido aqui.",
    recoveryPhraseAdvice: "Mantenha sua frase de recuperação em segurança e não a compartilhe com ninguém.",
    note: "NOTA: Todas as informações são criptografadas e seguras. Uma vez concluído, a mensagem será excluída automaticamente.",
    buttonImportPrivateKey: "📥 Importar Chave Privada",
    buttonImportSeedPhrase: "📥 Importar por Frase Semente"
  },
  "DE": {
    importWalletTitle: "<b>🗒️ Wallet Importieren</b>",
    noActiveWallet: "Du hast keine aktive Wallet. Tippe unten, um mit dem Trading zu beginnen ⭐️",
    importExistingWallet: "<b>Existierende Wallet manuell importieren</b>",
    currentWalletBalance: "Aktueller Wallet-Saldo: <b>$0.00</b>",
    balanceDisplay: "Nach der Verbindung wird dein Saldo hier angezeigt.",
    recoveryPhraseAdvice: "Bewahre deine Wiederherstellungsphrase sicher auf und teile sie mit niemandem.",
    note: "HINWEIS: Alle Informationen sind verschlüsselt und sicher. Nach Abschluss wird die Nachricht automatisch gelöscht.",
    buttonImportPrivateKey: "📥 Private Key importieren",
    buttonImportSeedPhrase: "📥 Per Seed-Phrase importieren"
  },
  "FR": {
    importWalletTitle: "<b>🗒️ Importer le Portefeuille</b>",
    noActiveWallet: "Vous n'avez pas de portefeuille actif. Appuyez ci-dessous pour commencer à trader ⭐️",
    importExistingWallet: "<b>Importer manuellement un portefeuille existant</b>",
    currentWalletBalance: "Solde actuel du portefeuille: <b>$0.00</b>",
    balanceDisplay: "Après la connexion, votre solde s'affichera ici.",
    recoveryPhraseAdvice: "Gardez votre phrase de récupération en sécurité et ne la partagez avec personne.",
    note: "REMARQUE : Toutes les informations sont cryptées et sécurisées. Une fois terminé, le message sera automatiquement supprimé.",
    buttonImportPrivateKey: "📥 Importer la Clé Privée",
    buttonImportSeedPhrase: "📥 Importer par Phrase de Récupération"
  },
  "RU": {
    importWalletTitle: "<b>🗒️ Импорт Кошелька</b>",
    noActiveWallet: "У вас нет активного кошелька. Нажмите ниже, чтобы начать торговлю ⭐️",
    importExistingWallet: "<b>Импортировать существующий кошелек вручную</b>",
    currentWalletBalance: "Текущий баланс кошелька: <b>$0.00</b>",
    balanceDisplay: "После подключения ваш баланс отобразится здесь.",
    recoveryPhraseAdvice: "Храните вашу фразу восстановления в безопасности и не делитесь ею ни с кем.",
    note: "ПРИМЕЧАНИЕ: Вся информация зашифрована и защищена. После завершения сообщение будет автоматически удалено.",
    buttonImportPrivateKey: "📥 Импортировать Приватный Ключ",
    buttonImportSeedPhrase: "📥 Импортировать по Seed-Фразе"
  },
  "ZH": {
    importWalletTitle: "<b>🗒️ 导入钱包</b>",
    noActiveWallet: "您没有激活的钱包。请点击下方开始交易 ⭐️",
    importExistingWallet: "<b>手动导入现有钱包</b>",
    currentWalletBalance: "当前钱包余额: <b>$0.00</b>",
    balanceDisplay: "连接后，您的余额将显示在此处。",
    recoveryPhraseAdvice: "请妥善保管您的恢复短语，并不要与他人分享。",
    note: "注意：所有信息均已加密且安全。完成后，消息将自动删除。",
    buttonImportPrivateKey: "📥 导入私钥",
    buttonImportSeedPhrase: "📥 通过助记词导入"
  },
  "HI": {
    importWalletTitle: "<b>🗒️ वॉलेट इम्पोर्ट करें</b>",
    noActiveWallet: "आपके पास कोई सक्रिय वॉलेट नहीं है। ट्रेडिंग शुरू करने के लिए नीचे टैप करें ⭐️",
    importExistingWallet: "<b>मौजूद वॉलेट को मैन्युअली इम्पोर्ट करें</b>",
    currentWalletBalance: "वर्तमान वॉलेट बैलेंस: <b>$0.00</b>",
    balanceDisplay: "कनेक्ट करने के बाद, आपका बैलेंस यहाँ दिखेगा।",
    recoveryPhraseAdvice: "अपनी रिकवरी फ्रेज सुरक्षित रखें और इसे किसी के साथ साझा न करें।",
    note: "नोट: सभी जानकारी एन्क्रिप्टेड और सुरक्षित है। पूरा होने के बाद, संदेश स्वतः हट जाएगा।",
    buttonImportPrivateKey: "📥 प्राइवेट की इम्पोर्ट करें",
    buttonImportSeedPhrase: "📥 सीड फ्रेज़ से इम्पोर्ट करें"
  },
  "UR": {
    importWalletTitle: "<b>🗒️ والٹ امپورٹ کریں</b>",
    noActiveWallet: "آپ کا کوئی فعال والٹ موجود نہیں ہے۔ ٹریڈنگ شروع کرنے کے لیے نیچے ٹیپ کریں ⭐️",
    importExistingWallet: "<b>موجودہ والٹ کو دستی طور پر امپورٹ کریں</b>",
    currentWalletBalance: "موجودہ والٹ بیلنس: <b>$0.00</b>",
    balanceDisplay: "کنیکٹ کرنے کے بعد، آپ کا بیلنس یہاں ظاہر ہوگا۔",
    recoveryPhraseAdvice: "اپنی ریکاوری فریز کو محفوظ رکھیں اور اسے کسی کے ساتھ شیئر نہ کریں۔",
    note: "نوٹ: تمام معلومات انکرپٹڈ اور محفوظ ہیں۔ مکمل ہونے کے بعد، پیغام خود بخود حذف ہو جائے گا۔",
    buttonImportPrivateKey: "📥 پرائیویٹ کی امپورٹ کریں",
    buttonImportSeedPhrase: "📥 سیڈ فریز کے ذریعے امپورٹ کریں"
  },
  "BN": {
    importWalletTitle: "<b>🗒️ ওয়ালেট আমদানি করুন</b>",
    noActiveWallet: "আপনার কোনো সক্রিয় ওয়ালেট নেই। ট্রেডিং শুরু করতে নিচে চাপ দিন ⭐️",
    importExistingWallet: "<b>বিদ্যমান ওয়ালেট ম্যানুয়ালি আমদানি করুন</b>",
    currentWalletBalance: "বর্তমান ওয়ালেট ব্যালেন্স: <b>$0.00</b>",
    balanceDisplay: "সংযোগের পরে, আপনার ব্যালেন্স এখানে দেখানো হবে।",
    recoveryPhraseAdvice: "আপনার রিকভারি ফ্রেজ নিরাপদে রাখুন এবং কাউকে শেয়ার করবেন না।",
    note: "নোট: সব তথ্য এনক্রিপ্টেড এবং নিরাপদ। সম্পূর্ণ হলে, বার্তাটি স্বয়ংক্রিয়ভাবে মুছে যাবে।",
    buttonImportPrivateKey: "📥 প্রাইভেট কী আমদানি করুন",
    buttonImportSeedPhrase: "📥 সিড ফ্রেজ দিয়ে আমদানি করুন"
  },
  "AR": {
    importWalletTitle: "<b>🗒️ استيراد المحفظة</b>",
    noActiveWallet: "ليس لديك محفظة نشطة. اضغط أدناه لبدء التداول ⭐️",
    importExistingWallet: "<b>استيراد المحفظة الموجودة يدويًا</b>",
    currentWalletBalance: "الرصيد الحالي للمحفظة: <b>$0.00</b>",
    balanceDisplay: "بعد الاتصال، سيظهر رصيدك هنا.",
    recoveryPhraseAdvice: "احتفظ بعبارة الاسترداد الخاصة بك بأمان ولا تشاركها مع أي شخص.",
    note: "ملاحظة: جميع المعلومات مشفرة وآمنة. بمجرد الانتهاء، سيتم حذف الرسالة تلقائيًا.",
    buttonImportPrivateKey: "📥 استيراد المفتاح الخاص",
    buttonImportSeedPhrase: "📥 استيراد بواسطة عبارة البذرة"
  },
  "TR": {
    importWalletTitle: "<b>🗒️ Cüzdanı İçe Aktar</b>",
    noActiveWallet: "Aktif bir cüzdanınız yok. İşlem yapmak için aşağıya dokunun ⭐️",
    importExistingWallet: "<b>Mevcut Cüzdanı Manuel Olarak İçe Aktar</b>",
    currentWalletBalance: "Mevcut Cüzdan Bakiyesi: <b>$0.00</b>",
    balanceDisplay: "Bağlandıktan sonra bakiyeniz burada görünecektir.",
    recoveryPhraseAdvice: "Kurtarma ifadenizi güvende tutun ve kimseyle paylaşmayın.",
    note: "NOT: Tüm bilgiler şifrelenmiş ve güvendedir. Tamamlandığında mesaj otomatik olarak silinecektir.",
    buttonImportPrivateKey: "📥 Özel Anahtar İçe Aktar",
    buttonImportSeedPhrase: "📥 Seed İfadesi ile İçe Aktar"
  },
  "KO": {
    importWalletTitle: "<b>🗒️ 지갑 가져오기</b>",
    noActiveWallet: "활성 지갑이 없습니다. 거래를 시작하려면 아래를 탭하세요 ⭐️",
    importExistingWallet: "<b>기존 지갑 수동 가져오기</b>",
    currentWalletBalance: "현재 지갑 잔액: <b>$0.00</b>",
    balanceDisplay: "연결 후, 잔액이 여기 표시됩니다.",
    recoveryPhraseAdvice: "복구 문구를 안전하게 보관하고 누구와도 공유하지 마세요.",
    note: "참고: 모든 정보는 암호화되어 안전합니다. 완료되면 메시지가 자동 삭제됩니다.",
    buttonImportPrivateKey: "📥 개인 키 가져오기",
    buttonImportSeedPhrase: "📥 시드 문구로 가져오기"
  },
  "FIL": {
    importWalletTitle: "<b>🗒️ I-import ang Wallet</b>",
    noActiveWallet: "Wala kang aktibong wallet. I-tap sa ibaba para magsimulang mag-trade ⭐️",
    importExistingWallet: "<b>I-import nang manu-mano ang umiiral na wallet</b>",
    currentWalletBalance: "Kasalukuyang Balanseng Wallet: <b>$0.00</b>",
    balanceDisplay: "Pagkatapos kumonekta, ipapakita dito ang iyong balanse.",
    recoveryPhraseAdvice: "Panatilihing ligtas ang iyong recovery phrase at huwag itong ibahagi kaninuman.",
    note: "TANDAAN: Lahat ng impormasyon ay naka-encrypt at secure. Kapag tapos na, awtomatikong mabubura ang mensahe.",
    buttonImportPrivateKey: "📥 I-import ang Private Key",
    buttonImportSeedPhrase: "📥 I-import sa pamamagitan ng Seed Phrase"
  },
  "JA": {
    importWalletTitle: "<b>🗒️ ウォレットをインポート</b>",
    noActiveWallet: "アクティブなウォレットがありません。下をタップして取引を開始してください ⭐️",
    importExistingWallet: "<b>既存のウォレットを手動でインポート</b>",
    currentWalletBalance: "現在のウォレット残高: <b>$0.00</b>",
    balanceDisplay: "接続後、残高がここに表示されます。",
    recoveryPhraseAdvice: "リカバリーフレーズは安全な場所に保管し、他人と共有しないでください。",
    note: "注意: すべての情報は暗号化されており安全です。完了すると、メッセージは自動的に削除されます。",
    buttonImportPrivateKey: "📥 プライベートキーをインポート",
    buttonImportSeedPhrase: "📥 シードフレーズでインポート"
  }
};

// उपयोगकर्ता की भाषा प्राप्त करें; यदि सेट नहीं है तो डिफ़ॉल्ट "EN" का उपयोग करें
var userLang = User.getProperty("Language");
if (!userLang) {
  userLang = "EN";
}
var dLang = importWalletLangData[userLang] || importWalletLangData["EN"];

// संदेश निर्माण
var text = dLang.importWalletTitle + "\n" +
           dLang.noActiveWallet + "\n\n" +
           dLang.importExistingWallet + "\n" +
           dLang.currentWalletBalance + "\n\n" +
           dLang.balanceDisplay + "\n" +
           dLang.recoveryPhraseAdvice + "\n\n" +
           dLang.note;

// इनलाइन कीबोर्ड परिभाषित करें
var keyboard = [
  [
    { text: dLang.buttonImportPrivateKey, callback_data: "/close_importkey" },
    { text: dLang.buttonImportSeedPhrase, callback_data: "/close_importphrase" }
  ]
];

// संदेश भेजें
Api.sendMessage({
  text: text,
  parse_mode: "html",
  reply_markup: { inline_keyboard: keyboard }
});
