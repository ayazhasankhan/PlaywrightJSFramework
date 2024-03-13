const { expect } = require('@playwright/test');
const connectorSettingsPageLocators = require('../components/connectorSettingsPageLocators');

class ConnectorSettingsPage {
    constructor(page, isMobile) {
        this.page = page;
        this.isMobile = isMobile;
    }
    async clickOnConnectorSettings() {
        await expect(this.page.locator(connectorSettingsPageLocators.connectorSettings)).toBeVisible();
        await this.page.locator(connectorSettingsPageLocators.connectorSettings).click();
    }

    async clickOnConnectorSettingsAll() {
        await expect(this.page.locator(connectorSettingsPageLocators.connectorSettingsAll)).toBeVisible();
        await this.page.locator(connectorSettingsPageLocators.connectorSettingsAll).click();
    }

    async clickOnConnectorSettingsME() {
        await expect(this.page.locator(connectorSettingsPageLocators.connectorSettingsMe)).toBeVisible();
        await this.page.locator(connectorSettingsPageLocators.connectorSettingsMe).click();
    }

    async clickOnConnectorSettingsXTM() {
        await expect(this.page.locator(connectorSettingsPageLocators.connectorSettingsXTM)).toBeVisible();
        await this.page.locator(connectorSettingsPageLocators.connectorSettingsXTM).click();
    }

    async clickOnConnectorSettingsZendeskSupport() {
        await expect(this.page.locator(connectorSettingsPageLocators.connectorSettingsZendeskChat)).toBeVisible();
        await this.page.locator(connectorSettingsPageLocators.connectorSettingsZendeskChat).click();
    }

    async clickOnConnectorSettingsZendeskChat() {
        await expect(this.page.locator(connectorSettingsPageLocators.connectorSettingsZendeskChat)).toBeVisible();
        await this.page.locator(connectorSettingsPageLocators.connectorSettingsZendeskChat).click();
    }

    async clickOnConnectorSettingsMemoQ() {
        await expect(this.page.locator(connectorSettingsPageLocators.connectorSettingsMemoQ)).toBeVisible();
        await this.page.locator(connectorSettingsPageLocators.connectorSettingsMemoQ).click();
    }
}
module.exports = {ConnectorSettingsPage};




