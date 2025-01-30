import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import movieSlice from "./movie/slice.js";
import filterReducer from "./filterSlice/filterSlice.js";
import favoritesReducer from "./favoriteSlice/favoriteSlice.js";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    filters: filterReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
