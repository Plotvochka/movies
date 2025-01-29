import PropTypes from "prop-types";
import MovieItem from "../MovieItem/MovieItem.jsx";
import css from "./MovieList.module.css";

const MovieList = ({ list }) => {
  return list.map((movie) => (
    <li key={movie._id} className={css.item}>
      <MovieItem list={movie} />
    </li>
  ));
};

export default MovieList;

MovieList.propTypes = {
  list: PropTypes.array,
};
