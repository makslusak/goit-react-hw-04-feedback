import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ name, onIncrement, title }) => (
  <button name={name} onClick={onIncrement} className={css.btn} type="button">
    {title}
  </button>
);
Button.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
