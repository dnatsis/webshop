import React from 'react';
import { Spinner } from 'react-bootstrap';

/**
 * A Component using a boostrap spinner to use when part of the application is loading
 *
 * @Component
 * @returns {Bootstrap:Spinner} a Bootstrap spinner used when part of the application is loading
 */
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
