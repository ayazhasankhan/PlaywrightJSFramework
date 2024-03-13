const { expect } = require('@playwright/test');
const reviewerDashboardPageLocators = require('../components/ReviewerDashboardPageLocators');

class ReviewerDashboardPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnReviewerDashboard() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboard).click();
  }

  async clickOnReviewerDashboardShowEntries() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardShowEntries).click();
  }

  async clickOnReviewerDashboardRefresh() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardRefresh).click();
  }

  async clickOnReviewerDashboardFilter() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardFilter).click();
  }

  async clickOnReviewerDashboardPlus() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardPlus).click();
  }

  async clickOnReviewerDashboardID() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardID).nth(0).click();
  }

  async clickOnReviewerDashboardStatus() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardStatus).nth(0).click();
  }

  async clickOnReviewerDashboardProjectType() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardStatus).nth(1).click();
  }

  async clickOnReviewerDashboardManager() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardStatus).nth(2).click();
  }

  async clickOnReviewerDashboardName() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardStatus).nth(3).click();
  }

  async clickOnReviewerDashboardChannelName() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardStatus).nth(4).click();
  }

  async clickOnReviewerDashboardSource() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardStatus).nth(5).click();
  }

  async clickOnReviewerDashboardTarget() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardStatus).nth(6).click();
  }

  async clickOnReviewerDashboardFiles() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardFiles).nth(0).click();
  }

  async clickOnReviewerDashboardAWC() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardAWC).nth(0).click();
  }

  async clickOnReviewerDashboardEditorDeadline() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardEditorDeadline).nth(0).click();
  }

  async clickOnReviewerDashboardExpiry() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardExpiry).nth(0).click();
  }

  async clickOnReviewerDashboardSearch() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardSearch).click();
  }

  async clickOnReviewerDashboardHelpBox() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardHelpBox).click();
  }
  async clickOnReviewerDashboardViewPostEditFiles() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardViewPostEditFiles).click();
  }

  async clickOnReviewerDashboardManuscript() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerDashboardManuscript).click();
  }

  async clickOnReviewerDashboardManuscriptRefresh() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptRefresh).click();
  }

  async clickOnReviewerDashboardManuscriptSearch() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptSerach).click();
  }

  async clickOnReviewerDashboardManuscriptStart() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptStart).click();
  }

  async clickOnReviewerDashboardManuscriptFinish() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptFinish).click();
  }

  async clickOnReviewerDashboardManuscriptSubmitFile() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptSubmitFile).click();
  }

  async clickOnReviewerDashboardManuscriptSaveToExcel() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptSaveToExcel).click();
  }

  async clickOnReviewerDashboardManuscriptAll() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptAll).click();
  }

  async clickOnReviewerDashboardManuscriptAvilable() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptAvilable).click();
  }

  async clickOnReviewerDashboardManuscriptToDo() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptToDo).click();
  }

  async clickOnReviewerDashboardManuscriptUnavilable() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptUnavilable).click();
  }

  async clickOnReviewerDashboardManuscriptWithErrors() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptWithErrors).click();
  }

  async clickOnReviewerDashboardManuscriptFocus() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptFocus).click();
  }

  async clickOnReviewerDashboardManuscriptUnlockFile() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptUnlockFile).click();
  }

  async clickOnReviewerDashboardManuscriptToggleFocusMode() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptToggleFocusMode).click();
  }

  async clickOnReviewerDashboardManuscriptToggleAllTags() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptToggleAllTags).click();
  }

  async clickOnReviewerDashboardManuscriptSettings() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptSettings).click();
  }

  async clickOnReviewerDashboardManuscriptSegmentText() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptSegmentText).first().click();
  }

  async clickOnReviewerDashboardManuscriptSkip() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptSkip).click();
  }

  async clickOnReviewerDashboardManuscriptSave() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptSave).first().click();
  }

  async clickOnReviewerDashboardManuscriptRestore() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptRestore).click();
  }

  async clickOnReviewerDashboardManuscriptMetrics() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptMetrics).first().click();
  }

  async clickOnReviewerDashboardManuscriptFileConcordance() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptFileConcordance).click();
  }

  async clickOnReviewerDashboardManuscriptValidation() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptValidation).click();
  }

  async clickOnReviewerDashboardManuscriptSegmentComments() {
    await this.page.locator(reviewerDashboardPageLocators.reviewerManuscriptSegmentComments).click();
  }

  //

  async clickOnDashboard() {
    await expect(this.page.locator(reviewerDashboardPageLocators.dashboardTab)).toBeVisible({ timeout: 30000 });
    await this.page.locator(reviewerDashboardPageLocators.dashboardTab).click();
  }

  async clickOnViewAvailableFilesForPostEditing() {
    await this.page.locator(reviewerDashboardPageLocators.viewAvailableFilesForPostEditing).nth(0).click();
  }

  async clickOnPostEditFile() {
    await expect(this.page.locator(reviewerDashboardPageLocators.postEditFile)).toBeVisible();
    await this.page.locator(reviewerDashboardPageLocators.postEditFile).click();
  }

  async clickOnLockUnlockSegmentBtn() {
    await expect(this.page.locator(reviewerDashboardPageLocators.lockUnlockSegmentBtn)).toBeVisible();
    await this.page.locator(reviewerDashboardPageLocators.lockUnlockSegmentBtn).click();
  }

  async clickOnConfirmYes() {
    await expect(this.page.locator(reviewerDashboardPageLocators.confirmYes)).toBeVisible();
    await this.page.locator(reviewerDashboardPageLocators.confirmYes).click();
  }

  async clickOnConfirmYes() {
    await expect(this.page.locator(reviewerDashboardPageLocators.confirmYes)).toBeVisible();
    await this.page.locator(reviewerDashboardPageLocators.confirmYes).click();
  }

  async clickOnConfirmNo() {
    await expect(this.page.locator(reviewerDashboardPageLocators.corfirmNo)).toBeVisible();
    await this.page.locator(reviewerDashboardPageLocators.corfirmNo).click();
  }

  async clickOnReleaseLockedFile() {
    await expect(this.page.locator(reviewerDashboardPageLocators.releaseLockedFile)).toBeVisible();
    await this.page.locator(reviewerDashboardPageLocators.releaseLockedFile).click();
  }

  async moveSlideBartotheRight() {
    await this.page.locator(reviewerDashboardPageLocators.slidebar).click();
    await this.page.keyboard.press('ArrowRight');
    await this.page.keyboard.press('ArrowRight');
}

}

module.exports = { ReviewerDashboardPage };