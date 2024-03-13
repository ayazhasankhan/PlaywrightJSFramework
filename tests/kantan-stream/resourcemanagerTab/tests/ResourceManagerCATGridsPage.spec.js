const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { Common } = require('../../utils/Common');
const { ResourceManagerCATGridsPage } = require('../pages/ResourceManagerCATGridsPage');

let loginPage;
let common;
let resourceManagerCATGridsPage;

test.describe('Resource Manager CATGrids Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        common = new Common(page, isMobile);
        resourceManagerCATGridsPage = new ResourceManagerCATGridsPage(page, isMobile);
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
        await resourceManagerCATGridsPage.clickOnCatGrids();
        await common.validateText("CAT Grids")
        await resourceManagerCATGridsPage.clickOnGridCategories();
        await common.validateText("All Grid Categories")
        await resourceManagerCATGridsPage.clickOnAdjustedWordCountsGrids();
        await common.validateText("Adjusted Word Counts Grids")
    })
});

