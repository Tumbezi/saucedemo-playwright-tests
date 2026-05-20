# UI Test Automation Suite - Saucedemo

This repository contains an automated UI test suite for [Saucedemo](https://www.saucedemo.com/) built with **Playwright** and **TypeScript** using the **Page Object Model (POM)** design pattern.

## Prerequisites

Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project root directory and install the dependencies:
```
npm install
```
3 Install the required Playwright browsers:
```
npx playwright install --with-deps
```
Running the Tests
To execute the entire test suite in headless mode (default), run:
```
npx playwright test
```
Additional Commands
Run tests in headed mode (visible browser):
```
npx playwright test --headed
```
Show HTML Test Report:
```
npx playwright show-report
```
You can also run the tests specifically for one browser. With following command:
```
npx playwright test --project=chromium --reporter=list
```
Outcome should look something like this in the terminal, when the tests have passed succesfully.
<img width="990" height="172" alt="image" src="https://github.com/user-attachments/assets/456cece7-391a-4127-8dc1-e3c803d2da99" />


