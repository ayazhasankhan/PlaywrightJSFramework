const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ManagerKantanWidgetsPage } = require('../pages/ManagerKantanWidgetsPage');

let loginPage;
let managerKantanWidgetsPage;

test.describe('Manager Kantan Widgets Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    managerKantanWidgetsPage = new ManagerKantanWidgetsPage(page, isMobile);
  });

  test('Validate if all Manager Kantan Widgets Page sections are displaying', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerKantanWidgetsPage.clickOnManagerKantanWidgetsTab();
  });
});   
