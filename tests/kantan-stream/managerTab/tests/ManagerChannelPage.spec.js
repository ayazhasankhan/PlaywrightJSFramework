const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ManagerChannelPage } = require('../pages/ManagerChannelPage');
import { Common } from '../../utils/Common';

let loginPage;
let managerChannelPage;
let common;

test.describe('Manager Channel Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    managerChannelPage = new ManagerChannelPage(page, isMobile);
    common = new Common(page, isMobile);
  });

  test('Validate if Manager can create and delete a Channel', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerChannelPage.clickOnManagerChannelTab();
    await managerChannelPage.clickOnAdd();
    let date = new Date().toJSON();
    await managerChannelPage.enterChannelName('AutoTestChannel'+date);
    await managerChannelPage.selectMinimumQualityRate();
    await managerChannelPage.selectChannelDomains();
    await managerChannelPage.clickOnCreate();
    await managerChannelPage.validateText('Success!');
    await managerChannelPage.clickOnDeleteIcon();
    await managerChannelPage.clickOnConfirm();
    await managerChannelPage.clickOnConfirm();
    await managerChannelPage.validateText('Success!');
  });

  test('Validate if Manager can update a Channel', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerChannelPage.clickOnManagerChannelTab();
    await managerChannelPage.clickOnEditChannel();
    await managerChannelPage.enterRetention();
    await managerChannelPage.clickOnUpdate();
    await managerChannelPage.validateText('Success!');
  });

  test('Validate if Manager can view channel details', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerChannelPage.clickOnManagerChannelTab();
    await managerChannelPage.clickOnViewChannel();
    await managerChannelPage.validateText('Channel Domains');

  });
  
  test('Validate if Manager can disable and enable a user in the Channel', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerChannelPage.clickOnManagerChannelTab();
    await managerChannelPage.clickOnAdd();
    let date = new Date().toJSON();
    await managerChannelPage.enterChannelName('AutoTestChannel'+date);
    await managerChannelPage.selectMinimumQualityRate();
    await managerChannelPage.selectChannelDomains();
    await managerChannelPage.clickOnCreate();
    await managerChannelPage.validateText('Success!');
    await managerChannelPage.clickOnChannelSetting();
    //await managerChannelPage.clickOnAdd();
    //await managerChannelPage.clickOnUserDrpdwn();
    //await managerChannelPage.clickOnSelectAllMatches();
    //await managerChannelPage.clickOnAddUsersBtn();
   // await managerChannelPage.validateText('Success!');
    await managerChannelPage.clickOnSelectAll();
    await managerChannelPage.clickOnEnableUserInChannelToogle();
    await common.clickOnYes();
    await managerChannelPage.validateText('Success!');
    await managerChannelPage.clickOnSelectAll();
    await managerChannelPage.clickOnSelectAll();
    await managerChannelPage.clickOnDisableUserInChannel();
    await common.clickOnYes();
    await managerChannelPage.validateText('Success!');
  });

test('Validate Manager Channels Help link is available and working', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
  await loginPage.enterPassword('Alliswell@3832');
  await loginPage.clickOnLoginButton();
  await managerChannelPage.clickOnManagerChannelTab();
  await managerChannelPage.clickOnHelp();
  await managerChannelPage.validateText('Channels Help');
});

test('Validate Manager can disable and enable a channel', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
  await loginPage.enterPassword('Alliswell@3832');
  await loginPage.clickOnLoginButton();
  await managerChannelPage.clickOnManagerChannelTab();
  await managerChannelPage.clickOnAdd();
  let date = new Date().toJSON();
  await managerChannelPage.enterChannelName('AutoTestChannel'+date);
  await managerChannelPage.selectMinimumQualityRate();
  await managerChannelPage.selectChannelDomains();
  await managerChannelPage.clickOnCreate();
  await managerChannelPage.validateText('Success!');
  await managerChannelPage.clickOnDisableChannelToogle();
  await managerChannelPage.validateText('Success!');
  //await managerChannelPage.clickOnEnableChannelToogle();
  //await managerChannelPage.validateText('Success!');
});

test('Validate if Manager can Pause all project in the channel', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
  await loginPage.enterPassword('Alliswell@3832');
  await loginPage.clickOnLoginButton();
  await managerChannelPage.clickOnManagerChannelTab();
  await managerChannelPage.clickOnPauseAllProjects();
  await managerChannelPage.clickOnConfirm();
  await managerChannelPage.validateText('Success!');;
});

test('Validate if Manager can Resume all project in the channel', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
  await loginPage.enterPassword('Alliswell@3832');
  await loginPage.clickOnLoginButton();
  await managerChannelPage.clickOnManagerChannelTab();
  await managerChannelPage.clickOnPauseAllProjects();
  await managerChannelPage.clickOnConfirm();
  await managerChannelPage.validateText('Success!');;
});

});
