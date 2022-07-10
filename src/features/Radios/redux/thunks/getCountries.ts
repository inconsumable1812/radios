import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCountries } from 'src/api/fetch/getCountries';

const getCountries = createAsyncThunk('fetchCountries', async () => {
  const result = await fetchCountries();

  if (result instanceof globalThis.Error) {
    return Promise.reject(result);
  }

  return result;
});

export { getCountries };
