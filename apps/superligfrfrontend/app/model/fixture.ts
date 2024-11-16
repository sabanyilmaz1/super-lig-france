import { Paging } from "./foot";

export interface LastFixtureData {
  get: string;
  parameters: FixtureParameters;
  errors: any[]; // Si des erreurs spécifiques existent, préciser le type ici
  results: number;
  paging: Paging;
  response: Fixture[];
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
