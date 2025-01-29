import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "../movie/slice.js";
import { fetchMovies } from "../movie/operations.js";

export const fetchMoviess = (filters, page) => async (dispatch) => {
  dispatch(fetchMoviesStart());
  try {
    const response = await fetchMovies(filters, page);
    dispatch(fetchMoviesSuccess(response));
  } catch (error) {
    dispatch(fetchMoviesError(error.message));
  }
};
