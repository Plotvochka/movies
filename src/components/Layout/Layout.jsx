import AppBar from "../AppBar/AppBar.jsx";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.object,
};
