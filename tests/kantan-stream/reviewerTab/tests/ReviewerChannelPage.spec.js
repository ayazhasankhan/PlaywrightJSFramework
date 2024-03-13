const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const {ReviewerChannelPage } = require('../../reviewerTab/pages/ReviewerChannelPage');

let loginPage;
let reviewerChannelPage;


  const testData={
    reviewerEmail:'pewir22403@msback.com',
    reviewerPassword: 'Password1234!!',
    }; 
  
  test.describe('Reviewer Channel Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
      loginPage = new LoginPage(page, isMobile);
      reviewerChannelPage = new ReviewerChannelPage(page, isMobile)
    });
  
  test('Validate if Reviewer can view Channel details', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
  });

  test('Validate if Reviewer can  show Channel entries dropdown functionality is working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
    await reviewerChannelPage.clickOnReviewerChannelsShowEntries();
  });

  test('Validate if Reviewer can Refresh Channels by clicking refresh Icon', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
    await reviewerChannelPage.clickOnReviewerChannelsRefresh();
  });

  test('Validate Help link is available and working', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
    await reviewerChannelPage.clickOnReviewerChannelsHelpButton();
  });

  test('Validate expanding channel project  details', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
    await reviewerChannelPage.clickOnReviewerChannelsExpand();
  });

  test('Validate the ID of the Channel', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
    await reviewerChannelPage.clickOnReviewerChannelsID();
  });

  test('Validate if Reviewer can short the Channel Project by Name', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
    await reviewerChannelPage.clickOnReviewerChannelsName();
  });

  test('Validate if Reviewer can short the Channel Project by Visibility', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
    await reviewerChannelPage.clickOnReviewerChannelsVisibility();
  });

  test('Validate if Reviewer can short the Channel Project by Quality Rating', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
    await reviewerChannelPage.clickOnReviewerChannelsQualityRating();
  });

  test('Validate if Reviewer can short the Channel Project by Created', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);;
    await loginPage.enterPassword(testData.reviewerPassword);
    await loginPage.clickOnLoginButton();
    await reviewerChannelPage.clickOnReviewerChannels();
    await reviewerChannelPage.clickOnReviewerChannelsCreated();
  });
  
  });
  






   
