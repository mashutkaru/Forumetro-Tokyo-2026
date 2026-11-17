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
    city: "Narita Airport → Hotel / LUMIVEIL TOKYO / Shiodome",
    theme:
      "The opening day is dedicated to arrival, meeting the local team and settling into the hotel. An opening reception at LUMIVEIL TOKYO and an evening walk through Shiodome introduce the program and the area around the hotel.",
    tip: "Keep your passport easy to reach at Narita. The reception begins with a lobby meeting at 16:00.",
    notesExtra:
      "Airport arrival and traffic may shift the coach transfer and hotel check-in. The reception is at LUMIVEIL TOKYO.",
    items: [
      ["ARRIVAL", "Narita Airport, 11:40", ICONS.plane],
      ["CHECK-IN", "Hotel, 15:30", ICONS.suitcase],
      ["RECEPTION", "LUMIVEIL TOKYO, 17:00–20:00", ICONS.dinner],
      ["WALK", "Shiodome, 20:00–21:00", ICONS.stroll],
    ],
    program: [
      ["11:40", "Arrival at Narita International Airport", "Immigration, baggage collection and meeting the local coordination team"],
      ["13:00", "Coach transfer to central Tokyo", "Narita Airport to the hotel"],
      ["15:30", "Hotel check-in", ""],
      ["16:00–16:15", "Meet in the hotel lobby", "Departure for LUMIVEIL TOKYO"],
      ["16:30", "Arrival at LUMIVEIL TOKYO", ""],
      ["17:00–18:00", "Opening presentations", "Forumetro delegation and local organizing team"],
      ["18:00–20:00", "Banquet", "LUMIVEIL TOKYO"],
      ["20:00–21:00", "Expert-led walking tour", "Shiodome"],
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
      "The morning looks at how Tokyo's rail network was planned and financed, then follows a station from platform to street at Toranomon Hills. The afternoon goes inside a Tokyo Metro station to see how staff manage passengers and overnight work.",
    tip: "The Toranomon Hills walk follows the route from the platform to the street.",
    notesExtra: "",
    items: [
      ["LECTURE", "Professor Shigeru Morichi, 09:00–10:00", ICONS.presentation],
      ["STATION", "Toranomon Hills with Kazufumi Noyaki, 10:00–12:00", ICONS.train],
      ["TOKYO METRO", "Inside a station, 14:00–16:00", ICONS.hub],
    ],
    program: [
      [
        "09:00–10:00",
        "How Tokyo's Rail Network Shaped the City",
        "Lecture · Professor Shigeru Morichi. Professor Morichi specializes in transportation policy and national development planning. He began his career at Japanese National Railways and later served as president of the Institute for Transport Policy Studies.",
        [
          ["", "The roles of public agencies and private railways in Tokyo's growth", ""],
          ["", "Planning new metro lines, financing construction and recovering costs over time", ""],
          ["", "Adapting Tokyo's railway development model to other cities", ""],
        ],
      ],
      [
        "10:00–12:00",
        "Station Engineering and Integration with Urban Development",
        "Expert-led walk · Kazufumi Noyaki. Kazufumi Noyaki formerly led Tokyo Metro's department for construction and infrastructure improvements. At Toranomon Hills, he will trace the route from platform to street to show how the station fits into the surrounding redevelopment.",
        [
          ["", "Tunnelling and enlarging underground stations in dense urban areas", ""],
          ["", "Linking station concourses to nearby buildings and streets", ""],
          ["", "Maintaining train service and pedestrian access through each construction phase", ""],
        ],
      ],
      [
        "14:00–16:00",
        "Operating the Metro: Inside a Tokyo Metro Station",
        "Lecture · Tokyo Metro representative. Tokyo Metro's station teams manage passenger flows throughout the operating day. A representative will explain how staff anticipate crowding and schedule maintenance between the last train and the first.",
        [
          ["", "Station staff responsibilities throughout the operating day", ""],
          ["", "Managing passenger flows at ticket gates, on platforms and through transfer passages", ""],
          ["", "Scheduling overnight engineering work before the first train", ""],
        ],
      ],
    ],
    lines: ["ginza", "hibiya"],
    stations: ["toranomon", "ginza", "tokyo"],
    models: [
      {
        src: "../models/Toranomon-city-model.glb?v=3",
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
    tip: "The Tokyu session is a lecture and a walk through the station.",
    notesExtra: "",
    items: [
      ["SHIBUYA CITY", "Machizukuri lecture, 10:00–12:00", ICONS.presentation],
      ["TOKYU", "Lecture and station walk, 13:30–16:00", ICONS.building],
      ["COMMUTE", "Tatsuya Edakubo, 16:30–18:00", ICONS.train],
    ],
    program: [
      [
        "10:00–12:00",
        "Participatory Planning Around Shibuya Station",
        "Lecture · Shibuya City, Machizukuri Department. Shibuya City's Machizukuri Department works with residents and local businesses on neighborhood planning. The session examines how their input shapes streets and public spaces as the station district is rebuilt.",
        [
          ["", "How residents and local businesses participate in neighborhood planning", ""],
          ["", "How community proposals inform the design of streets and public spaces", ""],
          ["", "Working with local businesses to maintain customer access during construction", ""],
        ],
      ],
      [
        "13:30–16:00",
        "Tokyu's Rail, Real Estate and Town Management",
        "Lecture and expert-led station walk · Tokyu Corporation. Tokyu combines railway operations with property development and retail. The lecture and station walk explore how this business model shapes redevelopment around one of Tokyo's busiest interchanges.",
        [
          ["", "The town management company's role in coordinating activity across the district", ""],
          ["", "Tokyu's vision for Shibuya Station and the surrounding streets and commercial spaces", ""],
          ["", "Phasing construction to keep trains running, streets open and businesses accessible", ""],
        ],
      ],
      [
        "16:30–18:00",
        "The Daily Commute Along Tokyu's Suburban Lines",
        "Expert-led walk · Tatsuya Edakubo. Railway journalist Tatsuya Edakubo examines suburban rail from the passenger's perspective. The walk follows a commuter's route between station and neighborhood to explore how daily journeys shape local life.",
        [
          ["", "Commuters' daily routines, from the walk to the station to the journey home", ""],
          ["", "Passenger customs on busy platforms and trains, from queueing to boarding a crowded carriage", ""],
          ["", "The station as a neighborhood meeting place and a center for everyday life", ""],
        ],
      ],
    ],
    lines: ["ginza"],
    stations: ["shibuya"],
    models: [
      {
        src: "../models/Shibuya-city-model.glb?v=7",
        title: "Shibuya 1",
        titleJa: "Shibuya 1",
        titleHe: "Shibuya 1",
      },
      {
        src: "../models/Shibuya-city-model-complete.glb?v=1",
        title: "Shibuya 2",
        titleJa: "Shibuya 2",
        titleHe: "Shibuya 2",
      },
    ],
  },
  {
    w: "THU",
    d: "17.12",
    m: "DEC",
    title: "Public Transport, Planning and Shinjuku Station",
    city: "Toei, the Tokyo Metropolitan Government and Shinjuku Station",
    theme:
      "The morning is with Toei and the Tokyo Metropolitan Government, on public subway and bus services and how a transport project moves from policy to a local plan. The afternoon walks Shinjuku Station's south exit and the Busta bus terminal.",
    tip: "The guide for the Shinjuku walk is still to be confirmed.",
    notesExtra: "The guide for the Shinjuku station walk is still to be confirmed.",
    items: [
      ["TOEI", "Subway and buses, 10:00–11:00", ICONS.presentation],
      ["TMG", "Planning across government, 11:00–12:00", ICONS.building],
      ["SHINJUKU", "South Exit and Busta, 13:30–15:00", ICONS.train],
    ],
    program: [
      [
        "10:00–11:00",
        "Running Tokyo's Public Subway and Bus Services",
        "Lecture · Toei Transportation representative. Toei Transportation operates subways and buses for the Tokyo Metropolitan Government. Its representative will discuss what public ownership makes possible and where Toei depends on cooperation with other operators.",
        [
          ["", "The advantages and challenges of running a publicly owned transport network", ""],
          ["", "Coordinating bus and subway services at interchange stations", ""],
          ["", "Working with other railway companies on connections and passenger information", ""],
        ],
      ],
      [
        "11:00–12:00",
        "How Tokyo Plans Transport Across Levels of Government",
        "Lecture · Tokyo Metropolitan Government planning representative. A metropolitan planning representative will explain how a proposed transport investment moves from a regional priority to a local project. The session follows the decisions that connect railway planning with land use around stations.",
        [
          ["", "The planning hierarchy, from national policy to metropolitan strategy and ward plans", ""],
          ["", "The roles of the metropolitan government, wards and railway operators in advancing a project", ""],
          ["", "Coordinating land use and station access when a project crosses ward boundaries", ""],
        ],
      ],
      [
        "13:30–15:00",
        "Shinjuku Station's South Exit and Busta Bus Terminal",
        "Station walk · Guide to be confirmed. The walk traces how former railway land around Shinjuku's South Exit was redeveloped after the privatization of Japanese National Railways. At Busta Shinjuku, participants will follow a passenger's route from the railway station to the highway bus terminal.",
        [
          ["", "Redevelopment of former railway land", ""],
          ["", "Wayfinding between rail platforms and the highway bus terminal", ""],
          ["", "Pedestrian connections across the station district", ""],
        ],
      ],
    ],
    lines: ["yamanote"],
    stations: ["tochomae", "shinjuku"],
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
    tip: "The morning walk includes BONUS TRACK at Shimokita Senrogai.",
    notesExtra: "",
    items: [
      ["SETAGAYA", "Shimokita Senrogai, 09:30–12:00", ICONS.community],
      ["KITAMI", "Park above the depot, 14:00–15:00", ICONS.park],
    ],
    program: [
      [
        "09:30–12:00",
        "Community Planning Along Setagaya's Railway Corridor",
        "Lecture and expert-led neighborhood walk · Setagaya City. Kitazawa's community planning section works with residents on machizukuri, or community-led town planning. The walk through Shimokita Senrogai explores how the ward's planning, transport and parks teams approach the reuse of land above the Odakyu railway.",
        [
          ["", "Residents' role in Setagaya's neighborhood plans", ""],
          ["", "Reuse of former railway land at Shimokita Senrogai", ""],
          ["", "Walking routes, local shops and gathering places at BONUS TRACK", ""],
        ],
      ],
      [
        "14:00–15:00",
        "A Public Park Above a Working Depot",
        "Expert-led site visit · Odakyu. Odakyu will lead a visit to Kitami Fureai Plaza and the railway depot beneath it. Participants will examine how the park connects to neighborhood streets while the depot continues to operate below.",
        [
          ["", "Park entrances from surrounding streets", ""],
          ["", "The layout of the plaza above the depot", ""],
          ["", "Boundaries between public space and railway operations", ""],
        ],
      ],
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
    tip: "The day is free after breakfast. A group activity is planned for 18:00.",
    notesExtra: "Independent visits are optional. The group activity and its meeting point are still to be confirmed.",
    items: [
      ["GARDENS", "Hamarikyu Gardens", ICONS.park],
      ["GINZA", "Streets, architecture and public space", ICONS.stroll],
      ["ASAKUSA", "Sensoji Temple", ICONS.museum],
      ["EVENING", "Group activity, 18:00", ICONS.event],
    ],
    program: [
      ["08:00–09:00", "Breakfast", "Hotel"],
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
      "The morning is a site visit to Takanawa Gateway City with JR East, looking at a new model of railway-led urban development. A closing lunch turns to lessons for planning and building the Tel Aviv Metropolitan Metro. The afternoon is free.",
    tip: "The group program ends after lunch. From 14:00 the time is free for shopping and independent plans.",
    notesExtra:
      "Breakfast is at the hotel; the time is still to be confirmed. The JR East visit details and the closing lunch venue are still to be confirmed.",
    items: [
      ["TRANSFER", "Takanawa Gateway Station, 09:00–09:30", ICONS.transfer],
      ["TAKANAWA", "JR East site visit, 09:30–11:30", ICONS.innovation],
      ["DISCUSSION", "Closing lunch, 12:00–14:00", ICONS.panel],
      ["FREE TIME", "From 14:00", ICONS.leisure],
    ],
    program: [
      ["08:30–08:45", "Morning briefing", "Hotel"],
      ["09:00–09:30", "Transfer to Takanawa Gateway Station", ""],
      [
        "09:30–11:30",
        "Site visit",
        "JR East — TAKANAWA GATEWAY CITY: architecture, station-city integration, pedestrian networks and innovation. Details to be confirmed.",
      ],
      ["11:30–12:00", "Transfer to the lunch venue", "Venue to be confirmed"],
      [
        "12:00–14:00",
        "Closing lunch and discussion",
        "From Tokyo to Tel Aviv: Lessons for Building a Metropolitan Metro",
      ],
      ["14:00", "Free time", "Shopping and independent activities"],
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
    title: "Planning Around Nihonbashi Station",
    city: "Nihonbashi, Chūō City",
    theme:
      "Chūō City leads a walk around Nihonbashi Station, on fitting new station entrances, pedestrian routes and public space into a historic commercial district.",
    tip: "The walk looks at new station entrances within Nihonbashi's historic streets.",
    notesExtra: "",
    items: [
      ["NIHONBASHI", "Chūō City walk, 09:00–12:00", ICONS.stroll],
    ],
    program: [
      [
        "09:00–12:00",
        "Planning Around Nihonbashi Station in a Historic Commercial District",
        "Expert-led walk · Chūō City. Chūō City will introduce the planning choices involved in redeveloping sites around Nihonbashi Station. The walk will examine how new station entrances, pedestrian routes and public spaces can fit into a district defined by historic streets and buildings.",
        [
          ["", "Fitting accessible station entrances into the existing street network", ""],
          ["", "Connecting new public spaces to the district's historic commercial streets", ""],
          ["", "Preserving historic buildings and street patterns as station-area sites are redeveloped", ""],
        ],
      ],
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
    city: "成田空港 → ホテル／ルミヴェール東京／汐留",
    theme:
      "初日は到着、現地チームとの対面、ホテルへの到着にあてられます。ルミヴェール東京での開会レセプションと、汐留の夕方の徒歩視察で、プログラムとホテル周辺のまちを紹介します。",
    tip: "成田空港ではパスポートを取り出しやすくしておいてください。レセプションは16:00のロビー集合から始まります。",
    notesExtra:
      "空港到着や道路状況により、貸切バスの移動とホテルのチェックイン時刻が変わることがあります。レセプションはルミヴェール東京で行います。",
    items: [
      ["到着", "成田空港、11:40"],
      ["チェックイン", "ホテル、15:30"],
      ["レセプション", "ルミヴェール東京、17:00–20:00"],
      ["徒歩視察", "汐留、20:00–21:00"],
    ],
    program: [
      ["11:40", "成田国際空港に到着", "入国審査、手荷物受取、現地運営チームとの合流"],
      ["13:00", "貸切バスで東京都心へ", "成田空港からホテルへ"],
      ["15:30", "ホテルチェックイン", ""],
      ["16:00–16:15", "ホテルロビーに集合", "ルミヴェール東京へ出発"],
      ["16:30", "ルミヴェール東京に到着", ""],
      ["17:00–18:00", "開会発表", "FORUMETRO視察団と現地運営チーム"],
      ["18:00–20:00", "懇親会", "ルミヴェール東京"],
      ["20:00–21:00", "専門家による徒歩視察", "汐留"],
    ],
  },
  {
    w: "火",
    title: "東京の鉄道網、駅の整備、メトロの運営",
    city: "虎ノ門ヒルズと東京メトロ",
    theme:
      "午前は、東京の鉄道網がどのように計画され、建設費が賄われてきたかを学び、虎ノ門ヒルズでホームから街路まで駅のつながりをたどります。午後は東京メトロの駅に入り、係員が乗客の流れと夜間作業をどう扱うかを見ます。",
    tip: "虎ノ門ヒルズの視察は、ホームから街路までの経路をたどります。",
    notesExtra: "",
    items: [
      ["講演", "森地茂教授、09:00–10:00"],
      ["駅", "野焼計史と虎ノ門ヒルズ、10:00–12:00"],
      ["東京メトロ", "駅の内側、14:00–16:00"],
    ],
    program: [
      [
        "09:00–10:00",
        "東京の鉄道網は都市をどうかたちづくったか",
        "講演 · 森地茂教授。森地教授は交通政策と国土計画を専門とします。日本鉄道に勤務したのち、運輸政策研究機構の会長を務めました。",
        [
          ["", "東京の成長における公的機関と私鉄の役割", ""],
          ["", "新しい地下鉄路線の計画、建設費の調達、長期にわたる費用の回収", ""],
          ["", "東京の鉄道整備のモデルを他の都市にどう活かすか", ""],
        ],
      ],
      [
        "10:00–12:00",
        "駅のエンジニアリングと都市開発との一体整備",
        "専門家による徒歩視察 · 野焼計史。野焼計史は、東京メトロで建設と基盤整備を担う部門を率いていました。虎ノ門ヒルズでは、ホームから街路までの経路をたどり、駅が周辺の再開発にどう納まるかを示します。",
        [
          ["", "密集した市街地でのトンネル施工と地下駅の拡大", ""],
          ["", "駅のコンコースを周辺の建物や街路につなぐこと", ""],
          ["", "工事の各段階で列車の運行と歩行者の通行を保つこと", ""],
        ],
      ],
      [
        "14:00–16:00",
        "メトロの運営：東京メトロの駅の内側",
        "講演 · 東京メトロの担当者。東京メトロの駅員は、営業時間を通して乗客の流れを扱います。担当者は、混雑を見込んだ人員配置と、終電から始発までの間に行う保守作業の組み立てを説明します。",
        [
          ["", "営業時間を通した駅員の役割", ""],
          ["", "改札、ホーム、乗り換え通路での乗客の流れの管理", ""],
          ["", "始発の前に終える夜間工事の日程", ""],
        ],
      ],
    ],
  },
  {
    w: "水",
    title: "渋谷：参加型の計画、東急、日々の通勤",
    city: "渋谷駅と東急の郊外路線",
    theme:
      "この日は渋谷駅の周辺です。区とともに進める参加型のまちづくり、鉄道・不動産・商業を組み合わせる東急の事業、そして郊外の通勤路を歩きます。",
    tip: "東急のプログラムは、説明と駅の徒歩視察です。",
    notesExtra: "",
    items: [
      ["渋谷区", "まちづくりの講演、10:00–12:00"],
      ["東急", "説明と駅の視察、13:30–16:00"],
      ["通勤", "枝久保達也、16:30–18:00"],
    ],
    program: [
      [
        "10:00–12:00",
        "渋谷駅周辺の参加型まちづくり",
        "講演 · 渋谷区まちづくり推進部。渋谷区のまちづくり推進部は、住民や地元の事業者とともに地区の計画を進めます。駅周辺の再整備の中で、その意見が通りや公共空間のデザインにどう反映されるかを扱います。",
        [
          ["", "住民と地元事業者が地区の計画に参加するしくみ", ""],
          ["", "地域からの提案が通りや公共空間のデザインにどう活きるか", ""],
          ["", "工事中も来街者が店に来られるよう、地元事業者と調整すること", ""],
        ],
      ],
      [
        "13:30–16:00",
        "東急の鉄道、不動産、タウンマネジメント",
        "講演と専門家による駅の徒歩視察 · 東急株式会社。東急は鉄道の運行に、不動産開発と商業を組み合わせています。説明と駅の視察では、この事業の形が、東京でも特に乗換の多い地点の再開発をどう方向づけているかを見ます。",
        [
          ["", "地区全体の活動を調整するタウンマネジメント会社の役割", ""],
          ["", "渋谷駅と周辺の通り、商業空間に対する東急の構想", ""],
          ["", "列車を走らせ、通りを開け、店へのアクセスを保ったまま進める段階的な工事", ""],
        ],
      ],
      [
        "16:30–18:00",
        "東急の郊外路線における日々の通勤",
        "専門家による徒歩視察 · 枝久保達也。鉄道ジャーナリストの枝久保達也は、乗客の目線から郊外鉄道を見ています。駅とまちのあいだの通勤経路を歩き、日々の移動が地域の暮らしをどうかたちづくるかを探ります。",
        [
          ["", "駅までの徒歩から帰宅まで、定期利用者の一日の流れ", ""],
          ["", "混んだホームと車内でのならび方、列への入り方などの乗車の習慣", ""],
          ["", "地域の人が集まり、日常の拠点になる駅", ""],
        ],
      ],
    ],
  },
  {
    w: "木",
    title: "公共交通、都市計画、新宿駅",
    city: "都営交通、東京都、新宿駅",
    theme:
      "午前は都営交通と東京都から、公営の地下鉄・バスと、交通の事業が政策から地区の計画になる過程を聞きます。午後は新宿駅の南口とバスタ新宿を歩きます。",
    tip: "新宿の徒歩視察の案内者は未定です。",
    notesExtra: "新宿駅の徒歩視察の案内者は未定です。",
    items: [
      ["都営", "地下鉄とバス、10:00–11:00"],
      ["東京都", "行政の各層にまたがる計画、11:00–12:00"],
      ["新宿", "南口とバスタ、13:30–15:00"],
    ],
    program: [
      [
        "10:00–11:00",
        "東京の公営地下鉄とバスを運営する",
        "講演 · 都営交通の担当者。都営交通は東京都のために地下鉄とバスを運行しています。担当者は、公営であることで可能になることと、他の事業者との協力が欠かせない点を話します。",
        [
          ["", "公営の交通ネットワークを運営する利点と課題", ""],
          ["", "乗換駅でのバスと地下鉄の調整", ""],
          ["", "他の鉄道会社との接続や、乗客への案内での協力", ""],
        ],
      ],
      [
        "11:00–12:00",
        "行政の各層にまたがる東京の交通計画",
        "講演 · 東京都の計画担当者。東京都の計画担当者が、交通への投資案が広域の優先事業から地区の事業になる過程を説明します。鉄道の計画と駅周辺の土地利用をつなぐ判断をたどります。",
        [
          ["", "国の政策から都の戦略、区の計画へと下りる計画の階層", ""],
          ["", "事業を進めるうえでの都、区、鉄道事業者の役割", ""],
          ["", "事業が区境をまたぐときの土地利用と駅へのアクセスの調整", ""],
        ],
      ],
      [
        "13:30–15:00",
        "新宿駅南口とバスタ新宿",
        "駅の徒歩視察 · 案内者は未定。日本国有鉄道の民営化のあと、新宿駅南口周辺の旧鉄道用地がどう再開発されたかをたどります。バスタ新宿では、鉄道駅から高速バス乗り場までの乗客の経路を歩きます。",
        [
          ["", "旧鉄道用地の再開発", ""],
          ["", "鉄道のホームから高速バス乗り場までの案内", ""],
          ["", "駅周辺を通る歩行者のつながり", ""],
        ],
      ],
    ],
  },
  {
    w: "金",
    title: "世田谷の鉄道沿線における地域のまちづくり",
    city: "下北線路街ときたみふれあい広場",
    theme:
      "世田谷区が、鉄道沿線での地域主体のまちづくりを紹介し、下北線路街を歩きます。そのあと小田急が、喜多見の車両基地の上にある公共の公園を案内します。",
    tip: "午前のまち歩きには、下北線路街のBONUS TRACKが含まれます。",
    notesExtra: "",
    items: [
      ["世田谷", "下北線路街、09:30–12:00"],
      ["喜多見", "車両基地の上の公園、14:00–15:00"],
    ],
    program: [
      [
        "09:30–12:00",
        "世田谷の鉄道沿線における地域のまちづくり",
        "講演と専門家によるまち歩き · 世田谷区。北沢の地域計画の担当は、住民とともにまちづくりを進めています。下北線路街のまち歩きでは、区の計画、交通、公園の担当が、小田急線の上の土地の再利用にどう向き合っているかを見ます。",
        [
          ["", "世田谷の地区計画における住民の役割", ""],
          ["", "下北線路街における旧鉄道用地の再利用", ""],
          ["", "BONUS TRACKの歩行路、地元の店、人が集まる場所", ""],
        ],
      ],
      [
        "14:00–15:00",
        "稼働する車両基地の上の公共の公園",
        "専門家による現地視察 · 小田急。小田急が、きたみふれあい広場とその下の車両基地を案内します。基地が下で動き続けながら、公園が周辺の街路とどうつながるかを見ます。",
        [
          ["", "周辺の街路からの公園の入り口", ""],
          ["", "車両基地の上の広場の配置", ""],
          ["", "公共空間と鉄道の運用区域との境界", ""],
        ],
      ],
    ],
  },
  {
    w: "土",
    title: "東京を知る：文化、公共空間、都市の暮らし",
    city: "東京 — 各自での見学",
    theme:
      "この日は東京を各自で歩き、歴史のあるまち、風景、日常の都市生活に触れます。任意の見学では、伝統的な場所、商業、現代の都市が隣り合う様子が見られます。",
    tip: "朝食のあとは自由時間です。18:00にグループ活動を予定しています。",
    notesExtra: "各自の見学は任意です。グループ活動の内容と集合場所は未定です。",
    items: [
      ["庭園", "浜離宮恩賜庭園"],
      ["銀座", "通り、建築、公共空間"],
      ["浅草", "浅草寺"],
      ["夕方", "グループ活動、18:00"],
    ],
    program: [
      ["08:00–09:00", "朝食", "ホテル"],
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
      "午前はJR東日本とともに高輪ゲートウェイシティを訪れ、鉄道を軸とした新しい都市開発を見ます。閉会昼食では、テルアビブ都市圏メトロの計画と整備への示唆を話し合います。午後は自由時間です。",
    tip: "グループのプログラムは昼食のあとで終わります。14:00以降は買い物や各自の予定に使えます。",
    notesExtra: "朝食はホテルでとります。時刻は未定です。JR東日本の視察内容と閉会昼食の会場は未定です。",
    items: [
      ["移動", "高輪ゲートウェイ駅、09:00–09:30"],
      ["高輪", "JR東日本の現地視察、09:30–11:30"],
      ["意見交換", "閉会昼食、12:00–14:00"],
      ["自由時間", "14:00以降"],
    ],
    program: [
      ["08:30–08:45", "朝の事前説明", "ホテル"],
      ["09:00–09:30", "高輪ゲートウェイ駅へ移動", ""],
      ["09:30–11:30", "現地視察", "JR東日本 — 高輪ゲートウェイシティ：建築、駅とまちの一体整備、歩行者ネットワーク、イノベーション。詳細は未定。"],
      ["11:30–12:00", "昼食会場へ移動", "会場は未定"],
      ["12:00–14:00", "閉会昼食と意見交換", "東京からテルアビブへ：都市圏メトロ整備への示唆"],
      ["14:00", "自由時間", "買い物と各自の活動"],
    ],
  },
  {
    w: "月",
    title: "日本橋駅周辺の計画",
    city: "日本橋、中央区",
    theme:
      "中央区の案内で日本橋駅の周辺を歩き、新しい駅の出入口、歩行者の経路、公共空間を、歴史のある商業地区にどう納めるかを見ます。",
    tip: "日本橋の歴史のある街路の中に、新しい駅の出入口をどう入れるかを見ます。",
    notesExtra: "",
    items: [
      ["日本橋", "中央区による徒歩視察、09:00–12:00"],
    ],
    program: [
      [
        "09:00–12:00",
        "歴史のある商業地区における日本橋駅周辺の計画",
        "専門家による徒歩視察 · 中央区。中央区が、日本橋駅周辺の敷地を再開発するときの計画上の選択を紹介します。新しい駅の出入口、歩行者の経路、公共空間を、歴史のある街路と建物が特徴の地区にどう納められるかを歩いて見ます。",
        [
          ["", "今ある街路のネットワークに、だれもが使える駅の出入口を納めること", ""],
          ["", "新しい公共空間を、地区の歴史のある商業の街路につなぐこと", ""],
          ["", "駅周辺の敷地を再開発するとき、歴史のある建物と街路の形を残すこと", ""],
        ],
      ],
    ],
  },
];

const daysHe = [
  {
    w: "ב׳",
    title: "ברוכים הבאים לטוקיו",
    city: "נמל התעופה נריטה · המלון · LUMIVEIL TOKYO · שיודומה",
    theme:
      "היום הראשון מוקדש להגעה, למפגש עם הצוות המקומי ולהתארגנות במלון. קבלת פנים ב-LUMIVEIL TOKYO והליכת ערב בשיודומה מציגות את התוכנית ואת האזור שסביב המלון.",
    tip: "החזיקו את הדרכון בהישג יד בנריטה. קבלת הפנים מתחילה במפגש בלובי בשעה 16:00.",
    notesExtra:
      "שעת הנחיתה והעומס בדרכים עשויים להזיז את ההסעה ואת הצ'ק-אין במלון. קבלת הפנים מתקיימת ב-LUMIVEIL TOKYO.",
    items: [
      ["הגעה", "נמל התעופה נריטה, 11:40"],
      ["צ'ק-אין", "מלון, 15:30"],
      ["קבלת פנים", "LUMIVEIL TOKYO, 17:00–20:00"],
      ["סיור אוריינטציה", "שיודומה, 20:00–21:00"],
    ],
    program: [
      ["11:40", "הגעה לנמל התעופה הבין-לאומי נריטה", "ביקורת גבולות, איסוף כבודה ומפגש עם צוות התיאום המקומי"],
      ["13:00", "הסעה באוטובוס למרכז טוקיו", "מנמל התעופה נריטה אל המלון"],
      ["15:30", "צ'ק-אין במלון", ""],
      ["16:00–16:15", "מפגש בלובי המלון", "יציאה אל LUMIVEIL TOKYO"],
      ["16:30", "הגעה ל-LUMIVEIL TOKYO", ""],
      ["17:00–18:00", "מצגות פתיחה", "משלחת פורומטרו והצוות המארגן המקומי"],
      ["18:00–20:00", "ארוחת ערב חגיגית", "LUMIVEIL TOKYO"],
      ["20:00–21:00", "סיור אוריינטציה רגלי בהדרכת מומחה", "תחנת שיודומה/שינבשי"],
    ],
  },
  {
    w: "ג׳",
    title: "רשת הרכבות של טוקיו, תחנות ותפעול",
    city: "טורנומון הילס וטוקיו מטרו",
    theme:
      "הבוקר בוחן כיצד תוכננה ומומנה רשת הרכבות של טוקיו, ואז עוקב אחר תחנה מהרציף אל הרחוב בטורנומון הילס. אחר הצהריים נכנסים לתחנה של טוקיו מטרו ורואים איך הצוות מנהל את תנועת הנוסעים ואת העבודות בלילה.",
    tip: "הסיור בטורנומון הילס עוקב אחר המסלול מהרציף אל הרחוב.",
    notesExtra: "",
    items: [
      ["הרצאה", "פרופ׳ שיגרו מוריצ׳י, 09:00–10:00"],
      ["תחנה", "טורנומון הילס עם קזופומי נויאקי, 10:00–12:00"],
      ["טוקיו מטרו", "בתוך תחנה, 14:00–16:00"],
    ],
    program: [
      [
        "09:00–10:00",
        "כיצד עיצבה רשת הרכבות של טוקיו את העיר",
        "הרצאה · פרופ׳ שיגרו מוריצ׳י. פרופ׳ מוריצ׳י מתמחה במדיניות תחבורה ובתכנון פיתוח ברמה הלאומית. הוא החל את דרכו בחברת הרכבות הלאומית של יפן ובהמשך כיהן כנשיא המכון לחקר מדיניות התחבורה.",
        [
          ["", "חלקם של גופים ציבוריים ושל חברות רכבת פרטיות בצמיחתה של טוקיו", ""],
          ["", "תכנון קווי מטרו חדשים, מימון הקמתם והחזר ההשקעה לאורך זמן", ""],
          ["", "התאמת המודל של טוקיו לפיתוח מסילתי בערים אחרות", ""],
        ],
      ],
      [
        "10:00–12:00",
        "הנדסת תחנות ושילובן בפיתוח העירוני",
        "סיור מקצועי בהדרכת קזופומי נויאקי. קזופומי נויאקי עמד בעבר בראש המחלקה לבנייה ולשדרוג תשתיות בחברת טוקיו מטרו. בתחנת טורנומון הילס הוא יוביל את המשתתפים מהרציף אל הרחוב ויראה כיצד התחנה משתלבת במתחם המתחדש סביבה.",
        [
          ["", "כריית מנהרות והרחבת תחנות תת־קרקעיות בסביבה עירונית צפופה", ""],
          ["", "חיבור אולמות התחנה למבנים ולרחובות סמוכים", ""],
          ["", "שמירה על שירות הרכבות ועל מעברים פתוחים להולכי רגל בכל שלבי הבנייה", ""],
        ],
      ],
      [
        "14:00–16:00",
        "תפעול המטרו מבפנים – בתחנה של טוקיו מטרו",
        "הרצאה · נציג טוקיו מטרו. צוותי התחנות של טוקיו מטרו מנהלים את תנועת הנוסעים לאורך יום הפעילות. נציג החברה יסביר כיצד הצוותים נערכים לעומסים ומתזמנים עבודות תחזוקה בין הרכבת האחרונה בלילה לראשונה בבוקר.",
        [
          ["", "תחומי האחריות של צוות התחנה לאורך יום הפעילות", ""],
          ["", "ניהול תנועת הנוסעים בשערי הכרטוס, ברציפים ובמעברי ההחלפה", ""],
          ["", "תזמון עבודות תשתית בלילה והשלמתן לפני הרכבת הראשונה", ""],
        ],
      ],
    ],
  },
  {
    w: "ד׳",
    title: "שיבויה: תכנון, טוקיו והנסיעה היומיומית",
    city: "תחנת שיבויה וקווי הפרברים של טוקיו",
    theme:
      "היום נשאר סביב תחנת שיבויה: תכנון בשיתוף הציבור עם הרובע, השילוב של טוקיו בין רכבות, נדל״ן ומסחר, וסיור לאורך נסיעת יוממים בפרברים.",
    tip: "המפגש עם טוקיו כולל הרצאה וסיור בתחנה.",
    notesExtra: "",
    items: [
      ["רובע שיבויה", "הרצאה על מאצ׳יזוקורי, 10:00–12:00"],
      ["טוקיו", "הרצאה וסיור בתחנה, 13:30–16:00"],
      ["נסיעה יומית", "טטסויה אדקובו, 16:30–18:00"],
    ],
    program: [
      [
        "10:00–12:00",
        "תכנון בשיתוף הציבור סביב תחנת שיבויה",
        "הרצאה · מחלקת המאצ׳יזוקורי בעיריית רובע שיבויה. מחלקת המאצ׳יזוקורי של שיבויה עוסקת בתכנון שכונתי בשיתוף תושבים ועסקים מקומיים. המפגש יעסוק באופן שבו הצעותיהם משפיעות על עיצוב הרחובות והמרחבים הציבוריים במהלך פיתוחו מחדש של מתחם התחנה.",
        [
          ["", "שיתוף תושבים ועסקים מקומיים בתכנון השכונה", ""],
          ["", "השפעתן של הצעות מהקהילה על עיצוב הרחובות והמרחב הציבורי", ""],
          ["", "עבודה עם עסקים מקומיים לשמירה על גישת הלקוחות בזמן העבודות", ""],
        ],
      ],
      [
        "13:30–16:00",
        "רכבות, נדל״ן וניהול המרחב העירוני בשיבויה – הגישה של טוקיו",
        "הרצאה וסיור מקצועי בתחנה · תאגיד טוקיו (Tokyu). תאגיד טוקיו משלב הפעלת רכבות עם פיתוח נדל״ן ומסחר קמעונאי. ההרצאה והסיור יבחנו כיצד המודל העסקי הזה מעצב את הפיתוח סביב אחד ממוקדי ההחלפה העמוסים בטוקיו.",
        [
          ["", "תפקידה של החברה לניהול המתחם בתיאום הפעילות ברחבי האזור", ""],
          ["", "החזון של טוקיו לתחנת שיבויה, לרחובות הסמוכים ולשטחי המסחר", ""],
          ["", "חלוקת עבודות הבנייה לשלבים המאפשרים להמשיך להפעיל רכבות ולשמור על רחובות פתוחים ועל גישה לעסקים", ""],
        ],
      ],
      [
        "16:30–18:00",
        "הנסיעה היומיומית בקווי הפרברים של טוקיו",
        "סיור מקצועי בהדרכת טטסויה אדקובו. טטסויה אדקובו, עיתונאי המתמחה ברכבות, בוחן את הרכבת הפרברית מנקודת מבטם של הנוסעים. הסיור יתחקה אחר המסלול שבין השכונה לתחנה ויבחן כיצד הנסיעה היומיומית מעצבת את החיים המקומיים.",
        [
          ["", "שגרת הנוסעים הקבועים, מההליכה לתחנה ועד הדרך הביתה", ""],
          ["", "תרבות הנסיעה ברציפים ובקרונות עמוסים, מהעמידה בתור ועד העלייה לקרון צפוף", ""],
          ["", "התחנה כמקום מפגש שכונתי וכמוקד לחיי היומיום", ""],
        ],
      ],
    ],
  },
  {
    w: "ה׳",
    title: "תחבורה ציבורית, תכנון ותחנת שינג׳וקו",
    city: "טואי, ממשלת המטרופולין של טוקיו ותחנת שינג׳וקו",
    theme:
      "הבוקר עם טואי ועם ממשלת המטרופולין של טוקיו: שירותי המטרו והאוטובוסים הציבוריים, והדרך שבה מיזם תחבורה עובר ממדיניות לתוכנית מקומית. אחר הצהריים סיור ביציאה הדרומית של תחנת שינג׳וקו ובמסוף בוסטה.",
    tip: "זהות המדריך לסיור בשינג׳וקו טרם נקבעה.",
    notesExtra: "זהות המדריך לסיור בתחנת שינג׳וקו טרם נקבעה.",
    items: [
      ["טואי", "מטרו ואוטובוסים, 10:00–11:00"],
      ["הממשל המטרופוליני", "תכנון בין דרגי השלטון, 11:00–12:00"],
      ["שינג׳וקו", "היציאה הדרומית ובוסטה, 13:30–15:00"],
    ],
    program: [
      [
        "10:00–11:00",
        "הפעלת שירותי המטרו והאוטובוסים הציבוריים בטוקיו",
        "הרצאה · נציג רשות התחבורה טואי (Toei). טואי מפעילה קווי מטרו ואוטובוסים מטעם ממשלת מטרופולין טוקיו. נציג הרשות ידון באפשרויות שמקנה הבעלות הציבורית ובתחומים שבהם טואי תלויה בשיתוף פעולה עם מפעילים אחרים.",
        [
          ["", "היתרונות והאתגרים בהפעלת רשת תחבורה בבעלות ציבורית", ""],
          ["", "תיאום שירותי האוטובוסים והמטרו בתחנות מעבר", ""],
          ["", "שיתוף פעולה עם חברות רכבת אחרות בתכנון קישורים ובמסירת מידע לנוסעים", ""],
        ],
      ],
      [
        "11:00–12:00",
        "תכנון התחבורה בטוקיו – מהמדיניות הארצית לתוכנית המקומית",
        "הרצאה · נציג תחום התכנון בממשלת מטרופולין טוקיו. נציג צוות התכנון המטרופוליני יסביר כיצד השקעה בתחבורה שזוהתה כעדיפות אזורית מתגבשת לכדי מיזם מקומי. המפגש יתמקד בהחלטות המחברות בין תכנון הרכבת לבין שימושי הקרקע סביב התחנות.",
        [
          ["", "מדרג התכנון – ממדיניות ארצית דרך אסטרטגיה מטרופולינית ועד לתוכניות הרבעים", ""],
          ["", "תפקידי הממשל המטרופוליני, הרבעים ומפעילי הרכבות בקידום מיזם תחבורתי", ""],
          ["", "תיאום שימושי קרקע ודרכי גישה לתחנה במיזמים החוצים גבולות בין רבעים", ""],
        ],
      ],
      [
        "13:30–15:00",
        "תחנת שינג׳וקו – היציאה הדרומית ומסוף האוטובוסים בוסטה",
        "סיור בתחנה · זהות המדריך טרם נקבעה. הסיור יבחן כיצד פותחו מחדש שטחי הרכבת סביב היציאה הדרומית של תחנת שינג׳וקו בעקבות הפרטת חברת הרכבות הלאומית של יפן. בבוסטה שינג׳וקו יעברו המשתתפים במסלול הנוסע מתחנת הרכבת אל מסוף האוטובוסים הבין־עירוניים.",
        [
          ["", "פיתוח מחדש של שטחים ששימשו בעבר את הרכבת", ""],
          ["", "התמצאות בדרך מרציפי הרכבת למסוף האוטובוסים הבין־עירוניים", ""],
          ["", "רציפות מסלולי ההליכה ברחבי מתחם התחנה", ""],
        ],
      ],
    ],
  },
  {
    w: "ו׳",
    title: "תכנון קהילתי לאורך תוואי הרכבת בסטגאיה",
    city: "שימוקיטה סנרוגאי ופארק קיטאמי פוריאי פלאזה",
    theme:
      "עיריית רובע סטגאיה מציגה תכנון קהילתי לאורך תוואי הרכבת, עם סיור בשימוקיטה סנרוגאי. אחר כך אודקיו מובילה ביקור בפארק הציבורי שמעל מתחם הרכבות בקיטאמי.",
    tip: "סיור הבוקר כולל את מתחם BONUS TRACK בשימוקיטה סנרוגאי.",
    notesExtra: "",
    items: [
      ["סטגאיה", "שימוקיטה סנרוגאי, 09:30–12:00"],
      ["קיטאמי", "פארק מעל מתחם הרכבות, 14:00–15:00"],
    ],
    program: [
      [
        "09:30–12:00",
        "תכנון קהילתי לאורך תוואי הרכבת בסטגאיה",
        "הרצאה וסיור מקצועי בשכונה · עיריית רובע סטגאיה. היחידה לתכנון קהילתי בקיטזאווה מקדמת עם התושבים מאצ׳יזוקורי – תכנון עירוני בהובלת הקהילה. בסיור בשימוקיטה סנרוגאי נבחן כיצד צוותי התכנון, התחבורה והגנים של הרובע פועלים לשימוש מחודש בקרקע שמעל למסילת אודקיו.",
        [
          ["", "תפקיד התושבים בגיבוש תוכניות שכונתיות בסטגאיה", ""],
          ["", "שימוש מחודש בשטחי המסילה לשעבר בשימוקיטה סנרוגאי", ""],
          ["", "שבילי הליכה, חנויות מקומיות ומקומות מפגש במתחם BONUS TRACK", ""],
        ],
      ],
      [
        "14:00–15:00",
        "פארק ציבורי מעל מתחם רכבות פעיל",
        "ביקור מקצועי בהדרכת חברת אודקיו. נציגי אודקיו יובילו ביקור בפארק קיטאמי פוריאי פלאזה ובמתחם הדיור והתחזוקה של הרכבות שמתחתיו. המשתתפים יבחנו כיצד הפארק מתחבר לרחובות השכונה בעוד מתחם הרכבות ממשיך לפעול מתחתיו.",
        [
          ["", "הכניסות לפארק מרחובות השכונה", ""],
          ["", "פריסת הרחבה הציבורית מעל מתחם הרכבות", ""],
          ["", "ההפרדה בין השטח הפתוח לציבור לשטח התפעולי של הרכבת", ""],
        ],
      ],
    ],
  },
  {
    w: "ש׳",
    title: "להכיר את טוקיו: תרבות, מרחב ציבורי וחיי עיר",
    city: "טוקיו — סיור עצמאי",
    theme:
      "היום פנוי לסיור עצמאי בטוקיו ולמפגש עם שכונות היסטוריות, נוף וחיי היומיום בעיר. ביקורים לבחירה מראים איך מקומות מסורתיים, מסחר והעיר בת-זמננו יושבים זה לצד זה.",
    tip: "אחרי ארוחת הבוקר היום פנוי. פעילות קבוצתית מתוכננת ל-18:00.",
    notesExtra: "הביקורים העצמאיים הם לבחירה. הפעילות הקבוצתית ומקום המפגש טרם נקבעו.",
    items: [
      ["גנים", "גני המאריקיו"],
      ["גינזה", "רחובות, אדריכלות ומרחב ציבורי"],
      ["אסאקוסה", "מקדש סנסוג'י"],
      ["ערב", "פעילות קבוצתית, 18:00"],
    ],
    program: [
      ["08:00–09:00", "ארוחת בוקר", "מלון"],
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
      "הבוקר מוקדש לביקור ב-Takanawa Gateway City עם JR East, ומציג דגם חדש של פיתוח עירוני בהובלת הרכבת. ארוחת צהריים מסכמת עוברת ללקחים לתכנון ולבניית המטרו המטרופוליני של תל אביב. אחר הצהריים פנוי.",
    tip: "התוכנית הקבוצתית מסתיימת אחרי ארוחת הצהריים. מ-14:00 הזמן פנוי לקניות ולתוכניות אישיות.",
    notesExtra:
      "ארוחת הבוקר במלון; השעה טרם נקבעה. פרטי הביקור של JR East ומקום ארוחת הצהריים המסכמת טרם נקבעו.",
    items: [
      ["מעבר", "תחנת טקאנאווה גייטוויי, 09:00–09:30"],
      ["טקאנאווה", "ביקור באתר של JR East, 09:30–11:30"],
      ["דיון", "ארוחת צהריים מסכמת, 12:00–14:00"],
      ["זמן פנוי", "מ-14:00"],
    ],
    program: [
      ["08:30–08:45", "תדרוך בוקר", "מלון"],
      ["09:00–09:30", "מעבר לתחנת טקאנאווה גייטוויי", ""],
      ["09:30–11:30", "ביקור באתר", "JR East — TAKANAWA GATEWAY CITY: אדריכלות, חיבור בין תחנה לעיר, רשתות להולכי רגל וחדשנות. הפרטים טרם נקבעו."],
      ["11:30–12:00", "מעבר למקום ארוחת הצהריים", "המקום טרם נקבע"],
      ["12:00–14:00", "ארוחת צהריים מסכמת ודיון", "מטוקיו לתל אביב: לקחים לבניית מטרו מטרופוליני"],
      ["14:00", "זמן פנוי", "קניות ופעילויות עצמאיות"],
    ],
  },
  {
    w: "ב׳",
    title: "תכנון סביב תחנת ניהונבאשי",
    city: "ניהונבאשי, רובע צ׳ואו",
    theme:
      "נציגי רובע צ׳ואו מובילים סיור סביב תחנת ניהונבאשי, ובוחנים כיצד לשלב כניסות חדשות לתחנה, נתיבי הליכה ומרחבים ציבוריים ברובע מסחרי היסטורי.",
    tip: "הסיור בוחן כניסות חדשות לתחנה בתוך הרחובות ההיסטוריים של ניהונבאשי.",
    notesExtra: "",
    items: [
      ["ניהונבאשי", "סיור עם רובע צ׳ואו, 09:00–12:00"],
    ],
    program: [
      [
        "09:00–12:00",
        "תכנון סביב תחנת ניהונבאשי בלב רובע מסחרי היסטורי",
        "סיור מקצועי בהדרכת נציגי עיריית רובע צ׳ואו. נציגי רובע צ׳ואו יציגו את השיקולים התכנוניים בפיתוח מחדש של אתרים סביב תחנת ניהונבאשי. בסיור נבחן כיצד אפשר לשלב כניסות חדשות לתחנה, נתיבי הליכה ומרחבים ציבוריים במרקם של רחובות ומבנים היסטוריים.",
        [
          ["", "שילוב כניסות נגישות לתחנה במערך הרחובות הקיים", ""],
          ["", "חיבור מרחבים ציבוריים חדשים לרחובות המסחר ההיסטוריים", ""],
          ["", "שימור מבנים היסטוריים ותוואי רחובות בעת פיתוח מחדש של אתרים בסביבת התחנה", ""],
        ],
      ],
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
  if (programLang === "he") return el.getAttribute("data-he") || el.getAttribute("data-en");
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

function setProgramLang(lang) {
  let next = lang === "he" ? "he" : "en";
  if (next === programLang) {
    applyChromeLanguage();
    notifyParentLanguage();
    return;
  }
  programLang = next;
  currentDayIndex = 0;
  applyChromeLanguage();
  render({ resetNav: false });
  if (document.getElementById("page-day")?.classList.contains("active")) {
    scrollDayViewToTop();
  }
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
  ["Packing", ["Formal clothes for official visits.", "Closed shoes and socks.", "Comfortable walking shoes.", "Warm layers and a coat for December weather (about 5–12°C).", "Plug type A, voltage 100V."]],
  ["Order in Advance", ["Portable Wi‑Fi or SIM rental.", "Recommended: https://japan-wireless.com", "Business cards."]],
];

const prepDuring = [
  ["While you are there", ["Be punctual and arrive early.", "Keep phone silent in public.", "Bring personal medications."]],
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
];

const prepDuringHe = [
  ["בזמן הביקור", [
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

let keepMobileDatesOpen = false;
let keepMobileDatesTimer = 0;
let mobileTouchY = null;

function showMobileDates() {
  const days = document.querySelector(".m-days");
  if (days) days.classList.remove("is-hidden");
  keepMobileDatesOpen = true;
  clearTimeout(keepMobileDatesTimer);
  keepMobileDatesTimer = setTimeout(() => {
    keepMobileDatesOpen = false;
  }, 500);
  const scroller = document.querySelector(".m-content");
  requestAnimationFrame(() => {
    if (!scroller || scroller.scrollTop <= 4) keepMobileDatesOpen = false;
  });
}

function hideMobileDates() {
  if (keepMobileDatesOpen) return;
  const days = document.querySelector(".m-days");
  if (!days || days.classList.contains("is-hidden")) return;
  days.classList.add("is-hidden");
}

function bindMobileDateStrip() {
  const scroller = document.querySelector(".m-content");
  if (!scroller || scroller.dataset.datesBound === "1") return;
  scroller.dataset.datesBound = "1";

  const onMoveDown = () => {
    if (scroller.scrollTop > 8) hideMobileDates();
  };
  scroller.addEventListener("scroll", onMoveDown, { passive: true });
  document.addEventListener("scroll", onMoveDown, { passive: true, capture: true });

  document.addEventListener("touchstart", (event) => {
    mobileTouchY = event.touches[0] ? event.touches[0].clientY : null;
  }, { passive: true });
  document.addEventListener("touchmove", (event) => {
    if (!document.getElementById("page-day")?.classList.contains("active")) return;
    const y = event.touches[0] ? event.touches[0].clientY : null;
    if (mobileTouchY != null && y != null && mobileTouchY - y > 8) hideMobileDates();
    mobileTouchY = y;
  }, { passive: true });

  const sentinel = document.createElement("div");
  sentinel.setAttribute("aria-hidden", "true");
  sentinel.style.cssText = "height:1px;margin:0;pointer-events:none;";
  scroller.prepend(sentinel);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      if (scroller.scrollTop > 8 && !entries[0].isIntersecting) hideMobileDates();
    }, { root: scroller, threshold: 1 });
    observer.observe(sentinel);
  }
}

function scrollDayViewToTop() {
  showMobileDates();
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

function stationDetailHtml(station) {
  const heading = programLang === "ja" ? "1日あたりの乗降人員" : programLang === "he" ? "תנועת נוסעים ביום" : "Daily passenger movements";
  const rows = station.rows
    .map(([operator, route, count]) => `<li><span><strong>${operator}</strong> ${route}</span><b>${count}</b></li>`)
    .join("");
  return `<article class="station-detail">
      <h4>${stationName(station)}</h4>
      <p class="station-kana">${station.nameJa}</p>
      <p dir="ltr">${station.body}</p>
      <h5>${heading}</h5>
      <p class="station-total" dir="ltr">${station.total}</p>
      <ul class="station-lines" dir="ltr">${rows}</ul>
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
  const firstMap = stations.find((station) => station.map);
  container.hidden = false;
  container.innerHTML = `<div class="station-signs">${stations
    .map((station) => {
      const label = escapeModelText(stationButtonLabel(station));
      return `<button type="button" class="city-model-chip station-sign-btn" data-station="${station.sign}" dir="ltr" aria-label="${label}" aria-expanded="false">${label}</button>`;
    })
    .join("")}</div>
    <div class="station-stage">${firstMap ? stationMapHtml(firstMap) : ""}</div>
    <div class="station-panel" hidden></div>`;
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
  if (section === "tips" || section === "lines") {
    openLinePage();
    return;
  }
  const onLines = document.getElementById("page-lines")?.classList.contains("active");
  if (onLines) showPage("day", { scroll: false });
  const name = section === "day" ? "overview" : section;
  setProgramNavActive(name);
  if (name === "overview") showMobileDates();
  if (window.matchMedia("(max-width: 900px)").matches || document.documentElement.classList.contains("is-mobile-embed")) {
    scrollToMobileSection(name);
  } else {
    scrollToDaySection(name);
  }
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
  if (toggle && active && active.dataset.line === lineId) {
    buttons.forEach((btn) => {
      btn.classList.remove("is-active");
      btn.setAttribute("aria-expanded", "false");
    });
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
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
}

function openLinePage(lineId) {
  const arriving = !document.getElementById("page-lines")?.classList.contains("active");
  showPage("lines");
  setProgramNavActive("tips");
  const current = document.querySelector("#lineTags .line-tag.is-active")?.dataset.line;
  setLineSelection(lineId || (arriving ? "ginza" : current || "ginza"), false);
}

function resetPanelNav() {
  setProgramNavActive("overview");
}

let cityViewer = null;
let cityViewerUrl = "";
let cityModelDay = "";
let cityModelIndex = 0;

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
  window.requestAnimationFrame(() => {
    if (!cityViewer) return;
    cityViewer.resize();
    if (moved) cityViewer.refit();
  });
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
    avoid: { en: "What to Avoid", ja: "注意事項", he: "מה להימנע" },
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
      showMobileDates();
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
  var hebrewBar = document.documentElement.classList.contains("lang-he");
  if (!hebrewBar && navRight() - markCenter() > spaceRight) {
    var gaps = Math.max(1, nav.querySelectorAll("button").length - 1);
    var gapNow = parseFloat(window.getComputedStyle(nav).gap) || 32;
    nav.style.gap = Math.max(10, gapNow - (navRight() - markCenter() - spaceRight) / gaps) + "px";
    void nav.offsetWidth;
  }
  if (!hebrewBar && navRight() - markCenter() > spaceRight + 4) {
    nav.style.flexDirection = "row-reverse";
    nav.style.gap = "";
    nav.classList.add("line-anchored-reverse");
    void nav.offsetWidth;
  }
  var shift = target - markCenter();
  nav.style.marginLeft = shift + "px";
  void nav.offsetWidth;
  if (hebrewBar) {
    var langBtn = document.querySelector(".topbar-end");
    var limitLeft = langBtn ? langBtn.getBoundingClientRect().right - origin + 18 : 48;
    var navLeft = nav.getBoundingClientRect().left - origin;
    if (navLeft < limitLeft) {
      var leftGaps = Math.max(1, nav.querySelectorAll("button").length - 1);
      var leftGap = parseFloat(window.getComputedStyle(nav).gap) || 32;
      nav.style.gap = Math.max(8, leftGap - (limitLeft - navLeft) / leftGaps) + "px";
      nav.style.marginLeft = "0px";
      nav.style.transform = "none";
      void nav.offsetWidth;
      shift = target - markCenter();
      nav.style.marginLeft = shift + "px";
      void nav.offsetWidth;
    }
  }
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
