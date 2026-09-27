import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, RotateCcw } from 'lucide-react';
import Button from './Button';
import Modal from './Modal';

export const Navbar = ({ onResetProgress }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Learn', path: '/learn' },
    { label: 'Finance Quiz', path: '/quiz' },
    { label: 'Smart Calculators', path: '/calculators' },
    { label: 'Progress', path: '/progress' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleConfirmReset = () => {
    if (onResetProgress) {
      onResetProgress();
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" onClick={handleLinkClick}>
            <div className="brand-mark">
              F
              <span className="brand-mark-dot" />
            </div>
            <div className="brand-text">
              <span className="brand-name">FinQuest</span>
              <span className="brand-sub">Financial Learning Lab</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action: Reset Progress */}
          <div className="nav-actions">
            <Button
              variant="ghost"
              size="sm"
              icon={RotateCcw}
              onClick={() => setIsResetModalOpen(true)}
              title="Reset all saved progress"
            >
              Reset Progress
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer">
            <ul className="mobile-drawer-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    onClick={handleLinkClick}
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button
              variant="danger-outline"
              size="sm"
              block
              icon={RotateCcw}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsResetModalOpen(true);
              }}
            >
              Reset Progress
            </Button>
          </div>
        )}
      </header>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        title="Reset All Learning Progress?"
        confirmText="Yes, Reset Everything"
        confirmVariant="danger-outline"
        onConfirm={handleConfirmReset}
      >
        <p>
          This action will clear all your completed learning modules, recorded quiz attempts,
          and calculator activity logs from your browser's local storage.
        </p>
        <p style={{ marginTop: '8px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          This operation cannot be undone. Are you sure you want to proceed?
        </p>
      </Modal>
    </>
  );
};

export default Navbar;
