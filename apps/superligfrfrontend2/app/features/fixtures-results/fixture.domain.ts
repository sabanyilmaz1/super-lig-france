export interface Participant {
  id: number;
  sport_id: number;
  country_id: number;
  venue_id: number;
  gender: string;
  name: string;
  short_code: string | null;
  image_path: string;
  founded: number;
  type: string;
  placeholder: boolean;
  last_played_at: string;
  meta: {
    location: "home" | "away";
    winner: boolean | null;
    position: number;
  };
}

export interface Round {
  id: number;
  sport_id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  name: string;
  finished: boolean;
  is_current: boolean;
  starting_at: string;
  ending_at: string;
  games_in_current_week: boolean;
}

export interface Fixture {
  id: number;
  sport_id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  group_id: number | null;
  aggregate_id: number | null;
  round_id: number;
  state_id: number;
  venue_id: number;
  name: string;
  starting_at: string;
  result_info: any | null;
  leg: string;
  details: any | null;
  length: number;
  placeholder: boolean;
  has_odds: boolean;
  has_premium_odds: boolean;
  starting_at_timestamp: number;
  participants: Participant[];
  round: Round;
}
