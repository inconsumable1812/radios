import { createSlice } from '@reduxjs/toolkit';
import { defaults } from 'lodash';

import { initialState } from './initialState';
import { selectData } from './selectors';
import { getCountries } from './thunks/getCountries';
import { getGenres } from './thunks/getGenres';
import { getRadioStations } from './thunks/getRadioStations';

const slice = createSlice({
  name: 'Data',
  initialState,
  reducers: {
    changeFilteredStations(state, action) {
      state.filteredRadioStations = action.payload;
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

const { changeFilteredStations } = slice.actions;

const { reducer } = slice;

export {
  reducer,
  selectData,
  changeFilteredStations,
  getRadioStations,
  getGenres,
  getCountries,
};
