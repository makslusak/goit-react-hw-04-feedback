import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from './Notification/Notification';
import { feedbacksArr } from '../../feedbacks';

export const Statistics = ({
  countPositive,
  countTotal,
  good,
  neutral,
  bad,
}) => {
  const feedbacks = [good, neutral, bad];

  return countTotal() === 0 ? (
    <Notification text={'There is no feedback yet'} />
  ) : (
    <div className={css.statsContainer}>
      {feedbacksArr.map((feedback, index) => (
        <p key={feedback.title}>
          {feedback.title}
          <span className={css.statsValue}> : {feedbacks[index]}</span>
        </p>
      ))}
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
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
