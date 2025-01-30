import css from "./Movies.module.css";
import PropTypes from "prop-types";
import MovieList from "../MovieList/MovieList";

const Movies = ({ items }) => {
  return (
    <ul className={css.list}>
      <MovieList items={items} />
    </ul>
  );
};
export default Movies;

Movies.propTypes = {
  items: PropTypes.array,
};
