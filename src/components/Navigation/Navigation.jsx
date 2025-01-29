import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const navClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink className={navClass} to="/">
          Home
        </NavLink>
        <NavLink className={navClass} to="/movie">
          Movie
        </NavLink>
      </nav>
    </>
  );
};
export default Navigation;
