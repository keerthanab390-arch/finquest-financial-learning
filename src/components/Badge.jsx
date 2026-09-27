import React from 'react';

/**
 * Reusable Badge component for categories, statuses, and tags.
 */
export const Badge = ({
  children,
  variant = 'neutral', // 'green' | 'gold' | 'neutral' | 'success' | 'error'
  icon: Icon,
  className = '',
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};

export default Badge;
