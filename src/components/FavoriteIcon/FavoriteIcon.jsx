import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/favoriteSlice/favoriteSlice.js";
import { FaHeart } from "react-icons/fa";
import { selectFavorite } from "../../redux/movie/selectors.js";
import PropTypes from "prop-types";

const FavoriteIcon = ({ movie }) => {
  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();

  return (
    <FaHeart
      size={30}
      onClick={() => dispatch(toggleFavorite(movie.list._id))}
      style={{
        color: favorites[movie.list._id] ? "red" : "gray",
        cursor: "pointer",
        marginLeft: "10px",
      }}
    />
  );
};

export default FavoriteIcon;

FavoriteIcon.propTypes = {
  movie: PropTypes.object,
};
