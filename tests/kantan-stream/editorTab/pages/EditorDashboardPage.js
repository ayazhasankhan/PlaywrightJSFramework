const { expect } = require('@playwright/test');
const editorDashboardPageLocators = require('../components/EditorDashboardPageLocators');

class EditorDashboardPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async validateProfilePicture() {
    await expect(this.page.locator(editorDashboardPageLocators.profileImage)).toBeVisible();
  }

  async clickOnProfilePicture() {
    await expect(this.page.locator(editorDashboardPageLocators.profileImage)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.profileImage).click();
  }
  async validateProfileName() {
    await expect(this.page.locator(editorDashboardPageLocators.profileName)).toBeVisible();
  }

  async clickOnProfileName() {
    await expect(this.page.locator(editorDashboardPageLocators.profileName)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.profileName).click();
  }
  async validateLogoutButton() {
    await expect(this.page.locator(editorDashboardPageLocators.logout)).toBeVisible();
  }
  async clickOnLogoutButton() {
    await expect(this.page.locator(editorDashboardPageLocators.logout)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.logout).click();
  }

  async validateHelpLauncher() {
    await expect(this.page.frameLocator(editorDashboardPageLocators.helpFrame).locator(editorDashboardPageLocators.help)).toBeVisible();
  }
  
  async clickOnHelpLauncher() {
    await expect(this.page.frameLocator(editorDashboardPageLocators.helpFrame).locator(editorDashboardPageLocators.help)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.help).click();
  }

  async clickOnChannelTab() {
    await expect(this.page.locator(editorDashboardPageLocators.channelTab)).toBeVisible({timeout:30000});
    await this.page.locator(editorDashboardPageLocators.channelTab).click();
  }

  async clickOnChannelExand() {
    await expect(this.page.locator(editorDashboardPageLocators.channelExpand).first()).toBeVisible({timeout:30000});
    await this.page.locator(editorDashboardPageLocators.channelExpand).first().click();
  }

  async clickOnChannelHelp() {
    await expect(this.page.locator(editorDashboardPageLocators.helpChannelButton).first()).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.helpChannelButton).first().click();
  }
  async clickOnChannelDashboardRefresh() {
    await this.page.locator(editorDashboardPageLocators.refreshChannel).click();
  }
  async clickOnToggleChannel() {
    await expect(this.page.locator(editorDashboardPageLocators.toogleChannel).first()).toBeVisible({timeout:30000});
    await this.page.locator(editorDashboardPageLocators.toogleChannel).first().click();
  }

  async clickOnChannelRefresh() {
    await expect(this.page.locator(editorDashboardPageLocators.refreshChannel).first()).toBeVisible({timeout:30000});
    await this.page.locator(editorDashboardPageLocators.refreshChannel).first().click();
  }

  async clickOnAllChannel() {
    await expect(await this.page.getByRole('treeitem', { name: editorDashboardPageLocators.allChannel })).toBeVisible({timeout:30000});
    await this.page.getByRole('treeitem', { name: editorDashboardPageLocators.allChannel }).click();
  }

  async sortChannelBy(columnName) {
    await expect(this.page.getByTitle(columnName).first()).toBeVisible();
    await this.page.getByTitle(columnName).first().click();
  }

  async searchChannel(searchText='Test') {
    await expect(this.page.locator(editorDashboardPageLocators.search)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.search).fill(searchText);
  }

  async clickOnDashboard() {
    await expect(this.page.locator(editorDashboardPageLocators.dashboardTab)).toBeVisible({timeout:30000});
    await this.page.locator(editorDashboardPageLocators.dashboardTab).click();
  }

  async clickOnDashboardHelp() {
    await expect(this.page.locator(editorDashboardPageLocators.dashboardHelp)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.dashboardHelp).click();
  }

  async clickOnViewAvailableFilesForPostEditing() {
    await expect(this.page.locator(editorDashboardPageLocators.viewAvailableFilesForPostEditing).first()).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.viewAvailableFilesForPostEditing).first().click();
  }

  async clickOnPostEditFile() {
    await expect(this.page.locator(editorDashboardPageLocators.postEditFile)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.postEditFile).click();
  }

  async clickOnLockUnlockSegmentBtn() {
    await expect(this.page.locator(editorDashboardPageLocators.lockUnlockSegmentBtn)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.lockUnlockSegmentBtn).click();
  }

  async clickOnConfirmYes() {
    await expect(this.page.locator(editorDashboardPageLocators.confirmYes)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.confirmYes).click();
  }

  async validateTaskAvailable() {
    await expect(this.page.locator(editorDashboardPageLocators.taskAvailable)).toBeVisible();
  }

  async clickOnChannelDashboardDetails() {
    await this.page.locator(editorDashboardPageLocators.dashboardDetails).click();
  }

  async clickOnDashboardDetails() {
    await this.page.locator(editorDashboardPageLocators.dashboardDetails).click();
  }

  async clickOnDashboardFilter() {
    await this.page.locator(editorDashboardPageLocators.dashboardFilter).click();
  }

  async clickOnDashboardUrgent() {
    await this.page.locator(editorDashboardPageLocators.dashboardUrgent).click();
  }

  async clickOnDashboardAll() {
    await expect(this.page.locator(editorDashboardPageLocators.dashboardAll)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.dashboardAll).click();
  }

  async clickOnDashboardTarget() {
    await this.page.locator(editorDashboardPageLocators.dashboardTarget).click();
  }
  
  async clickOnDashboardSource() {
    await this.page.locator(editorDashboardPageLocators.dashboardSource).click();
  }
  
  async clickOnDashboardProject() {
    await this.page.locator(editorDashboardPageLocators.dashboardProject).click();
  }

  async clickOnDashboardProject() {
    await this.page.locator(editorDashboardPageLocators.dashboardProject).click();
  }

  async clickOnEditorManuscriptHelp() {
    await this.page.locator(editorDashboardPageLocators.editorManuscriptHelp).click({expect:true});
  }

  async clickOnDashboardManuscriptRefresh() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuscriptRefresh).click();
  }
 
  async clickOnDashboardManuscriptAll() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuscriptAll).click();
  }

  async clickOnDashboardManuscriptAvailable() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuscriptAvilable).click();
  }

  async clickOnDashboardManuscriptToDo() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuscriptToDo).click();
  }

  async clickOnDashboardManuscriptUnavilable() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuScriptUnavilable).click();
  }


  async clickOnDashboardManuscriptWithError() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuscriptWithError).click();
  }

  async clickOnDashboardManuscriptUnlockFile() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuscriptUnlock).click();
  }

  async clickOnDashboardManuscriptToggleFocus() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuscriptFocusMode).click();
  }

  async clickOnEditorManuscriptSaveToExcel() {
    await expect(this.page.locator(editorDashboardPageLocators.editorManuscriptSaveToExcel)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.editorManuscriptSaveToExcel).click();
  }

  async clickOnDashboardManuscriptSegment() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuScriptSegment).first().click();
  }

  async clickOnDashboardManuscriptSegmentRestore() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuScriptSegmentRestore).click();
  }

  async clickOnDashboardManuscriptSubmitFile() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuScriptSubmitFile).click();
  }


  async clickOnDashboardManuscriptComments() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuScriptSegmentComments).click();
  }

  async clickOnDashboardManuscriptMetrics() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuScriptSegmentMetrics).click();
  }

  async clickOnDashboardManuscriptFileConcordance() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuScriptSegmentFileConcordance).nth(1).click();
  }

  async clickOnDashboardManuscriptFileHelpBox() {
    await this.page.locator(editorDashboardPageLocators.dashboardManuScriptSegmentHelpBox).click();
  }

  async clickOnStart() {
    await expect(this.page.locator(editorDashboardPageLocators.startWorkBtn)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.startWorkBtn).click();
  }

  async clickOnSkip() {
    await expect(this.page.locator(editorDashboardPageLocators.skip)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.skip).click();
  }

  async clickOnLockSegmentBtn() {
    await expect(this.page.locator(editorDashboardPageLocators.lockUnlockSegmentBtn)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.lockUnlockSegmentBtn).click();
  }

  async clickOnConfirmYes() {
    await expect(this.page.locator(editorDashboardPageLocators.confirmYes)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.confirmYes).click();
  }
  
  async clickOnConfirmNo() {
    await expect(this.page.locator(editorDashboardPageLocators.corfirmNo)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.corfirmNo).click();
  }

  async clickOnReleaseLockedFile() {
    await expect(this.page.locator(editorDashboardPageLocators.releaseLockedFile)).toBeVisible();
    await this.page.locator(editorDashboardPageLocators.releaseLockedFile).click();
  }

  async searchEdwinaText(){
    await this.page.locator('#search').fill('When');
    await this.page.keyboard.press('Enter');
  }

  async getAndValidateText(){
    const text=await this.page.textContent('#encodedSource0');
    console.log(text);
    let numberOfAccuranceInText = text.split('assign').length - 1;
    const matchingList = await this.page.locator(editorDashboardPageLocators.highlightedText);
    let numberOfAccuranceOnPage = await matchingList.count();

    if(numberOfAccuranceInText==numberOfAccuranceOnPage){
      console.log('Matched');
    }
    else{
      console.log('Not Matched');
     // throw new Error("Not Matched");
    }
  }

}

module.exports = { EditorDashboardPage };
