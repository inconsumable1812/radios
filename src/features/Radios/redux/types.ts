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
  bestRadioStations: RadioStation[];
  isShowBestRadio: boolean;
  genres: Genre[];
  countries: Country[];
  searchValue: string;
  chosenRadio: RadioStation | null;
  chosenGenre: GenreNames | null;
  chosenCountry: CountryNames | null;
  isPlay: boolean;
  isLoadingRadioStations: boolean;
  volume: string;
};

export type { State };
