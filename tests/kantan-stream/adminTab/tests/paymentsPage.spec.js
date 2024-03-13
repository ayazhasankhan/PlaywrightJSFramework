
const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { PaymentsPage } = require('../pages/paymentsPage');
const { Common } = require('../../utils/Common');

let loginPage;
let paymentsPage;
let common;

test.describe('Payments Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    paymentsPage = new PaymentsPage(page, isMobile)
    common = new Common(page, isMobile);
  });

  const testData = {
    AdminEmail: 'cathald@kantanai.io',
    AdminPassword: 'Xb0x-T0p1!!',
  };

  test('Validate Community Balances is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.enterPassword();
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await common.validateText('Community Balances');
  })


  test('Validate Community Balances Save Page To Excel is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnBalancesSavePageToExcel();
  })


  test('Validate Community Balances, Search Bar Buttton is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.enterPassword();
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await common.search('sony');
    await common.validateText('   SONY_TRA_MAC_1@czexpress.cz');
  })


  test('Validate Payment Community Requested  Buttton is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnRequested();
    await common.validateText('All Requested Payments');
  })

  test('Validate Payment Community Requested save page to excel Buttton is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnRequested();
    await paymentsPage.clickOnRequestedSavePageToexcel();
  })


  test('Validate Payment Community Processed  is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnProcessed();
    await common.validateText('No processed payments found.');
  })

  test('Validate Payment Community Processed statistics is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnProcessed();
    await paymentsPage.clickOnProcessedStats();
  })

  test('Validate Payment Community Processed all  is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnProcessed();
    await paymentsPage.clickOnProcessedAll();
  })
  test('Validate Payment Community Processed complete is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnProcessed();
    await paymentsPage.clickOnProcessedComplete();
  })
  test('Validate Payment Community Processed  cancelled is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnProcessed();
    await paymentsPage.clickOnProcessedCancelled();
  })
  test('Validate Payment Community Processed refund  is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnProcessed();
    await paymentsPage.clickOnProcessedRefund();
  })
  test('Validate Payment Community Processed save page to excel is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnProcessed();
    await paymentsPage.clickOnProcessedSavePageToExcel();
  })

  test('Validate Payment Community Other is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnOther();
    await common.validateText('Other Payments');
  })

  test('Validate Payment Community Other stats is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);;
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnOther();
    await paymentsPage.clickOnOtherStats();
  })

  test('Validate Payment Community Other all is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnOther();
    await paymentsPage.clickOnOtherAll();
  })
  test('Validate Payment Community Other dev is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnOther();
    await paymentsPage.clickOnOtherDev();
  })
  test('Validate Payment Community Other error is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await paymentsPage.clickOnPayments();
    await paymentsPage.clickOnOther();
    await paymentsPage.clickOnOtherError();

  })
});

