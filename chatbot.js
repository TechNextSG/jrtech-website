/* JR-Tech AI Chatbot Widget — self-contained, no dependencies */
(function(){
  'use strict';
  if (document.getElementById('jrt-cb-wrap')) return;

  /* ─────────────────────── CSS INJECTION ─────────────────────────────── */
  var css = document.createElement('style');
  css.textContent = [
    '#jrt-cb-btn{position:fixed;bottom:88px;right:20px;width:52px;height:52px;border-radius:50%;border:none;cursor:pointer;z-index:9990;',
    'background:linear-gradient(135deg,#5A7A90,#3D5060);box-shadow:0 4px 18px rgba(61,80,96,.35);',
    'display:flex;align-items:center;justify-content:center;transition:transform .22s,box-shadow .22s;}',
    '#jrt-cb-btn:hover{transform:scale(1.08);box-shadow:0 6px 24px rgba(61,80,96,.45);}',
    '#jrt-cb-btn svg{transition:transform .22s;}',
    '#jrt-cb-btn.open svg.chat-icon{display:none;}',
    '#jrt-cb-btn.open svg.close-icon{display:block!important;}',
    '#jrt-cb-dot{position:absolute;top:0;right:0;width:13px;height:13px;background:#4CD96B;border:2px solid #fff;border-radius:50%;animation:dotPulse 2.4s infinite;}',
    '@keyframes dotPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}',

    '#jrt-cb-panel{position:fixed;bottom:150px;right:20px;width:340px;max-width:calc(100vw - 32px);',
    'background:#0D1117;border:1px solid rgba(155,189,207,.14);border-radius:16px;',
    'box-shadow:0 16px 48px rgba(0,0,0,.55);z-index:9989;',
    'display:flex;flex-direction:column;overflow:hidden;',
    'transform:translateY(24px) scale(0.95);opacity:0;pointer-events:none;',
    'transition:transform .28s cubic-bezier(.34,1.56,.64,1),opacity .22s ease;}',
    '#jrt-cb-panel.open{transform:translateY(0) scale(1);opacity:1;pointer-events:all;}',

    '#jrt-cb-head{background:linear-gradient(135deg,#132030,#0D1117);padding:14px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(155,189,207,.1);}',
    '#jrt-cb-head .cb-av{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#5A7A90,#3D5060);display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '#jrt-cb-head .cb-name{font-size:.82rem;font-weight:700;color:#fff;line-height:1.2;}',
    '#jrt-cb-head .cb-status{font-size:.67rem;color:#4CD96B;display:flex;align-items:center;gap:4px;}',
    '#jrt-cb-head .cb-status::before{content:"";width:6px;height:6px;background:#4CD96B;border-radius:50%;display:inline-block;}',

    '#jrt-cb-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;height:320px;scroll-behavior:smooth;}',
    '#jrt-cb-msgs::-webkit-scrollbar{width:4px}',
    '#jrt-cb-msgs::-webkit-scrollbar-track{background:transparent}',
    '#jrt-cb-msgs::-webkit-scrollbar-thumb{background:rgba(155,189,207,.2);border-radius:4px}',

    '.cb-msg{display:flex;flex-direction:column;gap:4px;max-width:88%;}',
    '.cb-msg.bot{align-self:flex-start;}',
    '.cb-msg.user{align-self:flex-end;}',
    '.cb-bubble{padding:10px 13px;border-radius:14px;font-size:.8rem;line-height:1.6;}',
    '.cb-msg.bot .cb-bubble{background:rgba(155,189,207,.1);border:1px solid rgba(155,189,207,.12);color:#d0dce8;border-radius:4px 14px 14px 14px;}',
    '.cb-msg.user .cb-bubble{background:linear-gradient(135deg,#5A7A90,#3D5060);color:#fff;border-radius:14px 4px 14px 14px;}',
    '.cb-bubble a{color:#9BBDCF;text-decoration:underline;}',
    '.cb-bubble a:hover{color:#c0d8e8;}',
    '.cb-bubble strong{color:#c8dae6;font-weight:700;}',

    '.cb-typing{display:flex;align-items:center;gap:5px;padding:10px 13px;background:rgba(155,189,207,.08);border:1px solid rgba(155,189,207,.1);border-radius:4px 14px 14px 14px;}',
    '.cb-typing span{width:6px;height:6px;background:#7A8FA0;border-radius:50%;animation:cbBounce .9s infinite both;}',
    '.cb-typing span:nth-child(2){animation-delay:.18s}',
    '.cb-typing span:nth-child(3){animation-delay:.36s}',
    '@keyframes cbBounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}',

    '#jrt-cb-sugg{padding:8px 12px;display:flex;flex-wrap:wrap;gap:6px;border-top:1px solid rgba(155,189,207,.08);background:rgba(8,14,24,.5);}',
    '.cb-chip{cursor:pointer;font-size:.72rem;padding:5px 11px;border-radius:20px;',
    'border:1px solid rgba(155,189,207,.22);color:#9BBDCF;background:rgba(155,189,207,.06);',
    'transition:background .2s,border-color .2s,color .2s;white-space:nowrap;}',
    '.cb-chip:hover{background:rgba(155,189,207,.16);border-color:#9BBDCF;color:#d0e4ef;}',

    '#jrt-cb-form{display:flex;gap:0;border-top:1px solid rgba(155,189,207,.1);}',
    '#jrt-cb-input{flex:1;background:rgba(155,189,207,.05);border:none;border-right:1px solid rgba(155,189,207,.1);',
    'color:#d0dce8;font-size:.8rem;padding:11px 14px;outline:none;font-family:inherit;}',
    '#jrt-cb-input::placeholder{color:#4a5e70}',
    '#jrt-cb-send{background:linear-gradient(135deg,#5A7A90,#3D5060);border:none;color:#fff;padding:0 16px;cursor:pointer;transition:opacity .2s;}',
    '#jrt-cb-send:hover{opacity:.85}',
    '#jrt-cb-send svg{display:block;}'
  ].join('');
  document.head.appendChild(css);

  /* ─────────────────────── KNOWLEDGE BASE ────────────────────────────── */
  var INTENTS = [
    { id:'products',
      pat: /product|what.*(sell|offer|carry|have)|equipment|brands?|catalog/i,
      resp: 'We carry <strong>4 commercial kitchen brands</strong>:\n\n<strong>MegCook</strong> — Automatic cooking machines & robot chefs\n<strong>J-Nox</strong> — Commercial induction cookers & wok burners\n<strong>JR-Chem</strong> — Dishwashers & warewashing systems\n<strong>Tamago</strong> — Food serving & holding equipment\n\n<a href="products.html">Browse all products →</a>',
      fu: ['Tell me about MegCook', 'What is J-Nox induction?', 'What dishwashers do you have?', 'Tell me about Tamago'] },

    { id:'megcook',
      pat: /megcook|robot chef|auto.*cook|cooking machine|automatic cook/i,
      resp: '<strong>MegCook</strong> makes fully automatic cooking machines — load the ingredients, select a programme, and it cooks without a chef.\n\n• 800+ pre-loaded recipes\n• 35L–44L pot capacities\n• AI temperature & stirring control\n• CE & HACCP certified\n\nPerfect for hotel kitchens, hospital cafeterias and factory canteens.\n\n<a href="products.html">View MegCook products →</a>',
      fu: ['How much labour does it save?', 'What recipes can it cook?', 'Is it HACCP compliant?', 'Can I rent a MegCook?'] },

    { id:'jnox',
      pat: /j.nox|induction|wok.*(cooker|burner|cook)|burner|freestanding.*cook|tabletop.*cook/i,
      resp: '<strong>J-Nox</strong> is our commercial induction cooker brand — a direct replacement for gas wok burners, with 38% energy savings and zero open flame.\n\nOptions include:\n• 4 & 6-burner freestanding units\n• Tabletop automatic cooking machines\n• Single & double wok induction cookers\n• Intelligent stir fryers\n\n<a href="products.html">View J-Nox products →</a>',
      fu: ['How does induction compare to gas?', 'What power does it require?', 'Do you do installation?', 'Is there a demo I can see?'] },

    { id:'jrchem',
      pat: /jr.?chem|dishwash|warewash|flight.type|door.type|utensil wash|vt-|vtf/i,
      resp: '<strong>JR-Chem</strong> specialises in commercial warewashing systems, all powered by Italian pump technology:\n\n• <strong>VT-1</strong> — Door type with work station (840+ plates/hr)\n• <strong>VT-3</strong> — Compact commercial dishwasher\n• <strong>VTF11DM</strong> — Mini flight conveyor\n• <strong>VTF21DM</strong> — Full flight (1,200+ items/hr)\n• Utensil Washer — industrial pots & trays\n\nAll include HACCP auto-chemical dosing.\n\n<a href="products.html">View JR-Chem products →</a>',
      fu: ['What is the throughput difference?', 'Do you supply the chemicals too?', 'Can I rent a dishwasher?', 'What is HACCP dosing?'] },

    { id:'tamago',
      pat: /tamago|food serv|holding|buffet.*equipment|chiller|counter|tc-100|tc-50/i,
      resp: '<strong>Tamago</strong> provides food serving and holding equipment for buffet lines, patient meal service and front-of-house stations:\n\n• <strong>TC-100</strong> — 4-door upright serving station (hot & cold zones)\n• <strong>TC-50</strong> — Drawer counter chiller (2–8°C precision holding)\n\n<a href="products.html">View Tamago products →</a>',
      fu: ['Is it suitable for hotel buffets?', 'What are the temperature ranges?', 'Can I get a free demo?', 'Do you do installation?'] },

    { id:'services',
      pat: /service|what do you do|what.*offer|how do you help|kitchen design|install|maintain|supply/i,
      resp: 'We offer a <strong>full-service kitchen solution</strong> — we do everything so you don\'t need multiple vendors:\n\n🏗️ <strong>Kitchen Design & Build</strong> — complete commercial kitchen fitout\n🔧 <strong>Equipment Supply & Installation</strong>\n🧪 <strong>Chemicals & Cleaning Supplies</strong>\n⚙️ <strong>Maintenance Service</strong> — 18 in-house technicians, 7 days a week\n🕳️ <strong>Grease Trap Service</strong>\n\n<a href="services.html">Learn more about our services →</a>',
      fu: ['Do you handle kitchen design?', 'How fast is your maintenance response?', 'Do you supply chemicals?', 'Tell me about grease trap service'] },

    { id:'design',
      pat: /kitchen design|design.*build|fitout|layout|full.*kitchen|new kitchen/i,
      resp: 'Our <strong>Kitchen Design & Build</strong> service covers the entire project:\n\n1. Needs assessment & space planning\n2. Professional CAD kitchen layout\n3. Equipment specification\n4. Fabrication of stainless steel benches, shelves & hoods\n5. Full installation & commissioning\n6. HACCP compliance review\n\nWe\'ve completed 128+ kitchen projects for hotels, hospitals and corporations.\n\n<a href="contact.html">Request a free consultation →</a>',
      fu: ['How long does a kitchen fitout take?', 'Can you work with existing equipment?', 'Is your kitchen design HACCP compliant?', 'What clients have you worked with?'] },

    { id:'maintenance',
      pat: /maintain|maintenance|service.*plan|breakdown|repair|technician|support.*plan/i,
      resp: 'Our <strong>Maintenance Service</strong> keeps your kitchen running 7 days a week:\n\n• 18 in-house technicians (not outsourced)\n• Preventive maintenance scheduling\n• Same-day emergency response\n• 100% spare parts in stock — no wait time\n• All technicians JR-Tech trained\n\nWe maintain equipment from all our brands and many third-party brands too.\n\n<a href="services.html#maintenance">Learn more →</a>',
      fu: ['How quickly do you respond to breakdowns?', 'Do you have a service contract?', 'What brands do you service?', 'Are spare parts readily available?'] },

    { id:'chemicals',
      pat: /chemical|detergent|sanitiser|cleaning supply|clean.*product|grease.*trap/i,
      resp: 'JR-Tech supplies a complete range of <strong>commercial kitchen chemicals</strong>:\n\n🧽 Dishwasher detergents & rinse aids\n🧴 Food-safe surface sanitisers\n🪣 Degreasing & cleaning compounds\n🕳️ Grease trap treatment chemicals\n\nAll chemicals are HACCP-compliant and sourced from certified suppliers. We also offer <strong>scheduled grease trap servicing</strong> to keep you compliant.\n\n<a href="services.html#chemicals">View cleaning services →</a>',
      fu: ['Do you supply on a regular schedule?', 'Are your chemicals HACCP approved?', 'What is grease trap service?', 'Can you service our grease trap monthly?'] },

    { id:'quote',
      pat: /quote|price|cost|how much|pricing|rental fee|purchase|buy|rent/i,
      resp: 'We operate on a <strong>quote-only basis</strong> — no prices on the website because each solution is customised to your kitchen size, menu volume and operational needs.\n\nTo get a quote:\n1. Fill in our quote form (takes 2 minutes)\n2. Our team contacts you within 1 business day\n3. We do a free site visit if needed\n4. You receive a detailed, transparent quotation\n\n<strong>No hidden costs. No pressure.</strong>\n\n<a href="quote.html">Request your quote →</a>',
      fu: ['Is rental or purchase better for me?', 'What information do you need for a quote?', 'How quickly can equipment be installed?', 'Can I get a demo before committing?'] },

    { id:'rental',
      pat: /rental|rent|lease|hire|monthly payment/i,
      resp: 'Yes, we offer <strong>equipment rental</strong> — an excellent option if you want to:\n\n• Preserve capital for other business needs\n• Upgrade equipment without large upfront cost\n• Test the equipment in your operations first\n• Include maintenance in a single monthly fee\n\nRental is available for most JR-Chem dishwashers and JR-Tech cooking systems. Terms are flexible.\n\n<a href="quote.html">Ask about rental options →</a>',
      fu: ['Does rental include maintenance?', 'What is the minimum rental period?', 'Can I buy it out after renting?', 'How do I sign up for rental?'] },

    { id:'haccp',
      pat: /haccp|food safe|hygiene|comply|certification|standard|audit/i,
      resp: '<strong>HACCP compliance</strong> is built into everything we supply:\n\n• All equipment uses SUS304 stainless steel (food-grade)\n• Auto-dose chemical systems on dishwashers (correct detergent & rinse aid every cycle)\n• Heat-sanitise rinse at 85°C kills 99.9% of pathogens\n• No cross-contamination surfaces — sealed designs\n• We advise on kitchen layout to support HACCP flow\n\nThis is why clients like Gleneagles Hospital and B.Braun choose JR-Tech.\n\n<a href="contact.html">Talk to our HACCP advisor →</a>',
      fu: ['What temperature is required for HACCP dishwashing?', 'Do you provide HACCP documentation?', 'How does induction help with HACCP?', 'What hospitals use your equipment?'] },

    { id:'induction_vs_gas',
      pat: /induction.*gas|gas.*induction|switch.*gas|why induction|benefit.*induction|energy sav/i,
      resp: 'Here\'s why more commercial kitchens are switching from gas to <strong>J-Nox induction</strong>:\n\n| Feature | Gas | Induction |\n|---|---|---|\n| Energy use | 100% | ~62% |\n| Open flame risk | Yes | None |\n| Kitchen heat | High | Lower |\n| HACCP surface | Harder | Flat, easy-clean |\n| Responsiveness | Fast | Equally fast |\n\nMost clients see ROI on energy savings within 18–24 months.\n\n<a href="products.html">View J-Nox induction products →</a>',
      fu: ['What power supply does induction require?', 'Can it match gas wok heat intensity?', 'How long does installation take?', 'Is induction suitable for all cooking styles?'] },

    { id:'location',
      pat: /where.*you|location|address|penang|gelugor|visit|office|showroom/i,
      resp: 'Our main office and showroom is in <strong>Penang, Malaysia</strong>:\n\n📍 556-Y, Mukim 13, Batu Uban\nJalan Sultan Azlan Shah\n11700 Gelugor, Penang\n\n🕐 Mon–Fri: 8:30 AM – 5:45 PM\n📞 +604-657 2916\n📞 +604-657 5916\n\nWe also serve clients across Malaysia — our team travels for site visits and installations.\n\n<a href="contact.html">Get directions →</a>',
      fu: ['Can your team visit my site?', 'Do you serve all of Malaysia?', 'What are your office hours?', 'How do I arrange a visit?'] },

    { id:'contact',
      pat: /contact|phone|call|email|reach|speak|talk.*team|hotline/i,
      resp: 'Reach us through any of these channels:\n\n📞 <strong>+604-657 2916</strong>\n📞 <strong>+604-657 5916</strong>\n📧 <a href="mailto:info@jrtech.com.my">info@jrtech.com.my</a>\n💬 <a href="https://wa.me/6046572916" target="_blank">WhatsApp us</a>\n\nOffice hours: Mon–Fri, 8:30 AM – 5:45 PM\n\nFor after-hours emergencies, please WhatsApp us and our team will respond.\n\n<a href="contact.html">Contact page →</a>',
      fu: ['Can I WhatsApp for quick questions?', 'What are your office hours?', 'How do I request a site visit?', 'Can I speak to a technical advisor?'] },

    { id:'demo',
      pat: /demo|trial|see.*work|live demo|test.*equip|try.*machine|demonstration/i,
      resp: 'Yes! We offer <strong>free demo consultations</strong>:\n\n1. We visit your site and assess your kitchen\n2. We recommend the right equipment for your menu & volume\n3. Arrange a live demo at our showroom or at a reference site\n4. No commitment required\n\nSeeing a MegCook or J-Nox in action makes the decision easy — clients are always impressed by the output consistency.\n\n<a href="contact.html">Book a free demo →</a>',
      fu: ['Where is your showroom?', 'Can you show me a MegCook demo?', 'How long is a demo session?', 'Do you have reference kitchen sites I can visit?'] },

    { id:'clients',
      pat: /client|customer|who.*use|reference|hospital|hotel|corporate|factory|intel|infineon|gleneagle/i,
      resp: 'Our clients include some of Malaysia\'s most demanding operations:\n\n🏭 <strong>Semiconductor:</strong> Intel, Infineon, First Solar, Micron, B.Braun, Osram\n🏥 <strong>Healthcare:</strong> Gleneagles Hospital, Adventist Hospital\n🍵 <strong>F&B Chains:</strong> Tealive, Bask Bear Coffee, Sushi Tei, James Foo\n🏢 <strong>Property:</strong> CapitaLand\n\n128 projects completed across 16+ years.\n\n<a href="about.html">Learn about JR-Tech →</a>',
      fu: ['What hospitals use your equipment?', 'Do you serve F&B chains nationwide?', 'Can I visit a reference site?', 'How many years have you been operating?'] },

    { id:'warranty',
      pat: /warrant|guarantee|after.*sale|spare part|breakdown cover/i,
      resp: 'All JR-Tech products include a <strong>1-year warranty</strong> from installation:\n\n• Parts covered: manufacturer defects & material failures\n• Labour covered: for warranty repairs during business hours\n• Spare parts: 100% in-stock — no ordering delays\n• After warranty: we offer service contracts for ongoing cover\n\nOur 18 in-house technicians (not third-party contractors) handle all warranty and post-warranty work.\n\n<a href="services.html#maintenance">Learn about maintenance →</a>',
      fu: ['Do you offer extended warranty?', 'How fast are warranty repairs?', 'What is a service contract?', 'Can I service my own equipment?'] },

    { id:'about',
      pat: /about.*jr.?tech|who are you|company|established|founded|history|how long|years/i,
      resp: '<strong>JR-Tech Solution Sdn Bhd</strong> was founded in Penang in 2009 — that\'s 16+ years as Malaysia\'s trusted commercial kitchen engineering partner.\n\n• 128 projects completed\n• 18 in-house technicians\n• 4 proprietary equipment brands\n• Enterprise clients: Intel, Infineon, Gleneagles Hospital\n• Full-service: design → supply → install → maintain\n\nWe are a one-stop shop — no need to coordinate multiple vendors.\n\n<a href="about.html">Our story →</a>',
      fu: ['What makes JR-Tech different?', 'How many technicians do you have?', 'What brands do you own?', 'Can I visit your office?'] }
  ];

  var FALLBACK_RESP = 'I\'m not 100% sure about that, but I\'d love to help! You can:\n\n• <a href="quote.html">Request a quote</a>\n• <a href="contact.html">Contact our team</a>\n• <a href="https://wa.me/6046572916" target="_blank">WhatsApp us directly</a>\n\nOur team responds within 1 business day and is happy to answer any question about our kitchen equipment and services.';
  var FALLBACK_FU = ['What products do you sell?', 'How do I get a quote?', 'Where are you located?', 'What services do you offer?'];

  var INIT_SUGGS = ['What products do you sell?', 'Tell me about your services', 'How do I get a quote?', 'Are you HACCP compliant?'];
  var GREETING = 'Hi there! 👋 I\'m the JR-Tech assistant. I can help you find the right commercial kitchen equipment, learn about our services, or connect you with our team.\n\nWhat\'s on your mind?';

  /* ─────────────────────── DOM BUILD ─────────────────────────────────── */
  var html = [
    '<div id="jrt-cb-wrap">',
      '<div id="jrt-cb-panel" role="dialog" aria-label="JR-Tech Chat Assistant">',
        '<div id="jrt-cb-head">',
          '<div class="cb-av">',
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9BBDCF" stroke-width="2">',
              '<rect x="3" y="11" width="18" height="11" rx="2"/>',
              '<path d="M7 11V7a5 5 0 0110 0v4"/>',
              '<circle cx="12" cy="16" r="1" fill="#9BBDCF"/>',
            '</svg>',
          '</div>',
          '<div>',
            '<div class="cb-name">JR-Tech Assistant</div>',
            '<div class="cb-status">Online now</div>',
          '</div>',
        '</div>',
        '<div id="jrt-cb-msgs"></div>',
        '<div id="jrt-cb-sugg"></div>',
        '<form id="jrt-cb-form" autocomplete="off">',
          '<input id="jrt-cb-input" type="text" placeholder="Type a message…" maxlength="200">',
          '<button type="submit" id="jrt-cb-send" aria-label="Send">',
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">',
              '<line x1="22" y1="2" x2="11" y2="13"/>',
              '<polygon points="22 2 15 22 11 13 2 9 22 2"/>',
            '</svg>',
          '</button>',
        '</form>',
      '</div>',

      '<button id="jrt-cb-btn" aria-label="Chat with us">',
        '<div id="jrt-cb-dot"></div>',
        '<svg class="chat-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">',
          '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
        '</svg>',
        '<svg class="close-icon" style="display:none" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">',
          '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
        '</svg>',
      '</button>',
    '</div>'
  ].join('');

  var wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper.firstElementChild);

  /* ─────────────────────── STATE ─────────────────────────────────────── */
  var panel    = document.getElementById('jrt-cb-panel');
  var btn      = document.getElementById('jrt-cb-btn');
  var msgs     = document.getElementById('jrt-cb-msgs');
  var suggBox  = document.getElementById('jrt-cb-sugg');
  var form     = document.getElementById('jrt-cb-form');
  var input    = document.getElementById('jrt-cb-input');
  var isOpen   = false;
  var greeted  = false;
  var seenSugg = {};   /* {text: true} — no-repeat tracker */

  /* ─────────────────────── HELPERS ───────────────────────────────────── */
  function scrollBottom(){ msgs.scrollTop = msgs.scrollHeight; }

  function nl2br(s){ return s.replace(/\n/g,'<br>'); }

  function addBubble(text, role){
    var d = document.createElement('div');
    d.className = 'cb-msg ' + role;
    d.innerHTML = '<div class="cb-bubble">' + nl2br(text) + '</div>';
    msgs.appendChild(d);
    scrollBottom();
    return d;
  }

  function showTyping(){
    var d = document.createElement('div');
    d.className = 'cb-msg bot';
    d.id = 'cb-typing-ind';
    d.innerHTML = '<div class="cb-typing"><span></span><span></span><span></span></div>';
    msgs.appendChild(d);
    scrollBottom();
  }

  function hideTyping(){
    var t = document.getElementById('cb-typing-ind');
    if(t) t.remove();
  }

  function showSuggestions(arr){
    suggBox.innerHTML = '';
    /* Filter to unseen, take up to 3 */
    var fresh = (arr||[]).filter(function(s){ return !seenSugg[s]; }).slice(0,3);
    if (!fresh.length) return;
    fresh.forEach(function(s){
      seenSugg[s] = true;
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'cb-chip';
      chip.textContent = s;
      chip.addEventListener('click', function(){ send(s); });
      suggBox.appendChild(chip);
    });
  }

  /* ─────────────────────── INTENT MATCHING ───────────────────────────── */
  function match(text){
    var t = text.trim().toLowerCase();
    for(var i=0; i<INTENTS.length; i++){
      if(INTENTS[i].pat.test(t)) return INTENTS[i];
    }
    return null;
  }

  /* ─────────────────────── SEND ──────────────────────────────────────── */
  function send(text){
    text = text.trim();
    if(!text) return;
    input.value = '';
    suggBox.innerHTML = '';
    addBubble(text, 'user');
    showTyping();

    var intent = match(text);
    var delay  = 750 + Math.random()*500;
    setTimeout(function(){
      hideTyping();
      if(intent){
        addBubble(intent.resp, 'bot');
        showSuggestions(intent.fu);
      } else {
        addBubble(FALLBACK_RESP, 'bot');
        showSuggestions(FALLBACK_FU);
      }
    }, delay);
  }

  /* ─────────────────────── OPEN / CLOSE ──────────────────────────────── */
  function toggleChat(){
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    btn.classList.toggle('open', isOpen);

    if(isOpen && !greeted){
      greeted = true;
      setTimeout(function(){
        addBubble(GREETING, 'bot');
        showSuggestions(INIT_SUGGS);
      }, 180);
    }
    if(isOpen) setTimeout(function(){ input.focus(); }, 300);
  }

  /* ─────────────────────── EVENTS ────────────────────────────────────── */
  btn.addEventListener('click', toggleChat);

  form.addEventListener('submit', function(e){
    e.preventDefault();
    send(input.value);
  });

  /* Close panel when clicking outside */
  document.addEventListener('click', function(e){
    if(isOpen && !document.getElementById('jrt-cb-wrap').contains(e.target)){
      toggleChat();
    }
  });
})();
