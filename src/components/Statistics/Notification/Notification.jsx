import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics.module.css';

export const Notification = ({ text }) => (
  <p className={css.notification}>{text}</p>
);
Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
