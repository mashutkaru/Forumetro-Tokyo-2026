(function () {
  'use strict';

  var PHOTO_DIR = 'photos/';
  /** Bump after replacing photos. Card photo area is 272×230; PNGs are portrait (~232×276). */
  var PHOTO_VER = '48';

  function photoPlaceholderHtml(label) {
    return '<div class="photo-placeholder" aria-hidden="true">' + (label || '[PLACEHOLDER] Photo') + '</div>';
  }
  function participantPhotoUrl(filename) {
    return encodeURI(PHOTO_DIR + filename) + '?v=' + PHOTO_VER;
  }
  function participantPictureFront(p) {
    if (p.photo) {
      return '<img class="participant-picture" src="' + participantPhotoUrl(p.photo) + '" alt="' + escapeHtml(p.nameEn) + '" loading="lazy" decoding="async"/>';
    }
    return photoPlaceholderHtml('[PLACEHOLDER] Photo');
  }
  function participantPictureBack(p) {
    if (p.photo) {
      return '<img class="participant-picture participant-picture--back" src="' + participantPhotoUrl(p.photo) + '" alt="" loading="lazy" decoding="async"/>';
    }
    return photoPlaceholderHtml('[PLACEHOLDER] Photo');
  }

  const PARTICIPANTS = [
    { id:1, key:"roy_groves", nameEn:"Roy Groves", nameJa:"グローブス・ロイ", nameHe:"", sector:"Local Government", org:"Or Yehuda", role:"Acting CEO, Or Yehuda Development Company", photo:"Roy Groves.jpg" },
    { id:2, key:"kfir_fabrik", nameEn:"Kfir Fabrik", nameJa:"ファブリク・クフィル", nameHe:"", sector:"Local Government", org:"Be'er Ya'akov", role:"City Architect and Director of Planning Department", photo:"Kfir Fabrik.jpg" },
    { id:3, key:"nitzan_barchan", nameEn:"Nitzan Barchan", nameJa:"バルハン・ニツァン", nameHe:"", sector:"Local Government", org:"Bnei Brak", role:"City Engineer", photo:"Nitzan Barchan.jpg" },
    { id:4, key:"yishai_valency", nameEn:"Yishai Valency", nameJa:"ヴァレンシー・イシャイ", nameHe:"", sector:"Local Government", org:"Bat Yam", role:"City Engineer", photo:"Yishai Valency.jpg" },
    { id:5, key:"ben_weinstein", nameEn:"Ben Weinstein", nameJa:"ワインスタイン・ベン", nameHe:"", sector:"Local Government", org:"Givat Shmuel", role:"City Engineer", photo:"Ben Weinstein.jpg" },
    { id:6, key:"shai_rechter", nameEn:"Shai Rechter", nameJa:"レヒター・シャイ", nameHe:"", sector:"Local Government", org:"Givatayim", role:"City Architect", photo:"Shai Rechter.jpg" },
    { id:7, key:"adi_sadan_avrashitz", nameEn:"Adi Sadan Avrashitz", nameJa:"サダン・アヴラシッツ・アディ", nameHe:"", sector:"Local Government", org:"Herzliya", role:"Deputy City Engineer and Director of Planning Division", photo:"Adi Sadan Avrashitz.jpg" },
    { id:8, key:"shai_mulian", nameEn:"Shai Mulian", nameJa:"ムリアン・シャイ", nameHe:"", sector:"Local Government", org:"Holon", role:"Vice President, Construction and Infrastructure", photo:"Shai Mulian.jpg" },
    { id:9, key:"miriam_elhadad", nameEn:"Miriam Elhadad", nameJa:"エルハダド・ミリアム", nameHe:"", sector:"Local Government", org:"Kfar Saba", role:"City Architect and Director of Planning Division", photo:"Miriam Elhadad.jpg" },
    { id:10, key:"anat_lerner", nameEn:"Anat Lerner", nameJa:"ラーナー・アナット", nameHe:"", sector:"Local Government", org:"Lod", role:"City Engineer", photo:"Anat Lerner.jpg" },
    { id:11, key:"boaz_gamliel", nameEn:"Boaz Gamliel", nameJa:"ガムリエル・ボアズ", nameHe:"", sector:"Local Government", org:"Ness Ziona", role:"City Engineer", photo:"Boaz Gamliel.jpg" },
    { id:12, key:"gil_mamon", nameEn:"Gil Mamon", nameJa:"マモン・ギル", nameHe:"", sector:"Local Government", org:"Ness Ziona", role:"City CEO", photo:"Gil Mamon.jpg" },
    { id:13, key:"lilach_shenkman", nameEn:"Lilach Shenkman", nameJa:"シェンクマン・リラハ", nameHe:"", sector:"Local Government", org:"Petah Tikva", role:"Director of Traffic Division", photo:"Lilach Shenkman.jpg" },
    { id:14, key:"itzik_ozelbo", nameEn:"Itzik Ozelbo", nameJa:"オゼルボ・イツィク", nameHe:"", sector:"Local Government", org:"Petah Tikva", role:"City Engineer", photo:"Itzik Ozelbo.jpg" },
    { id:15, key:"amit_capuza", nameEn:"Amit Capuza", nameJa:"カプーザ・アミット", nameHe:"", sector:"Local Government", org:"Kiryat Ono", role:"City Engineer", photo:"Amit Capuza.jpg" },
    { id:16, key:"evyatar_biton_tzur", nameEn:"Evyatar Biton Tzur", nameJa:"ビトン・ツール・エヴィヤタル", nameHe:"", sector:"Local Government", org:"Rishon LeZion", role:"Deputy City Engineer; Director of Infrastructure and Public Construction Division", photo:"Evyatar Biton Tzur.jpg" },
    { id:17, key:"lital_zohar_zilcha", nameEn:"Lital Zohar Zilcha", nameJa:"ゾハル・ジルハ・リタル", nameHe:"", sector:"Local Government", org:"Rishon LeZion", role:"Director of Urban Transport Infrastructure Division", photo:"Lital Zohar Zilcha.jpg" },
    { id:18, key:"dalit_harel", nameEn:"Dalit Harel", nameJa:"ハレル・ダリット", nameHe:"", sector:"Local Government", org:"Rehovot", role:"City Engineer", photo:"Dalit Harel.jpg" },
    { id:19, key:"zharra_soloveitchik", nameEn:"Zharra Soloveitchik", nameJa:"ソロヴェイチク・ジャンナ", nameHe:"", sector:"Local Government", org:"Ramla", role:"City Engineer", photo:"Zharra Soloveitchik.jpg" },
    { id:20, key:"roy_dvir_avidor", nameEn:"Roy Dvir Avidor", nameJa:"ドヴィル・アヴィドール・ロイ", nameHe:"", sector:"Local Government", org:"Ramat Gan", role:"Vice President, Operations and Infrastructure", photo:"Roy Dvir Avidor.jpg" },
    { id:21, key:"oren_on", nameEn:"Oren On", nameJa:"オン・オレン", nameHe:"", sector:"Local Government", org:"Ra'anana", role:"City Architect and Director of Planning Division", photo:"Oren On.jpg" },
    { id:22, key:"bel_raz", nameEn:"Bel Raz", nameJa:"ラズ・ベル", nameHe:"", sector:"Local Government", org:"Ra'anana", role:"Director of Engineering Development and Infrastructure Division", photo:"Bel Raz.jpg" },
    { id:23, key:"benny_koritz", nameEn:"Benny Koritz", nameJa:"コリッツ・ベニー", nameHe:"", sector:"Local Government", org:"Tel Aviv-Yafo", role:"Director of Long-Term Transport Planning", photo:"Benny Koritz.jpg" },
    { id:24, key:"maor_turgeman", nameEn:"Maor Turgeman", nameJa:"トゥルジェマン・マオール", nameHe:"", sector:"Local Government", org:"Tel Aviv-Yafo", role:"Director of Public Transport Department", photo:"Maor Turgeman.jpg" },
    { id:25, key:"gil_weiss", nameEn:"Gil Weiss", nameJa:"ワイス・ギル", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"Deputy CEO, Engineering Technology Center", photo:"Gil Weiss.jpg" },
    { id:26, key:"michael_feinberg", nameEn:"Michael Feinberg", nameJa:"ファインバーグ・ミハエル", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"Director, Architecture/Engineering Unit", photo:"Michael Feinberg.jpg" },
    { id:27, key:"adi_kain_karni", nameEn:"Adi Kain Karni", nameJa:"カイン・カルニ・アディ", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"Vice President, Metro Line M2", photo:"Adi Kain Karni.jpg" },
    { id:28, key:"kobi_ben_atar", nameEn:"Kobi Ben Atar", nameJa:"ベン・アタール・コビ", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"Vice President and Director, M1 Metro Directorate", photo:"Kobi Ben Atar.jpg" },
    { id:29, key:"rakefet_tibi", nameEn:"Rakefet Tibi", nameJa:"ティビ・ラケフェット", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"Senior Director, Integrated and Strategic Planning", photo:"Rakefet Tibi.jpg" },
    { id:30, key:"shani_kedar", nameEn:"Shani Kedar", nameJa:"ケダル・シャニ", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"Director, M3 Construction Division", photo:"Shani Kedar.jpg" },
    { id:31, key:"danny_segal", nameEn:"Danny Segal", nameJa:"セガル・ダニー", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"M2 Planning Director", photo:"Danny Segal.jpg" },
    { id:32, key:"natalie_katz", nameEn:"Natalie Katz", nameJa:"カッツ・ナタリー", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"Vice President, Metro Project; M1 Line Manager", photo:"Natalie Katz.jpg" },
    { id:33, key:"tadasa_baruch", nameEn:"Tadasa Baruch", nameJa:"バルフ・タダサ", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"Director of Traffic Management and Control Division", photo:"Tadasa Baruch.jpg" },
    { id:34, key:"guy_segal", nameEn:"Guy Segal", nameJa:"セガル・ガイ", nameHe:"", sector:"Government-Owned Company", org:"NTA Metropolitan Mass Transit System Ltd.", role:"Deputy Director, M3 Line; Line Manager", photo:"Guy Segal.jpg" },
    { id:35, key:"dudu_kovsenyano", nameEn:"Dudu Kovsenyano", nameJa:"コブセニアノ・ドゥドゥ", nameHe:"", sector:"Central Government", org:"Metro Authority", role:"Legal Counsel", photo:"Dudu Kovsenyano.jpg" },
    { id:36, key:"haim_cohen", nameEn:"Haim Cohen", nameJa:"コーエン・ハイム", nameHe:"", sector:"Central Government", org:"Ministry of Transport and Road Safety", role:"Director, Licensing and Public Transport Operations Division, Central and Gush Dan District", photo:"Haim Cohen.jpg" },
    { id:37, key:"lior_rosen", nameEn:"Lior Rosen", nameJa:"ローゼン・リオール", nameHe:"", sector:"Central Government", org:"Ministry of Transport and Road Safety", role:"Senior Director, Land Transport Planning", photo:"Lior Rosen.jpg" },
    { id:38, key:"chen_winik", nameEn:"Chen Winik", nameJa:"ヴィニク・ヘン", nameHe:"", sector:"Local Government", org:"Ministry of Transport and Road Safety", role:"Traffic Engineer, Tel Aviv and Central Districts; Acting District Engineer", photo:"Chen Winik.jpg" },
    { id:39, key:"talila_harel", nameEn:"Talila Harel", nameJa:"ハレル・タリラ", nameHe:"", sector:"Central Government", org:"Planning Administration", role:"Central District Planner", photo:"Talila Harel.jpg" },
    { id:40, key:"sharon_barkat", nameEn:"Sharon Barkat", nameJa:"バルカット・シャロン", nameHe:"", sector:"Local Government", org:"Planning Administration", role:"Deputy Tel Aviv District Planner", photo:"Sharon Barkat.jpg" },
    { id:41, key:"michal_lilienthal", nameEn:"Michal Lilienthal", nameJa:"リリエンタル・ミハル", nameHe:"", sector:"Central Government", org:"Planning Administration", role:"Director of Detailed Planning and Licensing Division", photo:"Michal Lilienthal.jpg" }
  ];

  const STEERING_COMMITTEE = [
    { id:"sc1", key:"avi_haliva", nameEn:"Avi Haliva", nameJa:"ハリヴァ・アヴィ", nameHe:"", org:"Metro Authority", orgJa:"メトロ庁／長官", role:"Chair", roleJa:"", photo:"Avi Haliva.jpeg" },
    { id:"sc2", key:"hila_waxberg", nameEn:"Hila Waxberg", nameJa:"ワックスバーグ・ヒラ", nameHe:"", org:"NTA Metropolitan Mass Transit System Ltd.", orgJa:"NTA（テルアビブ都市圏交通公社）／地方自治体部門長", role:"Head of Local Authorities Division", roleJa:"", photo:"Hila Waxberg.png" },
    { id:"sc3", key:"tal_granit", nameEn:"Tal Granit", nameJa:"グラニット・タル", nameHe:"", org:"Ministry of Transport and Road Safety", orgJa:"イスラエル運輸・道路安全省", role:"", roleJa:"", photo:"Tal Granit.jpg" }
  ];

  var PROGRAM_TEAM_BADGE = "Program Team";
  var PROGRAM_PHOTO_VER = 1;

  const PROGRAM_TEAM = [
    { id:"pt1", key:"arch_ofer_bilik", nameEn:"Arch. Ofer Bilik", nameJa:"オフェル・ビリック", nameHe:"", org:"Architect, Urban Planner", orgJa:"建築家・都市計画家", role:"Delegation Coordinator", roleJa:"", photo:"Ofer Bilik.jpg" },
    { id:"pt2", key:"dr_hadas_kushelevich", nameEn:"Dr. Hadas Kushelevich", nameJa:"クシェレビチ　ハダス", nameHe:"", org:"IJAC", orgJa:"特定非営利活動法人 日本・イスラエル学術文化振興協会／理事長 / 視察団のコーディネーター", role:"Delegation Coordinator", roleJa:"", photo:"Hadas_Kushelevich.png" },
    { id:"pt3", key:"masha_robeen", nameEn:"Masha Robeen", nameJa:"マーシャ・ルビーン", nameHe:"", org:"Japan-Israel AgeTech", orgJa:"Japan–Israel AgeTech 創設者・プロダクトマネージャー", role:"Delegation Coordinator", roleJa:"", photo:"Masha_Robeen.png", backOrg:"Founder & Product Manager, Japan–Israel AgeTech" },
    { id:"pt4", key:"dror_manuel_tzipori", nameEn:"Dror Manuel Tzipori", nameJa:"ツィポリ・ドロール・マヌエル", nameHe:"", org:"JDC-ELKA", orgJa:"JDC-ELKA／プログラム・ディレクター", role:"Program Director", roleJa:"", photo:"Dror Manuel Tzipori.jpg" },
    { id:"pt5", key:"aluma_margalit_aviaz", nameEn:"Aluma Margalit Aviaz", nameJa:"マルガリット・アルマ・アヴィアズ", nameHe:"", org:"JDC-ELKA", orgJa:"JDC-ELKA／プログラム・コーディネーター", role:"Program Coordinator", roleJa:"", photo:"Aluma  Margalit Aviaz.png" },
    { id:"pt6", key:"chen_rosenak", nameEn:"Chen Rosenak", nameJa:"ローゼナク・ヘン", nameHe:"", org:"Publica / JDC-ELKA", orgJa:"パブリカ／JDC-ELKA／プログラム・ディレクター", role:"Program Director", roleJa:"", photo:"Chen Rosenak.jpg" },
    { id:"pt7", key:"tal_mills", nameEn:"Tal Mills", nameJa:"ミルズ・タル", nameHe:"", org:"JDC-ELKA", orgJa:"JDC-ELKA／リーダーシップ・プログラム部門長", role:"Head of Leadership Programs", roleJa:"", photo:"Tal_Miles.png" }
  ];
  var PROGRAM_TEAM_ORDER = ["pt7", "pt4", "pt6", "pt5", "pt1", "pt2", "pt3"];

  var PROGRAM_BIOS = {
    dror_manuel_tzipori: {
      jaTitle: 'ドロール・マノエル・ツィポリ',
      bioEn: [
        'Dror is the Director of Forumetro and a research and development manager in the field of mobility.',
        'Previously, he worked in education at the Yad Hanadiv Foundation, where he helped develop strategic programs and grants in learning, pedagogy, and the environment. He also worked at the Knesset for several years in parliamentary and spokesperson roles, promoting equal-rights policies within the LGBTQ+ caucus.',
        'Dror holds a bachelor\u2019s degree in Philosophy, Economics and Political Science from the Hebrew University of Jerusalem, as well as a second bachelor\u2019s degree in Industrial Design from Bezalel Academy of Arts and Design. He also completed the Havruta pre-military leadership program and served as an intelligence officer in an intelligence\u2013operations cooperation unit.',
        'Alongside his professional work, Dror volunteers and serves as a board member of Hoshen, Israel\u2019s LGBTQ+ education and outreach organization, and is a certified fitness trainer in Tel Aviv.'
      ],
      bioJa: [
        'ドロールはForumetroのディレクターであり、モビリティ分野の研究開発マネージャーです。',
        '以前はヤド・ハナディブ財団の教育分野で勤務し、学習、教育学、環境に関する戦略的プログラムや助成事業の開発に携わりました。また、イスラエル国会（クネセト）では数年間、議会業務および広報関連の職務を務め、LGBTQ+議員連盟における平等な権利の推進に取り組みました。',
        'ヘブライ大学で哲学・経済学・政治学の学士号を取得し、さらにベツァレル美術デザイン学院で工業デザインの学士号を取得しています。また、Havrutaの兵役前リーダーシップ・プログラムを修了し、イスラエル国防軍では情報・作戦協力部門の情報将校として勤務しました。',
        '本業の傍ら、イスラエルのLGBTQ+教育・啓発団体Hoshenでボランティア活動を行い、理事も務めています。また、テルアビブで認定フィットネストレーナーとしても活動しています。'
      ]
    },
    chen_rosenak: {
      jaTitle: 'チェン・ローゼンク',
      bioEn: [
        'Chen is an urban planner and strategic consultant specializing in complex, multidisciplinary processes at the intersection of urban planning, public policy, and government.',
        'As a consultant at Fabrica, she works with local authorities, government ministries, philanthropic foundations, and other organizations to develop and implement strategic initiatives in metropolitan transportation, public space, regional development, health, and community resilience. Her work includes facilitating senior leadership teams, building partnerships, and leading long-term change processes.',
        'Previously, Chen served as Deputy CEO and Project Director at Forum 15, Israel\u2019s association of fiscally independent cities, and as a board member of the Urban Sustainability Lab of the Tel Aviv\u2013Jaffa Municipality.',
        'She also teaches in the Urban Planning master\u2019s program at the Hebrew University of Jerusalem, is a graduate of the Urban Space Lab, and has a professional background in editing for major media organizations.'
      ],
      bioJa: [
        'チェンは都市計画家および戦略コンサルタントであり、都市計画、公共政策、行政が交わる領域における複雑かつ分野横断的なプロセスを専門としています。',
        'Fabricaのコンサルタントとして、地方自治体、政府省庁、慈善財団などの組織と連携し、都市圏交通、公共空間、地域開発、保健、コミュニティ・レジリエンスなどの分野における戦略的施策の策定・実施に携わっています。経営層チームのファシリテーション、パートナーシップの構築、長期的な変革プロセスの推進なども担当しています。',
        '以前は、イスラエルの財政的に自立した主要都市で構成されるForum 15で副CEO兼プロジェクト・ディレクターを務めたほか、テルアビブ・ヤッフォ市のUrban Sustainability Labの理事も務めました。',
        'また、ヘブライ大学の都市計画修士課程で講師を務めています。Urban Space Labの修了者でもあり、主要メディアで編集業務に携わった経験もあります。'
      ]
    },
    aluma_margalit_aviaz: {
      jaTitle: 'アルマ・マルガリット・アビアド',
      bioEn: [
        'Aluma is the Program Coordinator for Forumetro and specializes in mobility at JDC-ELKA. She has extensive experience in project management, coordination, and the implementation of educational and community programs.',
        'Across her various roles, she has led planning processes and coordinated complex programs involving a wide range of partners, teams, and target audiences. Among other responsibilities, she coordinated and led Taglit programs and managed the development of operational and educational systems from concept through implementation.',
        'Aluma is also an experienced group facilitator and certified facilitator. Her professional experience combines strategic thinking, organizational and management capabilities, and the ability to build meaningful collaborations, together with a strong commitment to impactful educational work.'
      ],
      bioJa: [
        'アルマはForumetroのプログラム・コーディネーターであり、JDC-ELKAにおいてモビリティ分野を担当しています。プロジェクト管理、調整、教育・コミュニティプログラムの実施において豊富な経験を有しています。',
        'これまでのさまざまな役職において、多様なパートナー、チーム、対象者が関わる複雑なプログラムの企画・調整を担い、計画プロセスを主導してきました。特に、Taglitプログラムの調整・運営を担当したほか、構想段階から実施に至るまで、運営および教育システムの開発を管理してきました。',
        'また、グループ・ファシリテーションに豊富な経験を持つ認定ファシリテーターでもあります。戦略的思考、組織運営・マネジメント能力、意義あるパートナーシップを構築する力を兼ね備え、社会的インパクトのある教育活動に強くコミットしています。'
      ]
    },
    tal_mills: {
      jaTitle: 'マイルズ・タル',
      bioEn: [
        'Tal Miles is the Director of National Public System Network Initiatives at JDC Elka, where she leads large-scale collaborations and cross-sector partnerships to strengthen public systems and address complex societal challenges. Working closely with leaders across central and local government, civil society, and professional networks, she designs and implements initiatives that translate collaboration into meaningful, lasting change in the public sector.',
        'Prior to this role, Tal served as CEO of the Israel Green Building Council, where she led national efforts to advance sustainable urban development. Partnering with government decision-makers, municipalities, industry, and civil society, she promoted policies and practices that integrate environmental, social, and economic sustainability. Earlier, she held senior leadership positions at the Council, including VP of Operations and Training.',
        'Beyond her formal roles, Tal is an active community entrepreneur and a dedicated advocate for the inclusion of people with special needs.',
        'Tal holds a BA in Community Coordination from the Open University and Beit Berl College, and an MA in Mediation and Conflict Resolution from Tel Aviv University.'
      ],
      bioJa: [
        'マイルズ・タル氏は、JDC-ELKA（イスラエル・エルカ）において、全国公共システム・ネットワーク・イニシアティブ担当ディレクターを務めています。中央政府、地方自治体、市民社会組織、専門家ネットワークなど、多様な主体との連携を通じて、大規模な協働プロジェクトや分野横断的なパートナーシップを推進し、公共システムの強化と複雑な社会課題の解決に取り組んでいます。',
        '現職に就く以前は、イスラエル・グリーンビルディング協会の最高経営責任者（CEO）を務め、持続可能な都市開発の推進に向けた全国的な取り組みを主導しました。政府機関、自治体、産業界、市民社会との連携を通じて、環境・社会・経済の持続可能性を統合した政策や実践の普及に尽力しました。また、それ以前には同協会において事業運営・研修担当副代表（VP of Operations and Training）などの要職を歴任しています。',
        '職務以外でも、地域社会に根ざしたコミュニティ活動や社会起業に積極的に取り組むとともに、特別な支援を必要とする人々の包摂と社会参加の推進にも力を注いでいます。',
        'オープン大学およびベイト・ベルル・カレッジにてコミュニティ・コーディネーションの学士号を取得し、テルアビブ大学にて調停・紛争解決学の修士号を取得しています。'
      ]
    },
    dr_hadas_kushelevich: {
      jaTitle: 'クシェレビチ・ハダス博士',
      bioEn: [
        'Dr. Hadas Kushelevich is an educator, researcher, and bridge-builder between Israel and Japan. Originally from Israel, she holds a B.A. in Japanese Studies and an M.A. in Political Science from the Hebrew University of Jerusalem. She moved to Japan in 2012 as a recipient of the prestigious MEXT scholarship and has lived there ever since, developing deep familiarity with Japanese society, institutions, and culture.',
        'Dr. Kushelevich earned her Ph.D. from the Graduate School of Law and Politics at Osaka University, where her research focuses on Japanese political institutions and regulatory governance. Her doctoral work examined the regulation of Japan\u2019s pharmaceutical market, exploring the intersection of politics, public policy, and organizational reputation.',
        'She teaches at leading universities in Japan and Israel, including Kyoto University, Doshisha University, Ritsumeikan University, and the University of Haifa. Alongside her academic work, she has led numerous cross-cultural initiatives connecting students, researchers, and professionals from different countries.',
        'In addition to her academic work, Dr. Kushelevich serves as Chairperson of the Israel\u2013Japan Academic and Cultural Relations Association (IJAC), a non-profit organization dedicated to strengthening academic, cultural, and professional ties between Israel and Japan. Through IJAC, she promotes international collaboration among universities, researchers, students, policymakers, businesses, and civil society organizations. The association develops initiatives in education, research, policy dialogue, cultural exchange, and innovation, fostering mutual understanding and creating new opportunities for cooperation between the two countries.'
      ],
      bioJa: [
        'クシェレビチ・ハダス博士は、教育者、研究者として活動するとともに、日本とイスラエルを結ぶ架け橋として、学術・政策・イノベーション分野における国際交流と協力の促進に取り組んでいます。',
        'イスラエル出身。ヘブライ大学にて日本研究の学士号および政治学の修士号を取得しました。2012年、文部科学省（MEXT）国費外国人留学生として来日し、以来10年以上にわたり日本を拠点として研究・教育活動を続けています。',
        '大阪大学大学院法学研究科にて博士号（法学）を取得。専門は日本政治、規制ガバナンス、および公共政策です。博士論文では、日本の医薬品市場における規制の形成と運用を題材に、政治、公共政策、組織レピュテーションの相互作用について研究を行いました。',
        '現在は、京都大学、同志社大学、立命館大学、ハイファ大学など、日本およびイスラエルの高等教育機関において教育・研究活動に従事しています。また、学生、研究者、行政関係者、企業関係者をつなぐ数多くの国際プロジェクトや教育プログラムの企画・運営にも携わっています。',
        '研究者としての活動に加え、日本社会を深く理解するため、地域社会、文化、伝統芸能、芸術、歴史、そして各地の風土に触れながら、日々学びを重ねています。流暢な日本語を活かし、多様な立場の人々との対話を通じて、日本とイスラエルの相互理解と協力関係の発展に尽力しています。',
        'また、クシェレビチ博士は、特定非営利活動法人日本・イスラエル学術文化振興協会（IJAC）の理事長を務めています。IJACは、日本とイスラエルの学術・文化・専門分野における交流と協力の促進を目的として設立された非営利団体です。同協会を通じて、大学、研究者、学生、政策立案者、企業、市民社会組織の連携を支援し、教育、研究、政策対話、文化交流、イノベーションに関するさまざまな事業を推進しています。両国の相互理解を深めるとともに、新たな協力の機会を創出することを目指しています。'
      ]
    },
    masha_robeen: {
      jaTitle: 'マーシャ・ルビーン',
      bioEn: [
        'Masha is a product and project manager with experience leading healthcare and digital innovation projects from concept through implementation. Her work combines product strategy, multidisciplinary coordination, and turning complex needs into practical solutions.',
        'She holds master’s degrees in Gerontology from the University of Haifa and Innovation Management and Environmental Sciences from Yokohama National University. Having spent five years in Japan, she brings cross-cultural experience and an understanding of Japanese institutions to the delegation’s organizing team.'
      ],
      bioJa: [
        'マーシャは、ヘルスケアおよびデジタルイノベーション分野で、構想から実装までを手がけるプロダクト・プロジェクトマネージャーです。プロダクト戦略の策定や分野横断的なチームの連携を通じて、複雑な課題を実用的なソリューションへとつなげています。',
        'ハイファ大学で老年学の修士号、横浜国立大学大学院環境情報学府でイノベーション・マネジメントおよび環境科学の修士号を取得。日本での5年間の滞在で培った異文化理解と日本の組織・制度に関する知見を活かし、視察団の企画・運営に携わっています。'
      ]
    },
    arch_ofer_bilik: {
      jaTitle: 'オフェル・ビリック',
      bioEn: [
        'Ofer Bilik is an architect, urban planner, and project manager based in Tokyo. He holds a degree in Architecture from Bezalel Academy of Arts and Design and a degree in Urban Planning from the City University of New York (CUNY).',
        'His professional experience spans urban planning, construction, and infrastructure projects, including work with municipalities in both Japan and New York City.',
        'Ofer works to build bridges between urban knowledge, policy, practice, and technology, connecting people and ideas across cities and countries to advance better urban development.'
      ],
      bioJa: [
        'オフェル・ビリックは、東京を拠点に活動する建築家、都市計画家、プロジェクトマネージャーです。ベツァレル美術デザイン学院で建築学の学位を取得し、ニューヨーク市立大学（CUNY）で都市計画学の学位を取得しています。',
        '都市計画、建設、インフラプロジェクトなど幅広い分野で実務経験を持ち、日本およびニューヨーク市の自治体と連携したプロジェクトにも携わってきました。',
        'オフェルは、都市に関する知識、政策、実践、テクノロジーをつなぐ架け橋となることを目指しています。都市や国を越えて人々とアイデアを結びつけ、より良い都市開発の実現に取り組んでいます。'
      ]
    }
  };

  var STEERING_BADGE = "Steering Committee";
  var STEERING_PHOTO_VER = 2;

  var STEERING_BIOS = {};

  function steeringBioHtml(key) {
    var paras = STEERING_BIOS[key];
    if (!paras || !paras.length) return '';
    return paras.map(function (t) {
      return '<p style="margin:0 0 10px;font-size:12px;line-height:1.55;opacity:0.95">'+t+'</p>';
    }).join('');
  }

  function cardBioParaHtml(text) {
    return '<p style="margin:0 0 8px;font-size:11px;line-height:1.55;opacity:0.95">'+escapeHtml(text)+'</p>';
  }

  function buildCardBackBioFlipHtml(flipId, jaTitle, bioJaPars, bioEnPars) {
    var jaHtml = (bioJaPars || []).map(cardBioParaHtml).join('');
    var enHtml = (bioEnPars || []).map(cardBioParaHtml).join('');
    var jaTitleHtml = jaTitle ? '<div style="font-weight:800;font-size:13px;margin:0 0 8px;text-align:center">'+escapeHtml(jaTitle)+'</div>' : '';
    return '<div class="card-bio-flip" id="'+flipId+'" role="group" aria-label="Biography language toggle">' +
      '<div class="card-bio-flip-scroll">' +
        '<div class="card-bio-flip-inner">' +
          '<div class="card-bio-flip-face card-bio-flip-front" lang="en">'+enHtml+'</div>' +
          '<div class="card-bio-flip-face card-bio-flip-back" lang="ja">'+jaTitleHtml+jaHtml+'</div>' +
        '</div>' +
      '</div>' +
      '<button type="button" class="card-bio-flip-hint" data-hint-front="日本語" data-hint-back="English">' +
        '<span class="card-bio-flip-hint-label">日本語</span><span class="card-bio-flip-hint-arrow" aria-hidden="true">→</span>' +
      '</button>' +
    '</div>';
  }

  function buildStaffCarouselSection(title, members, sectionClass) {
    var boxStyle = 'background:#063755;box-shadow:0 10px 28px rgba(6,55,85,0.22);margin-bottom:32px;--staff-count:'+members.length;
    var cardsHtml = members.map(renderSteeringCard).join('');
    return '<section class="steering-section '+sectionClass+'" id="'+sectionClass+'">' +
      '<h2 class="all-participants-title steering-section-heading">'+title+'</h2>' +
      '<div class="about-box steering-section-box" style="'+boxStyle+'">' +
        '<div class="steering-carousel">' +
          '<button type="button" class="steering-carousel-prev" aria-label="Previous">&lt;</button>' +
          '<button type="button" class="steering-carousel-next" aria-label="Next">&gt;</button>' +
          '<div class="steering-carousel-track">'+cardsHtml+'</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function setCardFlipped(inner, flipped) {
    if (!inner) return;
    inner.classList.toggle('is-card-flipped', flipped);
    inner.style.transform = flipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
  }

  function bindCardBioFlips(container) {
    container.querySelectorAll('.card-bio-flip').forEach(function (flipEl) {
      if (flipEl.getAttribute('data-bound') === '1') return;
      flipEl.setAttribute('data-bound', '1');
      var hint = flipEl.querySelector('.card-bio-flip-hint');
      function updateFlipHint(flipped) {
        if (!hint) return;
        var label = hint.querySelector('.card-bio-flip-hint-label');
        var arrow = hint.querySelector('.card-bio-flip-hint-arrow');
        if (label && arrow) {
          label.textContent = flipped ? hint.getAttribute('data-hint-back') : hint.getAttribute('data-hint-front');
          arrow.textContent = flipped ? '←' : '→';
          hint.classList.toggle('is-flipped', flipped);
        }
      }
      function toggleBioFlip(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        var flipped = flipEl.classList.toggle('is-flipped');
        updateFlipHint(flipped);
      }
      if (hint) {
        hint.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          toggleBioFlip();
        });
      }
    });
  }

  function bindStaffCardFlips(container) {
    container.querySelectorAll('.steering-card.participant-card').forEach(function (el) {
      if (el.getAttribute('data-flip-bound') === '1') return;
      el.setAttribute('data-flip-bound', '1');
      var inner = el.querySelector('.card-inner');
      var front = el.querySelector('.card-front');
      var back = el.querySelector('.card-back');
      function flipToBack(e) {
        if (e) e.stopPropagation();
        setCardFlipped(inner, true);
      }
      function flipToFront(e) {
        if (e.target.closest('.card-bio-flip, a[href^="mailto:"]')) return;
        if (e) e.stopPropagation();
        setCardFlipped(inner, false);
      }
      if (front) {
        front.addEventListener('click', flipToBack);
      }
      if (back) {
        back.addEventListener('click', flipToFront);
      }
    });
  }

  function bindParticipantCardFlips(container) {
    container.querySelectorAll('#cards-container .participant-card').forEach(function (el) {
      el.onclick = function () {
        var inner = el.querySelector('.card-inner');
        if (!inner) return;
        var flipped = inner.classList.contains('is-card-flipped');
        setCardFlipped(inner, !flipped);
      };
    });
  }

  /** Japanese affiliation/title for card backs. Keys match participant `key`. */
  var MEMBER_JA_BACK = {
    "arch_ofer_bilik": { orgJa:"建築家・都市計画家", roleJa:"" },
    "dr_hadas_kushelevich": { orgJa:"特定非営利活動法人 日本・イスラエル学術文化振興協会／理事長 / 視察団のコーディネーター", roleJa:"" },
    "masha_robeen": { orgJa:"Japan–Israel AgeTech 創設者・プロダクトマネージャー", roleJa:"" },
    "dror_manuel_tzipori": { orgJa:"JDC-ELKA／プログラム・ディレクター", roleJa:"" },
    "aluma_margalit_aviaz": { orgJa:"JDC-ELKA／プログラム・コーディネーター", roleJa:"" },
    "chen_rosenak": { orgJa:"パブリカ／JDC-ELKA／プログラム・ディレクター", roleJa:"" },
    "tal_mills": { orgJa:"JDC-ELKA／リーダーシップ・プログラム部門長", roleJa:"" },
    "avi_haliva": { orgJa:"メトロ庁／長官", roleJa:"" },
    "hila_waxberg": { orgJa:"NTA（テルアビブ都市圏交通公社）／地方自治体部門長", roleJa:"" },
    "tal_granit": { orgJa:"イスラエル運輸・道路安全省", roleJa:"" },
    "dana_dover_ali_bing": { orgJa:"イスラエル財務省／インフラ予算部門副部長／予算局インフラ担当", roleJa:"" },
    "uri_gil": { orgJa:"JDC-ELKA／最高経営責任者", roleJa:"" },
    "sigal_gabai": { orgJa:"メトロ規制委員会／委員長", roleJa:"" },
    "roy_groves": { orgJa:"オル・イェフダ市／オル・イェフダ開発会社CEO代行", roleJa:"" },
    "kfir_fabrik": { orgJa:"ベエル・ヤアコブ市／都市建築家兼計画部長", roleJa:"" },
    "nitzan_barchan": { orgJa:"ブネイ・ブラク市／都市技師", roleJa:"" },
    "yishai_valency": { orgJa:"バット・ヤム市／都市技師", roleJa:"" },
    "ben_weinstein": { orgJa:"ギヴァト・シュムエル市／都市技師", roleJa:"" },
    "shai_rechter": { orgJa:"ギヴァタイム市／都市建築家", roleJa:"" },
    "adi_sadan_avrashitz": { orgJa:"ヘルツリヤ市／都市技師補佐兼計画部長", roleJa:"" },
    "shai_mulian": { orgJa:"ホロン市／建設・インフラ担当副社長", roleJa:"" },
    "miriam_elhadad": { orgJa:"クファル・サバ市／都市建築家兼計画部長", roleJa:"" },
    "anat_lerner": { orgJa:"ロッド市／都市技師", roleJa:"" },
    "boaz_gamliel": { orgJa:"ネス・ジオナ市／都市技師", roleJa:"" },
    "gil_mamon": { orgJa:"ネス・ジオナ市／市CEO", roleJa:"" },
    "lilach_shenkman": { orgJa:"ペタ・ティクヴァ市／交通部長", roleJa:"" },
    "itzik_ozelbo": { orgJa:"ペタ・ティクヴァ市／都市技師", roleJa:"" },
    "amit_capuza": { orgJa:"キリヤット・オノ市／都市技師", roleJa:"" },
    "evyatar_biton_tzur": { orgJa:"リション・レツィオン市／都市技師補佐、インフラ・公共建設部長", roleJa:"" },
    "lital_zohar_zilcha": { orgJa:"リション・レツィオン市／都市交通インフラ部長", roleJa:"" },
    "dalit_harel": { orgJa:"レホヴォト市／都市技師", roleJa:"" },
    "zharra_soloveitchik": { orgJa:"ラムラ市／都市技師", roleJa:"" },
    "roy_dvir_avidor": { orgJa:"ラマト・ガン市／運営・インフラ担当副社長", roleJa:"" },
    "oren_on": { orgJa:"ラアナナ市／都市建築家兼計画部長", roleJa:"" },
    "bel_raz": { orgJa:"ラアナナ市／技術開発・インフラ部長", roleJa:"" },
    "benny_koritz": { orgJa:"テルアビブ・ヤフォ市／長期交通計画部長", roleJa:"" },
    "maor_turgeman": { orgJa:"テルアビブ・ヤフォ市／公共交通部長", roleJa:"" },
    "gil_weiss": { orgJa:"NTA（テルアビブ都市圏交通公社）／技術・エンジニアリングセンター副CEO", roleJa:"" },
    "michael_feinberg": { orgJa:"NTA（テルアビブ都市圏交通公社）／建築・エンジニアリング部門長", roleJa:"" },
    "adi_kain_karni": { orgJa:"NTA（テルアビブ都市圏交通公社）／メトロM2線担当副社長", roleJa:"" },
    "kobi_ben_atar": { orgJa:"NTA（テルアビブ都市圏交通公社）／副社長兼M1メトロ事業局長", roleJa:"" },
    "rakefet_tibi": { orgJa:"NTA（テルアビブ都市圏交通公社）／統合・戦略計画上級部長", roleJa:"" },
    "shani_kedar": { orgJa:"NTA（テルアビブ都市圏交通公社）／M3建設部長", roleJa:"" },
    "danny_segal": { orgJa:"NTA（テルアビブ都市圏交通公社）／M2計画部長", roleJa:"" },
    "natalie_katz": { orgJa:"NTA（テルアビブ都市圏交通公社）／メトロ事業担当副社長、M1ラインマネージャー", roleJa:"" },
    "tadasa_baruch": { orgJa:"NTA（テルアビブ都市圏交通公社）／交通管理・管制部長", roleJa:"" },
    "guy_segal": { orgJa:"NTA（テルアビブ都市圏交通公社）／M3線副責任者、ラインマネージャー", roleJa:"" },
    "dudu_kovsenyano": { orgJa:"メトロ庁／法律顧問", roleJa:"" },
    "haim_cohen": { orgJa:"イスラエル運輸・道路安全省／中央・グッシュダン地区 許認可・公共交通運営部長", roleJa:"" },
    "lior_rosen": { orgJa:"イスラエル運輸・道路安全省／陸上交通計画上級部長", roleJa:"" },
    "chen_winik": { orgJa:"イスラエル運輸・道路安全省／テルアビブ・中央地区交通技師、地区技師代行", roleJa:"" },
    "talila_harel": { orgJa:"イスラエル計画局／中央地区計画官", roleJa:"" },
    "sharon_barkat": { orgJa:"イスラエル計画局／テルアビブ地区副計画官", roleJa:"" },
    "michal_lilienthal": { orgJa:"イスラエル計画局／詳細計画・許認可部長", roleJa:"" }
  };

  function memberJaBack(key) {
    return MEMBER_JA_BACK[key] || { orgJa: '', roleJa: '' };
  }
  function backJaSubHtml(text) {
    if (!text) return '';
    return '<br/><span style="font-size:11px;opacity:0.85;line-height:1.45">'+escapeHtml(text)+'</span>';
  }

  const SECTORS = [
    { key:"all",                         label:"Total",                       short:"Total",        mobile:["Total"], letter:"C", line:"#00BB85" },
    { key:"Local Government",            label:"Local Government",            short:"Local Gov",    mobile:["Local","Government"], letter:"G", line:"#FF9500" },
    { key:"Government-Owned Company",    label:"Government-Owned Company",    short:"Gov. Company", mobile:["Government","Owned Company"], letter:"T", line:"#009BBF" },
    { key:"Central Government",          label:"Central Government",          short:"Central Gov",  mobile:["Central","Government"], letter:"M", line:"#F62E36" },
  ];

  var P = { dark:'#12263A', hero:'#FFFFFF', mid:'#3D4F61', soft:'#8A96A3', pale:'#F7F8FA', text:'#12263A', nav:'#12263A' };
  var PRIMARY = P.dark;
  const SC = {
    "all":                         { bg:'#00BB85', light:'#E6F6FA', border:'#00BB85', text:'#12263A' },
    "Local Government":            { bg:"#FF9500", light:"#FFF4E5", border:"#FF9500", text:"#12263A" },
    "Government-Owned Company":    { bg:"#009BBF", light:"#E6F6FA", border:"#009BBF", text:"#12263A" },
    "Central Government":          { bg:"#F62E36", light:"#FDECEC", border:"#F62E36", text:"#12263A" },
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function counts() {
    const c = { all: PARTICIPANTS.length };
    PARTICIPANTS.forEach(function (p) { c[p.sector] = (c[p.sector] || 0) + 1; });
    return c;
  }

  var SECTOR_ORDER = ["Local Government","Government-Owned Company","Central Government"];
  function filterParticipants(activeSector, search) {
    var sectorKey = (activeSector === 'steering' || activeSector === 'program-team') ? 'all' : activeSector;
    var list = PARTICIPANTS.filter(function (p) {
      const ms = sectorKey === "all" || p.sector === sectorKey;
      const q = search.toLowerCase();
      const mq = !q || p.nameEn.toLowerCase().indexOf(q) >= 0 || (p.nameJa || '').indexOf(q) >= 0 || (p.nameHe || '').indexOf(q) >= 0 || (p.org || '').toLowerCase().indexOf(q) >= 0 || (p.orgLine2 || '').toLowerCase().indexOf(q) >= 0 || (p.role || '').toLowerCase().indexOf(q) >= 0;
      return ms && mq;
    });
    return list.sort(function (a, b) {
      var ia = SECTOR_ORDER.indexOf(a.sector);
      var ib = SECTOR_ORDER.indexOf(b.sector);
      if (ia !== ib) return ia - ib;
      return a.id - b.id;
    });
  }

  function buildAboutSectionFlipHtml(flipId, enHtml, jaHtml) {
    return '<div class="about-section-flip" id="'+flipId+'" role="group" aria-label="Section language toggle">' +
      '<div class="about-section-flip-inner">' +
        '<div class="about-section-flip-face about-section-flip-front" lang="en">'+enHtml+'</div>' +
        '<div class="about-section-flip-face about-section-flip-back" lang="ja">'+jaHtml+'</div>' +
      '</div>' +
      '<button type="button" class="about-section-flip-hint" data-hint-front="日本語" data-hint-back="English">' +
        '<span class="about-section-flip-hint-label">日本語</span><span class="about-section-flip-hint-arrow" aria-hidden="true">→</span>' +
      '</button>' +
    '</div>';
  }

  function bindAboutSectionFlips(container) {
    container.querySelectorAll('.about-section-flip').forEach(function (flipEl) {
      if (flipEl.getAttribute('data-bound') === '1') return;
      flipEl.setAttribute('data-bound', '1');
      var hint = flipEl.querySelector('.about-section-flip-hint');
      var inner = flipEl.querySelector('.about-section-flip-inner');
      var front = flipEl.querySelector('.about-section-flip-front');
      var back = flipEl.querySelector('.about-section-flip-back');
      function syncFlipHeight() {
        if (!inner || !front || !back) return;
        inner.style.minHeight = '';
        var visible = flipEl.classList.contains('is-flipped') ? back : front;
        var h = visible.scrollHeight;
        if (h > 0) inner.style.minHeight = h + 'px';
      }
      function updateFlipHint(flipped) {
        if (!hint) return;
        var label = hint.querySelector('.about-section-flip-hint-label');
        var arrow = hint.querySelector('.about-section-flip-hint-arrow');
        if (label && arrow) {
          label.textContent = flipped ? hint.getAttribute('data-hint-back') : hint.getAttribute('data-hint-front');
          arrow.textContent = flipped ? '←' : '→';
          hint.classList.toggle('is-flipped', flipped);
        }
      }
      function toggleFlip(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        var flipped = flipEl.classList.toggle('is-flipped');
        updateFlipHint(flipped);
        syncFlipHeight();
      }
      if (hint) hint.addEventListener('click', toggleFlip);
      flipEl.addEventListener('click', function (e) {
        if (e.target.closest('.about-section-flip-hint, a')) return;
        toggleFlip(e);
      });
      requestAnimationFrame(syncFlipHeight);
      window.addEventListener('resize', syncFlipHeight);
    });
  }

  function renderHomePage(container, setPage) {
    container.innerHTML =
      '<div class="home-wrap">' +
        '<div class="home-copy">' +
          '<p class="home-kicker">People. Cities. Connections.</p>' +
          '<h1 class="home-title"><span class="home-title-line">FORUMETRO</span><span class="home-title-line">TOKYO <span class="home-title-year">2026</span></span></h1>' +
          '<div class="home-accent" aria-hidden="true"></div>' +
          '<p class="home-sub">Israel Transportation Delegation <span class="home-sub-rest">to Japan</span></p>' +
          '<p class="home-tagline">Learning from global experience.<br/>Advancing Israel’s Metro for a stronger tomorrow.</p>' +
          '<div class="home-meta">' +
            '<span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>December 14 – 21, 2026</span>' +
            '<span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>Tokyo, Japan</span>' +
          '</div>' +
          '<div class="home-actions">' +
            '<button type="button" class="home-cta" data-go="about">Explore the Delegation <span class="home-cta-arrow" aria-hidden="true">→</span></button>' +
            '<button type="button" class="home-cta home-cta--ghost" data-go="program">View the Program</button>' +
          '</div>' +
        '</div>' +
        '<div class="home-map" aria-hidden="true"><img src="images/home-visual.jpg?v=7" alt=""/></div>' +
        '<div class="home-partners">' +
          '<div class="home-partner"><img src="images/logos/Neta_logo.png" alt="National Transportation Authority"/><span>National Transportation Authority</span></div>' +
          '<div class="home-partner"><img src="images/logos/Ministry_of_Finance_logo.png" alt="Ministry of Finance"/><span>State of Israel<br/>Ministry of Finance</span></div>' +
          '<div class="home-partner"><img src="images/logos/Metro_logo.png" alt="Metro"/><span>Metro</span></div>' +
          '<div class="home-partner"><img src="images/logos/Joint_logo.png" alt="JDC"/><span>JDC</span></div>' +
        '</div>' +
      '</div>';
    container.querySelectorAll('[data-go]').forEach(function (btn) {
      btn.onclick = function () { setPage(btn.getAttribute('data-go')); };
    });
  }

  function renderAboutPage(container, setPage) {
    var pStyle = 'margin:0 0 16px;font-size:16px;line-height:1.85;color:#12263A';
    var para = function (text) {
      return '<p style="'+pStyle+'">'+text+'</p>';
    };
    var fact = function (n, title, detail) {
      return '<div class="about-fact">' +
        '<div class="about-fact-n">'+n+'</div>' +
        '<div class="about-fact-copy">' +
          '<div class="about-fact-title">'+title+'</div>' +
          '<div class="about-fact-detail">'+detail+'</div>' +
        '</div>' +
      '</div>';
    };
    var metroStat = function (n, t) {
      return '<div class="about-metro-stat"><div class="about-metro-stat-n">'+n+'</div><div class="about-metro-stat-t">'+t+'</div></div>';
    };
    var metroStats = function (items) {
      return '<div class="about-metro-stats">'+items.map(function (s) { return metroStat(s[0], s[1]); }).join('')+'</div>';
    };
    var overviewMedia = function (statsItems) {
      return '<div class="about-overview-media">' +
        metroStats(statsItems) +
        '<div class="about-overview-gallery">' +
          '<figure class="about-overview-map">' +
            '<img src="images/about-metro-map.png" alt="The planned Tel Aviv Metro network"/>' +
          '</figure>' +
          '<div class="about-overview-stations">' +
            '<img src="images/about-station-interior.png?v=3" alt="Planned metro station interior"/>' +
            '<img src="images/about-station-aerial.png?v=3" alt="Planned metro station aerial view"/>' +
          '</div>' +
        '</div>' +
      '</div>';
    };
    var interestCard = function (num, title, question, detail) {
      return '<article class="about-interest-card">' +
        '<div class="about-interest-num">'+num+'</div>' +
        '<h3 class="about-interest-title">'+title+'</h3>' +
        '<p class="about-interest-q">'+question+'</p>' +
        '<p class="about-interest-d">'+detail+'</p>' +
      '</article>';
    };
    var aboutStops = [
      { id: 'about-overview', letter: 'M', num: '02', short: 'Overview', line: '#F62E36' },
      { id: 'about-delegation', letter: 'T', num: '03', short: 'Delegation', line: '#009BBF' },
      { id: 'about-interests', letter: 'C', num: '04', short: 'Interest', line: '#00BB85' }
    ];
    var aboutStopsHtml = aboutStops.map(function (s) {
      return '<button type="button" data-about-section="'+s.id+'" class="sector-btn" style="--station:'+s.line+'">' +
        '<span class="nav-mark" aria-hidden="true"><span class="nav-mark-line">'+s.letter+'</span><span class="nav-mark-id">'+s.num+'</span></span>' +
        '<span class="nav-caption">'+s.short+'</span></button>';
    }).join('');

    var overviewSectionEn =
      '<div class="about-overview-layout">' +
        '<div class="about-overview-lead">' +
          '<p class="about-lede">Israel’s Cross-Sector Partnership for Advancing the Tel Aviv Metro</p>' +
          '<p class="about-date">Tokyo, Japan | December 14–21, 2026</p>' +
        '</div>' +
        '<div class="about-overview-copy">' +
          para('The Tel Aviv metropolitan area, Israel’s financial heartland and leading innovation hub, is preparing for transformation through its first metro system: a US$50 billion project comprising three lines, 150 km of underground railway and 109 stations.') +
          para('FORUMETRO is a cross-sector partnership led by JDC-ELKA (The Joint), bringing together government ministries, local authorities, national planning bodies and NTA in a professional network. It builds the shared language, trust and coordination needed to address the Metro’s complex urban and social challenges and realize its potential to improve access, strengthen communities and reduce inequalities.') +
          para('The delegation seeks dialogue with Japanese public institutions, local authorities, railway operators, urban developers, engineering teams and researchers. The focus is on understanding the choices behind a system—and considering what could be adapted to Israel’s context.') +
          '<h3 class="about-subhead">What we aim to bring home</h3>' +
          para('Practical insights, stronger professional relationships and a shared set of questions to inform planning, delivery and future operation in Israel. The exchange is intended to open an ongoing conversation between Israeli and Japanese professionals.') +
        '</div>' +
      '</div>' +
      overviewMedia([
        ['3', 'Metro lines · M1 / M2 / M3'],
        ['150', 'Km of planned routes'],
        ['109', 'Planned stations'],
        ['24', 'Municipalities'],
        ['7', 'Transport hubs'],
        ['4', 'Depot complexes']
      ]);

    var overviewSectionJa =
      '<div class="about-overview-layout">' +
        '<div class="about-overview-lead">' +
          '<p class="about-lede">テルアビブ・メトロ推進に向けたイスラエルの分野横断型連携プラットフォーム</p>' +
          '<p class="about-date">東京｜2026年12月14日〜21日</p>' +
        '</div>' +
        '<div class="about-overview-copy">' +
          para('イスラエルの経済・金融の中心地であり、主要なイノベーション拠点でもあるテルアビブ都市圏では、初のメトロ整備による大きな変革が進められています。本事業は、3路線、地下路線総延長150km、109駅からなる総事業費500億米ドル規模のプロジェクトです。') +
          para('JDC-ELKA（The Joint）が主導する分野横断型パートナーシップ「FORUMETRO」は、政府省庁、地方自治体、国の計画機関およびNTAを、中立的かつ専門的なプラットフォームを通じて結びます。メトロがもたらす複雑な都市・社会課題に対応し、交通アクセスの改善、地域社会の強化、格差の縮小という可能性を実現するため、共通認識、信頼関係、連携体制の構築を進めています。イスラエルの上級専門家で構成される代表団は、メトロが都市圏の構造、成長、発展にどのような役割を果たすかを学ぶため、東京を訪問します。') +
          para('視察団は、日本の公的機関、地方自治体、鉄道事業者、都市開発事業者、エンジニアリングチーム、研究者との対話を求めています。システムの背景にある選択を理解し、イスラエルの文脈にどのように適応できるかを考えることに重点を置いています。') +
          '<h3 class="about-subhead">日本から持ち帰りたいもの</h3>' +
          para('実践的な知見、より強固な専門的関係、そしてイスラエルにおける計画・整備・将来の運営に活かすための共通の問いです。本交流は、イスラエルと日本の専門家による継続的な対話のきっかけとなることを目指しています。') +
        '</div>' +
      '</div>' +
      overviewMedia([
        ['3', 'メトロ路線 · M1 / M2 / M3'],
        ['150', '計画延長（km）'],
        ['109', '計画駅'],
        ['24', '自治体'],
        ['7', '交通ハブ'],
        ['4', '車両基地']
      ]);

    var delegationSectionEn =
      '<div class="about-delegation-layout">' +
        para('The delegation comprises 51 senior executives, including city engineers, city architects and leaders responsible for urban planning, transportation and infrastructure.') +
        '<div class="about-facts">' +
          fact('26', 'Local authorities', 'City engineering, architecture, planning, transport and infrastructure') +
          fact('10', 'NTA', 'Senior executives and M1, M2 and M3 line leadership') +
          fact('5', 'National institutions', 'Transport, finance, regulation and planning') +
          fact('4', 'FORUMETRO program team', 'JDC-ELKA and Publica') +
          fact('6', 'Steering committee', 'Government, NTA, planning institutions and program partners') +
        '</div>' +
      '</div>';

    var delegationSectionJa =
      '<div class="about-delegation-layout">' +
        para('視察団は、都市計画、交通、インフラ整備を担う上級幹部、都市技術者、都市建築家など、計51名の専門家で構成されます。') +
        '<div class="about-facts">' +
          fact('26', '地方自治体', '都市技術、建築、計画、交通、インフラ') +
          fact('10', 'NTA', '経営幹部ならびにM1・M2・M3各路線の責任者') +
          fact('5', '国レベル機関', '交通、財政、規制、計画') +
          fact('4', 'FORUMETRO運営チーム', 'JDC-ELKAおよびPublica') +
          fact('6', '運営委員会', '政府、NTA、計画機関およびプログラム関係者') +
        '</div>' +
      '</div>';

    var interestsSectionEn =
      '<h3 class="about-subhead">From observation to practical questions.</h3>' +
      para('The delegation seeks dialogue with Japanese public institutions, local authorities, railway operators, urban developers, engineering teams and researchers. The focus is on understanding the choices behind a system—and considering what could be adapted to Israel’s context.') +
      '<div class="about-interest-list">' +
        interestCard('01', 'A connected passenger journey', 'How can metro, rail, buses and walking routes work as one journey?', 'Interchanges, wayfinding, step-free access and the first and last mile.') +
        interestCard('02', 'Stations that shape neighbourhoods', 'How can station-area planning support daily life beyond the platform?', 'Transit-oriented development, public space, employment and mixed uses.') +
        interestCard('03', 'Cooperation across institutions', 'How are responsibilities coordinated across operators, cities and government?', 'Decision-making, interfaces, shared standards and long-term accountability.') +
        interestCard('04', 'Building while the city keeps moving', 'How can major works preserve access to homes, businesses and services?', 'Construction phasing, utility relocation, site logistics and public communication.') +
        interestCard('05', 'Readiness for long-term operation', 'What must be planned early to support reliable service over decades?', 'Workforce development, maintenance, station management and passenger experience.') +
        interestCard('06', 'Infrastructure that serves communities', 'How can project decisions translate into better access and wider public benefit?', 'Connections to opportunity, inclusive design and the relationship between mobility and urban development.') +
      '</div>';

    var interestsSectionJa =
      '<h3 class="about-subhead">観察から実践的な問いへ。</h3>' +
      para('視察団は、日本の公的機関、地方自治体、鉄道事業者、都市開発事業者、エンジニアリングチーム、研究者との対話を求めています。システムの背景にある選択を理解し、イスラエルの文脈にどのように適応できるかを考えることに重点を置いています。') +
      '<div class="about-interest-list">' +
        interestCard('01', 'つながりのある乗客の移動', '地下鉄、鉄道、バス、徒歩経路を一つの移動として、どのように機能させられるか。', '乗換、案内、段差のないアクセス、ファースト／ラストマイル。') +
        interestCard('02', 'まちを形づくる駅', '駅周辺の計画は、ホームの外の日常生活をどのように支えられるか。', '公共交通指向型開発、公共空間、雇用、複合用途。') +
        interestCard('03', '機関をまたぐ協力', '事業者、都市、政府の間で、責任はどのように調整されるか。', '意思決定、インターフェース、共通基準、長期的な説明責任。') +
        interestCard('04', '都市を動かしながらの建設', '大規模工事は、住宅、事業、サービスへのアクセスをどのように守れるか。', '工事の段階化、埋設物移設、現場物流、広報。') +
        interestCard('05', '長期運営への備え', '数十年にわたる安定したサービスのために、何を早期に計画すべきか。', '人材育成、維持管理、駅運営、利用者体験。') +
        interestCard('06', '地域社会に資するインフラ', '事業判断は、より良いアクセスとより広い公共の利益にどうつながるか。', '機会への接続、包摂的なデザイン、モビリティと都市開発の関係。') +
      '</div>';

    container.innerHTML = '<div class="about-page-shell">' +
      '<div class="participants-header-wrap">' +
        '<div class="participants-header-inner">' +
          '<div class="participants-header-copy"><h1>About</h1></div>' +
          '<div class="stats-bar-wrap" id="about-stops-bar">'+aboutStopsHtml+'</div>' +
        '</div>' +
      '</div>' +
      '<div class="participants-content about-page-content">' +
        '<section class="about-section" id="about-overview">' +
          '<h2 class="all-participants-title about-section-title">Forumetro Overview</h2>' +
          '<div class="about-panel">' +
            buildAboutSectionFlipHtml('about-delegation-flip', overviewSectionEn, overviewSectionJa) +
          '</div>' +
        '</section>' +
        '<section class="about-section" id="about-delegation">' +
          '<h2 class="all-participants-title about-section-title">The Delegation</h2>' +
          '<div class="about-panel">' +
            buildAboutSectionFlipHtml('about-background-flip', delegationSectionEn, delegationSectionJa) +
          '</div>' +
        '</section>' +
        '<section class="about-section" id="about-interests">' +
          '<h2 class="all-participants-title about-section-title">Areas of Professional Interest</h2>' +
          '<div class="about-interests-row">' +
            '<div class="about-panel">' +
              buildAboutSectionFlipHtml('about-objectives-flip', interestsSectionEn, interestsSectionJa) +
            '</div>' +
            '<section class="about-group-image">' +
              '<img src="images/group-photo.jpg?v=1" alt="FORUMETRO delegation group photo"/>' +
            '</section>' +
          '</div>' +
          '<section class="about-cta">' +
            '<button id="cta-participants" class="home-cta">Meet the Participants</button>' +
          '</section>' +
        '</section>' +
      '</div></div>';

    container.querySelector('#cta-participants').onclick = function () { setPage('participants'); };
    container.querySelectorAll('#about-stops-bar [data-about-section]').forEach(function (btn) {
      btn.onclick = function () {
        var el = container.querySelector('#' + btn.getAttribute('data-about-section'));
        if (!el) return;
        var y = el.getBoundingClientRect().top + window.pageYOffset - stickyHeaderOffset('about-page');
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      };
    });
    bindAboutSectionFlips(container);
    requestAnimationFrame(function () {
      requestAnimationFrame(syncAboutLineAnchor);
    });
  }

  function renderMeetTheTeamPage(container, setPage) {
    var pStyle = 'margin:0 0 16px;font-size:15px;line-height:1.75;color:'+P.mid+'';
    var jaPStyle = 'margin:0 0 14px;font-size:14px;line-height:1.8;color:'+P.mid;
    var organizer1En = '<p style="'+pStyle+'">[PLACEHOLDER] Biography will be added here.</p>';
    var organizer2En = '<p style="'+pStyle+'">[PLACEHOLDER] Biography will be added here.</p>';
    var organizer1Ja = '<p style="'+jaPStyle+'">[プレースホルダー] 経歴は後ほど追加されます。</p>';
    var organizer2Ja = '<p style="'+jaPStyle+'">[プレースホルダー] 経歴は後ほど追加されます。</p>';
    function buildTeamBioFlipHtml(flipId, jaTitle, jaBioHtml, enBioHtml) {
      return '<div class="team-bio-flip" id="'+flipId+'" role="button" tabindex="0" aria-label="Toggle English biography">' +
        '<div class="team-bio-flip-inner">' +
          '<div class="team-bio-flip-face team-bio-flip-front team-bio" lang="ja">' +
            '<h3>'+jaTitle+'</h3>'+jaBioHtml+
          '</div>' +
          '<div class="team-bio-flip-face team-bio-flip-back team-bio" lang="en">'+enBioHtml+'</div>' +
        '</div>' +
        '<div class="team-bio-flip-hint" data-hint-front="English" data-hint-back="日本語">' +
          '<span class="team-bio-flip-hint-label">English</span><span class="team-bio-flip-hint-arrow" aria-hidden="true">→</span>' +
        '</div>' +
      '</div>';
    }
    var organizer1BioFlipHtml = buildTeamBioFlipHtml('organizer-1-bio-flip', '[プレースホルダー] 主催者 1', organizer1Ja, organizer1En);
    var organizer2BioFlipHtml = buildTeamBioFlipHtml('organizer-2-bio-flip', '[プレースホルダー] 主催者 2', organizer2Ja, organizer2En);
    var teamBoxStyle = 'box-shadow:0 4px 24px rgba(0,0,0,0.15);margin-bottom:24px';
    container.innerHTML = '<div style="min-height:100vh;background:'+P.pale+'">' +
      '<div class="about-banner team-banner" style="background:'+P.hero+';width:100%;overflow:hidden">' +
        '<div style="padding:48px 24px;text-align:center"><div class="team-banner-row"><span class="partner-logo partner-placeholder">[PLACEHOLDER]</span><h1 style="margin:0;color:white;font-size:32px;font-weight:800;letter-spacing:0.02em">Meet the Team</h1><span class="partner-logo partner-placeholder">[PLACEHOLDER]</span></div></div>' +
      '</div>' +
      '<div class="about-content team-content">' +
        '<div class="about-box team-section-box" style="'+teamBoxStyle+'">' +
          '<h2 class="team-section-title">Delegation Organizers</h2>' +
          '<div class="team-grid team-cards team-cards-main">' +
          '<div class="team-card team-card-organizer-1">' +
            '<div class="team-name"><h2>[PLACEHOLDER] Organizer 1</h2></div>' +
            '<div class="team-photo-wrap">'+photoPlaceholderHtml('[PLACEHOLDER] Photo')+'</div>' +
            organizer1BioFlipHtml +
            '<div class="team-card-logo"><span class="partner-placeholder">[PLACEHOLDER] Organization</span></div>' +
          '</div>' +
          '<div class="team-card team-card-organizer-2">' +
            '<div class="team-name"><h2>[PLACEHOLDER] Organizer 2</h2></div>' +
            '<div class="team-photo-wrap">'+photoPlaceholderHtml('[PLACEHOLDER] Photo')+'</div>' +
            organizer2BioFlipHtml +
            '<div class="team-card-logo"><span class="partner-placeholder">[PLACEHOLDER] Organization</span></div>' +
          '</div>' +
        '</div></div></div></div>';
    function bindTeamBioFlip(flipEl) {
      if (!flipEl) return;
      var hint = flipEl.querySelector('.team-bio-flip-hint');
      function updateFlipHint(flipped) {
        if (!hint) return;
        var label = hint.querySelector('.team-bio-flip-hint-label');
        var arrow = hint.querySelector('.team-bio-flip-hint-arrow');
        if (label && arrow) {
          label.textContent = flipped ? hint.getAttribute('data-hint-back') : hint.getAttribute('data-hint-front');
          arrow.textContent = flipped ? '←' : '→';
          hint.classList.toggle('is-flipped', flipped);
        }
      }
      function toggleBioFlip() {
        var flipped = flipEl.classList.toggle('is-flipped');
        updateFlipHint(flipped);
      }
      flipEl.onclick = function (e) {
        if (e.target.closest('.team-bio-flip-face')) return;
        toggleBioFlip();
      };
      if (hint) {
        hint.onclick = function (e) {
          e.stopPropagation();
          toggleBioFlip();
        };
      }
      flipEl.onkeydown = function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleBioFlip();
        }
      };
    }
    bindTeamBioFlip(container.querySelector('#organizer-1-bio-flip'));
    bindTeamBioFlip(container.querySelector('#organizer-2-bio-flip'));
  }

  function steeringPhotoHtml(m) {
    var nameEn = escapeHtml(m.nameEn);
    if (m.photo) {
      var ver = m.photoVer != null ? m.photoVer : ((m.bioEn && m.bioJa) ? PROGRAM_PHOTO_VER : STEERING_PHOTO_VER);
      var photoSrc = encodeURI(PHOTO_DIR + m.photo) + '?v=' + ver;
      return '<img src="'+photoSrc+'" alt="'+nameEn+'" loading="lazy" decoding="async"/>';
    }
    return photoPlaceholderHtml('[PLACEHOLDER] Photo');
  }

  function renderSteeringCard(m) {
    var c = { bg:'#063755', border:'#063755', light:'#E8F2F6', text:'#ffffff', back:'#1B6B88' };
    var badge = m.badge || STEERING_BADGE;
    var nameEn = escapeHtml(m.nameEn);
    var nameJa = escapeHtml(m.nameJa || '');
    var nameHe = escapeHtml(m.nameHe || '');
    var nameJaHtml = nameJa ? '<div style="font-size:13px;color:'+P.mid+';opacity:0.9">'+nameJa+'</div>' : '';
    var nameJaBackHtml = nameJa ? '<div style="font-size:12px;opacity:0.82">'+nameJa+'</div>' : '';
    var org = escapeHtml(m.org || '');
    var role = escapeHtml(m.role || '');
    var backOrg = escapeHtml(m.backOrg || m.org || '');
    var jaBack = memberJaBack(m.key);
    var orgJaBackHtml = backJaSubHtml(m.orgJa || jaBack.orgJa);
    var roleJaBackHtml = backJaSubHtml(m.roleJa || jaBack.roleJa);
    var email = escapeHtml(m.email || '');
    var bioHtml = steeringBioHtml(m.key);
    var bioFlipHtml = (m.bioEn && m.bioJa) ? buildCardBackBioFlipHtml('card-bio-'+m.id, m.jaTitle || m.nameJa, m.bioJa, m.bioEn) : '';
    var backRoleHtml = m.backOrg ? '' : '<div style="margin-top:6px"><strong>'+role+'</strong>'+roleJaBackHtml+'</div>';
    var backContentHtml;
    if (m.bioEn && m.bioJa) {
      backContentHtml =
        '<div class="steering-card-back-meta" style="flex-shrink:0;padding:6px 0 2px;font-size:13px"><div><strong>'+backOrg+'</strong>'+orgJaBackHtml+'</div>' +
        backRoleHtml +
        (m.email ? '<div style="margin-top:6px"><a href="mailto:'+email+'" style="color:'+P.pale+'" onclick="event.stopPropagation()">'+email+'</a></div>' : '') +
        '</div>' +
        '<div class="steering-card-back-bio" style="flex:1;min-height:0;display:flex;flex-direction:column;margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.2)">'+bioFlipHtml+'</div>';
    } else {
      var bioBackHtml = bioHtml ? '<div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.2)">'+bioHtml+'</div>' : '';
      backContentHtml =
        '<div class="steering-card-back-body" style="flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:12px 0 8px;font-size:13px"><div><strong>'+backOrg+'</strong>'+orgJaBackHtml+'</div>' +
        (m.backOrg ? '' : '<div style="margin-top:8px"><strong>'+role+'</strong>'+roleJaBackHtml+'</div>') +
        (m.email ? '<div style="margin-top:8px"><a href="mailto:'+email+'" style="color:'+P.pale+'" onclick="event.stopPropagation()">'+email+'</a></div>' : '') +
        bioBackHtml + '</div>';
    }
    var cardAttrs = 'class="steering-card participant-card" data-staff-id="'+m.id+'"';
    if (m.id.indexOf('sc') === 0) cardAttrs += ' data-steering-id="'+m.id+'"';
    var photoInner = '<div class="steering-photo-inner">'+steeringPhotoHtml(m)+'</div>';
    return '<div '+cardAttrs+' style="perspective:900px;cursor:pointer">' +
      '<div class="card-inner" style="transition:transform 0.55s">' +
        '<div class="card-front" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 10px 24px rgba(0,20,36,0.22)">' +
          '<div class="card-photo-wrap">'+photoInner+'</div>' +
          '<div class="card-info">' +
            '<div class="card-front-names" style="display:flex;flex-direction:column;gap:4px">' +
              '<div class="card-front-name-block" style="display:flex;flex-direction:column;gap:4px">' +
                '<div style="font-weight:800;font-size:16px;color:'+P.dark+'">'+nameEn+'</div>'+nameJaHtml +
              '</div>' +
              '<div class="card-front-org-block">' +
                (role ? '<div class="card-front-org" style="font-weight:600;color:'+P.text+'">'+role+'</div>' : '') +
                (org ? '<div class="card-org">'+org+'</div>' : '') +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="card-front-footer" style="background:'+c.light+'"><div class="card-front-label-wrap"><div style="background:'+c.bg+';color:white;font-size:12px;font-weight:700;padding:6px 12px;border-radius:20px">'+badge+'</div></div></div>' +
          '<div class="view-details">View Details</div>' +
        '</div>' +
        '<div class="card-back" style="transform:rotateY(180deg);background:'+c.back+';border-radius:16px;padding:18px 16px 14px;color:#fff;display:flex;flex-direction:column;overflow:hidden;box-sizing:border-box">' +
          '<div style="text-align:center;padding:10px 0 6px;flex-shrink:0"><div style="font-weight:800;font-size:17px">'+nameEn+'</div>'+nameJaBackHtml+(nameHe ? '<div style="font-family:Arial;direction:rtl;font-size:13px;opacity:0.88">'+nameHe+'</div>' : '')+'</div>' +
          '<div style="height:1px;background:rgba(255,255,255,0.25);flex-shrink:0"></div>' +
          backContentHtml +
          '<div style="text-align:center;font-size:10px;opacity:0.5;padding-top:4px;flex-shrink:0">TAP TO FLIP BACK</div>' +
        '</div>' +
      '</div></div>';
  }


  function initStaffCarousels(container) {
    container.querySelectorAll('.steering-carousel').forEach(function (carousel) {
      if (carousel.getAttribute('data-ready') === '1') return;
      carousel.setAttribute('data-ready', '1');
      var track = carousel.querySelector('.steering-carousel-track');
      var prev = carousel.querySelector('.steering-carousel-prev');
      var next = carousel.querySelector('.steering-carousel-next');
      if (!track || !prev || !next) return;
      function scrollStep(dir) {
        var card = track.querySelector('.steering-card');
        var amount = card ? card.offsetWidth + 14 : 280;
        track.scrollBy({ left: dir * amount, behavior: 'smooth' });
      }
      track.scrollLeft = 0;
      prev.addEventListener('click', function (e) { e.stopPropagation(); scrollStep(-1); });
      next.addEventListener('click', function (e) { e.stopPropagation(); scrollStep(1); });
    });
  }

  function initSteeringCarousel(container) {
    initStaffCarousels(container);
  }

  function sectorBadge(sector) {
    var c = SC[sector] || { light:"#f1f5f9", text:"#3d3a5c", border:"#cbd5e1" };
    return '<span style="background:'+c.light+';color:'+c.text+';border:1.5px solid '+c.border+';font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px">'+escapeHtml(sector)+'</span>';
  }
  function renderParticipantCard(p) {
    var c = SC[p.sector] || { bg:"#334155", border:"#64748b", light:"#f1f5f9", text:"#3d3a5c" };
    var initial = p.nameEn.charAt(0);
    var nameEn = escapeHtml(p.nameEn);
    var nameJa = escapeHtml(p.nameJa || '');
    var nameHe = escapeHtml(p.nameHe || '');
    var nameJaHtml = nameJa ? '<div style="font-size:13px;color:'+(c.text||P.mid)+';opacity:0.9">'+nameJa+'</div>' : '';
    var nameJaBackHtml = nameJa ? '<div style="font-size:12px;opacity:0.82">'+nameJa+'</div>' : '';
    var org = escapeHtml(p.org);
    var orgBack = escapeHtml(p.orgBack || p.org);
    var orgLine2 = (p.orgLine2 && p.orgLine2.trim()) ? '<br/>' + escapeHtml(p.orgLine2) : '';
    var role = escapeHtml(p.role);
    var jaBack = memberJaBack(p.key);
    var orgJaBackHtml = backJaSubHtml(jaBack.orgJa);
    var roleJaBackHtml = backJaSubHtml(jaBack.roleJa);
    var email = escapeHtml(p.email || '');
    var photoHtml = '<div class="participant-photo-inner">' + participantPictureFront(p) + '</div>';
    var backImg = participantPictureBack(p);
    return '<div class="participant-card" data-id="' + p.id + '" data-sector="' + escapeHtml(p.sector) + '" style="perspective:900px;cursor:pointer;height:460px;min-height:460px;margin:12px">' +
      '<div class="card-inner" style="position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.55s">' +
        '<div class="card-front" style="position:absolute;top:0;left:0;right:0;bottom:0;backface-visibility:hidden;background:white;border-radius:14px;border:2.5px solid '+c.border+';overflow:hidden;display:flex;flex-direction:column;height:100%;min-height:0;box-shadow:0 2px 12px rgba(0,0,0,0.08)">' +
          '<div class="card-photo-wrap">'+photoHtml+'</div>' +
          '<div class="card-front-info" style="background:'+P.pale+';color:'+(c.text||P.text)+'">' +
            '<div class="card-front-names">' +
              '<div class="card-front-name-block">' +
                '<div style="font-weight:800;font-size:16px;color:'+(c.text||P.dark)+'">'+nameEn+'</div>'+nameJaHtml +
              '</div>' +
              '<div class="card-front-org-block">' +
                '<div class="card-front-org" style="font-weight:600;color:'+(c.text||P.text)+'">'+org+orgLine2+'</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="card-front-footer" style="background:'+P.pale+'"><div class="card-front-label-wrap"><div style="background:'+c.bg+';color:white;font-size:14px;font-weight:700;padding:6px 14px;border-radius:20px">'+escapeHtml(p.sector)+'</div></div></div>' +
          '<div class="view-details" style="background:'+c.bg+'">View Details</div>' +
        '</div>' +
        '<div class="card-back" style="position:absolute;top:0;left:0;right:0;bottom:0;backface-visibility:hidden;transform:rotateY(180deg);background:linear-gradient(160deg,'+c.bg+','+c.bg+'ee);border-radius:14px;padding:18px;color:white;display:flex;flex-direction:column;gap:0;overflow:hidden">' +
          '<div class="card-back-upper" style="flex:1 1 33%;min-height:140px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:16px 0 20px;gap:12px"><div class="participant-back-thumb" style="width:140px;height:140px;min-width:140px;min-height:140px;border-radius:50%;overflow:hidden;border:3px solid rgba(255,255,255,0.5);flex-shrink:0;background:rgba(255,255,255,0.1);box-shadow:0 4px 12px rgba(0,0,0,0.2)">'+backImg+'</div><div style="text-align:center;display:flex;flex-direction:column;gap:6px"><div style="font-weight:800;font-size:17px">'+nameEn+'</div>'+nameJaBackHtml+(nameHe ? '<div style="font-family:Arial;direction:rtl;font-size:13px;opacity:0.88">'+nameHe+'</div>' : '')+'</div></div>' +
          '<div style="height:1px;background:rgba(255,255,255,0.25);flex-shrink:0"></div>' +
          '<div style="flex:1;min-height:0;overflow-y:auto;padding:12px 0 8px"><div style="font-size:13px"><strong>'+orgBack+orgLine2+'</strong>'+orgJaBackHtml+'</div>' +
          '<div style="margin-top:8px;font-size:13px"><strong>'+role+'</strong>'+roleJaBackHtml+'</div>' +
          (p.email ? '<div style="margin-top:8px"><a href="mailto:'+email+'" style="color:'+P.pale+'" onclick="event.stopPropagation()">'+email+'</a></div>' : '') + '</div>' +
          '<div style="text-align:center;font-size:10px;opacity:0.5;flex-shrink:0;padding-top:4px">TAP TO FLIP BACK</div>' +
        '</div>' +
      '</div></div>';
  }

  function sectorCaptionHtml(label, mobile) {
    var full = escapeHtml(label);
    if (mobile && mobile.length > 1) {
      return '<span class="nav-caption">' +
        '<span class="nav-caption-desktop">'+full+'</span>' +
        '<span class="nav-caption-mobile" aria-hidden="true">' +
          mobile.map(function (line) { return '<span>'+escapeHtml(line)+'</span>'; }).join('') +
        '</span></span>';
    }
    return '<span class="nav-caption">'+full+'</span>';
  }

  function renderParticipantsPage(container, activeSector, search, setActiveSector, setSearch) {
    var cnt = counts();
    var filtered = filterParticipants(activeSector, search);

    var extraStations = [
      { key: 'program-team', label: 'Program Team', mobile: ['Program','Team'], letter: 'N', line: '#00ADA9', n: PROGRAM_TEAM.length },
      { key: 'steering', label: 'Steering Committee', mobile: ['Steering','Committee'], letter: 'H', line: '#8F76D6', n: STEERING_COMMITTEE.length }
    ];
    var statsHtml = SECTORS.map(function(s){
      var n = cnt[s.key] || 0;
      var id = n < 10 ? ('0' + n) : String(n);
      var isActive = activeSector === s.key;
      return '<button type="button" data-sector="'+s.key+'" class="sector-btn'+(isActive ? ' active' : '')+'" style="--station:'+s.line+'">' +
        '<span class="nav-mark" aria-hidden="true"><span class="nav-mark-line">'+s.letter+'</span><span class="nav-mark-id">'+id+'</span></span>' +
        sectorCaptionHtml(s.label, s.mobile)+'</button>';
    }).concat(extraStations.map(function (s) {
      var id = s.n < 10 ? ('0' + s.n) : String(s.n);
      var isActive = activeSector === s.key;
      return '<button type="button" data-sector="'+s.key+'" class="sector-btn'+(isActive ? ' active' : '')+'" style="--station:'+s.line+'">' +
        '<span class="nav-mark" aria-hidden="true"><span class="nav-mark-line">'+s.letter+'</span><span class="nav-mark-id">'+id+'</span></span>' +
        sectorCaptionHtml(s.label, s.mobile)+'</button>';
    })).join('');

    var steeringSectionHtml = buildStaffCarouselSection('Steering Committee', STEERING_COMMITTEE, 'steering-section-main');
    var programTeamMembers = PROGRAM_TEAM_ORDER.map(function (id) {
      var member = PROGRAM_TEAM.filter(function (m) { return m.id === id; })[0];
      return Object.assign({}, member, PROGRAM_BIOS[member.key] || {}, { badge: PROGRAM_TEAM_BADGE });
    });
    var programTeamSectionHtml = buildStaffCarouselSection('Program Team', programTeamMembers, 'program-team-section');

    var searchRow = container.querySelector('.search-row');
    var cardsContainer = container.querySelector('#cards-container');
    var isEmpty = container.querySelector('.participants-empty');

    if (!searchRow) {
      container.innerHTML = '<div style="min-height:100vh;background:'+P.pale+'">' +
        '<div class="participants-header-wrap">' +
          '<div class="participants-header-inner">' +
            '<div class="participants-header-copy"><h1>Participants</h1></div>' +
            '<div class="search-row" dir="ltr">' +
              '<input type="text" id="search-input" dir="ltr" autocomplete="off" placeholder="Search by name, org, role" />' +
            '</div>' +
            '<div class="stats-bar-wrap" id="stats-bar">'+statsHtml+'</div>' +
          '</div>' +
        '</div>' +
        '<div class="participants-content">' +
          steeringSectionHtml +
          programTeamSectionHtml +
          '<section class="all-participants-section" id="participants-all">' +
          '<h2 class="all-participants-title" style="margin:0 0 16px;font-size:22px;font-weight:800;color:'+P.dark+'">All Participants</h2>' +
          '<div class="cards-grid" style="margin-top:4px;padding:4px 0" id="cards-container">' +
            filtered.map(renderParticipantCard).join('') +
          '</div></section>' +
          '<div class="participants-empty" style="display:none;text-align:center;padding:60px;color:'+P.soft+'"><div style="font-size:44px;margin-bottom:12px">🔍</div><div style="font-size:17px;font-weight:700">No participants found</div></div>' +
        '</div></div>';

      container.querySelectorAll('#stats-bar [data-sector]').forEach(function(btn){
        btn.onclick = function () { setActiveSector(btn.getAttribute('data-sector')); };
      });
      initSteeringCarousel(container);
      bindCardBioFlips(container);
      bindStaffCardFlips(container);
      bindParticipantCardFlips(container);
    } else {
      container.querySelector('#stats-bar').outerHTML = '<div class="stats-bar-wrap" id="stats-bar">'+statsHtml+'</div>';
      cardsContainer = container.querySelector('#cards-container');
      cardsContainer.innerHTML = filtered.map(renderParticipantCard).join('');
      isEmpty = container.querySelector('.participants-empty');
      isEmpty.style.display = filtered.length === 0 ? 'block' : 'none';
    }

    container.querySelectorAll('#stats-bar [data-sector]').forEach(function(btn){
      btn.onclick = function () { setActiveSector(btn.getAttribute('data-sector')); };
    });

    bindSearchInput(container, search, setSearch);
    placeParticipantsSearch(container);

    bindStaffCardFlips(container);
    bindParticipantCardFlips(container);
    initSteeringCarousel(container);
    bindCardBioFlips(container);
    requestAnimationFrame(function () {
      requestAnimationFrame(syncParticipantsLineAnchor);
    });
  }

  var state = { page: 'home', activeSector: 'all', search: '' };
  var searchScrollTimer = null;

  function isMobileViewport() {
    return window.matchMedia('(max-width: 900px)').matches;
  }

  function stickyHeaderOffset(pageId) {
    var nav = document.querySelector('nav.metro-nav');
    var header = document.querySelector('#' + pageId + ' .participants-header-wrap');
    var offset = nav ? nav.getBoundingClientRect().height : 76;
    if (header) offset += header.getBoundingClientRect().height;
    return offset + 28;
  }

  function participantsScrollOffset() {
    return stickyHeaderOffset('participants-page');
  }

  function scrollToParticipantsTarget(el) {
    if (!el) return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var y = el.getBoundingClientRect().top + window.pageYOffset - participantsScrollOffset();
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      });
    });
  }

  function placeParticipantsSearch(container) {
    var page = container || document.getElementById('participants-page');
    if (!page) return;
    var row = page.querySelector('.search-row');
    var inner = page.querySelector('.participants-header-inner');
    var content = page.querySelector('.participants-content');
    var stats = page.querySelector('#stats-bar');
    if (!row || !inner || !content) return;
    if (isMobileViewport()) {
      if (row.parentNode !== content) content.insertBefore(row, content.firstChild);
      return;
    }
    if (stats) inner.insertBefore(row, stats);
    else inner.appendChild(row);
  }

  function bindSearchInput(container, search, setSearch) {
    var input = container.querySelector('#search-input');
    if (!input) return;
    input.value = search;
    input.oninput = function () { setSearch(this.value); };
  }

  function scrollToParticipantCard(card) {
    scrollToParticipantsTarget(card);
  }

  function scrollParticipantsAfterSearch(search, filtered) {
    if (searchScrollTimer) {
      clearTimeout(searchScrollTimer);
      searchScrollTimer = null;
    }
    if (state.page !== 'participants') return;
    var q = (search || '').trim();
    if (!q || !filtered.length) return;

    var firstId = String(filtered[0].id);
    searchScrollTimer = setTimeout(function () {
      searchScrollTimer = null;
      var page = document.getElementById('participants-page');
      if (!page) return;
      var card = page.querySelector('#cards-container .participant-card[data-id="' + firstId + '"]');
      scrollToParticipantCard(card);
    }, 1000);
  }

  function scrollParticipantsAfterSector(sector) {
    if (state.page !== 'participants') return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var page = document.getElementById('participants-page');
        if (!page) return;
        if (sector === 'steering') {
          scrollToParticipantsTarget(page.querySelector('#steering-section-main'));
          return;
        }
        if (sector === 'program-team') {
          scrollToParticipantsTarget(page.querySelector('#program-team-section'));
          return;
        }
        if (sector === 'all') {
          scrollToParticipantsTarget(page.querySelector('#participants-all') || page.querySelector('.all-participants-section'));
          return;
        }
        var cards = page.querySelectorAll('#cards-container .participant-card');
        var card = null;
        for (var i = 0; i < cards.length; i++) {
          if (cards[i].getAttribute('data-sector') === sector) {
            card = cards[i];
            break;
          }
        }
        if (!card) return;
        scrollToParticipantCard(card);
      });
    });
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function updateSiteNavHeight() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var apply = function () {
      var cs = window.getComputedStyle(nav);
      var extra = (parseFloat(cs.marginTop) || 0) + (parseFloat(cs.marginBottom) || 0);
      document.documentElement.style.setProperty('--site-nav-height', (nav.offsetHeight + extra) + 'px');
    };
    apply();
    requestAnimationFrame(apply);
  }

  function ensureProgramFrame(page) {
    var frameId = page === 'useful' ? '#useful-page .program-frame' : '#program-page .program-frame';
    var frame = document.querySelector(frameId);
    if (!frame) return;
    var src = frame.getAttribute('data-src');
    if (src && window.matchMedia('(max-width: 900px)').matches && src.indexOf('mobile=') === -1) {
      src += (src.indexOf('?') >= 0 ? '&' : '?') + 'mobile=1';
    }
    if (src && frame.getAttribute('src') !== src) frame.setAttribute('src', src);
    if (frame.getAttribute('data-line-bound') !== '1') {
      frame.setAttribute('data-line-bound', '1');
      frame.addEventListener('load', function () {
        syncProgramLineAnchor();
        requestAnimationFrame(syncProgramLineAnchor);
        setTimeout(syncProgramLineAnchor, 80);
      });
    }
    if (page === 'program' || page === 'useful') {
      requestAnimationFrame(function () {
        requestAnimationFrame(syncProgramLineAnchor);
      });
    }
  }

  function stationCenterX(btn) {
    var mark = btn && btn.querySelector('.nav-mark');
    var el = mark || btn;
    if (!el) return 0;
    var rect = el.getBoundingClientRect();
    return rect.left + rect.width / 2;
  }

  function syncParticipantsLineAnchor() {
    if (state.page !== 'participants') return;
    var header = document.querySelector('#participants-page .participants-header-wrap');
    var stats = document.querySelector('#participants-page #stats-bar');
    var allMark = stats && stats.querySelector('.sector-btn[data-sector="all"] .nav-mark');
    var btn = document.querySelector('nav .nav-btn[data-page="participants"]');
    if (!header) return;
    if (stats) {
      stats.style.transform = '';
      stats.style.marginLeft = '';
    }
    if (window.matchMedia('(max-width: 900px)').matches || !stats || !allMark || !btn) {
      header.style.setProperty('--part-line-width', '0px');
      return;
    }
    var targetX = stationCenterX(btn);
    var shift = 0;
    var i;
    for (i = 0; i < 3; i++) {
      stats.style.marginLeft = shift ? shift + 'px' : '';
      var markCenter = allMark.getBoundingClientRect().left + allMark.offsetWidth / 2;
      var remaining = targetX - markCenter;
      if (Math.abs(remaining) < 1) break;
      shift = Math.max(0, shift + remaining);
    }
    var headerRect = header.getBoundingClientRect();
    var startX = targetX - headerRect.left;
    var endX = allMark.getBoundingClientRect().left + allMark.offsetWidth / 2 - headerRect.left;
    var lineY = allMark.getBoundingClientRect().top + allMark.offsetHeight / 2 - headerRect.top;
    header.style.setProperty('--part-line-x', startX + 'px');
    header.style.setProperty('--part-line-y', lineY + 'px');
    header.style.setProperty('--part-line-width', Math.max(0, endX - startX) + 'px');
  }

  function paintBranchJoin(opts) {
    var join = document.querySelector('.metro-branch-connect');
    var siteNav = document.querySelector('nav.metro-nav');
    if (!join || !siteNav) return;
    if (window.matchMedia('(max-width: 900px)').matches) {
      join.hidden = true;
      return;
    }
    var dropX = opts.dropX;
    var lineY = opts.lineY;
    var runToX = opts.runToX;
    var clipBottom = opts.clipBottom != null ? opts.clipBottom : lineY;
    var dropTop = siteNav.getBoundingClientRect().bottom - 4;
    var dropH = Math.max(0, Math.min(lineY, clipBottom) - dropTop);
    var runLeft = 0;
    var runW = 0;
    if (opts.allowRun !== false && typeof runToX === 'number' && Math.abs(dropX - runToX) > 6) {
      runLeft = Math.min(dropX, runToX);
      runW = Math.abs(dropX - runToX);
    }
    join.hidden = false;
    join.style.setProperty('--join-color', opts.color);
    join.style.setProperty('--drop-x', dropX + 'px');
    join.style.setProperty('--drop-top', dropTop + 'px');
    join.style.setProperty('--drop-h', dropH + 'px');
    join.style.setProperty('--run-left', runLeft + 'px');
    join.style.setProperty('--run-top', lineY + 'px');
    join.style.setProperty('--run-w', Math.max(0, runW) + 'px');
    join.style.setProperty('--clip-bottom', Math.max(0, clipBottom + 2) + 'px');
  }

  function syncAboutLineAnchor() {
    if (state.page !== 'about') return;
    var join = document.querySelector('.metro-branch-connect');
    if (join) join.hidden = true;
    document.body.classList.remove('about-scrolled');
    var header = document.querySelector('#about-page .participants-header-wrap');
    var stats = document.querySelector('#about-stops-bar');
    var firstMark = stats && stats.querySelector('.sector-btn .nav-mark');
    var btn = document.querySelector('nav .nav-btn[data-page="about"]');
    if (!header) return;
    if (stats) stats.style.transform = '';
    if (window.matchMedia('(max-width: 900px)').matches || !stats || !firstMark || !btn) {
      header.style.setProperty('--part-line-width', '0px');
      return;
    }
    var targetX = stationCenterX(btn);
    var currentX = firstMark.getBoundingClientRect().left + firstMark.offsetWidth / 2;
    var dx = targetX - currentX;
    stats.style.transform = dx ? 'translateX(' + dx + 'px)' : '';
    var headerRect = header.getBoundingClientRect();
    var startX = targetX - headerRect.left;
    var endX = firstMark.getBoundingClientRect().left + firstMark.offsetWidth / 2 - headerRect.left;
    var lineY = firstMark.getBoundingClientRect().top + firstMark.offsetHeight / 2 - headerRect.top;
    header.style.setProperty('--part-line-x', startX + 'px');
    header.style.setProperty('--part-line-y', lineY + 'px');
    header.style.setProperty('--part-line-width', Math.max(0, endX - startX) + 'px');
  }

  function layoutProgramBranch(frame, btn, useful) {
    var win = frame.contentWindow;
    var frameRect = frame.getBoundingClientRect();
    var payload = {
      type: 'forumetro:line-anchor',
      x: stationCenterX(btn) - frameRect.left,
      anchor: useful ? 'useful' : 'day'
    };
    if (!win) return;
    try { win.postMessage(payload, '*'); } catch (e) {}
    try {
      if (typeof win.applyForumetroLineAnchor === 'function') win.applyForumetroLineAnchor(payload);
    } catch (e) {}
  }

  function onProgramJoinMessage(event) {
    if (!event || !event.data || event.data.type !== 'forumetro:line-join') return;
    if (state.page !== 'program' && state.page !== 'useful') return;
    var useful = event.data.anchor === 'useful' || state.page === 'useful';
    var frame = document.querySelector((useful ? '#useful-page' : '#program-page') + ' .program-frame');
    if (!frame) return;
    var frameRect = frame.getBoundingClientRect();
    var dayX = event.data.x;
    var lineY = event.data.y;
    if (!(dayX >= frameRect.left - 2 && dayX <= frameRect.right + 2 && lineY >= frameRect.top - 2 && lineY <= frameRect.bottom + 2)) {
      dayX += frameRect.left;
      lineY += frameRect.top;
    }
    paintBranchJoin({
      color: useful ? '#8F76D6' : '#009BBF',
      dropX: stationCenterX(document.querySelector('nav .nav-btn[data-page="' + (useful ? 'useful' : 'program') + '"]')),
      lineY: frameRect.top,
      clipBottom: frameRect.top,
      allowRun: false
    });
  }

  function syncProgramLineAnchor() {
    if (state.page !== 'program' && state.page !== 'useful') return;
    if (window.matchMedia('(max-width: 900px)').matches) {
      var join = document.querySelector('.metro-branch-connect');
      if (join) join.hidden = true;
      return;
    }
    var isUseful = state.page === 'useful';
    var btn = document.querySelector('nav .nav-btn[data-page="' + (isUseful ? 'useful' : 'program') + '"]');
    var frame = document.querySelector((isUseful ? '#useful-page' : '#program-page') + ' .program-frame');
    if (!btn || !frame) return;
    layoutProgramBranch(frame, btn, isUseful);
    requestAnimationFrame(function () {
      layoutProgramBranch(frame, btn, isUseful);
    });
  }

  function setPage(page) {
    var pageChanged = state.page !== page;
    state.page = page;
    document.querySelectorAll('.nav-btn').forEach(function(b){
      var isCurrent = b.getAttribute('data-page') === page;
      b.classList.toggle('active', isCurrent);
      if (isCurrent) {
        try { b.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' }); } catch (e) {}
      }
    });
    document.getElementById('home-page').classList.toggle('active', page==='home');
    document.getElementById('about-page').classList.toggle('active', page==='about');
    document.getElementById('participants-page').classList.toggle('active', page==='participants');
    document.getElementById('team-page').classList.toggle('active', page==='team');
    document.getElementById('program-page').classList.toggle('active', page==='program');
    document.getElementById('useful-page').classList.toggle('active', page==='useful');
    document.body.classList.toggle('program-view', page==='program' || page==='useful');
    document.body.classList.toggle('program-page', page==='program');
    document.body.classList.toggle('useful-page', page==='useful');
    document.body.classList.toggle('home-page', page==='home');
    document.body.classList.toggle('about-page', page==='about');
    document.body.classList.toggle('participants-page', page==='participants');
    document.body.classList.toggle('about-scrolled', false);
    updateSiteNavHeight();
    if (page !== 'program' && page !== 'useful') {
      var joinIdle = document.querySelector('.metro-branch-connect');
      if (joinIdle) joinIdle.hidden = true;
    }
    if (page === 'home') renderHomePage(document.getElementById('home-page'), setPage);
    else if (page === 'about') {
      renderAboutPage(document.getElementById('about-page'), setPage);
      requestAnimationFrame(function () {
        requestAnimationFrame(syncAboutLineAnchor);
      });
    }
    else if (page === 'participants') {
      renderParticipantsPage(document.getElementById('participants-page'), state.activeSector, state.search, setActiveSector, setSearch);
      requestAnimationFrame(function () {
        requestAnimationFrame(syncParticipantsLineAnchor);
      });
    }
    else if (page === 'team') renderMeetTheTeamPage(document.getElementById('team-page'), setPage);
    else if (page === 'program' || page === 'useful') {
      ensureProgramFrame(page);
      if (page === 'program') {
        document.querySelectorAll('.program-section-bar [data-section]').forEach(function (item) {
          item.classList.toggle('active', item.getAttribute('data-section') === 'overview');
        });
      }
      if (page === 'useful') {
        document.querySelectorAll('.useful-section-bar [data-page]').forEach(function (item) {
          item.classList.toggle('active', item.getAttribute('data-page') === 'prep');
        });
      }
    }
    if (pageChanged) {
      scrollToTop();
      requestAnimationFrame(scrollToTop);
    }
  }

  function setActiveSector(s) {
    state.activeSector = s;
    renderParticipantsPage(document.getElementById('participants-page'), state.activeSector, state.search, setActiveSector, setSearch);
    scrollParticipantsAfterSector(s);
  }

  function setSearch(s) {
    state.search = s;
    var filtered = filterParticipants(state.activeSector, state.search);
    renderParticipantsPage(document.getElementById('participants-page'), state.activeSector, state.search, setActiveSector, setSearch);
    scrollParticipantsAfterSearch(s, filtered);
  }

  document.querySelectorAll('.nav-btn').forEach(function(btn){
    btn.onclick = function () {
      btn.blur();
      setPage(btn.getAttribute('data-page'));
    };
  });

  document.querySelector('#program-page').addEventListener('click', function (event) {
    var btn = event.target.closest('.program-section-bar [data-section]');
    if (!btn) return;
    document.querySelectorAll('.program-section-bar [data-section]').forEach(function (item) {
      item.classList.toggle('active', item === btn);
    });
    var frame = document.querySelector('#program-page .program-frame');
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage({ type: 'forumetro:go-section', section: btn.getAttribute('data-section') }, '*');
    }
  });

  document.querySelector('#useful-page').addEventListener('click', function (event) {
    var btn = event.target.closest('.useful-section-bar [data-page]');
    if (!btn) return;
    document.querySelectorAll('.useful-section-bar [data-page]').forEach(function (item) {
      item.classList.toggle('active', item === btn);
    });
    var frame = document.querySelector('#useful-page .program-frame');
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage({ type: 'forumetro:go-page', page: btn.getAttribute('data-page') }, '*');
    }
  });

  document.querySelector('nav .logo').onclick = function () { setPage('home'); };
  window.addEventListener('message', function (event) {
    if (!event || !event.data) return;
    if (event.data.type === 'forumetro:line-join') {
      onProgramJoinMessage(event);
      return;
    }
    if (event.data.type === 'forumetro:keep-top') {
      window.scrollTo(0, 0);
      return;
    }
    if (event.data.type !== 'forumetro:go-about') return;
    setPage('home');
  });
  window.addEventListener('resize', onNavLayout);
  window.addEventListener('scroll', function () {
    if (state.page === 'about') syncAboutLineAnchor();
  }, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', onNavLayout);
  }
  function onNavLayout() {
    updateSiteNavHeight();
    if (state.page === 'participants') placeParticipantsSearch();
    if (state.page === 'program' || state.page === 'useful') ensureProgramFrame(state.page);
    syncProgramLineAnchor();
    syncAboutLineAnchor();
    syncParticipantsLineAnchor();
    if (state.page !== 'program' && state.page !== 'useful') {
      var join = document.querySelector('.metro-branch-connect');
      if (join) join.hidden = true;
    }
  }
  updateSiteNavHeight();
  setPage(new URLSearchParams(window.location.search).get('page') || 'home');
})();
