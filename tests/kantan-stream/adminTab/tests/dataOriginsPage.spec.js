
const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { DataOriginsPage } = require('../pages/dataOriginsPage');
const { Common } = require('../../utils/Common');

let loginPage;
let dataOriginsPage;
let common;

test.describe('Data Origins Page  (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    dataOriginsPage = new DataOriginsPage(page, isMobile)
    common = new Common(page, isMobile);
  });

  test('Validate DATA ORIGINS  is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress();
    await loginPage.enterPassword();
    await loginPage.clickOnLoginButton();
    await dataOriginsPage.clickOnDataOrigins();
    await common.validateText('Data Origins');
  })

  test('Validate DATA ORIGINS All button is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress();
    await loginPage.enterPassword();
    await loginPage.clickOnLoginButton();
    await dataOriginsPage.clickOnDataOrigins();
    await dataOriginsPage.clickOnDataOriginsAll();
    await common.validateText('Data Origins');
  })

  test('Validate DATA ORIGINS search bar is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress();
    await loginPage.enterPassword();
    await loginPage.clickOnLoginButton();
    await dataOriginsPage.clickOnDataOrigins();
    await common.search('skynet');
    await common.validateText('KantanSkynet');
  })

});




