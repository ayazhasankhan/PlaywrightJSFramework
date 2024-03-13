const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { AdjustedWordCountPage } = require('../pages/adjustedWordCountPage');

let loginPage;
let adjustedWordCountPage;

test.describe('Adjusted Word Count Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        adjustedWordCountPage = new AdjustedWordCountPage(page, isMobile)
    });

    test('Validate if manager can Add and delete New Adjusted Word Count Grid', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await adjustedWordCountPage.clickOnAdjustedWordCount();
        await adjustedWordCountPage.clickOnadjustedWordCountGridsAdd();
        let date = new Date().toJSON();
        await adjustedWordCountPage.enterAdjustedWordCountGridName('AutoTestGrid' + date);
        await adjustedWordCountPage.clickOnAdjustedWordCountCreate();
        await adjustedWordCountPage.validateText("Success!");
        await adjustedWordCountPage.clickOnAdjustedWordCountVDelete();
        await adjustedWordCountPage.clickOnAdjustedWordCountDeleteYes();
        await adjustedWordCountPage.validateText("Success!");
    })

    test('Validate if manager can view grid Word Counts', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await adjustedWordCountPage.clickOnAdjustedWordCount();
        await adjustedWordCountPage.enterAdjustedWordCountViewGridDetails();
        await adjustedWordCountPage.validateText("Grid Categories Details");
    })
   
    test('Validate if Manager can edit properties Adjusted Word Counts Grids ', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await adjustedWordCountPage.clickOnAdjustedWordCount();
        await adjustedWordCountPage.clickOnAdjustedWordCountEditProperties();
        await adjustedWordCountPage.clickOnAdjustedWordCountStatusUpdate();
        await adjustedWordCountPage.clickOnAdjustedWordCountEditPropertiesUpdate();
        await adjustedWordCountPage.validateText("Success!");
    })
});
