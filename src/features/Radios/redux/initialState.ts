import { State } from './types';

const initialState: State = {
  status: 'idle',
  error: null,
  allRadioStation: [],
  filteredRadioStations: [],
  genres: [],
  countries: [],
};

export { initialState };
