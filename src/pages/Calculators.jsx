import React, { useState } from 'react';
import { Calculator, DollarSign, Target, PieChart, CheckCircle2, AlertCircle, Info, RefreshCw } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { logCalculatorUse } from '../utils/storage';

export const Calculators = () => {
  const [activeTab, setActiveTab] = useState('budget'); // 'budget' | 'savings' | 'allocation'

  // ==========================================
  // CALCULATOR 1: Monthly Budget Calculator State
  // ==========================================
  const [budgetForm, setBudgetForm] = useState({
    income: '3500',
    housing: '1200',
    food: '450',
    transport: '250',
    education: '150',
    other: '200',
  });
  const [budgetErrors, setBudgetErrors] = useState({});

  const handleBudgetChange = (field, value) => {
    setBudgetForm((prev) => ({ ...prev, [field]: value }));
    // Clear field error on change
    if (budgetErrors[field]) {
      setBudgetErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateBudget = () => {
    const errors = {};
    const inc = parseFloat(budgetForm.income);
    if (isNaN(inc) || inc <= 0) {
      errors.income = 'Please enter a valid monthly income greater than 0';
    }

    const expenseFields = ['housing', 'food', 'transport', 'education', 'other'];
    expenseFields.forEach((field) => {
      const val = parseFloat(budgetForm[field]);
      if (isNaN(val) || val < 0) {
        errors[field] = 'Expense cannot be negative or empty';
      }
    });

    setBudgetErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Live Budget Calculations
  const incomeVal = Math.max(0, parseFloat(budgetForm.income) || 0);
  const housingVal = Math.max(0, parseFloat(budgetForm.housing) || 0);
  const foodVal = Math.max(0, parseFloat(budgetForm.food) || 0);
  const transportVal = Math.max(0, parseFloat(budgetForm.transport) || 0);
  const educationVal = Math.max(0, parseFloat(budgetForm.education) || 0);
  const otherVal = Math.max(0, parseFloat(budgetForm.other) || 0);

  const totalExpenses = housingVal + foodVal + transportVal + educationVal + otherVal;
  const remainingBalance = incomeVal - totalExpenses;
  const expensePercentage = incomeVal > 0 ? Math.round((totalExpenses / incomeVal) * 100) : 0;
  const savingsRate = incomeVal > 0 ? Math.round((remainingBalance / incomeVal) * 100) : 0;

  const handleSaveBudgetCalc = () => {
    if (validateBudget()) {
      logCalculatorUse(
        'Monthly Budget',
        `Income: $${incomeVal.toLocaleString()} | Expenses: $${totalExpenses.toLocaleString()} | Balance: $${remainingBalance.toLocaleString()}`
      );
    }
  };

  // ==========================================
  // CALCULATOR 2: Savings Goal Calculator State
  // ==========================================
  const [savingsForm, setSavingsForm] = useState({
    goalAmount: '10000',
    currentSavings: '2500',
    monthlyContribution: '500',
  });
  const [savingsErrors, setSavingsErrors] = useState({});

  const handleSavingsChange = (field, value) => {
    setSavingsForm((prev) => ({ ...prev, [field]: value }));
    if (savingsErrors[field]) {
      setSavingsErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateSavings = () => {
    const errors = {};
    const goal = parseFloat(savingsForm.goalAmount);
    const curr = parseFloat(savingsForm.currentSavings);
    const monthly = parseFloat(savingsForm.monthlyContribution);

    if (isNaN(goal) || goal <= 0) {
      errors.goalAmount = 'Savings goal must be greater than $0';
    }
    if (isNaN(curr) || curr < 0) {
      errors.currentSavings = 'Current savings cannot be negative';
    }
    if (isNaN(monthly) || monthly <= 0) {
      errors.monthlyContribution = 'Monthly contribution must be greater than $0';
    }

    setSavingsErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const goalVal = Math.max(0, parseFloat(savingsForm.goalAmount) || 0);
  const currVal = Math.max(0, parseFloat(savingsForm.currentSavings) || 0);
  const monthlyContrib = Math.max(0, parseFloat(savingsForm.monthlyContribution) || 0);

  const remainingGoal = Math.max(0, goalVal - currVal);
  const monthsRequired =
    currVal >= goalVal ? 0 : monthlyContrib > 0 ? Math.ceil(remainingGoal / monthlyContrib) : 0;
  const savingsGoalProgress = goalVal > 0 ? Math.min(100, Math.round((currVal / goalVal) * 100)) : 0;

  // Calculate future completion date
  const getTargetDate = (months) => {
    const date = new Date();
    date.setMonth(date.getMonth() + months);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const handleSaveSavingsCalc = () => {
    if (validateSavings()) {
      logCalculatorUse(
        'Savings Goal',
        `Goal: $${goalVal.toLocaleString()} | Required: ${monthsRequired} months (${getTargetDate(monthsRequired)})`
      );
    }
  };

  // ==========================================
  // CALCULATOR 3: Budget Allocation (50/30/20) State
  // ==========================================
  const [allocationIncome, setAllocationIncome] = useState('4000');
  const [allocationError, setAllocationError] = useState('');

  const handleAllocationIncomeChange = (val) => {
    setAllocationIncome(val);
    const num = parseFloat(val);
    if (isNaN(num) || num <= 0) {
      setAllocationError('Please enter a valid monthly income greater than 0');
    } else {
      setAllocationError('');
    }
  };

  const allocIncomeNum = Math.max(0, parseFloat(allocationIncome) || 0);
  const needsAmount = Math.round(allocIncomeNum * 0.5);
  const wantsAmount = Math.round(allocIncomeNum * 0.3);
  const savingsAmount = Math.round(allocIncomeNum * 0.2);

  const handleSaveAllocCalc = () => {
    if (allocIncomeNum > 0) {
      logCalculatorUse(
        'Budget Allocation',
        `Income: $${allocIncomeNum.toLocaleString()} | Needs: $${needsAmount} | Wants: $${wantsAmount} | Savings: $${savingsAmount}`
      );
    }
  };

  return (
    <div className="container" style={{ paddingTop: 'var(--space-2xl)' }}>
      {/* Page Header */}
      <div className="section-header">
        <span className="section-tag">PRACTICAL LAB</span>
        <h1>Smart Financial Calculators</h1>
        <p style={{ maxWidth: '640px', margin: 0 }}>
          Interactive tools to model monthly cashflows, forecast savings horizons, and analyze rule-of-thumb budget allocations.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="calc-nav-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'budget'}
          className={`calc-tab-btn ${activeTab === 'budget' ? 'active' : ''}`}
          onClick={() => setActiveTab('budget')}
        >
          <DollarSign size={16} style={{ display: 'inline', marginRight: '6px' }} />
          1. Monthly Budget
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'savings'}
          className={`calc-tab-btn ${activeTab === 'savings' ? 'active' : ''}`}
          onClick={() => setActiveTab('savings')}
        >
          <Target size={16} style={{ display: 'inline', marginRight: '6px' }} />
          2. Savings Goal
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'allocation'}
          className={`calc-tab-btn ${activeTab === 'allocation' ? 'active' : ''}`}
          onClick={() => setActiveTab('allocation')}
        >
          <PieChart size={16} style={{ display: 'inline', marginRight: '6px' }} />
          3. Budget Allocation (50/30/20)
        </button>
      </div>

      {/* =======================================================
          TAB 1: MONTHLY BUDGET CALCULATOR
         ======================================================= */}
      {activeTab === 'budget' && (
        <div className="calc-layout">
          {/* Form Card */}
          <div className="card">
            <h3 style={{ marginBottom: '4px' }}>Monthly Income &amp; Expenses</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: 'var(--space-lg)' }}>
              Enter your monthly net income and standard recurring expense categories.
            </p>

            <div className="form-group">
              <label className="form-label" htmlFor="budget-income">
                Monthly Net Income <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="budget-income"
                  type="number"
                  min="0"
                  step="10"
                  className={`form-input has-prefix ${budgetErrors.income ? 'input-error' : ''}`}
                  value={budgetForm.income}
                  onChange={(e) => handleBudgetChange('income', e.target.value)}
                  placeholder="e.g. 3500"
                />
              </div>
              {budgetErrors.income && <span className="form-error-msg">{budgetErrors.income}</span>}
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: 'var(--space-lg) 0' }} />

            <h4 style={{ marginBottom: 'var(--space-md)' }}>Expense Categories</h4>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="budget-housing">Housing &amp; Rent</label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    id="budget-housing"
                    type="number"
                    min="0"
                    className={`form-input has-prefix ${budgetErrors.housing ? 'input-error' : ''}`}
                    value={budgetForm.housing}
                    onChange={(e) => handleBudgetChange('housing', e.target.value)}
                    placeholder="0"
                  />
                </div>
                {budgetErrors.housing && <span className="form-error-msg">{budgetErrors.housing}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="budget-food">Food &amp; Groceries</label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    id="budget-food"
                    type="number"
                    min="0"
                    className={`form-input has-prefix ${budgetErrors.food ? 'input-error' : ''}`}
                    value={budgetForm.food}
                    onChange={(e) => handleBudgetChange('food', e.target.value)}
                    placeholder="0"
                  />
                </div>
                {budgetErrors.food && <span className="form-error-msg">{budgetErrors.food}</span>}
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="budget-transport">Transportation</label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    id="budget-transport"
                    type="number"
                    min="0"
                    className={`form-input has-prefix ${budgetErrors.transport ? 'input-error' : ''}`}
                    value={budgetForm.transport}
                    onChange={(e) => handleBudgetChange('transport', e.target.value)}
                    placeholder="0"
                  />
                </div>
                {budgetErrors.transport && <span className="form-error-msg">{budgetErrors.transport}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="budget-education">Education &amp; Tuition</label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    id="budget-education"
                    type="number"
                    min="0"
                    className={`form-input has-prefix ${budgetErrors.education ? 'input-error' : ''}`}
                    value={budgetForm.education}
                    onChange={(e) => handleBudgetChange('education', e.target.value)}
                    placeholder="0"
                  />
                </div>
                {budgetErrors.education && <span className="form-error-msg">{budgetErrors.education}</span>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="budget-other">Other Discretionary Expenses</label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="budget-other"
                  type="number"
                  min="0"
                  className={`form-input has-prefix ${budgetErrors.other ? 'input-error' : ''}`}
                  value={budgetForm.other}
                  onChange={(e) => handleBudgetChange('other', e.target.value)}
                  placeholder="0"
                />
              </div>
              {budgetErrors.other && <span className="form-error-msg">{budgetErrors.other}</span>}
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-md)' }}>
              <Button
                variant="primary"
                onClick={handleSaveBudgetCalc}
              >
                Log This Calculation
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setBudgetForm({
                    income: '3500',
                    housing: '1200',
                    food: '450',
                    transport: '250',
                    education: '150',
                    other: '200',
                  });
                  setBudgetErrors({});
                }}
              >
                Reset Defaults
              </Button>
            </div>
          </div>

          {/* Live Summary Panel */}
          <div className="calc-summary-panel">
            <div className="calc-result-header">
              <span className="section-tag">MONTHLY SUMMARY</span>
              <h3>Cashflow Breakdown</h3>
            </div>

            <div className="calc-result-row">
              <span style={{ color: 'var(--color-text-secondary)' }}>Monthly Income</span>
              <span style={{ fontWeight: 600 }}>${incomeVal.toLocaleString()}</span>
            </div>

            <div className="calc-result-row">
              <span style={{ color: 'var(--color-text-secondary)' }}>Total Expenses</span>
              <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                ${totalExpenses.toLocaleString()}
              </span>
            </div>

            <div className="calc-result-row">
              <span style={{ color: 'var(--color-text-secondary)' }}>Expense Ratio</span>
              <span style={{ fontWeight: 600 }}>{expensePercentage}% of income</span>
            </div>

            <div className="calc-result-row total-highlight">
              <span>Remaining Balance</span>
              <span style={{ color: remainingBalance >= 0 ? 'var(--color-success)' : 'var(--color-error)' }}>
                ${remainingBalance.toLocaleString()}
              </span>
            </div>

            {/* Visual Expense Bar */}
            {incomeVal > 0 && (
              <div style={{ marginTop: 'var(--space-lg)' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                  EXPENSE DISTRIBUTION
                </div>
                <div className="calc-visual-bar">
                  <div
                    className="calc-bar-segment"
                    style={{ width: `${(housingVal / incomeVal) * 100}%`, backgroundColor: '#173F35' }}
                    title={`Housing: $${housingVal}`}
                  />
                  <div
                    className="calc-bar-segment"
                    style={{ width: `${(foodVal / incomeVal) * 100}%`, backgroundColor: '#2F6B5B' }}
                    title={`Food: $${foodVal}`}
                  />
                  <div
                    className="calc-bar-segment"
                    style={{ width: `${(transportVal / incomeVal) * 100}%`, backgroundColor: '#529683' }}
                    title={`Transport: $${transportVal}`}
                  />
                  <div
                    className="calc-bar-segment"
                    style={{ width: `${(educationVal / incomeVal) * 100}%`, backgroundColor: '#C9A227' }}
                    title={`Education: $${educationVal}`}
                  />
                  <div
                    className="calc-bar-segment"
                    style={{ width: `${(otherVal / incomeVal) * 100}%`, backgroundColor: '#94A3B8' }}
                    title={`Other: $${otherVal}`}
                  />
                </div>

                <div className="legend-grid">
                  <div className="legend-item">
                    <span className="legend-dot" style={{ backgroundColor: '#173F35' }} />
                    <span>Housing (${housingVal})</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot" style={{ backgroundColor: '#2F6B5B' }} />
                    <span>Food (${foodVal})</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot" style={{ backgroundColor: '#529683' }} />
                    <span>Transport (${transportVal})</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot" style={{ backgroundColor: '#C9A227' }} />
                    <span>Education (${educationVal})</span>
                  </div>
                </div>
              </div>
            )}

            {/* Health Assessment Note */}
            <div style={{ marginTop: 'var(--space-lg)', padding: '12px', background: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.8125rem' }}>
              <strong>Evaluation:</strong>{' '}
              {remainingBalance > 0 ? (
                <span>
                  You have a healthy surplus of <strong>${remainingBalance.toLocaleString()}</strong> ({savingsRate}%).
                  Consider directing this towards your emergency fund or long-term goals.
                </span>
              ) : remainingBalance === 0 ? (
                <span>Your monthly income and expenses match exactly (Zero-based balance).</span>
              ) : (
                <span style={{ color: 'var(--color-error)' }}>
                  Expenses exceed income by <strong>${Math.abs(remainingBalance).toLocaleString()}</strong>. Consider trimming discretionary categories.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          TAB 2: SAVINGS GOAL CALCULATOR
         ======================================================= */}
      {activeTab === 'savings' && (
        <div className="calc-layout">
          <div className="card">
            <h3 style={{ marginBottom: '4px' }}>Savings Goal Parameters</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: 'var(--space-lg)' }}>
              Calculate the time required to reach your target milestone through steady monthly contributions.
            </p>

            <div className="form-group">
              <label className="form-label" htmlFor="goal-amount">
                Total Savings Target ($) <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="goal-amount"
                  type="number"
                  min="1"
                  className={`form-input has-prefix ${savingsErrors.goalAmount ? 'input-error' : ''}`}
                  value={savingsForm.goalAmount}
                  onChange={(e) => handleSavingsChange('goalAmount', e.target.value)}
                  placeholder="e.g. 10000"
                />
              </div>
              {savingsErrors.goalAmount && (
                <span className="form-error-msg">{savingsErrors.goalAmount}</span>
              )}
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="current-savings">
                  Current Savings Balance ($)
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    id="current-savings"
                    type="number"
                    min="0"
                    className={`form-input has-prefix ${savingsErrors.currentSavings ? 'input-error' : ''}`}
                    value={savingsForm.currentSavings}
                    onChange={(e) => handleSavingsChange('currentSavings', e.target.value)}
                    placeholder="0"
                  />
                </div>
                {savingsErrors.currentSavings && (
                  <span className="form-error-msg">{savingsErrors.currentSavings}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="monthly-contribution">
                  Monthly Contribution ($) <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    id="monthly-contribution"
                    type="number"
                    min="1"
                    className={`form-input has-prefix ${savingsErrors.monthlyContribution ? 'input-error' : ''}`}
                    value={savingsForm.monthlyContribution}
                    onChange={(e) => handleSavingsChange('monthlyContribution', e.target.value)}
                    placeholder="e.g. 500"
                  />
                </div>
                {savingsErrors.monthlyContribution && (
                  <span className="form-error-msg">{savingsErrors.monthlyContribution}</span>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-md)' }}>
              <Button
                variant="primary"
                onClick={handleSaveSavingsCalc}
              >
                Log This Goal
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setSavingsForm({
                    goalAmount: '10000',
                    currentSavings: '2500',
                    monthlyContribution: '500',
                  });
                  setSavingsErrors({});
                }}
              >
                Reset
              </Button>
            </div>
          </div>

          {/* Savings Live Forecast Panel */}
          <div className="calc-summary-panel">
            <div className="calc-result-header">
              <span className="section-tag section-tag-gold">GOAL FORECAST</span>
              <h3>Timeline Projection</h3>
            </div>

            {currVal >= goalVal && goalVal > 0 ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-lg) 0' }}>
                <CheckCircle2 size={40} color="var(--color-success)" style={{ margin: '0 auto 8px' }} />
                <h4 style={{ color: 'var(--color-success)' }}>Goal Already Reached!</h4>
                <p style={{ fontSize: '0.875rem' }}>
                  Your current savings (${currVal.toLocaleString()}) already meet or exceed your target goal of ${goalVal.toLocaleString()}.
                </p>
              </div>
            ) : (
              <>
                <div className="calc-result-row">
                  <span style={{ color: 'var(--color-text-secondary)' }}>Remaining to Save</span>
                  <span style={{ fontWeight: 600 }}>${remainingGoal.toLocaleString()}</span>
                </div>

                <div className="calc-result-row">
                  <span style={{ color: 'var(--color-text-secondary)' }}>Estimated Horizon</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-primary-dark)', fontSize: '1.15rem' }}>
                    {monthsRequired} Months
                  </span>
                </div>

                <div className="calc-result-row">
                  <span style={{ color: 'var(--color-text-secondary)' }}>Target Completion</span>
                  <span style={{ fontWeight: 600, color: 'var(--color-secondary-green)' }}>
                    {getTargetDate(monthsRequired)}
                  </span>
                </div>

                <div style={{ marginTop: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '6px' }}>
                    <span>CURRENT PROGRESS</span>
                    <span>{savingsGoalProgress}%</span>
                  </div>
                  <div className="progress-track" style={{ height: '10px' }}>
                    <div
                      className="progress-fill gold"
                      style={{ width: `${savingsGoalProgress}%` }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-lg)', padding: '12px', background: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                  <strong>Educational Note:</strong> If you increase monthly contributions by just $100 (to ${monthlyContrib + 100}/mo), you will reach your goal in{' '}
                  <strong>{Math.ceil(remainingGoal / Math.max(1, monthlyContrib + 100))} months</strong> (saving {monthsRequired - Math.ceil(remainingGoal / Math.max(1, monthlyContrib + 100))} months!).
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* =======================================================
          TAB 3: BUDGET ALLOCATION CALCULATOR (50/30/20)
         ======================================================= */}
      {activeTab === 'allocation' && (
        <div className="calc-layout">
          <div className="card">
            <h3 style={{ marginBottom: '4px' }}>50/30/20 Rule Allocation Model</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: 'var(--space-lg)' }}>
              Enter your monthly net take-home salary to see a standard reference distribution across needs, wants, and savings.
            </p>

            <div className="form-group">
              <label className="form-label" htmlFor="alloc-income">
                Monthly Net Take-Home Income ($) <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="alloc-income"
                  type="number"
                  min="1"
                  step="50"
                  className={`form-input has-prefix ${allocationError ? 'input-error' : ''}`}
                  value={allocationIncome}
                  onChange={(e) => handleAllocationIncomeChange(e.target.value)}
                  placeholder="e.g. 4000"
                />
              </div>
              {allocationError && <span className="form-error-msg">{allocationError}</span>}
            </div>

            {/* Educational Disclaimer */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: 'var(--color-accent-gold-soft)', border: '1px solid #ebd7a2', borderRadius: 'var(--radius-md)', padding: '14px', marginTop: 'var(--space-lg)' }}>
              <Info size={18} color="var(--color-accent-gold-hover)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.8125rem', color: '#6d5407', lineHeight: 1.5 }}>
                <strong>Sample allocation for learning purposes.</strong> This calculator is an educational model designed to illustrate proportional budgeting fundamentals and should not be construed as individualized investment or financial advice.
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-lg)' }}>
              <Button variant="primary" onClick={handleSaveAllocCalc}>
                Log This Allocation
              </Button>
            </div>
          </div>

          {/* Allocation Breakdown Summary */}
          <div className="calc-summary-panel">
            <div className="calc-result-header">
              <span className="section-tag">REFERENCE BENCHMARK</span>
              <h3>Recommended Allocations</h3>
            </div>

            <div className="calc-result-row">
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>50% Needs</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Housing, Utilities, Groceries, Minimum Debt
                </div>
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-dark)' }}>
                ${needsAmount.toLocaleString()}
              </span>
            </div>

            <div className="calc-result-row">
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-secondary-green)' }}>30% Wants</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Dining out, Hobbies, Entertainment, Travel
                </div>
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-secondary-green)' }}>
                ${wantsAmount.toLocaleString()}
              </span>
            </div>

            <div className="calc-result-row">
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-accent-gold-hover)' }}>20% Savings &amp; Debt</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Emergency fund, Investments, Accelerated debt
                </div>
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-accent-gold-hover)' }}>
                ${savingsAmount.toLocaleString()}
              </span>
            </div>

            {/* Visual Allocation Proportion Bar */}
            <div style={{ marginTop: 'var(--space-lg)' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                SPLIT RATIO
              </div>
              <div className="calc-visual-bar">
                <div className="calc-bar-segment" style={{ width: '50%', backgroundColor: '#173F35' }} title="Needs 50%" />
                <div className="calc-bar-segment" style={{ width: '30%', backgroundColor: '#2F6B5B' }} title="Wants 30%" />
                <div className="calc-bar-segment" style={{ width: '20%', backgroundColor: '#C9A227' }} title="Savings 20%" />
              </div>

              <div className="legend-grid">
                <div className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#173F35' }} />
                  <span>Needs 50% (${needsAmount})</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#2F6B5B' }} />
                  <span>Wants 30% (${wantsAmount})</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#C9A227' }} />
                  <span>Savings 20% (${savingsAmount})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculators;
