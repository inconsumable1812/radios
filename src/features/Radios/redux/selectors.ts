import type { AppState } from 'src/app/store';

const selectData = (state: AppState) => state.features.data;

export { selectData };
