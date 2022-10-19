import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { Button } from './Button/Button';

export const FeedbackOptions = ({
  incrementGood,
  incrementBad,
  incrementNeutral,
  state,
}) => {
  return (
    <div className={css.wraper}>
      <Button onIncrement={incrementGood} state={state} option={'Good'} />
      <Button onIncrement={incrementNeutral} state={state} option={'Neutral'} />
      <Button onIncrement={incrementBad} state={state} option={'Bad'} />
    </div>
  );
};
