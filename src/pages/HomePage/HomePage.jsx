import css from "./HomePage.module.css";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapTitle}>
        <h1 className={css.title}>Movies of your dreams</h1>
        <h2 className={css.afterTitle}>
          Add, edit, delete, save to favorites, everything to your taste!
        </h2>
        <NavLink to="/movie">
          <Button>View Now</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
