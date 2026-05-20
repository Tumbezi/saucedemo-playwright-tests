import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
  });

  test('1. Successful login with valid user', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Varmistetaan, että päädyttiin tuotesivulle
    const title = await inventoryPage.getTitle();
    await expect(title).toBeVisible(); // Korjattu: toBeVisible
    await expect(title).toHaveText('Products');
  });

  test('2. Invalid login shows error message', async () => {
    await loginPage.login('standard_user', 'wrong_password');
    
    const error = await loginPage.getErrorMessage();
    await expect(error).toBeVisible(); // Korjattu: toBeVisible
    await expect(error).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

  test('6. Locked out user shows specific error', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    const error = await loginPage.getErrorMessage();
    await expect(error).toBeVisible(); // Korjattu: toBeVisible
    await expect(error).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });
});