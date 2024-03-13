const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { EditorSettingsPage } = require('../pages/EditorSettingsPage');

let loginPage;
let editorSettingsPage;

test.describe('Editor Settings (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    editorSettingsPage = new EditorSettingsPage(page, isMobile);
  });

  test('Validate help link is avaialable and working under User Availibilty for the user', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+editor1@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await editorSettingsPage.clickOnHeaderProfileImage();
    await editorSettingsPage.clickOnUserAvailability();
    await editorSettingsPage.clickOnHelp();
    await editorSettingsPage.validateText('User Availability Help');
    await editorSettingsPage.clickOnCloseHelp();
  });

  test('Validate if Editor can update by selecting different available days', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+editor1@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await editorSettingsPage.clickOnHeaderProfileImage();
    await editorSettingsPage.clickOnUserAvailability();
    await editorSettingsPage.makeMondayUnavailable();
    await editorSettingsPage.validateText('Success!');
    await editorSettingsPage.makeMondayAvailable();
    await editorSettingsPage.validateText('Success!');
  });

  test('Validate if Linguists can delete by selecting different Unavailable days', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+editor1@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await editorSettingsPage.clickOnHeaderProfileImage();
    await editorSettingsPage.clickOnUserAvailability();
    await editorSettingsPage.clickOnDay();
    await editorSettingsPage.clickOnDay();
   // await editorSettingsPage.clickOnSubmit();
    await editorSettingsPage.validateText('Success!');
    await editorSettingsPage.clickOnDay();
    await editorSettingsPage.clickOnClearSelectedDateBtnModal();
  });

  test('Validate Editor can not changed language pair', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+editor1@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await editorSettingsPage.clickOnHeaderProfileImage();
    await editorSettingsPage.clickOnLanguagePair();
  });

  test('Validate Admin can not change the language pair', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await editorSettingsPage.clickOnHeaderProfileImage();
    await editorSettingsPage.clickOnLanguagePair();
  });
});   