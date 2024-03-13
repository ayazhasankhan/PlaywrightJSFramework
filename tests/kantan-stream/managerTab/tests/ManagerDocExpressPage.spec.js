import { test } from '@playwright/test';
import { LoginPage } from '../../login/pages/LoginPage';
import { ManagerDocExpressPage } from '../pages/ManagerDocExpressPage';
import { Common } from '../../utils/Common';
import { CommunityPage } from '../../adminTab/pages/CommunityPage';
import { ManagerDashbordPage } from '../pages/ManagerDashbordPage';
import { EditorDashboardPage } from '../../editorTab/pages/EditorDashboardPage';

let loginPage;
let common;
let managerDocExpressPage;
let communityPage;
let managerDashbordPage;
let editorDashboardPage;

test.describe('Manager DocExpress Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    common = new Common(page, isMobile);
    managerDocExpressPage = new ManagerDocExpressPage(page, isMobile);
    communityPage = new CommunityPage(page, isMobile);
    managerDashbordPage = new ManagerDashbordPage(page, isMobile);
    editorDashboardPage = new EditorDashboardPage(page, isMobile);
  });

  test('Validate Manager can create a Project', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress('ayaz.hasan+manager@helpshift.com');
    await loginPage.enterPassword('Alliswell@3832');
    await loginPage.clickOnLoginButton();
    await managerDocExpressPage.clickOnManagerDocExpressTab();
    await managerDocExpressPage.clickOnProjectTemplateDrpdwn();
    await managerDocExpressPage.enterProjectTemplateName('MrA2ZTestProjectConfigTemplate');
    await managerDocExpressPage.clickOnProjectTemplateNameList('MrA2ZTestProjectConfigTemplate');
    await managerDocExpressPage.clickOnNext();
    await common.uploadFile('./resources/10Segments.txt','#statusMessage');
    await managerDocExpressPage.waitForFileToBeUploaded();
    await managerDocExpressPage.clickOnNext();
    await managerDocExpressPage.clickOnWorkflowAccordionDrpdwn();
    await managerDocExpressPage.clickOnChannelDrpdwn();
    await managerDocExpressPage.enterChannelName('MrA2ZTestChannel');
    await managerDocExpressPage.clickOnChannel('MrA2ZTestChannel');
    await managerDocExpressPage.clickOnAutomaticLaunch();
    await managerDocExpressPage.clickOnNext();
    await managerDocExpressPage.clickOnUserManagementAccordionDrpdwn();
    await managerDocExpressPage.clickOnNext();
    await managerDocExpressPage.clickOnNext();
    await managerDocExpressPage.clickOnNext();
    await managerDocExpressPage.clickOnLaunchProject();
    await common.validateText("Success!");
  });
});   
