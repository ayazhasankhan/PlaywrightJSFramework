const { expect } = require('@playwright/test');
const projectTypesPageLocators = require('../components/projectTypesPageLocators');

class ProjectTypesPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnProjectTypes() {
    await this.page.locator(projectTypesPageLocators.projectType).click();
  }
  async clickOnProjectTypesRefresh() {
    await this.page.locator(projectTypesPageLocators.projectTypeRefresh).click();
  }
  async clickOnProjectTypesNew() {
    await this.page.locator(projectTypesPageLocators.projectTypeNew).click();
  }
  async clickOnProjectTypesAll() {
    await this.page.locator(projectTypesPageLocators.projectTypeAll).click();
  }
  async clickOnProjectTypesDocExpressOptions() {

    await this.page.locator(projectTypesPageLocators.projectTypeDocExpressOptions).click();
  }
  async clickOnProjectTypesAutomaticExports() {

    await this.page.locator(projectTypesPageLocators.projectTypeAutomaticExports).click();
  }
  async validateText(text) {
    await expect(this.page.getByText(text).first()).toContainText(text);
  }
  async projectTypesSearchBar(projectTYpesSearch = '11') {
    await expect(this.page.locator(projectTypesPageLocators.projectTypeSearchBar)).toBeVisible();
    await this.page.locator(projectTypesPageLocators.projectTypeSearchBar).fill(projectTYpesSearch);
  }
  async validateTick() {
    await expect(this.page.locator('[title="Doc Express Project Type option"]').first()).toBeVisible();
  }
}


module.exports = { ProjectTypesPage };