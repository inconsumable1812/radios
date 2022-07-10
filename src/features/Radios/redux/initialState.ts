import { State } from './types';

const initialState: State = {
  status: 'idle',
  error: null,
  allRadioStation: [],
  filteredRadioStations: [],
  genres: [],
  countries: [],
  currentRadioPlay: null,
  searchValue: '',
  isPlay: false,
  isLoadingRadioStations: false,
  chosenGenre: null,
  chosenCountry: null,
  volume: '60',
};

export { initialState };
