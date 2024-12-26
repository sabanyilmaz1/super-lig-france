export interface Prediction {
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
    flag: string;
    season: number;
  };
  teams: {
    home: TeamData;
    away: TeamData;
  };
  comparison: {
    form: ComparisonData;
    att: ComparisonData;
    def: ComparisonData;
    poisson_distribution: ComparisonData;
    h2h: ComparisonData;
    goals: ComparisonData;
    total: ComparisonData;
  };
  h2h: Array<any>;
}

interface TeamData {
  id: number;
  name: string;
  logo: string;
  last_5: {
    played: number;
    form: string;
    att: string;
    def: string;
    goals: {
      for: GoalStats;
      against: GoalStats;
    };
  };
  league: {
    form: string;
    fixtures: {
      played: FixtureStats;
      wins: FixtureStats;
      draws: FixtureStats;
      loses: FixtureStats;
    };
    goals: {
      for: DetailedGoalStats;
      against: DetailedGoalStats;
    };
    biggest: BiggestStats;
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
    penalty: PenaltyStats;
    lineups: Lineup[];
    cards: CardStats;
  };
}

interface ComparisonData {
  home: string;
  away: string;
}

interface GoalStats {
  total: number;
  average: string;
}

interface DetailedGoalStats {
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
  minute: {
    [key: string]: {
      total: number | null;
      percentage: string | null;
    };
  };
  under_over: {
    [key: string]: {
      over: number;
      under: number;
    };
  };
}

interface FixtureStats {
  home: number;
  away: number;
  total: number;
}

interface BiggestStats {
  streak: {
    wins: number;
    draws: number;
    loses: number;
  };
  wins: {
    home: string;
    away: string;
  };
  loses: {
    home: string;
    away: string;
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
}

interface PenaltyStats {
  scored: {
    total: number;
    percentage: string;
  };
  missed: {
    total: number;
    percentage: string;
  };
  total: number;
}

interface Lineup {
  formation: string;
  played: number;
}

interface CardStats {
  yellow: {
    [key: string]: {
      total: number | null;
      percentage: string | null;
    };
  };
  red: {
    [key: string]: {
      total: number | null;
      percentage: string | null;
    };
  };
}
