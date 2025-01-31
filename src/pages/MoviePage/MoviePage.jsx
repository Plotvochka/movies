import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/movie/operations.js";
import { setPage, clearItems } from "../../redux/movie/slice.js";
import Movies from "../../components/Movies/Movies.jsx";
import css from "./MoviePage.module.css";
import LoadMore from "../../components/LoadMore/LoadMore.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import AddMovie from "../../components/AddMovie/AddMovie.jsx";
import {
  selectAllMovies,
  selectPage,
  selectPerPage,
  selectFilters,
} from "../../redux/movie/selectors.js";
import { Toaster } from "react-hot-toast";

const MoviePage = () => {
  const items = useSelector(selectAllMovies) || [];
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const searchQuery = useSelector(selectFilters);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      dispatch(clearItems([]));
      return;
    }
    setLoading(false);
    dispatch(fetchMovies({ page, perPage }));
  }, [dispatch, isFirstRender, page, perPage]);

  const handleClick = () => {
    dispatch(setPage());
  };

  const filteredMovies = Array.isArray(items)
    ? items.filter((movie) =>
        movie.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (loading) return <p>Loading...</p>;

  return (
    <main className={css.main}>
      <div>
        <Toaster />
      </div>
      <SearchBar />
      <AddMovie items={items} />
      <div className={css.listWrap}>
        {items.length !== 0 && <Movies items={filteredMovies} />}
        <LoadMore onClick={handleClick} />
      </div>
    </main>
  );
};

export default MoviePage;
