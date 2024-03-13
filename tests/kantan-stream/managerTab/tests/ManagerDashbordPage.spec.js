const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ManagerDashbordPage } = require('../pages/ManagerDashbordPage');
const { Common } = require('../../utils/Common');
const { EditorDashboardPage } = require('../../editorTab/pages/EditorDashboardPage');

let loginPage;
let managerDashbordPage;
let common;
let editorDashboardPage;

test.describe('Manager Dashbord Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    managerDashbordPage = new ManagerDashbordPage(page, isMobile);
    common = new Common(page, isMobile);
    editorDashboardPage = new EditorDashboardPage(page, isMobile);
  });

  test('Validate all sections are displaying for user having Manager access', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
  });

  test('Validate if Manager can see the dashboard details', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
  });

  test('Validate if Manager can filter projects', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnAdvancedFilterBtn();
    await managerDashbordPage.clickOnAllChannel();
    await managerDashbordPage.clickOnFirstChannel();
    await managerDashbordPage.clickOnApplyFilter();
  });

  test('Validate if Manager can filter projects by clicking All', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnAllFlter();
  });

  test('Validate if Manager can filter projects by clicking Active', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnActiveFlter();
  });

  test('Validate that the Manager can Cancel the project', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnActive();
    await managerDashbordPage.clickOnFirstProjectCheckbox();
    await managerDashbordPage.clickOnCancel();
    await common.clickOnYes();
    await common.validateText("Success!");
  });

  test('Validate that the Manager can Pause / Resume the project', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnActive();
    await managerDashbordPage.clickOnFirstProjectCheckbox();
    await managerDashbordPage.clickOnPauseResume();
    await common.clickOnYes();
    await common.validateText("Success!");
  });

  test('Validate that the Manager can mark Urgent / Not Urgent the project', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnActive();
    await managerDashbordPage.clickOnFirstProjectCheckbox();
    await managerDashbordPage.clickOnUrgent();
    await common.clickOnYes();
    await common.validateText("Success!");
  });

  test('Validate that the Manager can Update Project Properties', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnActive();
    await managerDashbordPage.clickOnFirstProjectCheckbox();
    await managerDashbordPage.clickOnEdit();
    await managerDashbordPage.clickOnClearCalendar();
    await managerDashbordPage.clickOnUpdate();
    await common.validateText("Success!");
  });

  test('Validate that the Manager can export the project in excel', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnFirstProjectCheckbox();
    await managerDashbordPage.clickOnExport();
    await managerDashbordPage.clickOnDownload();
  });

  test('Validate if Manager can download project original source file', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnActiveFlter();
    await managerDashbordPage.clickOnExpand();
  });

  test('Validate if Manager can download Project Result', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDashbordPage.clickOnManagerDashboardTab();
    await managerDashbordPage.clickOnActiveFlter();
    await managerDashbordPage.clickOnViewProjectAnalytics();
    await managerDashbordPage.clickOnFiles();
  });
});   
