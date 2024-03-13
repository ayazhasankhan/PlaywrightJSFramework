
const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const {BackendManagementPage } = require('../pages/backendManagementPage');
const { Common } = require('../../utils/Common');

let loginPage;
let backendManagementPage;
let common;
  
  test.describe('Backend Management Page   (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
      loginPage = new LoginPage(page, isMobile);
      backendManagementPage = new BackendManagementPage(page, isMobile)
      common = new Common(page, isMobile);
    });
  

    const testData = {
      AdminEmail: 'cathald@kantanai.io',
      AdminPassword: 'Xb0x-T0p1!!',
    };


    test('Validate Backend Management is working', async () => {  
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.AdminEmail);;
      await loginPage.enterPassword(testData.AdminPassword);
      await loginPage.clickOnLoginButton();
      await backendManagementPage.clickOnBackendManagement();
      await common.validateText('AWS SQS');
    })

    test('Validate Backend Management search bar Buttton is working', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.AdminEmail);;
      await loginPage.enterPassword(testData.AdminPassword); 
      await loginPage.clickOnLoginButton();
      await backendManagementPage.clickOnBackendManagement();
      await common.search('letter')
      await common.validateText('debug-skynet-tasks-dead-letter');
    })

  });


