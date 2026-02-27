# QA Automation - SauceDemo (Playwright)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Playwright](https://img.shields.io/badge/Playwright-blueviolet?logo=playwright)
![E2E Automation](https://img.shields.io/badge/E2E-Automation-orange)



## 📌 Project Overview

This project contains automated end-to-end tests for the SauceDemo web application using Playwright and JavaScript.

The goal of this project is to practice and demonstrate:

- Page Object Model (POM) structure
- Test organization (Smoke vs Regression)
- Core user flow validation
- Negative scenario handling
- Parallel test execution using Playwright

This project focuses on clean structure and maintainable test design.

## 🧠 Test Strategy

### Smoke Tests
- Validate critical purchase flow
- Ensure application is usable after build

### Regression Tests
- Login scenarios (valid / invalid / locked user)
- Inventory actions (add/remove items)
- Cart behavior validation
- Checkout validation errors
- Negative authentication and edge cases

### Performance Validation
- Use `performance_glitch_user` to observe delayed response handling

Tests are prioritized based on core business flow:  
Login → Inventory → Cart → Checkout

---

## 🧩 Test Design Approach
- Black-box testing principles
- Test cases derived from main user flows
- Prioritization based on business impact (Login & Checkout prioritized)
- Centralized test data management

---

## 🌍 Test Environment
- Base URL: [https://www.saucedemo.com](https://www.saucedemo.com)
- Browser: Chromium (default Playwright)
- Headless mode configurable
- Parallel execution enabled via Playwright configuration

---

## 🛠 Tech Stack
- Playwright
- JavaScript (ES6)
- Node.js
- npm

---

## 📦 Installation

```sh
git clone https://github.com/JSONBREAK/qa-saucedemo-test-automation
cd qa-saucedemo-test-automation
npm install
npx playwright install
```

---

## ▶️ How to Run

Run all tests:

```sh
npx playwright test
```

Run smoke suite:

```sh
npx playwright test tests/smoke
```

Run regression suite:

```sh
npx playwright test tests/regression
```

Run with UI:

```sh
npx playwright test --headed
```

---

## 📊 Test Report

After execution:

```sh
npx playwright show-report
```

---

## 🗂 Project Structure
```
qa-saucedemo-test-automation/
├── docs/
│   └── Risk-based-thinking.md
├── pages/
│   ├── login.page.js
│   ├── inventory.page.js
│   ├── cart.page.js
│   └── checkout.page.js
├── tests/
│   ├── smoke/
│   │   └── happy-path.spec.js
│   └── regression/
│       ├── login.spec.js
│       ├── inventory.spec.js
│       ├── cart.spec.js
│       └── checkout-validation.spec.js
├── test-data/
│   └── users.js
├── playwright.config.js
├── package.json
└── README.md
```
---

## 🚀 Future Improvements
- Add GitHub Actions CI workflow
- Enable cross-browser execution
- Add environment configuration (.env)
- Improve test tagging strategy
- Add API + UI combined testing

---

