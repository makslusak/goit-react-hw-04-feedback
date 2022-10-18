import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ option }) => (
  <button className={css.btn} type="button">
    {option}
  </button>
);
