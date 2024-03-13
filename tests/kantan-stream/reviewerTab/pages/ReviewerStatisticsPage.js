require('@playwright/test');
const reviewerStatisticsPageLocators = require('../components/ReviewerStatisticsPageLocators');

class ReviewerStatisticsPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnReviewerStatistics() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatistics).click();
  }

  async clickOnReviewerStatisticsShowEntries() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsShowEntries).nth(1).click();
  }

  async clickOnReviewerStatisticsRefresh() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsRefresh).click();
  }

  async clickOnReviewerStatisticsSaveDataToExcelFile() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsSaveDataToExcelFile).click();
  }

  async clickOnReviewerStatisticsSearchIcon() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsSearchIcon).click();
  }

  async clickOnReviewerStatisticsSpecificMonth() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsSpecificMonth).nth(0).click();
  }

  async clickOnReviewerStatisticsTaskType() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsTaskType).nth(0).click();
  }

  async clickOnReviewerStatisticsProjectId() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsTaskType).nth(1).click();
  }

  async clickOnReviewerStatisticsChannelName() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsTaskType).nth(2).click();
  }

  async clickOnReviewerStatisticsProductivity() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsTaskType).nth(3).click();
  }

  async clickOnReviewerStatisticsQuality() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsTaskType).nth(4).click();
  }

  async clickOnReviewerStatisticsTime() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsTimeCategory).nth(0).click();
  }

  async clickOnReviewerStatisticsCategory() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsTimeCategory).nth(1).click();
  }

  async clickOnReviewerStatisticsTimeWords() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsWordsAWC).nth(0).click();
  }

  async clickOnReviewerStatisticsTimeAWC() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsWordsAWC).nth(1).click();
  }

  async clickOnReviewerStatisticsCompletionDate() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsTaskType).nth(5).click();
  }

  async clickOnReviewerStatisticsExpand() {
    await this.page.locator(reviewerStatisticsPageLocators.reviewerStatisticsTaskType).nth(0).click();
  }
  
}

module.exports = {ReviewerStatisticsPage};