const { expect } = require('@playwright/test');
const editorStatisticsPageLocator = require('../components/EditorStatisticsPageLocator');

class EditorStatisticsPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnDashboardstats() {
    await this.page.locator(editorStatisticsPageLocator.statisticsTab).click();
  }

  async clickOnStatsTask() {
    await this.page.locator(editorStatisticsPageLocator.statisticsTask).click();
  }
  

  async clickOnStatsProjectID() {
    await this.page.locator(editorStatisticsPageLocator.statistcisProjectID).nth(0).click();
  }

  async clickOnStatsChannelName() {
    await this.page.locator(editorStatisticsPageLocator.statistcisProjectID).nth(1).click();
  }

  async clickOnStatsProductivity() {
    await this.page.locator(editorStatisticsPageLocator.statistcisProjectID).nth(2).click();
  }
  
  async clickOnStatsQuality() {
    await this.page.locator(editorStatisticsPageLocator.statistcisProjectID).nth(3).click();
  }


  async clickOnStatsTime() {
    await this.page.locator(editorStatisticsPageLocator.statisticsTime).nth(0).click();
  }

  async clickOnStatsCategory() {
    await this.page.locator(editorStatisticsPageLocator.statisticsTime).nth(1).click();
  }


  async clickOnStatsWords() {
    await this.page.locator(editorStatisticsPageLocator.statisticsWords).nth(0).click();
  }

  async clickOnStatsAWC() {
    await this.page.locator(editorStatisticsPageLocator.statisticsAWC).nth(0).click();
  }

  async clickOnStatsCompletion() {
    await this.page.locator(editorStatisticsPageLocator.statisticsCompletionDate).nth(0).first().click();
  }

  async clickOnStatsRefresh() {
    await this.page.locator(editorStatisticsPageLocator.statisticsRefresh).first().click();
  }
  
  async clickOnStatsShowAll() {
    await this.page.locator(editorStatisticsPageLocator.statisticsShowAll).nth(1).first().click();
  }
  
  async clickOnStatsShowMonth() {
    await this.page.locator(editorStatisticsPageLocator.statisticsShowAll).nth(0).first().click();
  }
  
  async clickOnStatsSaveToExcel() {
    await this.page.locator(editorStatisticsPageLocator.statisticsSaveToExcel).click();
  }
  
  async clickOnManagerDashboard() {
    await expect(this.page.locator(editorStatisticsPageLocator.managerDashboard).nth(0)).toBeVisible();
    await this.page.locator(editorStatisticsPageLocator.managerDashboard).nth(0).click();
  }
}

module.exports = { EditorStatisticsPage };
