import css from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ children }) => {
  return <button className={css.btn}>{children}</button>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
