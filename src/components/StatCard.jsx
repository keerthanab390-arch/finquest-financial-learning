import React from 'react';

/**
 * Reusable StatCard for displaying high-level quantitative metrics.
 */
export const StatCard = ({
  label,
  value,
  subtext,
  icon: Icon,
  variant = 'default', // 'default' | 'dark'
  className = '',
}) => {
  return (
    <div className={`stat-metric-card ${variant === 'dark' ? 'card-dark' : ''} ${className}`}>
      <div className="stat-metric-top">
        <span className="stat-metric-label">{label}</span>
        {Icon && <Icon size={18} className="stat-metric-icon" />}
      </div>
      <div className="stat-metric-value">{value}</div>
      {subtext && <div className="stat-metric-subtext">{subtext}</div>}
    </div>
  );
};

export default StatCard;
