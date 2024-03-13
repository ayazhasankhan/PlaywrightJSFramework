const { expect } = require('@playwright/test');
const resourceManagerPriceListsPageLocators = require('../components/ResourceManagerPriceListsPageLocators');

class ResourceManagerPriceListsPage {
    constructor(page, isMobile) {
        this.page = page;
        this.isMobile = isMobile;
    }

    async clickOnPriceLists() {
        await expect(this.page.locator(resourceManagerPriceListsPageLocators.priceLists)).toBeVisible();
        await this.page.locator(resourceManagerPriceListsPageLocators.priceLists).click();
    }
}

module.exports = { ResourceManagerPriceListsPage };


