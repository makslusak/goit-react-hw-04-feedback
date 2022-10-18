import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = props => (
  <div className={css.statsContainer}>
    <p>
      Good: <span className={css.statsValue}></span>
    </p>
    <p>
      Neutral: <span className={css.statsValue}></span>
    </p>
    <p>
      Bad: <span className={css.statsValue}></span>
    </p>
    <p>
      Total: <span className={css.statsValue}></span>
    </p>
    <p>
      Positive feedback: <span className={css.statsValue}></span>
    </p>
  </div>
);
