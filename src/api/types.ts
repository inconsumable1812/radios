type Country =
  | 'testing'
  | 'local radio'
  | 'russia'
  | 'US'
  | 'germany'
  | 'latvija'
  | 'belorussia';

type Genre =
  | 'pop'
  | 'adult pop'
  | 'power pop'
  | 'dance'
  | 'electro'
  | 'hip-hop'
  | 'r&b soul'
  | 'rock'
  | 'chanson';

type RadioStations = {
  id: number;
  name: string;
  genre: Genre;
  country: Country;
  img: string;
}[];

export type { RadioStations };
