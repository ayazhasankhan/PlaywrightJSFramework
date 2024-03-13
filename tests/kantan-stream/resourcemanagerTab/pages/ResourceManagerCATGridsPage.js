const { expect } = require('@playwright/test');
const resourceManagerCATGridsPageLocators = require('../components/ResourceManagerCATGridsPageLocators');

class ResourceManagerCATGridsPage {
    constructor(page, isMobile) {
        this.page = page;
        this.isMobile = isMobile;
    }
    async clickOnCatGrids() {
        await expect(this.page.locator(resourceManagerCATGridsPageLocators.catGrids)).toBeVisible();
        await this.page.locator(resourceManagerCATGridsPageLocators.catGrids).click();
    }
    async clickOnAdjustedWordCountsGrids() {
        await expect(this.page.locator(resourceManagerCATGridsPageLocators.adjustedWordCountsGrids)).toBeVisible();
        await this.page.locator(resourceManagerCATGridsPageLocators.adjustedWordCountsGrids).click();
    }
    async clickOnGridCategories() {
        await expect(this.page.locator(resourceManagerCATGridsPageLocators.gridCategories)).toBeVisible();
        await this.page.locator(resourceManagerCATGridsPageLocators.gridCategories).click();
    }
}

module.exports = { ResourceManagerCATGridsPage };

