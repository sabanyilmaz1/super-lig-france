import { Paging, Team } from "./foot";

type Goals = {
  for: number;
  against: number;
};

type Record = {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
};

export type StandingEntry = {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string | null;
  all: Record;
  home: Record;
  away: Record;
  update: string;
};

export interface Standing {
  get: string;
  parameters: any;
  errors: any[]; // Si des erreurs spécifiques existent, préciser le type ici
  results: number;
  paging: Paging;
  response: {
    league: {
      country: string;
      flag: string;
      id: number;
      logo: string;
      name: string;
      season: number;
      standings: StandingEntry[][]; // Table de rangs pour plusieurs groupes ou phases
    };
  }[];
}
