import React, { useState } from 'react';
import { BookOpen, Search, CheckCircle2 } from 'lucide-react';
import { LEARNING_MODULES, CATEGORIES } from '../data/learningModules';
import LearningCard from '../components/LearningCard';
import ProgressBar from '../components/ProgressBar';
import EmptyState from '../components/EmptyState';

export const Learn = ({ completedModules = [], onToggleComplete }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter modules using JavaScript array methods (.filter)
  const filteredModules = LEARNING_MODULES.filter((module) => {
    const matchesCategory =
      activeCategory === 'All' || module.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const completedCount = completedModules.length;
  const totalCount = LEARNING_MODULES.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="container" style={{ paddingTop: 'var(--space-2xl)' }}>
      {/* Header Banner */}
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-lg)' }}>
        <div>
          <span className="section-tag">CURRICULUM</span>
          <h1>Financial Learning Library</h1>
          <p style={{ maxWidth: '620px', margin: 0 }}>
            Explore structured, bite-sized modules on saving, budgeting, emergency reserves, goal planning, and debt management.
          </p>
        </div>

        {/* Progress Tracker Card */}
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '16px 20px', minWidth: '260px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
            <span>PROGRESS</span>
            <span style={{ color: 'var(--color-primary-dark)' }}>{completedCount} / {totalCount} Completed</span>
          </div>
          <ProgressBar value={completedCount} max={totalCount} variant="default" />
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
        {/* Category Tabs */}
        <div className="filter-bar" role="tablist" aria-label="Module Categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', width: '280px' }}>
          <Search
            size={16}
            style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }}
          />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '36px', fontSize: '0.875rem' }}
            placeholder="Search topics or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search modules"
          />
        </div>
      </div>

      {/* Module Grid or Empty State */}
      {filteredModules.length > 0 ? (
        <div className="grid-3">
          {filteredModules.map((module) => (
            <LearningCard
              key={module.id}
              module={module}
              isCompleted={completedModules.includes(module.id)}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={BookOpen}
          title="No modules match your filter"
          description="Try selecting another category or clearing your search keywords."
          actionText="Reset Filters"
          onAction={() => {
            setActiveCategory('All');
            setSearchQuery('');
          }}
        />
      )}
    </div>
  );
};

export default Learn;
