type Team = {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
};

export const teams: Team[] = [
  {
    team: {
      id: 549,
      name: "Besiktas",
      code: "BES",
      country: "Turkey",
      founded: 1903,
      national: false,
      logo: "https://media.api-sports.io/football/teams/549.png",
    },
    venue: {
      id: 20423,
      name: "Tüpraş Stadyumu",
      address: "Dolmabahçe Gazhane Caddesi, Beşiktaş",
      city: "İstanbul",
      capacity: 43500,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/20423.png",
    },
  },
  {
    team: {
      id: 564,
      name: "Istanbul Basaksehir",
      code: "IST",
      country: "Turkey",
      founded: 1990,
      national: false,
      logo: "https://media.api-sports.io/football/teams/564.png",
    },
    venue: {
      id: 1584,
      name: "Başakşehir Fatih Terim Stadyumu",
      address: "Yunus Emre Caddesi, Başakşehir",
      city: "İstanbul",
      capacity: 17319,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/1584.png",
    },
  },
  {
    team: {
      id: 607,
      name: "Konyaspor",
      code: "KON",
      country: "Turkey",
      founded: 1981,
      national: false,
      logo: "https://media.api-sports.io/football/teams/607.png",
    },
    venue: {
      id: 1587,
      name: "Konya Büyükşehir Belediye Stadyumu",
      address: "Sille Parsana Mh., Kaletaş Caddesi, Selçuklu",
      city: "Konya",
      capacity: 42276,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/1587.png",
    },
  },
  {
    team: {
      id: 611,
      name: "Fenerbahce",
      code: "FEN",
      country: "Turkey",
      founded: 1907,
      national: false,
      logo: "https://media.api-sports.io/football/teams/611.png",
    },
    venue: {
      id: 1581,
      name: "Ülker Stadyumu Fenerbahçe Şükrü Saracoğlu Spor Kompleksi",
      address: "Recep Peker Caddesi, Kadıköy",
      city: "İstanbul",
      capacity: 53586,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/1581.png",
    },
  },
  {
    team: {
      id: 645,
      name: "Galatasaray",
      code: "GAL",
      country: "Turkey",
      founded: 1905,
      national: false,
      logo: "https://media.api-sports.io/football/teams/645.png",
    },
    venue: {
      id: 19941,
      name: "Rams Global Stadium",
      address: "İstanbul Çevre Yolu, Aslantepe",
      city: "İstanbul",
      capacity: 52695,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/19941.png",
    },
  },
  {
    team: {
      id: 994,
      name: "Goztepe",
      code: "GOZ",
      country: "Turkey",
      founded: 1925,
      national: false,
      logo: "https://media.api-sports.io/football/teams/994.png",
    },
    venue: {
      id: 1583,
      name: "Göztepe Gürsel Aksel Stadı",
      address: "Mehmet Ali Akman, 20/3. Sk. No:28, Konak",
      city: "İzmir",
      capacity: 30035,
      surface: "artificial turf",
      image: "https://media.api-sports.io/football/venues/1583.png",
    },
  },
  {
    team: {
      id: 996,
      name: "Alanyaspor",
      code: "ALA",
      country: "Turkey",
      founded: 1948,
      national: false,
      logo: "https://media.api-sports.io/football/teams/996.png",
    },
    venue: {
      id: 21379,
      name: "GAIN Park Stadium",
      address: "Sarıkadıoğlu Caddesi, Oba, Obaköy",
      city: "Alanya",
      capacity: 15000,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/21379.png",
    },
  },
  {
    team: {
      id: 998,
      name: "Trabzonspor",
      code: "TRA",
      country: "Turkey",
      founded: 1967,
      national: false,
      logo: "https://media.api-sports.io/football/teams/998.png",
    },
    venue: {
      id: 20189,
      name: "Papara Park",
      address: "Trabzon Giresun Yolu, Akyaz",
      city: "Trabzon",
      capacity: 41513,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/20189.png",
    },
  },
  {
    team: {
      id: 1001,
      name: "Kayserispor",
      code: "KAY",
      country: "Turkey",
      founded: 1966,
      national: false,
      logo: "https://media.api-sports.io/football/teams/1001.png",
    },
    venue: {
      id: 19613,
      name: "RHG Enertürk Enerji Stadyumu",
      address: "İle Fırat Caddesi",
      city: "Kayseri",
      capacity: 40458,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/19613.png",
    },
  },
  {
    team: {
      id: 1002,
      name: "Sivasspor",
      code: "SIV",
      country: "Turkey",
      founded: 1967,
      national: false,
      logo: "https://media.api-sports.io/football/teams/1002.png",
    },
    venue: {
      id: 20425,
      name: "BG Group 4 Eylül Stadyumu",
      address: "Muhsin Yazıcıoğlu Bulvarı",
      city: "Sivas",
      capacity: 27532,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/20425.png",
    },
  },
  {
    team: {
      id: 1004,
      name: "Kasimpasa",
      code: "KAS",
      country: "Turkey",
      founded: 1921,
      national: false,
      logo: "https://media.api-sports.io/football/teams/1004.png",
    },
    venue: {
      id: 1585,
      name: "Recep Tayyip Erdoğan Stadyumu",
      address: "Tepebaşı Caddesi, Kasımpaşa, Beyoğlu",
      city: "İstanbul",
      capacity: 14234,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/1585.png",
    },
  },
  {
    team: {
      id: 1005,
      name: "Antalyaspor",
      code: "ANT",
      country: "Turkey",
      founded: 1966,
      national: false,
      logo: "https://media.api-sports.io/football/teams/1005.png",
    },
    venue: {
      id: 19220,
      name: "Corendon Airlines Park",
      address: "100. Yıl Bulvarı",
      city: "Antalya",
      capacity: 33032,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/19220.png",
    },
  },
  {
    team: {
      id: 1007,
      name: "Rizespor",
      code: "RIZ",
      country: "Turkey",
      founded: 1953,
      national: false,
      logo: "https://media.api-sports.io/football/teams/1007.png",
    },
    venue: {
      id: 1580,
      name: "Çaykur Didi Stadyumu",
      address: "Karadeniz Sahli Yolu Yanyolu",
      city: "Rize",
      capacity: 15558,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/1580.png",
    },
  },
  {
    team: {
      id: 3563,
      name: "Adana Demirspor",
      code: "ADA",
      country: "Turkey",
      founded: 1941,
      national: false,
      logo: "https://media.api-sports.io/football/teams/3563.png",
    },
    venue: {
      id: 11924,
      name: "Yeni Adana Stadyumu",
      address: "Çarkıpare, Sarıçam",
      city: "Adana",
      capacity: 33543,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/11924.png",
    },
  },
  {
    team: {
      id: 3573,
      name: "Gazişehir Gaziantep",
      code: "GAZ",
      country: "Turkey",
      founded: 1988,
      national: false,
      logo: "https://media.api-sports.io/football/teams/3573.png",
    },
    venue: {
      id: 20118,
      name: "Kalyon Stadyumu",
      address: "Yukarıbeylerbeyi Mah. 15 Nolu Sok., Şehitkamil",
      city: "Gaziantep",
      capacity: 35558,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/20118.png",
    },
  },
  {
    team: {
      id: 3575,
      name: "Hatayspor",
      code: "HAT",
      country: "Turkey",
      founded: 1967,
      national: false,
      logo: "https://media.api-sports.io/football/teams/3575.png",
    },
    venue: {
      id: 8392,
      name: "Mersin Stadyumu",
      address: "Haraparası, Süreyya Halefoğlu Cd. No:64",
      city: "Mersin",
      capacity: 25534,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/8392.png",
    },
  },
  {
    team: {
      id: 3583,
      name: "BB Bodrumspor",
      code: "BOD",
      country: "Turkey",
      founded: 1931,
      national: false,
      logo: "https://media.api-sports.io/football/teams/3583.png",
    },
    venue: {
      id: 2385,
      name: "Bodrum İlçe St,adı",
      address: "Marsmabedi Caddesi",
      city: "Bodrum",
      capacity: 3000,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/2385.png",
    },
  },
  {
    team: {
      id: 3588,
      name: "Eyüpspor",
      code: "EYU",
      country: "Turkey",
      founded: 1919,
      national: false,
      logo: "https://media.api-sports.io/football/teams/3588.png",
    },
    venue: {
      id: 2390,
      name: "Eyüp Stadı",
      address: "Hz. Halid Bulvarı",
      city: "İstanbul",
      capacity: 2367,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/2390.png",
    },
  },
  {
    team: {
      id: 3603,
      name: "Samsunspor",
      code: "SAM",
      country: "Turkey",
      founded: 1965,
      national: false,
      logo: "https://media.api-sports.io/football/teams/3603.png",
    },
    venue: {
      id: 11925,
      name: "Samsun Yeni 19 Mayıs Stadyumu",
      address: "Sanayi Mahallesi, Tekkeköy",
      city: "Samsun",
      capacity: 34658,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/11925.png",
    },
  },
];
