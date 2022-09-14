import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaults } from 'lodash';

import { initialState } from './initialState';
import { selectData } from './selectors';
import { getCountries } from './thunks/getCountries';
import { getGenres } from './thunks/getGenres';
import { getRadioStations } from './thunks/getRadioStations';
import { State } from './types';
import { filterRadio } from './utils/filterRadio';

const slice = createSlice({
  name: 'Data',
  initialState,
  reducers: {
    changeFilteredStations(state, action) {
      state.filteredRadioStations = action.payload;
    },
    changeBestRadioStations(state, action) {
      state.bestRadioStations = action.payload;
    },
    changeIsShowBestRadio(state, action) {
      state.isShowBestRadio = action.payload;
    },
    changeSearchValue(state, action) {
      state.searchValue = action.payload;

      state.filteredRadioStations = filterRadio({
        allRadioStation: state.allRadioStation,
        chosenCountry: state.chosenCountry,
        chosenGenre: state.chosenGenre,
        searchValue: state.searchValue,
        isShowBestRadio: state.isShowBestRadio,
        bestRadioStations: state.bestRadioStations,
      });
    },
    choseCurrentRadio(state, action) {
      state.chosenRadio = action.payload;
    },
    changeIsPlay(state, action) {
      state.isPlay = action.payload;
    },
    changeIsPause(state, action) {
      state.isPause = action.payload;
    },
    changeIsLoadingRadioStation(
      state,
      action: PayloadAction<State['isLoadingRadioStations']>
    ) {
      state.isLoadingRadioStations = action.payload;
    },
    choseGenre(state, action) {
      state.chosenGenre = action.payload;

      state.filteredRadioStations = filterRadio({
        allRadioStation: state.allRadioStation,
        chosenCountry: state.chosenCountry,
        chosenGenre: state.chosenGenre,
        searchValue: state.searchValue,
        isShowBestRadio: state.isShowBestRadio,
        bestRadioStations: state.bestRadioStations,
      });
    },
    choseCountry(state, action) {
      state.chosenCountry = action.payload;

      state.filteredRadioStations = filterRadio({
        allRadioStation: state.allRadioStation,
        chosenCountry: state.chosenCountry,
        chosenGenre: state.chosenGenre,
        searchValue: state.searchValue,
        isShowBestRadio: state.isShowBestRadio,
        bestRadioStations: state.bestRadioStations,
      });
    },
    changeVolume(state, action) {
      state.volume = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRadioStations.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getRadioStations.fulfilled, (state, action) => {
        state.status = 'fulfilled';

        state.allRadioStation = defaults(
          action.payload,
          initialState.allRadioStation
        );
        state.filteredRadioStations = defaults(
          action.payload,
          initialState.filteredRadioStations
        );
      })
      .addCase(getRadioStations.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      })
      .addCase(getGenres.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.status = 'fulfilled';

        state.genres = defaults(action.payload, initialState.genres);
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      })
      .addCase(getCountries.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = 'fulfilled';

        state.countries = defaults(action.payload, initialState.countries);
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      });
  },
});

const {
  changeFilteredStations,
  changeSearchValue,
  choseCurrentRadio,
  choseGenre,
  choseCountry,
  changeIsPlay,
  changeIsLoadingRadioStation,
  changeVolume,
  changeBestRadioStations,
  changeIsShowBestRadio,
  changeIsPause,
} = slice.actions;

const { reducer } = slice;

export {
  reducer,
  selectData,
  changeFilteredStations,
  getRadioStations,
  getGenres,
  getCountries,
  changeSearchValue,
  choseCurrentRadio,
  changeIsPlay,
  choseGenre,
  choseCountry,
  changeIsLoadingRadioStation,
  changeVolume,
  changeBestRadioStations,
  changeIsShowBestRadio,
  changeIsPause,
};
