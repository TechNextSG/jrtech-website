/* JR-Tech Product Database — used by product.html and chatbot.js */
var JRT_PRODUCTS = [

  /* ─────────── MegCook ─────────── */
  { id:'C35PB01', brand:'MegCook', slug:'megcook', name:'C35PB01',
    cat:'Automatic Cooking Machine', tag:'Compact',
    img:'img/c35pb01-c04_1_-300x300.jpg',
    desc:'The MegCook C35PB01 is a compact tabletop automatic cooking machine engineered for high-volume commercial kitchens that need consistent results with minimal labour. Its AI-powered control system manages temperature, stirring speed and timing automatically — simply load the ingredients, select a programme, and serve.',
    features:['800+ pre-loaded cooking programmes','AI temperature & stirring control','Compact tabletop — saves counter space','Free Cooking Buddy System included','Auto-seasoning & sauce dispensing','HACCP-compliant SUS304 construction','Single-operator workflow'],
    specs:{'Model':'C35PB01','Type':'Tabletop Automatic','Pot Capacity':'35 L','Power Supply':'380 V / 3-phase','Heating Power':'8 kW','Material':'SUS304 Stainless Steel','Certification':'CE / HACCP'},
    uses:['Hotel kitchens','Hospital cafeterias','Factory canteens','Chain restaurants'] },

  { id:'C44PB01', brand:'MegCook', slug:'megcook', name:'C44PB01',
    cat:'Automatic Cooking Machine', tag:'High Capacity',
    img:'img/C44PA01-C01-300x300.jpeg',
    desc:'The MegCook C44PB01 delivers a larger 44-litre cooking capacity for operations serving 200+ covers per service. The intelligent programme library covers Malaysian, Chinese and Western cuisines, reducing recipe complexity and cook training time significantly.',
    features:['44 L high-capacity pot','800+ cooking recipes pre-loaded','Automated stirring & temperature management','Reduces kitchen labour by up to 60%','Hygienic sealed cooking system','Compatible with Cooking Buddy add-on','Easy-clean removable pot'],
    specs:{'Model':'C44PB01','Type':'Tabletop Automatic','Pot Capacity':'44 L','Power Supply':'380 V / 3-phase','Heating Power':'10 kW','Material':'SUS304 Stainless Steel','Certification':'CE / HACCP'},
    uses:['Corporate cafeterias','Hospital kitchens','School canteens','High-volume restaurants'] },

  { id:'3520W-CE', brand:'MegCook', slug:'megcook', name:'Cooking Machine 3520W-CE',
    cat:'Robot Chef', tag:'CE Certified',
    img:'img/3520W-CE-300x300.jpg',
    desc:'The MegCook 3520W-CE is a CE-certified fully automated robot chef designed to replicate expert-level cooking with zero manual intervention. Equipped with a precision wok-tossing mechanism and multi-sensor feedback loop, it produces restaurant-quality stir-fry and braised dishes at scale.',
    features:['CE-certified for European and international markets','Robotic wok-toss mechanism','Multi-sensor heat feedback','800+ embedded recipes','Touch-screen programme selection','Automated ingredient feeding tray','Remote monitoring capability'],
    specs:{'Model':'3520W-CE','Type':'Robot Chef Freestanding','Pot Capacity':'35 L','Power Supply':'380 V / 3-phase','Heating Power':'20 kW','Certification':'CE','Dimensions':'Approx. 800 × 750 × 1400 mm'},
    uses:['Cloud kitchens','Hotel central production','Airline catering','Stadium F&B'] },

  { id:'3520W', brand:'MegCook', slug:'megcook', name:'Cooking Machine 3520W',
    cat:'Robot Chef', tag:'Flagship',
    img:'img/3520W-1-300x300.jpg',
    desc:'The MegCook 3520W is the flagship robot chef unit — a fully autonomous cooking system that handles stir-frying, braising, steaming and sauce reduction without any skilled-chef intervention. Its industrial-grade wok mechanism and precision heating deliver consistent flavour every batch.',
    features:['Fully autonomous cooking cycle','Precision 20 kW induction heating','Auto wok-toss & ingredient loading','800+ Asian and international recipes','Touchscreen HMI with custom recipe input','Stainless steel hygienic enclosure','24/7 operational capability'],
    specs:{'Model':'3520W','Type':'Robot Chef Freestanding','Pot Capacity':'35 L','Power Supply':'380 V / 3-phase','Heating Power':'20 kW','Dimensions':'Approx. 800 × 750 × 1400 mm','Warranty':'1 Year'},
    uses:['Hotel central kitchens','Large canteens','Food production facilities','Restaurant groups'] },

  /* ─────────── J-Nox ─────────── */
  { id:'LT-B300IV-B105', brand:'J-Nox', slug:'jnox', name:'LT-B300IV-B105',
    cat:'Freestanding 4-Burner Induction', tag:'Popular',
    img:'img/7-Freestanding-Induction-Four-Burners-300x300.jpg',
    desc:'The J-Nox LT-B300IV-B105 is a four-burner freestanding induction cooker built for commercial kitchens that demand speed, safety and energy efficiency. With no open flame, it delivers a 38% reduction in energy consumption versus gas while maintaining precise wok-heat control.',
    features:['4 independent induction burners','38% energy saving vs. gas','No open flame — fire-risk free','Precise power adjustment per zone','Green Kitchen certified','HACCP-compliant stainless steel body','Individual zone on/off control'],
    specs:{'Model':'LT-B300IV-B105','Burners':'4','Power per Zone':'5 kW','Total Power':'20 kW','Power Supply':'380 V / 3-phase','Material':'SUS304','Certification':'CE / Green Kitchen'},
    uses:['Hotel kitchens','Hospital F&B','Factory canteens','Restaurants'] },

  { id:'LT-B300IV-B135', brand:'J-Nox', slug:'jnox', name:'LT-B300IV-B135',
    cat:'Freestanding 4-Burner Induction', tag:'Heavy Duty',
    img:'img/7-Freestanding-Induction-Four-Burners-300x300.jpg',
    desc:'The LT-B300IV-B135 is the high-power variant of the 4-burner J-Nox range, delivering 13.5 kW per zone for maximum wok heat in the most demanding service environments. Ideal for high-throughput kitchens where cooking speed directly impacts cover turnover.',
    features:['13.5 kW per induction zone','4 independent high-power burners','Rapid heat-up for wok cooking','Energy efficient vs. gas','Individual temperature control','CE-certified construction','Easy-clean ceramic glass top'],
    specs:{'Model':'LT-B300IV-B135','Burners':'4','Power per Zone':'13.5 kW','Total Power':'54 kW','Power Supply':'380 V / 3-phase','Material':'SUS304','Certification':'CE'},
    uses:['High-volume restaurants','Stadium kitchens','Central production kitchens'] },

  { id:'LT-B300VI-B105', brand:'J-Nox', slug:'jnox', name:'LT-B300VI-B105',
    cat:'Freestanding 6-Burner Induction', tag:'6-Zone',
    img:'img/8-Freestanding-Induction-Six-Burners-300x300.jpg',
    desc:'Six independent induction zones on a single freestanding unit — the LT-B300VI-B105 maximises cooking capacity without increasing floor space. At 5 kW per zone, it is optimised for multi-dish simultaneous cooking in large-scale commercial environments.',
    features:['6 independent induction burners','5 kW per zone standard power','Simultaneous multi-dish cooking','No gas line required','Hygienic flat surface — easy cleaning','Green Kitchen certified','Compact footprint for output volume'],
    specs:{'Model':'LT-B300VI-B105','Burners':'6','Power per Zone':'5 kW','Total Power':'30 kW','Power Supply':'380 V / 3-phase','Material':'SUS304','Certification':'CE / Green Kitchen'},
    uses:['Hotel all-day-dining kitchens','Hospital F&B','Corporate cafeterias'] },

  { id:'LT-B300VI-B135', brand:'J-Nox', slug:'jnox', name:'LT-B300VI-B135',
    cat:'Freestanding 6-Burner Induction', tag:'Max Power',
    img:'img/8-Freestanding-Induction-Six-Burners-300x300.jpg',
    desc:'The LT-B300VI-B135 brings maximum induction power to a 6-zone configuration — 13.5 kW per burner provides the wok heat intensity comparable to the strongest gas burners, while eliminating combustion risk, reducing ambient kitchen heat and slashing energy bills.',
    features:['6 × 13.5 kW high-power zones','Matches gas wok-heat intensity','No combustion — safer environment','38% energy reduction vs. gas','CE-certified','Individual zone power adjustment','Commercial-grade ceramic glass'],
    specs:{'Model':'LT-B300VI-B135','Burners':'6','Power per Zone':'13.5 kW','Total Power':'81 kW','Power Supply':'380 V / 3-phase','Material':'SUS304','Certification':'CE'},
    uses:['Hotel central kitchens','Airline catering','Stadium concessions'] },

  { id:'LT-CCJ200-BS105', brand:'J-Nox', slug:'jnox', name:'LT-CCJ200-BS105',
    cat:'Tabletop Auto Cooking Machine', tag:'Entry-Level',
    img:'img/3-Tabletop-Automatic-Cooking-Machine-1-300x300.jpg',
    desc:'The LT-CCJ200-BS105 is J-Nox\'s entry-level tabletop automatic cooking machine, combining induction heating with automated stirring to cook consistently without a dedicated chef. Its compact 200-series frame fits easily on existing kitchen counters.',
    features:['Automated stirring & induction cooking','Compact 200-series tabletop form factor','Pre-programmed recipe database','No open flame','Easy-load ingredient design','SUS304 stainless body','Single-phase power option'],
    specs:{'Model':'LT-CCJ200-BS105','Type':'Tabletop Auto','Pot Size':'20 L','Power':'5 kW','Power Supply':'220 V / single-phase','Material':'SUS304','Certification':'CE'},
    uses:['Small restaurants','Café kitchens','Hospital wards','Office pantries'] },

  { id:'LT-CCJ300-BA105', brand:'J-Nox', slug:'jnox', name:'LT-CCJ300-BA105',
    cat:'Tabletop Auto Cooking Machine', tag:'Versatile',
    img:'img/2-Tabletop-Automatic-Cooking-Machine-1-300x300.jpg',
    desc:'The LT-CCJ300-BA105 is a 300-series tabletop automatic cooking machine with enhanced programme flexibility. Its BA-type bowl and stirring mechanism is optimised for braised dishes, soups and sauces that require extended gentle cooking at consistent temperatures.',
    features:['300-series enhanced capacity pot','Optimised for braising & slow cooking','Precise low-temperature induction control','800+ programme library','Auto-clean programme cycle','CE-certified construction','Silent operation motor'],
    specs:{'Model':'LT-CCJ300-BA105','Type':'Tabletop Auto','Pot Size':'30 L','Power':'8 kW','Power Supply':'380 V / 3-phase','Material':'SUS304','Certification':'CE'},
    uses:['Hotel banquet kitchens','Catering companies','School canteens','Hospital kitchens'] },

  { id:'LT-CCJ300-BA205', brand:'J-Nox', slug:'jnox', name:'LT-CCJ300-BA205',
    cat:'Tabletop Auto Cooking Machine', tag:'Extended Run',
    img:'img/2-Tabletop-Automatic-Cooking-Machine-1-300x300.jpg',
    desc:'Engineered for extended cooking cycles, the LT-CCJ300-BA205 is ideal for all-day simmering of stocks, curries and slow-cooked dishes. Its 20.5 kW power rating and reinforced stirring mechanism handle dense, heavy-ingredient batches without overloading.',
    features:['Extended cooking cycle capability','Reinforced heavy-duty stirrer','Dense-ingredient optimised design','Programmable multi-stage cooking','Auto temperature hold function','Hygienic sealed lid system','HACCP-compliant materials'],
    specs:{'Model':'LT-CCJ300-BA205','Type':'Tabletop Auto Extended','Pot Size':'30 L','Power':'20.5 kW','Power Supply':'380 V / 3-phase','Material':'SUS304','Certification':'CE / HACCP'},
    uses:['Hotel kitchens','Curry & sauce production','Institutional catering','Food manufacturing'] },

  { id:'LT-CCJ300-BC105', brand:'J-Nox', slug:'jnox', name:'LT-CCJ300-BC105',
    cat:'Intelligent Stir Fryer', tag:'Chef\'s Choice',
    img:'img/4-Intelligent-Stir-Fryer-Cooking-Machine-1-300x300.jpg',
    desc:'The LT-CCJ300-BC105 Intelligent Stir Fryer replicates the rapid wok-tossing action of a skilled chef at 350 RPM, with induction heating reaching cooking temperatures in under 60 seconds. Perfect for stir-fry-focused kitchens needing speed and flavour consistency.',
    features:['Rapid 350 RPM wok-toss mechanism','60-second heat-up from cold','Replicates skilled-chef technique','Programmable stir-fry profiles','30 L wok capacity','Automatic oil and sauce feed option','CE & HACCP certified'],
    specs:{'Model':'LT-CCJ300-BC105','Type':'Intelligent Stir Fryer','Pot Size':'30 L','Toss Speed':'350 RPM','Power':'10.5 kW','Power Supply':'380 V / 3-phase','Certification':'CE / HACCP'},
    uses:['Chinese restaurants','Hotel wok stations','Hawker-style canteens','Fast food production'] },

  { id:'LT-CCJ300-BS105', brand:'J-Nox', slug:'jnox', name:'LT-CCJ300-BS105',
    cat:'Tabletop Auto Cooking Machine', tag:'Standard',
    img:'img/3-Tabletop-Automatic-Cooking-Machine-1-300x300.jpg',
    desc:'The LT-CCJ300-BS105 is J-Nox\'s most popular 300-series tabletop auto cooker — balancing cooking capacity, power and programme range for everyday high-volume use. Its BS stirring system handles a wide variety of dish types from rice porridge to stir-fried vegetables.',
    features:['Best-selling 300-series platform','Versatile BS stirring mechanism','Wide recipe compatibility','8 kW efficient induction heating','Compact tabletop footprint','Auto programme selection','SUS304 stainless construction'],
    specs:{'Model':'LT-CCJ300-BS105','Type':'Tabletop Auto','Pot Size':'30 L','Power':'8 kW','Power Supply':'380 V / 3-phase','Material':'SUS304','Certification':'CE'},
    uses:['Restaurants','Cafeteria kitchens','Hotel staff canteens','Catering operations'] },

  { id:'LT-CCJ300-ZA205', brand:'J-Nox', slug:'jnox', name:'LT-CCJ300-ZA205',
    cat:'Tabletop Auto Cooking Machine', tag:'High Power',
    img:'img/2-Tabletop-Automatic-Cooking-Machine-1-300x300.jpg',
    desc:'The ZA205 variant features a 20.5 kW power rating with a ZA-type bowl optimised for high-moisture dishes. The increased power ensures rapid recovery time between batches, making it ideal for back-to-back service environments.',
    features:['20.5 kW high-power induction','ZA-type high-moisture bowl','Fast batch recovery','Auto temperature recovery','Multi-dish programme library','Durable SUS304 construction','CE / HACCP certified'],
    specs:{'Model':'LT-CCJ300-ZA205','Pot Size':'30 L','Power':'20.5 kW','Power Supply':'380 V / 3-phase','Material':'SUS304','Certification':'CE / HACCP'},
    uses:['Hotel banquet production','Large cafeterias','Central kitchens'] },

  { id:'LT-CCJ300-ZB105', brand:'J-Nox', slug:'jnox', name:'LT-CCJ300-ZB105',
    cat:'Freestanding Auto Cooking Machine', tag:'Freestanding',
    img:'img/5-Freestanding-Automatic-Cooking-Machine-1-300x300.jpg',
    desc:'The LT-CCJ300-ZB105 brings the J-Nox auto-cooking capability into a freestanding configuration — ideal for kitchens where counter space is at a premium. Its floor-standing design integrates underneath service counters or alongside conventional cooking lines.',
    features:['Freestanding floor configuration','ZB precision stirring system','Under-counter height available','Independent caster wheels','30 L pot capacity','Integrated power & control panel','CE certified'],
    specs:{'Model':'LT-CCJ300-ZB105','Type':'Freestanding Auto','Pot Size':'30 L','Power':'10.5 kW','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['Open kitchens','Space-constrained cafeterias','Kiosk operations'] },

  { id:'LT-CCJ360-BC105', brand:'J-Nox', slug:'jnox', name:'LT-CCJ360-BC105',
    cat:'Intelligent Stir Fryer', tag:'360-Series',
    img:'img/4-Intelligent-Stir-Fryer-Cooking-Machine-1-300x300.jpg',
    desc:'The 360-series LT-CCJ360-BC105 intelligent stir fryer features an enlarged wok diameter and enhanced tossing mechanism for kitchens that need to scale wok-fried output. With 10.5 kW induction power and 360-degree stirring coverage, every ingredient in the pot is evenly cooked.',
    features:['Enlarged 360-series wok diameter','360° full-coverage stirring','10.5 kW rapid induction heating','Replicates professional wok technique','Automated seasoning & sauce add','Programmable profiles','Hygienic sealed design'],
    specs:{'Model':'LT-CCJ360-BC105','Type':'Intelligent Stir Fryer 360','Power':'10.5 kW','Power Supply':'380 V / 3-phase','Toss Coverage':'360°','Material':'SUS304','Certification':'CE'},
    uses:['Wok-specialist restaurants','Hotel Chinese kitchens','Stadium food concessions'] },

  { id:'LT-CCJ360-BS105', brand:'J-Nox', slug:'jnox', name:'LT-CCJ360-BS105',
    cat:'Tabletop Auto Cooking Machine', tag:'360-Series',
    img:'img/3-Tabletop-Automatic-Cooking-Machine-1-300x300.jpg',
    desc:'The LT-CCJ360-BS105 is the 360-series upgrade to the standard BS tabletop auto cooker. Its wider bowl and improved stirring arm reach ensures that ingredients at the edges of the pot receive the same heat and agitation as the centre — eliminating uneven cooking.',
    features:['360-series wide-bowl design','Full-coverage stirring arm','Even heat distribution','8 kW efficient induction','Tabletop compact format','800+ recipe programmes','CE / HACCP certified'],
    specs:{'Model':'LT-CCJ360-BS105','Type':'Tabletop Auto 360','Pot Size':'36 L','Power':'8 kW','Power Supply':'380 V / 3-phase','Certification':'CE / HACCP'},
    uses:['Medium restaurants','Institutional catering','Hotel staff dining'] },

  { id:'LT-CCJ600-ZA225', brand:'J-Nox', slug:'jnox', name:'LT-CCJ600-ZA225',
    cat:'Large Auto Cooking Machine', tag:'Large Scale',
    img:'img/1-Automatic-Cooking-Machine-1-300x300.jpg',
    desc:'The LT-CCJ600-ZA225 is J-Nox\'s large-scale 600-series automatic cooking machine, designed for central production kitchens and institutional food service that requires batch cooking at volumes of 50+ servings per cycle. The 22.5 kW ZA-type system maintains precise temperature even with large ingredient loads.',
    features:['600-series large-batch production','60 L high-volume capacity','22.5 kW induction system','ZA high-moisture bowl type','Central production optimised','Automated multi-stage cycle','Full CE & HACCP compliance'],
    specs:{'Model':'LT-CCJ600-ZA225','Type':'Large Auto 600-series','Pot Size':'60 L','Power':'22.5 kW','Power Supply':'380 V / 3-phase','Output':'50+ servings/cycle','Certification':'CE / HACCP'},
    uses:['Central production kitchens','Hospital mass catering','School bulk cooking','Food manufacturers'] },

  { id:'LT-CCJ600-ZB225', brand:'J-Nox', slug:'jnox', name:'LT-CCJ600-ZB225',
    cat:'Large Auto Cooking Machine', tag:'Industrial',
    img:'img/1-Automatic-Cooking-Machine-1-300x300.jpg',
    desc:'The ZB225 variant of the 600-series features the ZB stirring configuration suited for drier, denser dishes such as fried rice, noodles and dry stir-fries at large batch scale. With 22.5 kW induction power, it handles the thermal demands of dense ingredient loads without performance degradation.',
    features:['ZB configuration for dense/dry dishes','60 L large batch capacity','22.5 kW high-output induction','Ideal for fried rice & noodles at scale','Reinforced heavy-duty stirrer','Automated programme cycles','CE / HACCP certified'],
    specs:{'Model':'LT-CCJ600-ZB225','Type':'Large Auto 600-series ZB','Pot Size':'60 L','Power':'22.5 kW','Power Supply':'380 V / 3-phase','Certification':'CE / HACCP'},
    uses:['Central canteen kitchens','Industrial F&B production','Armed forces catering'] },

  { id:'LT-D1000-E130', brand:'J-Nox', slug:'jnox', name:'LT-D1000-E130',
    cat:'Single Wok Induction Cooker', tag:'Single Wok',
    img:'img/6-Freestanding-Induction-Single-Larger-Wok-Cooker-300x300.jpg',
    desc:'The LT-D1000-E130 is a freestanding single large-wok induction cooker delivering 13 kW of focused heating power. Its oversized wok ring accommodates standard 50–60 cm commercial woks, making it the direct induction replacement for a single gas wok burner station.',
    features:['13 kW single wok induction','Oversized wok-ring support (50–60 cm wok)','Direct gas-burner replacement','No open flame','38% energy saving','Freestanding with adjustable feet','CE certified'],
    specs:{'Model':'LT-D1000-E130','Type':'Single Wok Freestanding','Power':'13 kW','Wok Size':'50–60 cm','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['Chinese restaurants','Wok stations','Hotel kitchens','Catering companies'] },

  { id:'LT-D1000II-E130', brand:'J-Nox', slug:'jnox', name:'LT-D1000II-E130',
    cat:'Double Wok Induction Cooker', tag:'Twin Wok',
    img:'img/7-Freestanding-Induction-Double-Larger-Wok-Cooker-300x300.jpg',
    desc:'The LT-D1000II-E130 puts two 13 kW induction wok burners into a single freestanding unit — doubling throughput with the same floor footprint as a single-burner station. Each zone operates independently for simultaneous different-dish cooking.',
    features:['2 × 13 kW independent wok induction zones','Both zones independently controlled','Doubles wok output per station','No open flame — safer kitchen','38% energy saving vs. gas','CE certified','Adjustable levelling feet'],
    specs:{'Model':'LT-D1000II-E130','Type':'Double Wok Freestanding','Power per Zone':'13 kW','Total Power':'26 kW','Wok Size':'50–60 cm','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['High-volume Chinese kitchens','Hotel banquet wok stations','Hawker-style canteens'] },

  { id:'LT-D1200-E130', brand:'J-Nox', slug:'jnox', name:'LT-D1200-E130 / E135 / E145',
    cat:'Single Wok Induction Cooker', tag:'Multi-Spec',
    img:'img/6-Freestanding-Induction-Single-Larger-Wok-Cooker-300x300.jpg',
    desc:'The D1200 series single wok cooker is available in three power specifications (E130/E135/E145) to match the wok size and throughput requirements of different kitchen operations. All variants support woks up to 65 cm and deliver restaurant-grade heat intensity without gas.',
    features:['3 power specs: 13 / 13.5 / 14.5 kW','Supports woks up to 65 cm diameter','High-intensity induction wok heat','Freestanding configuration','No open flame','CE certified for each variant','Adjustable power control'],
    specs:{'Model':'LT-D1200 E130/E135/E145','Type':'Single Wok Freestanding','Power Options':'13 / 13.5 / 14.5 kW','Wok Size':'Up to 65 cm','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['Wok-focused restaurants','Hotel production kitchens','Large canteen kitchens'] },

  { id:'LT-D1200II-E130', brand:'J-Nox', slug:'jnox', name:'LT-D1200II-E130 / E135',
    cat:'Double Wok Induction Cooker', tag:'Twin High-Power',
    img:'img/7-Freestanding-Induction-Double-Larger-Wok-Cooker-300x300.jpg',
    desc:'The D1200II double wok induction cooker combines two high-power zones in one unit. Matching the output of two gas wok burners while eliminating combustion, it suits kitchens upgrading from gas without losing cooking intensity or throughput.',
    features:['2 × high-power induction zones','Supports 65 cm commercial woks','Per-zone independent control','Gas-equivalent wok heat intensity','No combustion byproducts','38% energy saving','CE certified'],
    specs:{'Model':'LT-D1200II-E130/E135','Type':'Double Wok Freestanding','Power per Zone':'13 / 13.5 kW','Total Power':'26 / 27 kW','Wok Size':'Up to 65 cm','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['High-output wok kitchens','Hotel F&B','Central production kitchens'] },

  { id:'LT-D550-E108', brand:'J-Nox', slug:'jnox', name:'LT-D550-E108 / E112 / E115',
    cat:'Single Wok Induction Cooker', tag:'Mid-Range',
    img:'img/6-Freestanding-Induction-Single-Larger-Wok-Cooker-300x300.jpg',
    desc:'The compact D550 single wok series (E108/E112/E115) is designed for smaller commercial kitchens and wok stations that need induction power without a large footprint. Three power options suit everything from dim sum prep to full wok-fried entrées.',
    features:['3 compact power options: 10.8 / 11.2 / 11.5 kW','Smaller 550-series footprint','Suitable for 45–55 cm woks','No open flame','CE certified','Adjustable feet for level installation','Energy efficient induction'],
    specs:{'Model':'LT-D550 E108/E112/E115','Type':'Single Wok Compact','Power Options':'10.8 / 11.2 / 11.5 kW','Wok Size':'45–55 cm','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['Small restaurants','Café kitchens','Food court stalls','Hotel room-service kitchens'] },

  { id:'LT-D550II-E108', brand:'J-Nox', slug:'jnox', name:'LT-D550II-E108 / E112 / E115',
    cat:'Double Wok Induction Cooker', tag:'Compact Twin',
    img:'img/7-Freestanding-Induction-Double-Larger-Wok-Cooker-300x300.jpg',
    desc:'The D550II is the double-burner compact variant — two induction wok zones in the same footprint as the D550, maximising output from a space-constrained wok station. Ideal for open kitchens or food court operations where space and appearance both matter.',
    features:['2 compact induction wok zones','Space-efficient 550-series frame','Per-zone independent control','Suitable for 45–55 cm woks','No open flame','CE certified','Sleek stainless steel finish'],
    specs:{'Model':'LT-D550II E108/E112/E115','Type':'Double Wok Compact','Power per Zone':'10.8 / 11.2 / 11.5 kW','Wok Size':'45–55 cm','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['Open kitchens','Food courts','Small restaurants','Hotel display cooking'] },

  { id:'LT-D600-E112', brand:'J-Nox', slug:'jnox', name:'LT-D600-E112',
    cat:'Single Wok Induction Cooker', tag:'Standard',
    img:'img/6-Freestanding-Induction-Single-Larger-Wok-Cooker-300x300.jpg',
    desc:'The LT-D600-E112 single wok induction cooker is the mid-range workhorse of the J-Nox wok series. At 11.2 kW it strikes the balance between power and energy consumption, fitting both the physical layout and electrical capacity of most existing commercial kitchens.',
    features:['11.2 kW balanced induction power','50–60 cm wok compatibility','Standard 600-series frame','No open flame','CE certified','Adjustable power levels','SUS304 stainless body'],
    specs:{'Model':'LT-D600-E112','Type':'Single Wok Standard','Power':'11.2 kW','Wok Size':'50–60 cm','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['Mid-size restaurants','Hotel staff canteens','Catering companies'] },

  { id:'LT-D600II-E112', brand:'J-Nox', slug:'jnox', name:'LT-D600II-E112',
    cat:'Double Wok Induction Cooker', tag:'Twin Standard',
    img:'img/7-Freestanding-Induction-Double-Larger-Wok-Cooker-300x300.jpg',
    desc:'Two 11.2 kW wok burners in the standard 600-series freestanding frame — the LT-D600II-E112 doubles cooking throughput without increasing the number of individual cooker units, simplifying kitchen layout and reducing electrical point connections.',
    features:['2 × 11.2 kW induction zones','Dual output from single unit','Simplified wiring vs. 2 separate units','50–60 cm wok support','CE certified','Per-zone control','Standard 600-series dimensions'],
    specs:{'Model':'LT-D600II-E112','Type':'Double Wok Standard','Power per Zone':'11.2 kW','Total Power':'22.4 kW','Wok Size':'50–60 cm','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['Mid-to-high-volume restaurants','Hotel banquet kitchens','Corporate cafeterias'] },

  { id:'LT-D700-E115', brand:'J-Nox', slug:'jnox', name:'LT-D700-E115',
    cat:'Single Wok Induction Cooker', tag:'High Power',
    img:'img/6-Freestanding-Induction-Single-Larger-Wok-Cooker-300x300.jpg',
    desc:'The LT-D700-E115 delivers 11.5 kW of dedicated single-wok induction power in a wide 700-series frame that accommodates the largest commercial woks. Its wider burner coil diameter ensures even heat distribution across 60–70 cm wok bases.',
    features:['11.5 kW high-output induction','Wide 700-series burner coil','Supports 60–70 cm large woks','Even heat across full wok base','No open flame','CE certified','Heavy-duty stainless frame'],
    specs:{'Model':'LT-D700-E115','Type':'Single Wok Wide-Frame','Power':'11.5 kW','Wok Size':'60–70 cm','Power Supply':'380 V / 3-phase','Certification':'CE'},
    uses:['Large wok kitchens','Hotel signature restaurants','High-volume Chinese F&B'] },

  /* ─────────── JR-Chem ─────────── */
  { id:'Utensil-Washer', brand:'JR-Chem', slug:'jrchem', name:'Utensil Washer (VTF21DM)',
    cat:'Industrial Utensil Washer', tag:'Industrial',
    img:'img/VTF21DM-300x300.jpg',
    desc:'The JR-Chem Utensil Washer is an industrial-grade washing system for large cookware, pots and trays. Powered by Italian pump technology, it delivers high-pressure wash and rinse cycles that remove heavy cooking residue from commercial-scale utensils in minutes.',
    features:['Italian pump technology','High-pressure wash & rinse cycles','HACCP-compliant chemical dosing','Handles large pots and trays','Auto-dose detergent & rinse aid','Stainless steel tank & chamber','Available for rental or purchase'],
    specs:{'Model':'VTF21DM Utensil Washer','Type':'Industrial Pass-through','Capacity':'Large cookware','Pump':'Italian technology','Chemical Dosing':'Auto HACCP','Power Supply':'380 V / 3-phase','Programme':'Auto wash & rinse'},
    uses:['Hotel central kitchens','Hospital kitchen facilities','Large canteen operations','Catering companies'] },

  { id:'VT-1', brand:'JR-Chem', slug:'jrchem', name:'VT-1 Door Type with Work Station',
    cat:'Door Type Dishwasher', tag:'With Station',
    img:'img/VT-1-Door-Type-with-work-station-300x300.jpg',
    desc:'The JR-Chem VT-1 is a commercial door-type dishwasher with an integrated in-feed and out-feed work station, providing a complete warewashing station in one unit. Italian pump technology drives 840+ plates per hour wash throughput with HACCP-compliant auto-chemical dosing.',
    features:['840+ plates per hour throughput','Integrated in-feed & out-feed station','Italian pump technology','HACCP auto-chemical dosing','55°C wash, 85°C rinse (heat sanitise)','Energy-saving eco cycle option','Available for rental or purchase'],
    specs:{'Model':'VT-1','Type':'Door Type with Work Station','Capacity':'840+ plates/hr','Wash Temp':'55°C','Rinse Temp':'85°C','Chemical Dosing':'Auto HACCP','Power Supply':'380 V / 3-phase'},
    uses:['Hotel F&B outlets','Hospital kitchens','Mid-size restaurants','Factory canteens'] },

  { id:'VT-3', brand:'JR-Chem', slug:'jrchem', name:'VT-3',
    cat:'Commercial Dishwasher', tag:'Compact',
    img:'img/VT-3-300x300.jpg',
    desc:'The JR-Chem VT-3 is a compact commercial dishwasher designed for smaller F&B operations that require reliable HACCP-compliant warewashing without the footprint of a full flight-type system. It handles 360+ plates per hour with Italian pump reliability.',
    features:['360+ plates per hour','Compact installation footprint','Italian pump technology','Auto chemical dosing','Heat-sanitise rinse cycle','SUS304 stainless interior','Available for rental or purchase'],
    specs:{'Model':'VT-3','Type':'Compact Commercial Dishwasher','Capacity':'360+ plates/hr','Wash Temp':'55°C','Rinse Temp':'85°C','Chemical Dosing':'Auto HACCP','Power Supply':'220 V or 380 V'},
    uses:['Small restaurants','Cafés','Office pantries','Food court stalls'] },

  { id:'VTF11DM', brand:'JR-Chem', slug:'jrchem', name:'VTF11DM',
    cat:'Mini Flight Dishwasher', tag:'Mini Flight',
    img:'img/VT-F11Dm-Mini-Flight-Type-300x300.jpg',
    desc:'The VTF11DM Mini Flight dishwasher is a compact conveyor-type system for operations transitioning from rack-type to flight-type warewashing. It continuously moves racks through the wash zone, enabling uninterrupted dishwashing during peak service with a smaller installation footprint than a full flight system.',
    features:['Continuous conveyor washing','Mini-flight footprint — space efficient','Italian pump technology','HACCP auto-dose chemical system','Suitable for rack or loose items','Low chemical & water consumption','Available for rental or purchase'],
    specs:{'Model':'VTF11DM','Type':'Mini Flight Conveyor','Capacity':'Up to 600 plates/hr','Conveyor Speed':'Adjustable','Chemical Dosing':'Auto HACCP','Power Supply':'380 V / 3-phase','Rinse Temp':'85°C'},
    uses:['Mid-size hotel restaurants','Canteens','Catering operations','Healthcare facilities'] },

  { id:'VTF21DM', brand:'JR-Chem', slug:'jrchem', name:'VTF21DM',
    cat:'Flight Type Dishwasher', tag:'Full Flight',
    img:'img/11-VT-F21DM-1-300x300.jpg',
    desc:'The JR-Chem VTF21DM is a full-sized flight-type dishwasher for high-volume warewashing operations processing 1,200+ items per hour. Its continuous conveyor system eliminates the loading/unloading downtime of rack-type machines, making it the right choice for hotel all-day-dining, hospital bulk service and airline catering.',
    features:['1,200+ items per hour throughput','Continuous conveyor — no downtime','HACCP-compliant auto-dose system','Adjustable conveyor speed','Heat-sanitise 85°C rinse','Full stainless steel construction','Rental & purchase available'],
    specs:{'Model':'VTF21DM','Type':'Full Flight Conveyor','Capacity':'1,200+ items/hr','Rinse Temp':'85°C','Chemical Dosing':'Auto HACCP','Power Supply':'380 V / 3-phase','Installation':'In-line conveyor'},
    uses:['Hotel all-day dining','Hospital bulk catering','Airline catering kitchens','Stadium concessions'] },

  /* ─────────── Tamago ─────────── */
  { id:'TC-100', brand:'Tamago', slug:'tamago', name:'TC-100',
    cat:'Food Serving Equipment', tag:'4-Door Upright',
    img:'img/4-Door-Upright-300x300.jpg',
    desc:'The Tamago TC-100 is a 4-door upright food-serving station engineered for hotel buffet lines, hospital patient-meal distribution and institutional cafeteria service. Its temperature-controlled zones maintain food at safe holding temperatures throughout the service period.',
    features:['4-door upright configuration','Hot & cold zone options','Temperature-controlled holding','Hotel buffet line optimised','Easy-clean stainless interior','Energy-efficient insulation','Full spare parts support'],
    specs:{'Model':'TC-100','Type':'4-Door Upright Serving Station','Zones':'Hot & cold compartments','Temperature':'Adjustable hold temp','Material':'SUS304','Power Supply':'220 V single-phase','Application':'Buffet / patient meal service'},
    uses:['Hotel buffet service','Hospital patient meal service','Institutional cafeteria','Event catering'] },

  { id:'TC-50', brand:'Tamago', slug:'tamago', name:'TC-50',
    cat:'Food Serving Equipment', tag:'Counter Chiller',
    img:'img/Drawer-Counter-Chiller-300x300.jpg',
    desc:'The Tamago TC-50 is a drawer-style counter chiller designed for front-of-house food presentation and safe holding of chilled items during service. Its drawer configuration provides easy access for service staff while keeping food at the correct temperature for the duration of service.',
    features:['Drawer-style counter configuration','Precision chiller temperature control','Front-of-house aesthetic design','Easy-access drawer operation','Safe food holding compliance','SUS304 hygienic interior','Low-energy compressor system'],
    specs:{'Model':'TC-50','Type':'Drawer Counter Chiller','Configuration':'Multi-drawer','Temperature Range':'2–8°C','Material':'SUS304','Power Supply':'220 V single-phase','Application':'Front-of-house chilled service'},
    uses:['Hotel buffet counters','Restaurant service counters','Hospital meal stations','Banquet serving lines'] }
];

/* Helper: find by ID */
function JRT_findProduct(id) {
  for (var i = 0; i < JRT_PRODUCTS.length; i++) {
    if (JRT_PRODUCTS[i].id === id) return JRT_PRODUCTS[i];
  }
  return null;
}

/* Helper: related products (same brand, excluding self) */
function JRT_related(product, limit) {
  limit = limit || 4;
  var out = [];
  for (var i = 0; i < JRT_PRODUCTS.length; i++) {
    var p = JRT_PRODUCTS[i];
    if (p.slug === product.slug && p.id !== product.id) {
      out.push(p);
      if (out.length >= limit) break;
    }
  }
  return out;
}
