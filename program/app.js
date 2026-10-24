const iconSvg = (inner, { fill = false } = {}) =>
  `<svg class="hi-icon-svg" viewBox="0 0 24 24" aria-hidden="true"${
    fill
      ? ' fill="currentColor"'
      : ' fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"'
  }>${inner}</svg>`;

const ICONS = {
  plane: iconSvg(
    '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>',
    { fill: true }
  ),
  suitcase: iconSvg(
    '<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/><path d="M12 14v3"/>'
  ),
  moon: iconSvg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
  checkIn: iconSvg(
    '<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 12 2 2 4-4"/>'
  ),
  meeting: iconSvg(
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  ),
  transfer: iconSvg(
    '<path d="M4 6h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M4 11h16"/><path d="M8 6V4"/><path d="M16 6V4"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'
  ),
  dinner: iconSvg(
    '<path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6h1v8"/>'
  ),
  building: iconSvg(
    '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>'
  ),
  sports: iconSvg(
    '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>'
  ),
  panel: iconSvg(
    '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>'
  ),
  presentation: iconSvg(
    '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>'
  ),
  community: iconSvg(
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  ),
  medical: iconSvg('<path d="M12 6v12"/><path d="M6 12h12"/><circle cx="12" cy="12" r="10"/>'),
  home: iconSvg(
    '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
  ),
  leisure: iconSvg(
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'
  ),
  museum: iconSvg(
    '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M10 12v4"/><path d="M14 12v4"/>'
  ),
  train: iconSvg(
    '<rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/>'
  ),
  stroll: iconSvg(
    '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'
  ),
  infrastructure: iconSvg(
    '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>'
  ),
  park: iconSvg(
    '<path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7l3.2-4.3a1 1 0 0 1 1.4 0l1.8 2.4 1.8-2.4a1 1 0 0 1 1.4 0l3.2 4.3a1 1 0 0 1-.7 1.7H17Z"/><path d="M12 22v-8"/>'
  ),
  boat: iconSvg(
    '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.9 5.8 2.38 8"/><path d="M12 2v8"/>'
  ),
  social: iconSvg('<path d="M8 2h8l4 10H4L8 2z"/><path d="M12 12v10"/><path d="M8 22h8"/>'),
  innovation: iconSvg(
    '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>'
  ),
  tech: iconSvg(
    '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2"/><path d="M15 2v2"/><path d="M9 20v2"/><path d="M15 20v2"/><path d="M20 9h2"/><path d="M20 14h2"/><path d="M2 9h2"/><path d="M2 14h2"/>'
  ),
  car: iconSvg(
    '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'
  ),
  hub: iconSvg(
    '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>'
  ),
  event: iconSvg(
    '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>'
  ),
  embassy: iconSvg(
    '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>'
  ),
  care: iconSvg(
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'
  ),
};

const lumaEmbedAspectRatio = 1.05;
const pdfEmbedAspectRatio = 4416 / 1920;

const days = [
  {
    w: "MON",
    d: "14.12",
    m: "DEC",
    title: "Arrival & Introduction to Tokyo",
    city: "Narita Airport → Hotel / Shiodome–Shinbashi",
    theme:
      "The opening day is dedicated to arrival, meeting the local team and settling into the hotel. A welcome gathering, introductory lecture and light dinner will establish the historical and urban context for the study program, highlighting how rail infrastructure has shaped modern Tokyo.",
    tip: "After the walking tour, the evening is free to explore the Shimbashi area.",
    items: [
      ["ARRIVAL", "Narita Airport, 11:40", ICONS.plane],
      ["CHECK-IN", "Hotel, 14:30", ICONS.suitcase],
      ["OPENING", "Session with the local team, 16:00–18:00", ICONS.meeting],
      ["WALK", "Shiodome–Shinbashi Station, 19:00–20:00", ICONS.stroll],
    ],
    program: [
      ["11:40", "Arrival at Narita International Airport", ""],
      ["13:00", "Departure from the airport by bus", ""],
      ["14:30", "Arrival at the hotel and check-in", ""],
      ["16:00–18:00", "Opening session", "Forumetro delegation and local organizing team"],
      ["18:00–19:00", "Light dinner", ""],
      ["19:00–20:00", "Walking tour", "Shiodome–Shinbashi Station"],
      ["20:00", "Free evening", "Explore the Shimbashi area"],
    ],
  },
  {
    w: "TUE",
    d: "15.12",
    m: "DEC",
    title: "Understanding Tokyo's Rail System: Networks, Stations & Operations",
    city: "Toranomon Hills and Tokyo Metro",
    theme:
      "The day introduces Tokyo's metropolitan railway network and the principles behind its planning, engineering and operations. We will explore the rail system at both metropolitan and station scales.",
    tip: "Wear comfortable shoes for the station walks at Toranomon Hills and Tokyo Metro.",
    notesExtra: "The station for the afternoon Tokyo Metro walk is still to be confirmed.",
    items: [
      ["LECTURE", "Professor Shigeru Morichi, 09:00–10:00", ICONS.presentation],
      ["STATION WALK", "Toranomon Hills, 10:30–12:00", ICONS.train],
      ["TOKYO METRO", "Station walk and operations lecture, 14:00–16:00", ICONS.hub],
      ["REFLECTION", "Group discussion, 16:00–17:00", ICONS.panel],
    ],
    program: [
      ["08:30–09:00", "Morning briefing", ""],
      [
        "09:00–10:00",
        "Lecture",
        "Professor Shigeru Morichi — Tokyo's Metropolitan Railway Network: Evolution, Structure and Urban Development",
      ],
      ["10:00–10:30", "Travel to Toranomon Hills Station", ""],
      [
        "10:30–12:00",
        "Expert-led station walk",
        "Professor Kazufumi Noyaki — Toranomon Hills Station: architecture, engineering and integration with urban redevelopment",
      ],
      ["12:00–13:00", "Lunch at Toranomon Hills", ""],
      ["13:00–14:00", "Travel to a Tokyo Metro station", ""],
      [
        "14:00–15:00",
        "Expert-led station walk",
        "Tokyo Metro — station to be confirmed: passenger circulation, engineering and operational infrastructure",
      ],
      ["15:00–16:00", "Lecture", "Tokyo Metro — Operating a Metropolitan Railway"],
      ["16:00–17:00", "Group activity", "Discussion, reflection and lessons learned"],
    ],
  },
  {
    w: "WED",
    d: "16.12",
    m: "DEC",
    title: "New Urban Cores: Railway-Led Development and the Station City",
    city: "Shibuya and Tokyu suburban railways",
    theme:
      "Tokyo's railway stations act as urban centers integrating transportation, commerce, employment and culture. We will examine how public authorities and private railway companies shape new urban cores and everyday life around stations.",
    tip: "The evening is free to explore a Tokyo neighborhood and its shopping streets.",
    items: [
      ["SHIBUYA", "Station walking tour, 08:00–09:30", ICONS.hub],
      ["LECTURE", "Shibuya Ward, 10:00–12:00", ICONS.building],
      ["TOKYU", "Rail, real estate and urban development, 13:00–16:00", ICONS.infrastructure],
      ["STATION WALK", "Tatsuya Edakubo, 16:00–18:00", ICONS.train],
    ],
    program: [
      ["07:30–08:00", "Morning briefing", ""],
      ["08:00–09:30", "Walking tour", "Shibuya Station — redevelopment, layered connections and public space"],
      ["10:00–12:00", "Lecture", "Shibuya Ward — municipal planning, station-city development and cultural identity"],
      ["12:00–13:00", "Lunch", ""],
      ["13:00–16:00", "Lecture", "Tokyu — integrated rail, real estate and urban development"],
      ["16:00–18:00", "Expert-led station walk", "Tatsuya Edakubo — commuter life along Tokyu's suburban railways"],
      ["18:00", "Free evening", "Explore a Tokyo neighborhood and shopping streets"],
    ],
  },
  {
    w: "THU",
    d: "17.12",
    m: "DEC",
    title: "Governing the Metropolis: Public Transport, Planning & Policy",
    city: "Tokyo Metropolitan Government, Shinjuku and the Israeli Embassy",
    theme:
      "We will meet institutions responsible for planning, developing and operating Tokyo's metropolitan transportation system. The day explores the roles of public authorities, operator coordination and the challenges of metropolitan-scale planning.",
    tip: "The visit to the Israeli Embassy includes arrival and security procedures from 14:00.",
    items: [
      ["TOEI", "Public transportation authority, 10:00–11:00", ICONS.presentation],
      ["TMG", "Metropolitan planning and coordination, 11:00–12:00", ICONS.building],
      ["SHINJUKU", "Station walk, 13:30–14:00", ICONS.train],
      ["RECEPTION", "Israeli Ambassador to Japan, 15:00–16:00", ICONS.embassy],
    ],
    program: [
      ["07:45–08:45", "Breakfast and morning briefing", ""],
      ["08:45–09:30", "Travel to Tokyo Metropolitan Government", ""],
      ["09:30–10:00", "Arrival and introduction", ""],
      ["10:00–11:00", "Lecture", "Toei — The Challenges of a Public Transportation Authority"],
      ["11:00–12:00", "Lecture", "TMG Planning authority — Metropolitan Transportation Planning and Coordination"],
      ["12:00–13:30", "Lunch", ""],
      ["13:30–14:00", "Station walk", "Shinjuku"],
      ["14:00–15:00", "Travel to the Israeli Embassy", "Arrival and security procedures"],
      ["15:00–16:00", "Official reception", "Israeli Ambassador to Japan"],
      ["16:00–18:00", "Group activity", "Discussion, reflection and lessons learned"],
    ],
  },
  {
    w: "FRI",
    d: "18.12",
    m: "DEC",
    title: "The Human Scale: Machizukuri, Community & Railway Infrastructure",
    city: "Setagaya, Shimokitazawa and Kitami",
    theme:
      "We will head into Tokyo's suburban railway neighborhoods to see how infrastructure can improve public space and strengthen communities. Setagaya Ward and Odakyu Railway offer a compelling case of Machizukuri, participation and human-scale development.",
    tip: "Shabbat begins at 16:12. Three participants may need to return earlier.",
    notesExtra:
      "Shabbat begins at 16:12. Three participants may need an earlier return. Lunch is in Shimokitazawa or Seijo-Gakuenmae, and the route to Kitami Fureai Plaza is still to be confirmed.",
    items: [
      ["SETAGAYA", "Machizukuri lecture, 09:30–10:30", ICONS.community],
      ["NEIGHBORHOOD", "Shimokita Senrogai and BONUS TRACK, 10:30–12:00", ICONS.stroll],
      ["ODAKYU", "Kitami Fureai Plaza and depot, 14:00–15:00", ICONS.park],
      ["SHABBAT", "Begins at 16:12", ICONS.home],
    ],
    program: [
      ["07:15–08:15", "Breakfast", ""],
      ["08:15–08:30", "Morning briefing", ""],
      ["08:30–09:30", "Travel to Setagaya", "Kitazawa Town Hall"],
      ["09:30–10:30", "Lecture", "Setagaya Ward — Human-Scale Machizukuri and Community Building"],
      [
        "10:30–12:00",
        "Expert-led neighborhood walk",
        "Setagaya Ward Machizukuri Team — Shimokita Senrogai and BONUS TRACK: railway undergrounding, reuse of land and public space",
      ],
      ["12:00–13:00", "Lunch", "Shimokitazawa or Seijo-Gakuenmae (to be confirmed)"],
      ["13:00–14:00", "Transfer to Kitami Fureai Plaza", "Route to be confirmed"],
      [
        "14:00–15:00",
        "Expert-led site visit",
        "Odakyu — Kitami Fureai Plaza and Odakyu Depot: public park above railway infrastructure",
      ],
      ["15:00–16:00", "Return to the hotel", ""],
      ["16:12", "Shabbat begins", "Three participants may need an earlier return"],
    ],
  },
  {
    w: "SAT",
    d: "19.12",
    m: "DEC",
    title: "Exploring Tokyo: Culture, Public Space & Urban Life",
    city: "Tokyo — independent exploration",
    theme:
      "Today offers time to explore Tokyo independently and experience its diverse historic neighborhoods, landscapes and everyday urban life. Optional visits reveal connections between traditional places, commerce and the contemporary city.",
    tip: "The morning and afternoon are free. A group activity is planned for 18:00.",
    notesExtra: "The group activity at 18:00 is still to be confirmed.",
    items: [
      ["GARDENS", "Hamarikyu Gardens", ICONS.park],
      ["GINZA", "Streets, architecture and public space", ICONS.stroll],
      ["ASAKUSA", "Sensoji Temple", ICONS.museum],
      ["EVENING", "Group activity, 18:00", ICONS.event],
    ],
    program: [
      ["08:00–09:00", "Breakfast", ""],
      [
        "09:00",
        "Optional city exploration",
        "",
        [
          ["", "Hamarikyu Gardens", "Traditional landscape and Tokyo's modern waterfront."],
          ["", "Ginza", "Commercial streets, architecture and public space."],
          ["", "Asakusa / Sensoji Temple", "Historic Tokyo, traditional shopping streets and religious heritage."],
        ],
      ],
      ["18:00", "Group activity", "To be confirmed"],
    ],
  },
  {
    w: "SUN",
    d: "20.12",
    m: "DEC",
    title: "The Future Tokyo: Takanawa Gateway & Closing Reflections",
    city: "Tokyo Station and Takanawa Gateway",
    theme:
      "Our final day explores new approaches to railway-led urban development at Takanawa Gateway. We will close the visit by reflecting on lessons for the planning and implementation of the Tel Aviv Metropolitan Metro.",
    tip: "The day moves from a walking tour to lunch and discussion, then on to Takanawa Gateway City.",
    items: [
      ["TOKYO STATION", "Walking tour, 09:00–11:30", ICONS.train],
      ["DISCUSSION", "From Tokyo to Tel Aviv, 12:00–14:00", ICONS.panel],
      ["TRANSFER", "Takanawa Gateway Station, 14:00–14:30", ICONS.transfer],
      ["TAKANAWA", "Gateway City walking tour, 14:30–17:00", ICONS.innovation],
    ],
    program: [
      ["08:00–09:00", "Breakfast", ""],
      ["09:00–11:30", "Walking tour", "Tokyo Station"],
      ["11:30–12:00", "Travel to Tokyo Station", ""],
      [
        "12:00–14:00",
        "Lunch and discussion",
        "Little Edo — From Tokyo to Tel Aviv: Lessons for Building a Metropolitan Metro",
      ],
      ["14:00–14:30", "Travel to Takanawa Gateway Station", ""],
      [
        "14:30–17:00",
        "Walking tour",
        "Takanawa Gateway City — architecture, station-city integration, pedestrian networks and innovation",
      ],
    ],
  },
  {
    w: "MON",
    d: "21.12",
    m: "DEC",
    title: "Nihonbashi, Chūō City & Departure",
    city: "Nihonbashi and Chūō City → Narita Airport",
    theme:
      "Our final morning will explore how railway infrastructure supports urban renewal within Tokyo's historic center. An expert-led walk through Nihonbashi and a visit focused on Chūō City's municipal perspective will examine the relationship between stations, streets, public spaces and private development. We will then return to the hotel and transfer to Narita Airport for our departure.",
    tip: "Check-out is at 08:00. The bus leaves Nihonbashi at 13:30, and the flight departs Narita at 17:20.",
    items: [
      ["CHECK-OUT", "08:00–09:00", ICONS.suitcase],
      ["WALK", "Nihonbashi and Chūō City, 09:00–12:00", ICONS.stroll],
      ["TRANSFER", "Bus from Nihonbashi, 13:30", ICONS.transfer],
      ["FLIGHT", "Departs Narita, 17:20", ICONS.plane],
    ],
    program: [
      ["08:00–09:00", "Check-out", ""],
      [
        "09:00–12:00",
        "Expert-led walk",
        "Nihonbashi and Chūō City — station-area development, pedestrian accessibility, public space and preservation of historic urban character",
      ],
      ["12:00–13:00", "Lunch", ""],
      ["13:30", "Departure from Nihonbashi by bus", ""],
      ["15:00", "Arrival at Narita International Airport", ""],
      ["17:20", "Flight departure from Narita", ""],
    ],
  },
];

const prep = [
  ["Accommodation", ["Delegation hotel details will be confirmed before travel.", "See the Contact page for the latest information."]],
  ["Travel Documents", ["Passport, visa, insurance and copies.", "Israeli passports do not need special visa procedures."]],
  ["Arrival & Entry Procedures", ["Complete Visit Japan Web declaration: https://services.digital.go.jp/en/visit-japan-web/", "Register flight and personal details.", "Save QR code for airport entry."]],
  ["Currency & Payments", ["Bring 10,000–20,000 JPY cash.", "Cards accepted in large stores.", "Cash needed for small shops and taxis."]],
  ["Packing", ["Formal clothes for official visits.", "Closed shoes and socks.", "Comfortable walking shoes.", "Warm layers and a coat for December weather (about 5–12°C).", "Plug type A, voltage 100V."]],
  ["Order in Advance", ["Portable Wi‑Fi or SIM rental.", "Recommended: https://japan-wireless.com", "Business cards."]],
  ["General Suggestions", ["Be punctual and arrive early.", "Keep phone silent in public.", "Bring personal medications."]],
];

const prepHe = [
  ["מסמכי נסיעה", [
    "☐ דרכון בתוקף — יש לבדוק את תאריך התפוגה.",
    "☐ ויזה — בעלי דרכון ישראלי אינם נדרשים להליך מיוחד.",
  ]],
  ["הגעה וכניסה ליפן", [
    "☐ מכתב הזמנה — יסופק בהמשך.",
    "☐ יש למלא הצהרה מקוונת באתר Visit Japan Web: https://services.digital.go.jp/en/visit-japan-web/",
    "::בתוך האתר יש לבצע:",
    "☐ רישום פרטי טיסה ופרטים אישיים.",
    "☐ מילוי טפסי מכס והסגר / בריאות.",
    "☐ שמירת קוד QR לשימוש בכניסה בשדה התעופה.",
  ]],
  ["כסף ותשלומים", [
    "☐ מומלץ להביא מזומן בסכום של 10,000–20,000 ין יפני.",
    "☐ ניתן לבצע המרת מטבע בשדה התעופה — אין הרבה עמדות המרה זמינות בהמשך.",
    "☐ כספומטים זמינים בחנויות נוחות ובתחנות רכבת, אך העמלה גבוהה.",
    "☐ כרטיסי אשראי / דביט מתקבלים בחנויות גדולות — חשוב לזכור את הקוד הסודי ולהביא גם כרטיס פיזי.",
    "☐ מזומן נדרש בחנויות קטנות, בחלק מהמוניות ובחלק מאתרי התיירות.",
    "☐ המטבע המקומי: ין יפני — JPY.",
  ]],
  ["אריזה ולבוש", [
    "☐ קוד לבוש רשמי: גברים — חליפה, ורצוי להחזיק עניבה בהישג יד. נשים — ז׳קט; ללא חולצות ללא שרוולים.",
    "☐ נעליים סגורות.",
    "☐ גרביים בתיק יד.",
    "☐ מזג האוויר בחורף — כ־5–12 מעלות במהלך היום.",
    "☐ מעיל ושכבות חמות.",
    "☐ נעלי הליכה נוחות.",
    "☐ מטריית נסיעות — אופציונלי.",
    "☐ שקע חשמל מסוג A, מתח 100V.",
  ]],
  ["להזמין מראש", [
    "☐ השכרת Wi-Fi נייד או כרטיס SIM — ניתן לאסוף בשדה התעופה.",
    "::חברה מומלצת: https://japan-wireless.com",
    "☐ Wi-Fi חינם זמין במלונות, אך מוגבל מאוד במרחבים ציבוריים.",
    "☐ כרטיסי ביקור.",
  ]],
  ["המלצות כלליות", [
    "☐ להקפיד על עמידה בזמנים — להגיע מוקדם.",
    "☐ שימוש בטלפון במרחב הציבורי צריך להיות שקט.",
    "☐ יש להסיר נעליים במקדשים, בכניסה לחדרי מלון מסוימים ובחלק מהמסעדות.",
    "☐ מצופה להתנהגות מנומסת ולשפת גוף מכבדת.",
    "☐ מומלץ להביא מתנות תודה קטנות לביקורים רשמיים.",
  ]],
];

const avoid = [
  ["Formal Visits", ["Do not arrive late.", "Do not use your phone during meetings.", "Do not dress casually.", "Do not forget your name tag."]],
  ["Public Etiquette", ["Do not speak loudly in public.", "Do not eat while walking.", "Smoke only in marked areas.", "Avoid pointing with fingers."]],
  ["Money & Connectivity", ["Do not rely only on credit cards.", "Do not count on free public Wi‑Fi.", "Do not leave tips; it is not customary."]],
  ["Conversation & Gifts", ["Avoid sensitive political topics.", "Avoid being overly direct.", "Do not bring oversized or perishable gifts."]],
];

const avoidHe = [
  ["ביקורים רשמיים", [
    "אל תאחרו — עמידה בזמנים היא חיונית.",
    "אל תשתמשו בטלפון ואל תבדקו אותו במהלך פגישות.",
    "הימנעו מדיבור או משימוש במכשירים במהלך מצגות.",
    "אל תתלבשו באופן יומיומי מדי — ללא גופיות; יש לכפתר את החולצה.",
    "אל תשלבו רגליים ואל תישבו ברישול במהלך פגישות רשמיות.",
    "אל תשכחו לענוד את תג השם בכל עת.",
  ]],
  ["נימוסים במרחב הציבורי", [
    "אל תדברו בקול רם ואל תשתמשו במחוות מוגזמות במרחב הציבורי.",
    "אל תאכלו או תשתו בזמן הליכה במרחב הציבורי.",
    "אל תתעלמו ממרחב אישי ומכללי נימוס במרחב הציבורי.",
    "אל תעשנו ברחוב — רק באזורים המיועדים לעישון.",
    "הימנעו מדיבור בקול רם במרחבים ציבוריים.",
    "הימנעו מהבעת רגשות חזקים או תסכול במרחב הציבורי.",
    "הימנעו מאכילה או שתייה תוך כדי הליכה.",
    "הימנעו מהצבעה באצבע — השתמשו בכף יד פתוחה.",
  ]],
  ["כסף וקישוריות", [
    "אל תסתמכו רק על כרטיסי אשראי — החזיקו מעט ין במזומן.",
    "אל תבנו על Wi-Fi חינמי — היערכו מראש עם SIM או Wi-Fi נייד.",
    "הימנעו מהסתמכות על Wi-Fi ציבורי — הביאו SIM או Wi-Fi נייד.",
    "אל תשאירו טיפ או עודף קטן במסעדות או בקופות — זה לא מקובל.",
  ]],
  ["שיחה ומתנות", [
    "אל תביאו מתנות גדולות מדי, מתכלות או לא רשמיות מדי.",
    "אל תעלו נושאים רגישים, למשל פוליטיקה, ללא הקשר מתאים.",
    "הימנעו מישירות יתר או מעימותים.",
  ]],
];

const dayPhotos = {};

const dayMaps = {};

let currentDayIndex = 0;

const byId = (id) => document.getElementById(id);

function runTests() {
  console.assert(days.length === 8, "Expected 8 program days");
  console.assert(days[0].title.indexOf("Arrival") !== -1, "Day 1 should be arrival in Tokyo");
  console.assert(days[0].program[0][0] === "11:40", "Day 1 should arrive at 11:40");
  console.assert(days[7].title.indexOf("Departure") !== -1, "Day 8 should include departure");
  console.assert(days[7].program[days[7].program.length - 1][0] === "17:20", "Day 8 flight should depart at 17:20");
  console.assert(!dayPhotos[days[0].title], "Days without photos should not force old images");
  console.assert(!dayMaps[days[0].title], "Days without maps should not force old maps");
  console.assert(prep.length >= 1 && avoid.length >= 1, "Preparation and avoid pages should have content");
  ["overview", "schedule", "location", "notes", "tips"].forEach((name) => {
    console.assert(Boolean(byId(`section-${name}`)), `Missing #section-${name}`);
    console.assert(Boolean(byId(`m-section-${name}`)), `Missing #m-section-${name}`);
  });
}

function getDesktopScroller() {
  if (
    document.documentElement.classList.contains("is-embedded") &&
    !document.documentElement.classList.contains("is-mobile-embed")
  ) {
    return document.querySelector(".app > main") || document.scrollingElement || document.documentElement;
  }
  return document.scrollingElement || document.documentElement;
}

function scrollDesktopScroller(top, behavior) {
  const scroller = getDesktopScroller();
  if (scroller && typeof scroller.scrollTo === "function") {
    scroller.scrollTo({ top: top, behavior: behavior || "auto" });
  }
  window.scrollTo({ top: top, behavior: behavior || "auto" });
}

function scrollDayViewToTop() {
  scrollDesktopScroller(0, "smooth");

  const mobileContent = document.querySelector(".m-content");
  if (mobileContent) {
    mobileContent.scrollTo({ top: 0, behavior: "smooth" });
  }
  keepParentTop();
}

function setCurrentDay(index) {
  const nextIndex = Math.max(0, Math.min(days.length - 1, index));
  if (nextIndex === currentDayIndex) return;

  currentDayIndex = nextIndex;
  render();
  scrollDayViewToTop();
}

function renderDateStrip() {
  byId("dateStrip").innerHTML = days
    .map(
      (day, index) => `
        <button class="date-btn ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button">
          <span>
            <span class="date-week">${day.w}</span>
            <span class="date-num">${day.d}</span>
          </span>
        </button>
      `
    )
    .join("");

}

function renderDayMap(frameId, day) {
  const frame = byId(frameId);
  const iframe = frame.querySelector("iframe");
  const map = dayMaps[day.title];

  if (map) {
    frame.hidden = false;
    iframe.src = map.src;
    iframe.title = map.title;
  } else {
    frame.hidden = true;
    iframe.removeAttribute("src");
  }
}

function splitSchedulePlan(plan) {
  if (!Array.isArray(plan) || plan.length === 0) {
    return { rows: [], embeds: [] };
  }

  return {
    rows: plan.filter((item) => Array.isArray(item)),
    embeds: plan.filter((item) => item && typeof item === "object" && !Array.isArray(item) && item.embed),
  };
}

function isExternalEmbedUrl(src) {
  return /^https?:\/\//i.test(src);
}

function isImageEmbed(src) {
  return /\.(png|jpe?g|gif|webp|svg)(\?|#|$)/i.test(src);
}

function resolveScheduleEmbedUrl(src) {
  if (!isExternalEmbedUrl(src)) {
    return renderScheduleEmbedUrl(src);
  }

  const lumaPageMatch = src.match(/^https?:\/\/(?:www\.)?luma\.com\/([a-z0-9-]+)\/?$/i);
  if (lumaPageMatch) {
    return `https://luma.com/embed/event/${lumaPageMatch[1]}/simple`;
  }

  return src;
}

function getEmbedAspectRatio(src) {
  return /luma\.com\/embed\//i.test(resolveScheduleEmbedUrl(src))
    ? lumaEmbedAspectRatio
    : pdfEmbedAspectRatio;
}

function renderScheduleEmbedUrl(src) {
  const params = "toolbar=0&navpanes=0&page=1&view=Fit";
  return src.includes("#") ? src : `${src}#${params}`;
}

function resetScheduleEmbedFrame(iframe) {
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.transform = "";
  iframe.style.transformOrigin = "";
}

function resizeScheduleEmbeds() {
  document.querySelectorAll(".timeline-plan-embed").forEach((embed) => {
    const iframe = embed.querySelector("iframe");
    const width = embed.clientWidth;
    if (!width) return;

    const aspectRatio = Number(embed.dataset.embedAspect) || lumaEmbedAspectRatio;
    embed.style.height = `${Math.round(width * aspectRatio)}px`;
    if (iframe) resetScheduleEmbedFrame(iframe);
  });
}

function bindScheduleEmbedResize() {
  document.querySelectorAll('.timeline-plan-embed iframe:not([data-resize-bound="true"])').forEach((iframe) => {
    iframe.dataset.resizeBound = "true";
    iframe.addEventListener("load", resizeScheduleEmbeds);
  });
}

function renderSchedulePlanBlock(plan, { mobile = false } = {}) {
  const { rows, embeds } = splitSchedulePlan(plan);
  if (!rows.length && !embeds.length) return "";

  const rowHtml = rows
    .map((row) => {
      const [time, title, label] = row;

      if (time === "::") {
        return `
          <div class="timeline-plan-subhead">
            <strong>${title}</strong>
            ${label ? `<p>${label}</p>` : ""}
          </div>
        `;
      }

      if (!time) {
        return `
          <div class="timeline-plan-row timeline-plan-row--meta">
            <div class="timeline-plan-body">
              <strong>${title}</strong>
              <p>${label}</p>
            </div>
          </div>
        `;
      }

      return `
        <div class="timeline-plan-row">
          <div class="timeline-plan-time">${time}</div>
          <div class="timeline-plan-body">
            <strong>${title}</strong>
            ${label ? `<p>${label}</p>` : ""}
          </div>
        </div>
      `;
    })
    .join("");

  const embedHtml = embeds
    .map((item) => {
      const title = item.title || "Invitation";

      if (isImageEmbed(item.embed)) {
        return `
          <div class="timeline-plan-image">
            <img src="${item.embed}" alt="${title}" loading="lazy" decoding="async" />
          </div>
        `;
      }

      const embedSrc = resolveScheduleEmbedUrl(item.embed);
      const aspectRatio = getEmbedAspectRatio(item.embed);

      return `
        <div class="timeline-plan-embed" data-embed-aspect="${aspectRatio}">
          <iframe src="${embedSrc}" title="${title}" loading="lazy"></iframe>
        </div>
      `;
    })
    .join("");

  return `<div class="timeline-plan">${rowHtml}${embedHtml}</div>`;
}

function renderScheduleBadge(link) {
  if (!link) return "";

  return `<a class="badge badge-link" href="${link}" target="_blank" rel="noopener noreferrer">Website Link</a>`;
}

function mobileScheduleHasDetails(entry) {
  const [, , label, plan, link] = entry;
  if (link) return true;
  if (label && String(label).trim()) return true;
  if (!Array.isArray(plan) || plan.length === 0) return false;

  const { rows, embeds } = splitSchedulePlan(plan);
  return rows.length > 0 || embeds.length > 0;
}

function renderMobileScheduleEntry(entry) {
  const [time, title, label, plan, link] = entry;
  const hasDetails = mobileScheduleHasDetails(entry);
  const planHtml = hasDetails ? renderSchedulePlanBlock(plan, { mobile: true }) : "";
  const badgeHtml = renderScheduleBadge(link);
  const labelHtml = label && String(label).trim() ? `<p class="m-schedule-item__label">${label}</p>` : "";

  const headContent = `
    <span class="m-schedule-item__head">
      <strong>${title}</strong>
      <small>${time}</small>
    </span>
  `;

  if (!hasDetails) {
    return `
      <div class="m-schedule-item m-schedule-item--static">
        <div class="m-schedule-item__toggle m-schedule-item__toggle--static">
          ${headContent}
        </div>
      </div>
    `;
  }

  return `
    <div class="m-schedule-item">
      <button class="m-schedule-item__toggle" type="button" aria-expanded="false">
        ${headContent}
        <span class="glance-arrow" aria-hidden="true">›</span>
      </button>
      <div class="m-schedule-item__details" hidden>
        ${labelHtml}
        ${planHtml}
        ${badgeHtml ? `<div class="m-schedule-item__actions">${badgeHtml}</div>` : ""}
      </div>
    </div>
  `;
}

function toggleMobileScheduleItem(button) {
  const item = button.closest(".m-schedule-item");
  const details = item?.querySelector(".m-schedule-item__details");
  if (!item || !details) return;

  const isOpen = item.classList.toggle("is-open");
  button.setAttribute("aria-expanded", String(isOpen));
  details.hidden = !isOpen;

  if (isOpen) {
    bindScheduleEmbedResize();
    scheduleEmbedResize();
  }
}

function renderScheduleEntry(entry) {
  const [time, title, label, plan, link] = entry;
  const planHtml = renderSchedulePlanBlock(plan);
  const groupClass = planHtml ? " timeline-row--group" : "";
  const badgeHtml = renderScheduleBadge(link);

  return `
    <div class="timeline-row${groupClass}">
      <div class="time">${time}</div>
      <div>●</div>
      <div>
        <h4>${title}</h4>
        ${label ? `<p>${label}</p>` : ""}
        ${planHtml}
      </div>
      ${badgeHtml}
    </div>
  `;
}

function getDayNotes(day) {
  return day.notesExtra ? `${day.theme}\n\n${day.notesExtra}` : day.theme;
}

function renderDesktopDay(day) {
  const sideDay = byId("sideDay");
  const sideDate = byId("sideDate");
  if (sideDay) sideDay.textContent = `DAY ${currentDayIndex + 1}`;
  if (sideDate) sideDate.textContent = `${formatWeekday(day.w)}, ${day.d}`;
  byId("title").textContent = day.title;
  byId("theme").textContent = day.theme;
  byId("tipText").textContent = day.tip;
  byId("dayLocation").textContent = day.city;
  renderDayMap("dayLocationMap", day);
  byId("dayNotes").textContent = getDayNotes(day);

  const photoEl = byId("dayPhoto");
  const overviewEl = photoEl.closest(".overview");
  const photoUrl = dayPhotos[day.title];

  if (photoUrl) {
    photoEl.hidden = false;
    overviewEl.classList.remove("overview--no-photo");
    photoEl.style.background = `
      linear-gradient(135deg, rgba(33, 79, 99, 0.15), rgba(33, 79, 99, 0.03)),
      url("${photoUrl}") center / cover
    `;
  } else {
    photoEl.hidden = true;
    overviewEl.classList.add("overview--no-photo");
    photoEl.style.background = "";
  }

  const highlightsEl = byId("highlights");
  highlightsEl.classList.toggle("highlights--5", day.items.length === 5);
  highlightsEl.innerHTML = day.items
    .map(
      ([title, text, icon]) => `
        <div class="highlight">
          <div class="hi-icon">${icon}</div>
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
      `
    )
    .join("");

  byId("scheduleList").innerHTML = day.program.map((entry) => renderScheduleEntry(entry)).join("");
  bindScheduleEmbedResize();
  scheduleEmbedResize();
}

function renderMobileDay(day) {
  const dayLabel = `DAY ${currentDayIndex + 1}, ${formatWeekday(day.w)}, ${day.d}`;

  byId("mHeadDay").textContent = dayLabel;
  byId("mDayTitle").textContent = day.title;
  byId("mTheme").textContent = day.theme;

  byId("mDaysRow").innerHTML = days
    .map(
      (entry, index) => `
        <button class="m-date ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button" aria-label="${entry.w} ${entry.d}">
          ${entry.w}<br><b>${entry.d}</b>
        </button>
      `
    )
    .join("");

  byId("mSchedule").innerHTML = day.program.map((entry) => renderMobileScheduleEntry(entry)).join("");
  bindScheduleEmbedResize();
  scheduleEmbedResize();

  byId("mLocation").textContent = day.city;
  renderDayMap("mLocationMap", day);
  byId("mNotes").textContent = getDayNotes(day);
  byId("mTip").textContent = day.tip;

  scrollMobileDateIntoView();
}

function scrollMobileDateIntoView() {
  const activeDate = document.querySelector("#mDaysRow .m-date.active");
  if (!activeDate) return;

  activeDate.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

function renderGuides() {
  byId("prepGrid").innerHTML = prep.map(renderGuideCard).join("");
  byId("prepGridHe").innerHTML = prepHe.map(renderGuideCard).join("");
  byId("avoidGrid").innerHTML = avoid.map(renderGuideCard).join("");
  byId("avoidGridHe").innerHTML = avoidHe.map(renderGuideCard).join("");
}

function linkifyGuideText(text) {
  return text.replace(/https?:\/\/[^\s<]+/g, (url) => {
    const clean = url.replace(/[),.;]+$/, "");
    return `<a href="${clean}" target="_blank" rel="noopener">${clean}</a>`;
  });
}

function renderGuideCard([title, items]) {
  const listItems = items
    .map((item) => {
      if (item.startsWith("::")) {
        return `<li class="guide-subhead">${linkifyGuideText(item.slice(2))}</li>`;
      }
      return `<li>${linkifyGuideText(item)}</li>`;
    })
    .join("");

  return `
    <article class="guide-card">
      <h3>${title}</h3>
      <ul>${listItems}</ul>
    </article>
  `;
}

function setProgramNavActive(section) {
  document.querySelectorAll(".nav-program [data-section]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === section);
  });
}

function goToDaySection(section) {
  const name = section === "day" ? "overview" : section;
  setProgramNavActive(name);
  if (window.matchMedia("(max-width: 1050px)").matches || document.documentElement.classList.contains("is-mobile-embed")) {
    scrollToMobileSection(name);
  } else {
    scrollToDaySection(name);
  }
}

function resetPanelNav() {
  setProgramNavActive("overview");
}

function scheduleEmbedResize() {
  resizeScheduleEmbeds();
  requestAnimationFrame(resizeScheduleEmbeds);
}

function render() {
  const day = days[currentDayIndex];

  renderDateStrip();
  renderDesktopDay(day);
  renderMobileDay(day);
  resetPanelNav();
}

function formatWeekday(day) {
  return `${day[0]}${day.slice(1).toLowerCase()}`;
}

function showPage(pageName) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === `page-${pageName}`);
  });

  document.querySelectorAll("[data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });

  const subpageTitles = {
    prep: "Preparation",
    avoid: "What to Avoid",
    contact: "Contact",
    travelog: "Travelog",
  };
  const subpageHead = document.getElementById("mSubpageHead");
  const subpageTitle = document.getElementById("mSubpageTitle");
  if (subpageHead && subpageTitle) {
    if (subpageTitles[pageName]) {
      subpageTitle.textContent = subpageTitles[pageName];
      subpageHead.hidden = false;
      document.body.classList.add("m-subpage-view");
    } else {
      subpageHead.hidden = true;
      document.body.classList.remove("m-subpage-view");
    }
  }

  window.scrollTo({ top: 0, behavior: "auto" });
  scrollDesktopScroller(0, "auto");
  keepParentTop();

  const mobileContent = document.querySelector(".m-content");
  if (mobileContent) {
    mobileContent.scrollTo({ top: 0, behavior: "auto" });
  }
}

function setPanelActiveButton(button) {
  document.querySelectorAll(".panel .side-menu button, .panel .quick-link").forEach((item) => {
    item.classList.remove("active");
  });

  button.classList.add("active");
}

function updateDesktopScrollOffset() {
  const header = document.querySelector("header.desktop-only");
  const dateStrip = document.querySelector(".date-strip");
  if (!header) return;
  const headerH = header.offsetHeight;
  document.documentElement.style.setProperty("--header-height", headerH + "px");
  if (!dateStrip) return;
  document.documentElement.style.setProperty(
    "--desktop-scroll-offset",
    `${headerH + dateStrip.offsetHeight}px`
  );
}

function keepParentTop() {
  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "forumetro:keep-top" }, "*");
    }
  } catch (e) {}
}

function scrollIframeTo(el, extra) {
  if (!el) return;
  updateDesktopScrollOffset();
  const scroller = getDesktopScroller();
  const header = document.querySelector("header.desktop-only");
  const dateStrip = document.querySelector(".date-strip");
  const headerPinned =
    document.documentElement.classList.contains("is-embedded") &&
    !document.documentElement.classList.contains("is-mobile-embed");
  const offset =
    (!headerPinned && header && header.offsetHeight ? header.offsetHeight : 0) +
    (dateStrip && dateStrip.offsetHeight ? dateStrip.offsetHeight : 0) +
    (typeof extra === "number" ? extra : 12);
  const y = scroller.scrollTop + el.getBoundingClientRect().top - offset;
  scroller.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  keepParentTop();
}

function scrollToDaySection(sectionName) {
  if (sectionName === "overview") {
    scrollDayViewToTop();
    return;
  }

  const section = document.getElementById(`section-${sectionName}`);
  if (!section) return;

  const scrollTarget =
    section.querySelector(".day-section-title") || section.querySelector(".tip") || section;

  requestAnimationFrame(() => {
    scrollIframeTo(scrollTarget);
  });
}

function setMobileActiveButton(button) {
  document.querySelectorAll(".mobile-side-menu button").forEach((item) => {
    item.classList.remove("active");
  });

  button.classList.add("active");
}

function getMobileSectionScrollTop(section, mobileContent) {
  return (
    mobileContent.scrollTop +
    section.getBoundingClientRect().top -
    mobileContent.getBoundingClientRect().top
  );
}

function scrollToMobileSection(sectionName) {
  const mobileContent = document.querySelector(".m-content");
  const section = document.getElementById(`m-section-${sectionName}`);
  if (!section) return;

  const runScroll = () => {
    if (!mobileContent) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      keepParentTop();
      return;
    }

    if (sectionName === "overview") {
      mobileContent.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const top = Math.max(0, getMobileSectionScrollTop(section, mobileContent));
    mobileContent.scrollTo({ top, behavior: "smooth" });
  };

  // Wait a frame so layout/maps settle, then scroll
  requestAnimationFrame(() => {
    requestAnimationFrame(runScroll);
  });
}

function goBackToDelegationAbout() {
  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "forumetro:go-about" }, "*");
      return;
    }
  } catch (e) {}
  window.location.href = "../index.html";
}

function initEvents() {
  document.addEventListener("click", (event) => {
    const homeButton = event.target.closest(".brand-home");
    if (homeButton) {
      event.preventDefault();
      goBackToDelegationAbout();
      return;
    }

    const pageButton = event.target.closest(".nav-useful [data-page], .back[data-page]");
    if (pageButton) {
      showPage(pageButton.dataset.page);
      return;
    }

    const dayButton = event.target.closest("[data-day]");
    if (dayButton) {
      setCurrentDay(Number(dayButton.dataset.day));
      return;
    }

    const sectionButton = event.target.closest(".nav-program [data-section]");
    if (sectionButton?.dataset.section) {
      goToDaySection(sectionButton.dataset.section);
      return;
    }

    const scheduleToggle = event.target.closest(".m-schedule-item__toggle:not(.m-schedule-item__toggle--static)");
    if (scheduleToggle) {
      toggleMobileScheduleItem(scheduleToggle);
    }
  });

}

runTests();
renderGuides();
(function startFromQuery() {
  try {
    var params = new URLSearchParams(window.location.search);
    var startPage = params.get("page");
    if (startPage === "prep" || startPage === "avoid" || startPage === "contact" || startPage === "travelog") {
      showPage(startPage);
      return;
    }
  } catch (e) {}
  render();
})();
updateDesktopScrollOffset();
initEvents();
window.addEventListener("message", (event) => {
  if (!event.data) return;
  if (event.data.type === "forumetro:line-anchor") applyLineAnchor(event.data);
  if (event.data.type === "forumetro:go-section" && event.data.section) goToDaySection(event.data.section);
  if (event.data.type === "forumetro:go-page" && event.data.page) showPage(event.data.page);
});

var lastLineAnchor = null;

function setStationPlate(btn, letter, id) {
  if (!btn) return;
  var line = btn.querySelector(".nav-mark-line");
  var num = btn.querySelector(".nav-mark-id");
  if (line) line.textContent = letter;
  if (num) num.textContent = id;
}

function applyBranchPlates(useful) {
  var programNav = document.querySelector(".nav-program");
  var usefulNav = document.querySelector(".nav-useful");
  var title = document.getElementById("embedPageTitle");
  if (title) title.textContent = useful ? "Useful Information" : "Program";
  if (programNav) programNav.hidden = !!useful;
  if (usefulNav) usefulNav.hidden = !useful;
  var nav = useful ? usefulNav : programNav;
  if (!nav) return;
  if (useful) {
    setStationPlate(nav.querySelector('[data-page="prep"]'), "Z", "05");
    setStationPlate(nav.querySelector('[data-page="avoid"]'), "C", "06");
    setStationPlate(nav.querySelector('[data-page="contact"]'), "M", "07");
    setStationPlate(nav.querySelector('[data-page="travelog"]'), "T", "08");
  }
}

function applyLineAnchor(data) {
  var useful = data && data.anchor === "useful";
  var nav = document.querySelector(useful ? ".topbar .nav-useful" : ".topbar .nav-program") || document.querySelector(".topbar .nav");
  var topbar = document.querySelector(".topbar");
  if (window.matchMedia("(max-width: 1050px)").matches || document.documentElement.classList.contains("is-mobile-embed")) {
    if (nav) {
      nav.classList.remove("line-anchored", "line-anchored-reverse", "line-anchored-useful", "line-anchored-end");
      nav.style.marginLeft = "";
      nav.style.transform = "";
      nav.style.flexDirection = "";
      nav.style.gap = "";
    }
    if (topbar) {
      topbar.classList.remove("line-connected");
    }
    applyBranchPlates(useful);
    return;
  }
  var targetBtn = nav && (useful
    ? nav.querySelector('[data-page="prep"]')
    : nav.querySelector('[data-section="overview"]'));
  if (!nav || !topbar || !targetBtn || !data || typeof data.x !== "number") return;
  lastLineAnchor = data;
  applyBranchPlates(useful);
  nav.classList.add("line-anchored");
  nav.classList.toggle("line-anchored-useful", useful);
  nav.classList.remove("line-anchored-end", "line-anchored-reverse");
  topbar.classList.add("line-connected");
  topbar.style.setProperty("--drop-color", useful ? "#8F76D6" : "#009BBF");
  topbar.style.setProperty("--drop-x", data.x + "px");
  nav.style.flex = "0 0 auto";
  nav.style.width = "max-content";
  nav.style.maxWidth = "none";
  nav.style.flexDirection = "row";
  nav.style.marginLeft = "0px";
  nav.style.transform = "none";
  nav.style.gap = "";
  void nav.offsetWidth;
  var mark = targetBtn.querySelector(".nav-mark") || targetBtn;
  var origin = document.documentElement.getBoundingClientRect().left;
  function markCenter() {
    return mark.getBoundingClientRect().left + mark.offsetWidth / 2 - origin;
  }
  function navRight() {
    return nav.getBoundingClientRect().right - origin;
  }
  var target = data.x;
  var vw = document.documentElement.clientWidth;
  var spaceRight = vw - target - 12;
  if (navRight() - markCenter() > spaceRight) {
    var gaps = Math.max(1, nav.querySelectorAll("button").length - 1);
    var gapNow = parseFloat(window.getComputedStyle(nav).gap) || 32;
    nav.style.gap = Math.max(10, gapNow - (navRight() - markCenter() - spaceRight) / gaps) + "px";
    void nav.offsetWidth;
  }
  if (navRight() - markCenter() > spaceRight + 4) {
    nav.style.flexDirection = "row-reverse";
    nav.style.gap = "";
    nav.classList.add("line-anchored-reverse");
    void nav.offsetWidth;
  }
  var shift = target - markCenter();
  nav.style.marginLeft = shift + "px";
  void nav.offsetWidth;
  if (Math.abs(target - markCenter()) > 4) {
    nav.style.transform = "translateX(" + (target - markCenter()) + "px)";
  }
  topbar.style.setProperty("--drop-x", markCenter() + "px");
  try {
    var markRect = mark.getBoundingClientRect();
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: "forumetro:line-join",
        x: markRect.left + markRect.width / 2,
        y: markRect.top + markRect.height / 2,
        anchor: useful ? "useful" : "day"
      }, "*");
    }
  } catch (e) {}
}

window.applyForumetroLineAnchor = applyLineAnchor;

try {
  if (new URLSearchParams(window.location.search).get("branch") === "useful") {
    applyBranchPlates(true);
    if (!document.documentElement.classList.contains("is-mobile-embed") && !window.matchMedia("(max-width: 1050px)").matches) {
      var usefulNav = document.querySelector(".topbar .nav-useful");
      if (usefulNav) usefulNav.classList.add("line-anchored", "line-anchored-useful");
    }
  }
} catch (e) {}

window.addEventListener("resize", () => {
  updateDesktopScrollOffset();
  resizeScheduleEmbeds();
  if (lastLineAnchor) applyLineAnchor(lastLineAnchor);
});
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", function () {
    if (lastLineAnchor) applyLineAnchor(lastLineAnchor);
  });
}
