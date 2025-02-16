import type { ParticipantWithMeta } from "~/core/domain/football-api";

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
