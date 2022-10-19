import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from './Notification/Notification';

export const Statistics = ({ countPositive, countTotal, state }) => {
  return countTotal() === 0 ? (
    <Notification text={'There is no feedback yet'} />
  ) : (
    <div className={css.statsContainer}>
      <p>
        Good: <span className={css.statsValue}>{state.good}</span>
      </p>
      <p>
        Neutral: <span className={css.statsValue}>{state.neutral}</span>
      </p>
      <p>
        Bad: <span className={css.statsValue}>{state.bad}</span>
      </p>
      <p>
        Total: <span className={css.statsValue}>{countTotal()}</span>
      </p>
      <p>
        Positive feedback:{' '}
        <span className={css.statsValue}>{countPositive()}</span>
      </p>
    </div>
  );
};
Statistics.propTypes = {
  countPositive: PropTypes.func.isRequired,
  countTotal: PropTypes.func.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
};
