import PropTypes from 'prop-types';
import style from './button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button type="Button" onClick={onClick} className={style.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
