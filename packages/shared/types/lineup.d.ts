interface TeamColors {
  primary: string;
  number: string;
  border: string;
}

interface PlayerColors {
  player: TeamColors;
  goalkeeper: TeamColors;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  colors: PlayerColors;
}

interface Player {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string | null;
}

interface LineupPlayer {
  player: Player;
}

interface Coach {
  id: number;
  name: string;
  photo: string;
}

export interface Lineups {
  team: Team;
  formation: string;
  startXI: LineupPlayer[];
  substitutes: LineupPlayer[];
  coach: Coach;
}
