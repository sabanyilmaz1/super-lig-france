import type { ParticipantWithMeta } from "~/core/domain/football-api";

// commonName={
//   player?.player?.common_name &&
//   player.player.common_name.length > 12
//     ? player?.player_name.length > 12
//       ? player?.player_name.slice(0, 10) + "..."
//       : player?.player_name
//     : player?.player?.common_name || ""
// }

export const getCommonName = (player: Lineup | undefined) => {
  return player?.player?.common_name && player.player.common_name.length > 12
    ? player?.player_name.length > 12
      ? player?.player_name.slice(0, 10) + "..."
      : player?.player_name
    : player?.player?.common_name || "";
};

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

export interface State {
  id: number;
  state: string;
  name: string;
  short_name: string;
  developer_name: string;
}

export interface Score {
  description: string;
  fixture_id: number;
  id: number;
  participant_id: number;
  score: { goals: number; participant: string };
  type_id: number;
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
  scores: Score[] | null;
  state: State | null;
  leg: string;
  details: any | null;
  length: number;
  placeholder: boolean;
  has_odds: boolean;
  has_premium_odds: boolean;
  starting_at_timestamp: number;
  participants: ParticipantWithMeta[];
  round: Round;
}

export interface FixturePreview {
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
  state: State | null;
  leg: string;
  details: any | null;
  length: number;
  placeholder: boolean;
  has_odds: boolean;
  has_premium_odds: boolean;
  starting_at_timestamp: number;
  lineups: Lineup[] | null;
  sidelined: Sidelined[] | null;
  formations: Formation[] | null;
  participants: ParticipantWithMeta[] | null;
}

export interface DetailedPosition {
  id: number;
  name: string;
  code: string;
  developer_name: string;
  model_type: "position";
  stat_group: null;
}

export interface Lineup {
  id: number;
  sport_id: number;
  fixture_id: number;
  player_id: number;
  team_id: number;
  position_id: number;
  formation_field: string | null;
  type_id: 11 | 12;
  formation_position: number | null;
  player_name: string;
  jersey_number: number;
  player: Player | null;
}

export interface Player {
  city_id: number;
  common_name: string;
  country_id: number;
  date_of_birth: string;
  detailed_position_id: number;
  display_name: string;
  firstname: string;
  gender: string;
  height: number;
  id: number;
  image_path: string;
  lastname: string;
  name: string;
  nationality_id: number;
  position_id: number;
  sport_id: number;
  type_id: number;
  weight: number;
}

export interface Sidelined {
  fixture_id: number;
  id: number;
  participant_id: number;
  sideline_id: number;
  sideline: {
    category: "string";
    completed: boolean;
    end_date: string | null;
    game_missed: number;
    id: number;
    player: {
      city: string | null;
      common_name: string;
      country_id: number;
      date_of_birth: string;
      detailed_position_id: number | null;
      display_name: string;
      firstname: string;
      gender: string;
      height: number;
      id: number;
      image_path: string;
      lastname: string;
      name: string;
      nationality_id: number;
      position_id: number;
      sport_id: number;
      type_id: number;
      weight: number;
    };
    player_id: number;
    season_id: string | null;
    start_date: string;
    team_id: number;
    type_id: number;
    team: {
      country_id: number;
      founded: number;
      gender: string;
      id: number;
      image_path: string;
      last_played_at: string;
      name: string;
      placeholder: boolean;
      short_code: string | null;
      sport_id: number;
      type: string;
      venue_id: number;
    };
  };
}

export interface Formation {
  fixture_id: number;
  formation: string;
  id: number;
  location: "home" | "away";
  participant_id: number;
}

export const LINEUP_TYPE = {
  STARTER: 11,
  SUBSTITUTE: 12,
} as const;

export const POSITION = {
  GOALKEEPER: 24,
  DEFENDER: 25,
  MIDFIELDER: 26,
  FORWARD: 27,
} as const;
