import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import ModuleDetail from './pages/ModuleDetail';
import Quiz from './pages/Quiz';
import Calculators from './pages/Calculators';
import Progress from './pages/Progress';
import {
  getCompletedModules,
  toggleModuleCompletion,
  saveQuizAttempt,
  getActivityLog,
  getOverallLearningStats,
  resetAllProgress,
} from './utils/storage';
import { LEARNING_MODULES } from './data/learningModules';

export const App = () => {
  const [completedModules, setCompletedModules] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [stats, setStats] = useState({});

  // Refresh all state from localStorage
  const refreshAppData = () => {
    const completed = getCompletedModules();
    const activity = getActivityLog();
    const currentStats = getOverallLearningStats(LEARNING_MODULES.length);

    setCompletedModules(completed);
    setActivityLog(activity);
    setStats(currentStats);
  };

  // Initial load
  useEffect(() => {
    refreshAppData();
  }, []);

  // Handle module toggle completion
  const handleToggleModule = (moduleId, title) => {
    toggleModuleCompletion(moduleId, title);
    refreshAppData();
  };

  // Handle quiz result submission
  const handleSaveQuiz = (quizResults) => {
    saveQuizAttempt(quizResults);
    refreshAppData();
  };

  // Handle global reset
  const handleResetProgress = () => {
    resetAllProgress();
    refreshAppData();
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar onResetProgress={handleResetProgress} />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Home completedModules={completedModules} stats={stats} />}
            />
            <Route
              path="/learn"
              element={
                <Learn
                  completedModules={completedModules}
                  onToggleComplete={handleToggleModule}
                />
              }
            />
            <Route
              path="/learn/:id"
              element={
                <ModuleDetail
                  completedModules={completedModules}
                  onToggleComplete={handleToggleModule}
                />
              }
            />
            <Route
              path="/quiz"
              element={<Quiz onSaveQuizResult={handleSaveQuiz} />}
            />
            <Route path="/calculators" element={<Calculators />} />
            <Route
              path="/progress"
              element={
                <Progress
                  completedModules={completedModules}
                  stats={stats}
                  activityLog={activityLog}
                  onResetProgress={handleResetProgress}
                />
              }
            />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
