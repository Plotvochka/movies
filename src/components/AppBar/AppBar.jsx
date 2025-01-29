import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./AppBar.module.css";
import { GiFilmProjector } from "react-icons/gi";

const AppBar = () => {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        <GiFilmProjector size={36} />
      </NavLink>
      <Navigation />
    </header>
  );
};

export default AppBar;
