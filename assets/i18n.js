/* ============================================================
   Dutta Residence — on-device i18n + entrance animations
   Hand-authored strings, auto-selected from the browser locale.
   No backend, no network calls, works offline.
   ============================================================ */
(function () {
  "use strict";

  /* Native language names shown in the picker */
  var NATIVE = {
    en: "English", hi: "हिन्दी", bn: "বাংলা", ta: "தமிழ்", te: "తెలుగు",
    kn: "ಕನ್ನಡ", ml: "മലയാളം", ar: "العربية", it: "Italiano", ja: "日本語",
    es: "Español", fr: "Français", de: "Deutsch", zh: "中文", pt: "Português", ru: "Русский"
  };
  var ORDER = ["en", "hi", "bn", "ta", "te", "kn", "ml", "ar", "it", "ja", "es", "fr", "de", "zh", "pt", "ru"];
  var RTL = ["ar"];

  /* lang -> { key: text } */
  var DICT = {
    en: {
      car_title: "You've scanned the QR on our vehicle.",
      car_sub: "If this vehicle needs attention, please reach us right away.",
      sec_vehicle: "Vehicle", reg_no: "Registration", sec_contacts: "Contacts",
      role_primary: "Primary user", role_secondary: "Secondary user", role_owner: "Registered owner",
      call: "Call", car_footer: "Thank you — drive safe.",
      bag_title: "Looks like you've scanned one of our bagtags.",
      bag_sub: "If this baggage appears lost, please reach us using any option below.",
      home_location: "Home location", email_us: "Email us",
      bag_footer: "Thank you for helping return our belongings.",
      root_sub: "Private residence", lang_aria: "Choose language"
    },
    hi: {
      car_title: "आपने हमारे वाहन का QR स्कैन किया है।",
      car_sub: "यदि इस वाहन पर ध्यान देने की आवश्यकता है, तो कृपया तुरंत हमसे संपर्क करें।",
      sec_vehicle: "वाहन", reg_no: "पंजीकरण", sec_contacts: "संपर्क",
      role_primary: "प्राथमिक उपयोगकर्ता", role_secondary: "द्वितीयक उपयोगकर्ता", role_owner: "पंजीकृत मालिक",
      call: "कॉल करें", car_footer: "धन्यवाद — सुरक्षित यात्रा करें।",
      bag_title: "लगता है आपने हमारे किसी बैगटैग को स्कैन किया है।",
      bag_sub: "यदि यह सामान खोया हुआ प्रतीत होता है, तो कृपया नीचे दिए गए किसी भी विकल्प से हमसे संपर्क करें।",
      home_location: "घर का स्थान", email_us: "हमें ईमेल करें",
      bag_footer: "हमारा सामान लौटाने में मदद करने के लिए धन्यवाद।",
      root_sub: "निजी निवास", lang_aria: "भाषा चुनें"
    },
    bn: {
      car_title: "আপনি আমাদের গাড়ির QR স্ক্যান করেছেন।",
      car_sub: "এই গাড়িটির প্রতি মনোযোগ প্রয়োজন হলে, অনুগ্রহ করে এখনই আমাদের সাথে যোগাযোগ করুন।",
      sec_vehicle: "গাড়ি", reg_no: "নিবন্ধন", sec_contacts: "যোগাযোগ",
      role_primary: "প্রধান ব্যবহারকারী", role_secondary: "দ্বিতীয় ব্যবহারকারী", role_owner: "নিবন্ধিত মালিক",
      call: "কল করুন", car_footer: "ধন্যবাদ — নিরাপদে চালান।",
      bag_title: "মনে হচ্ছে আপনি আমাদের একটি ব্যাগট্যাগ স্ক্যান করেছেন।",
      bag_sub: "এই ব্যাগটি হারিয়ে গেছে বলে মনে হলে, অনুগ্রহ করে নিচের যেকোনো উপায়ে আমাদের সাথে যোগাযোগ করুন।",
      home_location: "বাড়ির অবস্থান", email_us: "আমাদের ইমেল করুন",
      bag_footer: "আমাদের জিনিসপত্র ফিরিয়ে দিতে সাহায্য করার জন্য ধন্যবাদ।",
      root_sub: "ব্যক্তিগত বাসভবন", lang_aria: "ভাষা নির্বাচন করুন"
    },
    ta: {
      car_title: "எங்கள் வாகனத்தின் QR ஐ நீங்கள் ஸ்கேன் செய்துள்ளீர்கள்.",
      car_sub: "இந்த வாகனத்திற்கு கவனம் தேவைப்பட்டால், உடனே எங்களை தொடர்பு கொள்ளவும்.",
      sec_vehicle: "வாகனம்", reg_no: "பதிவு எண்", sec_contacts: "தொடர்புகள்",
      role_primary: "முதன்மை பயனர்", role_secondary: "இரண்டாம் நிலை பயனர்", role_owner: "பதிவு செய்யப்பட்ட உரிமையாளர்",
      call: "அழைக்க", car_footer: "நன்றி — பாதுகாப்பாக ஓட்டுங்கள்.",
      bag_title: "எங்கள் பேக்டேக் ஒன்றை நீங்கள் ஸ்கேன் செய்துள்ளீர்கள் போலும்.",
      bag_sub: "இந்த பயணப்பை தொலைந்ததாகத் தோன்றினால், கீழே உள்ள ஏதேனும் ஒரு வழியில் எங்களை தொடர்பு கொள்ளவும்.",
      home_location: "வீட்டின் இடம்", email_us: "மின்னஞ்சல் அனுப்பவும்",
      bag_footer: "எங்கள் பொருட்களை திருப்பித் தர உதவியதற்கு நன்றி.",
      root_sub: "தனியார் இல்லம்", lang_aria: "மொழியைத் தேர்ந்தெடுக்கவும்"
    },
    te: {
      car_title: "మీరు మా వాహనం యొక్క QR ను స్కాన్ చేశారు.",
      car_sub: "ఈ వాహనానికి శ్రద్ధ అవసరమైతే, దయచేసి వెంటనే మమ్మల్ని సంప్రదించండి.",
      sec_vehicle: "వాహనం", reg_no: "నమోదు", sec_contacts: "సంప్రదింపులు",
      role_primary: "ప్రాథమిక వినియోగదారు", role_secondary: "ద్వితీయ వినియోగదారు", role_owner: "నమోదైన యజమాని",
      call: "కాల్ చేయండి", car_footer: "ధన్యవాదాలు — సురక్షితంగా నడపండి.",
      bag_title: "మీరు మా బ్యాగ్‌ట్యాగ్‌లలో ఒకదాన్ని స్కాన్ చేసినట్లున్నారు.",
      bag_sub: "ఈ సామాను పోయినట్లు అనిపిస్తే, దయచేసి దిగువ ఏదైనా ఎంపిక ద్వారా మమ్మల్ని సంప్రదించండి.",
      home_location: "ఇంటి స్థానం", email_us: "మాకు ఇమెయిల్ చేయండి",
      bag_footer: "మా వస్తువులను తిరిగి ఇవ్వడంలో సహాయం చేసినందుకు ధన్యవాదాలు.",
      root_sub: "ప్రైవేట్ నివాసం", lang_aria: "భాషను ఎంచుకోండి"
    },
    kn: {
      car_title: "ನೀವು ನಮ್ಮ ವಾಹನದ QR ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿದ್ದೀರಿ.",
      car_sub: "ಈ ವಾಹನಕ್ಕೆ ಗಮನ ಬೇಕಿದ್ದರೆ, ದಯವಿಟ್ಟು ಕೂಡಲೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      sec_vehicle: "ವಾಹನ", reg_no: "ನೋಂದಣಿ", sec_contacts: "ಸಂಪರ್ಕಗಳು",
      role_primary: "ಪ್ರಾಥಮಿಕ ಬಳಕೆದಾರ", role_secondary: "ದ್ವಿತೀಯ ಬಳಕೆದಾರ", role_owner: "ನೋಂದಾಯಿತ ಮಾಲೀಕ",
      call: "ಕರೆ ಮಾಡಿ", car_footer: "ಧನ್ಯವಾದ — ಸುರಕ್ಷಿತವಾಗಿ ಚಲಾಯಿಸಿ.",
      bag_title: "ನೀವು ನಮ್ಮ ಬ್ಯಾಗ್‌ಟ್ಯಾಗ್ ಒಂದನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿದಂತಿದೆ.",
      bag_sub: "ಈ ಸಾಮಾನು ಕಳೆದುಹೋದಂತೆ ಕಂಡುಬಂದರೆ, ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಯಾವುದೇ ಆಯ್ಕೆಯ ಮೂಲಕ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      home_location: "ಮನೆಯ ಸ್ಥಳ", email_us: "ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ",
      bag_footer: "ನಮ್ಮ ವಸ್ತುಗಳನ್ನು ಹಿಂದಿರುಗಿಸಲು ಸಹಾಯ ಮಾಡಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದ.",
      root_sub: "ಖಾಸಗಿ ನಿವಾಸ", lang_aria: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ"
    },
    ml: {
      car_title: "നിങ്ങൾ ഞങ്ങളുടെ വാഹനത്തിന്റെ QR സ്കാൻ ചെയ്തിരിക്കുന്നു.",
      car_sub: "ഈ വാഹനത്തിന് ശ്രദ്ധ ആവശ്യമെങ്കിൽ, ദയവായി ഉടൻ ഞങ്ങളെ ബന്ധപ്പെടുക.",
      sec_vehicle: "വാഹനം", reg_no: "രജിസ്ട്രേഷൻ", sec_contacts: "ബന്ധപ്പെടാൻ",
      role_primary: "പ്രാഥമിക ഉപയോക്താവ്", role_secondary: "ദ്വിതീയ ഉപയോക്താവ്", role_owner: "രജിസ്റ്റർ ചെയ്ത ഉടമ",
      call: "വിളിക്കുക", car_footer: "നന്ദി — സുരക്ഷിതമായി ഓടിക്കുക.",
      bag_title: "നിങ്ങൾ ഞങ്ങളുടെ ഒരു ബാഗ്ടാഗ് സ്കാൻ ചെയ്തതായി തോന്നുന്നു.",
      bag_sub: "ഈ ബാഗ് നഷ്ടപ്പെട്ടതായി തോന്നുന്നുവെങ്കിൽ, ദയവായി താഴെയുള്ള ഏതെങ്കിലും മാർഗത്തിലൂടെ ഞങ്ങളെ ബന്ധപ്പെടുക.",
      home_location: "വീടിന്റെ സ്ഥലം", email_us: "ഞങ്ങൾക്ക് ഇമെയിൽ ചെയ്യുക",
      bag_footer: "ഞങ്ങളുടെ സാധനങ്ങൾ തിരികെ നൽകാൻ സഹായിച്ചതിന് നന്ദി.",
      root_sub: "സ്വകാര്യ വസതി", lang_aria: "ഭാഷ തിരഞ്ഞെടുക്കുക"
    },
    ar: {
      car_title: "لقد قمت بمسح رمز QR الخاص بمركبتنا.",
      car_sub: "إذا كانت هذه المركبة بحاجة إلى انتباه، فيرجى الاتصال بنا على الفور.",
      sec_vehicle: "المركبة", reg_no: "رقم التسجيل", sec_contacts: "جهات الاتصال",
      role_primary: "المستخدم الأساسي", role_secondary: "المستخدم الثانوي", role_owner: "المالك المسجل",
      call: "اتصل", car_footer: "شكرًا لك — قُد بأمان.",
      bag_title: "يبدو أنك قمت بمسح إحدى بطاقات أمتعتنا.",
      bag_sub: "إذا بدت هذه الحقيبة مفقودة، فيرجى التواصل معنا عبر أي من الخيارات أدناه.",
      home_location: "موقع المنزل", email_us: "راسلنا عبر البريد",
      bag_footer: "شكرًا لمساعدتك في إعادة متعلقاتنا.",
      root_sub: "مسكن خاص", lang_aria: "اختر اللغة"
    },
    it: {
      car_title: "Hai scansionato il QR del nostro veicolo.",
      car_sub: "Se questo veicolo necessita di attenzione, contattaci subito.",
      sec_vehicle: "Veicolo", reg_no: "Targa", sec_contacts: "Contatti",
      role_primary: "Utente principale", role_secondary: "Utente secondario", role_owner: "Proprietario registrato",
      call: "Chiama", car_footer: "Grazie — guida con prudenza.",
      bag_title: "Sembra che tu abbia scansionato una delle nostre etichette bagaglio.",
      bag_sub: "Se questo bagaglio sembra smarrito, contattaci con una delle opzioni qui sotto.",
      home_location: "Posizione di casa", email_us: "Scrivici via email",
      bag_footer: "Grazie per aiutarci a recuperare i nostri effetti.",
      root_sub: "Residenza privata", lang_aria: "Scegli la lingua"
    },
    ja: {
      car_title: "私たちの車両のQRコードをスキャンされました。",
      car_sub: "この車両に問題がある場合は、すぐにご連絡ください。",
      sec_vehicle: "車両", reg_no: "登録番号", sec_contacts: "連絡先",
      role_primary: "主な使用者", role_secondary: "副使用者", role_owner: "登録名義人",
      call: "電話", car_footer: "ありがとうございます — 安全運転を。",
      bag_title: "私たちの手荷物タグをスキャンされたようです。",
      bag_sub: "この荷物が紛失したと思われる場合は、下のいずれかの方法でご連絡ください。",
      home_location: "自宅の場所", email_us: "メールする",
      bag_footer: "私たちの荷物の返却にご協力いただきありがとうございます。",
      root_sub: "私邸", lang_aria: "言語を選択"
    },
    es: {
      car_title: "Has escaneado el QR de nuestro vehículo.",
      car_sub: "Si este vehículo necesita atención, contáctanos de inmediato.",
      sec_vehicle: "Vehículo", reg_no: "Matrícula", sec_contacts: "Contactos",
      role_primary: "Usuario principal", role_secondary: "Usuario secundario", role_owner: "Propietario registrado",
      call: "Llamar", car_footer: "Gracias — conduce con cuidado.",
      bag_title: "Parece que has escaneado una de nuestras etiquetas de equipaje.",
      bag_sub: "Si este equipaje parece perdido, contáctanos mediante cualquiera de las opciones siguientes.",
      home_location: "Ubicación", email_us: "Envíanos un correo",
      bag_footer: "Gracias por ayudarnos a recuperar nuestras pertenencias.",
      root_sub: "Residencia privada", lang_aria: "Elegir idioma"
    },
    fr: {
      car_title: "Vous avez scanné le QR de notre véhicule.",
      car_sub: "Si ce véhicule nécessite une intervention, contactez-nous immédiatement.",
      sec_vehicle: "Véhicule", reg_no: "Immatriculation", sec_contacts: "Contacts",
      role_primary: "Utilisateur principal", role_secondary: "Utilisateur secondaire", role_owner: "Propriétaire enregistré",
      call: "Appeler", car_footer: "Merci — roulez prudemment.",
      bag_title: "Il semble que vous ayez scanné l'une de nos étiquettes de bagage.",
      bag_sub: "Si ce bagage semble perdu, contactez-nous via l'une des options ci-dessous.",
      home_location: "Localisation", email_us: "Écrivez-nous",
      bag_footer: "Merci de nous aider à récupérer nos affaires.",
      root_sub: "Résidence privée", lang_aria: "Choisir la langue"
    },
    de: {
      car_title: "Sie haben den QR-Code unseres Fahrzeugs gescannt.",
      car_sub: "Wenn dieses Fahrzeug Aufmerksamkeit benötigt, kontaktieren Sie uns bitte sofort.",
      sec_vehicle: "Fahrzeug", reg_no: "Kennzeichen", sec_contacts: "Kontakte",
      role_primary: "Hauptnutzer", role_secondary: "Zweitnutzer", role_owner: "Eingetragener Halter",
      call: "Anrufen", car_footer: "Danke — gute Fahrt.",
      bag_title: "Sie haben offenbar einen unserer Gepäckanhänger gescannt.",
      bag_sub: "Falls dieses Gepäck verloren scheint, kontaktieren Sie uns über eine der Optionen unten.",
      home_location: "Standort", email_us: "E-Mail senden",
      bag_footer: "Danke, dass Sie helfen, unsere Sachen zurückzubringen.",
      root_sub: "Privatwohnsitz", lang_aria: "Sprache wählen"
    },
    zh: {
      car_title: "您扫描了我们车辆的二维码。",
      car_sub: "如果该车辆需要处理，请立即联系我们。",
      sec_vehicle: "车辆", reg_no: "车牌号", sec_contacts: "联系方式",
      role_primary: "主要使用人", role_secondary: "次要使用人", role_owner: "登记车主",
      call: "拨打", car_footer: "谢谢 — 注意安全驾驶。",
      bag_title: "看来您扫描了我们的行李标签。",
      bag_sub: "如果这件行李似乎丢失了，请通过以下任一方式联系我们。",
      home_location: "住址位置", email_us: "给我们发邮件",
      bag_footer: "感谢您帮助归还我们的物品。",
      root_sub: "私人住宅", lang_aria: "选择语言"
    },
    pt: {
      car_title: "Você escaneou o QR do nosso veículo.",
      car_sub: "Se este veículo precisar de atenção, fale conosco imediatamente.",
      sec_vehicle: "Veículo", reg_no: "Placa", sec_contacts: "Contatos",
      role_primary: "Usuário principal", role_secondary: "Usuário secundário", role_owner: "Proprietário registrado",
      call: "Ligar", car_footer: "Obrigado — dirija com segurança.",
      bag_title: "Parece que você escaneou uma das nossas etiquetas de bagagem.",
      bag_sub: "Se esta bagagem parecer perdida, fale conosco por qualquer opção abaixo.",
      home_location: "Localização", email_us: "Envie-nos um e-mail",
      bag_footer: "Obrigado por ajudar a devolver nossos pertences.",
      root_sub: "Residência privada", lang_aria: "Escolher idioma"
    },
    ru: {
      car_title: "Вы отсканировали QR-код нашего автомобиля.",
      car_sub: "Если этому автомобилю требуется внимание, пожалуйста, свяжитесь с нами немедленно.",
      sec_vehicle: "Автомобиль", reg_no: "Регистрация", sec_contacts: "Контакты",
      role_primary: "Основной пользователь", role_secondary: "Дополнительный пользователь", role_owner: "Зарегистрированный владелец",
      call: "Позвонить", car_footer: "Спасибо — счастливого пути.",
      bag_title: "Похоже, вы отсканировали одну из наших багажных бирок.",
      bag_sub: "Если этот багаж выглядит потерянным, свяжитесь с нами любым из способов ниже.",
      home_location: "Адрес дома", email_us: "Напишите нам",
      bag_footer: "Спасибо, что помогаете вернуть наши вещи.",
      root_sub: "Частная резиденция", lang_aria: "Выбрать язык"
    }
  };

  var GLOBE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>';

  function detect() {
    try {
      var saved = localStorage.getItem("dutta_lang");
      if (saved && DICT[saved]) return saved;
    } catch (e) {}
    var langs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      var base = String(langs[i]).toLowerCase().split("-")[0];
      if (DICT[base]) return base;
    }
    return "en";
  }

  var current = "en";
  var labelEl, menuEl;

  function apply(lang) {
    if (!DICT[lang]) lang = "en";
    current = lang;
    var d = DICT[lang], en = DICT.en;
    var html = document.documentElement;
    html.lang = lang;
    html.dir = RTL.indexOf(lang) >= 0 ? "rtl" : "ltr";

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      var val = (d[key] != null) ? d[key] : en[key];
      if (val != null) nodes[i].textContent = val;
    }
    var aria = document.querySelectorAll("[data-i18n-aria]");
    for (var j = 0; j < aria.length; j++) {
      var ak = aria[j].getAttribute("data-i18n-aria");
      aria[j].setAttribute("aria-label", (d[ak] != null ? d[ak] : en[ak]) || "");
    }

    if (labelEl) labelEl.textContent = NATIVE[lang];
    if (menuEl) {
      var btns = menuEl.querySelectorAll("button");
      for (var k = 0; k < btns.length; k++) {
        btns[k].setAttribute("aria-current", btns[k].dataset.lang === lang ? "true" : "false");
      }
    }
    try { localStorage.setItem("dutta_lang", lang); } catch (e) {}
  }

  function buildPicker() {
    var wrap = document.createElement("div");
    wrap.className = "lang-wrap";

    var btn = document.createElement("button");
    btn.className = "lang-btn";
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("data-i18n-aria", "lang_aria");
    btn.innerHTML = GLOBE + '<span class="lang-current"></span>';
    labelEl = btn.querySelector(".lang-current");

    menuEl = document.createElement("div");
    menuEl.className = "lang-menu";
    menuEl.setAttribute("role", "menu");
    for (var i = 0; i < ORDER.length; i++) {
      var code = ORDER[i];
      var item = document.createElement("button");
      item.type = "button";
      item.dataset.lang = code;
      item.textContent = NATIVE[code];
      item.addEventListener("click", (function (c) {
        return function () { apply(c); close(); };
      })(code));
      menuEl.appendChild(item);
    }

    function open() { menuEl.classList.add("open"); }
    function close() { menuEl.classList.remove("open"); }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      menuEl.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    wrap.appendChild(btn);
    wrap.appendChild(menuEl);
    document.body.appendChild(wrap);
  }

  /* entrance reveal — staggered, GPU-only, respects reduced motion.
     The hidden (.pre) state is added here, never in static CSS, so any
     earlier failure leaves the page fully visible instead of blank. */
  function reveal() {
    var els = document.querySelectorAll(".reveal");
    for (var p = 0; p < els.length; p++) els[p].classList.add("pre");
    if (!("IntersectionObserver" in window) || !els.length) {
      for (var n = 0; n < els.length; n++) els[n].classList.add("in");
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      var shown = 0;
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) continue;
        var el = entries[i].target;
        el.style.transitionDelay = (shown * 70) + "ms";
        el.classList.add("in");
        shown++;
        obs.unobserve(el);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    for (var m = 0; m < els.length; m++) io.observe(els[m]);
  }

  function init() {
    try { reveal(); } catch (e) {}
    try { buildPicker(); } catch (e) {}
    try { apply(detect()); } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
