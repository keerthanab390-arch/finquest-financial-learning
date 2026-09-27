import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Award, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { LEARNING_MODULES } from '../data/learningModules';
import Button from '../components/Button';
import LearningCard from '../components/LearningCard';
import ProgressBar from '../components/ProgressBar';

export const Home = ({ completedModules = [], stats = {} }) => {
  // Show first 3 or relevant modules for quick access
  const featuredModules = LEARNING_MODULES.slice(0, 3);
  const completedCount = completedModules.length;
  const totalCount = LEARNING_MODULES.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="section-tag section-tag-gold">PERSONAL FINANCE LEARNING LAB</span>
              <h1>Build better money habits, one step at a time.</h1>
              <p className="hero-lead">
                Learn the fundamentals of saving and budgeting, test your knowledge, and practise with simple financial tools.
              </p>
              <div className="hero-actions">
                <Link to="/learn">
                  <Button variant="primary" size="lg" icon={BookOpen}>
                    Start Learning
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button variant="secondary" size="lg" icon={Award}>
                    Take a Quiz
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Live Learning Status Box */}
            <div className="hero-stat-box">
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <BookOpen size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                    CURRICULUM PROGRESS
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)', margin: '2px 0 6px 0' }}>
                    {completedCount} of {totalCount} Modules Finished
                  </div>
                  <ProgressBar value={completedCount} max={totalCount} />
                </div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                    KNOWLEDGE ASSESSMENT
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                    {stats.bestScore ? `Best Score: ${stats.bestScore.accuracy}%` : 'No quiz taken yet'}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    {stats.quizAttemptsCount > 0
                      ? `${stats.quizAttemptsCount} total assessment attempts recorded`
                      : '12 interactive multi-choice questions available'}
                  </div>
                </div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                    PRACTICAL SUITE
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                    3 Financial Calculators
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    Budget, Savings Goals &amp; 50/30/20 Allocations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="pillars-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">METHODOLOGY</span>
            <h2>A structured pathway to financial confidence</h2>
            <p>
              FinQuest integrates foundational reading, interactive verification quizzes, and practical mathematical calculators.
            </p>
          </div>

          <div className="grid-3">
            <div className="pillar-card">
              <span className="pillar-number">01 — LEARN</span>
              <h3 className="pillar-title">Understand Concepts</h3>
              <p className="pillar-desc">
                Understand essential personal finance concepts including the pay-yourself-first rule, sinking funds, and compound growth.
              </p>
              <div>
                <Link to="/learn">
                  <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right">
                    Browse Modules
                  </Button>
                </Link>
              </div>
            </div>

            <div className="pillar-card">
              <span className="pillar-number">02 — PRACTISE</span>
              <h3 className="pillar-title">Apply Simple Tools</h3>
              <p className="pillar-desc">
                Use simple calculators to apply what you learn. Test monthly budget balances, time-to-goal projections, and educational allocations.
              </p>
              <div>
                <Link to="/calculators">
                  <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right">
                    Explore Calculators
                  </Button>
                </Link>
              </div>
            </div>

            <div className="pillar-card">
              <span className="pillar-number">03 — TEST</span>
              <h3 className="pillar-title">Challenge Knowledge</h3>
              <p className="pillar-desc">
                Challenge yourself with interactive quizzes. Receive immediate pedagogical explanations, track accuracy, and review past attempts.
              </p>
              <div>
                <Link to="/quiz">
                  <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right">
                    Start Quiz
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Learning Modules Section */}
      <section className="modules-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-xl)' }}>
            <div>
              <span className="section-tag">CURRICULUM</span>
              <h2>Continue Learning</h2>
              <p style={{ margin: 0 }}>Pick up where you left off or explore core personal finance modules.</p>
            </div>
            <Link to="/learn">
              <Button variant="secondary" size="sm" icon={ArrowRight} iconPosition="right">
                View All {LEARNING_MODULES.length} Modules
              </Button>
            </Link>
          </div>

          <div className="grid-3">
            {featuredModules.map((module) => (
              <LearningCard
                key={module.id}
                module={module}
                isCompleted={completedModules.includes(module.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Highlight Banner */}
      <section className="container" style={{ marginBottom: 'var(--space-2xl)' }}>
        <div className="card card-dark" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-lg)' }}>
          <div style={{ maxWidth: '650px' }}>
            <span className="section-tag section-tag-gold" style={{ color: 'var(--color-accent-gold)' }}>INTERACTIVE CALCULATORS</span>
            <h2 style={{ color: '#FFFFFF', marginBottom: '8px' }}>Test your personal budget and savings plans</h2>
            <p style={{ color: 'rgba(247, 245, 239, 0.85)', margin: 0 }}>
              Use our Monthly Budget, Savings Goal, and 50/30/20 Allocation calculators with real-time feedback and validation.
            </p>
          </div>
          <div>
            <Link to="/calculators">
              <Button variant="accent" size="lg" icon={Calculator}>
                Open Calculators
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
