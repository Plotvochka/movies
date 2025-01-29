import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    status: "idle",
    error: null,
    currentPage: 1,
    totalPages: 0,
  },
  reducers: {
    fetchMoviesStart: (state) => {
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, action) => {
      state.status = "success";
      state.list = action.payload.movie;
      state.totalPages = action.payload.totalPages;
    },
    fetchMoviesError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesError,
  setPage,
} = moviesSlice.actions;

export default moviesSlice.reducer;
