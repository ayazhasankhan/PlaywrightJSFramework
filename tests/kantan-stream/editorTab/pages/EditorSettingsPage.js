const { expect } = require('@playwright/test');
const editorSettingsPageLocator = require('../components/EditorSettingsPageLocator');

class EditorSettingsPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }
  
  async clickOnHeaderProfileImage() {
    await expect(this.page.locator(editorSettingsPageLocator.headerProfileImage)).toBeVisible();
    await this.page.locator(editorSettingsPageLocator.headerProfileImage).click();
  }

  async clickOnUserAvailability() {
    await expect(this.page.locator(editorSettingsPageLocator.userAvailability)).toBeVisible();
    await this.page.locator(editorSettingsPageLocator.userAvailability).click();
  }

  async clickOnHelp() {
   await expect(this.page.locator('span').filter({ hasText: '× User Availability Help' })).toBeVisible({timeout:30000});
   await this.page.locator('span').filter({ hasText: '× User Availability Help' }).click();
  }

  async validateText(text) {
    await expect(this.page.getByText(text).first()).toBeVisible();
    await expect(this.page.getByText(text).first()).toContainText(text);
  }

  async clickOnCloseHelp() {
    await expect(this.page.getByText(editorSettingsPageLocator.close)).toBeVisible();
    await this.page.getByText(editorSettingsPageLocator.close).click();
  }

  async makeMondayUnavailable() {
    await expect(this.page.locator(editorSettingsPageLocator.mondayColSwitch).getByText(editorSettingsPageLocator.available, { exact: true })).toBeVisible();
    await this.page.locator(editorSettingsPageLocator.mondayColSwitch).getByText(editorSettingsPageLocator.available, { exact: true }).click();
  }
 
  async makeMondayAvailable() {
    await expect(this.page.locator(editorSettingsPageLocator.mondayColSwitch).getByText(editorSettingsPageLocator.unavailable, { exact: true })).toBeVisible();
    await this.page.locator(editorSettingsPageLocator.mondayColSwitch).getByText(editorSettingsPageLocator.unavailable, { exact: true }).click();
  }
  
  async clickOnSubmit() {
    await expect(this.page.locator(editorSettingsPageLocator.submit)).toBeVisible();
    await this.page.locator(editorSettingsPageLocator.submit).click();
  }
  async clickOnDay() {
    var currentDate = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var month = monthNames[currentDate.getMonth()];
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var formattedDate = month + " " + day + ", " + year;
    await expect(this.page.getByLabel(formattedDate)).toBeVisible();
    await this.page.getByLabel(formattedDate).click();
  }

  async clickOnClearSelectedDateBtnModal() {
    await expect(this.page.locator(editorSettingsPageLocator.clearSelectedDateBtnModal)).toBeVisible();
    await this.page.locator(editorSettingsPageLocator.clearSelectedDateBtnModal).click();
  }

  async clickOnLanguagePair() {
    await expect(this.page.locator(editorSettingsPageLocator.languagePair)).toBeDisabled();
  }

}

module.exports = { EditorSettingsPage };
