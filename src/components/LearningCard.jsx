import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';

/**
 * Learning module card displaying category, reading time, completion status, and action.
 */
export const LearningCard = ({
  module,
  isCompleted = false,
  onToggleComplete,
  className = '',
}) => {
  return (
    <div className={`learning-card ${className}`}>
      <div>
        <div className="learning-card-top">
          <Badge variant="green">{module.category}</Badge>
          <div className="learning-card-meta">
            <Clock size={13} />
            <span>{module.readingTime}</span>
          </div>
        </div>

        <h3 className="learning-card-title">{module.title}</h3>
        <p className="learning-card-desc">{module.shortDescription}</p>
      </div>

      <div>
        <div className="learning-card-footer">
          <div>
            {isCompleted ? (
              <Badge variant="success" icon={CheckCircle2}>
                Completed
              </Badge>
            ) : (
              <Badge variant="neutral">Not Started</Badge>
            )}
          </div>

          <Link to={`/learn/${module.id}`}>
            <Button
              variant={isCompleted ? 'secondary' : 'primary'}
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
            >
              {isCompleted ? 'Review' : 'Open Module'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
