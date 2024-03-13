const { expect } = require('@playwright/test');
const translatorsPageLocators = require('../components/translatorsPageLocators');

class TranslatorsPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  
  }
  async clickOnEditorDashboard() {
    await expect(this.page.locator(translatorsPageLocators.editorDashboard)).toBeVisible({timeout:30000});
    await this.page.locator(translatorsPageLocators.editorDashboard).click();
  }

  async clickOnViewAvailableFilesForPostEditing() {
    await expect(this.page.locator(translatorsPageLocators.viewAvailableFilesForPostEditing).nth(0)).toBeVisible();
    await this.page.locator(translatorsPageLocators.viewAvailableFilesForPostEditing).nth(0).click();
  }

  async clickOnPostEditFile() {
    await expect(this.page.locator(translatorsPageLocators.postEditFile)).toBeVisible();
    await this.page.locator(translatorsPageLocators.postEditFile).click();
  }

  async clickOnLockUnlockSegmentBtn() {
    await expect(this.page.locator(translatorsPageLocators.lockUnlockSegmentBtn)).toBeVisible();
    await this.page.locator(translatorsPageLocators.lockUnlockSegmentBtn).click();
  }

  async clickOnConfirmYes() {
    await expect(this.page.locator(translatorsPageLocators.confirmYes)).toBeVisible();
    await this.page.locator(translatorsPageLocators.confirmYes).click();
  }

  async clickOnConfirmYes() {
    await expect(this.page.locator(translatorsPageLocators.confirmYes)).toBeVisible();
    await this.page.locator(translatorsPageLocators.confirmYes).click();
  }
  
  async clickOnConfirmNo() {
    await expect(this.page.locator(translatorsPageLocators.corfirmNo)).toBeVisible();
    await this.page.locator(translatorsPageLocators.corfirmNo).click();
  }

  async clickOnReleaseLockedFile() {
    await expect(this.page.locator(translatorsPageLocators.releaseLockedFile)).toBeVisible();
    await this.page.locator(translatorsPageLocators.releaseLockedFile).click();
  }

  async clickOnViewAvailableFilesForReview() {
    await expect(this.page.locator(translatorsPageLocators.filesForReview).nth(0)).toBeVisible();
    await this.page.locator(translatorsPageLocators.filesForReview).nth(0).click();
  }

  async clickOnReviewFile() {
    await expect(this.page.locator(translatorsPageLocators.reviewFile)).toBeVisible();
    await this.page.locator(translatorsPageLocators.reviewFile).click();
  }

}

module.exports = { TranslatorsPage };




