import React from 'react';
import { Alert } from 'react-bootstrap';

/**
 *
 * @param {propType} variant a variant prop passed to decide which type of message to return
 * @example
 * variant = danger
 * variant = success
 * @param {propType} children a children prop passed to the component which is displayed as a bootstrap alert
 * @returns {Bootstrap:Alert} returns an alert which is used to display message in the application such as Errors or Successes
 */

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
