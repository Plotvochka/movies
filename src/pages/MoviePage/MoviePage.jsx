import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/movie/operations.js";
import { setPage, clearItems } from "../../redux/movie/slice.js";
import Movie from "../../components/Movie/Movie.jsx";
import css from "./MoviePage.module.css";
import LoadMore from "../../components/LoadMore/LoadMore.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import {
  selectAllMovies,
  selectPage,
  selectPerPage,
  selectFilters,
} from "../../redux/movie/selectors.js";

const MoviesList = () => {
  const items = useSelector(selectAllMovies);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const searchQuery = useSelector(selectFilters);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      dispatch(clearItems([]));
      return;
    }
    dispatch(fetchMovies({ page, perPage }));
  }, [dispatch, isFirstRender, page, perPage]);

  const handleClick = () => {
    dispatch(setPage());
  };

  const filteredMovies = items.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery)
  );

  return (
    <main className={css.main}>
      <SearchBar />
      <div className={css.listWrap}>
        {items.length !== 0 && <Movie items={filteredMovies} />}
        <LoadMore onClick={handleClick} />
      </div>
    </main>
  );
};

export default MoviesList;
