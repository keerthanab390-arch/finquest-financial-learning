# FinQuest – Interactive Financial Learning Lab

> **Learn money. Plan smarter. Build better habits.**

FinQuest is an interactive personal finance learning platform developed using ReactJS. It is designed to help users understand fundamental concepts of saving, budgeting, financial goals, emergency funds, and smart spending through structured learning modules, interactive quizzes, and practical financial calculators.

The project is developed as an individual **Full Stack Web Development – Task 2: Interactive JavaScript and ReactJS Application Development** project.

---

## 📌 Project Overview

Financial literacy is an important life skill, but many learners find traditional financial education difficult to understand or apply in practical situations.

FinQuest provides a simple and interactive environment where users can:

- Learn fundamental personal finance concepts
- Explore structured financial learning modules
- Test their knowledge through quizzes
- Calculate monthly budgets
- Estimate savings goals
- Explore sample budget allocations
- Track learning progress
- Review quiz performance
- Continue their learning progress after refreshing the browser

The application focuses on creating a clean, practical, and user-friendly experience rather than presenting financial information as a static website.

---

## 🎯 Objectives

The main objectives of FinQuest are:

- To develop an interactive ReactJS-based financial learning platform.
- To introduce users to basic saving and budgeting concepts.
- To provide structured learning modules for financial topics.
- To reinforce learning through interactive quizzes.
- To provide practical financial calculators.
- To implement client-side form validation.
- To track user learning progress.
- To demonstrate React state management and reusable components.
- To use browser localStorage for maintaining user progress.
- To create a responsive interface for desktop, tablet, and mobile devices.
- To demonstrate practical JavaScript ES6 and ReactJS concepts.

---

## ✨ Key Features

### 📚 Interactive Learning Modules

FinQuest provides structured learning modules covering essential personal finance topics.

Example topics include:

- Saving Fundamentals
- Budgeting Basics
- Emergency Funds
- Financial Goals
- Smart Spending
- Building a Saving Habit

Each module provides:

- Topic introduction
- Key concepts
- Practical examples
- Common mistakes
- Completion tracking

Users can mark modules as completed and their progress is saved locally.

---

### 🧠 Interactive Finance Quiz

The quiz section allows users to test their understanding of personal finance concepts.

Features include:

- Multiple-choice questions
- Four options per question
- Answer validation
- Question navigation
- Progress indicator
- Score calculation
- Accuracy calculation
- Correct and incorrect answer tracking
- Quiz result screen
- Review answers
- Retake quiz
- Optional hints

Quiz performance is stored locally so users can track their previous attempts.

---

### 🧮 Smart Financial Calculators

FinQuest includes practical calculators to help users apply concepts from the learning modules.

#### 1. Monthly Budget Calculator

Users can enter:

- Monthly income
- Housing expenses
- Food expenses
- Transportation expenses
- Education expenses
- Other expenses

The application calculates:

- Total expenses
- Remaining balance
- Expense percentage

---

#### 2. Savings Goal Calculator

Users can enter:

- Savings goal
- Current savings
- Monthly contribution

The application estimates the number of months required to reach the savings goal.

The calculator also handles cases where the user has already reached the target.

---

#### 3. Budget Allocation Calculator

Users enter their monthly income and receive a sample educational allocation across:

- Needs
- Wants
- Savings

The allocation is presented strictly as an educational example and not as universal financial advice.

---

### 📊 Progress Dashboard

The Progress page provides a summary of the user's learning activity.

It displays information such as:

- Completed learning modules
- Total quiz attempts
- Average quiz score
- Overall learning progress
- Recent activity

Progress indicators help users understand their learning journey.

---

### 💾 Local Data Persistence

FinQuest uses browser `localStorage` to preserve important user data.

Stored information can include:

- Completed modules
- Quiz attempts
- Latest quiz score
- Best quiz score
- Learning progress
- Recent activity

This allows progress to remain available even after refreshing the browser.

---

### ✅ Form Validation

The application includes client-side validation for financial calculators.

Examples include:

- Income cannot be negative.
- Expenses cannot be negative.
- Savings goals must be greater than zero.
- Monthly contribution must be greater than zero.
- Current savings cannot be negative.

Validation messages are displayed directly near the relevant input fields.

---

### 📱 Responsive Design

FinQuest is designed to work across different screen sizes:

- Desktop
- Laptop
- Tablet
- Mobile

The layout automatically adapts to smaller screens while maintaining usability and readability.

---

## 🎨 UI / Design Philosophy

FinQuest follows a clean and professional financial-product visual style.

The design focuses on:

- Minimal interface
- Clear typography
- Consistent spacing
- Professional financial branding
- Subtle borders
- Controlled use of shadows
- Responsive layouts
- Accessible interface elements

The application intentionally avoids excessive gradients, neon colors, futuristic visuals, glassmorphism, and unnecessary decorative effects.

### Color Palette

| Purpose | Color |
|---|---|
| Primary Dark Green | `#173F35` |
| Secondary Green | `#2F6B5B` |
| Accent Gold | `#C9A227` |
| Background | `#F7F5EF` |
| Surface | `#FFFFFF` |
| Primary Text | `#1F2933` |
| Secondary Text | `#667085` |
| Border | `#E5E7EB` |
| Success | `#2E7D5B` |
| Warning | `#B7791F` |
| Error | `#B54747` |

---

## 🛠️ Technologies Used

### Frontend

- **ReactJS** – Building the interactive user interface
- **JavaScript ES6+** – Application logic and interactivity
- **HTML5** – Semantic page structure
- **CSS3** – Styling and responsive layouts

### React Technologies

- React Components
- JSX
- `useState`
- `useEffect`
- React Props
- React Router
- Reusable components

### Browser Technologies

- LocalStorage
- Client-side form validation

### Development Tools

- Vite
- Visual Studio Code / Antigravity
- Git
- GitHub

### Icons

- Lucide React

---

## 🏗️ Application Pages

FinQuest contains five main application views.

### 1. Home

Provides:

- Introduction to FinQuest
- Learning overview
- Feature highlights
- Continue Learning section
- Quick access to Quiz and Learning modules

### 2. Learn

Provides:

- Learning categories
- Financial education modules
- Module details
- Completion tracking

### 3. Finance Quiz

Provides:

- Interactive questions
- Answer validation
- Score calculation
- Progress tracking
- Quiz results
- Review and retry functionality

### 4. Smart Calculators

Provides:

- Monthly Budget Calculator
- Savings Goal Calculator
- Budget Allocation Calculator

### 5. Progress

Provides:

- Learning completion
- Quiz performance
- Overall progress
- Recent activity

---

## 📂 Project Structure

```text
FinQuest/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── LearningCard.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── QuizOption.jsx
│   │   ├── StatCard.jsx
│   │   └── CalculatorCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Learn.jsx
│   │   ├── Quiz.jsx
│   │   ├── Calculators.jsx
│   │   └── Progress.jsx
│   │
│   ├── data/
│   │   ├── learningModules.js
│   │   └── quizQuestions.js
│   │
│   ├── utils/
│   │   └── storage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
