const { expect } = require('@playwright/test');
const communityPageLocators = require('../components/communityPageLocators');

class CommunityPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }
  async clickOnCommunityTab() {
    await expect(this.page.locator(communityPageLocators.controlPanelCommunityTab)).toBeVisible();
    await this.page.locator(communityPageLocators.controlPanelCommunityTab).click();

  }
  async clickOnAddAccount() {
    await expect(this.page.locator(communityPageLocators.addAccount)).toBeVisible();
    await this.page.locator(communityPageLocators.addAccount).click();
  }

  async clickOnAllUsers() {
    await expect(this.page.locator(communityPageLocators.allUsers)).toBeVisible();
    await this.page.locator(communityPageLocators.allUsers).click();
  }

  async clickOnAllUsersNewUser() {
    await expect(this.page.locator(communityPageLocators.allUsersNewUser)).toBeVisible();
    await this.page.locator(communityPageLocators.allUsersNewUser).click();
  }

  async clickOnActiveEditors() {
    await expect(this.page.locator(communityPageLocators.activeEditors)).toBeVisible();
    await this.page.locator(communityPageLocators.activeEditors).click();
  }

  async clickOnEditProperties() {
    await this.page.locator(communityPageLocators.editPropertiesAccount).nth(0).click();
  }

  async clickOnEditPropertieForUser28700() {
    // await this.page.locator('[id="btnEdit_28700"]').click();
    await this.page.getByRole('gridcell', { name: 'Edit properties' }).getByTitle('Edit properties').click();
    // await this.page.getByRole('gridcell', { name: 'Edit properties' }).locator('i').click();
  }

  async enterManagerTexBox(inputText) {
    await this.page.locator(communityPageLocators.managerTextBox).fill(inputText);

  }

  async clickOnMultiManager1() {
    await this.page.keyboard.press('Enter');
    //await this.page.locator(communityPageLocators.multimanager1).click();
  }

  async clickOnLoginToUserAccount() {
    await this.page.locator(communityPageLocators.loginToAccount).nth(5).click();
  }
  async clickOnResetPassword() {
    await this.page.locator(communityPageLocators.resendSetEmailPassowrd).nth(0).click();
  }

  async clickOnViewAccountUsersChannels() {
    await this.page.locator(communityPageLocators.viewAccocuntUsersChannels).nth(0).click();
  }
  async clickOnEditPropertiesAccount() {
    await this.page.locator(communityPageLocators.editPropertiesAccount).nth(0).click();
  }
  async clickOnLoginToAccount() {
    await this.page.locator(communityPageLocators.loginToAccount).nth(0).click();
  }

  async validateText(text) {
    await expect(this.page.getByText(text).first()).toContainText(text);
  }

  async clickOnEditPropertiesAccountSave() {
    await expect(this.page.locator(communityPageLocators.editAccountSave)).toBeVisible();
    await this.page.locator(communityPageLocators.editAccountSave).click();
  }
  async enteraccountEmail(accountEmail = 'cathald@kantanai.io') {
    await expect(this.page.locator(communityPageLocators.accountEmailAdd)).toBeVisible();
    await this.page.locator(communityPageLocators.accountEmailAdd).fill(accountEmail);
  }

  async ClickOnCreate() {
    await expect(this.page.locator(communityPageLocators.create)).toBeVisible();
    await this.page.locator(communityPageLocators.create).click();
  }

  async ClickOnRemoveMultiManager1() {
    await expect(this.page.locator(communityPageLocators.removeMultiManager1)).toBeVisible();
    await this.page.locator(communityPageLocators.removeMultiManager1).click();
  }

  async enterUsersName(userNameCreate = 'Cathal test') {
    await expect(this.page.locator(communityPageLocators.newUserAddName)).toBeVisible();
    await this.page.locator(communityPageLocators.newUserAddName).fill(userNameCreate);
  }
  async enterUsersEmail(userEmailCreate = 'cathald@kantanai.io') {
    await expect(this.page.locator(communityPageLocators.newUserAddEmail)).toBeVisible();
    await this.page.locator(communityPageLocators.newUserAddEmail).fill(userEmailCreate);
  }
  async newUserAccountSelect() {
    await expect(this.page.locator(communityPageLocators.newUserAccountselect)).toBeVisible();
    await this.page.locator(communityPageLocators.newUserAccountselect).click();
  }
  async enterUserAccountName(userAccountNameCreate = 'Cathal') {
    await this.page.locator(communityPageLocators.newUserAccountEnterName).nth(2).fill(userAccountNameCreate);
    await this.page.keyboard.press('Enter');
  }
  async newUserAccountCreateUser() {
    await expect(this.page.locator(communityPageLocators.newUserAccountCreateUser)).toBeVisible();
    await this.page.locator(communityPageLocators.newUserAccountCreateUser).click();
  }
  async passwordEmailResetConfirm() {
    await expect(this.page.locator(communityPageLocators.passwordResetEmailConfirm)).toBeVisible();
    await this.page.locator(communityPageLocators.passwordResetEmailConfirm).click();
  }

  async backToCommunityHomePage() {
    await expect(this.page.locator(communityPageLocators.backToCommunity)).toBeVisible();
    await this.page.locator(communityPageLocators.backToCommunity).click();
  }

  async editPrivateChannelsOff() {
    await this.page.locator(communityPageLocators.EditPrivateChannelsOff).nth(0).click();
  }

  async editPrivateChannelsOn() {
    await this.page.locator(communityPageLocators.EditPrivateChannelsOn).nth(0).click();
  }

  async ZoomOut() {
    await this.page.evaluate(() => { document.body.style.zoom = 0.8; })
  }
  async enterManagerSelect(ManagerSelect = 'Cathal Doran') {
    await expect(this.page.locator(communityPageLocators.managerSelect)).toBeVisible();
    await this.page.locator(communityPageLocators.managerSelect).fill(ManagerSelect);
    await this.page.keyboard.press('Enter');
  }

  async enterSearchBarTest(searchBar = 'test') {
    await expect(this.page.locator(communityPageLocators.searchBar)).toBeVisible();
    await this.page.locator(communityPageLocators.searchBar).fill(searchBar);
  }

  async filterByUserRole() {
    await expect(this.page.locator(communityPageLocators.filterByUserRole)).toBeVisible();
    await this.page.locator(communityPageLocators.filterByUserRole).click();
  }

  async enterAccountNewEmail(accountEmail = 'cathald+editor@kantanai.io') {
    await expect(this.page.locator(communityPageLocators.accountEmailAdd)).toBeVisible();
    await this.page.locator(communityPageLocators.accountEmailAdd).fill(accountEmail);
  }
  
  async clickOnViewLanguagePair() {
    await this.page.locator(communityPageLocators.viewLanguagePairs).click();
  }

  async clickOnAddLanguagePair() {
    await this.page.locator(communityPageLocators.addLanguagePair).click();
  }

  async clickOnSourceLanguage() {
    await this.page.locator(communityPageLocators.sourceLanguage).click();
  }

  async clickOnTargetLanguage() {
    await this.page.locator(communityPageLocators.targetLanguage).click();
  }

  async clickOnDeleteIcon() {
    await this.page.locator(communityPageLocators.delete).click();
  }

  async newAccountUserRole(userRole = 'Resource Manager') {
    await expect(this.page.locator(communityPageLocators.newAccountUserRole)).toBeVisible();
    await this.page.locator(communityPageLocators.newAccountUserRole).click();
    await this.page.locator(communityPageLocators.enterAUserRole).nth(2).fill(userRole);
    await this.page.keyboard.press('Enter');
  }

  async searchByUserRole(userRole = 'Resource Manager') {
    await expect(this.page.locator(communityPageLocators.searchUserRole)).toBeVisible();
    await this.page.locator(communityPageLocators.searchUserRole).click();
    await this.page.locator(communityPageLocators.searchUserRole).fill(userRole);
    await this.page.keyboard.press('Enter');
  }

  async clickOnApplyFilter() {
    await expect(this.page.locator(communityPageLocators.applyAccountFilter)).toBeVisible();
    await this.page.locator(communityPageLocators.applyAccountFilter).click();
  }

  async loginToResourceManager() {
    await expect(this.page.locator(communityPageLocators.loginToAccount)).toBeVisible();
    await this.page.locator(communityPageLocators.loginToAccount).click();
  }

  async enterANewAccountName(newAccountName) {
    await expect(this.page.locator(communityPageLocators.enterANewAccountName)).toBeVisible();
    await this.page.locator(communityPageLocators.enterANewAccountName).click();
    await this.page.locator(communityPageLocators.enterANewAccountName).fill(newAccountName);
  }

  async enterANativeLanguage(nativeLanguage = 'English') {
    await expect(this.page.locator(communityPageLocators.selectANativeLanguage)).toBeVisible();
    await this.page.locator(communityPageLocators.selectANativeLanguage).click();
    await this.page.locator(communityPageLocators.enterANativeLanguage).fill(nativeLanguage);
    await this.page.keyboard.press('Enter');
  }

  async enterASecondaryLangauge(secondaryLanguage = 'Irish') {
    await expect(this.page.locator(communityPageLocators.selectSecondaryLanguage).nth(0)).toBeVisible();
    await this.page.locator(communityPageLocators.selectSecondaryLanguage).nth(0).click();
    await this.page.locator(communityPageLocators.selectSecondaryLanguage).nth(0).fill(secondaryLanguage);
    await this.page.keyboard.press('Enter');
  }

  async clickOnEditAccountProperties() {
    await expect(this.page.locator(communityPageLocators.editPropertiesAccount).nth(0)).toBeVisible();
    await this.page.locator(communityPageLocators.editPropertiesAccount).nth(0).click();
  }

  async clickOnDeleteAccount(AccountDelete = 'delete') {
    await expect(this.page.locator(communityPageLocators.clickOnDeleteAccount)).toBeVisible();
    await this.page.locator(communityPageLocators.clickOnDeleteAccount).click();
    await this.page.locator(communityPageLocators.enterDeleteAccount).nth(3).fill(AccountDelete);
    await this.page.keyboard.press('Enter');
  }
}

module.exports = { CommunityPage };

