import css from "./MovieDetailPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../redux/movie/operations.js";
import { selectMovie } from "../../redux/movie/selectors.js";
import MovieDetail from "../../components/MovieDetail/MovieDetail.jsx";
import EditMovie from "../../components/EditMovie/EditMovie.jsx";
import { Toaster } from "react-hot-toast";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(id)).finally(() => setLoading(false));
  }, [id, dispatch]);

  const movie = useSelector(selectMovie);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className={css.detailContainer}>
        <MovieDetail movie={movie} />
        <EditMovie movie={movie} />
      </div>
    </>
  );
};

export default MovieDetailPage;
