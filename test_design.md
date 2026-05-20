# Test Design Document

## Target Application
- **URL:** https://www.saucedemo.com/ (Swag Labs)
- **Scope:** Core e-commerce user journeys and authentication.

## Key Features & Risks Focused On

### 1. Authentication (Core Risk: Unauthorized Access & Poor UX)
- **Reasoning:** Login is the gateway to the application. If it fails, users cannot access the shop. Conversely, unauthorized access or lack of proper error messages for blocked/invalid users harms application security and user experience.
- **Validation:** - Validated successful login with `standard_user`.
  - Validated proper error handling for invalid credentials.
  - Validated specific error handling for a `locked_out_user`.

### 2. Shopping Cart Functionality (Core Risk: Revenue Loss)
- **Reasoning:** In e-commerce, the inability to add products to the cart or losing cart state during navigation directly results in lost revenue.
- **Validation:**
  - Added an item to the cart and verified that the UI badge increments and the correct product appears on the cart page.
  - Verified that the cart state persists when navigating backwards in the browser history.

### 3. End-to-End Checkout Flow (Core Risk: Process Abandonment)
- **Reasoning:** The checkout pipeline must be flawless. Any brittle element or failure in checkout prevents users from completing purchases.
- **Validation:**
  - Conducted a full end-to-end test: Login -> Add item -> Proceed to Cart -> Fill Information -> Finish Order -> Verify completion message (`Thank you for your order!`).

## Engineering & Selector Strategy
- **Framework:** Playwright + TypeScript was chosen for its native speed, auto-waiting capabilities, and strong typing.
- **Locators:** Brittle text or XPath selectors were strictly avoided. The suite utilizes the application's native `data-test` attributes (e.g., `page.locator('[data-test="username"]')`), ensuring maximum stability and maintainability against UI layout changes.
- **Structure:** Page Object Model (POM) separates the structural selectors and actions from the actual assertions within tests.
