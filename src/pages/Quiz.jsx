import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, HelpCircle, ArrowRight, ArrowLeft, RotateCcw, Check, Eye } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';

export const Quiz = ({ onSaveQuizResult }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: selectedOptionIndex }
  const [showHint, setShowHint] = useState(false);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestion.id];
  const isCurrentAnswered = selectedAnswer !== undefined;

  // Handle selecting an option
  const handleSelectOption = (optionIndex) => {
    if (isQuizSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  };

  // Calculate score using JavaScript array reduce method
  const calculateResults = () => {
    let correctCount = 0;
    const breakdown = QUIZ_QUESTIONS.map((q) => {
      const chosen = userAnswers[q.id];
      const isCorrect = chosen === q.correctAnswer;
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        chosen,
        correct: q.correctAnswer,
        isCorrect,
      };
    });

    const incorrectCount = totalQuestions - correctCount;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);

    return {
      score: correctCount,
      totalQuestions,
      correctCount,
      incorrectCount,
      accuracy,
      breakdown,
    };
  };

  const handleSubmitQuiz = () => {
    const results = calculateResults();
    setIsQuizSubmitted(true);
    if (onSaveQuizResult) {
      onSaveQuizResult(results);
    }
  };

  const handleRetakeQuiz = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setShowHint(false);
    setIsQuizSubmitted(false);
    setIsReviewMode(false);
  };

  const results = isQuizSubmitted ? calculateResults() : null;

  // ==========================================
  // VIEW 1: Final Results Screen
  // ==========================================
  if (isQuizSubmitted && !isReviewMode) {
    return (
      <div className="container" style={{ paddingTop: 'var(--space-2xl)' }}>
        <div className="quiz-container">
          <div className="quiz-card">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
              <span className="section-tag section-tag-gold">ASSESSMENT COMPLETE</span>
              <h1 style={{ marginBottom: '8px' }}>Finance Quiz Results</h1>
              <p style={{ margin: 0 }}>
                {results.accuracy >= 80
                  ? 'Outstanding! You demonstrated strong mastery of essential personal finance concepts.'
                  : results.accuracy >= 60
                  ? 'Good job! You have a solid baseline understanding with a few areas for refinement.'
                  : 'Keep learning! Review the learning library modules and try the assessment again.'}
              </p>
            </div>

            {/* Score Banner */}
            <div className="quiz-result-score-banner">
              <div className="quiz-result-big-score">{results.accuracy}%</div>
              <div style={{ fontWeight: 600, color: 'var(--color-primary-dark)', fontSize: '1.1rem' }}>
                Score: {results.score} / {results.totalQuestions}
              </div>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="quiz-stats-grid">
              <div className="quiz-stat-card">
                <div className="stat-val" style={{ color: 'var(--color-success)' }}>
                  {results.correctCount}
                </div>
                <div className="stat-lbl">Correct Answers</div>
              </div>

              <div className="quiz-stat-card">
                <div className="stat-val" style={{ color: results.incorrectCount > 0 ? 'var(--color-error)' : 'var(--color-text-secondary)' }}>
                  {results.incorrectCount}
                </div>
                <div className="stat-lbl">Incorrect Answers</div>
              </div>

              <div className="quiz-stat-card">
                <div className="stat-val" style={{ color: 'var(--color-primary-dark)' }}>
                  {results.totalQuestions}
                </div>
                <div className="stat-lbl">Total Questions</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                icon={Eye}
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setIsReviewMode(true);
                }}
              >
                Review Answers
              </Button>
              <Button
                variant="secondary"
                icon={RotateCcw}
                onClick={handleRetakeQuiz}
              >
                Try Again / Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: Active Quiz & Review Mode
  // ==========================================
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const allAnswered = Object.keys(userAnswers).length === totalQuestions;

  return (
    <div className="container" style={{ paddingTop: 'var(--space-2xl)' }}>
      <div className="quiz-container">
        {/* Review Mode Banner */}
        {isReviewMode && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ebede6', padding: '12px 16px', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
              Answer Review Mode ({results.score}/{results.totalQuestions} Correct)
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsReviewMode(false)}
            >
              Back to Score Summary
            </Button>
          </div>
        )}

        <div className="quiz-card">
          {/* Header & Meta */}
          <div className="quiz-header">
            <div className="quiz-question-meta">
              <Badge variant="green">{currentQuestion.category}</Badge>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
            </div>
            <ProgressBar value={currentQuestionIndex + 1} max={totalQuestions} />
          </div>

          {/* Question Text */}
          <h2 className="quiz-question-text">{currentQuestion.question}</h2>

          {/* Educational Hint Toggle (Available during quiz) */}
          {!isReviewMode && (
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                style={{ background: 'transparent', border: 'none', color: 'var(--color-secondary-green)', fontSize: '0.8125rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
              >
                <HelpCircle size={14} />
                {showHint ? 'Hide educational hint' : 'Need a hint?'}
              </button>
              {showHint && (
                <div className="quiz-hint-box" style={{ marginTop: '8px' }}>
                  <strong>Hint:</strong> {currentQuestion.hint}
                </div>
              )}
            </div>
          )}

          {/* Multiple Choice Options */}
          <div className="quiz-options" role="radiogroup" aria-label={`Options for question ${currentQuestionIndex + 1}`}>
            {currentQuestion.options.map((optionText, idx) => {
              const letter = String.fromCharCode(65 + idx); // A, B, C, D
              const isSelected = selectedAnswer === idx;
              const isCorrectAnswer = idx === currentQuestion.correctAnswer;

              let optionClass = 'quiz-option-btn';
              if (isReviewMode) {
                if (isCorrectAnswer) {
                  optionClass += ' correct';
                } else if (isSelected && !isCorrectAnswer) {
                  optionClass += ' incorrect';
                }
              } else if (isSelected) {
                optionClass += ' selected';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={optionClass}
                  disabled={isReviewMode}
                  onClick={() => handleSelectOption(idx)}
                >
                  <span className="quiz-option-letter">{letter}</span>
                  <span style={{ flex: 1 }}>{optionText}</span>
                  {isReviewMode && isCorrectAnswer && (
                    <CheckCircle2 size={18} color="var(--color-success)" />
                  )}
                  {isReviewMode && isSelected && !isCorrectAnswer && (
                    <XCircle size={18} color="var(--color-error)" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Pedagogical Explanation in Review Mode */}
          {isReviewMode && (
            <div
              className={`quiz-feedback-box ${
                selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'
              }`}
            >
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>
                {selectedAnswer === currentQuestion.correctAnswer
                  ? 'Correct'
                  : selectedAnswer === undefined
                  ? 'Unanswered'
                  : 'Incorrect'}
              </div>
              <div>{currentQuestion.explanation}</div>
            </div>
          )}

          {/* Bottom Navigation & Controls */}
          <div className="quiz-controls">
            <Button
              variant="secondary"
              size="sm"
              icon={ArrowLeft}
              disabled={currentQuestionIndex === 0}
              onClick={() => {
                setShowHint(false);
                setCurrentQuestionIndex((prev) => prev - 1);
              }}
            >
              Previous
            </Button>

            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              {!isLastQuestion ? (
                <Button
                  variant="primary"
                  size="sm"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={() => {
                    setShowHint(false);
                    setCurrentQuestionIndex((prev) => prev + 1);
                  }}
                >
                  Next Question
                </Button>
              ) : isReviewMode ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setIsReviewMode(false)}
                >
                  Return to Results
                </Button>
              ) : (
                <Button
                  variant="accent"
                  size="sm"
                  icon={Check}
                  disabled={!allAnswered}
                  onClick={handleSubmitQuiz}
                  title={!allAnswered ? 'Please answer all questions before submitting' : ''}
                >
                  Submit Quiz ({Object.keys(userAnswers).length}/{totalQuestions})
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
