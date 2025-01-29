import css from "./Movie.module.css";
import PropTypes from "prop-types";
import MovieList from "../MovieList/MovieList";

const Movie = ({ items }) => {
  return (
    <ul className={css.list}>
      <MovieList items={items} />
    </ul>
  );
};
export default Movie;

Movie.propTypes = {
  items: PropTypes.array,
};
