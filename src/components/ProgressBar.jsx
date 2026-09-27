import React from 'react';

/**
 * Reusable linear progress bar with customizable fill color and accessible percentage.
 */
export const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'default', // 'default' (secondary green) | 'gold' | 'success'
  showLabel = false,
  label = 'Progress',
  height = 8,
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100))) || 0;

  return (
    <div className={`progress-container ${className}`}>
      {showLabel && (
        <div className="progress-header">
          <span>{label}</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div
        className="progress-track"
        style={{ height: `${height}px` }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`progress-fill ${variant === 'gold' ? 'gold' : variant === 'success' ? 'success' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
