const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { Common } = require('../../utils/Common');
const { ResourceManagerDashboardPage } = require('../pages/ResourceManagerDashboardPage');

let loginPage;
let common;
let resourceManagerDashboardPage;

test.describe('Resource Manager Dashboard Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        common = new Common(page, isMobile);
        resourceManagerDashboardPage = new ResourceManagerDashboardPage(page, isMobile);
    });

    const testData = {
        ResourceManagerEmail:'wofogek679@namewok.com',
        ResourceManagerPassword:'Password1234!!',
    };

    test('Validate that resource manager user role Tabs work as expected', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.ResourceManagerEmail);
        await loginPage.enterPassword(testData.ResourceManagerPassword);
        await loginPage.clickOnLoginButton();
        await common.validateText('Accounts/Users Management');
        await resourceManagerDashboardPage.clickOnAccountManagers();
        await common.validateText("Managers Details")
        await resourceManagerDashboardPage.clickOnAccountLinguists();
        await common.validateText("Linguist Details")
    })

    test('Validate that Resource Manager should be able to enable or disable Channel Access for a User/Linguist', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.ResourceManagerEmail);
        await loginPage.enterPassword(testData.ResourceManagerPassword);
        await loginPage.clickOnLoginButton();
        await common.validateText('Accounts/Users Management');
        await common.search("cathal test 3");
        await resourceManagerDashboardPage.clickOnLinguistDropdown();
        await resourceManagerDashboardPage.clickOnChannelDropdown();
        await resourceManagerDashboardPage.clickOnChannelSelect();
        await resourceManagerDashboardPage.clickOnDisableChannel();
        await common.clickOnYes();
        await common.validateText('Success!'); 
        await resourceManagerDashboardPage.clickOnLinguistDropdown();
        await resourceManagerDashboardPage.clickOnChannelDropdown();
        await resourceManagerDashboardPage.clickOnChannelSelect();
        await resourceManagerDashboardPage.clickOnEnableChannel();
        await common.clickOnYes()
        await common.validateText('Success!'); 
    })
});

