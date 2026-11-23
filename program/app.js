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
    title: "Welcome to Tokyo",
    city: "Narita Airport → Hotel / LUMIVEIL TOKYO",
    theme:
      "After arrival and hotel check-in, the opening presentation and a Tokyo introduction take place at LUMIVEIL TOKYO, followed by dinner. The evening is free, with an optional orientation walk at Shinbashi/Shiodome station.",
    tip: "Keep your passport easy to reach at Narita. The group leaves the hotel lobby at 16:00.",
    notesExtra:
      "Airport arrival and traffic may shift the coach transfer and hotel check-in. The opening and dinner are at LUMIVEIL TOKYO.",
    items: [
      ["ARRIVAL", "Narita Airport, 11:40", ICONS.plane],
      ["CHECK-IN", "Hotel, 15:00", ICONS.suitcase],
      ["OPENING", "LUMIVEIL TOKYO, 16:30–18:00", ICONS.presentation],
      ["DINNER", "Buffet, 18:00–20:00", ICONS.dinner],
      ["EVENING", "Optional walk, Shinbashi/Shiodome, 20:00", ICONS.stroll],
    ],
    program: [
      ["11:40", "Arrival at Narita International Airport", "Immigration, baggage collection and meeting the local coordination team"],
      ["13:00", "Coach transfer to Tokyo and lunch", "Narita Airport toward the hotel"],
      ["15:00", "Hotel check-in", ""],
      ["16:00", "Departure from the hotel lobby", "LUMIVEIL TOKYO"],
      ["16:30–17:10", "Opening activity and presentation", "Delegation team. Venue: LUMIVEIL TOKYO"],
      ["17:10–18:00", "Tokyo introduction", "Ofer Bilik. Venue: LUMIVEIL TOKYO"],
      ["18:00–20:00", "Buffet dinner", "LUMIVEIL TOKYO"],
      ["20:00", "Free evening (optional orientation walk at the Shinbashi/Shiodome station)", ""],
    ],
    lines: ["oedo", "asakusa", "ginza"],
    stations: ["shimbashi"],
    models: [
      {
        src: "../models/Shinbashi-Shiodome-city-model.glb?v=3",
        title: "Shimbashi and Shiodome",
        titleJa: "新橋・汐留",
        titleHe: "שינבאשי ושיודומה",
      },
    ],
  },
  {
    w: "TUE",
    d: "15.12",
    m: "DEC",
    title: "Tokyo's Rail Network, Stations and Operations",
    city: "Toranomon Hills and Tokyo Metro",
    theme:
      "The morning looks at how Tokyo's rail network was planned and financed, then follows a station from platform to street at Toranomon Hills. The afternoon is a technical session with Tokyo Metro, then a short visit to Tokyo Station.",
    tip: "The morning lecture is at Villa Fontaine Grand Tokyo Shiodome. The Toranomon Hills walk follows the route from the platform to the street.",
    notesExtra: "Lunch is still to be confirmed. The Tokyo Metro session is at Vision Center Tokyo Toranomon.",
    items: [
      ["LECTURE", "Professor Shigeru Morichi, 09:00–10:00", ICONS.presentation],
      ["STATION", "Toranomon Hills with Kazufumi Noyaki, 10:30–12:30", ICONS.train],
      ["TOKYO METRO", "Vision Center Toranomon, 14:00–16:00", ICONS.hub],
      ["TOKYO STATION", "Art walk and time to look around, 16:30–17:45", ICONS.museum],
    ],
    program: [
      ["08:30–09:00", "Morning briefing", ""],
      [
        "09:00–10:00",
        "Tokyo's Metropolitan Railway Network: Evolution, Structure and Urban Development",
        "Lecture · Professor Shigeru Morichi. English. Venue: Villa Fontaine Grand Tokyo Shiodome. Professor Morichi specializes in transportation policy and national development planning. He began his career at Japanese National Railways and later served as president of the Institute for Transport Policy Studies.",
        [
          ["", "The roles of public agencies and private railways in Tokyo's growth", ""],
          ["", "Planning new metro lines, financing construction and recovering costs over time", ""],
          ["", "Adapting Tokyo's railway development model to other cities", ""],
        ],
      ],
      [
        "10:00–10:30",
        "Transfer to Toranomon Hills Station",
        "",
      ],
      [
        "10:30–12:30",
        "Toranomon Hills Station: Architecture, Engineering and Urban Redevelopment",
        "Expert-led station walk · Kazufumi Noyaki. Japanese, with interpretation. Kazufumi Noyaki formerly led Tokyo Metro's department for construction and infrastructure improvements. At Toranomon Hills, he will trace the route from platform to street to show how the station fits into the surrounding redevelopment.",
        [
          ["", "Tunnelling and enlarging underground stations in dense urban areas", ""],
          ["", "Linking station concourses to nearby buildings and streets", ""],
          ["", "Maintaining train service and pedestrian access through each construction phase", ""],
        ],
      ],
      [
        "12:30–13:30",
        "Lunch",
        "Venue to be confirmed",
      ],
      ["13:30–14:00", "Transfer to Vision Center Tokyo Toranomon", ""],
      [
        "14:00–16:00",
        "Passenger Circulation, Station Operations and Overnight Maintenance",
        "Technical session · Tokyo Metro. Japanese, with interpretation. Venue: Vision Center Tokyo Toranomon. Tokyo Metro's station teams manage passenger flows throughout the operating day. A representative will explain how staff anticipate crowding and schedule maintenance between the last train and the first.",
        [
          ["", "Station staff responsibilities throughout the operating day", ""],
          ["", "Managing passenger flows at ticket gates, on platforms and through transfer passages", ""],
          ["", "Scheduling overnight engineering work before the first train", ""],
        ],
      ],
      ["16:00–16:30", "Transfer from Toranomon Hills to Tokyo Station", ""],
      ["16:30–17:00", "Guided art walk", "Tokyo Station"],
      ["17:00–17:45", "Independent exploration", "Tokyo Station"],
      ["17:45–18:00", "Daily recap", ""],
    ],
    lines: ["ginza", "hibiya"],
    stations: ["toranomon", "ginza", "tokyo"],
    models: [
      {
        src: "../models/Toranomon-city-model-complete.glb?v=1",
        title: "Toranomon Hills",
        titleJa: "虎ノ門ヒルズ",
        titleHe: "טורנומון הילס",
      },
      {
        src: "../models/Tokyo-Hibiya-Ginza.glb?v=3",
        title: "Hibiya and Ginza",
        titleJa: "日比谷・銀座",
        titleHe: "היביה וגינזה",
      },
    ],
  },
  {
    w: "WED",
    d: "16.12",
    m: "DEC",
    title: "Shibuya: Planning, Tokyu and the Daily Commute",
    city: "Shibuya Station and Tokyu's suburban lines",
    theme:
      "The day stays around Shibuya Station: participatory planning with the ward, Tokyu's combination of railways, property and retail, and a walk along a suburban commute.",
    tip: "Lunch is at Toki no Toki on the 6th floor of Shibuya Hikarie. The Tokyu lecture and the station walk are separate.",
    notesExtra: "The morning lecture is at Shibuya Shoko Kaikan, 2nd floor. The Tokyu lecture is in Shibuya Hikarie Conference, Room D.",
    items: [
      ["SHIBUYA CITY", "Machizukuri lecture, 10:00–12:00", ICONS.presentation],
      ["TOKYU", "Lecture 13:30–14:30, station walk 14:30–16:30", ICONS.building],
      ["COMMUTE", "Tatsuya Edakubo, 16:30–18:00", ICONS.train],
    ],
    program: [
      ["08:30–09:00", "Morning briefing", ""],
      ["09:00–10:00", "Transfer from Shiodome to Shibuya", ""],
      [
        "10:00–12:00",
        "Participatory Station-Area Planning",
        "Lecture · Shibuya Ward. Japanese, with interpretation. Venue: Shibuya Shoko Kaikan, 2nd floor, large training room. Shibuya City's Machizukuri Department works with residents and local businesses on neighborhood planning. The session examines how their input shapes streets and public spaces as the station district is rebuilt.",
        [
          ["", "How residents and local businesses participate in neighborhood planning", ""],
          ["", "How community proposals inform the design of streets and public spaces", ""],
          ["", "Working with local businesses to maintain customer access during construction", ""],
        ],
      ],
      [
        "12:00–13:30",
        "Lunch",
        "Toki no Toki, Shibuya Hikarie, 6th floor",
      ],
      [
        "13:30–14:30",
        "Tokyu's Rail, Real Estate and Urban Development",
        "Lecture · Tokyu Corporation. English. Venue: Shibuya Hikarie Conference, Room D. Tokyu combines railway operations with property development and retail. The lecture looks at how this business model shapes redevelopment around one of Tokyo's busiest interchanges.",
        [
          ["", "The town management company's role in coordinating activity across the district", ""],
          ["", "Tokyu's vision for Shibuya Station and the surrounding streets and commercial spaces", ""],
        ],
      ],
      [
        "14:30–16:30",
        "Shibuya Station City and Construction in a Dense Urban Center",
        "Expert-led station walk · Tokyu. English. The walk looks at how construction is phased so trains keep running, streets stay open and businesses remain accessible.",
        [
          ["", "Phasing construction to keep trains running, streets open and businesses accessible", ""],
        ],
      ],
      [
        "16:30–18:00",
        "Station and Neighborhood Life: The Everyday Suburban Commute",
        "Expert-led station walk · Tatsuya Edakubo. Japanese, with interpretation. Railway journalist Tatsuya Edakubo examines suburban rail from the passenger's perspective. The walk follows a commuter's route between station and neighborhood to explore how daily journeys shape local life.",
        [
          ["", "Commuters' daily routines, from the walk to the station to the journey home", ""],
          ["", "Passenger customs on busy platforms and trains, from queueing to boarding a crowded carriage", ""],
          ["", "The station as a neighborhood meeting place and a center for everyday life", ""],
        ],
      ],
      ["18:00–18:15", "Daily recap", ""],
    ],
    lines: ["ginza"],
    stations: ["shibuya"],
    models: [
      {
        src: "../models/Shibuya-city-model-complete.glb?v=1",
        title: "Shibuya",
        titleJa: "Shibuya",
        titleHe: "Shibuya",
      },
    ],
  },
  {
    w: "THU",
    d: "17.12",
    m: "DEC",
    title: "Governing the Metropolis: Public Transport, Planning and Policy",
    city: "Toei, the Tokyo Metropolitan Government, Shinjuku and the Israeli Embassy",
    theme:
      "Toei and the Tokyo Metropolitan Government bring two views of the same city: how a public operator runs its services, and how the metropolitan government coordinates transport planning. The afternoon walks Shinjuku Station's south exit and Busta, then continues to a reception with the Israeli Ambassador and a group discussion.",
    tip: "Lunch is at the Hilton Tokyo. Allow time for security screening before the embassy reception.",
    notesExtra: "The lectures are near Tochomae / Shinjuku. The reception is with the Israeli Ambassador to Japan.",
    items: [
      ["TOEI", "Public operator, 10:00–11:00", ICONS.presentation],
      ["TMG", "Metropolitan planning, 11:00–12:00", ICONS.building],
      ["LUNCH", "Hilton Tokyo, 12:00–13:00", ICONS.dinner],
      ["SHINJUKU", "South Exit and Busta, 13:30–15:00", ICONS.train],
      ["EMBASSY", "Reception, 16:00–17:00", ICONS.embassy],
    ],
    program: [
      ["07:15–08:15", "Breakfast", ""],
      ["08:15–08:45", "Morning briefing", ""],
      ["08:45–09:30", "Transfer to the lecture venue near Tochomae / Shinjuku", ""],
      ["09:30–10:00", "Arrival and introduction", ""],
      [
        "10:00–11:00",
        "The Challenges of a Public Transportation Authority",
        "Lecture · Toei. Japanese, with interpretation. Toei Transportation operates subways and buses for the Tokyo Metropolitan Government. Its representative will discuss what public ownership makes possible and where Toei depends on cooperation with other operators.",
        [
          ["", "The advantages and challenges of running a publicly owned transport network", ""],
          ["", "Coordinating bus and subway services at interchange stations", ""],
          ["", "Working with other railway companies on connections and passenger information", ""],
        ],
      ],
      [
        "11:00–12:00",
        "Metropolitan Transport Planning and Coordination",
        "Lecture · Tokyo Metropolitan Government. Japanese, with interpretation. A metropolitan planning representative will explain how a proposed transport investment moves from a regional priority to a local project. The session follows the decisions that connect railway planning with land use around stations.",
        [
          ["", "The planning hierarchy, from national policy to metropolitan strategy and ward plans", ""],
          ["", "The roles of the metropolitan government, wards and railway operators in advancing a project", ""],
          ["", "Coordinating land use and station access when a project crosses ward boundaries", ""],
        ],
      ],
      [
        "12:00–13:00",
        "Lunch",
        "Hilton Tokyo",
      ],
      ["13:00–13:30", "Transfer to the start of the Shinjuku walk", ""],
      [
        "13:30–15:00",
        "Shinjuku Station's South Exit and Busta Bus Terminal",
        "Expert-led station walk · OC Global. Japanese, with interpretation. The walk traces how former railway land around Shinjuku's South Exit was redeveloped after the privatization of Japanese National Railways. At Busta Shinjuku, participants will follow a passenger's route from the railway station to the highway bus terminal.",
        [
          ["", "Redevelopment of former railway land", ""],
          ["", "Wayfinding between rail platforms and the highway bus terminal", ""],
          ["", "Pedestrian connections across the station district", ""],
        ],
      ],
      ["15:00–16:00", "Transfer to the Israeli Embassy and security screening", ""],
      ["16:00–17:00", "Official reception", "Israeli Ambassador to Japan"],
      ["17:00–18:00", "Group activity", "Discussion, reflection and lessons learned"],
    ],
    lines: ["yamanote"],
    stations: ["shinjuku", "tochomae"],
    models: [
      {
        src: "../models/Shinjuku-city-model.glb?v=3",
        title: "Shinjuku",
        titleJa: "新宿",
        titleHe: "שינג'וקו",
      },
    ],
  },
  {
    w: "FRI",
    d: "18.12",
    m: "DEC",
    title: "Community Planning Along Setagaya's Railway",
    city: "Shimokita Senrogai and Kitami Fureai Plaza",
    theme:
      "Setagaya City presents community planning along the railway, with a walk through Shimokita Senrogai. Odakyu then leads a visit to the public park above the working depot at Kitami.",
    tip: "The morning is at Kitazawa Town Hall, then a walk through Shimokita Senrogai, including BONUS TRACK. Shabbat begins at 16:12.",
    notesExtra: "Lunch is a vegetarian bento. The group returns to the hotel by 16:00.",
    items: [
      ["SETAGAYA", "Lecture 09:30–10:30, walk 10:30–12:00", ICONS.community],
      ["LUNCH", "Vegetarian bento, 12:00–13:00", ICONS.dinner],
      ["KITAMI", "Park above the depot, 14:00–15:00", ICONS.park],
    ],
    program: [
      ["07:00–08:00", "Breakfast", ""],
      ["08:00–08:30", "Morning briefing", ""],
      ["08:30–09:30", "Travel to Kitazawa Town Hall in Setagaya", ""],
      [
        "09:30–10:30",
        "Human-Scale Machizukuri and Community Building",
        "Lecture · Setagaya Ward. Japanese, with interpretation. Kitazawa's community planning section works with residents on machizukuri, or community-led town planning.",
        [
          ["", "Residents' role in Setagaya's neighborhood plans", ""],
        ],
      ],
      [
        "10:30–12:00",
        "Neighborhood Walk through Shimokita Senrogai",
        "Expert-led neighborhood walk · Setagaya Ward Machizukuri team. Japanese, with interpretation. The walk explores how the ward's planning, transport and parks teams approach the reuse of land above the Odakyu railway.",
        [
          ["", "Reuse of former railway land at Shimokita Senrogai", ""],
          ["", "Walking routes, local shops and gathering places at BONUS TRACK", ""],
        ],
      ],
      ["12:00–13:00", "Vegetarian bento lunch", ""],
      ["13:00–14:00", "Transfer to Kitami Fureai Plaza", ""],
      [
        "14:00–15:00",
        "A Public Park Above a Working Depot",
        "Expert-led site visit · Odakyu. Japanese, with interpretation. Odakyu will lead a visit to Kitami Fureai Plaza and the railway depot beneath it. Participants will examine how the park connects to neighborhood streets while the depot continues to operate below.",
        [
          ["", "Park entrances from surrounding streets", ""],
          ["", "The layout of the plaza above the depot", ""],
          ["", "Boundaries between public space and railway operations", ""],
        ],
      ],
      ["15:00–16:00", "Return to the hotel", ""],
      ["16:12", "Shabbat begins", ""],
    ],
    lines: ["oedo", "odakyu"],
    stations: ["shimokitazawa", "higashi-kitazawa", "setagaya-daita", "kitami", "seijogakuen"],
    models: [
      {
        src: "../models/Shimokita-Senrogai-city-model.glb?v=2",
        title: "Shimokita Senrogai",
        titleJa: "下北線路街",
        titleHe: "שימוקיטה סנרוגאי",
      },
      {
        src: "../models/Kita-city-model.glb?v=2",
        title: "Kitami",
        titleJa: "喜多見",
        titleHe: "קיטאמי",
      },
    ],
  },
  {
    w: "SAT",
    d: "19.12",
    m: "DEC",
    title: "Exploring Tokyo: Culture, Public Space and Urban Life",
    city: "Tokyo — independent exploration",
    theme:
      "Today offers time to explore Tokyo independently and experience its historic neighborhoods, landscapes and everyday urban life. Optional visits show how traditional places, commerce and the contemporary city sit side by side.",
    tip: "Breakfast is from 08:00 to 09:00. The day is then free until a group activity at 18:00.",
    notesExtra: "Independent visits are optional. The group activity and its meeting point are still to be confirmed.",
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
        "Independent visits",
        [
          ["", "Hamarikyu Gardens", "Traditional landscape and Tokyo's modern waterfront."],
          ["", "Ginza", "Commercial streets, architecture and public space."],
          ["", "Asakusa / Sensoji Temple", "Historic Tokyo, traditional shopping streets and religious heritage."],
        ],
      ],
      ["18:00", "Group activity", "Details to be confirmed"],
    ],
    lines: ["asakusa"],
    models: [
      {
        src: "../models/Asakusa-city-model.glb?v=1",
        title: "Asakusa",
        titleJa: "浅草",
        titleHe: "אסאקוסה",
      },
      {
        src: "../models/Odaiba-satellite.glb?v=1",
        title: "Odaiba",
        titleJa: "お台場",
        titleHe: "אודאיבה",
      },
      {
        src: "../models/Roppongi-city-model.glb?v=2",
        title: "Roppongi",
        titleJa: "六本木",
        titleHe: "רופונגי",
      },
    ],
  },
  {
    w: "SUN",
    d: "20.12",
    m: "DEC",
    title: "Tokyo's Future: Takanawa Gateway and Closing Reflections",
    city: "Takanawa Gateway City",
    theme:
      "The morning is with JR East at Takanawa Gateway City, first in a discussion and then on a tour of the new station district. Lunch is at Tofuro. The afternoon is The Amazing Race, then the delegation's closing session at Vision Center Tokyo Kyobashi.",
    tip: "Breakfast is from 07:00 to 08:00, with a briefing at 08:00. The closing session runs until 17:30.",
    notesExtra: "Lunch is at Tofuro. The Amazing Race and the closing session meet at Vision Center Tokyo Kyobashi.",
    items: [
      ["TRANSFER", "Takanawa Gateway, 08:30–09:00", ICONS.transfer],
      ["TAKANAWA", "JR East, 09:00–12:00", ICONS.innovation],
      ["LUNCH", "Tofuro, 12:30–13:30", ICONS.dinner],
      ["ACTIVITY", "The Amazing Race, 14:00–15:45", ICONS.event],
      ["CLOSING", "Delegation session, 15:45–17:30", ICONS.panel],
    ],
    program: [
      ["07:00–08:00", "Breakfast", ""],
      ["08:00–08:30", "Morning briefing", ""],
      ["08:30–09:00", "Transfer to Takanawa Gateway", ""],
      [
        "09:00–10:30",
        "Presentations and discussion",
        "JR East. Takanawa Gateway City: future stations and smart urban development.",
      ],
      [
        "10:30–12:00",
        "Takanawa Gateway City",
        "Expert-led site tour · JR East. Japanese, with interpretation. Architecture, station-city integration, pedestrian networks and innovation.",
      ],
      ["12:00–12:30", "Transfer to the city center", ""],
      ["12:30–13:30", "Lunch", "Tofuro"],
      ["13:30–14:00", "Transfer to Vision Center Tokyo Kyobashi", ""],
      ["14:00–15:45", "Group activity: The Amazing Race", ""],
      ["15:45–17:30", "Delegation closing session", "Venue: Vision Center Tokyo Kyobashi"],
    ],
    lines: ["yamanote", "asakusa"],
    models: [
      {
        src: "../models/Takanawa-Gateway-city-model.glb?v=1",
        title: "Takanawa Gateway",
        titleJa: "高輪ゲートウェイ",
        titleHe: "טקאנאווה גייטוויי",
      },
    ],
  },
  {
    w: "MON",
    d: "21.12",
    m: "DEC",
    title: "Accessibility and Station Development in Tokyo's Historic Center",
    city: "Higashi-Ginza, Chūō City, then departure",
    theme:
      "Chūō City looks at station-area development and walking routes in Tokyo's historic center, including the links between Ginza's stations, underground passages and streets, and the conversion of the former KK expressway into public space. The delegation checks out and flies from Narita in the afternoon.",
    tip: "Check-out is from 08:00 to 08:30, overlapping the morning briefing. The coach to Narita leaves at 13:30, and the flight departs at 17:20.",
    notesExtra: "Lunch is at Villa Fontaine Grand Tokyo Shiodome. The morning meeting point is in Higashi-Ginza.",
    items: [
      ["CHŪŌ CITY", "Lecture 09:00–10:00, walk 10:00–11:30", ICONS.stroll],
      ["LUNCH", "Villa Fontaine Shiodome, 12:00–13:00", ICONS.dinner],
      ["DEPARTURE", "Narita, flight at 17:20", ICONS.plane],
    ],
    program: [
      ["07:45–08:15", "Morning briefing", ""],
      ["08:00–08:30", "Check-out", ""],
      ["08:30–09:00", "Transfer to the meeting venue in Higashi-Ginza", ""],
      [
        "09:00–10:00",
        "Station-Area Development, Pedestrian Access and Historic Preservation",
        "Lecture · Chūō City. Chūō City introduces the planning choices involved in redeveloping sites around stations in a historic commercial district.",
      ],
      [
        "10:00–11:30",
        "Station-Area Development, Pedestrian Connections and Historic Urban Character",
        "Guided walk · Chūō City. Japanese, with interpretation. The walk examines how new station entrances, pedestrian routes and public spaces can fit into a district defined by historic streets and buildings, including Ginza's underground passages and the former KK expressway.",
        [
          ["", "Fitting accessible station entrances into the existing street network", ""],
          ["", "Connecting new public spaces to the district's historic commercial streets", ""],
          ["", "Preserving historic buildings and street patterns as station-area sites are redeveloped", ""],
        ],
      ],
      ["11:30–12:00", "Transfer from Yurakucho to the hotel", ""],
      ["12:00–13:00", "Lunch", "Villa Fontaine Grand Tokyo Shiodome"],
      ["13:30", "Coach to Narita", ""],
      ["15:00", "Arrival at Narita International Airport", ""],
      ["17:20", "Flight departure from Narita International Airport", ""],
    ],
    lines: ["asakusa"],
    models: [
      {
        src: "../models/Tokyo-Hibiya-Ginza.glb?v=3",
        title: "Hibiya and Ginza",
        titleJa: "日比谷・銀座",
        titleHe: "היביה וגינזה",
      },
    ],
  },
];

const daysJa = [
  {
    w: "月",
    title: "東京へようこそ",
    city: "成田空港 → ホテル／ルミヴェール東京",
    theme:
      "到着とホテルのチェックインのあと、ルミヴェール東京で開会の発表と東京の紹介を行い、夕食をとります。夜は自由時間で、希望者は新橋・汐留駅のオリエンテーションウォークに参加できます。",
    tip: "成田空港ではパスポートを取り出しやすくしておいてください。16:00にホテルのロビーを出発します。",
    notesExtra:
      "空港到着や道路状況により、貸切バスの移動とホテルのチェックイン時刻が変わることがあります。開会と夕食はルミヴェール東京です。",
    items: [
      ["到着", "成田空港、11:40"],
      ["チェックイン", "ホテル、15:00"],
      ["開会", "ルミヴェール東京、16:30–18:00"],
      ["夕食", "ビュッフェ、18:00–20:00"],
      ["夜", "任意の徒歩、新橋・汐留、20:00"],
    ],
    program: [
      ["11:40", "成田国際空港に到着", "入国審査、手荷物受取、現地運営チームとの合流"],
      ["13:00", "貸切バスで東京へ、昼食", "成田空港からホテル方面へ"],
      ["15:00", "ホテルチェックイン", ""],
      ["16:00", "ホテルロビーを出発", "ルミヴェール東京"],
      ["16:30–17:10", "開会の活動と発表", "視察団。会場：ルミヴェール東京"],
      ["17:10–18:00", "東京の紹介", "オフェル・ビリック。会場：ルミヴェール東京"],
      ["18:00–20:00", "ビュッフェ夕食", "ルミヴェール東京"],
      ["20:00", "自由時間（任意：新橋・汐留駅のオリエンテーションウォーク）", ""],
    ],
  },
  {
    w: "火",
    title: "東京の鉄道網、駅の整備、メトロの運営",
    city: "虎ノ門ヒルズと東京メトロ",
    theme:
      "午前は、東京の鉄道網がどのように計画され、建設費が賄われてきたかを学び、虎ノ門ヒルズでホームから街路まで駅のつながりをたどります。午後は東京メトロの技術セッションのあと、東京駅を短く訪れます。",
    tip: "午前の講演はヴィラフォンテーヌグランド東京汐留です。虎ノ門ヒルズの視察は、ホームから街路までの経路をたどります。",
    notesExtra: "昼食の会場は未定です。東京メトロのセッションはビジョンセンター東京虎ノ門です。",
    items: [
      ["講演", "森地茂教授、09:00–10:00"],
      ["駅", "野焼計史と虎ノ門ヒルズ、10:30–12:30"],
      ["東京メトロ", "ビジョンセンター虎ノ門、14:00–16:00"],
      ["東京駅", "アートウォークと自由見学、16:30–17:45"],
    ],
    program: [
      ["08:30–09:00", "朝の事前説明", ""],
      [
        "09:00–10:00",
        "東京の都市鉄道網：成り立ち、構造、都市開発",
        "講演 · 森地茂教授。英語。会場：ヴィラフォンテーヌグランド東京汐留。森地教授は交通政策と国土計画を専門とします。日本鉄道に勤務したのち、運輸政策研究機構の会長を務めました。",
        [
          ["", "東京の成長における公的機関と私鉄の役割", ""],
          ["", "新しい地下鉄路線の計画、建設費の調達、長期にわたる費用の回収", ""],
          ["", "東京の鉄道整備のモデルを他の都市にどう活かすか", ""],
        ],
      ],
      [
        "10:00–10:30",
        "虎ノ門ヒルズ駅へ移動",
        "",
      ],
      [
        "10:30–12:30",
        "虎ノ門ヒルズ駅：建築、エンジニアリング、都市再開発",
        "専門家による駅の徒歩視察 · 野焼計史。日本語、通訳つき。野焼計史は、東京メトロで建設と基盤整備を担う部門を率いていました。虎ノ門ヒルズでは、ホームから街路までの経路をたどり、駅が周辺の再開発にどう納まるかを示します。",
        [
          ["", "密集した市街地でのトンネル施工と地下駅の拡大", ""],
          ["", "駅のコンコースを周辺の建物や街路につなぐこと", ""],
          ["", "工事の各段階で列車の運行と歩行者の通行を保つこと", ""],
        ],
      ],
      [
        "12:30–13:30",
        "昼食",
        "会場は未定",
      ],
      ["13:30–14:00", "ビジョンセンター東京虎ノ門へ移動", ""],
      [
        "14:00–16:00",
        "乗客の流れ、駅の運営、夜間の保守",
        "技術セッション · 東京メトロ。日本語、通訳つき。会場：ビジョンセンター東京虎ノ門。東京メトロの駅員は、営業時間を通して乗客の流れを扱います。担当者は、混雑を見込んだ人員配置と、終電から始発までの間に行う保守作業の組み立てを説明します。",
        [
          ["", "営業時間を通した駅員の役割", ""],
          ["", "改札、ホーム、乗り換え通路での乗客の流れの管理", ""],
          ["", "始発の前に終える夜間工事の日程", ""],
        ],
      ],
      ["16:00–16:30", "虎ノ門ヒルズから東京駅へ移動", ""],
      ["16:30–17:00", "ガイド付きアートウォーク", "東京駅"],
      ["17:00–17:45", "各自での見学", "東京駅"],
      ["17:45–18:00", "一日の振り返り", ""],
    ],
  },
  {
    w: "水",
    title: "渋谷：参加型の計画、東急、日々の通勤",
    city: "渋谷駅と東急の郊外路線",
    theme:
      "この日は渋谷駅の周辺です。区とともに進める参加型のまちづくり、鉄道・不動産・商業を組み合わせる東急の事業、そして郊外の通勤路を歩きます。",
    tip: "昼食は渋谷ヒカリエ6階のトキノトキです。東急は講演と駅の徒歩視察に分かれます。",
    notesExtra: "午前の講演は渋谷商工会議所会館2階です。東急の講演は渋谷ヒカリエカンファレンス、Dルームです。",
    items: [
      ["渋谷区", "まちづくりの講演、10:00–12:00"],
      ["東急", "講演 13:30–14:30、駅の視察 14:30–16:30"],
      ["通勤", "枝久保達也、16:30–18:00"],
    ],
    program: [
      ["08:30–09:00", "朝の事前説明", ""],
      ["09:00–10:00", "汐留から渋谷へ移動", ""],
      [
        "10:00–12:00",
        "駅周辺の参加型まちづくり",
        "講演 · 渋谷区。日本語、通訳つき。会場：渋谷商工会議所会館2階、大研修室。渋谷区のまちづくり推進部は、住民や地元の事業者とともに地区の計画を進めます。駅周辺の再整備の中で、その意見が通りや公共空間のデザインにどう反映されるかを扱います。",
        [
          ["", "住民と地元事業者が地区の計画に参加するしくみ", ""],
          ["", "地域からの提案が通りや公共空間のデザインにどう活きるか", ""],
          ["", "工事中も来街者が店に来られるよう、地元事業者と調整すること", ""],
        ],
      ],
      [
        "12:00–13:30",
        "昼食",
        "トキノトキ、渋谷ヒカリエ6階",
      ],
      [
        "13:30–14:30",
        "東急の鉄道、不動産、都市開発",
        "講演 · 東急株式会社。英語。会場：渋谷ヒカリエカンファレンス、Dルーム。東急は鉄道の運行に、不動産開発と商業を組み合わせています。この事業の形が、東京でも特に乗換の多い地点の再開発をどう方向づけているかを扱います。",
        [
          ["", "地区全体の活動を調整するタウンマネジメント会社の役割", ""],
          ["", "渋谷駅と周辺の通り、商業空間に対する東急の構想", ""],
        ],
      ],
      [
        "14:30–16:30",
        "渋谷駅シティと、密集した市街地での工事",
        "専門家による駅の徒歩視察 · 東急。英語。列車を走らせ、通りを開け、店へのアクセスを保ったまま、工事を段階的に進める様子を歩いて見ます。",
        [
          ["", "列車を走らせ、通りを開け、店へのアクセスを保ったまま進める段階的な工事", ""],
        ],
      ],
      [
        "16:30–18:00",
        "駅とまちの暮らし：郊外鉄道の日常",
        "専門家による駅の徒歩視察 · 枝久保達也。日本語、通訳つき。鉄道ジャーナリストの枝久保達也は、乗客の目線から郊外鉄道を見ています。駅とまちのあいだの通勤経路を歩き、日々の移動が地域の暮らしをどうかたちづくるかを探ります。",
        [
          ["", "駅までの徒歩から帰宅まで、定期利用者の一日の流れ", ""],
          ["", "混んだホームと車内でのならび方、列への入り方などの乗車の習慣", ""],
          ["", "地域の人が集まり、日常の拠点になる駅", ""],
        ],
      ],
      ["18:00–18:15", "一日の振り返り", ""],
    ],
  },
  {
    w: "木",
    title: "大都市を動かす：公共交通、計画、政策",
    city: "都営交通、東京都、新宿、イスラエル大使館",
    theme:
      "都営交通と東京都から、公営事業者がサービスをどう運行するか、都が都市全体の交通計画をどう調整するかを聞きます。午後は新宿駅の南口とバスタ新宿を歩き、そのあと駐日イスラエル大使のレセプションとグループでの話し合いがあります。",
    tip: "昼食はヒルトン東京です。大使館のレセプションの前に保安検査の時間を見てください。",
    notesExtra: "講演は都庁前／新宿の近くです。レセプションは駐日イスラエル大使を迎えて行います。",
    items: [
      ["都営", "公営事業者、10:00–11:00"],
      ["東京都", "都市の交通計画、11:00–12:00"],
      ["昼食", "ヒルトン東京、12:00–13:00"],
      ["新宿", "南口とバスタ、13:30–15:00"],
      ["大使館", "レセプション、16:00–17:00"],
    ],
    program: [
      ["07:15–08:15", "朝食", ""],
      ["08:15–08:45", "朝の事前説明", ""],
      ["08:45–09:30", "都庁前／新宿近くの講演会場へ移動", ""],
      ["09:30–10:00", "到着と紹介", ""],
      [
        "10:00–11:00",
        "公営交通事業者の課題",
        "講演 · 都営交通。日本語、通訳つき。都営交通は東京都のために地下鉄とバスを運行しています。担当者は、公営であることで可能になることと、他の事業者との協力が欠かせない点を話します。",
        [
          ["", "公営の交通ネットワークを運営する利点と課題", ""],
          ["", "乗換駅でのバスと地下鉄の調整", ""],
          ["", "他の鉄道会社との接続や、乗客への案内での協力", ""],
        ],
      ],
      [
        "11:00–12:00",
        "都市の交通計画と調整",
        "講演 · 東京都。日本語、通訳つき。東京都の計画担当者が、交通への投資案が広域の優先事業から地区の事業になる過程を説明します。鉄道の計画と駅周辺の土地利用をつなぐ判断をたどります。",
        [
          ["", "国の政策から都の戦略、区の計画へと下りる計画の階層", ""],
          ["", "事業を進めるうえでの都、区、鉄道事業者の役割", ""],
          ["", "事業が区境をまたぐときの土地利用と駅へのアクセスの調整", ""],
        ],
      ],
      [
        "12:00–13:00",
        "昼食",
        "ヒルトン東京",
      ],
      ["13:00–13:30", "新宿の徒歩視察の出発点へ移動", ""],
      [
        "13:30–15:00",
        "新宿駅南口とバスタ新宿",
        "専門家による駅の徒歩視察 · OC Global。日本語、通訳つき。日本国有鉄道の民営化のあと、新宿駅南口周辺の旧鉄道用地がどう再開発されたかをたどります。バスタ新宿では、鉄道駅から高速バス乗り場までの乗客の経路を歩きます。",
        [
          ["", "旧鉄道用地の再開発", ""],
          ["", "鉄道のホームから高速バス乗り場までの案内", ""],
          ["", "駅周辺を通る歩行者のつながり", ""],
        ],
      ],
      ["15:00–16:00", "イスラエル大使館へ移動、保安検査", ""],
      ["16:00–17:00", "公式レセプション", "駐日イスラエル大使"],
      ["17:00–18:00", "グループ活動", "話し合い、振り返り、得られたこと"],
    ],
  },
  {
    w: "金",
    title: "世田谷の鉄道沿線における地域のまちづくり",
    city: "下北線路街ときたみふれあい広場",
    theme:
      "世田谷区が、鉄道沿線での地域主体のまちづくりを紹介し、下北線路街を歩きます。そのあと小田急が、喜多見の車両基地の上にある公共の公園を案内します。",
    tip: "午前は北沢タウンホールで、そのあと下北線路街を歩きます。BONUS TRACKも含みます。安息日は16:12に始まります。",
    notesExtra: "昼食はベジタリアン弁当です。16:00までにホテルへ戻ります。",
    items: [
      ["世田谷", "講演 09:30–10:30、まち歩き 10:30–12:00"],
      ["昼食", "ベジタリアン弁当、12:00–13:00"],
      ["喜多見", "車両基地の上の公園、14:00–15:00"],
    ],
    program: [
      ["07:00–08:00", "朝食", ""],
      ["08:00–08:30", "朝の事前説明", ""],
      ["08:30–09:30", "世田谷の北沢タウンホールへ移動", ""],
      [
        "09:30–10:30",
        "人の尺度のまちづくりとコミュニティ",
        "講演 · 世田谷区。日本語、通訳つき。北沢の地域計画の担当は、住民とともにまちづくりを進めています。",
        [
          ["", "世田谷の地区計画における住民の役割", ""],
        ],
      ],
      [
        "10:30–12:00",
        "下北線路街のまち歩き",
        "専門家によるまち歩き · 世田谷区まちづくり担当。日本語、通訳つき。区の計画、交通、公園の担当が、小田急線の上の土地の再利用にどう向き合っているかを歩いて見ます。",
        [
          ["", "下北線路街における旧鉄道用地の再利用", ""],
          ["", "BONUS TRACKの歩行路、地元の店、人が集まる場所", ""],
        ],
      ],
      ["12:00–13:00", "ベジタリアン弁当の昼食", ""],
      ["13:00–14:00", "きたみふれあい広場へ移動", ""],
      [
        "14:00–15:00",
        "稼働する車両基地の上の公共の公園",
        "専門家による現地視察 · 小田急。日本語、通訳つき。小田急が、きたみふれあい広場とその下の車両基地を案内します。基地が下で動き続けながら、公園が周辺の街路とどうつながるかを見ます。",
        [
          ["", "周辺の街路からの公園の入り口", ""],
          ["", "車両基地の上の広場の配置", ""],
          ["", "公共空間と鉄道の運用区域との境界", ""],
        ],
      ],
      ["15:00–16:00", "ホテルへ戻る", ""],
      ["16:12", "安息日が始まる", ""],
    ],
  },
  {
    w: "土",
    title: "東京を知る：文化、公共空間、都市の暮らし",
    city: "東京 — 各自での見学",
    theme:
      "この日は東京を各自で歩き、歴史のあるまち、風景、日常の都市生活に触れます。任意の見学では、伝統的な場所、商業、現代の都市が隣り合う様子が見られます。",
    tip: "朝食は8:00から9:00です。そのあとは自由時間で、18:00にグループ活動を予定しています。",
    notesExtra: "各自の見学は任意です。グループ活動の内容と集合場所は未定です。",
    items: [
      ["庭園", "浜離宮恩賜庭園"],
      ["銀座", "通り、建築、公共空間"],
      ["浅草", "浅草寺"],
      ["夕方", "グループ活動、18:00"],
    ],
    program: [
      ["08:00–09:00", "朝食", ""],
      [
        "09:00",
        "任意の市内見学",
        "各自で参加",
        [
          ["", "浜離宮恩賜庭園", "伝統的な風景と東京の現代的な水辺。"],
          ["", "銀座", "商業の通り、建築、公共空間。"],
          ["", "浅草・浅草寺", "歴史のある東京、伝統的な商店街、宗教的な遺産。"],
        ],
      ],
      ["18:00", "グループ活動", "内容は未定"],
    ],
  },
  {
    w: "日",
    title: "東京の未来：高輪ゲートウェイと研修の総括",
    city: "高輪ゲートウェイシティ",
    theme:
      "午前はJR東日本と高輪ゲートウェイシティで、まず話し合い、そのあと新しい駅まちを歩きます。昼食は豆腐郎です。午後はアメージングレース、そのあとビジョンセンター東京京橋で代表団の閉会セッションです。",
    tip: "朝食は7:00から8:00、事前説明は8:00からです。閉会セッションは17:30までです。",
    notesExtra: "昼食は豆腐郎です。アメージングレースと閉会セッションはビジョンセンター東京京橋です。",
    items: [
      ["移動", "高輪ゲートウェイ、08:30–09:00"],
      ["高輪", "JR東日本、09:00–12:00"],
      ["昼食", "豆腐郎、12:30–13:30"],
      ["活動", "アメージングレース、14:00–15:45"],
      ["閉会", "代表団のセッション、15:45–17:30"],
    ],
    program: [
      ["07:00–08:00", "朝食", ""],
      ["08:00–08:30", "朝の事前説明", ""],
      ["08:30–09:00", "高輪ゲートウェイへ移動", ""],
      ["09:00–10:30", "発表と話し合い", "JR東日本。高輪ゲートウェイシティ：これからの駅とスマートな都市開発。"],
      ["10:30–12:00", "高輪ゲートウェイシティ", "専門家による現地見学 · JR東日本。日本語、通訳つき。建築、駅とまちの一体整備、歩行者ネットワーク、イノベーション。"],
      ["12:00–12:30", "都心へ移動", ""],
      ["12:30–13:30", "昼食", "豆腐郎"],
      ["13:30–14:00", "ビジョンセンター東京京橋へ移動", ""],
      ["14:00–15:45", "グループ活動：アメージングレース", ""],
      ["15:45–17:30", "代表団の閉会セッション", "会場：ビジョンセンター東京京橋"],
    ],
  },
  {
    w: "月",
    title: "歴史のある都心での、駅の整備と歩きやすさ",
    city: "東銀座、中央区、そして出発",
    theme:
      "中央区とともに、歴史のある都心での駅周辺の整備と歩行者の経路を見ます。銀座の駅、地下通路、通りのつながりと、旧KK高速道路を公共空間にする計画も含みます。午後はチェックアウトし、成田から出発します。",
    tip: "チェックアウトは8:00から8:30で、朝の事前説明と重なります。成田行きのバスは13:30、便の出発は17:20です。",
    notesExtra: "昼食はヴィラフォンテーヌグランド東京汐留です。午前の集合場所は東銀座です。",
    items: [
      ["中央区", "講演 09:00–10:00、まち歩き 10:00–11:30"],
      ["昼食", "ヴィラフォンテーヌ汐留、12:00–13:00"],
      ["出発", "成田、17:20の便"],
    ],
    program: [
      ["07:45–08:15", "朝の事前説明", ""],
      ["08:00–08:30", "チェックアウト", ""],
      ["08:30–09:00", "東銀座の会場へ移動", ""],
      [
        "09:00–10:00",
        "駅周辺の整備、歩行者のアクセス、歴史の保全",
        "講演 · 中央区。歴史のある商業地区で、駅周辺の敷地を再開発するときの計画上の選択を紹介します。",
      ],
      [
        "10:00–11:30",
        "駅周辺の整備、歩行者のつながり、歴史のあるまちの表情",
        "案内付きのまち歩き · 中央区。日本語、通訳つき。新しい駅の出入口、歩行者の経路、公共空間を、歴史のある街路と建物が特徴の地区にどう納めるかを歩きます。銀座の地下通路と旧KK高速道路も含みます。",
        [
          ["", "今ある街路のネットワークに、だれもが使える駅の出入口を納めること", ""],
          ["", "新しい公共空間を、地区の歴史のある商業の街路につなぐこと", ""],
          ["", "駅周辺の敷地を再開発するとき、歴史のある建物と街路の形を残すこと", ""],
        ],
      ],
      ["11:30–12:00", "有楽町からホテルへ移動", ""],
      ["12:00–13:00", "昼食", "ヴィラフォンテーヌグランド東京汐留"],
      ["13:30", "貸切バスで成田へ", ""],
      ["15:00", "成田国際空港に到着", ""],
      ["17:20", "成田国際空港を出発", ""],
    ],
  },
];

const daysHe = [
  {
    w: "ב׳",
    title: "ברוכים הבאים לטוקיו",
    city: "נמל התעופה נריטה · המלון · LUMIVEIL TOKYO",
    theme:
      "אחרי ההגעה והצ'ק-אין במלון מתקיימים ב-LUMIVEIL TOKYO מפגש פתיחה והיכרות עם טוקיו, ואחריהם ארוחת ערב. הערב פנוי, עם סיור אוריינטציה לבחירה בתחנת שינבאשי/שיודומה.",
    tip: "החזיקו את הדרכון בהישג יד בנריטה. הקבוצה יוצאת מלובי המלון בשעה 16:00.",
    notesExtra:
      "שעת הנחיתה והעומס בדרכים עשויים להזיז את ההסעה ואת הצ'ק-אין במלון. הפתיחה וארוחת הערב מתקיימות ב-LUMIVEIL TOKYO.",
    items: [
      ["הגעה", "נמל התעופה נריטה, 11:40"],
      ["צ'ק-אין", "מלון, 15:00"],
      ["פתיחה", "LUMIVEIL TOKYO, 16:30–18:00"],
      ["ארוחת ערב", "בופה, 18:00–20:00"],
      ["ערב", "סיור לבחירה, שינבאשי/שיודומה, 20:00"],
    ],
    program: [
      ["11:40", "הגעה לנמל התעופה הבין-לאומי נריטה", "ביקורת גבולות, איסוף כבודה ומפגש עם צוות התיאום המקומי"],
      ["13:00", "הסעה באוטובוס לטוקיו וארוחת צהריים", "מנמל התעופה נריטה לכיוון המלון"],
      ["15:00", "צ'ק-אין במלון", ""],
      ["16:00", "יציאה מלובי המלון", "LUMIVEIL TOKYO"],
      ["16:30–17:10", "פעילות פתיחה ומצגת", "צוות המשלחת. מקום: LUMIVEIL TOKYO"],
      ["17:10–18:00", "היכרות עם טוקיו", "עופר ביליק. מקום: LUMIVEIL TOKYO"],
      ["18:00–20:00", "ארוחת ערב בבופה", "LUMIVEIL TOKYO"],
      ["20:00", "ערב חופשי (סיור אוריינטציה לבחירה בתחנת שינבאשי/שיודומה)", ""],
    ],
  },
  {
    w: "ג׳",
    title: "רשת הרכבות של טוקיו, תחנות ותפעול",
    city: "טורנומון הילס וטוקיו מטרו",
    theme:
      "הבוקר בוחן כיצד תוכננה ומומנה רשת הרכבות של טוקיו, ואז עוקב אחר תחנה מהרציף אל הרחוב בטורנומון הילס. אחר הצהריים מפגש מקצועי עם טוקיו מטרו, ואחר כך ביקור קצר בתחנת טוקיו.",
    tip: "הרצאת הבוקר מתקיימת ב-Villa Fontaine Grand Tokyo Shiodome. הסיור בטורנומון הילס עוקב אחר המסלול מהרציף אל הרחוב.",
    notesExtra: "מקום ארוחת הצהריים טרם נקבע. המפגש עם טוקיו מטרו מתקיים ב-Vision Center Tokyo Toranomon.",
    items: [
      ["הרצאה", "פרופ׳ שיגרו מוריצ׳י, 09:00–10:00"],
      ["תחנה", "טורנומון הילס עם קזופומי נויאקי, 10:30–12:30"],
      ["טוקיו מטרו", "Vision Center טורנומון, 14:00–16:00"],
      ["תחנת טוקיו", "סיור אמנות וזמן חופשי, 16:30–17:45"],
    ],
    program: [
      ["08:30–09:00", "תדרוך בוקר", ""],
      [
        "09:00–10:00",
        "רשת הרכבות המטרופולינית של טוקיו: התפתחות, מבנה ופיתוח עירוני",
        "הרצאה · פרופ׳ שיגרו מוריצ׳י. באנגלית. מקום: Villa Fontaine Grand Tokyo Shiodome. פרופ׳ מוריצ׳י מתמחה במדיניות תחבורה ובתכנון פיתוח ברמה הלאומית. הוא החל את דרכו בחברת הרכבות הלאומית של יפן ובהמשך כיהן כנשיא המכון לחקר מדיניות התחבורה.",
        [
          ["", "חלקם של גופים ציבוריים ושל חברות רכבת פרטיות בצמיחתה של טוקיו", ""],
          ["", "תכנון קווי מטרו חדשים, מימון הקמתם והחזר ההשקעה לאורך זמן", ""],
          ["", "התאמת המודל של טוקיו לפיתוח מסילתי בערים אחרות", ""],
        ],
      ],
      [
        "10:00–10:30",
        "מעבר לתחנת טורנומון הילס",
        "",
      ],
      [
        "10:30–12:30",
        "תחנת טורנומון הילס: אדריכלות, הנדסה ופיתוח עירוני",
        "סיור מקצועי בתחנה בהדרכת קזופומי נויאקי. ביפנית, עם תרגום. קזופומי נויאקי עמד בעבר בראש המחלקה לבנייה ולשדרוג תשתיות בחברת טוקיו מטרו. בתחנת טורנומון הילס הוא יוביל את המשתתפים מהרציף אל הרחוב ויראה כיצד התחנה משתלבת במתחם המתחדש סביבה.",
        [
          ["", "כריית מנהרות והרחבת תחנות תת־קרקעיות בסביבה עירונית צפופה", ""],
          ["", "חיבור אולמות התחנה למבנים ולרחובות סמוכים", ""],
          ["", "שמירה על שירות הרכבות ועל מעברים פתוחים להולכי רגל בכל שלבי הבנייה", ""],
        ],
      ],
      [
        "12:30–13:30",
        "ארוחת צהריים",
        "המקום טרם נקבע",
      ],
      ["13:30–14:00", "מעבר אל Vision Center Tokyo Toranomon", ""],
      [
        "14:00–16:00",
        "תנועת נוסעים, תפעול התחנה ועבודות תחזוקה בלילה",
        "מפגש מקצועי · טוקיו מטרו. ביפנית, עם תרגום. מקום: Vision Center Tokyo Toranomon. צוותי התחנות של טוקיו מטרו מנהלים את תנועת הנוסעים לאורך יום הפעילות. נציג החברה יסביר כיצד הצוותים נערכים לעומסים ומתזמנים עבודות תחזוקה בין הרכבת האחרונה בלילה לראשונה בבוקר.",
        [
          ["", "תחומי האחריות של צוות התחנה לאורך יום הפעילות", ""],
          ["", "ניהול תנועת הנוסעים בשערי הכרטוס, ברציפים ובמעברי ההחלפה", ""],
          ["", "תזמון עבודות תשתית בלילה והשלמתן לפני הרכבת הראשונה", ""],
        ],
      ],
      ["16:00–16:30", "מעבר מטורנומון הילס לתחנת טוקיו", ""],
      ["16:30–17:00", "סיור אמנות מודרך", "תחנת טוקיו"],
      ["17:00–17:45", "סיור עצמאי", "תחנת טוקיו"],
      ["17:45–18:00", "סיכום היום", ""],
    ],
  },
  {
    w: "ד׳",
    title: "שיבויה: תכנון, טוקיו והנסיעה היומיומית",
    city: "תחנת שיבויה וקווי הפרברים של טוקיו",
    theme:
      "היום נשאר סביב תחנת שיבויה: תכנון בשיתוף הציבור עם הרובע, השילוב של טוקיו בין רכבות, נדל״ן ומסחר, וסיור לאורך נסיעת יוממים בפרברים.",
    tip: "ארוחת הצהריים ב-Toki no Toki, בקומה 6 של שיבויה היקאריה. ההרצאה של טוקיו והסיור בתחנה נפרדים.",
    notesExtra: "הרצאת הבוקר ב-Shibuya Shoko Kaikan, קומה 2. הרצאת טוקיו ב-Shibuya Hikarie Conference, חדר D.",
    items: [
      ["רובע שיבויה", "הרצאה על מאצ׳יזוקורי, 10:00–12:00"],
      ["טוקיו", "הרצאה 13:30–14:30, סיור 14:30–16:30"],
      ["נסיעה יומית", "טטסויה אדקובו, 16:30–18:00"],
    ],
    program: [
      ["08:30–09:00", "תדרוך בוקר", ""],
      ["09:00–10:00", "מעבר משיודומה לשיבויה", ""],
      [
        "10:00–12:00",
        "תכנון בשיתוף הציבור סביב התחנה",
        "הרצאה · רובע שיבויה. ביפנית, עם תרגום. מקום: Shibuya Shoko Kaikan, קומה 2, אולם ההדרכה הגדול. מחלקת המאצ׳יזוקורי של שיבויה עוסקת בתכנון שכונתי בשיתוף תושבים ועסקים מקומיים. המפגש יעסוק באופן שבו הצעותיהם משפיעות על עיצוב הרחובות והמרחבים הציבוריים במהלך פיתוחו מחדש של מתחם התחנה.",
        [
          ["", "שיתוף תושבים ועסקים מקומיים בתכנון השכונה", ""],
          ["", "השפעתן של הצעות מהקהילה על עיצוב הרחובות והמרחב הציבורי", ""],
          ["", "עבודה עם עסקים מקומיים לשמירה על גישת הלקוחות בזמן העבודות", ""],
        ],
      ],
      [
        "12:00–13:30",
        "ארוחת צהריים",
        "Toki no Toki, שיבויה היקאריה, קומה 6",
      ],
      [
        "13:30–14:30",
        "רכבות, נדל״ן ופיתוח עירוני – הגישה של טוקיו",
        "הרצאה · תאגיד טוקיו (Tokyu). באנגלית. מקום: Shibuya Hikarie Conference, חדר D. תאגיד טוקיו משלב הפעלת רכבות עם פיתוח נדל״ן ומסחר קמעונאי. ההרצאה בוחנת כיצד המודל העסקי הזה מעצב את הפיתוח סביב אחד ממוקדי ההחלפה העמוסים בטוקיו.",
        [
          ["", "תפקידה של החברה לניהול המתחם בתיאום הפעילות ברחבי האזור", ""],
          ["", "החזון של טוקיו לתחנת שיבויה, לרחובות הסמוכים ולשטחי המסחר", ""],
        ],
      ],
      [
        "14:30–16:30",
        "עיר התחנה של שיבויה ובנייה במרכז עירוני צפוף",
        "סיור מקצועי בתחנה · טוקיו. באנגלית. הסיור בוחן כיצד מחלקים את הבנייה לשלבים כדי שהרכבות ימשיכו לפעול, הרחובות יישארו פתוחים והעסקים יישארו נגישים.",
        [
          ["", "חלוקת עבודות הבנייה לשלבים המאפשרים להמשיך להפעיל רכבות ולשמור על רחובות פתוחים ועל גישה לעסקים", ""],
        ],
      ],
      [
        "16:30–18:00",
        "חיי התחנה והשכונה: הנסיעה היומיומית בפרברים",
        "סיור מקצועי בתחנה בהדרכת טטסויה אדקובו. ביפנית, עם תרגום. טטסויה אדקובו, עיתונאי המתמחה ברכבות, בוחן את הרכבת הפרברית מנקודת מבטם של הנוסעים. הסיור יתחקה אחר המסלול שבין השכונה לתחנה ויבחן כיצד הנסיעה היומיומית מעצבת את החיים המקומיים.",
        [
          ["", "שגרת הנוסעים הקבועים, מההליכה לתחנה ועד הדרך הביתה", ""],
          ["", "תרבות הנסיעה ברציפים ובקרונות עמוסים, מהעמידה בתור ועד העלייה לקרון צפוף", ""],
          ["", "התחנה כמקום מפגש שכונתי וכמוקד לחיי היומיום", ""],
        ],
      ],
      ["18:00–18:15", "סיכום היום", ""],
    ],
  },
  {
    w: "ה׳",
    title: "ניהול המטרופולין: תחבורה ציבורית, תכנון ומדיניות",
    city: "טואי, ממשלת המטרופולין של טוקיו, שינג׳וקו ושגרירות ישראל",
    theme:
      "טואי וממשלת המטרופולין של טוקיו מביאות שתי נקודות מבט: איך מפעיל ציבורי מנהל את שירותיו, ואיך הממשל המטרופוליני מתאם את תכנון התחבורה. אחר הצהריים סיור ביציאה הדרומית של שינג׳וקו ובבוסטה, ואחר כך קבלת פנים עם שגריר ישראל ודיון קבוצתי.",
    tip: "ארוחת הצהריים בהילטון טוקיו. יש להשאיר זמן לבידוק הביטחוני לפני קבלת הפנים בשגרירות.",
    notesExtra: "ההרצאות מתקיימות ליד טוצ׳ומאה / שינג׳וקו. קבלת הפנים היא עם שגריר ישראל ביפן.",
    items: [
      ["טואי", "מפעיל ציבורי, 10:00–11:00"],
      ["הממשל המטרופוליני", "תכנון מטרופוליני, 11:00–12:00"],
      ["צהריים", "הילטון טוקיו, 12:00–13:00"],
      ["שינג׳וקו", "היציאה הדרומית ובוסטה, 13:30–15:00"],
      ["שגרירות", "קבלת פנים, 16:00–17:00"],
    ],
    program: [
      ["07:15–08:15", "ארוחת בוקר", ""],
      ["08:15–08:45", "תדרוך בוקר", ""],
      ["08:45–09:30", "מעבר למקום ההרצאות ליד טוצ׳ומאה / שינג׳וקו", ""],
      ["09:30–10:00", "הגעה והיכרות", ""],
      [
        "10:00–11:00",
        "האתגרים של רשות תחבורה ציבורית",
        "הרצאה · טואי (Toei). ביפנית, עם תרגום. טואי מפעילה קווי מטרו ואוטובוסים מטעם ממשלת מטרופולין טוקיו. נציג הרשות ידון באפשרויות שמקנה הבעלות הציבורית ובתחומים שבהם טואי תלויה בשיתוף פעולה עם מפעילים אחרים.",
        [
          ["", "היתרונות והאתגרים בהפעלת רשת תחבורה בבעלות ציבורית", ""],
          ["", "תיאום שירותי האוטובוסים והמטרו בתחנות מעבר", ""],
          ["", "שיתוף פעולה עם חברות רכבת אחרות בתכנון קישורים ובמסירת מידע לנוסעים", ""],
        ],
      ],
      [
        "11:00–12:00",
        "תכנון תחבורה מטרופוליני ותיאום",
        "הרצאה · ממשלת מטרופולין טוקיו. ביפנית, עם תרגום. נציג צוות התכנון המטרופוליני יסביר כיצד השקעה בתחבורה שזוהתה כעדיפות אזורית מתגבשת לכדי מיזם מקומי. המפגש יתמקד בהחלטות המחברות בין תכנון הרכבת לבין שימושי הקרקע סביב התחנות.",
        [
          ["", "מדרג התכנון – ממדיניות ארצית דרך אסטרטגיה מטרופולינית ועד לתוכניות הרבעים", ""],
          ["", "תפקידי הממשל המטרופוליני, הרבעים ומפעילי הרכבות בקידום מיזם תחבורתי", ""],
          ["", "תיאום שימושי קרקע ודרכי גישה לתחנה במיזמים החוצים גבולות בין רבעים", ""],
        ],
      ],
      [
        "12:00–13:00",
        "ארוחת צהריים",
        "הילטון טוקיו",
      ],
      ["13:00–13:30", "מעבר לנקודת ההתחלה של הסיור בשינג׳וקו", ""],
      [
        "13:30–15:00",
        "תחנת שינג׳וקו – היציאה הדרומית ומסוף האוטובוסים בוסטה",
        "סיור מקצועי בתחנה · OC Global. ביפנית, עם תרגום. הסיור יבחן כיצד פותחו מחדש שטחי הרכבת סביב היציאה הדרומית של תחנת שינג׳וקו בעקבות הפרטת חברת הרכבות הלאומית של יפן. בבוסטה שינג׳וקו יעברו המשתתפים במסלול הנוסע מתחנת הרכבת אל מסוף האוטובוסים הבין־עירוניים.",
        [
          ["", "פיתוח מחדש של שטחים ששימשו בעבר את הרכבת", ""],
          ["", "התמצאות בדרך מרציפי הרכבת למסוף האוטובוסים הבין־עירוניים", ""],
          ["", "רציפות מסלולי ההליכה ברחבי מתחם התחנה", ""],
        ],
      ],
      ["15:00–16:00", "מעבר לשגרירות ישראל ובידוק ביטחוני", ""],
      ["16:00–17:00", "קבלת פנים רשמית", "שגריר ישראל ביפן"],
      ["17:00–18:00", "פעילות קבוצתית", "דיון, רפלקציה ולקחים"],
    ],
  },
  {
    w: "ו׳",
    title: "תכנון קהילתי לאורך תוואי הרכבת בסטגאיה",
    city: "שימוקיטה סנרוגאי ופארק קיטאמי פוריאי פלאזה",
    theme:
      "עיריית רובע סטגאיה מציגה תכנון קהילתי לאורך תוואי הרכבת, עם סיור בשימוקיטה סנרוגאי. אחר כך אודקיו מובילה ביקור בפארק הציבורי שמעל מתחם הרכבות בקיטאמי.",
    tip: "הבוקר בבית העירייה של קיטזאווה, ואחר כך סיור בשימוקיטה סנרוגאי, כולל BONUS TRACK. השבת נכנסת ב-16:12.",
    notesExtra: "ארוחת הצהריים היא בנטו צמחוני. הקבוצה חוזרת למלון עד 16:00.",
    items: [
      ["סטגאיה", "הרצאה 09:30–10:30, סיור 10:30–12:00"],
      ["צהריים", "בנטו צמחוני, 12:00–13:00"],
      ["קיטאמי", "פארק מעל מתחם הרכבות, 14:00–15:00"],
    ],
    program: [
      ["07:00–08:00", "ארוחת בוקר", ""],
      ["08:00–08:30", "תדרוך בוקר", ""],
      ["08:30–09:30", "נסיעה לבית העירייה של קיטזאווה בסטגאיה", ""],
      [
        "09:30–10:30",
        "מאצ׳יזוקורי בקנה מידה אנושי ובניית קהילה",
        "הרצאה · רובע סטגאיה. ביפנית, עם תרגום. היחידה לתכנון קהילתי בקיטזאווה מקדמת עם התושבים מאצ׳יזוקורי – תכנון עירוני בהובלת הקהילה.",
        [
          ["", "תפקיד התושבים בגיבוש תוכניות שכונתיות בסטגאיה", ""],
        ],
      ],
      [
        "10:30–12:00",
        "סיור שכונתי בשימוקיטה סנרוגאי",
        "סיור מקצועי בשכונה · צוות המאצ׳יזוקורי של רובע סטגאיה. ביפנית, עם תרגום. הסיור בוחן כיצד צוותי התכנון, התחבורה והגנים של הרובע פועלים לשימוש מחודש בקרקע שמעל למסילת אודקיו.",
        [
          ["", "שימוש מחודש בשטחי המסילה לשעבר בשימוקיטה סנרוגאי", ""],
          ["", "שבילי הליכה, חנויות מקומיות ומקומות מפגש במתחם BONUS TRACK", ""],
        ],
      ],
      ["12:00–13:00", "ארוחת צהריים: בנטו צמחוני", ""],
      ["13:00–14:00", "מעבר לפארק קיטאמי פוריאי פלאזה", ""],
      [
        "14:00–15:00",
        "פארק ציבורי מעל מתחם רכבות פעיל",
        "ביקור מקצועי בהדרכת חברת אודקיו. ביפנית, עם תרגום. נציגי אודקיו יובילו ביקור בפארק קיטאמי פוריאי פלאזה ובמתחם הדיור והתחזוקה של הרכבות שמתחתיו. המשתתפים יבחנו כיצד הפארק מתחבר לרחובות השכונה בעוד מתחם הרכבות ממשיך לפעול מתחתיו.",
        [
          ["", "הכניסות לפארק מרחובות השכונה", ""],
          ["", "פריסת הרחבה הציבורית מעל מתחם הרכבות", ""],
          ["", "ההפרדה בין השטח הפתוח לציבור לשטח התפעולי של הרכבת", ""],
        ],
      ],
      ["15:00–16:00", "חזרה למלון", ""],
      ["16:12", "כניסת השבת", ""],
    ],
  },
  {
    w: "ש׳",
    title: "להכיר את טוקיו: תרבות, מרחב ציבורי וחיי עיר",
    city: "טוקיו — סיור עצמאי",
    theme:
      "היום פנוי לסיור עצמאי בטוקיו ולמפגש עם שכונות היסטוריות, נוף וחיי היומיום בעיר. ביקורים לבחירה מראים איך מקומות מסורתיים, מסחר והעיר בת-זמננו יושבים זה לצד זה.",
    tip: "ארוחת הבוקר מ-08:00 עד 09:00. אחר כך היום פנוי עד לפעילות קבוצתית ב-18:00.",
    notesExtra: "הביקורים העצמאיים הם לבחירה. הפעילות הקבוצתית ומקום המפגש טרם נקבעו.",
    items: [
      ["גנים", "גני המאריקיו"],
      ["גינזה", "רחובות, אדריכלות ומרחב ציבורי"],
      ["אסאקוסה", "מקדש סנסוג'י"],
      ["ערב", "פעילות קבוצתית, 18:00"],
    ],
    program: [
      ["08:00–09:00", "ארוחת בוקר", ""],
      [
        "09:00",
        "סיור עירוני לבחירה",
        "ביקורים עצמאיים",
        [
          ["", "גני המאריקיו", "נוף מסורתי וקו המים המודרני של טוקיו."],
          ["", "גינזה", "רחובות מסחריים, אדריכלות ומרחב ציבורי."],
          ["", "אסאקוסה / מקדש סנסוג'י", "טוקיו ההיסטורית, רחובות קניות מסורתיים ומורשת דתית."],
        ],
      ],
      ["18:00", "פעילות קבוצתית", "הפרטים טרם נקבעו"],
    ],
  },
  {
    w: "א׳",
    title: "העתיד של טוקיו: טקאנאווה גייטוויי וסיכום",
    city: "Takanawa Gateway City",
    theme:
      "הבוקר עם JR East ב-Takanawa Gateway City: קודם דיון, ואחר כך סיור ברובע התחנה החדש. ארוחת הצהריים בטופורו. אחר הצהריים The Amazing Race, ואחר כך מפגש הסיום של המשלחת ב-Vision Center Tokyo Kyobashi.",
    tip: "ארוחת הבוקר מ-07:00 עד 08:00, והתדרוך ב-08:00. מפגש הסיום נמשך עד 17:30.",
    notesExtra: "ארוחת הצהריים בטופורו. The Amazing Race ומפגש הסיום מתכנסים ב-Vision Center Tokyo Kyobashi.",
    items: [
      ["מעבר", "טקאנאווה גייטוויי, 08:30–09:00"],
      ["טקאנאווה", "JR East, 09:00–12:00"],
      ["צהריים", "טופורו, 12:30–13:30"],
      ["פעילות", "The Amazing Race, 14:00–15:45"],
      ["סיום", "מפגש המשלחת, 15:45–17:30"],
    ],
    program: [
      ["07:00–08:00", "ארוחת בוקר", ""],
      ["08:00–08:30", "תדרוך בוקר", ""],
      ["08:30–09:00", "מעבר לטקאנאווה גייטוויי", ""],
      ["09:00–10:30", "מצגות ודיון", "JR East. Takanawa Gateway City: תחנות העתיד ופיתוח עירוני חכם."],
      ["10:30–12:00", "Takanawa Gateway City", "סיור מקצועי באתר · JR East. ביפנית, עם תרגום. אדריכלות, חיבור בין תחנה לעיר, רשתות להולכי רגל וחדשנות."],
      ["12:00–12:30", "מעבר למרכז העיר", ""],
      ["12:30–13:30", "ארוחת צהריים", "טופורו"],
      ["13:30–14:00", "מעבר ל-Vision Center Tokyo Kyobashi", ""],
      ["14:00–15:45", "פעילות קבוצתית: The Amazing Race", ""],
      ["15:45–17:30", "מפגש הסיום של המשלחת", "מקום: Vision Center Tokyo Kyobashi"],
    ],
  },
  {
    w: "ב׳",
    title: "נגישות ופיתוח תחנות במרכז ההיסטורי של טוקיו",
    city: "היגאשי-גינזה, רובע צ׳ואו, ואחר כך היציאה",
    theme:
      "רובע צ׳ואו בוחן פיתוח סביב תחנות ומסלולי הליכה במרכז ההיסטורי של טוקיו, כולל החיבורים בין תחנות גינזה, המעברים התת-קרקעיים והרחובות, והפיכת כביש ה-KK לשעבר למרחב ציבורי. אחר הצהריים עושים צ'ק-אאוט וטסים מנריטה.",
    tip: "הצ'ק-אאוט מ-08:00 עד 08:30, במקביל לתדרוך הבוקר. האוטובוס לנריטה יוצא ב-13:30, והטיסה ב-17:20.",
    notesExtra: "ארוחת הצהריים ב-Villa Fontaine Grand Tokyo Shiodome. נקודת המפגש בבוקר היא בהיגאשי-גינזה.",
    items: [
      ["רובע צ׳ואו", "הרצאה 09:00–10:00, סיור 10:00–11:30"],
      ["צהריים", "וילה פונטן שיודומה, 12:00–13:00"],
      ["יציאה", "נריטה, טיסה ב-17:20"],
    ],
    program: [
      ["07:45–08:15", "תדרוך בוקר", ""],
      ["08:00–08:30", "צ'ק-אאוט", ""],
      ["08:30–09:00", "מעבר למקום המפגש בהיגאשי-גינזה", ""],
      [
        "09:00–10:00",
        "פיתוח סביב תחנות, גישה להולכי רגל ושימור היסטורי",
        "הרצאה · רובע צ׳ואו. רובע צ׳ואו מציג את השיקולים התכנוניים בפיתוח מחדש של אתרים סביב תחנות ברובע מסחרי היסטורי.",
      ],
      [
        "10:00–11:30",
        "פיתוח סביב תחנות, חיבורים להולכי רגל ואופי עירוני היסטורי",
        "סיור מודרך · רובע צ׳ואו. ביפנית, עם תרגום. הסיור בוחן כיצד אפשר לשלב כניסות חדשות לתחנה, נתיבי הליכה ומרחבים ציבוריים במרקם של רחובות ומבנים היסטוריים, כולל המעברים התת-קרקעיים של גינזה וכביש ה-KK לשעבר.",
        [
          ["", "שילוב כניסות נגישות לתחנה במערך הרחובות הקיים", ""],
          ["", "חיבור מרחבים ציבוריים חדשים לרחובות המסחר ההיסטוריים", ""],
          ["", "שימור מבנים היסטוריים ותוואי רחובות בעת פיתוח מחדש של אתרים בסביבת התחנה", ""],
        ],
      ],
      ["11:30–12:00", "מעבר מיוראקוצ'ו למלון", ""],
      ["12:00–13:00", "ארוחת צהריים", "Villa Fontaine Grand Tokyo Shiodome"],
      ["13:30", "אוטובוס לנריטה", ""],
      ["15:00", "הגעה לנמל התעופה הבין-לאומי נריטה", ""],
      ["17:20", "המראה מנמל התעופה הבין-לאומי נריטה", ""],
    ],
  },
];

days.forEach((day, index) => {
  day.ja = daysJa[index];
  day.he = daysHe[index];
});

let programLang = "en";

function viewDay(day) {
  const base = { ...day, titleEn: day.title };
  const pack = programLang === "ja" ? day.ja : programLang === "he" ? day.he : null;
  if (!pack) return base;
  return {
    ...base,
    w: pack.w || day.w,
    title: pack.title,
    city: pack.city,
    theme: pack.theme,
    tip: pack.tip,
    notesExtra: pack.notesExtra,
    items: day.items.map((item, index) => {
      const translated = pack.items[index] || [];
      return [translated[0] || item[0], translated[1] || item[1], item[2]];
    }),
    program: pack.program,
  };
}

function textForLang(el) {
  if (programLang === "ja") return el.getAttribute("data-ja") || el.getAttribute("data-en");
  if (programLang === "he") {
    if (el.classList.contains("nav-label") && el.closest(".topbar")) return el.getAttribute("data-en");
    return el.getAttribute("data-he") || el.getAttribute("data-en");
  }
  return el.getAttribute("data-en");
}

function dayCountLabel(index) {
  const n = index + 1;
  if (programLang === "ja") return `${n}日目`;
  if (programLang === "he") return `יום ${n}`;
  return `DAY ${n}`;
}

function applyChromeLanguage() {
  document.documentElement.lang = programLang === "ja" ? "ja" : programLang === "he" ? "he" : "en";
  document.documentElement.classList.toggle("lang-he", programLang === "he");
  document.querySelectorAll("[data-en]").forEach((el) => {
    const text = textForLang(el);
    if (text) el.textContent = text;
  });
  document.querySelectorAll(".program-lang-btn").forEach((btn) => {
    const target = btn.dataset.lang === "he" ? "he" : "ja";
    const active = programLang === target;
    const label = btn.querySelector(".program-lang-btn-label");
    if (label) label.textContent = active ? "English" : target === "he" ? "עברית" : "日本語";
    btn.classList.toggle("is-flipped", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
    btn.setAttribute("aria-label", active ? "Show English" : target === "he" ? "Show Hebrew" : "Show Japanese");
  });
}

function notifyParentLanguage() {
  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "forumetro:lang", lang: programLang }, "*");
    }
  } catch (e) {}
}

function dayViewScroll() {
  const desktop = getDesktopScroller();
  const mobile = document.querySelector(".m-content");
  return {
    desktop: desktop ? desktop.scrollTop : 0,
    windowTop: window.scrollY || 0,
    mobile: mobile ? mobile.scrollTop : 0,
  };
}

function restoreDayViewScroll(place) {
  if (!place) return;
  const desktop = getDesktopScroller();
  if (desktop) desktop.scrollTop = place.desktop;
  window.scrollTo(0, place.windowTop);
  const mobile = document.querySelector(".m-content");
  if (mobile) {
    mobile.scrollTop = place.mobile;
    mobileDatesLastTop = mobile.scrollTop;
  }
}

function setProgramLang(lang) {
  let next = lang === "he" ? "he" : "en";
  if (next === programLang) {
    applyChromeLanguage();
    notifyParentLanguage();
    return;
  }
  programLang = next;
  const place = dayViewScroll();
  applyChromeLanguage();
  render({ resetNav: false });
  restoreDayViewScroll(place);
  requestAnimationFrame(() => restoreDayViewScroll(place));
  notifyParentLanguage();
  if (lastLineAnchor) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        applyLineAnchor(lastLineAnchor);
      });
    });
  }
}

const prep = [
  ["Travel Documents", ["Passport, visa, insurance and copies.", "Israeli passports do not need special visa procedures."]],
  ["Arrival & Entry Procedures", ["Complete Visit Japan Web declaration: https://services.digital.go.jp/en/visit-japan-web/", "Register flight and personal details.", "Save QR code for airport entry."]],
  ["Currency & Payments", ["Bring 10,000–20,000 JPY cash.", "Cards accepted in large stores.", "Cash needed for small shops and taxis."]],
  ["Packing", ["Formal clothes for official visits.", "Closed shoes.", "Comfortable walking shoes.", "Warm layers and a coat for December weather (about 5–12°C).", "Plug type A, voltage 100V.", "img:./plug-type-a.jpg|Type A plug"]],
  ["Order in Advance", ["Portable Wi‑Fi or SIM rental.", "Recommended: https://japan-wireless.com", "Business cards."]],
];

const prepDuring = [
  ["While you are there", ["Be punctual and arrive early.", "Keep phone silent in public.", "Bring personal medications."]],
];

const prepHe = [
  ["מסמכי נסיעה", [
    "דרכון בתוקף: יש לבדוק את תאריך התפוגה.",
    "ויזה: בעלי דרכון ישראלי אינם נדרשים להליך מיוחד.",
  ]],
  ["הגעה וכניסה ליפן", [
    "מכתב הזמנה: יסופק בהמשך.",
    "יש למלא הצהרה מקוונת באתר Visit Japan Web: https://services.digital.go.jp/en/visit-japan-web/",
    "::בתוך האתר יש לבצע:",
    "רישום פרטי טיסה ופרטים אישיים.",
    "מילוי טפסי מכס והסגר / בריאות.",
    "שמירת קוד QR לשימוש בכניסה בשדה התעופה.",
  ]],
  ["כסף ותשלומים", [
    "מומלץ להביא מזומן בסכום של 10,000–20,000 ין יפני.",
    "ניתן לבצע המרת מטבע בשדה התעופה: אין הרבה עמדות המרה זמינות בהמשך.",
    "כספומטים זמינים בחנויות נוחות ובתחנות רכבת, אך העמלה גבוהה.",
    "כרטיסי אשראי / דביט מתקבלים בחנויות גדולות: חשוב לזכור את הקוד הסודי ולהביא גם כרטיס פיזי.",
    "מזומן נדרש בחנויות קטנות, בחלק מהמוניות ובחלק מאתרי התיירות.",
    "המטבע המקומי: ין יפני: JPY.",
  ]],
  ["אריזה ולבוש", [
    "קוד לבוש רשמי: גברים: חליפה, ורצוי להחזיק עניבה בהישג יד. נשים: ז׳קט; ללא חולצות ללא שרוולים.",
    "נעליים סגורות.",
    "מזג האוויר בחורף: כ־5–12 מעלות במהלך היום.",
    "מעיל ושכבות חמות.",
    "נעלי הליכה נוחות.",
    "מטריית נסיעות: אופציונלי.",
    "שקע חשמל מסוג A, מתח 100V.",
    "img:./plug-type-a.jpg|שקע חשמל מסוג A",
  ]],
  ["להזמין מראש", [
    "השכרת Wi-Fi נייד או כרטיס SIM: ניתן לאסוף בשדה התעופה.",
    "חברה מומלצת: https://japan-wireless.com",
    "Wi-Fi חינם זמין במלונות, אך מוגבל מאוד במרחבים ציבוריים.",
    "כרטיסי ביקור.",
  ]],
];

const prepDuringHe = [
  ["בזמן הביקור", [
    "להקפיד על עמידה בזמנים: להגיע מוקדם.",
    "שימוש בטלפון במרחב הציבורי צריך להיות שקט.",
    "יש להסיר נעליים במקדשים, בכניסה לחדרי מלון מסוימים ובחלק מהמסעדות.",
    "מצופה להתנהגות מנומסת ולשפת גוף מכבדת.",
    "מומלץ להביא מתנות תודה קטנות לביקורים רשמיים.",
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
    "אל תאחרו: עמידה בזמנים היא חיונית.",
    "אל תשתמשו בטלפון ואל תבדקו אותו במהלך פגישות.",
    "הימנעו מדיבור או משימוש במכשירים במהלך מצגות.",
    "אל תשלבו רגליים ואל תישבו ברישול במהלך פגישות רשמיות.",
    "אל תשכחו לענוד את תג השם בכל עת.",
  ]],
  ["נימוסים במרחב הציבורי", [
    "אל תדברו בקול רם ואל תשתמשו במחוות מוגזמות במרחב הציבורי.",
    "אל תאכלו או תשתו בזמן הליכה במרחב הציבורי.",
    "אל תתעלמו ממרחב אישי ומכללי נימוס במרחב הציבורי.",
    "אל תעשנו ברחוב: רק באזורים המיועדים לעישון.",
    "הימנעו מדיבור בקול רם במרחבים ציבוריים.",
    "הימנעו מהבעת רגשות חזקים או תסכול במרחב הציבורי.",
    "הימנעו מאכילה או שתייה תוך כדי הליכה.",
    "הימנעו מהצבעה באצבע: השתמשו בכף יד פתוחה.",
  ]],
  ["כסף וקישוריות", [
    "אל תסתמכו רק על כרטיסי אשראי: החזיקו מעט ין במזומן.",
    "אל תבנו על Wi-Fi חינמי: היערכו מראש עם SIM או Wi-Fi נייד.",
    "אל תשאירו טיפ או עודף קטן במסעדות או בקופות: זה לא מקובל.",
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
  console.assert(days.every((day) => day.ja && day.ja.program.length === day.program.length), "Each day needs a Japanese itinerary");
  console.assert(days.every((day) => day.he && day.he.program.length === day.program.length), "Each day needs a Hebrew itinerary");
  console.assert(days[0].title.indexOf("Welcome") !== -1, "Day 1 should welcome the delegation to Tokyo");
  console.assert(days[0].program[0][0] === "11:40", "Day 1 should arrive at 11:40");
  console.assert(days[7].title.indexOf("Nihonbashi") !== -1, "Day 8 should be the Nihonbashi walk");
  console.assert(days[7].program[0][0] === "09:00–12:00", "Day 8 should start at 09:00");
  console.assert(days.every((day) => day.ja.items.length === day.items.length && day.he.items.length === day.items.length), "Each day needs matching highlight cards");
  console.assert(!dayPhotos[days[0].title], "Days without photos should not force old images");
  console.assert(!dayMaps[days[0].title], "Days without maps should not force old maps");
  console.assert(prep.length >= 1 && avoid.length >= 1, "Preparation and avoid pages should have content");
  ["overview", "schedule", "location", "model", "notes"].forEach((name) => {
    console.assert(Boolean(byId(`section-${name}`)), `Missing #section-${name}`);
    console.assert(Boolean(byId(`m-section-${name}`)), `Missing #m-section-${name}`);
  });
  console.assert(Boolean(byId("page-lines")), "Missing #page-lines");
  console.assert((window.LINE_PROFILES || []).length === 8, "Line info should list eight lines");
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

let mobileDatesLastTop = 0;
let mobileDatesIdleTimer = 0;
let mobileDatesTouching = false;
let mobileDatesAdjusting = false;
let mobileDatesAdjustTimer = 0;

function markDateLayout() {
  const scroller = document.querySelector(".m-content");
  mobileDatesAdjusting = true;
  clearTimeout(mobileDatesAdjustTimer);
  const settle = () => {
    if (scroller) mobileDatesLastTop = scroller.scrollTop;
  };
  requestAnimationFrame(settle);
  mobileDatesAdjustTimer = setTimeout(() => {
    mobileDatesAdjusting = false;
    settle();
  }, 360);
}

function dayScrollerAtTop() {
  const scroller = document.querySelector(".m-content");
  const onDay = document.getElementById("page-day")?.classList.contains("active");
  return !!(onDay && scroller && scroller.scrollTop <= 8);
}

function showMobileDates() {
  const days = document.querySelector(".m-days");
  if (!days || !days.classList.contains("is-hidden")) return;
  markDateLayout();
  days.classList.remove("is-hidden");
}

function pinMobileDates() {
  clearTimeout(mobileDatesIdleTimer);
  showMobileDates();
}

function hideMobileDates() {
  const days = document.querySelector(".m-days");
  if (!days || days.classList.contains("is-hidden")) return;
  markDateLayout();
  days.classList.add("is-hidden");
}

function queueHideMobileDates() {
  clearTimeout(mobileDatesIdleTimer);
  mobileDatesIdleTimer = setTimeout(() => {
    if (mobileDatesTouching || dayScrollerAtTop()) return;
    hideMobileDates();
  }, 480);
}

function bindMobileDateStrip() {
  const scroller = document.querySelector(".m-content");
  if (!scroller || scroller.dataset.datesBound === "1") return;
  scroller.dataset.datesBound = "1";
  mobileDatesLastTop = scroller.scrollTop;

  scroller.addEventListener("scroll", () => {
    if (!document.getElementById("page-day")?.classList.contains("active")) return;
    const top = scroller.scrollTop;
    const delta = top - mobileDatesLastTop;
    mobileDatesLastTop = top;
    if (mobileDatesAdjusting) return;
    if (top <= 8) {
      pinMobileDates();
      return;
    }
    if (Math.abs(delta) < 4) return;
    const roomBelow = scroller.scrollHeight - scroller.clientHeight - top;
    if (delta > 0) hideMobileDates();
    else if (roomBelow > 48) showMobileDates();
    queueHideMobileDates();
  }, { passive: true });

  document.addEventListener("touchstart", (event) => {
    if (event.target.closest(".m-days")) {
      mobileDatesTouching = true;
      clearTimeout(mobileDatesIdleTimer);
    }
  }, { passive: true });
  document.addEventListener("touchend", () => {
    if (!mobileDatesTouching) return;
    mobileDatesTouching = false;
    queueHideMobileDates();
  }, { passive: true });
  document.addEventListener("touchcancel", () => {
    mobileDatesTouching = false;
  }, { passive: true });
}

function scrollDayViewToTop() {
  holdSectionSpy("overview");
  pinMobileDates();
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
  notePlace();
}

function renderDateStrip() {
  byId("dateStrip").innerHTML = days
    .map(
      (day, index) => {
        const view = viewDay(day);
        return `
        <button class="date-btn ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button">
          <span>
            <span class="date-week">${view.w}</span>
            <span class="date-num">${day.d}</span>
          </span>
        </button>
      `;
      }
    )
    .join("");

}

function renderDayMap(frameId, day) {
  const frame = byId(frameId);
  const iframe = frame.querySelector("iframe");
  const map = dayMaps[day.titleEn || day.title];

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
        return `<li>${title}${label ? ` <span>${label}</span>` : ""}</li>`;
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

  const listHtml = rowHtml.includes("<li>")
    ? `<ul class="timeline-plan">${rowHtml}</ul>`
    : rowHtml ? `<div class="timeline-plan-extra">${rowHtml}</div>` : "";
  return `${listHtml}${embedHtml}`;
}

function renderScheduleBadge(link) {
  if (!link) return "";

  const label = programLang === "he" ? "קישור לאתר" : programLang === "ja" ? "ウェブサイト" : "Website Link";
  return `<a class="badge badge-link" href="${link}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function mobileScheduleHasDetails(entry) {
  const [, , label, plan, link] = entry;
  if (link) return true;
  if (label && String(label).trim()) return true;
  if (!Array.isArray(plan) || plan.length === 0) return false;

  const { rows, embeds } = splitSchedulePlan(plan);
  return rows.length > 0 || embeds.length > 0;
}

function escapeScheduleText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function splitScheduleLabel(label) {
  const text = String(label || "").replace(/\s+/g, " ").trim();
  if (!text) return { lead: "", body: "" };
  const jaEnd = text.search(/[。！？]/);
  const enEnd = text.search(/[.!?]\s/);
  let end = -1;
  if (jaEnd >= 0) end = jaEnd;
  if (enEnd >= 0 && (end < 0 || enEnd < end)) end = enEnd;
  if (end < 0) return { lead: "", body: text };
  const lead = text.slice(0, end + 1).trim();
  const body = text.slice(end + 1).trim();
  if (!body) return { lead: "", body: text };
  return { lead, body };
}

function scheduleLabelHtml(label) {
  const { lead, body } = splitScheduleLabel(label);
  if (!body && !lead) return "";
  const leadHtml = lead ? `<p class="m-schedule-item__lead">${escapeScheduleText(lead)}</p>` : "";
  const bodyHtml = body ? `<p class="m-schedule-item__label">${escapeScheduleText(body)}</p>` : "";
  return `${leadHtml}${bodyHtml}`;
}

function renderMobileScheduleEntry(entry) {
  const [time, title, label, plan, link] = entry;
  const hasDetails = mobileScheduleHasDetails(entry);
  const planHtml = hasDetails ? renderSchedulePlanBlock(plan, { mobile: true }) : "";
  const badgeHtml = renderScheduleBadge(link);
  const labelHtml = scheduleLabelHtml(label);

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
  notePlace();
}

function renderScheduleEntry(entry) {
  return renderMobileScheduleEntry(entry);
}

function getDayNotes(day) {
  return day.notesExtra ? `${day.theme}\n\n${day.notesExtra}` : day.theme;
}

function stationName(station) {
  if (programLang === "ja") return station.nameJa;
  if (programLang === "he") return station.nameHe;
  return station.name;
}

function stationButtonLabel(station) {
  if (programLang === "ja") return station.nameJa;
  return station.name;
}

const LINE_NAME_COLORS = [
  ["Tōkaidō Shinkansen", "#1B4F9C"],
  ["JR East Shinkansen", "#3CB44A"],
  ["Shōnan–Shinjuku", "#E4682C"],
  ["Keihin-Tōhoku", "#00B0E0"],
  ["Den-en-toshi Line", "#00A070"],
  ["Den-en-toshi", "#00A070"],
  ["Chūō–Sōbu", "#E0B400"],
  ["Chūō Rapid", "#FC8000"],
  ["Yurikamome Line", "#00A0E9"],
  ["Inokashira Line", "#3858B8"],
  ["Inokashira", "#3858B8"],
  ["Marunouchi Line", "#E40010"],
  ["Marunouchi", "#E40010"],
  ["Ueno–Tokyo", "#F08818"],
  ["Fukutoshin", "#985820"],
  ["Sōbu Rapid", "#E0B400"],
  ["Hanzōmon", "#9060B8"],
  ["Shinjuku Line", "#70BC38"],
  ["Odawara Line", "#2C68B8"],
  ["Odawara", "#2C68B8"],
  ["Yokosuka", "#0078C0"],
  ["Yamanote", "#80C040"],
  ["Tōkaidō", "#F08818"],
  ["Tōyoko Line", "#D01830"],
  ["Tōyoko", "#D01830"],
  ["Saikyō", "#008C60"],
  ["Asakusa Line", "#E85298"],
  ["Asakusa", "#E85298"],
  ["Hibiya Lines", "#7A7A72"],
  ["Hibiya Line", "#7A7A72"],
  ["Hibiya", "#7A7A72"],
  ["Keiyō", "#A01820"],
  ["Ginza Line", "#FF9500"],
  ["Ginza", "#FF9500"],
  ["Ōedo Line", "#B40078"],
  ["Ōedo", "#B40078"],
].sort((a, b) => b[0].length - a[0].length);

const LINE_NAME_PAGES = {
  "Ginza Line": "ginza",
  Ginza: "ginza",
  "Hibiya Lines": "hibiya",
  "Hibiya Line": "hibiya",
  Hibiya: "hibiya",
  Yamanote: "yamanote",
  "Ōedo Line": "oedo",
  Ōedo: "oedo",
  "Tōyoko Line": "toyoko",
  Tōyoko: "toyoko",
  "Odawara Line": "odakyu",
  Odawara: "odakyu",
  "Asakusa Line": "asakusa",
  Asakusa: "asakusa",
};

const LINE_NAME_KEEP = ["Higashi-Ginza", "at Ginza"];

function colorLineNames(route) {
  let text = String(route || "");
  const kept = [];
  LINE_NAME_KEEP.forEach((phrase, index) => {
    if (!text.includes(phrase)) return;
    const token = `\u0001${index}\u0001`;
    text = text.split(phrase).join(token);
    kept.push([token, phrase]);
  });
  const marks = [];
  LINE_NAME_COLORS.forEach(([phrase, color], index) => {
    if (!text.includes(phrase)) return;
    const token = `\u0000${index}\u0000`;
    text = text.split(phrase).join(token);
    marks.push([token, phrase, color]);
  });
  let html = escapeModelText(text);
  marks.forEach(([token, phrase, color]) => {
    const page = LINE_NAME_PAGES[phrase];
    const label = escapeModelText(phrase);
    const colored = page
      ? `<button type="button" class="station-line-name" data-station-line="${page}" style="color:${color}">${label}</button>`
      : `<span class="station-line-name" style="color:${color}">${label}</span>`;
    html = html.split(token).join(colored);
  });
  kept.forEach(([token, phrase]) => {
    html = html.split(token).join(escapeModelText(phrase));
  });
  return html;
}

function stationLineCells(operator, route) {
  const opHtml = colorLineNames(operator);
  const routeHtml = colorLineNames(route);
  if (!opHtml.includes("station-line-name")) {
    return [`<strong>${opHtml}</strong>`, routeHtml];
  }
  const holder = document.createElement("div");
  holder.innerHTML = opHtml;
  const lineNames = [...holder.querySelectorAll(".station-line-name")].map((el) => el.outerHTML);
  holder.querySelectorAll(".station-line-name").forEach((el) => el.remove());
  const company = holder.textContent.replace(/\s+/g, " ").trim();
  const line = [lineNames.join(", "), routeHtml].filter(Boolean).join(", ");
  return [`<strong>${escapeModelText(company)}</strong>`, line];
}

function stationDetailHtml(station) {
  const heading = programLang === "ja" ? "1日あたりの乗降人員" : programLang === "he" ? "תנועת נוסעים ביום" : "Daily passenger movements";
  const columns = programLang === "ja"
    ? ["事業者", "路線", "乗降人員"]
    : programLang === "he"
      ? ["מפעיל", "קו", "מספר נוסעים"]
      : ["Operator", "Line", "Number of passengers"];
  const rows = station.rows
    .map(([operator, route, count]) => {
      const [company, line] = stationLineCells(operator, route);
      return `<tr><td data-label="${escapeModelText(columns[0])}">${company}</td><td data-label="${escapeModelText(columns[1])}">${line}</td><td data-label="${escapeModelText(columns[2])}">${escapeModelText(count)}</td></tr>`;
    })
    .join("");
  return `<article class="station-detail">
      <h4>${stationName(station)}</h4>
      <p class="station-kana">${station.nameJa}</p>
      <p dir="ltr">${station.body}</p>
      <h5>${heading}</h5>
      <p class="station-total" dir="ltr">${station.total}</p>
      <table class="station-lines" dir="ltr">
        <thead><tr>${columns.map((label) => `<th>${label}</th>`).join("")}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
      ${station.note ? `<p class="station-note" dir="ltr">${station.note}</p>` : ""}
    </article>`;
}

function stationMapHtml(station) {
  if (!station.map) return "";
  const label = `${station.name} map`;
  return `<div class="line-map-scroll station-map"><img class="line-map" src="./${station.map}" alt="${label}" draggable="false"></div>`;
}

function renderDayStations(containerId, day) {
  const container = byId(containerId);
  if (!container) return;
  const stations = (day.stations || []).map((id) => window.STATION_PROFILES?.[id]).filter(Boolean);
  if (!stations.length) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }
  const shown = stations.find((station) => station.map) || stations[0];
  container.hidden = false;
  container.innerHTML = `<div class="station-signs">${stations
    .map((station) => {
      const label = escapeModelText(stationButtonLabel(station));
      const selected = station === shown ? " is-active" : "";
      return `<button type="button" class="city-model-chip station-sign-btn${selected}" data-station="${station.sign}" dir="ltr" aria-label="${label}" aria-expanded="false">${label}</button>`;
    })
    .join("")}</div>
    <div class="station-panel" hidden></div>
    <div class="station-stage">${shown.map ? stationMapHtml(shown) : ""}</div>`;
  bindLineMapZoom(container);
}

function toggleDayStation(button) {
  const block = button.closest(".day-stations");
  if (!block) return;
  const stations = (viewDay(days[currentDayIndex]).stations || [])
    .map((id) => window.STATION_PROFILES?.[id])
    .filter(Boolean);
  const station = stations.find((item) => item.sign === button.dataset.station);
  if (!station) return;
  const panel = block.querySelector(".station-panel");
  const stage = block.querySelector(".station-stage");
  const alreadyOpen = button.classList.contains("is-active") && !panel.hidden;
  block.querySelectorAll(".station-sign-btn").forEach((item) => {
    item.classList.remove("is-active");
    item.setAttribute("aria-expanded", "false");
  });
  if (alreadyOpen) {
    panel.hidden = true;
    panel.innerHTML = "";
    button.classList.add("is-active");
    return;
  }
  button.classList.add("is-active");
  button.setAttribute("aria-expanded", "true");
  stage.innerHTML = stationMapHtml(station);
  panel.innerHTML = stationDetailHtml(station);
  panel.hidden = false;
  bindLineMapZoom(block);
}

function renderDesktopDay(day) {
  const sideDay = byId("sideDay");
  const sideDate = byId("sideDate");
  if (sideDay) sideDay.textContent = dayCountLabel(currentDayIndex);
  if (sideDate) sideDate.textContent = `${formatWeekday(day.w)}, ${day.d}`;
  byId("title").textContent = day.title;
  byId("theme").textContent = day.theme;
  renderDayLineTags("dayLines", day);
  byId("dayLocation").textContent = day.city;
  renderDayMap("dayLocationMap", day);
  renderDayStations("dayStations", day);
  byId("dayNotes").textContent = getDayNotes(day);

  const photoEl = byId("dayPhoto");
  const overviewEl = photoEl.closest(".overview");
  const photoUrl = dayPhotos[day.titleEn || day.title];

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
  highlightsEl.classList.remove("highlights--1", "highlights--2", "highlights--3", "highlights--5");
  if ([1, 2, 3, 5].includes(day.items.length)) {
    highlightsEl.classList.add("highlights--" + day.items.length);
  }
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
  byId("mDayTitle").textContent = day.title;
  byId("mTheme").textContent = day.theme;
  renderDayLineTags("mDayLines", day);

  byId("mDaysRow").innerHTML = days
    .map(
      (entry, index) => {
        const view = viewDay(entry);
        return `
        <button class="m-date ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button" aria-label="${view.w} ${entry.d}">
          ${view.w}<br><b>${entry.d}</b>
        </button>
      `;
      }
    )
    .join("");

  byId("mSchedule").innerHTML = day.program.map((entry) => renderMobileScheduleEntry(entry)).join("");
  bindScheduleEmbedResize();
  scheduleEmbedResize();

  byId("mLocation").textContent = day.city;
  renderDayMap("mLocationMap", day);
  renderDayStations("mStations", day);
  byId("mNotes").textContent = getDayNotes(day);

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
  byId("prepDuringGrid").innerHTML = prepDuring.map(renderGuideCard).join("");
  byId("prepDuringGridHe").innerHTML = prepDuringHe.map(renderGuideCard).join("");
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
      if (item.startsWith("img:")) {
        const [src, alt = ""] = item.slice(4).split("|");
        return `<li class="guide-figure"><img src="${src}" alt="${alt}"></li>`;
      }
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

let sectionSpyHold = "";
let sectionSpyHoldTimer = 0;

function holdSectionSpy(section) {
  sectionSpyHold = section || "";
  clearTimeout(sectionSpyHoldTimer);
  sectionSpyHoldTimer = setTimeout(() => {
    sectionSpyHold = "";
    syncSectionFromScroll();
  }, 1400);
}

function syncSectionFromScroll() {
  if (liveMode === "follow") return;
  if (!document.getElementById("page-day")?.classList.contains("active")) return;

  const mobile = usesMobileProgram();
  const scroller = mobile ? document.querySelector(".m-content") : getDesktopScroller();
  if (!scroller) return;

  const names = ["overview", "schedule", "location", "model"];
  const box = scroller.getBoundingClientRect();
  const dateStrip = mobile ? null : document.querySelector(".date-strip");
  const viewTop = (dateStrip ? dateStrip.getBoundingClientRect().bottom : box.top) + 8;
  const viewBottom = box.bottom;

  let current = "overview";
  let best = -1;
  names.forEach((name) => {
    const el = document.getElementById(mobile ? `m-section-${name}` : `section-${name}`);
    if (!el || el.hidden || el.getClientRects().length === 0) return;
    const rect = el.getBoundingClientRect();
    const visible = Math.min(rect.bottom, viewBottom) - Math.max(rect.top, viewTop);
    if (visible >= best) {
      best = visible;
      current = name;
    }
  });

  if (sectionSpyHold && current !== sectionSpyHold) return;
  sectionSpyHold = "";
  clearTimeout(sectionSpyHoldTimer);

  const active = document.querySelector(".nav-program [data-section].active")?.dataset.section;
  if (active === current) return;
  setProgramNavActive(current);
  notifyParentSection(current);
}

function bindSectionSpy() {
  if (document.documentElement.dataset.sectionSpy === "1") return;
  document.documentElement.dataset.sectionSpy = "1";
  let frame = 0;
  const onScroll = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      syncSectionFromScroll();
    });
  };
  const desktop = getDesktopScroller();
  const mobile = document.querySelector(".m-content");
  if (desktop) desktop.addEventListener("scroll", onScroll, { passive: true });
  if (mobile && mobile !== desktop) mobile.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  requestAnimationFrame(syncSectionFromScroll);
}

function setProgramNavActive(section) {
  document.querySelectorAll(".nav-program [data-section]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === section);
  });
}

function goToDaySection(section) {
  if (section === "live") {
    if (window.ForumetroLive) window.ForumetroLive.enter();
    return;
  }
  const name = section === "day" ? "overview" : section === "lines" ? "tips" : section;
  holdSectionSpy(name);
  if (section === "tips" || section === "lines") {
    openLinePage();
    return;
  }
  const onLines = document.getElementById("page-lines")?.classList.contains("active");
  if (onLines) showPage("day", { scroll: false });
  setProgramNavActive(name);
  if (name === "overview") pinMobileDates();
  if (window.matchMedia("(max-width: 900px)").matches || document.documentElement.classList.contains("is-mobile-embed")) {
    scrollToMobileSection(name);
  } else {
    scrollToDaySection(name);
  }
  notePlace();
}

function lineEnglishName(line) {
  return String(line.label || "").split("|")[0].replace(/\s+/g, " ").trim();
}

function lineIconSvg(line) {
  const color = line.color;
  const code = line.code || "";
  if (line.id === "toyoko") {
    return `<svg class="line-icon" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="14" fill="${color}"/><text x="32" y="42" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800" fill="#fff">TY</text></svg>`;
  }
  if (line.id === "odakyu") {
    return `<svg class="line-icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="${color}"/><text x="32" y="42" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="800" fill="#fff">OH</text></svg>`;
  }
  if (line.id === "yamanote") {
    return `<svg class="line-icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="#fff" stroke="${color}" stroke-width="8"/><circle cx="32" cy="32" r="22" fill="none" stroke="#111" stroke-width="3"/><text x="32" y="38" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="800" fill="#111">JY</text></svg>`;
  }
  const size = code.length > 1 ? 18 : 28;
  return `<svg class="line-icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="${color}"/><circle cx="32" cy="32" r="20.5" fill="#fff"/><text x="32" y="42" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="800" fill="#111">${code}</text></svg>`;
}

function lineTagButton(line, attr) {
  const ink = lineInk(line.color, line.ink);
  const name = escapeModelText(lineEnglishName(line));
  return `<button type="button" class="line-tag" ${attr} aria-label="${name}" aria-expanded="false" style="--line:${line.color};--line-ink:${ink}">${lineIconSvg(line)}</button>`;
}

function renderDayLineTags(containerId, day) {
  const el = byId(containerId);
  if (!el) return;
  const profiles = window.LINE_PROFILES || [];
  const lines = (day.lines || [])
    .map((id) => profiles.find((line) => line.id === id))
    .filter(Boolean);
  el.hidden = lines.length === 0;
  const buttons = lines
    .map((line) => {
      return lineTagButton(line, `data-day-line="${line.id}"`);
    })
    .join("");
  el.innerHTML = `<div class="day-lines-row">${buttons}</div><div class="day-line-panel" hidden></div>`;
}

function bindLineMapZoom(root) {
  if (!root) return;
  const mobile = window.matchMedia("(max-width: 900px)").matches || document.documentElement.classList.contains("is-mobile-embed");
  if (!mobile) return;
  root.querySelectorAll(".line-map-scroll").forEach((frame) => {
    if (frame.dataset.zoomBound === "1") return;
    const img = frame.querySelector(".line-map");
    if (!img) return;
    frame.dataset.zoomBound = "1";
    let scale = 1;
    let x = 0;
    let y = 0;
    let mode = "";
    let start = null;
    const maxScale = 6;

    const apply = () => {
      const viewW = frame.clientWidth;
      const viewH = frame.clientHeight;
      const imgW = img.offsetWidth * scale;
      const imgH = img.offsetHeight * scale;
      if (imgW <= viewW) x = (viewW - imgW) / 2;
      else x = Math.min(0, Math.max(viewW - imgW, x));
      if (imgH <= viewH) y = 0;
      else y = Math.min(0, Math.max(viewH - imgH, y));
      img.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      frame.style.touchAction = scale > 1.02 ? "none" : "pan-y";
    };

    const span = (a, b) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

    frame.addEventListener("touchstart", (event) => {
      if (event.touches.length === 2) {
        mode = "pinch";
        const [a, b] = event.touches;
        start = {
          dist: Math.max(1, span(a, b)),
          scale,
          x,
          y,
          midX: (a.clientX + b.clientX) / 2,
          midY: (a.clientY + b.clientY) / 2
        };
      } else if (event.touches.length === 1 && scale > 1.02) {
        mode = "pan";
        start = { x: event.touches[0].clientX, y: event.touches[0].clientY, ox: x, oy: y };
      } else {
        mode = "";
      }
    }, { passive: true });

    frame.addEventListener("touchmove", (event) => {
      if (mode === "pinch" && event.touches.length >= 2 && start) {
        event.preventDefault();
        const [a, b] = event.touches;
        const next = Math.min(maxScale, Math.max(1, start.scale * (span(a, b) / start.dist)));
        const rect = frame.getBoundingClientRect();
        const mx = start.midX - rect.left;
        const my = start.midY - rect.top;
        const ratio = next / start.scale;
        x = mx - (mx - start.x) * ratio;
        y = my - (my - start.y) * ratio;
        scale = next;
        apply();
        return;
      }
      if (mode === "pan" && event.touches.length === 1 && start && scale > 1.02) {
        event.preventDefault();
        x = start.ox + (event.touches[0].clientX - start.x);
        y = start.oy + (event.touches[0].clientY - start.y);
        apply();
      }
    }, { passive: false });

    frame.addEventListener("touchend", (event) => {
      if (event.touches.length === 0) mode = "";
      else if (mode === "pinch" && event.touches.length < 2) mode = "";
    });

    frame.addEventListener("touchcancel", () => {
      mode = "";
    });

    img.addEventListener("load", () => {
      scale = 1;
      x = 0;
      y = 0;
      apply();
    });
    img.style.transformOrigin = "0 0";
    apply();
  });
}

function dayLineDetailHtml(line) {
  const labels = window.LINE_FIELD_LABELS || {};
  const profileNames = ["Technical & operational profile", "技術・運行の概要", "פרופיל טכני ותפעולי"];
  const profileTitle = programLang === "ja" ? profileNames[1] : programLang === "he" ? profileNames[2] : profileNames[0];
  const rows = line.rows
    .map(([key, value]) => {
      const names = labels[key] || [key, key, key];
      const shown = programLang === "ja" ? names[1] : programLang === "he" ? names[2] : names[0];
      return `<tr><th data-en="${escapeModelText(names[0])}" data-ja="${escapeModelText(names[1])}" data-he="${escapeModelText(names[2])}">${escapeModelText(shown)}</th><td>${escapeModelText(value)}</td></tr>`;
    })
    .join("");
  const map = line.map
    ? `<div class="line-map-scroll"><img class="line-map" src="./${line.map}" alt="${escapeModelText(line.label)} route map" draggable="false"></div>`
    : "";
  return `<div class="day-line-detail" style="--line:${line.color}">
    <h3>${escapeModelText(lineEnglishName(line))}</h3>
    ${map}
    <p class="line-intro">${escapeModelText(line.intro)}</p>
    <h4 class="line-profile-title" data-en="${escapeModelText(profileNames[0])}" data-ja="${escapeModelText(profileNames[1])}" data-he="${escapeModelText(profileNames[2])}">${escapeModelText(profileTitle)}</h4>
    <table class="line-table"><tbody>${rows}</tbody></table>
  </div>`;
}

function revealDayLinePanel(panel) {
  if (!panel) return;
  const row = panel.closest(".day-lines")?.querySelector(".day-lines-row") || panel;
  const mobile = usesMobileProgram();
  if (mobile) {
    const scroller = document.querySelector(".m-content");
    if (scroller) {
      const top = scroller.scrollTop + row.getBoundingClientRect().top - scroller.getBoundingClientRect().top - 8;
      scroller.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      return;
    }
  }
  updateDesktopScrollOffset();
  const dateStrip = document.querySelector(".date-strip");
  const scroller = getDesktopScroller();
  const limitBottom = dateStrip
    ? dateStrip.getBoundingClientRect().bottom + 14
    : scroller.getBoundingClientRect().top + 12;
  const y = scroller.scrollTop + row.getBoundingClientRect().top - limitBottom;
  scroller.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  keepParentTop();
}

function toggleDayLine(button) {
  const root = button.closest(".day-lines");
  const panel = root && root.querySelector(".day-line-panel");
  if (!root || !panel) return;
  const wasOpen = button.classList.contains("is-active");
  root.querySelectorAll(".line-tag").forEach((tag) => {
    tag.classList.remove("is-active");
    tag.setAttribute("aria-expanded", "false");
  });
  if (wasOpen) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
  const line = (window.LINE_PROFILES || []).find((item) => item.id === button.dataset.dayLine);
  if (!line) return;
  button.classList.add("is-active");
  button.setAttribute("aria-expanded", "true");
  const row = button.parentElement;
  if (row && row.classList.contains("day-lines-row")) {
    row.scrollTo({ left: Math.max(0, button.offsetLeft - 8), behavior: "smooth" });
  }
  panel.style.setProperty("--line", line.color);
  panel.innerHTML = dayLineDetailHtml(line);
  bindLineMapZoom(panel);
  panel.hidden = false;
  requestAnimationFrame(() => revealDayLinePanel(panel));
}

function lineInk(hex, fallback) {
  if (fallback) return fallback;
  const n = parseInt(String(hex || "").replace("#", ""), 16);
  if (!Number.isFinite(n)) return "#ffffff";
  const y = (((n >> 16) & 255) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000;
  return y > 170 ? "#1c3344" : "#ffffff";
}

function renderLinePage() {
  const tags = byId("lineTags");
  const sections = byId("lineSections");
  const profiles = window.LINE_PROFILES || [];
  if (!tags || !sections || !profiles.length) return;

  tags.innerHTML = profiles.map((line) => {
    return lineTagButton(line, `data-line="${line.id}"`);
  }).join("");

  sections.innerHTML = `<div class="line-panel" id="linePanel" hidden></div>`;
}

function revealLinePanel(panel) {
  if (!panel) return;
  const tags = document.getElementById("lineTags");
  const tagBottom = tags ? tags.getBoundingClientRect().bottom : 0;
  const panelTop = panel.getBoundingClientRect().top;
  if (panelTop >= tagBottom - 4 && panelTop < window.innerHeight * 0.55) return;
  const tagHeight = tags ? tags.offsetHeight : 0;
  const mobileEmbed = document.documentElement.classList.contains("is-mobile-embed");
  const narrow = window.matchMedia("(max-width: 900px)").matches;
  if (mobileEmbed) {
    const scroller = document.getElementById("page-lines");
    if (scroller) {
      const top = scroller.scrollTop + panel.getBoundingClientRect().top - scroller.getBoundingClientRect().top - tagHeight - 8;
      scroller.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      return;
    }
  }
  if (narrow) {
    const head = document.getElementById("mSubpageHead");
    const headH = head && !head.hidden ? head.offsetHeight : 0;
    const y = window.scrollY + panel.getBoundingClientRect().top - tagHeight - headH - 8;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    return;
  }
  scrollIframeTo(panel, tagHeight + 8);
}

function setLineSelection(lineId, toggle) {
  const panel = byId("linePanel");
  const profiles = window.LINE_PROFILES || [];
  const buttons = document.querySelectorAll("#lineTags .line-tag");
  if (!panel || !buttons.length) return;
  const active = document.querySelector("#lineTags .line-tag.is-active");
  if (toggle && active && active.dataset.line === lineId) return;
  const line = profiles.find((item) => item.id === lineId) || profiles.find((item) => item.id === "ginza");
  if (!line) return;
  buttons.forEach((btn) => {
    const on = btn.dataset.line === line.id;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-expanded", on ? "true" : "false");
    if (on && btn.parentElement) {
      btn.parentElement.scrollTo({ left: Math.max(0, btn.offsetLeft - 8), behavior: "smooth" });
    }
  });
  panel.style.setProperty("--line", line.color);
  panel.innerHTML = dayLineDetailHtml(line);
  bindLineMapZoom(panel);
  panel.hidden = false;
  requestAnimationFrame(() => revealLinePanel(panel));
  notePlace();
}

function notifyParentSection(section) {
  try {
    if (window.parent && window.parent !== window) {
      const outgoing = liveMode === "follow" ? "live" : section;
      window.parent.postMessage({ type: "forumetro:section", section: outgoing }, "*");
    }
  } catch (e) {}
}

function openLinePage(lineId) {
  const arriving = !document.getElementById("page-lines")?.classList.contains("active");
  showPage("lines");
  setProgramNavActive("tips");
  const current = document.querySelector("#lineTags .line-tag.is-active")?.dataset.line;
  setLineSelection(lineId || (arriving ? "ginza" : current || "ginza"), false);
  notifyParentSection("tips");
}

function resetPanelNav() {
  setProgramNavActive("overview");
}

let cityViewer = null;
let cityViewerUrl = "";
let cityModelDay = "";
let cityModelIndex = 0;
let liveMode = "off";
let applyingPlace = false;
let applyToken = 0;
let pendingLiveCamera = null;
let lastAppliedKey = "";
let lastAppliedOpen = null;
const placeListeners = [];
const cameraListeners = [];

function modelKey(url) {
  try {
    const path = new URL(url, document.baseURI).pathname;
    const mark = "/models/";
    const at = path.lastIndexOf(mark);
    if (at < 0) return null;
    return path.slice(at + 1);
  } catch (e) {
    return null;
  }
}

function readPlace() {
  const day = days[currentDayIndex];
  const onLines = document.getElementById("page-lines")?.classList.contains("active");
  let section = onLines
    ? "tips"
    : (document.querySelector(".nav-program [data-section].active")?.dataset.section || "overview");
  if (section === "live" || section === "notes") section = "overview";
  const line = onLines ? (document.querySelector("#lineTags .line-tag.is-active")?.dataset.line || null) : null;
  const models = dayModels(viewDay(day));
  const source = models[cityModelIndex] && models[cityModelIndex].src;
  const model = source ? modelKey(source) : null;
  let camera = null;
  if (model && cityViewer && typeof cityViewer.getViewState === "function") {
    const view = cityViewer.getViewState();
    if (view) {
      camera = {
        position: view.position.map((n) => Math.round(n * 100) / 100),
        target: view.target.map((n) => Math.round(n * 100) / 100),
        fov: Math.round(view.fov * 100) / 100,
      };
    }
  }
  const open = section === "schedule" ? scheduleOpenIndexes() : null;
  return { day: day.d, section, line, model, camera, open };
}

function scheduleLists() {
  return ["scheduleList", "mSchedule"].map((id) => document.getElementById(id)).filter(Boolean);
}

function activeScheduleList() {
  if (usesMobileProgram()) return document.getElementById("mSchedule") || document.getElementById("scheduleList");
  return document.getElementById("scheduleList") || document.getElementById("mSchedule");
}

function scheduleOpenIndexes() {
  const list = activeScheduleList();
  if (!list) return [];
  const open = [];
  list.querySelectorAll(".m-schedule-item").forEach((item, index) => {
    if (item.classList.contains("is-open")) open.push(index);
  });
  return open;
}

function revealScheduleItem(item) {
  if (!item) return;
  if (usesMobileProgram()) {
    const scroller = document.querySelector(".m-content");
    if (!scroller) return;
    const top = scroller.scrollTop + item.getBoundingClientRect().top - scroller.getBoundingClientRect().top - 12;
    scroller.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    return;
  }
  scrollIframeTo(item, 12);
}

function applyScheduleOpen(indexes) {
  const wanted = Array.isArray(indexes) ? indexes.slice().sort((a, b) => a - b) : [];
  const key = wanted.join(",");
  const prev = lastAppliedOpen == null ? [] : lastAppliedOpen.split(",").filter(Boolean).map(Number);
  const changed = lastAppliedOpen !== key;
  lastAppliedOpen = key;
  scheduleLists().forEach((list) => {
    list.querySelectorAll(".m-schedule-item").forEach((item, index) => {
      const details = item.querySelector(".m-schedule-item__details");
      const button = item.querySelector(".m-schedule-item__toggle");
      if (!details || !button || button.classList.contains("m-schedule-item__toggle--static")) return;
      const open = wanted.indexOf(index) !== -1;
      item.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      details.hidden = !open;
    });
  });
  if (wanted.length) {
    bindScheduleEmbedResize();
    scheduleEmbedResize();
  }
  if (!changed) return;
  const added = wanted.filter((index) => prev.indexOf(index) === -1);
  const focus = added.length ? added[added.length - 1] : -1;
  if (focus < 0) return;
  const list = activeScheduleList();
  const item = list && list.querySelectorAll(".m-schedule-item")[focus];
  requestAnimationFrame(() => {
    requestAnimationFrame(() => revealScheduleItem(item));
  });
}

function notePlace() {
  if (applyingPlace || liveMode !== "present") return;
  const place = readPlace();
  placeListeners.forEach((fn) => fn(place));
}

function noteCamera(settled) {
  if (applyingPlace || liveMode !== "present") return;
  cameraListeners.forEach((fn) => fn(settled));
}

function tryApplyLiveCamera() {
  if (!pendingLiveCamera || !cityViewer || typeof cityViewer.isModelReady !== "function") return;
  if (!cityViewer.isModelReady(pendingLiveCamera.model)) return;
  cityViewer.setViewState(pendingLiveCamera.camera, { immediate: pendingLiveCamera.immediate });
  pendingLiveCamera = null;
}

function applyPlace(snapshot, options) {
  if (!snapshot || typeof snapshot.day !== "string") return;
  const token = ++applyToken;
  applyingPlace = true;
  const index = days.findIndex((day) => day.d === snapshot.day);
  const dayChanged = index >= 0 && index !== currentDayIndex;
  if (index >= 0) currentDayIndex = index;
  const models = dayModels(days[currentDayIndex]);
  let modelChanged = false;
  if (snapshot.model) {
    const found = models.findIndex((model) => modelKey(model.src) === snapshot.model);
    if (found >= 0 && (dayChanged || found !== cityModelIndex)) {
      cityModelIndex = found;
      modelChanged = true;
    }
  }
  if (dayChanged) {
    cityModelDay = days[currentDayIndex].d;
    render({ resetNav: false });
  } else if (modelChanged) {
    syncCityModel(viewDay(days[currentDayIndex]));
  }
  const placeKey = [snapshot.day, snapshot.section, snapshot.line || "", snapshot.model || ""].join("|");
  const placeChanged = placeKey !== lastAppliedKey;
  lastAppliedKey = placeKey;
  if (placeChanged) {
    const onLines = document.getElementById("page-lines")?.classList.contains("active");
    if (snapshot.section === "tips") {
      const currentLine = document.querySelector("#lineTags .line-tag.is-active")?.dataset.line;
      if (!onLines || (snapshot.line && currentLine !== snapshot.line)) openLinePage(snapshot.line || undefined);
    } else if (snapshot.section) {
      goToDaySection(snapshot.section);
    }
  }
  pendingLiveCamera = snapshot.camera
    ? { model: snapshot.model, camera: snapshot.camera, immediate: !(options && options.immediate === false) }
    : null;
  tryApplyLiveCamera();
  applyScheduleOpen(snapshot.section === "schedule" ? snapshot.open : null);
  if (liveMode === "follow") setProgramNavActive("live");
  window.setTimeout(() => {
    if (token === applyToken) applyingPlace = false;
  }, 600);
}

function setLiveMode(mode) {
  liveMode = mode === "present" || mode === "follow" ? mode : "off";
  if (liveMode === "off") {
    lastAppliedKey = "";
    lastAppliedOpen = null;
  }
  if (cityViewer && typeof cityViewer.setControlsEnabled === "function") {
    cityViewer.setControlsEnabled(liveMode !== "follow");
  }
  if (liveMode === "follow") setProgramNavActive("live");
  document.documentElement.classList.toggle("is-live-follow", liveMode === "follow");
}

function bindViewerLive(viewer) {
  if (!viewer || viewer.__liveBound) return;
  viewer.__liveBound = true;
  if (typeof viewer.onViewChange === "function") viewer.onViewChange((state, settled) => noteCamera(settled));
  if (typeof viewer.onModelReady === "function") {
    viewer.onModelReady(() => {
      tryApplyLiveCamera();
      if (window.ForumetroLive && window.ForumetroLive.modelReady) window.ForumetroLive.modelReady();
    });
  }
  if (liveMode === "follow" && typeof viewer.setControlsEnabled === "function") viewer.setControlsEnabled(false);
}

function leaveLiveFor(event) {
  if (event.target.closest("#liveViewBanner, #liveHostOpen, [data-action='full'], .program-lang-btn")) return false;
  if (event.target.closest('.nav-program [data-section="live"]')) return false;
  return Boolean(event.target.closest(".nav-program [data-section], .nav-useful [data-page], .brand-home"));
}

window.ForumetroProgram = {
  readPlace,
  applyPlace,
  setMode: setLiveMode,
  onPlace(fn) {
    if (typeof fn === "function") placeListeners.push(fn);
  },
  onCamera(fn) {
    if (typeof fn === "function") cameraListeners.push(fn);
  },
};

function usesMobileProgram() {
  return window.matchMedia("(max-width: 900px)").matches || document.documentElement.classList.contains("is-mobile-embed");
}

function escapeModelText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function dayModels(day) {
  if (Array.isArray(day.models)) return day.models.filter((model) => model && model.src);
  if (day.model && day.model.src) return [day.model];
  return [];
}

function modelTitle(model) {
  if (programLang === "ja") return model.titleJa || model.title || "";
  if (programLang === "he") return model.titleHe || model.title || "";
  return model.title || "";
}

function paintModelChoices(models) {
  const several = models.length > 1;
  ["dayModelPicker", "mModelPicker"].forEach((id) => {
    const picker = byId(id);
    if (!picker) return;
    picker.hidden = !several;
    picker.innerHTML = several
      ? models
          .map(
            (model, index) =>
              `<button type="button" class="city-model-chip${index === cityModelIndex ? " is-active" : ""}" data-model-index="${index}">${escapeModelText(modelTitle(model))}</button>`
          )
          .join("")
      : "";
  });
  const caption = modelTitle(models[cityModelIndex] || {});
  ["dayModelCaption", "mModelCaption"].forEach((id) => {
    const el = byId(id);
    if (!el) return;
    el.hidden = several || !caption;
    el.textContent = several ? "" : caption;
  });
}

function attachCalibration(viewer) {
  if (!viewer) return;
  let calibrate = false;
  try {
    calibrate = new URLSearchParams(window.location.search).get("calibrate") === "1";
  } catch (e) {
    calibrate = false;
  }
  if (!calibrate) return;
  if (window.ForumetroCalibration) {
    window.ForumetroCalibration.sync(viewer);
    return;
  }
  if (attachCalibration.started) return;
  attachCalibration.started = true;
  import("./model-calibration.js?v=7").then((mod) => {
    if (cityViewer) mod.startCalibration(cityViewer);
  }).catch(() => {
    attachCalibration.started = false;
  });
}

function syncCityModel(day) {
  const models = dayModels(day);
  const show = models.length > 0;
  ["section-model", "m-section-model"].forEach((id) => {
    const section = byId(id);
    if (section) section.hidden = false;
  });
  ["dayModelEmpty", "mModelEmpty"].forEach((id) => {
    const el = byId(id);
    if (el) el.hidden = show;
  });
  if (cityModelDay !== day.d) {
    cityModelDay = day.d;
    cityModelIndex = 0;
  }
  if (cityModelIndex >= models.length) cityModelIndex = 0;
  paintModelChoices(models);
  if (!show) {
    if (cityViewer) {
      cityViewer.element.hidden = true;
      cityViewer.setActive(false);
    }
    return;
  }
  if (cityViewer) cityViewer.element.hidden = false;
  if (!window.ForumetroCityViewer) return;
  const mount = byId(usesMobileProgram() ? "mModelMount" : "dayModelMount");
  if (!mount) return;
  const moved = cityViewer && cityViewer.element.parentElement !== mount;
  if (!cityViewer) {
    cityViewer = window.ForumetroCityViewer.create(mount);
    applyChromeLanguage();
  } else if (moved) {
    mount.appendChild(cityViewer.element);
  }
  cityViewer.setActive(true);
  cityViewer.setOnSelect(null);
  const nextUrl = models[cityModelIndex].src;
  if (cityViewerUrl !== nextUrl) {
    cityViewerUrl = nextUrl;
    cityViewer.load(nextUrl);
  } else if (moved && cityViewer.refit) {
    cityViewer.refit();
  }
  attachCalibration(cityViewer);
  window.requestAnimationFrame(() => {
    if (!cityViewer) return;
    cityViewer.resize();
    if (moved) cityViewer.refit();
  });
  bindViewerLive(cityViewer);
}

window.addEventListener("forumetro:viewer-ready", () => {
  syncCityModel(viewDay(days[currentDayIndex]));
});
window.matchMedia("(max-width: 900px)").addEventListener("change", () => {
  syncCityModel(viewDay(days[currentDayIndex]));
});

function scheduleEmbedResize() {
  resizeScheduleEmbeds();
  requestAnimationFrame(resizeScheduleEmbeds);
}

function render(options) {
  const day = viewDay(days[currentDayIndex]);

  renderDateStrip();
  renderDesktopDay(day);
  renderMobileDay(day);
  syncCityModel(day);
  if (!options || options.resetNav !== false) resetPanelNav();
}

function formatWeekday(day) {
  return `${day[0]}${day.slice(1).toLowerCase()}`;
}

function showPage(pageName, options) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === `page-${pageName}`);
  });

  document.querySelectorAll("[data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });

  const subpageTitles = {
    prep: { en: "Preparation", ja: "準備", he: "הכנה" },
    avoid: { en: "What to Avoid", ja: "注意事項", he: "ממה להימנע" },
    contact: { en: "Contact", ja: "連絡先", he: "יצירת קשר" },
    travelog: { en: "Travelog", ja: "旅の記録", he: "יומן מסע" },
    lines: { en: "Line info", ja: "路線情報", he: "מידע על הקווים" },
  };
  const subpageHead = document.getElementById("mSubpageHead");
  const subpageTitle = document.getElementById("mSubpageTitle");
  if (subpageHead && subpageTitle) {
    if (subpageTitles[pageName]) {
      subpageTitle.setAttribute("data-en", subpageTitles[pageName].en);
      subpageTitle.setAttribute("data-ja", subpageTitles[pageName].ja);
      subpageTitle.setAttribute("data-he", subpageTitles[pageName].he);
      subpageTitle.textContent = textForLang(subpageTitle);
      subpageHead.hidden = false;
      document.body.classList.add("m-subpage-view");
    } else {
      subpageHead.hidden = true;
      document.body.classList.remove("m-subpage-view");
    }
  }

  if (!options || options.scroll !== false) {
    window.scrollTo({ top: 0, behavior: "auto" });
    scrollDesktopScroller(0, "auto");
    const mobileContent = document.querySelector(".m-content");
    if (mobileContent) mobileContent.scrollTo({ top: 0, behavior: "auto" });
  }
  keepParentTop();
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

  const run = () => {
    updateDesktopScrollOffset();
    const dateStrip = document.querySelector(".date-strip");
    const scroller = getDesktopScroller();
    const limitBottom = dateStrip
      ? dateStrip.getBoundingClientRect().bottom + 14
      : scroller.getBoundingClientRect().top + 12;
    const y = scroller.scrollTop + scrollTarget.getBoundingClientRect().top - limitBottom;
    scroller.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    keepParentTop();
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(run);
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
      mobileContent.scrollTo({ top: 0, behavior: "auto" });
      pinMobileDates();
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
  let lastPointerWasTouch = false;
  let touchModelChip = null;
  document.addEventListener("pointerdown", (event) => {
    lastPointerWasTouch = event.pointerType === "touch";
    touchModelChip = lastPointerWasTouch ? event.target.closest("[data-model-index]") : null;
  }, true);
  document.addEventListener("pointercancel", () => {
    touchModelChip = null;
  }, true);

  document.addEventListener("click", (event) => {
    if (liveMode === "follow") {
      if (leaveLiveFor(event) && window.ForumetroLive) {
        window.ForumetroLive.leave();
      } else if (event.target.closest("[data-day], [data-model-index], [data-line], [data-day-line], [data-station], .m-schedule-item__toggle")) {
        event.preventDefault();
        return;
      }
    }
    const homeButton = event.target.closest(".brand-home");
    if (homeButton) {
      event.preventDefault();
      goBackToDelegationAbout();
      return;
    }

    const stationLine = event.target.closest("[data-station-line]");
    if (stationLine?.dataset.stationLine) {
      event.preventDefault();
      openLinePage(stationLine.dataset.stationLine);
      return;
    }

    const stationButton = event.target.closest("[data-station]");
    if (stationButton?.dataset.station) {
      event.preventDefault();
      toggleDayStation(stationButton);
      return;
    }

    const dayLineButton = event.target.closest("[data-day-line]");
    if (dayLineButton?.dataset.dayLine) {
      event.preventDefault();
      toggleDayLine(dayLineButton);
      return;
    }

    const lineButton = event.target.closest("#lineTags [data-line]");
    if (lineButton?.dataset.line) {
      event.preventDefault();
      const onLines = document.getElementById("page-lines")?.classList.contains("active");
      if (!onLines) {
        openLinePage(lineButton.dataset.line);
        return;
      }
      setLineSelection(lineButton.dataset.line, true);
      return;
    }

    const pageButton = event.target.closest(".nav-useful [data-page], .back[data-page]");
    if (pageButton) {
      showPage(pageButton.dataset.page);
      if (pageButton.dataset.page === "day") setProgramNavActive("overview");
      return;
    }

    const dayButton = event.target.closest("[data-day]");
    if (dayButton) {
      setCurrentDay(Number(dayButton.dataset.day));
      return;
    }

    const modelChip = event.target.closest("[data-model-index]");
    if (modelChip) {
      if (lastPointerWasTouch && touchModelChip !== modelChip) return;
      cityModelIndex = Number(modelChip.dataset.modelIndex);
      syncCityModel(viewDay(days[currentDayIndex]));
      goToDaySection("model");
      return;
    }

    const sectionButton = event.target.closest(".nav-program [data-section]");
    if (sectionButton?.dataset.section) {
      goToDaySection(sectionButton.dataset.section);
      return;
    }

    const langButton = event.target.closest(".program-lang-btn");
    if (langButton) {
      event.preventDefault();
      const target = langButton.dataset.lang === "he" ? "he" : "ja";
      setProgramLang(programLang === target ? "en" : target);
      return;
    }

    const scheduleToggle = event.target.closest(".m-schedule-item__toggle:not(.m-schedule-item__toggle--static)");
    if (scheduleToggle) {
      toggleMobileScheduleItem(scheduleToggle);
    }
  });

  bindMobileDateStrip();
  bindSectionSpy();
}

renderLinePage();
runTests();
renderGuides();
(function startFromQuery() {
  try {
    var params = new URLSearchParams(window.location.search);
    var startPage = params.get("page");
    if (startPage === "lines") {
      render();
      openLinePage(params.get("line") || "");
      return;
    }
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
  if (event.data.type === "forumetro:go-line" && event.data.line) {
    openLinePage(event.data.line);
    return;
  }
  if (event.data.type === "forumetro:go-section" && event.data.section) {
    if (event.data.section === "live") {
      if (window.ForumetroLive) window.ForumetroLive.enter();
      return;
    }
    if (liveMode === "follow" && window.ForumetroLive) window.ForumetroLive.leave();
    if (event.data.line) openLinePage(event.data.line);
    else goToDaySection(event.data.section);
  }
  if (event.data.type === "forumetro:go-page" && event.data.page) {
    if (event.data.page === "lines") openLinePage(event.data.line || "");
    else showPage(event.data.page);
  }
  if (event.data.type === "forumetro:set-lang") setProgramLang(event.data.lang);
  if (event.data.type === "forumetro:reset-day" && currentDayIndex !== 0) {
    currentDayIndex = 0;
    render({ resetNav: false });
    if (document.getElementById("page-day")?.classList.contains("active")) scrollDayViewToTop();
  }
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
  if (title && !useful) {
    title.setAttribute("data-en", "Program");
    title.setAttribute("data-ja", "プログラム");
    title.setAttribute("data-he", "תוכנית");
    title.textContent = textForLang(title);
  } else if (title) {
    title.setAttribute("data-en", "Useful Information");
    title.setAttribute("data-he", "מידע שימושי");
    title.removeAttribute("data-ja");
    title.textContent = textForLang(title);
  }
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
  if (window.matchMedia("(max-width: 900px)").matches || document.documentElement.classList.contains("is-mobile-embed")) {
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
    if (!document.documentElement.classList.contains("is-mobile-embed") && !window.matchMedia("(max-width: 900px)").matches) {
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
