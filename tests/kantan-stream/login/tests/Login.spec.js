const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

let loginPage;

const testData={
 emailAddressEditor:'cathald@kantanai.io',
 passwordEditor:'Xb0x-T0p1!!',
 wrongEmailAddress:'abc@test.com',
 wrongPassword:'abc@123',
 inActiveEmailAddress:'cathald1234@kantanai.io',
 inActivePassword:'abc1234!!'
}; 

test.describe('login (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
      loginPage = new LoginPage(page, isMobile);
  });

  test('Validate logging into the Application using valid credentials', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.emailAddressEditor);
    await loginPage.enterPassword(testData.passwordEditor);
    await loginPage.clickOnLoginButton(); 
  });

  test('Validate logging into the Application using invalid credentials -Invalid email address and Invalid Password', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.wrongEmailAddress);
    await loginPage.enterPassword(testData.wrongPassword);
    await loginPage.clickOnLoginButton();
    await loginPage.validatePasswordErrorMessage('Invalid Credentials'); 
  });

  test('Validate logging into the Application using invalid email address and valid Password)', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.wrongEmailAddress);
    await loginPage.enterPassword(testData.passwordEditor);
    await loginPage.clickOnLoginButton();
    await loginPage.validatePasswordErrorMessage('Invalid Credentials'); 
  });

  test('Validate logging into the Application without providing any credentials', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.clickOnLoginButton();
    await loginPage.validateEmailErrorMessage();
    await loginPage.validatePasswordErrorMessage(); 
  });

  test('Validate logging into the Application using inactive credentials ', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress(testData.inActiveEmailAddress);
  await loginPage.enterPassword(testData.inActivePassword);
  await loginPage.clickOnLoginButton();
  await loginPage.validatePasswordErrorMessage('Invalid Credentials'); 
  });

});
