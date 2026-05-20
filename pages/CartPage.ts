import { Page, Locator } from '@playwright/test';

export class CartPage {
  private page: Page;
  private cartItems: Locator;
  private checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async getCartItemsCount() {
    return await this.cartItems.count();
  }

  async getFirstItemName() {
    return await this.cartItems.first().locator('[data-test="inventory-item-name"]').innerText();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}