
require('@playwright/test');
const mTProvidersPageLocators = require('../components/mTProvidersPageLocators');

class MTProvidersPage {
  constructor(page, isMobile) {
  this.page = page;
  this.isMobile = isMobile;
  }

  async clickOnMTProviders() {
    await this.page.locator(mTProvidersPageLocators.mtProviders).click();
  }
}

module.exports = { MTProvidersPage };


