# UI Test Automation Suite - Saucedemo

This repository contains an automated UI test suite for [Saucedemo](https://www.saucedemo.com/) built with **Playwright** and **TypeScript** using the **Page Object Model (POM)** design pattern.

## Prerequisites

Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project root directory and install the dependencies:
```
Bash
npm install
```
3 Install the required Playwright browsers:
```
Bash
npx playwright install --with-deps
```
Running the Tests
To execute the entire test suite in headless mode (default), run:
```
Bash
npx playwright test
```
Additional Commands
Run tests in headed mode (visible browser):
```
Bash
npx playwright test --headed
```
Show HTML Test Report:
```
Bash
npx playwright show-report
```
