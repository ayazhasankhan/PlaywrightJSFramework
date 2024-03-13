const { expect } = require('@playwright/test');
const managerChannelPageLocators = require('../components/ManagerChannelPageLocators');

class ManagerChannelPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnManagerChannelTab() {
    await expect(this.page.locator(managerChannelPageLocators.managerChannelsTab)).toBeVisible({timeout:30000});
    await this.page.locator(managerChannelPageLocators.managerChannelsTab).click();
  }

  async clickOnAdd() {
    await expect(this.page.getByRole('button',{name:managerChannelPageLocators.add})).toBeVisible();
    await this.page.getByRole('button',{name:managerChannelPageLocators.add}).click();
  }
  async enterChannelName(channelNameInput) {
    await expect(this.page.getByPlaceholder(managerChannelPageLocators.channelName)).toBeVisible({timeout:30000});
    await this.page.getByPlaceholder(managerChannelPageLocators.channelName).fill(channelNameInput);
  }

  async enterRetention() {
    await expect(this.page.locator(managerChannelPageLocators.channelRetention)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.channelRetention).fill("555");
  }
  async selectMinimumQualityRate() {
    await expect(this.page.locator(managerChannelPageLocators.minimumQualityRate).nth(4)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.minimumQualityRate).nth(4).click();
    await this.page.locator('#select2-channelMinQualityRate-results').locator('[class="select2-results__option"]').nth(2).click({setTimeout:30000});
  }

  async selectChannelDomains() {
    await expect(this.page.getByPlaceholder(managerChannelPageLocators.channelDomainsDrpdwn)).toBeVisible();
    await this.page.getByPlaceholder(managerChannelPageLocators.channelDomainsDrpdwn).click();
    await this.page.getByRole('option',{name:managerChannelPageLocators.politics}).click();
  }
  
  async clickOnCreate() {
    await expect(this.page.getByRole('button',{name:managerChannelPageLocators.create})).toBeVisible();
    await this.page.getByRole('button',{name:managerChannelPageLocators.create}).click();
  }

  async clickOnEditChannel() {
    await expect(this.page.getByTitle(managerChannelPageLocators.editChannel).first()).toBeVisible();
    await this.page.getByTitle(managerChannelPageLocators.editChannel).first().click();
  }

  async clickOnDeleteIcon() {
    await expect(this.page.getByTitle(managerChannelPageLocators.deleteChannel).first()).toBeVisible();
    await this.page.getByTitle(managerChannelPageLocators.deleteChannel).first().click();
  }

  async clickOnConfirm() {
    await expect(this.page.locator(managerChannelPageLocators.confirm).first()).toBeVisible({timeout:30000});
    await this.page.locator(managerChannelPageLocators.confirm).first().click();
  }

  async clickOnUpdate() {
    await expect(this.page.locator(managerChannelPageLocators.updateChannel)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.updateChannel).click();
  }

  async clickOnViewChannel() {
    await expect(this.page.locator(managerChannelPageLocators.viewChannel)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.viewChannel).click();
  }

  async validateText(text) {
    await expect(this.page.getByText(text).first()).toBeVisible({timeout:30000});
    await expect(this.page.getByText(text).first()).toContainText(text);
  }

  async clickOnChannelSetting() {
    await expect(this.page.getByTitle(managerChannelPageLocators.channelSetting).first()).toBeVisible();
    await this.page.getByTitle(managerChannelPageLocators.channelSetting).first().click();
  }

  async clickOnUserDrpdwn() {
    await expect(this.page.getByPlaceholder(managerChannelPageLocators.chooseAUser)).toBeVisible();
    await this.page.getByPlaceholder(managerChannelPageLocators.chooseAUser).click();
  }

  async clickOnSelectAllMatches() {
    await expect(this.page.getByText(managerChannelPageLocators.selectAllMatches)).toBeVisible();
    await this.page.getByText(managerChannelPageLocators.selectAllMatches).click();
  }

  async clickOnAddUsersBtn() {
    await expect(this.page.locator(managerChannelPageLocators.addUsersBtn)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.addUsersBtn).click();
  }

  async clickOnSelectAll() {
    await this.page.waitForTimeout(10000);
    await expect(this.page.locator(managerChannelPageLocators.selectAllUser).first()).toBeVisible();
    await this.page.locator(managerChannelPageLocators.selectAllUser).first().click();
  }

  async clickOnDisableUserInChannel() {
    await expect(this.page.locator(managerChannelPageLocators.disableUserInChannel)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.disableUserInChannel).click();
  }
  
  async clickOnEnableUserInChannelToogle() {
    await expect(this.page.locator(managerChannelPageLocators.enableUserInChannel)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.enableUserInChannel).click();
  }

  async clickOnEnableChannelToogle() {
    await expect(this.page.locator(managerChannelPageLocators.enableUserInChannel).first()).toBeVisible();
    await this.page.locator(managerChannelPageLocators.enableUserInChannel).first().click();
  }

  async clickOnDisableChannelToogle() {
    await expect(this.page.locator(managerChannelPageLocators.disableChannel).first()).toBeVisible();
    await this.page.locator(managerChannelPageLocators.disableChannel).first().click();
  }

  async clickOnUnSubscribeChannel() {
    await expect(this.page.locator(managerChannelPageLocators.unSubscribe)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.unSubscribe).click();
  }

  async clickOnHelp() {
    await expect(this.page.locator(managerChannelPageLocators.help)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.help).click();
  }

  async clickOnPauseAllProjects() {
    await expect(this.page.locator(managerChannelPageLocators.pauseAllProjects).nth(3)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.pauseAllProjects).nth(3).click();
  }

  async clickOnResumeAllProjects() {
    await expect(this.page.locator(managerChannelPageLocators.resumeAllProjects).nth(3)).toBeVisible();
    await this.page.locator(managerChannelPageLocators.resumeAllProjects).nth(3).click();
  }
}

module.exports = { ManagerChannelPage };
