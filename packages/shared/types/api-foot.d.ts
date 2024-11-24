export type ResponseApiFoot<T> = {
  get: string;
  parameters: Parameters;
  errors: Array<string>;
  results: number;
  paging: Paging;
  response: Array<T>;
};

type Parameters = {
  league: string;
  season: string;
  current?: string;
  round?: string;
};

export type Paging = {
  current: number;
  total: number;
};
