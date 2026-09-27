import React from 'react';
import { BookOpen } from 'lucide-react';
import Button from './Button';

/**
 * Reusable EmptyState component to prevent blank screen areas.
 */
export const EmptyState = ({
  icon: Icon = BookOpen,
  title = 'No records found',
  description = 'There is currently no activity or data to display.',
  actionText,
  onAction,
  className = '',
}) => {
  return (
    <div className={`empty-state ${className}`}>
      <Icon className="empty-state-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      {actionText && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
