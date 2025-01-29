import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchMovies,
  fetchMovie,
  addMovie,
  deleteMovie,
  editMovie,
} from "./operations.js";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    items: [],
    total: 0,
    page: 1,
    perPage: 10,
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
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(addMovie.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.loading = false;
      })
      .addCase(editMovie.fulfilled, (state, { payload }) => {
        state.items = state.items.map((item) =>
          item.id === payload.id ? payload : item
        );
        state.loading = false;
      })
      .addCase(deleteMovie.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
        state.loading = false;
      })

      .addMatcher(
        isAnyOf(
          fetchMovies.pending,
          fetchMovie.pending,
          addMovie.pending,
          editMovie.pending,
          deleteMovie.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchMovies.rejected,
          fetchMovie.rejected,
          addMovie.rejected,
          editMovie.rejected,
          deleteMovie.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { clearItems, setPage } = movieSlice.actions;
export default movieSlice.reducer;
