const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ConnectorSettingsPage } = require('../pages/connectorSettingsPage');
const { Common } = require('../../utils/Common');

let loginPage;
let connectorSettingsPage;
let common;

test.describe('Connector Settings Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        connectorSettingsPage = new ConnectorSettingsPage(page, isMobile)
        common = new Common(page, isMobile);
    });

    const testData = {
        AdminEmail: 'cathald@kantanai.io',
        AdminPassword: 'Xb0x-T0p1!!',
    };


    test('Validate Connector Settings is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await connectorSettingsPage.clickOnConnectorSettings();
        await common.validateText('Connector Settings');
    })

    test('Validate Connector Settings all is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await connectorSettingsPage.clickOnConnectorSettings();
        await connectorSettingsPage.clickOnConnectorSettingsZendeskSupport();
        await common.validateText('Zendesk Support');
        await connectorSettingsPage.clickOnConnectorSettingsAll();
        await common.validateText('MemoQ');
    })

    test('Validate Connector Settings xtm is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await connectorSettingsPage.clickOnConnectorSettings();
        await connectorSettingsPage.clickOnConnectorSettingsXTM();
        await common.validateText('XTM Automated');
    })

    test('Validate Connector Settings zendesk support is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await connectorSettingsPage.clickOnConnectorSettings();
        await connectorSettingsPage.clickOnConnectorSettingsZendeskSupport();
        await common.validateText('Zendesk Support');
    })

    test('Validate Connector Settings zendesk chat is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await connectorSettingsPage.clickOnConnectorSettings();
        await connectorSettingsPage.clickOnConnectorSettingsZendeskChat();
        await common.validateText('Zendesk Chat');
        await common.validateText('2659')
    })

    test('Validate Connector Settings memoQ is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await connectorSettingsPage.clickOnConnectorSettings();
        await connectorSettingsPage.clickOnConnectorSettingsMemoQ();
        await common.validateText('MemoQ');
    })

    test('Validate Connector Settings search bar is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await connectorSettingsPage.clickOnConnectorSettings();
        await common.search('28484');
        await common.validateText('MemoQ');
    })
});




