const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { ManagerTemplatesPage } = require('../pages/ManagerTemplatesPage');

let loginPage;
let managerTemplatesPage;

test.describe('Manager Style Guides (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    managerTemplatesPage = new ManagerTemplatesPage(page, isMobile);
  });

  test.fixme('Validate if Manager can create and delete Project Config Templates', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerTemplatesPage.clickOnManagerTemplatesTab();
    await managerTemplatesPage.clickOnAddTemplatesBtn();
    let date = new Date().toJSON();
    await managerTemplatesPage.enterTemplatesName('AutoTestTemplates'+date);
    await managerTemplatesPage.clickOnNext();
   // await managerTemplatesPage.clickOnStandard();
    await managerTemplatesPage.clickOnSourceLanguageDrpdwn();
    await managerTemplatesPage.enterSourceLanguage();
    await managerTemplatesPage.clickOnSourceLanguage();
    await managerTemplatesPage.clickOnTargetLanguageDrpdwn();
    await managerTemplatesPage.enterTargetLanguage();
    await managerTemplatesPage.clickOnTargetLanguage();
    await managerTemplatesPage.clickOnNext();
    await managerTemplatesPage.clickOnChannelDrpdwn();
    await managerTemplatesPage.enterChannelName();
    await managerTemplatesPage.clickOnChannel();
    await managerTemplatesPage.clickOnStyleGuidesDrpdwn();
    await managerTemplatesPage.enterStyleGuidesName();
    await managerTemplatesPage.clickOnStyleGuides();
    await managerTemplatesPage.clickOnReview();
    await managerTemplatesPage.enterBatchSizeWC();
    await managerTemplatesPage.enterReviewerDeadlineInput();
    await managerTemplatesPage.clickOnProjectRuleTemplatesDrpdwn();
    await managerTemplatesPage.enterProjectRuleTemplatesNameOnAddProjectTemplate();
    await managerTemplatesPage.clickOnProjectRuleTemplates();
    await managerTemplatesPage.clickOnNext();
    await managerTemplatesPage.clickOnCreate();
   // await managerTemplatesPage.validateTemplateIsCreated('AutoTestTemplates');
    await managerTemplatesPage.clickOnDeleteConfigTemplatesIcon();
    await managerTemplatesPage.clickOnYes();
  });

  test('Validate if Manager can update Project Config Templates', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerTemplatesPage.clickOnManagerTemplatesTab();
    await managerTemplatesPage.clickOnEditProjectConfigTemplates();
    await managerTemplatesPage.enterBatchSizeWC();
    await managerTemplatesPage.enterReviewerDeadlineInput();
    await managerTemplatesPage.clickOnUpdate();
  });

  test('Validate if Manager can create and delete Project Rule Templates', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerTemplatesPage.clickOnManagerTemplatesTab();  
    await managerTemplatesPage.clickOnProjectRuleTemplatesTab();
    await managerTemplatesPage.clickOnAddProjectRuleTemplatesBtn();
    await managerTemplatesPage.enterProjectRuleTemplatesName('AutoProjectRuleTemplate');
    await managerTemplatesPage.clickOnCreate();
    await managerTemplatesPage.validateRuleTemplateIsCreated('AutoProjectRuleTemplate');
    await managerTemplatesPage.clickOnDeleteRuleTemplatesIcon();
    await managerTemplatesPage.clickOnYes();
  });

  test('Validate if Manager can update Project Rule Templates', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
    await loginPage.enterPassword('Alliswell@3833');
    await loginPage.clickOnLoginButton();
    await managerTemplatesPage.clickOnManagerTemplatesTab();  
    await managerTemplatesPage.clickOnProjectRuleTemplatesTab();
    await managerTemplatesPage.clickOnEditProjectRuleTemplates();
    await managerTemplatesPage.clickOnUpdate();
  });
});  
