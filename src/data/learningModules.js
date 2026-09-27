/**
 * FinQuest Comprehensive Learning Modules
 * Educational content designed for university-level financial literacy.
 */

export const LEARNING_MODULES = [
  {
    id: 'saving-fundamentals',
    title: 'Saving Fundamentals',
    category: 'Saving',
    readingTime: '4 min read',
    shortDescription: 'Master the core principles of building savings, the pay-yourself-first rule, and setting up automated deposits.',
    introduction:
      'Saving money is the foundational habit upon which all financial resilience is built. It is not merely about accumulating leftover money at the end of the month, but deliberately directing income towards future security before discretionary spending occurs.',
    whyItMatters:
      'Without structured savings, unexpected life events inevitably turn into high-interest debt emergencies. Consistent savings grant you autonomy, reduce financial anxiety, and allow you to take advantage of unexpected opportunities.',
    keyConcepts: [
      {
        title: 'The "Pay Yourself First" Principle',
        explanation: 'Treat your savings contribution like an essential non-negotiable bill due on payday. Move your target savings amount into a separate account before paying discretionary expenses.'
      },
      {
        title: 'Opportunity Cost Evaluation',
        explanation: 'Every dollar spent today represents potential compounded wealth given up tomorrow. Recognizing this trade-off helps prioritize lasting value over fleeting satisfaction.'
      },
      {
        title: 'Automation over Willpower',
        explanation: 'Automating direct deposits eliminates cognitive fatigue and decision friction, turning disciplined saving into a default background process.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Saving only what is left over at the end of the month',
        remedy: 'Automate a fixed percentage or amount on the day you receive your paycheck.'
      },
      {
        mistake: 'Keeping all savings in a standard low-interest checking account',
        remedy: 'Separate emergency savings into a dedicated High-Yield Savings Account (HYSA) to earn interest and reduce impulsive spending.'
      },
      {
        mistake: 'Setting unrealistic savings goals that cause immediate burnout',
        remedy: 'Start with 5% to 10% of income and scale up incrementally as your budget stabilizes.'
      }
    ],
    practicalExample: {
      scenario: 'Starting with a $3,000 monthly take-home salary',
      breakdown: [
        'Payday Deposit: Transfer $300 (10%) automatically to an emergency savings account on day 1.',
        'Fixed Expenses: Allocate $1,800 to rent, utilities, and groceries.',
        'Discretionary Balance: Use the remaining $900 for personal spending, guilt-free.',
        'Annual Impact: After 12 months, you have saved $3,600 without relying on daily willpower.'
      ]
    },
    actionChecklist: [
      'Open a dedicated high-yield savings account if you do not have one.',
      'Set up an automated recurring transfer on your next payday.',
      'Audit the last 30 days of transactions to identify $50 of unused subscriptions.'
    ]
  },
  {
    id: 'budgeting-basics',
    title: 'Budgeting Basics & Cashflow Management',
    category: 'Budgeting',
    readingTime: '5 min read',
    shortDescription: 'Learn how to construct a realistic monthly budget, differentiate needs from wants, and track cashflow.',
    introduction:
      'A budget is not a financial restriction; it is an intentional plan that gives every dollar a specific job. Understanding your cash inflows and outflows is the only reliable way to achieve intentional spending and avoid lifestyle creep.',
    whyItMatters:
      'Without a clear budget, individuals frequently experience "phantom spending"—money that vanishes into untracked micro-transactions, leaving them puzzled at month-end.',
    keyConcepts: [
      {
        title: 'The 50/30/20 Framework',
        explanation: 'A popular baseline model allocating 50% of after-tax income to Needs (rent, food, healthcare), 30% to Wants (dining, entertainment), and 20% to Savings/Debt reduction.'
      },
      {
        title: 'Zero-Based Budgeting',
        explanation: 'An accounting approach where Income minus Expenses (including savings) equals exactly zero. Every dollar is purposefully assigned prior to spending.'
      },
      {
        title: 'Fixed vs. Variable Expenses',
        explanation: 'Fixed expenses remain identical each billing cycle (e.g., rent, loan payments), whereas variable expenses fluctuate (e.g., groceries, utility bills, transportation).'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Treating "Wants" as non-negotiable "Needs"',
        remedy: 'Honestly classify expenses: a basic phone plan is a need; premium streaming bundles or daily boutique coffee are wants.'
      },
      {
        mistake: 'Failing to budget for irregular or annual expenses',
        remedy: 'Create "sinking funds" for car insurance, annual subscriptions, and seasonal gifts by saving 1/12th each month.'
      },
      {
        mistake: 'Making the budget too rigid with zero buffer',
        remedy: 'Include a $50–$100 miscellaneous category to absorb unexpected small price fluctuations.'
      }
    ],
    practicalExample: {
      scenario: 'Applying the 50/30/20 guideline on $3,500 monthly income',
      breakdown: [
        'Needs (50% = $1,750): Rent ($1,200), Groceries ($350), Transportation ($200).',
        'Wants (30% = $1,050): Dining out ($300), Hobbies ($250), Entertainment & Subscriptions ($200), Personal Care ($300).',
        'Savings & Debt (20% = $700): Emergency fund contribution ($400), Student loan extra repayment ($300).'
      ]
    },
    actionChecklist: [
      'List all recurring monthly bills with exact due dates.',
      'Categorize the last 60 days of expenses into Needs, Wants, and Savings.',
      'Use the FinQuest Monthly Budget Calculator to test your balance.'
    ]
  },
  {
    id: 'building-emergency-fund',
    title: 'Building an Emergency Fund',
    category: 'Emergency Fund',
    readingTime: '4 min read',
    shortDescription: 'Construct a financial safety net to protect against job loss, medical emergencies, and unexpected repairs.',
    introduction:
      'An emergency fund is a dedicated, liquid cash reserve reserved exclusively for unexpected, urgent, and necessary expenses. It serves as an insurance policy against life unpredictability, keeping your long-term plans intact.',
    whyItMatters:
      'A single car breakdown or surprise medical bill without cash reserves often forces people onto high-interest credit cards or predatory loans, initiating a dangerous debt spiral.',
    keyConcepts: [
      {
        title: 'The Tiered Emergency Fund Strategy',
        explanation: 'Phase 1 targets a starter buffer of $1,000 to cover minor setbacks. Phase 2 scales up to 3 to 6 months of essential living expenses (not total income).'
      },
      {
        title: 'Liquidity vs. Yield Trade-off',
        explanation: 'Emergency funds must be accessible within 24–48 hours without market penalty. High-Yield Savings Accounts (HYSAs) or money market accounts provide liquidity while outpacing standard checking rates.'
      },
      {
        title: 'Strict Usage Criteria',
        explanation: 'Use the 3-question test before withdrawing: Is it unexpected? Is it necessary? Is it urgent? If not all three, it is not an emergency.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Investing emergency reserves in volatile stock markets or crypto',
        remedy: 'Keep emergency money in cash equivalents. Capital preservation and instant liquidity supersede high investment returns.'
      },
      {
        mistake: 'Using emergency savings for foreseeable expenses like holiday gifts or vacations',
        remedy: 'Create distinct sinking funds for predictable seasonal costs so emergency reserves remain untouched.'
      },
      {
        mistake: 'Postponing building the fund until all student debt is cleared',
        remedy: 'Maintain a minimum $1,000 starter buffer even while aggressively paying down low-interest debt.'
      }
    ],
    practicalExample: {
      scenario: 'Calculating essential monthly living costs',
      breakdown: [
        'Essential Monthly Expenses: Rent ($1,100) + Food ($350) + Utilities ($150) + Minimum Debt ($200) + Insurance ($100) = $1,900/month.',
        'Starter Emergency Target: $1,000 (reach in 3 months at $333/month).',
        '3-Month Safety Net: $1,900 × 3 = $5,700.',
        '6-Month Comprehensive Buffer: $1,900 × 6 = $11,400 for freelancers or single-income households.'
      ]
    },
    actionChecklist: [
      'Calculate your bare-minimum monthly survival budget.',
      'Set an initial milestone of $1,000 in a separate high-yield account.',
      'Commit a fixed monthly amount using the FinQuest Savings Goal Calculator.'
    ]
  },
  {
    id: 'setting-financial-goals',
    title: 'Setting SMART Financial Goals',
    category: 'Financial Goals',
    readingTime: '4 min read',
    shortDescription: 'Transform vague financial wishes into actionable short-term, medium-term, and long-term milestones.',
    introduction:
      'Vague desires like "I want to have more money" rarely lead to behavioural changes. Concrete financial goal setting provides direction, measures progress, and turns abstract aspirations into structured monthly deposit targets.',
    whyItMatters:
      'Clear milestones prevent lifestyle inflation from absorbing salary raises. When you know precisely what you are saving for, delaying gratification becomes purposeful rather than punitive.',
    keyConcepts: [
      {
        title: 'The SMART Criteria for Finance',
        explanation: 'Goals must be Specific (exact purchase or figure), Measurable ($ amount), Achievable (realistic within cashflow), Relevant (aligned with personal values), and Time-bound (target completion date).'
      },
      {
        title: 'Time Horizon Segmentation',
        explanation: 'Short-term (0–2 years: laptop, vacation), Medium-term (2–5 years: car, house downpayment), Long-term (5+ years: retirement, wealth creation).'
      },
      {
        title: 'Reverse Engineering Monthly Targets',
        explanation: 'Calculate required monthly savings: Total Goal Cost divided by the Number of Months Remaining.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Setting too many conflicting primary goals simultaneously',
        remedy: 'Focus on maximum 2–3 core financial goals at one time to prevent dilution of effort.'
      },
      {
        mistake: 'Neglecting to adjust timelines when unexpected costs occur',
        remedy: 'Review and recalibrate timelines quarterly rather than abandoning the entire goal.'
      },
      {
        mistake: 'Saving for medium-term goals without accounting for inflation',
        remedy: 'For goals beyond 3 years, factor in a modest 2–3% annual inflation buffer.'
      }
    ],
    practicalExample: {
      scenario: 'Saving $6,000 for a car downpayment in 18 months',
      breakdown: [
        'Target Amount: $6,000.',
        'Time Horizon: 18 months.',
        'Monthly Contribution Required: $6,000 ÷ 18 = $333.33 per month.',
        'Progress Check: By month 6, verify that $2,000 is safely deposited in the vehicle sinking fund.'
      ]
    },
    actionChecklist: [
      'Write down 1 short-term goal and 1 medium-term goal with exact dollar amounts.',
      'Assign an exact completion date to each goal.',
      'Divide the dollar amount by months to determine your monthly contribution.'
    ]
  },
  {
    id: 'smart-spending-debt-awareness',
    title: 'Smart Spending & High-Interest Debt',
    category: 'Smart Spending',
    readingTime: '5 min read',
    shortDescription: 'Understand the true cost of consumer debt, avoiding predatory interest, and optimizing everyday spending.',
    introduction:
      'Spending money wisely is not about extreme deprivation; it is about intentional optimization. Learning how interest rates work and identifying lifestyle leaks allows you to enjoy life while protecting your financial future.',
    whyItMatters:
      'High-interest consumer debt (such as credit cards with 20–28% APR) mathematically works against compound growth, making everyday purchases cost significantly more over time.',
    keyConcepts: [
      {
        title: 'Annual Percentage Rate (APR) Mechanics',
        explanation: 'Credit card interest compounds daily on outstanding balances. Carrying a $3,000 balance at 24% APR costs over $700 annually just in interest charges.'
      },
      {
        title: 'The 24-Hour Rule for Discretionary Purchases',
        explanation: 'Pause for 24 hours on non-essential purchases exceeding $50. This cooling-off window interrupts impulse dopamine loops.'
      },
      {
        title: 'Debt Payoff Methods: Avalanche vs. Snowball',
        explanation: 'Avalanche prioritizes highest interest rates first to minimize mathematical cost; Snowball prioritizes smallest balances first for psychological momentum.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Paying only the minimum balance on credit cards',
        remedy: 'Always aim to pay the statement balance in full every month to avoid paying any interest charges.'
      },
      {
        mistake: 'Using "Buy Now Pay Later" (BNPL) for impulse lifestyle purchases',
        remedy: 'Treat BNPL as real debt. If you cannot afford the full cash price today, postpone the purchase.'
      },
      {
        mistake: 'Failing to track recurring micro-subscriptions',
        remedy: 'Conduct a quarterly subscription audit to cancel streaming, gaming, or app services not utilized in 30 days.'
      }
    ],
    practicalExample: {
      scenario: 'The real cost of a $1,200 smartphone on a 22% APR credit card',
      breakdown: [
        'Scenario A (Paying Full Statement): You pay $1,200. Total Interest Paid = $0.',
        'Scenario B (Paying $50/month Minimum): It takes 32 months to pay off, and you pay $418 in interest! Total Cost = $1,618.',
        'Key Takeaway: Paying in full saved over $400 of hard-earned money.'
      ]
    },
    actionChecklist: [
      'Check the APR and current balance on all credit cards and loans.',
      'Set up calendar reminders or autopay for full statement balances.',
      'Apply the 24-hour waiting rule to your next online shopping cart.'
    ]
  },
  {
    id: 'compound-interest-wealth',
    title: 'Compound Interest & Long-Term Growth',
    category: 'Saving',
    readingTime: '5 min read',
    shortDescription: 'Discover how time and compounding interest exponentially amplify your regular savings contributions.',
    introduction:
      'Compound interest is interest calculated on both the initial principal and the accumulated interest from prior periods. Often described as the Eighth Wonder of the World, compounding rewards patience and early beginnings.',
    whyItMatters:
      'Starting to save and invest in your twenties versus your thirties can result in hundreds of thousands of dollars of difference in retirement wealth, even if you save less total capital.',
    keyConcepts: [
      {
        title: 'The Rule of 72',
        explanation: 'A quick mathematical formula to estimate how many years it takes for an investment to double: Divide 72 by the annual expected rate of return (e.g., at 8%, money doubles in ~9 years).'
      },
      {
        title: 'The Time Advantage (Early vs. Late Starter)',
        explanation: 'Because compounding is exponential, dollars invested early have decades to multiply, doing far more heavy lifting than dollars invested later in life.'
      },
      {
        title: 'Consistency and Dollar-Cost Averaging',
        explanation: 'Contributing regular monthly amounts regardless of short-term market headlines produces steady long-term compounding.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Waiting until you have a "large amount" before saving or investing',
        remedy: 'Even $25 to $50 a month starts the compounding snowball. Start with whatever small surplus you have.'
      },
      {
        mistake: 'Underestimating the erosion of purchasing power caused by inflation',
        remedy: 'Ensure your long-term wealth strategy beats the historical average 2–3% inflation rate.'
      },
      {
        mistake: 'Attempting to time market dips rather than maintaining consistent contributions',
        remedy: 'Time in the market consistently outperforms trying to time the market.'
      }
    ],
    practicalExample: {
      scenario: 'Comparing two savers over a 30-year horizon at 7% annual return',
      breakdown: [
        'Alex starts at Age 22: Saves $200/month for 10 years ($24,000 total), then stops contributing. Value at Age 62 = ~$280,000.',
        'Jordan starts at Age 32: Saves $200/month for 30 years ($72,000 total). Value at Age 62 = ~$244,000.',
        'Key Takeaway: Alex invested 3x LESS money but ended with more wealth simply by starting 10 years earlier!'
      ]
    },
    actionChecklist: [
      'Calculate the doubling time of your investments using the Rule of 72.',
      'Commit to never interrupting compound interest unnecessarily.',
      'Check your employer match program if you are in a formal workplace.'
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Saving',
  'Budgeting',
  'Emergency Fund',
  'Financial Goals',
  'Smart Spending'
];
