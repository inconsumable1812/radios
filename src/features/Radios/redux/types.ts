import {
  Country,
  CountryNames,
  Genre,
  GenreNames,
  RadioStation,
} from 'src/api';
import { RequestStatus } from 'src/helpers/redux';

type State = {
  status: RequestStatus;
  error: string | null;
  allRadioStation: RadioStation[];
  filteredRadioStations: RadioStation[];
  genres: Genre[];
  countries: Country[];
  searchValue: string;
  currentRadioPlay: RadioStation | null;
  isPlay: boolean;
  chosenGenre: GenreNames | null;
  chosenCountry: CountryNames | null;
  isLoadingRadioStations: boolean;
  volume: string;
};

export type { State };
