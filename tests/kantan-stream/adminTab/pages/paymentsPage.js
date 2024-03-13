

const { expect } = require('@playwright/test');
const paymentsPageLocators = require('../components/paymentsPageLocators');

class PaymentsPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }
  async clickOnPayments() {
    await expect(this.page.locator(paymentsPageLocators.payments)).toBeVisible();
    await this.page.locator(paymentsPageLocators.payments).click();
  }
  async clickOnBalancesSavePageToExcel() {
    await expect(this.page.locator(paymentsPageLocators.communityBalancesSavePageToExcel).nth(1)).toBeVisible();
    await this.page.locator(paymentsPageLocators.communityBalancesSavePageToExcel).nth(1).click();
  }
  async clickOnRequested() {
    await expect(this.page.locator(paymentsPageLocators.requestedPayments)).toBeVisible();
    await this.page.locator(paymentsPageLocators.requestedPayments).click();
  }
  async clickOnRequestedSavePageToexcel() {
    await expect(this.page.locator(paymentsPageLocators.requestedPaymentsSavePageToExcel).nth(30)).toBeVisible();
    await this.page.locator(paymentsPageLocators.requestedPaymentsSavePageToExcel).nth(30).click();
  }
  async clickOnProcessed() {
    await expect(this.page.locator(paymentsPageLocators.processed)).toBeVisible();
    await this.page.locator(paymentsPageLocators.processed).click();
  }
  async clickOnProcessedStats() {
    await this.page.locator(paymentsPageLocators.processedStats).click();
    await this.page.keyboard.press('ArrowDown');
    await this.page.locator(paymentsPageLocators.processedStats).click();
    await this.page.keyboard.press('ArrowUp');
  }
  async clickOnProcessedAll() {
    await expect(this.page.locator(paymentsPageLocators.processedAll)).toBeVisible();
    await this.page.locator(paymentsPageLocators.processedAll).click();
  }
  async clickOnProcessedComplete() {
    await expect(this.page.locator(paymentsPageLocators.processedComplete)).toBeVisible();
    await this.page.locator(paymentsPageLocators.processedComplete).click();
  }
  async clickOnProcessedCancelled() {
    await expect(this.page.locator(paymentsPageLocators.processedCancelled)).toBeVisible();
    await this.page.locator(paymentsPageLocators.processedCancelled).click();
  }
  async clickOnProcessedRefund() {
    await expect(this.page.locator(paymentsPageLocators.processedRefund)).toBeVisible();
    await this.page.locator(paymentsPageLocators.processedRefund).click();
  }
  async clickOnProcessedSavePageToExcel() {
    await expect(this.page.locator(paymentsPageLocators.processedSavePageToExcel).nth(31)).toBeVisible();
    await this.page.locator(paymentsPageLocators.processedSavePageToExcel).nth(31).click();
  }
  async clickOnOther() {
    await expect(this.page.locator(paymentsPageLocators.other)).toBeVisible();
    await this.page.locator(paymentsPageLocators.other).click();
  }
  async clickOnOtherStats() {
    await expect(this.page.locator(paymentsPageLocators.otherStats)).toBeVisible();
    await this.page.locator(paymentsPageLocators.otherStats).click();
    await this.page.keyboard.press('ArrowDown');
    await this.page.locator(paymentsPageLocators.otherStats).click();
    await this.page.keyboard.press('ArrowUp');
  }
  async clickOnOtherAll() {
    await expect(this.page.locator(paymentsPageLocators.otherAll)).toBeVisible();
    await this.page.locator(paymentsPageLocators.otherAll).click();
  }
  async clickOnOtherDev() {
    await expect(this.page.locator(paymentsPageLocators.otherDev)).toBeVisible();
    await this.page.locator(paymentsPageLocators.otherDev).click();
  }
  async clickOnOtherError() {
    await expect(this.page.locator(paymentsPageLocators.otherError)).toBeVisible();
    await this.page.locator(paymentsPageLocators.otherError).click();
  }
}

module.exports = { PaymentsPage };



