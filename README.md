# Customer Corner CMS Automation Testing

## Overview

This repository contains an automation testing project built using **Playwright** for the **Customer Corner CMS (Content Management System)**.

Customer Corner CMS is an administration portal used to configure and manage the **Customer Corner**, a digital self-service platform that enables customers to independently access insurance services, manage policies, update personal information, and view important account details anytime and anywhere.

The automation tests are designed to validate critical CMS functionalities and ensure configuration changes are working as expected before being released to production.

---

## Project Objectives

- Automate regression testing for Customer Corner CMS.
- Reduce manual testing effort.
- Improve testing consistency and execution speed.
- Detect defects earlier during development.
- Validate CMS configuration and management features.

---

## Technology Stack

- Playwright
- JavaScript (CommonJS)
- Node.js
- Playwright Test Runner

---

## Project Structure

```
CMS Cuco
│
├── Automation/
│   ├── example.spec.ts
│   ├── Master Product Hospital.spec.ts
│   ├── Menu Master Bank.spec.ts
│   ├── Menu Product Channel.spec.ts
│   ├── Menu User.spec.ts
│   ├── Product Info.spec.ts
│   └── test-1.spec.ts
│
├── Element/
│   └── Element.js
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Test Coverage

This project automates testing for several CMS modules, including:

- User Management
- Master Bank Management
- Product Information
- Product Channel Configuration
- Master Product Hospital
- General CMS Navigation
- Functional Validation

---

## Prerequisites

Before running the project, ensure the following software is installed:

- Node.js
- Playwright
- Supported browser (Chromium, Firefox, or WebKit)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/customer-corner-cms-automation.git
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test "Automation/Menu User.spec.ts"
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Generate HTML report:

```bash
npx playwright show-report
```

---

## Automation Scope

The automated scenarios include:

- Login validation
- CMS menu navigation
- CRUD validation
- Form validation
- Functional testing
- Regression testing
- UI verification

---

## Benefits

- Faster regression testing
- Consistent execution
- Reduced human error
- Improved software quality
- Easier maintenance of repetitive test scenarios

---

## Notes

This repository is intended for learning and portfolio purposes. Sensitive information such as credentials, environment configurations, and company-specific data has been excluded.

---

## Author

**Tegar Pandji Asmoro**

Quality Assurance Engineer

Specialized in:
- Manual Testing
- Automation Testing
- API Testing
- SQL Validation
- Playwright
- Postman