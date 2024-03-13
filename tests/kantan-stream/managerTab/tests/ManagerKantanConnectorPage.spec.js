const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ManagerKantanConnectorPage } = require('../pages/ManagerKantanConnectorPage');

let loginPage;
let managerKantanConnectorPage;

test.describe('Manager Kantan Widgets Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    managerKantanConnectorPage = new ManagerKantanConnectorPage(page, isMobile);
  });

  test('Validate if all Manager KantanConnector Page sections are displaying', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerKantanConnectorPage.clickOnManagerKantanWidgetsTab();
  });
});   
