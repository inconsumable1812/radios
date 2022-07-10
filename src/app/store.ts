import {
  configureStore,
  combineReducers,
  Action,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { reducer as dataReducer } from 'src/features/Radios';

const makeStore = () =>
  configureStore({
    reducer: {
      features: combineReducers({ data: dataReducer }),
    },
    devTools: true,
  });

type AppStore = ReturnType<typeof makeStore>;

type AppDispatch = AppStore['dispatch'];

type AppState = ReturnType<AppStore['getState']>;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

const wrapper = createWrapper<AppStore>(makeStore);

export type { AppStore, AppDispatch, AppState, AppThunk };

export { wrapper, makeStore };
