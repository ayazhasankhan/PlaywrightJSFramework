const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const {ProjectTypesPage } = require('../pages/projectTypesPage');
const { Common } = require('../../utils/Common');

let loginPage;
let projectTypesPage;
let common;


  test.describe('Control Panel  (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
      loginPage = new LoginPage(page, isMobile);
      projectTypesPage = new ProjectTypesPage (page, isMobile)
      common = new Common (page, isMobile)
    });

    
    const testData={
      AdminEmail:'cathald@kantanai.io',
      AdminPassword: 'Xb0x-T0p1!!',
      }; 

    test('Validate Project Types is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await projectTypesPage.clickOnProjectTypes();
        await common.validateText("Project Types");
      })

      test('Validate Project Types refresh is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await projectTypesPage.clickOnProjectTypes();
        await projectTypesPage.clickOnProjectTypesRefresh();
        await common.validateText('Project Types');
      })

      test('Validate Project Types options  is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await projectTypesPage.clickOnProjectTypes();
        await projectTypesPage.clickOnProjectTypesDocExpressOptions();
        await projectTypesPage.validateTick();
      })

      test('Validate Project Types exports is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await projectTypesPage.clickOnProjectTypes();
        await projectTypesPage.clickOnProjectTypesAutomaticExports();
        await projectTypesPage.validateTick();
      })
      
      test('Validate Project Types SearchBar is working', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.AdminEmail);;
        await loginPage.enterPassword(testData.AdminPassword);
        await loginPage.clickOnLoginButton();
        await projectTypesPage.clickOnProjectTypes();
        await projectTypesPage.projectTypesSearchBar();
        await common.validateText('MemoQ PreTranslate');
      })


    });