import css from "./AddMovie.module.css";
import { useState } from "react";
import MovieForm from "../MovieForm/MovieForm.jsx";

const AddMovie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className={css.addBtn}>
        Add Movie
      </button>
      <MovieForm isOpen={isModalOpen} />
    </div>
  );
};

export default AddMovie;
