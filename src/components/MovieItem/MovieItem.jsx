import css from "./MovieItem.module.css";
import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon.jsx";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/movie/operations.js";
import { useNavigate } from "react-router-dom";

const MovieItem = (movie) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await dispatch(deleteMovie(movie.list._id));
    navigate(0);
  };

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
      <button type="button" className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movie: PropTypes.object,
};
