import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { animeApi } from '../services/animeApi';
import titleReducer from './slices/title.slice';
import authReducer from './slices/auth.slice';
import { authApi } from '../services/authApi';

const rootReducer = combineReducers({
  [animeApi.reducerPath]: animeApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  title: titleReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(animeApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;