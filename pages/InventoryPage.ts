import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private titleSpan: Locator;
  private shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleSpan = page.locator('[data-test="title"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async getTitle() {
    return this.titleSpan;
  }

  async addToCart(productName: string) {
    // Muunnetaan tuotteen nimi sellaiseksi kuin se on data-test -attribuutissa (esim. "Sauce Labs Backpack" -> "add-to-cart-sauce-labs-backpack")
    const formattedName = productName.toLowerCase().replace(/ /g, '-');
    await this.page.locator(`[data-test="add-to-cart-${formattedName}"]`).click();
  }

  async getCartCount() {
    if (await this.shoppingCartBadge.isVisible()) {
      return await this.shoppingCartBadge.innerText();
    }
    return '0';
  }

  async goToCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}