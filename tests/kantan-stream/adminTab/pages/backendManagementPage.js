

require('@playwright/test');
const backendManagementPageLocators = require('../components/backendManagementPageLocators');

class BackendManagementPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }
  async clickOnBackendManagement () {
    await this.page.locator(backendManagementPageLocators.backendManagement).click();
  }  
}

module.exports = {  BackendManagementPage };




