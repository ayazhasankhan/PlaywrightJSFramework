const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ProjectRuleTemplatesPage } = require('../pages/projectRuleTemplatesPage');
const { Common } = require('../../utils/Common');

let loginPage;
let projectRuleTemplatesPage;
let common;

test.describe('Project Rule Templates Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    projectRuleTemplatesPage = new ProjectRuleTemplatesPage(page, isMobile)
    common = new Common(page, isMobile);
  });

  const testData = {
    AdminEmail: 'cathald@kantanai.io',
    AdminPassword: 'Xb0x-T0p1!!',
  };

  test('Validate Project rule templates Types is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await projectRuleTemplatesPage.clickOnProjectRuleTemplates();
    await common.validateText('Project Rule Templates');
  })

  test('Validate Project Rule Templates edit properties is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await projectRuleTemplatesPage.clickOnProjectRuleTemplates();
    await common.search('cathal rule test 2');
    await projectRuleTemplatesPage.clickOnProjectRuleTemplatesEditProperties();
    await projectRuleTemplatesPage.clickOnProjectRuleTemplatesEditPropertiesSubmit();
    await common.validateText('Success!');
  })

  test('Validate Project Rule Templates view item is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await projectRuleTemplatesPage.clickOnProjectRuleTemplates();
    await common.search('334');
    await projectRuleTemplatesPage.clickOnProjectRuleTemplatesViewItem();
    await common.validateText('334');
  })

  test('Validate Project Rule Templates search box is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.AdminEmail);;
    await loginPage.enterPassword(testData.AdminPassword);
    await loginPage.clickOnLoginButton();
    await projectRuleTemplatesPage.clickOnProjectRuleTemplates();
    await common.search('cathal rule test 2');
    await common.validateText('334');
  })


});