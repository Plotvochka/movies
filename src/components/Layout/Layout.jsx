import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar.jsx";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.object,
};
