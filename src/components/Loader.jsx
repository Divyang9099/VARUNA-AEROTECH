import React from 'react';

const Loader = ({ overlay = false }) => {
  return (
    <div
      className={overlay ? 'brand-loader-backdrop brand-loader-overlay' : 'brand-loader-backdrop'}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="brand-loader-shell">
        <div className="brand-loader-emblem-wrap">
          <span className="brand-loader-ring" />
          <img
            src="/favicon.png"
            alt="Varuna emblem"
            className="brand-loader-emblem"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
