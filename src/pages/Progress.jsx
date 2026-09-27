import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, CheckCircle2, Circle, RotateCcw, Clock, ArrowRight, Activity, Calendar } from 'lucide-react';
import { LEARNING_MODULES } from '../data/learningModules';
import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Modal from '../components/Modal';
import EmptyState from '../components/EmptyState';

export const Progress = ({
  completedModules = [],
  stats = {},
  activityLog = [],
  onResetProgress,
}) => {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const completedCount = completedModules.length;
  const totalCount = LEARNING_MODULES.length;

  const formatDate = (isoString) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Recently';
    }
  };

  return (
    <div className="container" style={{ paddingTop: 'var(--space-2xl)' }}>
      {/* Header */}
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
        <div>
          <span className="section-tag">ANALYTICS &amp; MASTERY</span>
          <h1>Learning Progress</h1>
          <p style={{ maxWidth: '640px', margin: 0 }}>
            Track your completed curriculum modules, quiz assessment scores, and recent practical financial activity.
          </p>
        </div>

        <Button
          variant="danger-outline"
          size="sm"
          icon={RotateCcw}
          onClick={() => setIsResetModalOpen(true)}
        >
          Reset All Data
        </Button>
      </div>

      {/* Top Stat Metrics Grid */}
      <div className="stats-header-grid">
        <StatCard
          label="Overall Progress"
          value={`${stats.overallProgress || 0}%`}
          subtext="Curriculum &amp; assessment mastery"
        />

        <StatCard
          label="Completed Modules"
          value={`${completedCount} / ${totalCount}`}
          subtext={`${stats.moduleProgressPercent || 0}% curriculum completed`}
        />

        <StatCard
          label="Average Quiz Score"
          value={stats.quizAttemptsCount > 0 ? `${stats.averageQuizScore}%` : 'N/A'}
          subtext={stats.quizAttemptsCount > 0 ? `Across ${stats.quizAttemptsCount} attempts` : 'No attempts yet'}
        />

        <StatCard
          label="Best Quiz Score"
          value={stats.bestScore ? `${stats.bestScore.accuracy}%` : 'N/A'}
          subtext={stats.bestScore ? `${stats.bestScore.score}/${stats.bestScore.totalQuestions} correct` : 'Quiz not taken'}
        />
      </div>

      {/* Main Grid: Curriculum Checklist & Recent Activity */}
      <div className="grid-2" style={{ alignItems: 'start' }}>
        {/* Module Checklist Card */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)', paddingBottom: 'var(--space-sm)', borderBottom: '1px solid var(--color-border)' }}>
            <div>
              <h3 style={{ margin: 0 }}>Curriculum Checklist</h3>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                {completedCount} of {totalCount} modules completed
              </div>
            </div>
            <Link to="/learn">
              <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right">
                Library
              </Button>
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            {LEARNING_MODULES.map((module) => {
              const isCompleted = completedModules.includes(module.id);
              return (
                <div
                  key={module.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isCompleted ? 'var(--color-surface-subtle)' : 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {isCompleted ? (
                      <CheckCircle2 size={18} color="var(--color-success)" />
                    ) : (
                      <Circle size={18} color="var(--color-text-muted)" />
                    )}
                    <div>
                      <div style={{ fontWeight: 500, fontSize: '0.9375rem', color: 'var(--color-text-primary)' }}>
                        {module.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {module.category} &bull; {module.readingTime}
                      </div>
                    </div>
                  </div>

                  <Link to={`/learn/${module.id}`}>
                    <Button variant={isCompleted ? 'ghost' : 'outline-green'} size="sm">
                      {isCompleted ? 'Review' : 'Start'}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity Log Card */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)', paddingBottom: 'var(--space-sm)', borderBottom: '1px solid var(--color-border)' }}>
            <div>
              <h3 style={{ margin: 0 }}>Activity Log</h3>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                Chronological record of learning milestones
              </div>
            </div>
            <Activity size={18} color="var(--color-secondary-green)" />
          </div>

          {activityLog.length > 0 ? (
            <ul className="activity-list">
              {activityLog.map((act) => (
                <li key={act.id} className="activity-item">
                  <span className="activity-dot" />
                  <div className="activity-content">
                    <div className="activity-title">{act.title}</div>
                    <div className="activity-time">{formatDate(act.timestamp)}</div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              icon={Activity}
              title="No activity recorded yet"
              description="Complete learning modules or take quizzes to generate an activity timeline."
              actionText="Start Learning"
              onAction={() => window.location.href = '#/learn'}
            />
          )}
        </div>
      </div>

      {/* Confirmation Reset Modal */}
      <Modal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        title="Reset All Saved Progress?"
        confirmText="Yes, Reset Everything"
        confirmVariant="danger-outline"
        onConfirm={onResetProgress}
      >
        <p>
          Are you sure you want to clear all learning records? This will delete all completed module markers, quiz attempts, and recorded calculations.
        </p>
      </Modal>
    </div>
  );
};

export default Progress;
