

const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { MTProvidersPage } = require('../pages/mTProvidersPage');
const { Common } = require('../../utils/Common');

let loginPage;
let mTProvidersPage;
let common;

test.describe('MT Providers Page  (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    mTProvidersPage = new MTProvidersPage(page, isMobile)
    common = new Common(page, isMobile);
  });

  const testData = {
    AdminEmail: 'cathald@kantanai.io',
    AdminPassword: 'Xb0x-T0p1!!',
  };


  test('Validate System Admin can load MT Providers page', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await mTProvidersPage.clickOnMTProviders();
    await common.validateText('MT Providers');
  })

  test('Validate  System Admin can search for MT Providers', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await mTProvidersPage.clickOnMTProviders();
    await common.search('222');
    await common.validateText('KantanMT-28222');
  })


});

