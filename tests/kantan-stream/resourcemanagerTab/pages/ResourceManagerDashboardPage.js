const { expect } = require('@playwright/test');
const resourceManagerDashboardPageLocators = require('../components/ResourceManagerDashboardPageLocators');

class ResourceManagerDashboardPage {
    constructor(page, isMobile) {
        this.page = page;
        this.isMobile = isMobile;
    }
    async clickOnAccountLinguists() {
        await expect(this.page.locator(resourceManagerDashboardPageLocators.accountLinguists)).toBeVisible();
        await this.page.locator(resourceManagerDashboardPageLocators.accountLinguists).click();
    }
    async clickOnAccountManagers() {
        await expect(this.page.locator(resourceManagerDashboardPageLocators.accountManagers)).toBeVisible();
        await this.page.locator(resourceManagerDashboardPageLocators.accountManagers).click();

    }  async clickOnLinguistDropdown() {
        await expect(this.page.locator(resourceManagerDashboardPageLocators.LinguistDropdown).nth(0)).toBeVisible();
        await this.page.locator(resourceManagerDashboardPageLocators.LinguistDropdown).nth(0).click();
    }
    async clickOnChannelDropdown() {
        await expect(this.page.locator(resourceManagerDashboardPageLocators.channelDropdown)).toBeVisible();
        await this.page.locator(resourceManagerDashboardPageLocators.channelDropdown).click();
    }
    async clickOnChannelSelect() {
        await expect(this.page.locator(resourceManagerDashboardPageLocators.channelSelect).nth(0)).toBeVisible();
        await this.page.locator(resourceManagerDashboardPageLocators.channelSelect).nth(0).click();
    }
    async clickOnEnableChannel() {
        await expect(this.page.locator(resourceManagerDashboardPageLocators.enableChannel)).toBeVisible();
        await this.page.locator(resourceManagerDashboardPageLocators.enableChannel).click();
    }
    async clickOnDisableChannel() {
        await expect(this.page.locator(resourceManagerDashboardPageLocators.disableChannel)).toBeVisible();
        await this.page.locator(resourceManagerDashboardPageLocators.disableChannel).click();
    }
}

module.exports = { ResourceManagerDashboardPage };

