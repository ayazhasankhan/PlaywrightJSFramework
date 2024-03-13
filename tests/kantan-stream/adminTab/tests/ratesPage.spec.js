const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { RatesPage } = require('../pages/ratesPage');

let loginPage;
let ratesPage;

test.describe('Rates Page  (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    ratesPage = new RatesPage(page, isMobile)
  });

  const testData = {
    targetCode: 'testing cathal list', 
    low: '10',
    median: '20',
    high: '30',
  };

  test(' Validate the Manager can add and delete Vendor Price Lists', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('cathald@kantanai.io');
    await loginPage.enterPassword('Xb0x-T0p1!!');
    await loginPage.clickOnLoginButton();
    await ratesPage.clickOnIndustryRates();
    await ratesPage.clickOnVendor();
    await ratesPage.clickOnVendorAdd();
    let date = new Date().toJSON();
    await ratesPage.enterVendorPriceName('VendorRate' + date);
    await ratesPage.clickOnVendorEditPriceListsNameCreateSave();
    await ratesPage.validateText('Success!');
    await ratesPage.clickOnIndustryRatesClickCreated();
    await ratesPage.clickOnVendorDeletePriceLists();
    await ratesPage.clickOnVendorDeletePriceListsDeleteYes();
    await ratesPage.validateText('Success!');
  })

  test(' Validate the Manager can View Vendor Price Lists', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('cathald@kantanai.io');
    await loginPage.enterPassword('Xb0x-T0p1!!');
    await loginPage.clickOnLoginButton();
    await ratesPage.clickOnIndustryRates();
    await ratesPage.clickOnVendor();
    await ratesPage.clickOnVendorViewPriceLists();
    await ratesPage.validateText('Vendor Price List');
  })

  test(' Validate the Manager can Edit  Vendor Price Lists', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('cathald@kantanai.io');
    await loginPage.enterPassword('Xb0x-T0p1!!');
    await loginPage.clickOnLoginButton();
    await ratesPage.clickOnIndustryRates();
    await ratesPage.clickOnVendor();
    await ratesPage.clickOnVendorEditPriceLists();
    let date = new Date().toJSON();
    await ratesPage.enterVendorPriceName( date);
    await ratesPage.clickOnVendorEditPriceListsUpdate();
    await ratesPage.validateText('Success!');
  })

  test(' Validate the Add and delete of Industry rates', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('cathald@kantanai.io');
    await loginPage.enterPassword('Xb0x-T0p1!!');
    await loginPage.clickOnLoginButton();
    await ratesPage.clickOnIndustryRates();
    await ratesPage.clickOnRatesAdd();
    let date = new Date().toJSON();
    await ratesPage.clickOnIndustryRatesTargetCode('IndustryRate' + date);
    await ratesPage.clickOnIndustryRatesLow(testData.low);
    await ratesPage.clickOnIndustryRatesMedian(testData.median);
    await ratesPage.clickOnIndustryRatesHigh(testData.high);
    await ratesPage.clickOnIndustryRatesCreate();
    await ratesPage.validateText('Success!')
    await ratesPage.clickOnIndustryRatesHighest();
    await ratesPage.clickOnIndustryRatesClickDelete();
    await ratesPage.clickOnIndustryRatesClickDeleteYes();
    await ratesPage.validateText('Success!');

  })
  

  test(' Validate the Manager can edit Industry rates', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('cathald@kantanai.io');
    await loginPage.enterPassword('Xb0x-T0p1!!');
    await loginPage.clickOnLoginButton();
    await ratesPage.clickOnIndustryRates();
    await ratesPage.clickOnIndustryRatesHighest();
    await ratesPage.clickOnIndustryRatesEditProperties();
    await ratesPage.clickOnIndustryRatesClickReviewed();
    await ratesPage.clickOnIndustryRatesSubmit();
    await ratesPage.validateText('Success!');
  })





  

})
