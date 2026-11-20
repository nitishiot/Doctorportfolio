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
    "facts.where.v": "इन्दिरा नंदन निवास, चौधरन कॉलोनी, गुना",

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
    "about.p3": "कोविड-19 महामारी के दौरान उन्होंने हार्वर्ड मेडिकल स्कूल से मैकेनिकल वेंटिलेशन तथा जॉन्स हॉपकिन्स यूनिवर्सिटी से कॉन्टैक्ट ट्रेसिंग का अतिरिक्त प्रशिक्षण लिया, और उन्हें कोरोना योद्धा के रूप में सम्मानित किया गया।",
    "about.more": "शिक्षा व अनुभव देखें →",

    "services.eyebrow": "हम किनका इलाज करते हैं",
    "services.title": "रोग एवं चिकित्सा सुविधाएँ",
    "services.lead": "जनरल मेडिसिन के सभी प्रमुख रोगों की जाँच, इलाज और नियमित फॉलो-अप।",
    "svc.heart.t": "हृदय रोग",
    "svc.heart.d": "दिल का दौरा — इलाज व बचाव, CHF (हृदय की कमज़ोरी), हाई ब्लड प्रेशर।",
    "svc.diabetes.t": "डायबिटीज़, बी.पी. व थायरॉइड",
    "svc.diabetes.d": "टाइप-2 डायबिटीज़, हाई बी.पी. एवं थायरॉइड रोगों का इलाज व नियमित निगरानी।",
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
    "award.corona.t": "कोरोना योद्धा कर्मवीर सम्मान",
    "award.corona.d": "हैहय क्षत्रिय कलचुरी समाज, गुना — कोविड-19 के दौरान सेवा हेतु",
    "award.rotary.t": "डॉक्टर्स डे सम्मान",
    "award.rotary.d": "रोटरी क्लब गुना — “हार्दिक आभार एवं कृतज्ञता सहित”",
    "award.memories.t": "“स्वीट मेमोरीज़” स्मृति-चिह्न",
    "award.memories.d": "स्मृति सम्मान, रोटरी क्लब गुना",

    "rev.eyebrow": "मरीज़ों की राय",
    "rev.title": "मरीज़ क्या कहते हैं",
    "rev.lead": "Google पर मरीज़ों की समीक्षाएँ पढ़ें, या अपना अनुभव साझा करें।",
    "rev.google": "Google पर समीक्षाएँ पढ़ें",
    "rev.write": "समीक्षा लिखें",

    "visit.eyebrow": "क्लिनिक आएँ",
    "visit.title": "मिलने का समय व पता",
    "visit.days": "सोमवार – शनिवार",
    "visit.noon": "दोपहर: 2:00 – 5:00 बजे",
    "visit.eve": "शाम: 6:00 – 8:00 बजे",
    "visit.sun": "रविवार",
    "visit.closed": "अवकाश",
    "visit.note": "असुविधा से बचने के लिए पूर्व रजिस्ट्रेशन कराएँ। नंबर लगाने हेतु <a href=\"tel:+918109770140\">81097 70140</a> पर कॉल करें।",
    "visit.addrTitle": "इन्दिरा नंदन निवास",
    "visit.addr": "आशीर्वाद हॉस्पिटल रोड, डॉ. कांति शर्मा के पास, चौधरन कॉलोनी, गुना, मध्य प्रदेश",
    "visit.directions": "रास्ता देखें",

    "gal.eyebrow": "गैलरी",
    "gal.title": "क्लिनिक की झलक",

    "footer.creds": "एम.बी.बी.एस., एम.डी. (मेडिसिन) — गोल्ड मेडलिस्ट · पंजीयन क्र. MP17085",
    "footer.prev": "पूर्व चिकित्सक — एम्स भोपाल एवं ग्रेटर कैलाश हॉस्पिटल, इन्दौर",
    "footer.contact": "संपर्क",
    "footer.addr": "इन्दिरा नंदन निवास, चौधरन कॉलोनी, गुना (म.प्र.)",
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
  function renderReviews() {
    var list = document.getElementById("reviewList");
    var data = (window.REVIEWS || []).filter(function (r) { return r && r.name && r.text; });
    if (!list || !data.length) return;
    data.forEach(function (r) {
      var rating = Math.max(1, Math.min(5, Math.round(r.rating || 5)));
      var card = document.createElement("article");
      card.className = "review";

      var stars = document.createElement("div");
      stars.className = "review__stars";
      stars.setAttribute("aria-label", rating + " out of 5 stars");
      stars.textContent = "★★★★★".slice(0, rating) + "☆☆☆☆☆".slice(0, 5 - rating);

      var text = document.createElement("p");
      text.className = "review__text";
      text.textContent = "“" + r.text + "”";

      var meta = document.createElement("div");
      meta.className = "review__meta";
      var av = document.createElement("span");
      av.className = "review__avatar";
      av.setAttribute("aria-hidden", "true");
      av.textContent = r.name.trim().charAt(0).toUpperCase();
      var who = document.createElement("span");
      var name = document.createElement("span");
      name.className = "review__name";
      name.textContent = r.name;
      who.appendChild(name);
      var extra = [r.source, r.date].filter(Boolean).join(" · ");
      if (extra) who.appendChild(document.createTextNode(" · " + extra));
      meta.appendChild(av);
      meta.appendChild(who);

      card.appendChild(stars);
      card.appendChild(text);
      card.appendChild(meta);
      list.appendChild(card);
    });
  }

  /* ---------------- Floating call button (after the hero) ---------------- */
  var fab = document.querySelector(".fab");
  var hero = document.querySelector(".hero");
  function onScroll() {
    if (fab && hero) fab.classList.toggle("is-visible", window.scrollY > hero.offsetTop + hero.offsetHeight - 80);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Init ---------------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = String(new Date().getFullYear());
  renderReviews();
  setLang(storageGet("lang") || "en");
})();
