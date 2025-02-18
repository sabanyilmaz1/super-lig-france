export type Score = {
  id: number;
  fixture_id: number;
  type_id: number;
  participant_id: number;
  score: {
    goals: number;
    participant: "home" | "away";
  };
  description: "1ST_HALF" | "2ND_HALF" | "CURRENT" | "2ND_HALF_ONLY";
};

export type Participant = {
  id: number;
  sport_id: number;
  country_id: number;
  venue_id: number;
  gender: "male" | "female";
  name: string;
  short_code: string | null;
  image_path: string;
  founded: number;
  type: "domestic";
  placeholder: boolean;
  last_played_at: string;
  meta: {
    location: "home" | "away";
    winner: boolean;
    position: number;
  };
};

export type Venue = {
  id: number;
  country_id: number;
  city_id: number;
  name: string;
  address: string;
  zipcode: string | null;
  latitude: string;
  longitude: string;
  capacity: number;
  image_path: string;
  city_name: string;
  surface: string;
  national_team: boolean;
};

export type ResultFixture = {
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
  result_info: string;
  leg: string;
  details: string | null;
  length: number;
  placeholder: boolean;
  has_odds: boolean;
  has_premium_odds: boolean;
  starting_at_timestamp: number;
  participants: Participant[];
  scores: Score[];
  venue: Venue;
};
