(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * Hindi translations. English text lives in index.html; every element
   * with data-i18n="key" is swapped to HI[key] when Hindi is selected.
   * ------------------------------------------------------------------ */
  var HI = {
    "skip": "मुख्य सामग्री पर जाएँ",
    "topbar.hours": "सोम–शनि · दोपहर 2–5 व शाम 6–8 बजे · रविवार अवकाश",
    "topbar.loc": "चौधरन कॉलोनी, गुना (म.प्र.)",

    "brand.name": "डॉ. सोवरण राय",
    "brand.sub": "एम.डी. मेडिसिन · परामर्श चिकित्सक",

    "nav.about": "परिचय",
    "nav.services": "इलाज",
    "nav.education": "शिक्षा",
    "nav.certificates": "प्रमाण-पत्र",
    "nav.reviews": "समीक्षाएँ",
    "nav.visit": "समय व पता",

    "cta.callShort": "कॉल करें",
    "cta.call": "नंबर लगाएँ: 81097 70140",
    "cta.visit": "समय व रास्ता",

    "hero.eyebrow": "परामर्श चिकित्सक · गुना, मध्य प्रदेश",
    "hero.name": "डॉ. सोवरण राय",
    "hero.gold": "गोल्ड मेडलिस्ट",
    "hero.lead": "एम्स भोपाल से प्रशिक्षित चिकित्सक, अब आपके शहर गुना में प्रतिदिन परामर्श हेतु उपलब्ध। हृदय रोग, डायबिटीज़, फेफड़े, लीवर, किडनी, मस्तिष्क व नसों तथा चर्म रोगों का अनुभवी इलाज — एक ही जगह, आपके घर के पास।",

    "facts.degree.k": "योग्यता",
    "facts.degree.v": "एम.बी.बी.एस., एम.डी. (मेडिसिन) — गोल्ड मेडलिस्ट",
    "facts.prev.k": "पूर्व चिकित्सक",
    "facts.prev.v": "एम्स भोपाल · ग्रेटर कैलाश हॉस्पिटल, इन्दौर",
    "facts.reg.k": "पंजीयन क्रमांक",
    "facts.where.k": "क्लिनिक",
    "facts.where.v": "कान्ती राय मेमोरियल क्लिनिक, चौधरन कॉलोनी, गुना",

    "strip.1.t": "गोल्ड मेडलिस्ट",
    "strip.1.d": "एम.डी. जनरल मेडिसिन",
    "strip.2.t": "पूर्व चिकित्सक, एम्स भोपाल",
    "strip.2.d": "अखिल भारतीय आयुर्विज्ञान संस्थान",
    "strip.3.t": "अंतरराष्ट्रीय प्रशिक्षण",
    "strip.3.d": "हार्वर्ड · जॉन्स हॉपकिन्स · ADA कार्यक्रम",
    "strip.4.t": "प्रतिदिन ओ.पी.डी.",
    "strip.4.d": "सोमवार से शनिवार",

    "about.caption": "इन्दिरा नंदन निवास, गुना स्थित क्लिनिक",
    "about.eyebrow": "डॉक्टर का परिचय",
    "about.title": "बड़े अस्पताल का अनुभव, अब आपके अपने शहर में",
    "about.p1": "डॉ. सोवरण राय एम.बी.बी.एस. एवं एम.डी. (मेडिसिन) परामर्श चिकित्सक हैं, जिन्होंने एम.डी. में गोल्ड मेडल प्राप्त किया। गुना में प्रैक्टिस शुरू करने से पहले वे अखिल भारतीय आयुर्विज्ञान संस्थान (एम्स), भोपाल तथा ग्रेटर कैलाश हॉस्पिटल, इन्दौर में चिकित्सक के रूप में सेवाएँ दे चुके हैं।",
    "about.p2": "मेडिसिन विशेषज्ञ के रूप में वे मरीज़ की संपूर्ण देखभाल करते हैं — डायबिटीज़, ब्लड प्रेशर और थायरॉइड जैसी लंबी बीमारियों से लेकर हृदय व फेफड़ों के रोग, बुखार, तथा लीवर, किडनी, नसों और त्वचा की समस्याओं तक।",
    "about.p3": "कोविड-19 महामारी के दौरान उन्होंने हार्वर्ड मेडिकल स्कूल से मैकेनिकल वेंटिलेशन तथा जॉन्स हॉपकिन्स यूनिवर्सिटी से कॉन्टैक्ट ट्रेसिंग का अतिरिक्त प्रशिक्षण लिया, और उन्हें कोरोना योद्धा के रूप में सम्मानित किया गया। शासकीय सेवा में योगदान हेतु उन्हें पत्रिका एचीवर अवार्ड 2022 से भी सम्मानित किया गया है।",
    "about.more": "शिक्षा व अनुभव देखें →",

    "services.eyebrow": "हम किनका इलाज करते हैं",
    "services.title": "रोग एवं चिकित्सा सुविधाएँ",
    "services.lead": "जनरल मेडिसिन के सभी प्रमुख रोगों की जाँच, इलाज और नियमित फॉलो-अप।",
    "svc.heart.t": "हृदय रोग",
    "svc.heart.d": "दिल का दौरा — इलाज व बचाव, CHF (हृदय की कमज़ोरी), हाई ब्लड प्रेशर।",
    "svc.diabetes.t": "डायबिटीज़, बी.पी. व थायरॉइड",
    "svc.diabetes.d": "टाइप-2 डायबिटीज़, हाई बी.पी. एवं थायरॉइड रोगों का इलाज व नियमित निगरानी।",
    "svc.diabetes.more": "डायबिटीज़ क्लिनिक के बारे में →",
    "svc.lungs.t": "फेफड़ों के रोग",
    "svc.lungs.d": "दमा, COPD व छाती के संक्रमण; वेंटिलेशन प्रशिक्षण सहित कोविड पश्चात देखभाल।",
    "svc.neuro.t": "मस्तिष्क व नसें",
    "svc.neuro.d": "मस्तिष्क बुखार, लकवा, मिर्गी, सिरदर्द एवं नसों का सुन्नपन।",
    "svc.liver.t": "लीवर व किडनी",
    "svc.liver.d": "लीवर एवं किडनी रोगों की जाँच व इलाज।",
    "svc.skin.t": "चर्म रोग",
    "svc.skin.d": "त्वचा के सामान्य रोगों व संक्रमण का निदान एवं इलाज।",
    "svc.fever.t": "बुखार व संक्रमण",
    "svc.fever.d": "मलेरिया, टाइफाइड एवं अन्य मौसमी बुखार।",
    "svc.pain.t": "कमर व गर्दन दर्द",
    "svc.pain.d": "कमर दर्द, गर्दन दर्द एवं संबंधित नसों की तकलीफ़ का इलाज।",

    "dm.eyebrow": "डायबिटीज़ क्लिनिक",
    "dm.title": "डायबिटीज़ देखभाल में आपका साथी",
    "dm.lead": "डॉ. सोवरण राय का क्लिनिक आरोग्य डायबिटीज़ स्मार्टRx कार्यक्रम से जुड़ा है, जहाँ गुना में ही डायबिटीज़ की नियमित देखभाल उपलब्ध है।",
    "dm.c1": "टाइप-2 डायबिटीज़ की जाँच और लंबे समय तक इलाज",
    "dm.c2": "डायबिटीज़ रिस्क स्कोर की जाँच",
    "dm.c3": "आरोग्य डायबिटीज़ स्मार्टRx कार्यक्रम के माध्यम से कस्टमाइज़्ड डाइट प्लान",
    "dm.c4": "ब्लड शुगर, बी.पी. एवं थायरॉइड की नियमित निगरानी",
    "dm.cta": "डायबिटीज़ जाँच हेतु नंबर लगाएँ",
    "dm.q": "क्या आपको टाइप-2 डायबिटीज़ होने का जोखिम है?",
    "dm.pre": "लगभग",
    "dm.big": "2 में से 1",
    "dm.text": "डायबिटीज़ मरीज़ को पता ही नहीं होता कि उन्हें डायबिटीज़ है।",
    "dm.small": "जल्दी पता चलने पर डायबिटीज़ को नियंत्रित करना आसान होता है। अपनी विज़िट पर डायबिटीज़ रिस्क जाँच के बारे में पूछें।",

    "edu.eyebrow": "योग्यताएँ",
    "edu.title": "शिक्षा एवं अनुभव",
    "edu.col1": "चिकित्सा शिक्षा",
    "edu.md.tag": "गोल्ड मेडल",
    "edu.md.t": "एम.डी. — जनरल मेडिसिन",
    "edu.md.d": "मेडिसिन में स्नातकोत्तर उपाधि, गोल्ड मेडल के साथ।",
    "edu.mbbs.t": "एम.बी.बी.एस.",
    "edu.mbbs.d": "बैचलर ऑफ़ मेडिसिन एवं बैचलर ऑफ़ सर्जरी।",
    "edu.reg.t": "पंजीकृत चिकित्सक",
    "edu.reg.d": "पंजीयन क्रमांक MP17085, मध्य प्रदेश।",
    "edu.col2": "चिकित्सा अनुभव",
    "edu.now.tag": "वर्तमान",
    "edu.now.t": "परामर्श चिकित्सक, निजी क्लिनिक",
    "edu.now.d": "इन्दिरा नंदन निवास, चौधरन कॉलोनी, गुना (म.प्र.)।",
    "edu.aiims.t": "चिकित्सक — एम्स भोपाल",
    "edu.aiims.d": "अखिल भारतीय आयुर्विज्ञान संस्थान, भोपाल।",
    "edu.gk.t": "चिकित्सक — ग्रेटर कैलाश हॉस्पिटल, इन्दौर",
    "edu.gk.d": "मल्टी-स्पेशियलिटी हॉस्पिटल, इन्दौर।",

    "cert.eyebrow": "सतत शिक्षा एवं सम्मान",
    "cert.title": "प्रमाण-पत्र एवं सम्मान",
    "cert.sub1": "प्रमाण-पत्र",
    "cert.harvard.t": "कोविड-19 हेतु मैकेनिकल वेंटिलेशन",
    "cert.harvard.d": "गंभीर कोविड-19 मरीज़ों के लिए वेंटिलेटर प्रबंधन का विशेष प्रशिक्षण।",
    "cert.jhu.t": "कोविड-19 कॉन्टैक्ट ट्रेसिंग",
    "cert.jhu.d": "महामारी के दौरान कॉन्टैक्ट ट्रेसिंग व संक्रमण नियंत्रण का व्यावहारिक प्रशिक्षण।",
    "cert.ada.t": "टाइप-2 डायबिटीज़ प्रबंधन — Changing the Paradigm",
    "cert.ada.org": "अमेरिकन डायबिटीज़ एसोसिएशन (ADA) के संसाधनों पर आधारित स्व-अध्ययन कार्यक्रम",
    "cert.ada.d": "Medical Trends द्वारा बहु-विषयक डायबिटीज़ कार्यक्रम; मुख्य संपादक जॉन बी. ब्यूज़, MD, PhD।",
    "cert.sub2": "समाज द्वारा सम्मान",
    "award.patrika.tag": "विशेष सम्मान",
    "award.patrika.t": "पत्रिका एचीवर अवार्ड 2022",
    "award.patrika.org": "पत्रिका समाचार पत्र, गुना · 24 मार्च 2023",
    "award.patrika.d": "“गुना के अचीवर्स का सम्मान।” शासकीय सेवा के क्षेत्र में दिए गए अभूतपूर्व योगदान, शहर हित में किए गए अथक प्रयासों और कार्य के प्रति लगनशीलता के लिए प्रशस्ति-पत्र।",
    "award.corona.t": "कोरोना योद्धा कर्मवीर सम्मान",
    "award.corona.d": "हैहय क्षत्रिय कलचुरी समाज, गुना — कोविड-19 के दौरान सेवा हेतु",
    "award.rotary.t": "डॉक्टर्स डे सम्मान",
    "award.rotary.d": "रोटरी क्लब गुना — “हार्दिक आभार एवं कृतज्ञता सहित”",
    "award.memories.t": "“स्वीट मेमोरीज़” स्मृति-चिह्न",
    "award.memories.d": "स्मृति सम्मान, रोटरी क्लब गुना",

    "rev.eyebrow": "मरीज़ों की राय",
    "rev.title": "मरीज़ क्या कहते हैं",
    "rev.lead": "Google पर मरीज़ों की चुनी हुई समीक्षाएँ। सभी समीक्षाएँ पढ़ें, या अपना अनुभव साझा करें।",
    "rev.google": "Google पर सभी समीक्षाएँ देखें",
    "rev.asof": "रेटिंग व समीक्षाएँ Google के अनुसार, नवंबर 2026। अंग्रेज़ी समीक्षाओं का हिंदी अनुवाद दिया गया है।",
    "rev.write": "समीक्षा लिखें",

    "visit.eyebrow": "क्लिनिक आएँ",
    "visit.title": "मिलने का समय व पता",
    "visit.days": "सोमवार – शनिवार",
    "visit.noon": "दोपहर: 2:00 – 5:00 बजे",
    "visit.eve": "शाम: 6:00 – 8:00 बजे",
    "visit.sun": "रविवार",
    "visit.closed": "अवकाश",
    "visit.note": "असुविधा से बचने के लिए पूर्व रजिस्ट्रेशन कराएँ। नंबर लगाने हेतु <a href=\"tel:+918109770140\">81097 70140</a> पर कॉल करें।",
    "visit.addrTitle": "कान्ती राय मेमोरियल क्लिनिक",
    "visit.addr": "इन्दिरा नंदन निवास, आशीर्वाद हॉस्पिटल रोड, चौधरन कॉलोनी (लक्ष्मी गंज), गोयल भवन एवं डॉ. कांति शर्मा के पास, गुना, मध्य प्रदेश 473001",
    "visit.directions": "रास्ता देखें",
    "visit.mappls": "Mappls पर देखें",
    "phone.main": "अपॉइंटमेंट व नंबर लगाने हेतु",
    "phone.mainShort": "(अपॉइंटमेंट)",
    "phone.alt": "वैकल्पिक नंबर",
    "tbc": "पुष्टि होना बाकी",

    "gal.eyebrow": "गैलरी",
    "gal.title": "क्लिनिक की झलक",

    "footer.creds": "एम.बी.बी.एस., एम.डी. (मेडिसिन) — गोल्ड मेडलिस्ट · पंजीयन क्र. MP17085",
    "footer.prev": "पूर्व चिकित्सक — एम्स भोपाल एवं ग्रेटर कैलाश हॉस्पिटल, इन्दौर",
    "footer.contact": "संपर्क",
    "footer.addr": "कान्ती राय मेमोरियल क्लिनिक, इन्दिरा नंदन निवास, चौधरन कॉलोनी, गुना (म.प्र.) 473001",
    "footer.emergency.t": "आपातकाल?",
    "footer.emergency.d": "यह ओ.पी.डी. क्लिनिक है। चिकित्सीय आपातकाल में 108 पर कॉल करें या नज़दीकी अस्पताल जाएँ।",
    "footer.disclaimer": "इस वेबसाइट की जानकारी डॉक्टर से परामर्श का विकल्प नहीं है।"
  };

  var UI = {
    en: {
      openNow: "Open now · closes at {t}",
      opensAt: "Closed now · opens today at {t}",
      opensTomorrow: "Closed now · opens {d} at 2:00 PM",
      today: "Today",
      langLabel: "Switch language to Hindi",
      title: "Dr. Sovran Rai — MD Medicine, Consultant Physician in Guna"
    },
    hi: {
      openNow: "अभी खुला है · {t} तक",
      opensAt: "अभी बंद है · आज {t} से खुलेगा",
      opensTomorrow: "अभी बंद है · {d} दोपहर 2:00 बजे से खुलेगा",
      today: "आज",
      langLabel: "भाषा अंग्रेज़ी में बदलें",
      title: "डॉ. सोवरण राय — एम.डी. मेडिसिन, परामर्श चिकित्सक, गुना"
    }
  };
  var DAYS = {
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    hi: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
  };

  var root = document.documentElement;
  var nodes = document.querySelectorAll("[data-i18n]");
  var lang = "en";

  // Remember the English markup so we can switch back.
  nodes.forEach(function (el) { el.dataset.en = el.innerHTML; });

  function storageGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  function setLang(next) {
    lang = next === "hi" ? "hi" : "en";
    root.lang = lang;
    root.dataset.lang = lang;
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = lang === "hi" && HI[key] ? HI[key] : el.dataset.en;
    });
    document.title = UI[lang].title;
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.setAttribute("aria-label", UI[lang].langLabel);
    storageSet("lang", lang);
    updateStatus();
    renderReviews();
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    setLang(lang === "en" ? "hi" : "en");
  });

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------------- Active nav link on scroll ---------------- */
  if ("IntersectionObserver" in window) {
    var links = {};
    nav.querySelectorAll("a[href^='#']").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove("is-active"); });
          links[en.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  /* ---------------- Open / closed status (India time) ---------------- */
  var SESSIONS = [[14 * 60, 17 * 60], [18 * 60, 20 * 60]]; // minutes since midnight

  function indiaNow() {
    // IST is UTC+5:30 with no daylight saving.
    var d = new Date();
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    return new Date(utc + 330 * 60000);
  }
  function fmt(mins) {
    var h = Math.floor(mins / 60), m = mins % 60;
    if (lang === "hi") return h % 12 + ":" + (m < 10 ? "0" : "") + m + " बजे";
    return (h % 12 || 12) + ":" + (m < 10 ? "0" : "") + m + (h < 12 ? " AM" : " PM");
  }

  function updateStatus() {
    var el = document.getElementById("openStatus");
    if (!el) return;
    var now = indiaNow();
    var day = now.getDay();
    var mins = now.getHours() * 60 + now.getMinutes();
    var t = UI[lang];
    var msg, open = false;

    if (day !== 0) {
      for (var i = 0; i < SESSIONS.length; i++) {
        if (mins >= SESSIONS[i][0] && mins < SESSIONS[i][1]) { open = true; msg = t.openNow.replace("{t}", fmt(SESSIONS[i][1])); break; }
      }
      if (!open) {
        for (var j = 0; j < SESSIONS.length; j++) {
          if (mins < SESSIONS[j][0]) { msg = t.opensAt.replace("{t}", fmt(SESSIONS[j][0])); break; }
        }
      }
    }
    if (!msg) {
      var next = (day + 1) % 7;
      if (next === 0) next = 1; // skip Sunday
      msg = t.opensTomorrow.replace("{d}", DAYS[lang][next]);
    }
    el.textContent = msg;
    el.classList.toggle("is-open", open);
    el.classList.toggle("is-closed", !open);

    // Highlight today's row in the hours table.
    document.querySelectorAll(".hours tr").forEach(function (row) {
      var isToday = row.dataset.days === "0" ? day === 0 : day !== 0;
      row.classList.toggle("is-today", isToday);
      row.querySelector("th").setAttribute("data-today", t.today);
    });
  }
  setInterval(updateStatus, 60000);

  /* ---------------- Reviews ---------------- */
  var REV_UI = {
    en: { reviews: "reviews on Google", translated: "Translated", outOf: "out of 5 stars" },
    hi: { reviews: "Google समीक्षाएँ", translated: "अनूदित", outOf: "5 में से स्टार" }
  };

  // Google's relative dates ("2 years ago") in Hindi.
  function localDate(d) {
    if (!d || lang !== "hi") return d;
    return d
      .replace(/^an? (year|month|week|day) ago$/, "1 $1s ago")
      .replace(/^(\d+) years? ago$/, "$1 वर्ष पहले")
      .replace(/^(\d+) months? ago$/, function (m, n) { return n + (n === "1" ? " महीना पहले" : " महीने पहले"); })
      .replace(/^(\d+) weeks? ago$/, "$1 सप्ताह पहले")
      .replace(/^(\d+) days? ago$/, "$1 दिन पहले");
  }

  function starString(n) {
    var full = Math.round(n);
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function applyProfileLinks() {
    var url = window.GOOGLE_PROFILE_URL;
    if (!url) return;
    document.querySelectorAll("[data-google-link]").forEach(function (a) { a.href = url; });
  }

  function renderReviews() {
    var t = REV_UI[lang];

    // Summary badge (overall Google rating).
    var summary = document.getElementById("reviewSummary");
    var s = window.REVIEW_SUMMARY || {};
    if (summary) {
      summary.textContent = "";
      var rating = Number(s.rating);
      if (rating > 0 && rating <= 5) {
        summary.appendChild(el("span", "rating__score", rating.toFixed(1)));
        var stars = el("span", "rating__stars", starString(rating));
        stars.setAttribute("aria-label", rating.toFixed(1) + " " + t.outOf);
        summary.appendChild(stars);
        if (s.count) summary.appendChild(el("span", "rating__count", s.count + " " + t.reviews));
        summary.hidden = false;
      } else {
        summary.hidden = true;
      }
    }

    // Individual reviews.
    var list = document.getElementById("reviewList");
    if (!list) return;
    list.textContent = "";
    var data = (window.REVIEWS || []).filter(function (r) { return r && r.name && r.text; });
    data.forEach(function (r) {
      var stars = Math.max(1, Math.min(5, Math.round(r.rating || 5)));
      var useTranslation = r.translation && r.lang && r.lang !== lang;
      var card = el("article", "review");
      if (!useTranslation && r.lang) card.lang = r.lang;

      var starEl = el("div", "review__stars", starString(stars));
      starEl.setAttribute("aria-label", stars + " " + t.outOf);
      card.appendChild(starEl);

      card.appendChild(el("p", "review__text", "“" + (useTranslation ? r.translation : r.text) + "”"));

      var meta = el("div", "review__meta");
      var av = el("span", "review__avatar", r.name.trim().charAt(0).toUpperCase());
      av.setAttribute("aria-hidden", "true");
      var who = el("span");
      who.appendChild(el("span", "review__name", r.name));
      var extra = ["Google", localDate(r.date), useTranslation ? t.translated : ""]
        .filter(Boolean)
        .map(function (part) { return part.replace(/ /g, "\u00a0"); }) // keep "8 months ago" on one line
        .join(" · ");
      who.appendChild(document.createTextNode(" · " + extra));
      meta.appendChild(av);
      meta.appendChild(who);
      card.appendChild(meta);

      list.appendChild(card);
    });
  }

  /* ---------------- Floating call button (after the hero) ---------------- */
  var fab = document.querySelector(".fab");
  var hero = document.querySelector(".hero");
  function onScroll() {
    if (fab && hero) fab.classList.toggle("is-visible", window.scrollY > hero.offsetTop + hero.offsetHeight - 80);
    // Back at the top: no section is current, so clear the menu highlight.
    if (hero && window.scrollY < hero.offsetTop + hero.offsetHeight / 2) {
      nav.querySelectorAll("a.is-active").forEach(function (a) { a.classList.remove("is-active"); });
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Init ---------------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = String(new Date().getFullYear());
  applyProfileLinks();
  setLang(storageGet("lang") || "en");
})();
