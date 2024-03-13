const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { EditorStatisticsPage } = require('../pages/EditorStatisticsPage');

let loginPage;
let editorStatisticsPage;

test.describe('Editor home page (@smoke)', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    loginPage = new LoginPage(page, isMobile);
    editorStatisticsPage = new EditorStatisticsPage(page, isMobile);
  });

test('Validate the Editor can load the statistics page without any issues', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
});

test('Verify that the editor statistics page diplays the number of projects completed by the editor', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
});

test('Validate if Editor can sort thestatistics by Project ID', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
  await editorStatisticsPage.clickOnStatsProjectID();
});

test('Validate if Editor can sort the statistics by Channel Name', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
  await editorStatisticsPage.clickOnStatsChannelName();
});


test('Validate if Editor can sort the statistics by Productivity', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
  await editorStatisticsPage.clickOnStatsProductivity();
});

test('Validate if Editor can sort the statistics by Quality', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
  await editorStatisticsPage.clickOnStatsQuality();
});

test('Validate that the user/editor can access all the projects assigned to them via the refresh button', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
  await editorStatisticsPage.clickOnStatsRefresh();
});

test('Validate that the user/editor can access all the projects assigned to them via the show entries button', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
  await editorStatisticsPage.clickOnStatsShowAll();
});

test('Validate that the statistics page displays projects from a speciifc month', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
  await editorStatisticsPage.clickOnStatsShowMonth();
});

test('To verify that the user can save editor statistics to an Excel file from the editor statistics page', async () => {
  await loginPage.navigate();
  await loginPage.clickOnLoginLink();
  await loginPage.enterEmailAddress();
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await editorStatisticsPage.clickOnDashboardstats();
  await editorStatisticsPage.clickOnStatsSaveToExcel();
});

});   