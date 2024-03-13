const { expect } = require('@playwright/test');
const managerKantanWidgetsPageLocators = require('../components/ManagerKantanWidgetsPageLocators');

class ManagerKantanWidgetsPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnManagerKantanWidgetsTab() {
    await expect(this.page.locator(managerKantanWidgetsPageLocators.managerKantanWidgetsTab)).toBeVisible();
    await this.page.locator(managerKantanWidgetsPageLocators.managerKantanWidgetsTab).click();
  }
}

module.exports = { ManagerKantanWidgetsPage };
