const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { EditorChannelPage } = require('../pages/EditorChannelPage');

let loginPage;
let editorChannelPage;

test.describe('Editor Channel Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    editorChannelPage = new EditorChannelPage(page, isMobile);
  });

  test('Validate if Editor can view channel details', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.clickOnChannelExand();
    //await editorChannelPage.validateText('Channel Domains');
  });

  test('Validate Editor Channels Help link is available and working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnChannelHelp();
    //await editorChannelPage.validateText('Channels Help');
  });

  test('Validate if Editor can enable and disable the channel', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.clickOnTogglePrivateChannel();
   // await editorChannelPage.validateText('Success!');
    await editorChannelPage.clickOnTogglePrivateChannel();
   // await editorChannelPage.validateText('Success!');
  });

  test('Validate if Editor can Refresh the channel', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.clickOnChannelDashboardRefresh();
  });

  test('Validate if show entries dropdown functionality is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.clickOnAllEntries();
    await editorChannelPage.clickOnAllChannel();
  });

  test('Validate if Editor can short the channel by ID', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.sortChannelBy('The numeric ID of the channel');
  });

  test('Validate if Editor can short the channel by Name', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.sortChannelBy('The name of the channel');
  });

  test('Validate if Editor can short the channel by Visibilty(Private/Public)', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.sortChannelBy('The visibility of the channel');
  });

  test('Validate if Editor can short the channel by Quality Rating', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.sortChannelBy('The minimum quality rating you must have to enable the channel');
  });

  test('Validate if Editor can short the channel by Created', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.sortChannelBy('The date on which the channel was created');
  });

  test('Validate if Editor can search the Channel from search box', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress("mail.ayaz.hasan@gmail.com");
    await loginPage.enterPassword("Alliswell@3832");
    await loginPage.clickOnLoginButton();
    await editorChannelPage.clickOnChannelTab();
    await editorChannelPage.clickOnPrivateChannel();
    await editorChannelPage.searchChannel();
  });
});   