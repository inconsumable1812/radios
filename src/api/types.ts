type CountryNames =
  | 'Testing'
  | 'Local Radio'
  | 'Russia'
  | 'United States'
  | 'Germany'
  | 'Latvija'
  | 'Belorussia';

type GenreNames =
  | 'Pop'
  | 'Adult Pop'
  | 'Power Pop'
  | 'Dance'
  | 'Electro'
  | 'Hip-Hop'
  | 'r&b soul'
  | 'Rock'
  | 'Chanson';

type RadioStation = {
  id: number;
  name: string;
  genre: GenreNames;
  country: CountryNames;
  img: string;
  src: string;
};

type Genre = {
  id: number;
  name: GenreNames;
};

type Country = {
  id: number;
  name: CountryNames;
  img?: string;
};

export type { RadioStation, Genre, Country, GenreNames, CountryNames };
