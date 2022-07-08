type Country =
  | 'Testing'
  | 'Local Radio'
  | 'Russia'
  | 'United States'
  | 'Germany'
  | 'Latvija'
  | 'Belorussia';

type Genre =
  | 'Pop'
  | 'Adult Pop'
  | 'Power Pop'
  | 'Dance'
  | 'Electro'
  | 'Hip-Hop'
  | 'r&b soul'
  | 'Rock'
  | 'Chanson';

type RadioStations = {
  id: number;
  name: string;
  genre: Genre;
  country: Country;
  img: string;
}[];

type Genres = {
  id: number;
  name: Genre;
}[];

type Countries = {
  id: number;
  name: Country;
  img?: string;
}[];

export type { RadioStations, Genres, Countries };
