import { test } from '@playwright/test';
import { LoginPage } from '../../login/pages/LoginPage';
import { EditorDashboardPage } from '../pages/EditorDashboardPage';
import { Common } from '../../utils/Common';

let loginPage;
let editorDashboardPage;
let common;


test.describe('Editor Dashboard Page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    editorDashboardPage = new EditorDashboardPage(page, isMobile);
    common = new Common(page, isMobile);
  });

  const testData = {
    EditorEmail: 'ayhasan@keywordsstudios.com',
    EditorPassword: 'Alliswell@3833',
  }

  test('Validate if all sections are displaying for user having Editor access', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.EditorEmail);;
    await loginPage.enterPassword(testData.EditorPassword);
    await loginPage.clickOnLoginButton();
    await editorDashboardPage.clickOnDashboard();
    await common.validateText('Your Dashboard')
  });

  test('Validate Help link is available and working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.EditorEmail);;
    await loginPage.enterPassword(testData.EditorPassword);
    await loginPage.clickOnLoginButton();
    await editorDashboardPage.clickOnDashboard();
    await editorDashboardPage.clickOnEditorManuscriptHelp();
    await common.validateText('Editor Dashboard Help')
  });

  test('Validate that the editor can filter projects by clicking "All"', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.EditorEmail);;
    await loginPage.enterPassword(testData.EditorPassword);
    await loginPage.clickOnLoginButton();
    await editorDashboardPage.clickOnDashboard();
    await editorDashboardPage.clickOnDashboardAll(); 
  });


  test('Validate that the editor can filter projects by clicking "Filter By Target Language"', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.EditorEmail);;
    await loginPage.enterPassword(testData.EditorPassword);
    await loginPage.clickOnLoginButton();
    await editorDashboardPage.clickOnDashboard();
    await editorDashboardPage.clickOnDashboardTarget();
    await common.validateText('Hindi [hi]')
  });


  test('Validate if "Help" Link is available for Project File List', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.EditorEmail);;
    await loginPage.enterPassword(testData.EditorPassword);
    await loginPage.clickOnLoginButton();
    await editorDashboardPage.clickOnDashboard();
    await editorDashboardPage.clickOnViewAvailableFilesForPostEditing();
    await editorDashboardPage.clickOnEditorManuscriptHelp();
    await common.validateText('Editor Dashboard Help');
  });

  test('Validate if "Help" Link is available for Project Editor', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.EditorEmail);;
    await loginPage.enterPassword(testData.EditorPassword);
    await loginPage.clickOnLoginButton();
    await editorDashboardPage.clickOnDashboard();
    await editorDashboardPage.clickOnViewAvailableFilesForPostEditing();
    await editorDashboardPage.clickOnPostEditFile();
    await editorDashboardPage.clickOnEditorManuscriptHelp();
  });

  test('Validate if Editor can export the project file as excel', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.EditorEmail);;
    await loginPage.enterPassword(testData.EditorPassword);
    await loginPage.clickOnLoginButton();
    await editorDashboardPage.clickOnDashboard();
    await editorDashboardPage.clickOnViewAvailableFilesForPostEditing();
    await editorDashboardPage.clickOnPostEditFile();
    await editorDashboardPage.clickOnEditorManuscriptSaveToExcel();
  });

  test('Editor must validate that the locked buttons functionality works on the dashboard', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.EditorEmail);;
    await loginPage.enterPassword(testData.EditorPassword);
    await loginPage.clickOnLoginButton();
    await common.search('823386');
    await editorDashboardPage.clickOnViewAvailableFilesForPostEditing();
    await editorDashboardPage.clickOnPostEditFile();
    await editorDashboardPage.clickOnLockSegmentBtn();
    await editorDashboardPage.clickOnConfirmYes();
    await editorDashboardPage.clickOnDashboard();
    await common.search('823386');
    await editorDashboardPage.clickOnViewAvailableFilesForPostEditing();
    await editorDashboardPage.clickOnPostEditFile();
    await editorDashboardPage.clickOnLockSegmentBtn();
    await editorDashboardPage.clickOnConfirmYes();
})

test('Editor must validate that the locked button is avilable on the dashboard', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.EditorEmail);;
    await loginPage.enterPassword(testData.EditorPassword);
    await loginPage.clickOnLoginButton();
    await editorDashboardPage.clickOnViewAvailableFilesForPostEditing();
    await editorDashboardPage.clickOnPostEditFile();
    await common.validateText('Lock File')
    await editorDashboardPage.clickOnLockSegmentBtn();
    await common.validateText('Create project lock for Project File');
})
});   
