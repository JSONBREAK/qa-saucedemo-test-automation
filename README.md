# QA Automation - SauceDemo (Playwright)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Playwright](https://img.shields.io/badge/Playwright-blueviolet?logo=playwright)
![E2E Automation](https://img.shields.io/badge/E2E-Automation-orange)



## 📌 Project Overview

This project implements an automated testing framework for the SauceDemo web application using Playwright and JavaScript.

It demonstrates:

- Page Object Model (POM) architecture
- Clear test separation (Smoke vs Regression)
- Core user flow validation
- Negative scenario coverage
- Parallel execution support

The focus is on clean structure, maintainability, and reliable test automation. The framework is designed to simulate real-world QA automation practices with maintainability and scalability in mind.

## 🧠 Test Strategy

### Smoke Tests
- Validate critical purchase flow
- Ensure core functionality is stable after changes

### Regression Tests
- Authentication scenarios (valid / invalid / locked user)
- Inventory actions (add/remove items)
- Cart behavior validation
- Checkout validation errors
- Edge and negative scenarios

Test prioritization follows the main business flow:

Login → Inventory → Cart → Checkout

---

## 🧩 Test Design Approach
- Black-box testing principles
- Business-flow-driven test scenarios
- Risk-based prioritization (Login & Checkout as critical paths)
- Centralized and controlled test data management
- Independent and isolated test execution

---

## 🌍 Test Environment
- Base URL: [https://www.saucedemo.com](https://www.saucedemo.com)
- Browser: Chromium
- Headed execution for local debugging
- Parallel execution enabled

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

Run smoke suite only:

```sh
npx playwright test --project=smoke
```

Run regression suite only:

```sh
npx playwright test --project=regression
```

Run with headed browser:

```sh
npx playwright test --headed
```

---

## 📊 Test Report

After execution, view the HTML report:

```sh
npx playwright show-report
```

---

## 🗂 Project Structure
```
qa-saucedemo-test-automation/
├── docs/
│   └── Risk-based-thinking.md
├── fixtures/
│   └── users.js
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
├── playwright.config.js
├── package.json
└── README.md
```
---

## ⚙ Configuration

The project uses **Playwright projects** to separate test suites:

**Smoke Project:**
- Test directory: `./tests/smoke`
- Executes critical path validation
- 1 test covering the complete purchase flow

**Regression Project:**
- Test directory: `./tests/regression`
- Executes comprehensive test scenarios
- 10+ tests covering login, inventory, cart, and checkout

Both projects use:
- Browser: Chromium
- Headed execution for local debugging
- Configurable headless mode for CI usage
- Retries: 1
- Parallel execution enabled

---

## 🧪 Test Stability & Design Principles
- No hard-coded waits
- Explicit locator strategies
- Independent and isolated test execution
- Retry configuration for handling transient failures
- Clean separation between test logic and page objects

---

## Future Improvements
- Cross-browser execution (Firefox, WebKit)
- Environment configuration (.env support)
- CI pipeline optimization with test artifacts

