import css from "./MovieDetail.module.css";
import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";

const MovieDetail = ({ movie }) => {
  return (
    <div className={css.detailWrap}>
      <img src={movie.image} alt={movie.title} className={css.detailImg} />
      <p className={css.detailInfo}>{movie.title} </p>
      <p className={css.detailInfo}>{movie.description}</p>
      <p className={css.detailInfo}>Director: {movie.director}</p>
      <p className={css.detailInfo}>Genre: {movie.genre}</p>
      <div className={css.ratingWrap}>
        <CiStar size={30} />
        <p className={css.detailInfo}>{movie.rating}</p>
      </div>
      <p className={css.detailInfo}>Release date: {movie.releaseDate}</p>
      <p className={css.detailInfo}>Actors: {movie.actors}</p>
    </div>
  );
};
export default MovieDetail;

MovieDetail.propTypes = {
  movie: PropTypes.object,
};
