import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchGenres } from 'src/api/fetch/getGenres';

const getGenres = createAsyncThunk('fetchGenres', async () => {
  const result = await fetchGenres();

  if (result instanceof globalThis.Error) {
    return Promise.reject(result);
  }

  return result;
});

export { getGenres };
