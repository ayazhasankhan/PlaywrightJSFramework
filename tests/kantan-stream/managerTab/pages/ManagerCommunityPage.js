const { expect } = require('@playwright/test');
const managerCommunityPageLocators = require('../components/ManagerCommunityPageLocators');

class ManagerCommunityPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnCommunityTab() {
    await expect(this.page.locator(managerCommunityPageLocators.communityTab)).toBeVisible({timeout:30000});
    await this.page.locator(managerCommunityPageLocators.communityTab).click();
  }

  async clickOnAdd() {
    await expect(this.page.getByRole('button', { name: managerCommunityPageLocators.add }).first()).toBeVisible();
    await this.page.getByRole('button', { name: managerCommunityPageLocators.add }).first().click();
  }

  async enterEmail(emailId) {
    await expect(this.page.getByLabel('Email:', { exact: true })).toBeVisible();
    await this.page.getByLabel('Email:', { exact: true }).fill(emailId);
  }

  async selectRole(role) {
    await expect(this.page.getByRole('combobox', { name: managerCommunityPageLocators.role }).getByText(managerCommunityPageLocators.role)).toBeVisible();
    await this.page.getByRole('combobox', { name: managerCommunityPageLocators.role }).getByText(managerCommunityPageLocators.role).click();
    await this.page.getByRole('treeitem', { name: role }).click();
  }

  async selectNativeLanguage(nativeLanguage) {
    await expect(this.page.locator(managerCommunityPageLocators.nativeLanguage)).toBeVisible();
    await this.page.locator(managerCommunityPageLocators.nativeLanguage).click();
    await this.page.getByRole('textbox').nth(4).fill(nativeLanguage);
    await this.page.getByRole('treeitem', { name: nativeLanguage }).click();
  }

  async selectSecondryLanguage(secondaryLanguage) {
    await expect(this.page.getByPlaceholder(managerCommunityPageLocators.secondaryLanguageDrpdwn)).toBeVisible();
    await this.page.getByPlaceholder(managerCommunityPageLocators.secondaryLanguageDrpdwn).click();
    await this.page.getByPlaceholder(managerCommunityPageLocators.secondaryLanguageDrpdwn).fill(secondaryLanguage);
  }

  async selectRecruitmentCampaign() {
    await expect(this.page.getByText(managerCommunityPageLocators.recruitmentCampaign)).toBeVisible();
    await this.page.getByText(managerCommunityPageLocators.recruitmentCampaign).click();
    await this.page.getByRole('treeitem', { name: 'AyazTestRecruitmentCampaign' }).click();
  }

  async selectManager() {
    await this.page.getByPlaceholder('Select Manager(s)').click();
    await this.page.getByPlaceholder('Select Manager(s)').fill('28120');
    await this.page.keyboard.press('Enter');
  }

  async clickOnCreate() {
    await expect(this.page.getByText(managerCommunityPageLocators.create)).toBeVisible();
    await this.page.getByText(managerCommunityPageLocators.create).click();
  }

  async clickOnSavePageToExcel() {
    await expect(this.page.getByRole('button', {name: managerCommunityPageLocators.savePageToExcel})).toBeVisible();
    await this.page.getByRole('button', {name: managerCommunityPageLocators.savePageToExcel}).click();
  }

  async clickOnEditUserIcon() {
    await expect(this.page.getByTitle(managerCommunityPageLocators.userTitle).first()).toBeVisible();
    await this.page.getByTitle(managerCommunityPageLocators.userTitle).first().click();
  }

  async clickOnSave() {
    await expect(this.page.locator(managerCommunityPageLocators.updateUser)).toBeVisible();
    await this.page.locator(managerCommunityPageLocators.updateUser).click();
  }
  async clickOnUserAvailability() {
    await expect(this.page.locator(managerCommunityPageLocators.userAvailability)).toBeVisible();
    await this.page.locator(managerCommunityPageLocators.userAvailability).click();
  }

  async validateAvailabilityUpdated() {
    await expect(this.page.locator(managerCommunityPageLocators.availabilityUpdated).first()).toBeVisible({timeout:30000});
  }
}
module.exports = { ManagerCommunityPage };
