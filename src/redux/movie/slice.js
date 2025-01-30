import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchMovie, fetchMovies } from "./operations.js";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    total: 0,
    page: 1,
    perPage: 4,
    movie: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearItems(state) {
      state.items = [];
      state.total = 0;
      state.page = 1;
    },

    setPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...payload.movie];
        state.total = payload.total;
      })

      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addMatcher(isAnyOf(fetchMovies.pending, fetchMovie.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchMovies.rejected, fetchMovie.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setPage, clearItems } = moviesSlice.actions;

export default moviesSlice.reducer;
