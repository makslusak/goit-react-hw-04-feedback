import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { Button } from './Button/Button';

export const FeedbackOptions = props => {
  return (
    <div className={css.wraper}>
      <Button option={'Good'} />
      <Button option={'Neutral'} />
      <Button option={'Bad'} />
    </div>
  );
};
