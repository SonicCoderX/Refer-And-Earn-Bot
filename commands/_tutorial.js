/*CMD
  command: /tutorial
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

// Retrieve user's selected language (default "EN")
var userLang = User.getProperty("Language") || "EN";

// Translation object for all steps (all 16 languages)
var stepsMsgs = {
  ban: {
    "EN": "<i>🚫 Sorry, you are banned from using this bot.</i>\n<b>💡 Contact support for more information.</b>",
    "IT": "<i>🚫 Mi dispiace, sei bannato da questo bot.</i>\n<b>💡 Contatta il supporto per ulteriori informazioni.</b>",
    "ES": "<i>🚫 Lo siento, estás baneado de usar este bot.</i>\n<b>💡 Contacta al soporte para más información.</b>",
    "PT": "<i>🚫 Desculpe, você está banido de usar este bot.</i>\n<b>💡 Entre em contato com o suporte para mais informações.</b>",
    "DE": "<i>🚫 Entschuldigung, du bist von der Nutzung dieses Bots ausgeschlossen.</i>\n<b>💡 Kontaktiere den Support für weitere Informationen.</b>",
    "FR": "<i>🚫 Désolé, vous êtes banni d'utiliser ce bot.</i>\n<b>💡 Contactez le support pour plus d'informations.</b>",
    "RU": "<i>🚫 Извините, вы забанены для использования этого бота.</i>\n<b>💡 Обратитесь в службу поддержки для получения дополнительной информации.</b>",
    "ZH": "<i>🚫 抱歉，您已被禁止使用此机器人。</i>\n<b>💡 请联系支持以获取更多信息。</b>",
    "HI": "<i>🚫 क्षमा करें, आपको इस बॉट का उपयोग करने से प्रतिबंधित कर दिया गया है।</i>\n<b>💡 अधिक जानकारी के लिए सपोर्ट से संपर्क करें।</b>",
    "UR": "<i>🚫 معذرت، آپ کو اس بوٹ کے استعمال سے روک دیا گیا ہے۔</i>\n<b>💡 مزید معلومات کے لیے سپورٹ سے رابطہ کریں۔</b>",
    "BN": "<i>🚫 দুঃখিত, আপনাকে এই বট ব্যবহারের থেকে নিষিদ্ধ করা হয়েছে।</i>\n<b>💡 আরও তথ্যের জন্য সাপোর্টের সাথে যোগাযোগ করুন।</b>",
    "AR": "<i>🚫 عذرًا، لقد تم حظرك من استخدام هذا البوت.</i>\n<b>💡 اتصل بالدعم لمزيد من المعلومات.</b>",
    "TR": "<i>🚫 Üzgünüz, bu botu kullanmanız yasaklandı.</i>\n<b>💡 Daha fazla bilgi için destek ile iletişime geçin.</b>",
    "KO": "<i>🚫 죄송합니다. 이 봇 사용이 차단되었습니다.</i>\n<b>💡 자세한 정보는 지원팀에 문의하세요.</b>",
    "FIL": "<i>🚫 Paumanhin, ikaw ay naban sa paggamit ng bot na ito.</i>\n<b>💡 Makipag-ugnayan sa support para sa karagdagang impormasyon.</b>",
    "JA": "<i>🚫 申し訳ありませんが、このボットの使用は禁止されています。</i>\n<b>💡 詳細はサポートにお問い合わせください。</b>"
  },
  maintenance: {
    "EN": "<i>🛠️ Maintenance Mode Enabled! Please check back later.</i>",
    "IT": "<i>🛠️ Modalità di manutenzione abilitata! Riprova più tardi.</i>",
    "ES": "<i>🛠️ ¡Modo de mantenimiento activado! Por favor, vuelve más tarde.</i>",
    "PT": "<i>🛠️ Modo de manutenção ativado! Tente novamente mais tarde.</i>",
    "DE": "<i>🛠️ Wartungsmodus aktiviert! Bitte versuche es später erneut.</i>",
    "FR": "<i>🛠️ Mode maintenance activé! Veuillez revenir plus tard.</i>",
    "RU": "<i>🛠️ Режим обслуживания включён! Пожалуйста, зайдите позже.</i>",
    "ZH": "<i>🛠️ 维护模式已启用！请稍后再试。</i>",
    "HI": "<i>🛠️ मेंटेनेंस मोड सक्रिय है! कृपया बाद में पुनः प्रयास करें।</i>",
    "UR": "<i>🛠️ دیکھ بھال کا موڈ فعال ہے! براہ کرم بعد میں دوبارہ کوشش کریں۔</i>",
    "BN": "<i>🛠️ রক্ষণাবেক্ষণ মোড সক্রিয়! অনুগ্রহ করে পরে আবার চেষ্টা করুন।</i>",
    "AR": "<i>🛠️ وضع الصيانة مفعل! الرجاء المحاولة مرة أخرى لاحقاً.</i>",
    "TR": "<i>🛠️ Bakım modu etkin! Lütfen daha sonra tekrar deneyin.</i>",
    "KO": "<i>🛠️ 점검 모드가 활성화되었습니다! 잠시 후 다시 시도하세요.</i>",
    "FIL": "<i>🛠️ Nakabukas na ang maintenance mode! Pakisubukang muli mamaya.</i>",
    "JA": "<i>🛠️ メンテナンスモードが有効です！後でもう一度お試しください。</i>"
  },
  step1: {
    caption: {
      "EN": "<b>Step 1: Deposit Funds 💸🔐</b>\n\nDeposit using USDT BEP20. Make sure your deposit is confirmed to fund your account and get started.",
      "IT": "<b>Step 1: Deposita Fondi 💸🔐</b>\n\nDeposita utilizzando USDT BEP20. Assicurati che il deposito sia confermato per finanziare il tuo account e iniziare.",
      "ES": "<b>Paso 1: Deposita Fondos 💸🔐</b>\n\nDeposita usando USDT BEP20. Asegúrate de que tu depósito se confirme para financiar tu cuenta y comenzar.",
      "PT": "<b>Passo 1: Deposite Fundos 💸🔐</b>\n\nDeposite usando USDT BEP20. Certifique-se de que o depósito seja confirmado para financiar sua conta e começar.",
      "DE": "<b>Schritt 1: Zahle Geld ein 💸🔐</b>\n\nZahle mit USDT BEP20 ein. Stelle sicher, dass deine Einzahlung bestätigt wird, um dein Konto zu finanzieren und loszulegen.",
      "FR": "<b>Étape 1 : Déposez des fonds 💸🔐</b>\n\nDéposez en utilisant USDT BEP20. Assurez-vous que votre dépôt est confirmé pour alimenter votre compte et commencer.",
      "RU": "<b>Шаг 1: Внесите средства 💸🔐</b>\n\nВносите с помощью USDT BEP20. Убедитесь, что ваш депозит подтвержден для финансирования вашего аккаунта и начала работы.",
      "ZH": "<b>步骤 1：存入资金 💸🔐</b>\n\n使用 USDT BEP20 进行存款。确保您的存款已确认，以便为您的账户提供资金并开始。",
      "HI": "<b>चरण 1: फंड जमा करें 💸🔐</b>\n\nUSDT BEP20 का उपयोग करके जमा करें। सुनिश्चित करें कि आपका जमा कन्फर्म हो चुका है ताकि आपका खाता फंड हो सके और आप शुरू कर सकें।",
      "UR": "<b>مرحلہ 1: فنڈز جمع کریں 💸🔐</b>\n\nUSDT BEP20 کا استعمال کرکے جمع کریں۔ یقینی بنائیں کہ آپ کی جمع شدہ رقم تصدیق شدہ ہے تاکہ آپ کا اکاؤنٹ فنڈ ہو سکے اور آپ آغاز کر سکیں۔",
      "BN": "<b>ধাপ ১: ফান্ড জমা দিন 💸🔐</b>\n\nUSDT BEP20 ব্যবহার করে জমা দিন। নিশ্চিত করুন আপনার জমা নিশ্চিত হয়েছে যাতে আপনার অ্যাকাউন্টে তহবিল থাকে এবং আপনি শুরু করতে পারেন।",
      "AR": "<b>الخطوة 1: أودع الأموال 💸🔐</b>\n\nقم بالإيداع باستخدام USDT BEP20. تأكد من تأكيد إيداعك لتمويل حسابك والبدء.",
      "TR": "<b>Adım 1: Fon Yatırın 💸🔐</b>\n\nUSDT BEP20 kullanarak yatırım yapın. Hesabınızı finanse etmek ve başlamak için deponuzun onaylandığından emin olun.",
      "KO": "<b>1단계: 자금 입금 💸🔐</b>\n\nUSDT BEP20를 사용하여 입금하세요. 계좌에 자금이 충당되고 시작할 수 있도록 입금이 확인되었는지 확인하세요.",
      "FIL": "<b>Hakbang 1: Mag-deposito ng Pondo 💸🔐</b>\n\nMag-deposito gamit ang USDT BEP20. Siguraduhing nakumpirma ang iyong deposito para pondohan ang iyong account at makapagsimula.",
      "JA": "<b>ステップ1：資金を入金する 💸🔐</b>\n\nUSDT BEP20を使用して入金してください。アカウントに資金が確保され、開始できるように、入金が確認されていることを確認してください。"
    },
    button: {
      "EN": [{ text: "Deposit Now 🔥", callback_data: "💸 Deposit" }],
      "IT": [{ text: "Deposita Ora 🔥", callback_data: "💸 Deposit" }],
      "ES": [{ text: "Deposita Ahora 🔥", callback_data: "💸 Deposit" }],
      "PT": [{ text: "Deposite Agora 🔥", callback_data: "💸 Deposit" }],
      "DE": [{ text: "Jetzt Einzahlen 🔥", callback_data: "💸 Deposit" }],
      "FR": [{ text: "Déposer Maintenant 🔥", callback_data: "💸 Deposit" }],
      "RU": [{ text: "Сделать депозит 🔥", callback_data: "💸 Deposit" }],
      "ZH": [{ text: "立即存款 🔥", callback_data: "💸 Deposit" }],
      "HI": [{ text: "अब जमा करें 🔥", callback_data: "💸 Deposit" }],
      "UR": [{ text: "اب ڈپازٹ کریں 🔥", callback_data: "💸 Deposit" }],
      "BN": [{ text: "এখনই জমা দিন 🔥", callback_data: "💸 Deposit" }],
      "AR": [{ text: "أودع الآن 🔥", callback_data: "💸 Deposit" }],
      "TR": [{ text: "Hemen Yatır 🔥", callback_data: "💸 Deposit" }],
      "KO": [{ text: "지금 입금 🔥", callback_data: "💸 Deposit" }],
      "FIL": [{ text: "Mag-deposito Ngayon 🔥", callback_data: "💸 Deposit" }],
      "JA": [{ text: "今すぐ入金 🔥", callback_data: "💸 Deposit" }]
    },
    photo: "https://ibb.co/cSCV0rFt"
  },
  step2: {
    caption: {
      "EN": "<b>Step 2: Purchase Your VIP Plan 🎫💎</b>\n\nChoose your VIP plan (e.g., VIP2, VIP3, VIP4) and click the Buy button. A confirmation message will show all the details.",
      "IT": "<b>Step 2: Acquista il Tuo Piano VIP 🎫💎</b>\n\nScegli il tuo piano VIP (es. VIP2, VIP3, VIP4) e clicca sul pulsante Acquista. Apparirà un messaggio di conferma con tutti i dettagli.",
      "ES": "<b>Paso 2: Compra tu Plan VIP 🎫💎</b>\n\nElige tu plan VIP (por ejemplo, VIP2, VIP3, VIP4) y pulsa el botón de Compra. Aparecerá un mensaje de confirmación con todos los detalles.",
      "PT": "<b>Passo 2: Compre seu Plano VIP 🎫💎</b>\n\nEscolha seu plano VIP (por exemplo, VIP2, VIP3, VIP4) e clique no botão de Comprar. Uma mensagem de confirmação mostrará todos os detalhes.",
      "DE": "<b>Schritt 2: Kaufe deinen VIP-Plan 🎫💎</b>\n\nWähle deinen VIP-Plan (z. B. VIP2, VIP3, VIP4) und klicke auf den Kaufen-Button. Eine Bestätigung wird alle Details anzeigen.",
      "FR": "<b>Étape 2 : Achetez votre plan VIP 🎫💎</b>\n\nChoisissez votre plan VIP (par exemple VIP2, VIP3, VIP4) et cliquez sur le bouton Acheter. Un message de confirmation affichera tous les détails.",
      "RU": "<b>Шаг 2: Купите свой VIP-план 🎫💎</b>\n\nВыберите свой VIP-план (например, VIP2, VIP3, VIP4) и нажмите кнопку «Купить». Появится сообщение с подтверждением и всеми деталями.",
      "ZH": "<b>步骤 2：购买您的VIP计划 🎫💎</b>\n\n选择您的VIP计划（例如 VIP2、VIP3、VIP4），然后点击购买按钮。将显示一条确认消息，包含所有详细信息。",
      "HI": "<b>चरण 2: अपना VIP प्लान खरीदें 🎫💎</b>\n\nअपने VIP प्लान (जैसे VIP2, VIP3, VIP4) को चुनें और Buy बटन पर क्लिक करें। एक पुष्टिकरण संदेश सभी विवरण दिखाएगा।",
      "UR": "<b>مرحلہ 2: اپنا VIP پلان خریدیں 🎫💎</b>\n\nاپنا VIP پلان منتخب کریں (مثلاً VIP2, VIP3, VIP4) اور Buy بٹن پر کلک کریں۔ تمام تفصیلات کے ساتھ تصدیقی پیغام ظاہر ہوگا۔",
      "BN": "<b>ধাপ ২: আপনার VIP পরিকল্পনা কিনুন 🎫💎</b>\n\nআপনার VIP পরিকল্পনা (যেমন, VIP2, VIP3, VIP4) নির্বাচন করুন এবং Buy বোতামে ক্লিক করুন। একটি নিশ্চিতকরণ বার্তা সমস্ত বিবরণ দেখাবে।",
      "AR": "<b>الخطوة 2: اشترِ خطتك VIP 🎫💎</b>\n\nاختر خطتك VIP (مثل VIP2, VIP3, VIP4) واضغط على زر الشراء. ستظهر رسالة تأكيد بجميع التفاصيل.",
      "TR": "<b>Adım 2: VIP Planınızı Satın Alın 🎫💎</b>\n\nVIP planınızı (örneğin, VIP2, VIP3, VIP4) seçin ve Satın Al butonuna tıklayın. Tüm detayları gösteren bir onay mesajı çıkacaktır.",
      "KO": "<b>2단계: VIP 플랜 구매하기 🎫💎</b>\n\nVIP 플랜(VIP2, VIP3, VIP4 등)을 선택하고 구매 버튼을 클릭하세요. 모든 세부 정보가 표시되는 확인 메시지가 나타납니다.",
      "FIL": "<b>Hakbang 2: Bilhin ang Iyong VIP Plan 🎫💎</b>\n\nPiliin ang iyong VIP plan (hal. VIP2, VIP3, VIP4) at i-click ang Buy button. Magpapakita ang mensahe ng kumpirmasyon ng lahat ng detalye.",
      "JA": "<b>ステップ2：VIPプランを購入する 🎫💎</b>\n\nVIPプラン（例：VIP2, VIP3, VIP4）を選択し、Buyボタンをクリックしてください。すべての詳細が表示された確認メッセージが出ます。"
    },
    button: {
      "EN": [{ text: "View VIP Plans 📈", callback_data: "⛏️ Miners" }],
      "IT": [{ text: "Visualizza i Piani VIP 📈", callback_data: "⛏️ Miners" }],
      "ES": [{ text: "Ver Planes VIP 📈", callback_data: "⛏️ Miners" }],
      "PT": [{ text: "Ver Planos VIP 📈", callback_data: "⛏️ Miners" }],
      "DE": [{ text: "VIP-Pläne anzeigen 📈", callback_data: "⛏️ Miners" }],
      "FR": [{ text: "Voir les plans VIP 📈", callback_data: "⛏️ Miners" }],
      "RU": [{ text: "Посмотреть VIP-планы 📈", callback_data: "⛏️ Miners" }],
      "ZH": [{ text: "查看VIP计划 📈", callback_data: "⛏️ Miners" }],
      "HI": [{ text: "VIP प्लान देखें 📈", callback_data: "⛏️ Miners" }],
      "UR": [{ text: "VIP پلان دیکھیں 📈", callback_data: "⛏️ Miners" }],
      "BN": [{ text: "VIP পরিকল্পনা দেখুন 📈", callback_data: "⛏️ Miners" }],
      "AR": [{ text: "عرض خطط VIP 📈", callback_data: "⛏️ Miners" }],
      "TR": [{ text: "VIP Planları Gör 📈", callback_data: "⛏️ Miners" }],
      "KO": [{ text: "VIP 플랜 보기 📈", callback_data: "⛏️ Miners" }],
      "FIL": [{ text: "Tingnan ang VIP Plans 📈", callback_data: "⛏️ Miners" }],
      "JA": [{ text: "VIPプランを表示 📈", callback_data: "⛏️ Miners" }]
    },
    photo: "https://ibb.co/3ys3VyWc"
  },
  step3: {
    caption: {
      "EN": "<b>Step 3: Monitor Your Account & Profit Growth 📊⏰</b>\n\nHead over to the Account section to check your balance and track your profits. Your first profit should appear within about 1 hour after buying.",
      "IT": "<b>Step 3: Monitora il Tuo Account e la Crescita dei Profitti 📊⏰</b>\n\nVai nella sezione Account per controllare il saldo e monitorare i profitti. Il tuo primo profitto dovrebbe apparire circa 1 ora dopo l'acquisto.",
      "ES": "<b>Paso 3: Monitorea tu Cuenta y el Crecimiento de Ganancias 📊⏰</b>\n\nDirígete a la sección de Cuenta para verificar tu saldo y seguir tus ganancias. Tu primera ganancia debería aparecer aproximadamente 1 hora después de la compra.",
      "PT": "<b>Passo 3: Monitore sua Conta e Crescimento dos Lucros 📊⏰</b>\n\nAcesse a seção de Conta para verificar seu saldo e acompanhar seus lucros. Seu primeiro lucro deve aparecer cerca de 1 hora após a compra.",
      "DE": "<b>Schritt 3: Überwache dein Konto und Gewinnwachstum 📊⏰</b>\n\nGehe zum Bereich Konto, um deinen Kontostand zu überprüfen und deine Gewinne zu verfolgen. Dein erster Gewinn sollte etwa 1 Stunde nach dem Kauf erscheinen.",
      "FR": "<b>Étape 3 : Surveillez votre compte et la croissance de vos profits 📊⏰</b>\n\nAccédez à la section Compte pour vérifier votre solde et suivre vos gains. Votre premier gain devrait apparaître environ 1 heure après l'achat.",
      "RU": "<b>Шаг 3: Мониторинг вашего аккаунта и роста прибыли 📊⏰</b>\n\nПерейдите в раздел Аккаунт, чтобы проверить баланс и отслеживать прибыль. Ваша первая прибыль должна появиться примерно через 1 час после покупки.",
      "ZH": "<b>步骤 3：监控您的账户及利润增长 📊⏰</b>\n\n前往账户部分检查余额并跟踪您的利润。购买后大约1小时内应显示第一笔利润。",
      "HI": "<b>चरण 3: अपने खाते और लाभ वृद्धि की निगरानी करें 📊⏰</b>\n\nअपने खाते में जाकर अपना बैलेंस देखें और लाभों को ट्रैक करें। खरीदारी के लगभग 1 घंटे बाद पहला लाभ दिखना चाहिए।",
      "UR": "<b>مرحلہ 3: اپنے اکاؤنٹ اور منافع کی ترقی کی نگرانی کریں 📊⏰</b>\n\nاکاؤنٹ سیکشن میں جا کر اپنا بیلنس چیک کریں اور منافع کو ٹریک کریں۔ خریداری کے تقریباً 1 گھنٹے بعد پہلا منافع ظاہر ہونا چاہیے۔",
      "BN": "<b>ধাপ ৩: আপনার অ্যাকাউন্ট এবং লাভ বৃদ্ধির পর্যবেক্ষণ করুন 📊⏰</b>\n\nঅ্যাকাউন্ট বিভাগে যান এবং আপনার ব্যালেন্স দেখুন ও লাভ ট্র্যাক করুন। কেনার প্রায় ১ ঘণ্টার মধ্যে আপনার প্রথম লাভ দেখা উচিত।",
      "AR": "<b>الخطوة 3: راقب حسابك ونمو أرباحك 📊⏰</b>\n\nتوجه إلى قسم الحساب للتحقق من رصيدك وتتبع أرباحك. يجب أن يظهر أول ربح بعد حوالي ساعة من الشراء.",
      "TR": "<b>Adım 3: Hesabınızı ve Kar Artışınızı İzleyin 📊⏰</b>\n\nHesap bölümüne giderek bakiyenizi kontrol edin ve kazançlarınızı takip edin. İlk karınız satın almadan yaklaşık 1 saat sonra görünmelidir.",
      "KO": "<b>3단계: 계좌 및 수익 성장 모니터링 📊⏰</b>\n\n계좌 섹션으로 이동하여 잔액을 확인하고 수익을 추적하세요. 구매 후 약 1시간 내에 첫 수익이 나타나야 합니다.",
      "FIL": "<b>Hakbang 3: I-monitor ang iyong Account at Paglago ng Kita 📊⏰</b>\n\nPumunta sa seksyon ng Account upang tingnan ang iyong balanse at subaybayan ang iyong kita. Dapat lumabas ang iyong unang kita sa loob ng humigit-kumulang 1 oras pagkatapos ng pagbili.",
      "JA": "<b>ステップ3：アカウントと利益の成長を監視する 📊⏰</b>\n\nアカウントセクションに移動して残高を確認し、利益を追跡してください。購入後約1時間以内に最初の利益が表示されるはずです。"
    },
    button: {
      "EN": [{ text: "My Profit 💰", callback_data: "👩‍💻 Account" }],
      "IT": [{ text: "Il Mio Profitto 💰", callback_data: "👩‍💻 Account" }],
      "ES": [{ text: "Mi Ganancia 💰", callback_data: "👩‍💻 Account" }],
      "PT": [{ text: "Meu Lucro 💰", callback_data: "👩‍💻 Account" }],
      "DE": [{ text: "Mein Gewinn 💰", callback_data: "👩‍💻 Account" }],
      "FR": [{ text: "Mon Profit 💰", callback_data: "👩‍💻 Account" }],
      "RU": [{ text: "Моя Прибыль 💰", callback_data: "👩‍💻 Account" }],
      "ZH": [{ text: "我的收益 💰", callback_data: "👩‍💻 Account" }],
      "HI": [{ text: "मेरा मुनाफा 💰", callback_data: "👩‍💻 Account" }],
      "UR": [{ text: "میرا منافع 💰", callback_data: "👩‍💻 Account" }],
      "BN": [{ text: "আমার মুনাফা 💰", callback_data: "👩‍💻 Account" }],
      "AR": [{ text: "أرباحي 💰", callback_data: "👩‍💻 Account" }],
      "TR": [{ text: "Kazancım 💰", callback_data: "👩‍💻 Account" }],
      "KO": [{ text: "내 수익 💰", callback_data: "👩‍💻 Account" }],
      "FIL": [{ text: "Ang Kita Ko 💰", callback_data: "👩‍💻 Account" }],
      "JA": [{ text: "私の利益 💰", callback_data: "👩‍💻 Account" }]
    },
    photo: "https://ibb.co/YBH0474G"
  },
  step4: {
    caption: {
      "EN": "<b>Step 4: Withdraw Your Earnings 💰✅</b>\n\nClick Withdraw, enter your USDT BEP20 wallet address, and specify the amount you want to withdraw (from 1 to 99999 USDT). Double-check your details, confirm, and your funds will be on their way.",
      "IT": "<b>Step 4: Preleva i Tuoi Guadagni 💰✅</b>\n\nClicca su Preleva, inserisci il tuo indirizzo USDT BEP20 e specifica l'importo che desideri prelevare (da 1 a 99999 USDT). Controlla i dettagli, conferma, e i fondi ti saranno inviati.",
      "ES": "<b>Paso 4: Retira tus Ganancias 💰✅</b>\n\nHaz clic en Retirar, ingresa tu dirección USDT BEP20 y especifica el monto que deseas retirar (de 1 a 99999 USDT). Verifica los detalles, confirma, y tus fondos estarán en camino.",
      "PT": "<b>Passo 4: Saque seus Ganhos 💰✅</b>\n\nClique em Saque, insira o endereço da sua carteira USDT BEP20 e especifique o valor que deseja sacar (de 1 a 99999 USDT). Verifique os detalhes, confirme, e seus fundos serão enviados.",
      "DE": "<b>Schritt 4: Ziehe deine Gewinne ab 💰✅</b>\n\nKlicke auf Abheben, gib deine USDT BEP20 Adresse ein und wähle den Betrag (von 1 bis 99999 USDT), den du abheben möchtest. Überprüfe deine Angaben, bestätige, und deine Gelder werden überwiesen.",
      "FR": "<b>Étape 4 : Retirez vos gains 💰✅</b>\n\nCliquez sur Retirer, saisissez votre adresse USDT BEP20 et indiquez le montant à retirer (de 1 à 99999 USDT). Vérifiez vos informations, confirmez, et vos fonds seront transférés.",
      "RU": "<b>Шаг 4: Выведите свои заработки 💰✅</b>\n\nНажмите «Вывод», введите адрес вашего кошелька USDT BEP20 и укажите сумму для вывода (от 1 до 99999 USDT). Проверьте данные, подтвердите, и средства будут отправлены.",
      "ZH": "<b>步骤 4：提现您的收益 💰✅</b>\n\n点击提现，输入您的 USDT BEP20 钱包地址，并指定要提现的金额（1至99999 USDT）。仔细核对详情，确认后您的资金将会发放。",
      "HI": "<b>चरण 4: अपनी कमाई निकालें 💰✅</b>\n\nWithdraw पर क्लिक करें, अपना USDT BEP20 वॉलेट पता दर्ज करें, और 1 से 99999 USDT तक की राशि निर्दिष्ट करें। अपने विवरण की दोबारा जाँच करें, पुष्टि करें, और आपकी राशि भेज दी जाएगी।",
      "UR": "<b>مرحلہ 4: اپنی کمائی نکالیں 💰✅</b>\n\nWithdraw پر کلک کریں، اپنا USDT BEP20 والٹ پتہ درج کریں، اور 1 سے 99999 USDT تک کی رقم بتائیں۔ اپنے تفصیلات دوبارہ چیک کریں، تصدیق کریں، اور آپ کے فنڈز منتقل کر دیے جائیں گے۔",
      "BN": "<b>ধাপ ৪: আপনার উপার্জন উত্তোলন করুন 💰✅</b>\n\nWithdraw এ ক্লিক করুন, আপনার USDT BEP20 ওয়ালেট ঠিকানা লিখুন, এবং ১ থেকে ৯৯৯৯৯ USDT পর্যন্ত পরিমাণ নির্দিষ্ট করুন। আপনার বিবরণ যাচাই করুন, নিশ্চিত করুন, এবং আপনার তহবিল পাঠানো হবে।",
      "AR": "<b>الخطوة 4: اسحب أرباحك 💰✅</b>\n\nاضغط على زر السحب، أدخل عنوان محفظتك USDT (BEP20)، وحدد المبلغ الذي تريد سحبه (من 1 إلى 99999 USDT). تأكد من التفاصيل، وأكد العملية، وستُرسل أموالك.",
      "TR": "<b>Adım 4: Kazancınızı Çekin 💰✅</b>\n\nWithdraw'a tıklayın, USDT (BEP20) cüzdan adresinizi girin ve çekmek istediğiniz miktarı (1 ile 99999 USDT arasında) belirtin. Bilgilerinizi kontrol edin, onaylayın ve paranız gönderilsin.",
      "KO": "<b>4단계: 수익을 출금하세요 💰✅</b>\n\nWithdraw 버튼을 클릭하고, USDT (BEP20) 지갑 주소를 입력한 후 출금할 금액(1~99999 USDT)을 지정하세요. 정보를 다시 확인하고, 확인하면 자금이 송금됩니다.",
      "FIL": "<b>Hakbang 4: I-withdraw ang Iyong Kita 💰✅</b>\n\nPindutin ang Withdraw, ilagay ang iyong USDT (BEP20) wallet address, at tukuyin ang halagang nais mong i-withdraw (mula 1 hanggang 99999 USDT). Siguraduhing tama ang mga detalye, kumpirmahin, at ipadala ang iyong pondo.",
      "JA": "<b>ステップ4：収益を引き出す 💰✅</b>\n\nWithdrawをクリックし、USDT (BEP20)ウォレットアドレスを入力、1から99999 USDTまでの金額を指定してください。内容を再確認し、確認すると資金が送金されます。"
    },
    button: {
      "EN": [{ text: "🏧 Withdraw", callback_data: "🏧 Withdraw" }],
      "IT": [{ text: "Preleva", callback_data: "🏧 Withdraw" }],
      "ES": [{ text: "Retirar", callback_data: "🏧 Withdraw" }],
      "PT": [{ text: "Sacar", callback_data: "🏧 Withdraw" }],
      "DE": [{ text: "Abheben", callback_data: "🏧 Withdraw" }],
      "FR": [{ text: "Retirer", callback_data: "🏧 Withdraw" }],
      "RU": [{ text: "Вывести", callback_data: "🏧 Withdraw" }],
      "ZH": [{ text: "提现", callback_data: "🏧 Withdraw" }],
      "HI": [{ text: "निकालें", callback_data: "🏧 Withdraw" }],
      "UR": [{ text: "نکالیں", callback_data: "🏧 Withdraw" }],
      "BN": [{ text: "উত্তোলন করুন", callback_data: "🏧 Withdraw" }],
      "AR": [{ text: "سحب", callback_data: "🏧 Withdraw" }],
      "TR": [{ text: "Çek", callback_data: "🏧 Withdraw" }],
      "KO": [{ text: "출금", callback_data: "🏧 Withdraw" }],
      "FIL": [{ text: "Withdraw", callback_data: "🏧 Withdraw" }],
      "JA": [{ text: "出金", callback_data: "🏧 Withdraw" }]
    },
    photo: "https://ibb.co/vFsDbVf"
  },
  step5: {
    caption: {
      "EN": "<b>Step 5: Referral – Maximize Your Earnings ⚡️</b>\n\n<b>Referral Examples:</b>\n✅ Refer 10 Friends: They deposit $10,000 total, you earn 20% = $2,000 🤑 by doing nothing.\n\n✅ Refer 20 Friends: They deposit $10,000 total, you earn 30% = $3,000 💸 for life.\n\n<b>Commission Details:</b>\n✅ Easy Withdrawals: No Conditions! (Min withdraw $1)\n✅ Scalable Earnings: The more you refer, the higher your commission! 📈\n\nStart sharing, start earning! 🚀",
      "IT": "<b>Step 5: Referral – Massimizza i Tuoi Guadagni ⚡️</b>\n\n<b>Esempi di Referral:</b>\n✅ Invita 10 amici: depositano in totale $10,000, guadagni il 20% = $2,000 🤑 senza fare nulla.\n\n✅ Invita 20 amici: depositano in totale $10,000, guadagni il 30% = $3,000 💸 a vita.\n\n<b>Dettagli Commissione:</b>\n✅ Prelievi Facili: Nessuna Condizione! (Minimo $1)\n✅ Guadagni Scalabili: Più inviti, più alta sarà la tua commissione! 📈\n\nInizia a condividere, inizia a guadagnare! 🚀",
      "ES": "<b>Paso 5: Referidos – Maximiza tus Ganancias ⚡️</b>\n\n<b>Ejemplos de Referidos:</b>\n✅ Recomienda a 10 amigos: Depositan un total de $10,000, ganas el 20% = $2,000 🤑 sin hacer nada.\n\n✅ Recomienda a 20 amigos: Depositan un total de $10,000, ganas el 30% = $3,000 💸 de por vida.\n\n<b>Detalles de la Comisión:</b>\n✅ Retiros fáciles: ¡Sin condiciones! (Mínimo $1)\n✅ Ganancias escalables: ¡Cuantos más refieras, mayor será tu comisión! 📈\n\n¡Empieza a compartir, empieza a ganar! 🚀",
      "PT": "<b>Passo 5: Indicações – Maximize seus Ganhos ⚡️</b>\n\n<b>Exemplos de Indicações:</b>\n✅ Indique 10 amigos: Eles depositam $10,000 no total, você ganha 20% = $2,000 🤑 sem fazer nada.\n\n✅ Indique 20 amigos: Eles depositam $10,000 no total, você ganha 30% = $3,000 💸 vitalícios.\n\n<b>Detalhes da Comissão:</b>\n✅ Saques fáceis: Sem condições! (Mínimo $1)\n✅ Ganhos escaláveis: Quanto mais indicar, maior será sua comissão! 📈\n\nComece a compartilhar, comece a ganhar! 🚀",
      "DE": "<b>Schritt 5: Referral – Maximiere deinen Verdienst ⚡️</b>\n\n<b>Referral-Beispiele:</b>\n✅ Empfiehl 10 Freunde: Sie zahlen insgesamt $10.000 ein, du erhältst 20% = $2.000 🤑, ohne etwas zu tun.\n\n✅ Empfiehl 20 Freunde: Sie zahlen insgesamt $10.000 ein, du erhältst 30% = $3.000 💸 lebenslang.\n\n<b>Provisionsdetails:</b>\n✅ Einfache Auszahlungen: Keine Bedingungen! (Mindestbetrag $1)\n✅ Skalierbare Einnahmen: Je mehr du empfiehlst, desto höher deine Provision! 📈\n\nBeginne zu teilen, beginne zu verdienen! 🚀",
      "FR": "<b>Étape 5 : Parrainage – Maximisez vos gains ⚡️</b>\n\n<b>Exemples de parrainage :</b>\n✅ Parrainez 10 amis : Ils déposent un total de $10,000, vous gagnez 20% = $2,000 🤑 sans rien faire.\n\n✅ Parrainez 20 amis : Ils déposent un total de $10,000, vous gagnez 30% = $3,000 💸 à vie.\n\n<b>Détails de la commission :</b>\n✅ Retraits faciles : Aucune condition ! (Min. $1)\n✅ Revenus évolutifs : Plus vous parrainez, plus votre commission est élevée ! 📈\n\nCommencez à partager, commencez à gagner ! 🚀",
      "RU": "<b>Шаг 5: Реферальная программа – Максимизируйте свой заработок ⚡️</b>\n\n<b>Примеры рефералов:</b>\n✅ Пригласите 10 друзей: Они внесут в сумме $10,000, вы получите 20% = $2,000 🤑, ничего не делая.\n\n✅ Пригласите 20 друзей: Они внесут в сумме $10,000, вы получите 30% = $3,000 💸 на всю жизнь.\n\n<b>Детали комиссии:</b>\n✅ Легкий вывод: без условий! (Мин. $1)\n✅ Масштабируемый доход: чем больше вы приглашаете, тем выше ваша комиссия! 📈\n\nНачните делиться, начните зарабатывать! 🚀",
      "ZH": "<b>步骤 5：推荐 – 最大化您的收益 ⚡️</b>\n\n<b>推荐示例：</b>\n✅ 推荐10位好友：他们总共存入$10,000，您将获得20% = $2,000 🤑，无需操作。\n\n✅ 推荐20位好友：他们总共存入$10,000，您将获得30% = $3,000 💸，终身收益。\n\n<b>佣金详情：</b>\n✅ 轻松提现：无条件！(最低$1)\n✅ 可扩展收益：推荐越多，您的佣金越高！📈\n\n开始分享，开始赚取收益！🚀",
      "HI": "<b>चरण 5: रेफरल – अपनी कमाई अधिकतम करें ⚡️</b>\n\n<b>रेफरल उदाहरण:</b>\n✅ 10 दोस्तों को रेफर करें: वे कुल $10,000 जमा करते हैं, आपको 20% = $2,000 मिलता है 🤑, बिना कुछ किए।\n\n✅ 20 दोस्तों को रेफर करें: वे कुल $10,000 जमा करते हैं, आपको 30% = $3,000 मिलता है 💸, जीवनभर के लिए।\n\n<b>कमीशन विवरण:</b>\n✅ आसान निकासी: कोई शर्त नहीं! (न्यूनतम $1)\n✅ स्केलेबल कमाई: जितने अधिक रेफर करें, आपकी कमीशन उतनी ही अधिक! 📈\n\nशेयर करना शुरू करें, कमाई करना शुरू करें! 🚀",
      "UR": "<b>مرحلہ 5: ریفرل – اپنی کمائی کو زیادہ سے زیادہ کریں ⚡️</b>\n\n<b>ریفرل کی مثالیں:</b>\n✅ 10 دوستوں کو ریفر کریں: وہ کل $10,000 جمع کرتے ہیں، آپ کو 20% = $2,000 ملتے ہیں 🤑، بغیر کچھ کیے۔\n\n✅ 20 دوستوں کو ریفر کریں: وہ کل $10,000 جمع کرتے ہیں، آپ کو 30% = $3,000 ملتے ہیں 💸، ہمیشہ کے لیے۔\n\n<b>کمیشن کی تفصیلات:</b>\n✅ آسان نکاسی: کوئی شرط نہیں! (کم از کم $1)\n✅ بڑھتی ہوئی کمائی: جتنے زیادہ ریفر کریں، آپ کی کمیشن اتنی ہی زیادہ! 📈\n\nشئیر کرنا شروع کریں، کمائی کرنا شروع کریں! 🚀",
      "BN": "<b>ধাপ 5: রেফারেল – আপনার উপার্জন সর্বোচ্চ করুন ⚡️</b>\n\n<b>রেফারেলের উদাহরণ:</b>\n✅ 10 জন বন্ধুকে রেফার করুন: তারা মোট $10,000 জমা দেয়, আপনি পান 20% = $2,000 🤑, কিছু না করেই।\n\n✅ 20 জন বন্ধুকে রেফার করুন: তারা মোট $10,000 জমা দেয়, আপনি পান 30% = $3,000 💸, আজীবন।\n\n<b>কমিশন বিবরণ:</b>\n✅ সহজ উত্তোলন: কোনো শর্ত নেই! (ন্যূনতম $1)\n✅ স্কেলযোগ্য উপার্জন: যত বেশি রেফার করবেন, তত বেশি কমিশন! 📈\n\nশেয়ার করা শুরু করুন, উপার্জন করা শুরু করুন! 🚀",
      "AR": "<b>الخطوة 5: الإحالة – عزز أرباحك إلى أقصى حد ⚡️</b>\n\n<b>أمثلة على الإحالات:</b>\n✅ أحل 10 أصدقاء: يودعون ما مجموعه $10,000، وتحصّل 20% = $2,000 🤑 دون أي جهد.\n\n✅ أحل 20 صديقاً: يودعون ما مجموعه $10,000، وتحصّل 30% = $3,000 💸 مدى الحياة.\n\n<b>تفاصيل العمولة:</b>\n✅ سحوبات سهلة: بدون شروط! (الحد الأدنى $1)\n✅ أرباح قابلة للتوسع: كلما زادت إحالاتك، زادت عمولتك! 📈\n\nابدأ بالمشاركة، وابدأ في الكسب! 🚀",
      "TR": "<b>Adım 5: Referans – Kazancınızı Maksimuma Çıkarın ⚡️</b>\n\n<b>Referans Örnekleri:</b>\n✅ 10 arkadaşınızı referans gösterin: Toplam $10,000 yatırıyorlar, siz %20 = $2,000 kazanıyorsunuz 🤑, hiçbir şey yapmadan.\n\n✅ 20 arkadaşınızı referans gösterin: Toplam $10,000 yatırıyorlar, siz %30 = $3,000 kazanıyorsunuz 💸, ömür boyu.\n\n<b>Komisyon Detayları:</b>\n✅ Kolay çekim: Koşulsuz! (Min. $1)\n✅ Artan kazanç: Ne kadar çok referans verirseniz, komisyonunuz o kadar yüksek olur! 📈\n\nPaylaşmaya başlayın, kazanmaya başlayın! 🚀",
      "KO": "<b>5단계: 추천 – 수익을 극대화하세요 ⚡️</b>\n\n<b>추천 예시:</b>\n✅ 10명의 친구를 추천하면: 총 $10,000이 입금되고, 20% = $2,000를 받습니다 🤑, 아무것도 하지 않아도 됩니다.\n\n✅ 20명의 친구를 추천하면: 총 $10,000이 입금되고, 30% = $3,000를 평생 받습니다 💸.\n\n<b>커미션 상세:</b>\n✅ 간편 출금: 조건 없음! (최소 $1)\n✅ 확장 가능한 수익: 추천할수록 커미션이 높아집니다! 📈\n\n공유를 시작하고, 수익을 올리세요! 🚀",
      "FIL": "<b>Hakbang 5: Referral – I-maximize ang Iyong Kita ⚡️</b>\n\n<b>Mga Halimbawa ng Referral:</b>\n✅ I-refer ang 10 kaibigan: Nagde-deposito sila ng kabuuang $10,000, makakakuha ka ng 20% = $2,000 🤑 kahit wala kang ginagawa.\n\n✅ I-refer ang 20 kaibigan: Nagde-deposito sila ng kabuuang $10,000, makakakuha ka ng 30% = $3,000 💸 habang buhay.\n\n<b>Detalye ng Komisyon:</b>\n✅ Madaling Pag-withdraw: Walang kondisyon! (Min. $1)\n✅ Mas Pataas na Kita: Kapag mas marami kang na-refer, mas mataas ang iyong komisyon! 📈\n\nSimulan ang pag-share, simulan ang pag-earn! 🚀",
      "JA": "<b>ステップ5：リファラル – あなたの利益を最大化する ⚡️</b>\n\n<b>リファラルの例：</b>\n✅ 友達10人を紹介すると：合計$10,000が入金され、20% = $2,000を獲得 🤑（何もしなくても）\n\n✅ 友達20人を紹介すると：合計$10,000が入金され、30% = $3,000を生涯獲得 💸\n\n<b>コミッション詳細：</b>\n✅ 簡単な出金：条件なし！（最低$1）\n✅ 拡大可能な収益：紹介すればするほど、コミッションが高くなります！ 📈\n\nシェアを始めて、稼ぎ始めましょう！ 🚀"
    },
    button: {
  "EN": [
    { text: "View Referral Details 👥", callback_data: "/close_refer" },
    { text: "⏪ Go To Main Menu", callback_data: "/close_menu" }
  ],
  "IT": [
    { text: "Visualizza Dettagli Referral 👥", callback_data: "/close_refer" },
    { text: "⏪ Torna al Menu Principale", callback_data: "/close_menu" }
  ],
  "ES": [
    { text: "Ver Detalles de Referidos 👥", callback_data: "/close_refer" },
    { text: "⏪ Volver al Menú Principal", callback_data: "/close_menu" }
  ],
  "PT": [
    { text: "Ver Detalhes de Indicações 👥", callback_data: "/close_refer" },
    { text: "⏪ Voltar ao Menu Principal", callback_data: "/close_menu" }
  ],
  "DE": [
    { text: "Referral-Details Anzeigen 👥", callback_data: "/close_refer" },
    { text: "⏪ Zum Hauptmenü", callback_data: "/close_menu" }
  ],
  "FR": [
    { text: "Voir les détails du parrainage 👥", callback_data: "/close_refer" },
    { text: "⏪ Retour au menu principal", callback_data: "/close_menu" }
  ],
  "RU": [
    { text: "Посмотреть детали рефералов 👥", callback_data: "/close_refer" },
    { text: "⏪ Вернуться в главное меню", callback_data: "/close_menu" }
  ],
  "ZH": [
    { text: "查看推荐详情 👥", callback_data: "/close_refer" },
    { text: "⏪ 返回主菜单", callback_data: "/close_menu" }
  ],
  "HI": [
    { text: "रेफरल विवरण देखें 👥", callback_data: "/close_refer" },
    { text: "⏪ मुख्य मेनू पर जाएँ", callback_data: "/close_menu" }
  ],
  "UR": [
    { text: "ریفرل تفصیلات دیکھیں 👥", callback_data: "/close_refer" },
    { text: "⏪ مرکزی مینو پر جائیں", callback_data: "/close_menu" }
  ],
  "BN": [
    { text: "রেফারেল বিস্তারিত দেখুন 👥", callback_data: "/close_refer" },
    { text: "⏪ প্রধান মেনুতে ফিরে যান", callback_data: "/close_menu" }
  ],
  "AR": [
    { text: "عرض تفاصيل الإحالة 👥", callback_data: "/close_refer" },
    { text: "⏪ العودة إلى القائمة الرئيسية", callback_data: "/close_menu" }
  ],
  "TR": [
    { text: "Referans Detaylarını Gör 👥", callback_data: "/close_refer" },
    { text: "⏪ Ana Menüye Dön", callback_data: "/close_menu" }
  ],
  "KO": [
    { text: "추천 세부사항 보기 👥", callback_data: "/close_refer" },
    { text: "⏪ 메인 메뉴로 돌아가기", callback_data: "/close_menu" }
  ],
  "FIL": [
    { text: "Tingnan ang Referral Details 👥", callback_data: "/close_refer" },
    { text: "⏪ Bumalik sa Main Menu", callback_data: "/close_menu" }
  ],
  "JA": [
    { text: "リファラル詳細を表示 👥", callback_data: "/close_refer" },
    { text: "⏪ メインメニューに戻る", callback_data: "/close_menu" }
  ]
},
    photo: "https://ibb.co/HpDXH4t9"
  }
};

// ─── Ban Check ─────────────────────────────────────────────
var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  Api.sendMessage({
    text: stepsMsgs && stepsMsgs.ban ? stepsMsgs.ban[userLang] || stepsMsgs.ban["EN"] : stepsMsgs.ban["EN"],
    parse_mode: "html"
  });
  return;
}

// ─── Maintenance Check ─────────────────────────────────────
var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  Api.sendMessage({
    text: stepsMsgs && stepsMsgs.maintenance ? stepsMsgs.maintenance[userLang] || stepsMsgs.maintenance["EN"] : stepsMsgs.maintenance["EN"],
    parse_mode: "html"
  });
  return;
}

/* =====================================================
   Step 1: Deposit Funds
   ===================================================== */
var step1Caption = stepsMsgs.step1.caption[userLang] || stepsMsgs.step1.caption["EN"];
var step1Buttons = stepsMsgs.step1.button[userLang] || stepsMsgs.step1.button["EN"];
Api.sendPhoto({
  photo: stepsMsgs.step1.photo,
  caption: step1Caption,
  reply_markup: { inline_keyboard: [step1Buttons] },
  parse_mode: "html"
});

/* =====================================================
   Step 2: Purchase Your VIP Plan
   ===================================================== */
var step2Caption = stepsMsgs.step2.caption[userLang] || stepsMsgs.step2.caption["EN"];
var step2Buttons = stepsMsgs.step2.button[userLang] || stepsMsgs.step2.button["EN"];
Api.sendPhoto({
  photo: stepsMsgs.step2.photo,
  caption: step2Caption,
  reply_markup: { inline_keyboard: [step2Buttons] },
  parse_mode: "html"
});

/* =====================================================
   Step 3: Monitor Your Account & Profit Growth
   ===================================================== */
var step3Caption = stepsMsgs.step3.caption[userLang] || stepsMsgs.step3.caption["EN"];
var step3Buttons = stepsMsgs.step3.button[userLang] || stepsMsgs.step3.button["EN"];
Api.sendPhoto({
  photo: stepsMsgs.step3.photo,
  caption: step3Caption,
  reply_markup: { inline_keyboard: [step3Buttons] },
  parse_mode: "html"
});

/* =====================================================
   Step 4: Withdraw Your Earnings
   ===================================================== */
var step4Caption = stepsMsgs.step4.caption[userLang] || stepsMsgs.step4.caption["EN"];
var step4Buttons = stepsMsgs.step4.button[userLang] || stepsMsgs.step4.button["EN"];
Api.sendPhoto({
  photo: stepsMsgs.step4.photo,
  caption: step4Caption,
  reply_markup: { inline_keyboard: [step4Buttons] },
  parse_mode: "html"
});

/* =====================================================
   Step 5: Referral – Maximize Your Earnings
   ===================================================== */
var step5Caption = stepsMsgs.step5.caption[userLang] || stepsMsgs.step5.caption["EN"];
var step5Buttons = stepsMsgs.step5.button[userLang] || stepsMsgs.step5.button["EN"];
Api.sendPhoto({
  photo: stepsMsgs.step5.photo,
  caption: step5Caption,
  reply_markup: { inline_keyboard: [step5Buttons] },
  parse_mode: "html"
});
