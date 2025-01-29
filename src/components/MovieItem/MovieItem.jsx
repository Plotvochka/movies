import css from "./MovieItem.module.css";
import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon.jsx";

const MovieItem = (movie) => {
  return (
    <div className={css.container}>
      <Link to={`/movie/${movie.list._id}`}>
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
      </Link>
      <FavoriteIcon movie={movie} />
    </div>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movie: PropTypes.object,
};
