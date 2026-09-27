import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3>FinQuest</h3>
            <p>
              "Learn money. Plan smarter. Build better habits."
            </p>
            <p style={{ fontSize: '0.8125rem', marginTop: '12px', color: 'rgba(247, 245, 239, 0.6)' }}>
              An interactive personal finance learning laboratory designed to foster sound money management habits.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <div className="footer-nav-title">Platform</div>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/learn">Learning Library</Link></li>
              <li><Link to="/quiz">Finance Quiz</Link></li>
              <li><Link to="/calculators">Smart Calculators</Link></li>
              <li><Link to="/progress">Learning Progress</Link></li>
            </ul>
          </div>

          {/* Educational Modules Column */}
          <div>
            <div className="footer-nav-title">Core Disciplines</div>
            <ul className="footer-links">
              <li><Link to="/learn/saving-fundamentals">Saving Fundamentals</Link></li>
              <li><Link to="/learn/budgeting-basics">Budgeting Basics</Link></li>
              <li><Link to="/learn/building-emergency-fund">Emergency Funds</Link></li>
              <li><Link to="/learn/setting-financial-goals">Financial Goals</Link></li>
              <li><Link to="/learn/smart-spending-debt-awareness">Smart Spending</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            Built as a Full Stack Web Development ReactJS learning project.
          </div>
          <div>
            &copy; {new Date().getFullYear()} FinQuest Learning Portal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
