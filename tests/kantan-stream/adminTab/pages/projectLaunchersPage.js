const { expect } = require('@playwright/test');
const projectLaunchersPageLocators = require('../components/projectLaunchersPageLocators');

class ProjectLaunchersPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }
  async clickOnProjectLaunchers() {
    await this.page.locator(projectLaunchersPageLocators.projectLaunchers).click();
  }
  async clickOnProjectLaunchersRefresh() {
    await expect(this.page.locator(projectLaunchersPageLocators.projectLaunchersRefresh)).toBeVisible();
    await this.page.locator(projectLaunchersPageLocators.projectLaunchersRefresh).click();
  }
  async clickOnProjectLaunchersAll() {
    await expect(this.page.locator(projectLaunchersPageLocators.projectLaunchersAll)).toBeVisible();
    await this.page.locator(projectLaunchersPageLocators.projectLaunchersAll).click();
  }
}
module.exports = { ProjectLaunchersPage };