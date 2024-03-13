const { expect } = require('@playwright/test');
const managerStatisticsPageLocators = require('../components/ManagerStatisticsPageLocators');

class ManagerStatisticsPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnManagerStatisticsTab() {
    await expect(this.page.locator(managerStatisticsPageLocators.managerStatisticsTab)).toBeVisible();
    await this.page.locator(managerStatisticsPageLocators.managerStatisticsTab).click();
  }
}

module.exports = { ManagerStatisticsPage };
