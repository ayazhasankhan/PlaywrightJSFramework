const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { InvigilationPage } = require('../pages/invigilationPage');

let loginPage;
let invigilationPage;

test.describe('Invigilation Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        invigilationPage = new InvigilationPage(page, isMobile)
    });

    test('Validate Invigilation is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.validateText('Validation Results');
    })

    test('Validate Validation Results, Save page to Excel is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.clickOnInvigilationSaveToExcel();
    })

    test('Validate Validation Results, Help box  Buttton is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.clickOnInvigilationHelpBox();
        await invigilationPage.validateText('Validation Results Page');
    })

    test('Validate Quality Buttton is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.clickOnQuality();
        await invigilationPage.validateText('Quality for');
    })

    test(' Validate Quality for Buttton is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.clickOnQuality();
        await invigilationPage.clickOnQualityFor();
        await invigilationPage.validateText('Quality for');
    })

    test('Validate Quality save page to excel Buttton is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.clickOnQuality();
        await invigilationPage.clickOnQualitySavePageToExcel();
    })

    test('Validate Productivity', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.productivitybtn();
        await invigilationPage.validateText('Productivity for');
    })

    test('Validate Productivity for', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.productivitybtn();
        await invigilationPage.productivityForBTN();
        await invigilationPage.validateText('Productivity for');
    })
    
    test('Validate Productivity save to excel', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.productivitybtn();
        await invigilationPage.productivitySaveToExcelBTN();
        await invigilationPage.validateText('Productivity for');
    })
    
    test('Validate Strokes', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.strokesBTN();
        await invigilationPage.validateText('Strokes');
    })
    
    test('Validate Strokes Save To Excel', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await invigilationPage.clickOnInvigilation();
        await invigilationPage.strokesBTN();
        await invigilationPage.strokesSavePageToExcel();
    })
})