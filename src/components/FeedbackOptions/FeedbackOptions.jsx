import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { Button } from './Button/Button';
import { feedbacksArr } from 'feedbacks';

export const FeedbackOptions = ({ handleIncrement }) => {
  return (
    <div className={css.wraper}>
      {feedbacksArr.map(feedback => (
        <Button
          key={feedback.name}
          name={feedback.name}
          onIncrement={handleIncrement}
          title={feedback.title}
        />
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
};
