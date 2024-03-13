const { expect } = require('@playwright/test');
const managerKantanConnectorsPageLocators = require('../components/ManagerKantanConnectorsPageLocators');

class ManagerKantanConnectorPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnManagerKantanWidgetsTab() {
    await expect(this.page.locator(managerKantanConnectorsPageLocators.managerKantanConnectorTab)).toBeVisible();
    await this.page.locator(managerKantanConnectorsPageLocators.managerKantanConnectorTab).click();
  }
}

module.exports = { ManagerKantanConnectorPage };
