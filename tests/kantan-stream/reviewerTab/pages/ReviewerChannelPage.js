require('@playwright/test');
const { expect } = require('@playwright/test');
const reviewerChannelPageLocators = require('../components/ReviewerChannelPageLocators');

class ReviewerChannelPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }
  
  async clickOnReviewerChannels() {
    await expect(this.page.locator(reviewerChannelPageLocators.reviewerChannels)).toBeVisible({timeout:30000});
    await this.page.locator(reviewerChannelPageLocators.reviewerChannels).click();
  }

  async clickOnReviewerChannelsShowEntries() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsShowEntries).click();
  }
  
  async clickOnReviewerChannelsRefresh() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsRefresh).click();
  }
  
  async clickOnReviewerChannelsSearch() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsSearch).click();
  }

  async clickOnReviewerChannelsHelpButton() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsHelpButton).click();
  }

  async clickOnReviewerChannelsExpand() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsExpand).first().click();
  }

  async clickOnReviewerChannelsID() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsID).nth(0).click();
  }

  async clickOnReviewerChannelsName() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsNameToCreated).nth(0).click();
  }

  async clickOnReviewerChannelsVisibility() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsNameToCreated).nth(1).click();
  }

  async clickOnReviewerChannelsQualityRating() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsNameToCreated).nth(2).click();
  }

  async clickOnReviewerChannelsCreated() {
    await this.page.locator(reviewerChannelPageLocators.reviewerChannelsNameToCreated).nth(3).click();
  }

  async clickOnReviewerStatistics() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatistics).click();
  }

  async clickOnReviewerStatisticsShowEntries() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsShowEntries).nth(1).click();
  }

  async clickOnReviewerStatisticsRefresh() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsRefresh).click();
  }

  async clickOnReviewerStatisticsSaveDataToExcelFile() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsSaveDataToExcelFile).click();
  }

  async clickOnReviewerStatisticsSearchIcon() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsSearchIcon).click();
  }

  async clickOnReviewerStatisticsSpecificMonth() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsSpecificMonth).nth(0).click();
  }

  async clickOnReviewerStatisticsTaskType() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsTaskType).nth(0).click();
  }

  async clickOnReviewerStatisticsProjectId() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsTaskType).nth(1).click();
  }

  async clickOnReviewerStatisticsChannelName() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsTaskType).nth(2).click();
  }

  async clickOnReviewerStatisticsProductivity() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsTaskType).nth(3).click();
  }

  async clickOnReviewerStatisticsQuality() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsTaskType).nth(4).click();
  }

  async clickOnReviewerStatisticsTime() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsTimeCategory).nth(0).click();
  }

  async clickOnReviewerStatisticsCategory() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsTimeCategory).nth(1).click();
  }

  async clickOnReviewerStatisticsTimeWords() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsWordsAWC).nth(0).click();
  }

  async clickOnReviewerStatisticsTimeAWC() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsWordsAWC).nth(1).click();
  }

  async clickOnReviewerStatisticsCompletionDate() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsTaskType).nth(5).click();
  }

  async clickOnReviewerStatisticsExpand() {
    await this.page.locator(reviewerChannelPageLocators.reviewerStatisticsTaskType).nth(0).click();
  }
  
}

module.exports = {ReviewerChannelPage};