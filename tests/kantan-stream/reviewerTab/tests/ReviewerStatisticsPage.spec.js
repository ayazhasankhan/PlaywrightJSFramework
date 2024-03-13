const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const {ReviewerStatisticsPage } = require('../../reviewerTab/pages/ReviewerStatisticsPage');

let loginPage;
let reviewerStatisticsPage;

const testData={
    reviewerEmail:'pewir22403@msback.com',
    reviewerPassword: 'Password1234!!',   
  }; 
  
test.describe('Reviewer Statistics Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
      loginPage = new LoginPage(page, isMobile);
      reviewerStatisticsPage = new ReviewerStatisticsPage(page, isMobile)
  });

  test('Validate if Reviewer can view Statistics details', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
  });

  test('Validate if Reviewer can  show Statistics entries dropdown functionality is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsShowEntries();
  });  

  test('Validate if Reviewer can Refresh Statistics by clicking refresh Icon', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsRefresh();
  });

  test('Validate if Reviewer can save Statistics data to  Excel file', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsSaveDataToExcelFile();
  });
  
  test('Validate if Reviewer can enter a statistics string to Seach for by clicking the search Icon', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsSearchIcon();
  });

  test('Validate that the statistics page displays projects from a speciifc month', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsSpecificMonth();
  });
  
  test('Validate if Reviewer can sort the statistics by TaskType', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsTaskType();
  });

  test('Validate if Reviewer can sort thestatistics by Project ID', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsProjectId();
  });

  test('Validate if Reviewer can sort the statistics by Channel Name', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsChannelName();
  });

  test('Validate if Reviewer can sort the statistics by Productivity', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsProductivity();
  }); 

  test('Validate if Reviewer can sort the statistics by "Quality"', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsQuality();
  });

  test('Validate if Reviewer can sort the statistics by Completion "Date"', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerStatisticsPage.clickOnReviewerStatistics();
    await reviewerStatisticsPage.clickOnReviewerStatisticsCompletionDate();
  });
  
  });
  






   
