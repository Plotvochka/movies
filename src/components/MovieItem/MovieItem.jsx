import css from "./MovieItem.module.css";
import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const MovieItem = (movie) => {
  return (
    <Link to={`/movie/${movie.list._id}`}>
      <div className={css.container}>
        <div className={css.infoWrap}>
          <img src={movie.list.image} alt="Poster film" className={css.image} />
          <p className={css.title}>{movie.list.title}</p>
          <div className={css.info}>
            <div className={css.ratingWrap}>
              <CiStar size={30} />
              <p className={css.rating}>{movie.list.rating}</p>
            </div>
            <p className={css.release}>{movie.list.releaseDate} year</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movie: PropTypes.object,
};
