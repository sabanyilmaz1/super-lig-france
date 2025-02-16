export type Gender = "male" | "female";

export interface Participant {
  id: number;
  sport_id: number;
  country_id: number;
  venue_id: number;
  gender: Gender;
  name: string;
  short_code: string;
  image_path: string;
  founded: number;
  type: string;
  placeholder: boolean;
  last_played_at: string;
}

export interface ParticipantWithMeta {
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
