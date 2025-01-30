import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../redux/movie/operations.js";
import PropTypes from "prop-types";
import css from "./MovieForm.module.css";

const MovieForm = ({ isOpen, isClose }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.movies);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movieData = {
      title: e.target.title.value,
      description: e.target.description.value,
      actors: e.target.actors.value,
      director: e.target.director.value,
      genre: e.target.genre.value,
      rating: e.target.rating.value,
      releaseDate: e.target.releaseDate.value,
      image: e.target.image.value,
    };
    const result = await dispatch(addMovie(movieData));
    if (addMovie.fulfilled.match(result)) {
      isClose();
    }
  };

  if (!isOpen) return null;
  return (
    <form onSubmit={handleSubmit} className={css.modalOverlay}>
      <div className={css.modalContent}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className={css.inputForm}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          required
          className={css.inputForm}
        />
        <input
          type="text"
          name="actors"
          placeholder="Actors"
          required
          className={css.inputForm}
        />
        <input
          type="text"
          name="director"
          placeholder="Director"
          required
          className={css.inputForm}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          required
          className={css.inputForm}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          required
          className={css.inputForm}
        />
        <input
          type="number"
          name="releaseDate"
          placeholder="Release date"
          required
          className={css.inputForm}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          required
          className={css.inputForm}
        />
      </div>
      <button type="submit" disabled={loading} className={css.btnForm}>
        {loading ? "Adding..." : "Add Movie"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default MovieForm;

MovieForm.propTypes = {
  isOpen: PropTypes.bool,
  isClose: PropTypes.func,
};
