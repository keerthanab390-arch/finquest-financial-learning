import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, BookOpen, AlertCircle, Lightbulb, CheckSquare } from 'lucide-react';
import { LEARNING_MODULES } from '../data/learningModules';
import Badge from '../components/Badge';
import Button from '../components/Button';

export const ModuleDetail = ({ completedModules = [], onToggleComplete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the active module using JavaScript array find method
  const moduleIndex = LEARNING_MODULES.findIndex((m) => m.id === id);
  const currentModule = LEARNING_MODULES[moduleIndex];

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!currentModule) {
    return (
      <div className="container" style={{ paddingTop: 'var(--space-3xl)', textAlign: 'center' }}>
        <h2>Module Not Found</h2>
        <p>The requested educational module could not be located.</p>
        <Link to="/learn">
          <Button variant="primary" icon={ArrowLeft}>
            Back to Learning Library
          </Button>
        </Link>
      </div>
    );
  }

  const isCompleted = completedModules.includes(currentModule.id);
  const prevModule = moduleIndex > 0 ? LEARNING_MODULES[moduleIndex - 1] : null;
  const nextModule = moduleIndex < LEARNING_MODULES.length - 1 ? LEARNING_MODULES[moduleIndex + 1] : null;

  const handleToggle = () => {
    if (onToggleComplete) {
      onToggleComplete(currentModule.id, currentModule.title);
    }
  };

  return (
    <div className="container" style={{ paddingTop: 'var(--space-2xl)' }}>
      {/* Breadcrumb Navigation */}
      <div style={{ marginBottom: 'var(--space-lg)' }}>
        <Link to="/learn" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
          <ArrowLeft size={16} /> Back to Library
        </Link>
      </div>

      <article className="module-reader">
        {/* Header */}
        <header className="reader-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
            <Badge variant="green">{currentModule.category}</Badge>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              <Clock size={15} />
              <span>{currentModule.readingTime}</span>
            </div>
          </div>

          <h1 style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)' }}>{currentModule.title}</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            {currentModule.shortDescription}
          </p>
        </header>

        {/* Section: Introduction */}
        <section className="reader-section">
          <h3>
            <BookOpen size={20} color="var(--color-primary-dark)" />
            Introduction
          </h3>
          <p>{currentModule.introduction}</p>
        </section>

        {/* Section: Why It Matters */}
        <section className="reader-section">
          <h3>
            <Lightbulb size={20} color="var(--color-accent-gold-hover)" />
            Why It Matters
          </h3>
          <p>{currentModule.whyItMatters}</p>
        </section>

        {/* Section: Key Concepts */}
        <section className="reader-section">
          <h3>Key Concepts</h3>
          <div>
            {currentModule.keyConcepts.map((concept, idx) => (
              <div key={idx} className="concept-box">
                <h4>{concept.title}</h4>
                <p>{concept.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Common Mistakes */}
        <section className="reader-section">
          <h3>
            <AlertCircle size={20} color="var(--color-error)" />
            Common Mistakes &amp; Remedies
          </h3>
          <div>
            {currentModule.commonMistakes.map((item, idx) => (
              <div key={idx} className="mistake-box">
                <div className="mistake-title">Mistake: {item.mistake}</div>
                <div className="mistake-remedy"><strong>Remedy:</strong> {item.remedy}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Practical Scenario */}
        <section className="reader-section">
          <h3>Practical Scenario</h3>
          <div className="scenario-box">
            <div className="scenario-header">{currentModule.practicalExample.scenario}</div>
            <ul className="scenario-list">
              {currentModule.practicalExample.breakdown.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section: Action Checklist */}
        <section className="reader-section">
          <h3>
            <CheckSquare size={20} color="var(--color-secondary-green)" />
            Actionable Next Steps
          </h3>
          <ul className="scenario-list" style={{ marginTop: 'var(--space-sm)' }}>
            {currentModule.actionChecklist.map((action, idx) => (
              <li key={idx} style={{ color: 'var(--color-text-primary)' }}>{action}</li>
            ))}
          </ul>
        </section>

        {/* Mark as Complete Action Bar */}
        <div style={{ background: 'var(--color-surface-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>
              {isCompleted ? 'Module Completed' : 'Finish Reading'}
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
              {isCompleted
                ? 'Your progress has been saved to local storage.'
                : 'Mark this module as complete to update your overall learning progress.'}
            </div>
          </div>

          <Button
            variant={isCompleted ? 'outline-green' : 'primary'}
            icon={isCompleted ? CheckCircle2 : Circle}
            onClick={handleToggle}
          >
            {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
          </Button>
        </div>

        {/* Previous & Next Module Navigation */}
        <nav className="reader-actions" aria-label="Module pagination">
          <div>
            {prevModule ? (
              <Button
                variant="secondary"
                size="sm"
                icon={ArrowLeft}
                onClick={() => navigate(`/learn/${prevModule.id}`)}
              >
                Previous: {prevModule.title}
              </Button>
            ) : (
              <span />
            )}
          </div>

          <div>
            {nextModule ? (
              <Button
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => navigate(`/learn/${nextModule.id}`)}
              >
                Next: {nextModule.title}
              </Button>
            ) : (
              <Link to="/quiz">
                <Button variant="accent" size="sm" icon={ArrowRight} iconPosition="right">
                  Proceed to Quiz
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </article>
    </div>
  );
};

export default ModuleDetail;
