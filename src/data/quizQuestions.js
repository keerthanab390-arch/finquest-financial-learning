/**
 * FinQuest Financial Literacy Quiz Dataset
 * 12 educational questions spanning key personal finance domains.
 */

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: 'Budgeting',
    question: 'What is the primary purpose of creating a monthly budget?',
    options: [
      'To restrict all discretionary spending and entertainment',
      'To track and plan how money is intentionally used',
      'To avoid putting money into savings accounts',
      'To eliminate all monthly expenses completely'
    ],
    correctAnswer: 1,
    hint: 'Think about having an intentional roadmap for where every dollar goes rather than guessing at month-end.',
    explanation:
      'A budget is a forward-looking financial roadmap. Its goal is not extreme deprivation, but rather providing clarity and intentional control over income, expenses, and savings.'
  },
  {
    id: 2,
    category: 'Saving',
    question: 'What does the "Pay Yourself First" financial rule mean?',
    options: [
      'Spending all your money on personal luxuries before paying any bills',
      'Paying off your employer before taking home your paycheck',
      'Transferring a portion of your income to savings before spending on discretionary items',
      'Waiting until the last day of the month to save whatever cash is left over'
    ],
    correctAnswer: 2,
    hint: 'Consider treating your savings like an essential bill due immediately on payday.',
    explanation:
      '"Pay yourself first" means prioritizing your future financial security by routing money into savings or investments immediately upon receiving your income.'
  },
  {
    id: 3,
    category: 'Emergency Fund',
    question: 'How much money is generally recommended for a fully funded emergency fund?',
    options: [
      'Exactly one week of gross pay',
      '3 to 6 months of essential living expenses',
      '5 years of total salary in physical cash',
      'Equal to your total credit card limit'
    ],
    correctAnswer: 1,
    hint: 'Calculate the minimum essential funds needed to survive job loss or an emergency without debt.',
    explanation:
      'Financial experts recommend keeping 3 to 6 months of essential living expenses (housing, groceries, utilities, debt minimums) in a liquid account to protect against unexpected life shocks.'
  },
  {
    id: 4,
    category: 'Budgeting',
    question: 'In the popular 50/30/20 budgeting framework, what does the 20% represent?',
    options: [
      'Discretionary entertainment and dining out',
      'Housing and essential utilities',
      'Savings, debt reduction, and investments',
      'Taxes withheld from your salary'
    ],
    correctAnswer: 2,
    hint: '50% goes to Needs, 30% to Wants, leaving 20% for future financial resilience.',
    explanation:
      'In the 50/30/20 framework, 50% is allocated to Needs (essentials), 30% to Wants (lifestyle), and 20% is dedicated to Savings, investments, and debt paydown.'
  },
  {
    id: 5,
    category: 'Smart Spending',
    question: 'Why is carrying a high-interest credit card balance particularly damaging?',
    options: [
      'Credit card companies waive interest after three months',
      'Daily compound interest makes purchases cost significantly more over time',
      'Credit card interest automatically increases your salary',
      'Banks will confiscate your savings if you carry a balance'
    ],
    correctAnswer: 1,
    hint: 'Think about how 20%+ APR works mathematically against your wealth accumulation.',
    explanation:
      'High-interest consumer debt compounds quickly. Paying only minimums prolongs debt payoff for years and adds hundreds or thousands of dollars in pure interest costs.'
  },
  {
    id: 6,
    category: 'Financial Goals',
    question: 'Which of the following is the best example of a SMART financial goal?',
    options: [
      'I want to be very wealthy someday',
      'I will save $3,000 for an emergency buffer within 6 months by depositing $500 monthly',
      'I hope to stop spending money on coffee forever',
      'I will try to buy a sports car as soon as possible'
    ],
    correctAnswer: 1,
    hint: 'Look for the goal that is Specific, Measurable, Achievable, Relevant, and Time-bound.',
    explanation:
      'SMART goals clearly specify the dollar target ($3,000), the exact purpose (emergency fund), the timeline (6 months), and the monthly actionable deposit ($500).'
  },
  {
    id: 7,
    category: 'Saving',
    question: 'What is the primary advantage of keeping emergency savings in a High-Yield Savings Account (HYSA)?',
    options: [
      'It locks your money away for 10 years without access',
      'It earns higher annual interest while maintaining fast liquidity and principal safety',
      'It actively trades your money on stock market exchanges',
      'It prevents you from withdrawing money even during genuine emergencies'
    ],
    correctAnswer: 1,
    hint: 'Focus on earning a better return while keeping cash safe and readily accessible.',
    explanation:
      'A High-Yield Savings Account typically earns substantially more interest than traditional brick-and-mortar savings accounts while keeping your capital insured and liquid within 1-2 days.'
  },
  {
    id: 8,
    category: 'Smart Spending',
    question: 'What is the "24-Hour Rule" used for in personal finance?',
    options: [
      'Paying off your entire credit balance within 24 hours of swiping',
      'Waiting 24 hours before making non-essential purchases to reduce impulse spending',
      'Limiting your total daily budget to 24 dollars',
      'Checking your bank account balance every 24 minutes'
    ],
    correctAnswer: 1,
    hint: 'It introduces a cooling-off period to prevent emotional or impulse buying.',
    explanation:
      'The 24-hour rule creates psychological friction for non-essential purchases, giving your brain time to evaluate if the item is a genuine priority or a fleeting impulse.'
  },
  {
    id: 9,
    category: 'Saving',
    question: 'What is Compound Interest?',
    options: [
      'Interest calculated only on your first initial deposit',
      'A fee charged by banks for maintaining a balance',
      'Interest calculated on both the principal and the accumulated interest from past periods',
      'A tax levied by local government on checking accounts'
    ],
    correctAnswer: 2,
    hint: 'Think of interest earning interest on top of itself over time.',
    explanation:
      'Compound interest represents exponential growth because you earn returns not just on your initial deposits, but also on the previous interest earned.'
  },
  {
    id: 10,
    category: 'Budgeting',
    question: 'What is a "Sinking Fund"?',
    options: [
      'An emergency account that has lost all its value',
      'Money saved gradually in advance for a planned, anticipated upcoming expense',
      'A government loan used to bail out failing companies',
      'A hidden fee deducted from retirement portfolios'
    ],
    correctAnswer: 1,
    hint: 'Saving $100 a month throughout the year for an annual $1,200 car insurance premium is an example.',
    explanation:
      'A sinking fund breaks down large, predictable future expenses (such as annual insurance premiums, holiday gifts, or car maintenance) into manageable monthly savings increments.'
  },
  {
    id: 11,
    category: 'Financial Goals',
    question: 'According to the "Rule of 72", approximately how long will it take money to double at an 8% annual return?',
    options: [
      '4 years',
      '9 years',
      '18 years',
      '72 years'
    ],
    correctAnswer: 1,
    hint: 'Divide 72 by the annual return rate (72 ÷ 8).',
    explanation:
      'The Rule of 72 is a quick estimation shortcut: 72 divided by 8 percent return = 9 years to double the invested capital.'
  },
  {
    id: 12,
    category: 'Smart Spending',
    question: 'What distinguishes a "Need" from a "Want" in a personal budget?',
    options: [
      'Needs are items you enjoy; Wants are things you dislike',
      'Needs are essential for basic survival and maintaining employment; Wants enhance lifestyle comfort',
      'Needs always cost over $1,000; Wants cost under $100',
      'There is no functional difference between them'
    ],
    correctAnswer: 1,
    hint: 'Basic shelter, staple food, and essential transport are necessities; upgraded dining and streaming are enhancements.',
    explanation:
      'Needs are fundamental non-negotiables required to live and work (basic housing, sustenance, essential utilities, transportation). Wants are lifestyle choices that can be temporarily trimmed if income drops.'
  }
];
