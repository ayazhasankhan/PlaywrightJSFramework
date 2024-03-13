const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { Common } = require('../../utils/Common');
const { ResourceManagerPriceListsPage } = require('../pages/ResourceManagerPriceListsPage');

let loginPage;
let common;
let resourceManagerPriceListsPage;

test.describe('Resource Manager Price Lists Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        common = new Common(page, isMobile);
        resourceManagerPriceListsPage = new ResourceManagerPriceListsPage(page, isMobile);
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
        await resourceManagerPriceListsPage.clickOnPriceLists();
        await common.validateText("Price Lists")
    })
});





