import { League, Paging, Team } from "./foot";

export interface TopScorers {
  get: string;
  parameters: any;
  errors: any[]; // Si des erreurs spécifiques existent, préciser le type ici
  results: number;
  paging: Paging;
  response: {
    player: {
      age: 34;
      birth: {
        date: string;
        place: string;
        country: string;
      };
      firstname: string;
      height: string;
      id: number;
      injured: boolean;
      lastname: string;
      name: string;
      nationality: string;
      photo: string;
      weight: string;
    };
    statistics: {
      team: Team;
      league: League;
      games: {
        appearences: number;
        lineups: number;
        minutes: number;
        number: null;
        position: string;
        rating: string;
        captain: false;
      };
      substitutes: {
        in: number;
        out: number;
        bench: number;
      };
      shots: {
        total: number;
        on: number;
      };
      goals: {
        total: number;
        conceded: number;
        assists: number;
        saves: null;
      };
      passes: {
        total: number;
        key: number;
        accuracy: null;
      };
      tackles: {
        total: number;
        blocks: null;
        interceptions: null;
      };
      duels: {
        total: number;
        won: number;
      };
      dribbles: {
        attempts: number;
        success: number;
        past: null;
      };
      fouls: {
        drawn: number;
        committed: number;
      };
      cards: {
        yellow: number;
        yellowred: number;
        red: number;
      };
      penalty: {
        won: null;
        commited: null;
        scored: number;
        missed: number;
        saved: null;
      };
    }[];
  }[];
}
