import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice/filterSlice.js";
import css from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search for a movie by title"
      className={css.searchInput}
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};

export default SearchBar;
