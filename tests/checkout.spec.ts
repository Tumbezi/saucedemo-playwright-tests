import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Flow', () => {
  test('4. Checkout flow works from cart to complete order', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 1. Kirjaudutaan ja lisätään tuote
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();

    // 2. Siirrytään checkouttiin ja täytetään tiedot
    await cartPage.clickCheckout();
    await checkoutPage.fillInformation('Matti', 'Meikäläinen', '00100');

    // 3. Viimeistellään tilaus
    await checkoutPage.clickFinish();

    // 4. Varmistetaan onnistumisviesti
    const successHeader = await checkoutPage.getCompleteHeader();
    await expect(successHeader).toBeVisible();
    await expect(successHeader).toHaveText('Thank you for your order!');
  });
});