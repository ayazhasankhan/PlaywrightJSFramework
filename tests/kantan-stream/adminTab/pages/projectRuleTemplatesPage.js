const { expect } = require('@playwright/test');
const projectRuleTemplatePageLocators = require('../components/projectRuleTemplatePageLocators');

class ProjectRuleTemplatesPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }
  async clickOnProjectRuleTemplates() {
    await this.page.locator(projectRuleTemplatePageLocators.projectRuleTemplate).click();
  } async clickOnProjectRuleTemplatesRefresh() {
    await this.page.locator(projectRuleTemplatePageLocators.projectRuleTemplateRefresh).click();
  }
  async clickOnProjectRuleTemplatesEditProperties() {
    await this.page.locator(projectRuleTemplatePageLocators.projectRuleTemplatesEditProperties).nth(0).click();
  }
  async clickOnProjectRuleTemplatesEditPropertiesSubmit() {
    await this.page.locator(projectRuleTemplatePageLocators.projectRuleTemplatesEditPropertiesSubmit).click();
  }
  async clickOnProjectRuleTemplatesViewItem() {
    await this.page.locator(projectRuleTemplatePageLocators.view).nth(0).click();
  }
}

module.exports = { ProjectRuleTemplatesPage }; 