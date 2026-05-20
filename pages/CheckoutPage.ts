import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  
  // Vaihe 1: Lomake
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private postalCodeInput: Locator;
  private continueButton: Locator;

  // Vaihe 2: Yhteenveto
  private finishButton: Locator;

  // Vaihe 3: Valmis
  private completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async getCompleteHeader() {
    return this.completeHeader;
  }
}