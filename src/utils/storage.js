/**
 * FinQuest LocalStorage Management Utility
 * Provides safe getters, setters, and calculation helpers with fallback defaults.
 */

const STORAGE_KEYS = {
  COMPLETED_MODULES: 'finquest_completed_modules',
  QUIZ_HISTORY: 'finquest_quiz_history',
  CALCULATOR_HISTORY: 'finquest_calculator_history',
  ACTIVITY_LOG: 'finquest_activity_log',
};

// Safe JSON parse helper
const getStoredItem = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
};

// Safe JSON write helper
const setStoredItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage key "${key}":`, error);
  }
};

/* --- Module Progress --- */

export const getCompletedModules = () => {
  return getStoredItem(STORAGE_KEYS.COMPLETED_MODULES, []);
};

export const isModuleCompleted = (moduleId) => {
  const completed = getCompletedModules();
  return completed.includes(moduleId);
};

export const toggleModuleCompletion = (moduleId, moduleTitle = '') => {
  const completed = getCompletedModules();
  let updated;
  let isNowCompleted = false;

  if (completed.includes(moduleId)) {
    updated = completed.filter((id) => id !== moduleId);
    isNowCompleted = false;
    logActivity({
      type: 'module_uncompleted',
      title: `Unmarked module: ${moduleTitle || moduleId}`,
      timestamp: new Date().toISOString(),
    });
  } else {
    updated = [...completed, moduleId];
    isNowCompleted = true;
    logActivity({
      type: 'module_completed',
      title: `Completed module: ${moduleTitle || moduleId}`,
      timestamp: new Date().toISOString(),
    });
  }

  setStoredItem(STORAGE_KEYS.COMPLETED_MODULES, updated);
  return { completed: updated, isCompleted: isNowCompleted };
};

export const setModuleCompleted = (moduleId, moduleTitle = '') => {
  const completed = getCompletedModules();
  if (!completed.includes(moduleId)) {
    const updated = [...completed, moduleId];
    setStoredItem(STORAGE_KEYS.COMPLETED_MODULES, updated);
    logActivity({
      type: 'module_completed',
      title: `Completed module: ${moduleTitle || moduleId}`,
      timestamp: new Date().toISOString(),
    });
    return updated;
  }
  return completed;
};

/* --- Quiz History & Scores --- */

export const getQuizHistory = () => {
  return getStoredItem(STORAGE_KEYS.QUIZ_HISTORY, []);
};

export const saveQuizAttempt = (attempt) => {
  // attempt: { score, totalQuestions, accuracy, timestamp, answersSummary }
  const history = getQuizHistory();
  const newAttempt = {
    id: `quiz_${Date.now()}`,
    score: attempt.score,
    totalQuestions: attempt.totalQuestions,
    accuracy: Math.round((attempt.score / attempt.totalQuestions) * 100),
    timestamp: attempt.timestamp || new Date().toISOString(),
    breakdown: attempt.breakdown || null,
  };

  const updatedHistory = [newAttempt, ...history];
  setStoredItem(STORAGE_KEYS.QUIZ_HISTORY, updatedHistory);

  logActivity({
    type: 'quiz_completed',
    title: `Completed Finance Quiz with score ${newAttempt.score}/${newAttempt.totalQuestions} (${newAttempt.accuracy}%)`,
    timestamp: newAttempt.timestamp,
  });

  return updatedHistory;
};

export const getBestQuizScore = () => {
  const history = getQuizHistory();
  if (history.length === 0) return null;
  return history.reduce((best, current) => {
    return current.accuracy > (best?.accuracy || 0) ? current : best;
  }, history[0]);
};

export const getLatestQuizAttempt = () => {
  const history = getQuizHistory();
  return history.length > 0 ? history[0] : null;
};

export const getAverageQuizScore = () => {
  const history = getQuizHistory();
  if (history.length === 0) return 0;
  const totalAccuracy = history.reduce((sum, item) => sum + item.accuracy, 0);
  return Math.round(totalAccuracy / history.length);
};

/* --- Calculator Activities --- */

export const logCalculatorUse = (calculatorName, summary) => {
  const history = getStoredItem(STORAGE_KEYS.CALCULATOR_HISTORY, []);
  const entry = {
    id: `calc_${Date.now()}`,
    calculatorName,
    summary,
    timestamp: new Date().toISOString(),
  };
  setStoredItem(STORAGE_KEYS.CALCULATOR_HISTORY, [entry, ...history].slice(0, 20));

  logActivity({
    type: 'calculator_used',
    title: `Calculated ${calculatorName}: ${summary}`,
    timestamp: entry.timestamp,
  });
};

/* --- General Activity Log --- */

export const getActivityLog = () => {
  return getStoredItem(STORAGE_KEYS.ACTIVITY_LOG, []);
};

export const logActivity = (activity) => {
  const log = getActivityLog();
  const newLog = [
    {
      id: `act_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      ...activity,
    },
    ...log,
  ].slice(0, 30); // Keep last 30 activities
  setStoredItem(STORAGE_KEYS.ACTIVITY_LOG, newLog);
};

/* --- Overall Stats Aggregator --- */

export const getOverallLearningStats = (totalAvailableModules = 6) => {
  const completed = getCompletedModules();
  const history = getQuizHistory();
  const completedCount = completed.length;
  
  // Progress is 70% modules + 30% quiz attempts (capped at 100)
  const moduleWeight = (completedCount / Math.max(1, totalAvailableModules)) * 70;
  const quizWeight = history.length > 0 ? Math.min(30, (getAverageQuizScore() / 100) * 30) : 0;
  const overallProgress = Math.min(100, Math.round(moduleWeight + quizWeight));

  return {
    completedModulesCount: completedCount,
    totalModulesCount: totalAvailableModules,
    moduleProgressPercent: Math.round((completedCount / Math.max(1, totalAvailableModules)) * 100),
    quizAttemptsCount: history.length,
    bestScore: getBestQuizScore(),
    latestAttempt: getLatestQuizAttempt(),
    averageQuizScore: getAverageQuizScore(),
    overallProgress,
  };
};

/* --- Reset Progress --- */

export const resetAllProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.COMPLETED_MODULES);
    localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
    localStorage.removeItem(STORAGE_KEYS.CALCULATOR_HISTORY);
    localStorage.removeItem(STORAGE_KEYS.ACTIVITY_LOG);
    return true;
  } catch (error) {
    console.error('Error resetting progress:', error);
    return false;
  }
};
