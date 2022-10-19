import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { Button } from './Button/Button';

export const FeedbackOptions = ({
  incrementGood,
  incrementBad,
  incrementNeutral,
}) => {
  return (
    <div className={css.wraper}>
      <Button onIncrement={incrementGood} option={'Good'} />
      <Button onIncrement={incrementNeutral} option={'Neutral'} />
      <Button onIncrement={incrementBad} option={'Bad'} />
    </div>
  );
};
FeedbackOptions.propTypes = {
  incrementGood: PropTypes.func.isRequired,
  incrementBad: PropTypes.func.isRequired,
  incrementNeutral: PropTypes.func.isRequired,
};
