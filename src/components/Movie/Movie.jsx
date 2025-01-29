import css from "./Movie.module.css";
import PropTypes from "prop-types";
import MovieList from "../MovieList/MovieList";

const Movie = ({ list }) => {
  return (
    <ul className={css.list}>
      <MovieList list={list} />
    </ul>
  );
};
export default Movie;

Movie.propTypes = {
  list: PropTypes.array,
};
