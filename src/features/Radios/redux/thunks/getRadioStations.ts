import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchRadioStations } from 'src/api/fetch/getRadioStations';

const getRadioStations = createAsyncThunk('fetchRadioStations', async () => {
  const result = await fetchRadioStations();

  if (result instanceof globalThis.Error) {
    return Promise.reject(result);
  }

  return result;
});

export { getRadioStations };
