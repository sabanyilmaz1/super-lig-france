import { Paging, ResponseApiFoot } from "./api-foot";

export type lastRound = ResponseApiFoot<any>;

export type MatchPreview = {
  headToHead: Fixture[];
  injuries: Injury[];
  predictions: Predictions[];
  lineups: any;
};

export interface LastFixtureData {
  get: string;
  parameters: FixtureParameters;
  errors: any[]; // Si des erreurs spécifiques existent, préciser le type ici
  results: number;
  paging: Paging;
  response: Fixture[];
}

export interface Injury {
  player: {
    id: number;
    name: string;
    photo: string;
    reason: string;
    type: string;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  fixture: {
    id: number;
    timezone: string;
    date: string;
    timestamp: number;
  };
  league: {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    season: number;
  };
}

interface FixtureParameters {
  season: string;
  league: string;
  round: string;
}

interface FixtureDetails {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

interface Periods {
  first: number | null;
  second: number | null;
}

interface Venue {
  id: number | null;
  name: string;
  city: string;
}

interface Status {
  long: string;
  short: string;
  elapsed: number | null;
  extra: number | null;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Teams {
  home: Team;
  away: Team;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

interface Goals {
  home: number | null;
  away: number | null;
}

interface Score {
  halftime: Partial<Goals>;
  fulltime: Partial<Goals>;
  extratime: Partial<Goals>;
  penalty: Partial<Goals>;
}

export interface Fixture {
  fixture: FixtureDetails;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface Predictions {
  predictions: {
    winner: {
      id: number;
      name: string;
      comment: string;
    };
    win_or_draw: boolean;
    under_over: string | null;
    goals: {
      home: string;
      away: string;
    };
    advice: string;
    percent: {
      home: string;
      draw: string;
      away: string;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
  };
  teams: {
    home: TeamDetails;
    away: TeamDetails;
  };
  comparison: {
    form: {
      home: string;
      away: string;
    };
    att: {
      home: string;
      away: string;
    };
    def: {
      home: string;
      away: string;
    };
    poisson_distribution: {
      home: string;
      away: string;
    };
    h2h: {
      home: string;
      away: string;
    };
    goals: {
      home: string;
      away: string;
    };
    total: {
      home: string;
      away: string;
    };
  };
  h2h: H2HMatch[];
}

interface TeamDetails {
  id: number;
  name: string;
  logo: string;
  last_5: {
    played: number;
    form: string;
    att: string;
    def: string;
    goals: {
      for: {
        total: number;
        average: string;
      };
      against: {
        total: number;
        average: string;
      };
    };
  };
  league: {
    form: string;
    fixtures: {
      played: {
        home: number;
        away: number;
        total: number;
      };
      wins: {
        home: number;
        away: number;
        total: number;
      };
      draws: {
        home: number;
        away: number;
        total: number;
      };
      loses: {
        home: number;
        away: number;
        total: number;
      };
    };
    goals: {
      for: GoalsStats;
      against: GoalsStats;
    };
    biggest: {
      streak: {
        wins: number;
        draws: number;
        loses: number;
      };
      wins: {
        home: string | null;
        away: string | null;
      };
      loses: {
        home: string | null;
        away: string | null;
      };
      goals: {
        for: {
          home: number;
          away: number;
        };
        against: {
          home: number;
          away: number;
        };
      };
    };
    clean_sheet: {
      home: number;
      away: number;
      total: number;
    };
    failed_to_score: {
      home: number;
      away: number;
      total: number;
    };
    penalty: {
      scored: {
        total: number;
        percentage: string;
      };
      missed: {
        total: number;
        percentage: string;
      };
      total: number;
    };
    lineups: {
      formation: string;
      played: number;
    }[];
    cards: {
      yellow: TimeStats;
      red: TimeStats;
    };
  };
}

interface GoalsStats {
  total: {
    home: number;
    away: number;
    total: number;
  };
  average: {
    home: string;
    away: string;
    total: string;
  };
  minute: Record<
    string,
    {
      total: number | null;
      percentage: string | null;
    }
  >;
  under_over: {
    [key: string]: {
      over: number;
      under: number;
    };
  };
}

interface TimeStats {
  [key: string]: {
    total: number | null;
    percentage: string | null;
  };
}

interface H2HMatch {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string | null;
      city: string | null;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
      extra: string | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}
