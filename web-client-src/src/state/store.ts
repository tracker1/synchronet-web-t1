import { configureStore, ThunkAction, Action, ThunkDispatch } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { routerMiddleware } from './middleware';

const extraArgument = {
  api: "TODO: sbbsApi instance",
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument,
    },
  }).prepend(routerMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void | Promise<void>> = ThunkAction<
  ReturnType,
  AppState,
  typeof extraArgument,
  Action<string>
>;
