const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ManagerStatisticsPage } = require('../pages/ManagerStatisticsPage');

let loginPage;
let managerStatisticsPage;

test.describe('Manager Statistics Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    managerStatisticsPage = new ManagerStatisticsPage(page, isMobile);
  });

  test('Validate if all Statistics Page sections are displaying for Manager', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerStatisticsPage.clickOnManagerStatisticsTab();
  });
});   
