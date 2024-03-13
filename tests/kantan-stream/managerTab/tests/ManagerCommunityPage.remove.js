const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ManagerCommunityPage } = require('../pages/ManagerCommunityPage');
const { Common } = require('../../utils/Common');

let loginPage;
let managerCommunityPage;
let common;

test.describe('Manager Community Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    common = new Common(page, isMobile);
    managerCommunityPage = new ManagerCommunityPage(page, isMobile);
  });

  test('Validate if Manager can create and delete user', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerCommunityPage.clickOnCommunityTab();
    await managerCommunityPage.clickOnAdd();
    await managerCommunityPage.enterEmail('test@test.com');
    await managerCommunityPage.selectRole('Editor');
    await managerCommunityPage.selectNativeLanguage('[en] English');
    await managerCommunityPage.selectSecondryLanguage('[hi] Hindi');
    await managerCommunityPage.selectManager();
    await managerCommunityPage.clickOnCreate();
  });

  test('Validate if Manager can download users in excel sheet', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerCommunityPage.clickOnCommunityTab();
    await managerCommunityPage.clickOnSavePageToExcel();
  });

  test('Validate if Manager can delete User', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerCommunityPage.clickOnCommunityTab();
    await managerCommunityPage.clickOnEditUserIcon();
    await managerCommunityPage.clickOnSave();
  });

  test('Validate if Manager can edit a user', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerCommunityPage.clickOnCommunityTab();
    await managerCommunityPage.clickOnEditUserIcon();
    await managerCommunityPage.clickOnSave();
  });

  test('Validate if Manager can view Linguists availability under Community tab', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerCommunityPage.clickOnCommunityTab();
    await managerCommunityPage.clickOnUserAvailability();
    await managerCommunityPage.validateAvailabilityUpdated();
  });
});   
