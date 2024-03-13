const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ControlPanelSupportedLanguagesPage } = require('../pages/supportedLanguagesPage');

let loginPage;
let controlPanelSupportedLanguagesPage;

test.describe('Control Panel Supported Languages Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        controlPanelSupportedLanguagesPage = new ControlPanelSupportedLanguagesPage(page, isMobile)
    });

    test('Validate adding  Supported Language )', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguages();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguagesAdd();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguagesNameAdd();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguagesLangauegCode();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguagesClickOnRedingDirection();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguagesCreate();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguagesSearchBar();
        await controlPanelSupportedLanguagesPage.validateText('Success!');
    })

    test('Validate deleting Supported Language )', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguages();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguagesSearchBar();
        await controlPanelSupportedLanguagesPage.clickOnSupportedLanguagesDelete();
        await controlPanelSupportedLanguagesPage.clickOnDeleteLanguage();
        await controlPanelSupportedLanguagesPage.validateText('Success!');
    })


})