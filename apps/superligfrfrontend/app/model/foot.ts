export interface Paging {
  current: number;
  total: number;
}

export type Team = {
  id: number;
  name: string;
  logo: string;
};

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}
