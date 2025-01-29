import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || {};
};

const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFavorites(),
  reducers: {
    toggleFavorite: (state, action) => {
      const movieId = action.payload;
      state[movieId] = !state[movieId];
      saveFavorites(state);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
