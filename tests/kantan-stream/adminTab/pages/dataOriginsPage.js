
require('@playwright/test');
const dataOriginsPageLocators = require('../components/dataOriginsPageLocators');

class DataOriginsPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }
  async clickOnDataOrigins() {
    await this.page.locator(dataOriginsPageLocators.dataOrigins).click();
  }
  async clickOnDataOriginsAll() {
    await this.page.locator(dataOriginsPageLocators.dataOriginsAll).click();
  }
}

module.exports = { DataOriginsPage };

