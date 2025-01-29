import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  genre: "",
  releaseDate: "",
  director: "",
  actors: "",
  isFavourite: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetFilters: (state) => {
      state.title = "";
      state.genre = "";
      state.year = "";
      state.director = "";
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
