import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviess } from "../../redux/movie/selectors.js";
import { setPage } from "../../redux/movie/slice.js";
import Movie from "../../components/Movie/Movie.jsx";
import css from "./MoviePage.module.css";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { list, status, currentPage, totalPages } = useSelector(
    (state) => state.movies
  );
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchMoviess(filters, currentPage));
  }, [filters, currentPage, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error loading movies</p>;

  return (
    <main className={css.main}>
      <Movie list={list}></Movie>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </main>
  );
};

export default MoviesList;
