import css from "../LoadMore/LoadMore.module.css";
import PropTypes from "prop-types";

const LoadMore = ({ onClick, ...props }) => {
  return (
    <button className={css.button} onClick={onClick} {...props}>
      Load more
    </button>
  );
};

export default LoadMore;

LoadMore.propTypes = {
  onClick: PropTypes.func,
};
