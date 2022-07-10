import { Country, Genre, RadioStation } from 'src/api';
import { RequestStatus } from 'src/helpers/redux';

type State = {
  status: RequestStatus;
  error: string | null;
  allRadioStation: RadioStation[];
  filteredRadioStations: RadioStation[];
  genres: Genre[];
  countries: Country[];
};

export type { State };
