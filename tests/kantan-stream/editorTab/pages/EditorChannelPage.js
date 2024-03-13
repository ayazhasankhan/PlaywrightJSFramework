const { expect } = require('@playwright/test');
const editorChannelPageLocators = require('../components/EditorChannelPageLocators');

class EditorChannelPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async validateProfilePicture() {
    await expect(this.page.locator(editorChannelPageLocators.profileImage)).toBeVisible();
  }

  async clickOnProfilePicture() {
    await expect(this.page.locator(editorChannelPageLocators.profileImage)).toBeVisible();
    await this.page.locator(editorChannelPageLocators.profileImage).click();
  }
  async validateProfileName() {
    await expect(this.page.locator(editorChannelPageLocators.profileName)).toBeVisible();
  }

  async clickOnProfileName() {
    await expect(this.page.locator(editorChannelPageLocators.profileName)).toBeVisible();
    await this.page.locator(editorChannelPageLocators.profileName).click();
  }
  async validateLogoutButton() {
    await expect(this.page.locator(editorChannelPageLocators.logout)).toBeVisible();
  }
  async clickOnLogoutButton() {
    await expect(this.page.locator(editorChannelPageLocators.logout)).toBeVisible();
    await this.page.locator(editorChannelPageLocators.logout).click();
  }

  async validateHelpLauncher() {
    await expect(this.page.frameLocator(editorChannelPageLocators.helpFrame).locator(editorChannelPageLocators.help)).toBeVisible();
  }
  
  async clickOnHelpLauncher() {
    await expect(this.page.frameLocator(editorChannelPageLocators.helpFrame).locator(editorChannelPageLocators.help)).toBeVisible();
    await this.page.locator(editorChannelPageLocators.help).click();
  }

  async clickOnChannelTab() {
    await expect(this.page.locator(editorChannelPageLocators.channelTab)).toBeVisible({timeout:30000});
    await this.page.locator(editorChannelPageLocators.channelTab).click();
  }

  async clickOnChannelExand() {
    await expect(this.page.locator(editorChannelPageLocators.channelExpand).first()).toBeVisible({timeout:30000});
    await this.page.locator(editorChannelPageLocators.channelExpand).first().click();
  }

  async clickOnChannelHelp() {
    await expect(this.page.locator(editorChannelPageLocators.helpChannelButton).first()).toBeVisible();
    await this.page.locator(editorChannelPageLocators.helpChannelButton).first().click();
  }

  async clickOnPrivateChannel() {
    await expect(this.page.locator(editorChannelPageLocators.privateChannelsTab)).toBeVisible();
    await this.page.locator(editorChannelPageLocators.privateChannelsTab).click();
  }

  async validateText(text) {
    await expect(this.page.getByText(text).first()).toBeVisible({timeout:30000});
    await expect(this.page.getByText(text).first()).toContainText(text);
  }

  async clickOnPublicChannel() {
    await expect(this.page.locator(editorChannelPageLocators.publicChannelsTab)).toBeVisible();
    await this.page.locator(editorChannelPageLocators.publicChannelsTab).click();
  }

  async clickOnChannelDashboardRefresh() {
    await this.page.locator(editorChannelPageLocators.refreshChannel).click();
  }
  async clickOnTogglePrivateChannel() {
    await expect(this.page.locator(editorChannelPageLocators.tooglePrivateChannel)).toBeVisible({timeout:30000});
    await this.page.locator(editorChannelPageLocators.tooglePrivateChannel).click();
  }

  async clickOnChannelRefresh() {
    await expect(this.page.locator(editorChannelPageLocators.refreshChannel).first()).toBeVisible({timeout:30000});
    await this.page.locator(editorChannelPageLocators.refreshChannel).first().click();
  }

  async clickOnAllEntries() {
    await expect(await this.page.locator(editorChannelPageLocators.showEntriesdropdown)).toBeVisible();
    await this.page.locator(editorChannelPageLocators.showEntriesdropdown).click();
  }
  async clickOnAllChannel() {
    await expect(await this.page.getByRole('option', { name: editorChannelPageLocators.allChannel })).toBeVisible({timeout:30000});
    await this.page.getByRole('option', { name: editorChannelPageLocators.allChannel }).click();
  }

  async sortChannelBy(columnName) {
    await expect(this.page.getByTitle(columnName).first()).toBeVisible();
    await this.page.getByTitle(columnName).first().click();
  }

  async searchChannel(searchText='Test') {
    await expect(this.page.locator(editorChannelPageLocators.search)).toBeVisible();
    await this.page.locator(editorChannelPageLocators.search).fill(searchText);
  }
}

module.exports = { EditorChannelPage };
