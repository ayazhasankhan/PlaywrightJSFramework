const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ProjectLaunchersPage } = require('../pages/projectLaunchersPage');
const { Common } = require('../../utils/Common');

let loginPage;
let projectLaunchersPage;
let common;

test.describe('Project Launchers  (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    projectLaunchersPage = new ProjectLaunchersPage(page, isMobile)
    common = new Common(page, isMobile);
  });

  const testData = {
    AdminEmail: 'cathald@kantanai.io',
    AdminPassword: 'Xb0x-T0p1!!',
  };

  test('Validate Project Launchers is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.enterPassword();
    await loginPage.clickOnLoginButton();
    await projectLaunchersPage.clickOnProjectLaunchers();
    await common.validateText('Project Launchers');
  })

  test('Validate Project Launchers refresh  is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await projectLaunchersPage.clickOnProjectLaunchers();
    await projectLaunchersPage.clickOnProjectLaunchersRefresh();
    await common.validateText('Project Launchers');
  })

  test('Validate Project Launchers all is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await projectLaunchersPage.clickOnProjectLaunchers();
    await projectLaunchersPage.clickOnProjectLaunchersAll();
    await common.validateText('Project Launchers');
  })

  test('Validate Project Launchers search box is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await projectLaunchersPage.clickOnProjectLaunchers();
    await common.search('test-a');
    await common.validateText('7');
  })


});