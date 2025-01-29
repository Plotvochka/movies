import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>404 - not found</h2>
      <p className={css.text}>
        Unfortunately, there is no page at this link, let`s try from the home
        page
      </p>
      <Link to="/" className={css.btn}>
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
