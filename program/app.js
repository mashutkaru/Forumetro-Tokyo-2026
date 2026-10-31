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
  },
  {
    w: "TUE",
    d: "15.12",
    m: "DEC",
    title: "Understanding Tokyo's Rail System: Networks, Stations and Operations",
    city: "Hotel seminar room, Toranomon Hills and Tokyo Metro",
    theme:
      "The day introduces Tokyo's metropolitan railway network and the principles behind its planning, construction and operations. Morning lectures are followed by a visit to Toranomon Hills Station and an afternoon briefing with Tokyo Metro.",
    tip: "Wear comfortable shoes for the visit to Toranomon Hills Station.",
    notesExtra:
      "Breakfast is at the hotel; the time is still to be confirmed. The Tokyo Metro briefing venue is still to be confirmed. The end of the Toranomon Hills visit and the start of lunch may be adjusted.",
    items: [
      ["LECTURE", "Professor Shigeru Morichi, 09:00–10:30", ICONS.presentation],
      ["LECTURE", "Kazufumi Noyaki, 10:45–11:15", ICONS.infrastructure],
      ["STATION VISIT", "Toranomon Hills, 11:30–12:30", ICONS.train],
      ["TOKYO METRO", "Operations briefing, 14:00–16:00", ICONS.hub],
    ],
    program: [
      ["08:30–08:45", "Morning briefing", "Hotel lobby"],
      [
        "09:00–10:30",
        "Opening lecture",
        "Professor Shigeru Morichi — Tokyo's Metropolitan Railway Network: Evolution, Structure and Urban Development",
      ],
      [
        "10:45–11:15",
        "Lecture",
        "Kazufumi Noyaki, President of Metro Development — Metro Construction: Balancing Construction Speed and Public Disruption",
      ],
      [
        "11:30–12:30",
        "Expert-led station visit",
        "Toranomon Hills Station — architecture, engineering and integration with urban redevelopment",
      ],
      ["12:30–13:30", "Lunch", "Toranomon Hills"],
      ["13:30–14:00", "Transfer", "To the afternoon Tokyo Metro briefing"],
      [
        "14:00–16:00",
        "Briefing",
        "Tokyo Metro — Operating a Metropolitan Railway. Venue to be confirmed.",
      ],
      ["16:30–17:30", "Group discussion", "Reflection and lessons learned"],
    ],
  },
  {
    w: "WED",
    d: "16.12",
    m: "DEC",
    title: "New Urban Cores: Railway-Led Development and the Station City",
    city: "Shiodome, Shibuya and the Tokyu suburban railways",
    theme:
      "Tokyo's railway stations act as urban centers integrating transportation, commerce, employment and culture. The day looks at area management in Shiodome, Shibuya's redevelopment, and how Tokyu combines railway operations with urban development.",
    tip: "The Shibuya Sky visit is planned for about 15:30, during the Shibuya site tour.",
    notesExtra:
      "Breakfast is at the hotel; the time is still to be confirmed. The Shiodome briefing and the transfer to Shibuya are still being timed. The Tokyu meeting is pending confirmation. Stations for the suburban fieldwork are still to be confirmed.",
    items: [
      ["SHIODOME", "Briefing and walk, 09:00–10:00", ICONS.building],
      ["SHIBUYA", "City briefing, 10:00–12:00", ICONS.presentation],
      ["TOKYU", "Briefing and Shibuya tour, 13:30–16:30", ICONS.infrastructure],
      ["FIELDWORK", "Tatsuya Edakubo, 17:00–18:30", ICONS.train],
    ],
    program: [
      ["08:30–08:45", "Morning briefing", "Hotel"],
      [
        "09:00–09:30",
        "Area-management briefing",
        "SIO-SITE Town Management — Shiodome, from a former railway freight yard to a city station. Proposed; timing to be confirmed.",
      ],
      ["09:30–10:00", "Walking tour", "Shiodome. Proposed; timing to be confirmed."],
      [
        "10:00–12:00",
        "Briefing",
        "Shibuya City — redevelopment, infrastructure and public–private cooperation. Shibuya Chamber of Commerce, 2F large training room, 1-12-5 Shibuya, near Hikarie.",
      ],
      ["12:00–13:30", "Lunch", "Shibuya"],
      [
        "13:30–14:30",
        "Briefing",
        "Tokyu — Integrated Railway and Urban Development. Venue in Shibuya to be confirmed.",
      ],
      [
        "14:30–16:30",
        "Expert-led site tour",
        "Shibuya. Shibuya Sky is planned for about 15:30.",
      ],
      [
        "17:00–18:30",
        "Expert-led fieldwork",
        "Tatsuya Edakubo — commuter life along Tokyu's suburban railways. Stations to be confirmed.",
      ],
    ],
  },
  {
    w: "THU",
    d: "17.12",
    m: "DEC",
    title: "Governing the Metropolis: Public Transport, Planning and Policy",
    city: "Tokyo Metropolitan Government, Shinjuku and the Israeli Embassy",
    theme:
      "We will meet institutions responsible for planning and operating Tokyo's metropolitan transportation system, then walk Shinjuku Station and visit the Embassy of Israel.",
    tip: "Allow time for security procedures at the Embassy of Israel. The transfer there begins at 15:00.",
    notesExtra:
      "Breakfast is at the hotel; the time is still to be confirmed. The Toei and Tokyo Metropolitan Government hosts, the Shinjuku guide, and the Ambassador's attendance are still to be confirmed.",
    items: [
      ["TOEI", "Public transport briefing, 10:00–11:00", ICONS.presentation],
      ["TMG", "Metropolitan planning, 11:00–12:00", ICONS.building],
      ["SHINJUKU", "Busta tour, 13:30–15:00", ICONS.train],
      ["EMBASSY", "Ambassador of Israel, 16:00–17:00", ICONS.embassy],
    ],
    program: [
      ["08:30–08:45", "Morning briefing", "Hotel"],
      ["08:45–09:30", "Transfer to the Tokyo Metropolitan Government", ""],
      ["09:30–10:00", "Arrival and introduction", "Tokyo Metropolitan Government"],
      [
        "10:00–11:00",
        "Briefing",
        "Toei — Challenges of Operating Public Transport. Proposed; venue to be confirmed.",
      ],
      [
        "11:00–12:00",
        "Briefing",
        "Tokyo Metropolitan Government — Metropolitan Transport Planning and Coordination. Proposed; venue to be confirmed.",
      ],
      ["12:00–13:30", "Lunch", "Shinjuku"],
      [
        "13:30–15:00",
        "Shinjuku Busta tour",
        "Expert-led walk at Shinjuku Station — Millimeters and Seconds: The Human Experience in the World's Busiest Railway Station. Guide to be confirmed.",
      ],
      ["15:00–16:00", "Transfer to the Embassy of Israel", "Arrival and security procedures"],
      [
        "16:00–17:00",
        "Meeting",
        "Ambassador of Israel to Japan. Rabin Seminar Room. Subject to confirmation.",
      ],
      ["17:00–18:00", "Group discussion", "Reflection and lessons learned"],
    ],
  },
  {
    w: "FRI",
    d: "18.12",
    m: "DEC",
    title: "The Human Scale: Machizukuri, Community and Railway Infrastructure",
    city: "Kitazawa Town Hall, Shimokita Senrogai and Kitami",
    theme:
      "We will head into Tokyo's suburban railway neighborhoods to see how infrastructure can improve public space and strengthen communities. Setagaya City and Odakyu Railway offer a case of Machizukuri, participation and human-scale development.",
    tip: "Shabbat begins at 16:12. Some participants may need to return to the hotel earlier.",
    notesExtra:
      "Breakfast is at the hotel; the time is still to be confirmed. The Setagaya arrangements are subject to host confirmation. The 13:00 briefing venue, access to the Kitami depot, and the final route are still to be confirmed. Shabbat begins around 16:12.",
    items: [
      ["SETAGAYA", "Machizukuri briefing, 09:00–10:30", ICONS.community],
      ["NEIGHBORHOOD", "Shimokita Senrogai and BONUS TRACK, 10:30–12:00", ICONS.stroll],
      ["KITAMI", "Plaza and depot visit, 14:15–15:00", ICONS.park],
      ["SHABBAT", "Begins at 16:12", ICONS.home],
    ],
    program: [
      ["07:45–08:00", "Morning briefing", "Hotel"],
      ["08:00–09:00", "Transfer to Kitazawa Town Hall", "Setagaya"],
      [
        "09:00–10:30",
        "Briefing",
        "Setagaya City — Human-Scale Machizukuri and Community Building. Kitazawa Town Hall.",
      ],
      [
        "10:30–12:00",
        "Expert-led neighborhood walk",
        "Setagaya Machizukuri team — Shimokita Senrogai and BONUS TRACK: railway undergrounding, reuse of land and public space",
      ],
      ["12:00–13:00", "Boxed lunch", "Kitazawa Town Hall. Planned."],
      [
        "13:00–13:45",
        "Briefing",
        "Kitami Fureai Plaza representative — a park above the railway depot. Venue to be confirmed.",
      ],
      ["13:45–14:15", "Transfer to Kitami Fureai Plaza", "Route to be confirmed"],
      [
        "14:15–15:00",
        "Site visit",
        "Kitami Fureai Plaza and the Odakyu Kitami Depot. Access is subject to host approval.",
      ],
      ["15:00–16:00", "Return to the hotel", ""],
      ["16:12", "Shabbat begins", "Some participants may return earlier"],
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
  },
  {
    w: "MON",
    d: "21.12",
    m: "DEC",
    title: "Development, Preservation and Departure",
    city: "Hotel → Chūō City and Ginza → Narita Airport",
    theme:
      "The final morning looks at how development and preservation meet in Chūō City and Ginza. After a short municipal briefing and an expert-led walk, we return toward the hotel, have lunch, and transfer to Narita Airport.",
    tip: "Check-out is about 08:30. The coach leaves for Narita at 13:30, and the flight departs at 17:40.",
    notesExtra:
      "Breakfast arrangements are still to be confirmed. The Chūō City venue, the Ginza route, and the airport transfer are still to be confirmed.",
    items: [
      ["CHECK-OUT", "About 08:30", ICONS.suitcase],
      ["CHŪŌ CITY", "Briefing, 09:30–10:00", ICONS.building],
      ["GINZA", "Expert-led walk, 10:00–12:00", ICONS.stroll],
      ["FLIGHT", "Departs Narita, 17:40", ICONS.plane],
    ],
    program: [
      ["08:30", "Hotel check-out", "Breakfast arrangements to be confirmed"],
      ["09:30–10:00", "Briefing", "Chūō City. Final arrangements to be confirmed."],
      [
        "10:00–12:00",
        "Expert-led walking tour",
        "Ginza, returning toward the hotel. Final route to be confirmed.",
      ],
      ["12:00–13:00", "Lunch", ""],
      ["13:30", "Coach departure for Narita Airport", "From the hotel"],
      ["15:00", "Airport check-in", "Security and departure procedures at Narita"],
      ["17:40", "Flight departure from Narita", ""],
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
    title: "東京の鉄道システムを学ぶ：ネットワーク、駅、運営",
    city: "ホテル会議室、虎ノ門ヒルズ、東京メトロ",
    theme:
      "この日は、東京の都市鉄道ネットワークと、その計画、建設、運営の考え方を学びます。午前の講演のあと、虎ノ門ヒルズ駅を訪れ、午後は東京メトロの説明を受けます。",
    tip: "虎ノ門ヒルズ駅の視察に備え、歩きやすい靴でお越しください。",
    notesExtra:
      "朝食はホテルでとります。時刻は未定です。東京メトロの説明会場は未定です。虎ノ門ヒルズの視察終了と昼食の開始時刻は、調整される場合があります。",
    items: [
      ["講演", "森地茂教授、09:00–10:30"],
      ["講演", "野焼計史、10:45–11:15"],
      ["駅視察", "虎ノ門ヒルズ、11:30–12:30"],
      ["東京メトロ", "運営に関する説明、14:00–16:00"],
    ],
    program: [
      ["08:30–08:45", "朝の事前説明", "ホテルロビー"],
      ["09:00–10:30", "開会講演", "森地茂教授 — 東京の都市鉄道ネットワーク：変遷、構造、都市開発"],
      ["10:45–11:15", "講演", "メトロ開発株式会社 代表取締役社長 野焼計史 — 地下鉄建設：工期短縮と市民生活への影響の両立"],
      ["11:30–12:30", "専門家による駅視察", "虎ノ門ヒルズ駅 — 建築、エンジニアリング、都市再開発との一体的整備"],
      ["12:30–13:30", "昼食", "虎ノ門ヒルズ"],
      ["13:30–14:00", "移動", "午後の東京メトロ説明会場へ"],
      ["14:00–16:00", "説明", "東京メトロ — 大都市圏鉄道の運営。会場は未定。"],
      ["16:30–17:30", "意見交換", "振り返りと学びの共有"],
    ],
  },
  {
    w: "水",
    title: "新たな都市拠点：鉄道を軸とした開発と駅を中心とするまちづくり",
    city: "汐留、渋谷、東急沿線",
    theme:
      "東京の鉄道駅は、交通、商業、雇用、文化が重なる都市の拠点です。この日は、汐留のエリアマネジメント、渋谷の再開発、東急による鉄道と都市開発の一体的な展開を見ます。",
    tip: "渋谷スカイの見学は、渋谷視察の途中、15:30頃を予定しています。",
    notesExtra:
      "朝食はホテルでとります。時刻は未定です。汐留の説明と渋谷への移動時刻は調整中です。東急との面談は確認待ちです。郊外鉄道の訪問駅は未定です。",
    items: [
      ["汐留", "説明と徒歩視察、09:00–10:00"],
      ["渋谷", "区による説明、10:00–12:00"],
      ["東急", "説明と渋谷視察、13:30–16:30"],
      ["現地調査", "枝久保達也、17:00–18:30"],
    ],
    program: [
      ["08:30–08:45", "朝の事前説明", "ホテル"],
      ["09:00–09:30", "エリアマネジメントの説明", "SIO-SITEタウンマネジメント — 汐留。旧鉄道貨物ヤードから都市の駅へ。調整中。"],
      ["09:30–10:00", "徒歩視察", "汐留。調整中。"],
      ["10:00–12:00", "説明", "渋谷区 — 再開発、基盤整備、官民連携。渋谷区商工会館2階大研修室、渋谷1-12-5、ヒカリエ近く。"],
      ["12:00–13:30", "昼食", "渋谷"],
      ["13:30–14:30", "説明", "東急 — 鉄道事業と都市開発の一体的な展開。渋谷の会場は未定。"],
      ["14:30–16:30", "専門家による現地視察", "渋谷。渋谷スカイは15:30頃を予定。"],
      ["17:00–18:30", "専門家による現地調査", "枝久保達也 — 東急沿線の通勤の暮らし。訪問駅は未定。"],
    ],
  },
  {
    w: "木",
    title: "大都市圏のガバナンス：公共交通、計画、政策",
    city: "東京都庁、新宿、駐日イスラエル大使館",
    theme:
      "東京の都市交通を計画し運営する機関と会い、その後、新宿駅を歩き、駐日イスラエル大使館を訪問します。",
    tip: "駐日イスラエル大使館では保安手続きの時間を見てください。移動は15:00に始まります。",
    notesExtra:
      "朝食はホテルでとります。時刻は未定です。都営交通と東京都の説明担当者、新宿の案内者、大使の出席は未定です。",
    items: [
      ["都営", "公共交通の説明、10:00–11:00"],
      ["東京都", "都市圏の計画、11:00–12:00"],
      ["新宿", "バスタ視察、13:30–15:00"],
      ["大使館", "駐日イスラエル大使、16:00–17:00"],
    ],
    program: [
      ["08:30–08:45", "朝の事前説明", "ホテル"],
      ["08:45–09:30", "東京都庁へ移動", ""],
      ["09:30–10:00", "到着と導入説明", "東京都庁"],
      ["10:00–11:00", "説明", "都営交通 — 公共交通事業者としての運営上の課題。調整中。会場は未定。"],
      ["11:00–12:00", "説明", "東京都 — 大都市圏の交通計画と関係者間の調整。調整中。会場は未定。"],
      ["12:00–13:30", "昼食", "新宿"],
      ["13:30–15:00", "新宿バスタ視察", "専門家による新宿駅の徒歩視察 — ミリメートルと秒：世界で最も利用者の多い鉄道駅における人の体験。案内者は未定。"],
      ["15:00–16:00", "駐日イスラエル大使館へ移動", "到着と保安手続き"],
      ["16:00–17:00", "面談", "駐日イスラエル大使。ラビン会議室。出席は要確認。"],
      ["17:00–18:00", "意見交換", "振り返りと学びの共有"],
    ],
  },
  {
    w: "金",
    title: "人の目線に立ったまちづくり：地域コミュニティと鉄道インフラ",
    city: "北沢タウンホール、下北線路街、喜多見",
    theme:
      "東京の郊外鉄道のまちを訪れ、インフラが公共空間と地域コミュニティをどのように支えられるかを見ます。世田谷区と小田急電鉄は、まちづくり、参加、人のスケールの開発の事例です。",
    tip: "安息日（シャバット）は16:12に始まります。一部の参加者は、これより早くホテルに戻る必要があります。",
    notesExtra:
      "朝食はホテルでとります。時刻は未定です。世田谷区の最終行程は受入先の確認が必要です。13:00の説明会場、喜多見電車基地への立入り、最終経路は未定です。シャバットは16:12頃に始まります。",
    items: [
      ["世田谷", "まちづくりの説明、09:00–10:30"],
      ["まち歩き", "下北線路街とBONUS TRACK、10:30–12:00"],
      ["喜多見", "広場と車両基地、14:15–15:00"],
      ["シャバット", "16:12に開始"],
    ],
    program: [
      ["07:45–08:00", "朝の事前説明", "ホテル"],
      ["08:00–09:00", "北沢タウンホールへ移動", "世田谷"],
      ["09:00–10:30", "説明", "世田谷区 — 人の目線に立ったまちづくりと地域コミュニティの形成。北沢タウンホール。"],
      ["10:30–12:00", "専門家による地域視察", "世田谷区まちづくりチーム — 下北線路街とBONUS TRACK：鉄道の地下化、用地の再利用、公共空間"],
      ["12:00–13:00", "弁当", "北沢タウンホール。予定。"],
      ["13:00–13:45", "説明", "きたみふれあい広場の担当者 — 車両基地の上の公園。会場は未定。"],
      ["13:45–14:15", "きたみふれあい広場へ移動", "経路は未定"],
      ["14:15–15:00", "現地視察", "きたみふれあい広場と小田急喜多見電車基地。立入りは受入先の承認が必要。"],
      ["15:00–16:00", "ホテルへ帰着", ""],
      ["16:12", "シャバット開始", "一部の参加者は早めに戻る場合があります"],
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
    title: "開発と保全、そして出発",
    city: "ホテル → 中央区・銀座 → 成田空港",
    theme:
      "最終日の午前は、中央区と銀座で開発と保全がどのように向き合うかを見ます。区の短い説明と専門家による徒歩視察のあと、ホテル方面に戻り、昼食をとって成田空港へ移動します。",
    tip: "チェックアウトは8:30頃です。成田空港行きの貸切バスは13:30に出発し、フライトは17:40に出発します。",
    notesExtra: "朝食の手配は未定です。中央区の会場、銀座の経路、空港への送迎は未定です。",
    items: [
      ["チェックアウト", "8:30頃"],
      ["中央区", "説明、09:30–10:00"],
      ["銀座", "専門家による徒歩視察、10:00–12:00"],
      ["フライト", "成田出発、17:40"],
    ],
    program: [
      ["08:30", "ホテルチェックアウト", "朝食の手配は未定"],
      ["09:30–10:00", "説明", "中央区。最終行程は未定。"],
      ["10:00–12:00", "専門家による徒歩視察", "銀座。ホテル方面へ戻ります。最終経路は未定。"],
      ["12:00–13:00", "昼食", ""],
      ["13:30", "成田空港へ貸切バスで出発", "ホテルから"],
      ["15:00", "空港チェックイン", "成田空港での保安検査と出国手続き"],
      ["17:40", "成田空港を出発", ""],
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
    title: "מערכת הרכבות של טוקיו: רשתות, תחנות ותפעול",
    city: "חדר הסמינרים במלון, טורנומון הילס וטוקיו מטרו",
    theme:
      "היום מציג את רשת הרכבות המטרופולינית של טוקיו ואת עקרונות התכנון, הבנייה והתפעול שלה. אחרי הרצאות הבוקר מתקיים ביקור בתחנת טורנומון הילס, ואחר הצהריים תדרוך של טוקיו מטרו.",
    tip: "נעליים נוחות לביקור בתחנת טורנומון הילס.",
    notesExtra:
      "ארוחת הבוקר במלון; השעה טרם נקבעה. מקום התדרוך של טוקיו מטרו טרם נקבע. סיום הביקור בטורנומון הילס ותחילת ארוחת הצהריים עשויים להשתנות.",
    items: [
      ["הרצאה", "פרופ' Shigeru Morichi, 09:00–10:30"],
      ["הרצאה", "Kazufumi Noyaki, 10:45–11:15"],
      ["ביקור בתחנה", "טורנומון הילס, 11:30–12:30"],
      ["טוקיו מטרו", "תדרוך תפעול, 14:00–16:00"],
    ],
    program: [
      ["08:30–08:45", "תדרוך בוקר", "לובי המלון"],
      ["09:00–10:30", "הרצאת פתיחה", "פרופ' Shigeru Morichi — רשת הרכבות המטרופולינית של טוקיו: התפתחות, מבנה ופיתוח עירוני"],
      ["10:45–11:15", "הרצאה", "Kazufumi Noyaki, נשיא Metro Development — בניית מטרו: איזון בין קצב הבנייה לבין ההפרעה לציבור"],
      ["11:30–12:30", "ביקור בתחנה בהדרכת מומחה", "תחנת טורנומון הילס — אדריכלות, הנדסה וחיבור לפיתוח עירוני מחודש"],
      ["12:30–13:30", "ארוחת צהריים", "טורנומון הילס"],
      ["13:30–14:00", "מעבר", "אל תדרוך אחר הצהריים של טוקיו מטרו"],
      ["14:00–16:00", "תדרוך", "טוקיו מטרו — תפעול רכבת מטרופולינית. המקום טרם נקבע."],
      ["16:30–17:30", "דיון קבוצתי", "סיכום ולקחים"],
    ],
  },
  {
    w: "ד׳",
    title: "מוקדים עירוניים חדשים: פיתוח בהובלת הרכבת ועיר התחנה",
    city: "שיודומה, שיבויה וקווי הפרברים של Tokyu",
    theme:
      "תחנות הרכבת בטוקיו פועלות כמוקדים עירוניים שמשלבים תחבורה, מסחר, תעסוקה ותרבות. היום עוסק בניהול האזור בשיודומה, בפיתוח מחדש של שיבויה, ובאופן שבו חברת Tokyu מחברת תפעול רכבות לפיתוח עירוני.",
    tip: "הביקור בשיבויה סקיי מתוכנן לסביבות 15:30, במהלך הסיור בשיבויה.",
    notesExtra:
      "ארוחת הבוקר במלון; השעה טרם נקבעה. התדרוך בשיודומה והמעבר לשיבויה עדיין בתיאום זמנים. הפגישה עם Tokyu ממתינה לאישור. תחנות הסיור בפרברים טרם נקבעו.",
    items: [
      ["שיודומה", "תדרוך והליכה, 09:00–10:00"],
      ["שיבויה", "תדרוך העיר, 10:00–12:00"],
      ["Tokyu", "תדרוך וסיור בשיבויה, 13:30–16:30"],
      ["סיור שטח", "Tatsuya Edakubo, 17:00–18:30"],
    ],
    program: [
      ["08:30–08:45", "תדרוך בוקר", "מלון"],
      ["09:00–09:30", "תדרוך ניהול אזור", "SIO-SITE Town Management — שיודומה, ממסוף מטענים ישן של הרכבת אל תחנה עירונית. מוצע; הזמן טרם נקבע."],
      ["09:30–10:00", "סיור רגלי", "שיודומה. מוצע; הזמן טרם נקבע."],
      ["10:00–12:00", "תדרוך", "עיריית שיבויה — פיתוח מחדש, תשתיות ושיתוף ציבורי-פרטי. לשכת המסחר של שיבויה, חדר הדרכה גדול בקומה 2, Shibuya 1-12-5, ליד Hikarie."],
      ["12:00–13:30", "ארוחת צהריים", "שיבויה"],
      ["13:30–14:30", "תדרוך", "Tokyu — רכבת ופיתוח עירוני משולבים. המקום בשיבויה טרם נקבע."],
      ["14:30–16:30", "סיור בהדרכת מומחה", "שיבויה. שיבויה סקיי מתוכנן לסביבות 15:30."],
      ["17:00–18:30", "סיור שטח בהדרכת מומחה", "Tatsuya Edakubo — חיי היוממות לאורך קווי הפרברים של Tokyu. התחנות טרם נקבעו."],
    ],
  },
  {
    w: "ה׳",
    title: "ניהול המטרופולין: תחבורה ציבורית, תכנון ומדיניות",
    city: "ממשלת המטרופולין של טוקיו, שינג'וקו ושגרירות ישראל",
    theme:
      "ניפגש עם הגופים שאחראים על תכנון ותפעול מערכת התחבורה המטרופולינית של טוקיו, ואחר כך נלך בתחנת שינג'וקו ונבקר בשגרירות ישראל.",
    tip: "השאירו זמן לנהלי הביטחון בשגרירות ישראל. היציאה לשם מתחילה ב-15:00.",
    notesExtra:
      "ארוחת הבוקר במלון; השעה טרם נקבעה. המארחים של Toei ושל ממשלת המטרופולין, המדריך בשינג'וקו והשתתפות השגריר טרם אושרו.",
    items: [
      ["Toei", "תדרוך תחבורה ציבורית, 10:00–11:00"],
      ["ממשלת המטרופולין", "תכנון מטרופוליני, 11:00–12:00"],
      ["שינג'וקו", "סיור בבאסטה, 13:30–15:00"],
      ["שגרירות", "שגריר ישראל, 16:00–17:00"],
    ],
    program: [
      ["08:30–08:45", "תדרוך בוקר", "מלון"],
      ["08:45–09:30", "מעבר לממשלת המטרופולין של טוקיו", ""],
      ["09:30–10:00", "הגעה והיכרות", "ממשלת המטרופולין של טוקיו"],
      ["10:00–11:00", "תדרוך", "Toei — אתגרים בתפעול תחבורה ציבורית. מוצע; המקום טרם נקבע."],
      ["11:00–12:00", "תדרוך", "ממשלת המטרופולין של טוקיו — תכנון תחבורה מטרופולינית ותיאום. מוצע; המקום טרם נקבע."],
      ["12:00–13:30", "ארוחת צהריים", "שינג'וקו"],
      ["13:30–15:00", "סיור בבאסטה של שינג'וקו", "הליכה בהדרכת מומחה בתחנת שינג'וקו — מילימטרים ושניות: החוויה האנושית בתחנת הרכבת העמוסה בעולם. המדריך טרם נקבע."],
      ["15:00–16:00", "מעבר לשגרירות ישראל", "הגעה ונהלי ביטחון"],
      ["16:00–17:00", "פגישה", "שגריר ישראל ביפן. חדר הסמינרים על שם רבין. כפוף לאישור."],
      ["17:00–18:00", "דיון קבוצתי", "סיכום ולקחים"],
    ],
  },
  {
    w: "ו׳",
    title: "בקנה מידה אנושי: מאצ'יזוקורי, קהילה ותשתית רכבת",
    city: "אולם העירייה קיטאזאווה, שימוקיטה סנרוגאי וקיטאמי",
    theme:
      "נצא לשכונות הרכבת בפרברי טוקיו כדי לראות איך תשתית יכולה לשפר מרחב ציבורי ולחזק קהילות. העיר סטאגאיה ורכבת אודאקיו מציגות מקרה של מאצ'יזוקורי, השתתפות ופיתוח בקנה מידה אנושי.",
    tip: "השבת נכנסת ב-16:12. חלק מהמשתתפים יצטרכו לחזור למלון מוקדם יותר.",
    notesExtra:
      "ארוחת הבוקר במלון; השעה טרם נקבעה. הסידורים בסטאגאיה כפופים לאישור המארחים. מקום התדרוך ב-13:00, הכניסה למוסך קיטאמי והמסלול הסופי טרם נקבעו. השבת נכנסת בסביבות 16:12.",
    items: [
      ["סטאגאיה", "תדרוך מאצ'יזוקורי, 09:00–10:30"],
      ["שכונה", "שימוקיטה סנרוגאי ו-BONUS TRACK, 10:30–12:00"],
      ["קיטאמי", "ביקור בכיכר ובמוסך, 14:15–15:00"],
      ["שבת", "כניסת שבת 16:12"],
    ],
    program: [
      ["07:45–08:00", "תדרוך בוקר", "מלון"],
      ["08:00–09:00", "מעבר לאולם העירייה קיטאזאווה", "סטאגאיה"],
      ["09:00–10:30", "תדרוך", "עיריית סטאגאיה — מאצ'יזוקורי בקנה מידה אנושי ובניית קהילה. אולם העירייה קיטאזאווה."],
      ["10:30–12:00", "הליכה בשכונה בהדרכת מומחה", "צוות המאצ'יזוקורי של סטאגאיה — שימוקיטה סנרוגאי ו-BONUS TRACK: הטמנת הרכבת, שימוש מחדש בקרקע ומרחב ציבורי"],
      ["12:00–13:00", "ארוחת צהריים ארוזה", "אולם העירייה קיטאזאווה. מתוכנן."],
      ["13:00–13:45", "תדרוך", "נציג כיכר קיטאמי פוראי — פארק מעל מוסך הרכבת. המקום טרם נקבע."],
      ["13:45–14:15", "מעבר לכיכר קיטאמי פוראי", "המסלול טרם נקבע"],
      ["14:15–15:00", "ביקור באתר", "כיכר קיטאמי פוראי ומוסך אודאקיו בקיטאמי. הכניסה כפופה לאישור המארחים."],
      ["15:00–16:00", "חזרה למלון", ""],
      ["16:12", "כניסת שבת", "חלק מהמשתתפים עשויים לחזור מוקדם יותר"],
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
    title: "פיתוח, שימור ויציאה",
    city: "המלון · העיר צ'ואו וגינזה · נמל התעופה נריטה",
    theme:
      "הבוקר האחרון בוחן איך פיתוח ושימור נפגשים בעיר צ'ואו ובגינזה. אחרי תדרוך עירוני קצר והליכה בהדרכת מומחה נחזור לכיוון המלון, נאכל צהריים ונצא לנמל התעופה נריטה.",
    tip: "הצ'ק-אאוט בסביבות 08:30. האוטובוס לנריטה יוצא ב-13:30, והטיסה ממריאה ב-17:40.",
    notesExtra:
      "סידורי ארוחת הבוקר טרם נקבעו. המקום בעיר צ'ואו, המסלול בגינזה וההסעה לשדה טרם נקבעו.",
    items: [
      ["צ'ק-אאוט", "בסביבות 08:30"],
      ["העיר צ'ואו", "תדרוך, 09:30–10:00"],
      ["גינזה", "הליכה בהדרכת מומחה, 10:00–12:00"],
      ["טיסה", "המראה מנריטה, 17:40"],
    ],
    program: [
      ["08:30", "צ'ק-אאוט מהמלון", "סידורי ארוחת הבוקר טרם נקבעו"],
      ["09:30–10:00", "תדרוך", "העיר צ'ואו. הסידורים הסופיים טרם נקבעו."],
      ["10:00–12:00", "סיור רגלי בהדרכת מומחה", "גינזה, בחזרה לכיוון המלון. המסלול הסופי טרם נקבע."],
      ["12:00–13:00", "ארוחת צהריים", ""],
      ["13:30", "יציאת האוטובוס לנמל התעופה נריטה", "מהמלון"],
      ["15:00", "צ'ק-אין בשדה", "ביטחון ונהלי יציאה בנריטה"],
      ["17:40", "המראת הטיסה מנריטה", ""],
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
  applyChromeLanguage();
  render({ resetNav: false });
  notifyParentLanguage();
}

const prep = [
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
  console.assert(days.every((day) => day.ja && day.ja.program.length === day.program.length), "Each day needs a Japanese itinerary");
  console.assert(days.every((day) => day.he && day.he.program.length === day.program.length), "Each day needs a Hebrew itinerary");
  console.assert(days[0].title.indexOf("Welcome") !== -1, "Day 1 should welcome the delegation to Tokyo");
  console.assert(days[0].program[0][0] === "11:40", "Day 1 should arrive at 11:40");
  console.assert(days[7].title.indexOf("Departure") !== -1, "Day 8 should include departure");
  console.assert(days[7].program[days[7].program.length - 1][0] === "17:40", "Day 8 flight should depart at 17:40");
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
  if (sideDay) sideDay.textContent = dayCountLabel(currentDayIndex);
  if (sideDate) sideDate.textContent = `${formatWeekday(day.w)}, ${day.d}`;
  byId("title").textContent = day.title;
  byId("theme").textContent = day.theme;
  byId("tipText").textContent = day.tip;
  byId("dayLocation").textContent = day.city;
  renderDayMap("dayLocationMap", day);
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
  const dayLabel = programLang === "ja"
    ? `${currentDayIndex + 1}日目、${day.w}、${day.d}`
    : programLang === "he"
      ? `${dayCountLabel(currentDayIndex)}, ${day.w}, ${day.d}`
      : `DAY ${currentDayIndex + 1}, ${formatWeekday(day.w)}, ${day.d}`;

  const headDay = byId("mHeadDay");
  headDay.textContent = dayLabel;
  headDay.dir = programLang === "he" ? "rtl" : "ltr";
  byId("mDayTitle").textContent = day.title;
  byId("mTheme").textContent = day.theme;

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
  if (window.matchMedia("(max-width: 900px)").matches || document.documentElement.classList.contains("is-mobile-embed")) {
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

function render(options) {
  const day = viewDay(days[currentDayIndex]);

  renderDateStrip();
  renderDesktopDay(day);
  renderMobileDay(day);
  if (!options || options.resetNav !== false) resetPanelNav();
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
    prep: { en: "Preparation", he: "הכנה" },
    avoid: { en: "What to Avoid", he: "מה להימנע" },
    contact: { en: "Contact", he: "יצירת קשר" },
    travelog: { en: "Travelog", he: "יומן מסע" },
  };
  const subpageHead = document.getElementById("mSubpageHead");
  const subpageTitle = document.getElementById("mSubpageTitle");
  if (subpageHead && subpageTitle) {
    if (subpageTitles[pageName]) {
      subpageTitle.setAttribute("data-en", subpageTitles[pageName].en);
      subpageTitle.setAttribute("data-he", subpageTitles[pageName].he);
      subpageTitle.textContent = textForLang(subpageTitle);
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
  if (event.data.type === "forumetro:set-lang") setProgramLang(event.data.lang);
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
