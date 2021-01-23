import React from 'react';

const LoadSpinner = () => (
  <div className="d-flex justify-content-center text-center text-primary">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default LoadSpinner;
