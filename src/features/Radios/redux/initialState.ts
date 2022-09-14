import { State } from './types';

const initialState: State = {
  status: 'idle',
  error: null,
  allRadioStation: [],
  filteredRadioStations: [],
  bestRadioStations: [],
  isShowBestRadio: false,
  genres: [],
  countries: [],
  searchValue: '',
  chosenRadio: null,
  chosenGenre: null,
  chosenCountry: null,
  isPlay: false,
  isPause: false,
  isLoadingRadioStations: false,
  volume: '70',
};

export { initialState };
