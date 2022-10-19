import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onIncrement, state, option }) => (
  <button onClick={onIncrement} className={css.btn} type="button">
    {option}
  </button>
  // {console.log(state)}
);
