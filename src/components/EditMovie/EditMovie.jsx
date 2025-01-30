import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editMovie } from "../../redux/movie/operations.js";
import css from "./EditMovie.module.css";
import { selectLoading } from "../../redux/movie/selectors.js";
import PropTypes from "prop-types";

const EditMovie = ({ movie }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectLoading);

  const [updatedFields, setUpdatedFields] = useState({});

  const handleChange = (e) => {
    setUpdatedFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(updatedFields).length === 0) {
      alert("No changes detected!");
      return;
    }
    dispatch(editMovie({ _id: movie._id, updatedFields }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.editOverlay}>
      <div className={css.editContent}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={movie.title}
          onChange={handleChange}
          className={css.inputForm}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          defaultValue={movie.description}
          onChange={handleChange}
          className={css.inputForm}
        />
        <input
          type="text"
          name="actors"
          placeholder="Actors"
          defaultValue={movie.actors}
          onChange={handleChange}
          className={css.inputForm}
        />
        <input
          type="text"
          name="director"
          placeholder="Director"
          defaultValue={movie.director}
          onChange={handleChange}
          className={css.inputForm}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          defaultValue={movie.genre}
          onChange={handleChange}
          className={css.inputForm}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          defaultValue={movie.rating}
          onChange={handleChange}
          className={css.inputForm}
        />
        <input
          type="number"
          name="releaseDate"
          placeholder="Release date"
          defaultValue={movie.releaseDate}
          onChange={handleChange}
          className={css.inputForm}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          defaultValue={movie.image}
          onChange={handleChange}
          className={css.inputForm}
        />
      </div>
      <button type="submit" disabled={loading} className={css.btnForm}>
        {loading ? "Updating..." : "Update Movie"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default EditMovie;

EditMovie.propTypes = {
  movie: PropTypes.object,
};
