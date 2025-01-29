export const selectAllMovies = (state) => state.movies.items;

export const selectPage = (state) => state.movies.page;

export const selectPerPage = (state) => state.movies.perPage;

export const selectTotal = (state) => state.movies.total;

export const selectLoading = (state) => state.movies.isLoading;
