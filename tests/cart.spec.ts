import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });
  
  test('3. Add item to cart and verify in cart page', async () => {
    const productName = 'Sauce Labs Backpack';
    await inventoryPage.addToCart(productName);
    
    // Varmistetaan ostoskorin iconin numero
    expect(await inventoryPage.getCartCount()).toBe('1');

    // Mennään ostoskoriin ja varmistetaan että tuote on siellä
    await inventoryPage.goToCart();
    expect(await cartPage.getCartItemsCount()).toBe(1);
    expect(await cartPage.getFirstItemName()).toBe(productName);
  });

  test('5. Cart persists correctly when navigating back', async ({ page }) => { // Lisätty { page } tänne
    await inventoryPage.addToCart('Sauce Labs Bike Light');
    expect(await inventoryPage.getCartCount()).toBe('1');

    await inventoryPage.goToCart();
    expect(await cartPage.getCartItemsCount()).toBe(1);

    // Navigoidaan takaisin kauppaan ja tarkistetaan että ostoskori pitää tilansa
    await page.goBack(); 
    expect(await inventoryPage.getCartCount()).toBe('1');
  });
});