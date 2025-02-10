export interface StandingType {
  id: number;
  name: string;
  code: string;
  developer_name: string;
  model_type: string;
  stat_group: string | null;
}

export enum TypeDeveloperName {
  HOME_POINTS = "HOME_POINTS",
  OVERALL_WINS = "OVERALL_WINS",
  OVERALL_MATCHES = "OVERALL_MATCHES",
  OVERALL_DRAWS = "OVERALL_DRAWS",
  HOME_SCORED = "HOME_SCORED",
  HOME_CONCEDED = "HOME_CONCEDED",
  AWAY_MATCHES = "AWAY_MATCHES",
  AWAY_WINS = "AWAY_WINS",
  AWAY_DRAWS = "AWAY_DRAWS",
  OVERALL_CONCEDED = "OVERALL_CONCEDED",
  OVERALL_LOST = "OVERALL_LOST",
  AWAY_SCORED = "AWAY_SCORED",
  AWAY_LOST = "AWAY_LOST",
  AWAY_POINTS = "AWAY_POINTS",
  OVERALL_GOAL_DIFFERENCE = "OVERALL_GOAL_DIFFERENCE",
  HOME_WINS = "HOME_WINS",
  AWAY_CONCEDED = "AWAY_CONCEDED",
  HOME_MATCHES = "HOME_MATCHES",
  HOME_DRAWS = "HOME_DRAWS",
  HOME_LOST = "HOME_LOST",
  TOTAL_POINTS = "TOTAL_POINTS",
  OVERALL_SCORED = "OVERALL_SCORED",
}

export interface StandingDetail {
  id: number;
  standing_type: string;
  standing_id: number;
  type_id: number;
  value: number;
  type: StandingType;
}

export interface Participant {
  id: number;
  sport_id: number;
  country_id: number;
  venue_id: number;
  gender: string;
  name: string;
  short_code: string;
  image_path: string;
  founded: number;
  type: string;
  placeholder: boolean;
  last_played_at: string;
}

export interface Standing {
  id: number;
  sport_id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  group_id: number | null;
  round_id: number;
  participant_id: number;
  standing_rule_id: number;
  position: number;
  points: number;
  result: string;
  participant: Participant;
  details: StandingDetail[];
}
