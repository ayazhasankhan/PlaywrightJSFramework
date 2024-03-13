const { expect } = require('@playwright/test');
const managerDocExpressPageLocators = require('../components/ManagerDocExpressPageLocators');

class ManagerDocExpressPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }
  
  async chooseSourceLanguage() {
    await this.page.getByLabel('English {en}').getByText('English {en}').click();
    await this.page.getByRole('textbox').nth(1).fill('en-US');
    await this.page.keyboard.press("Enter");
  }

  async chooseTargetLanguage() {
    await this.page.getByTestId('targetLanguageCol').getByText('×').click();
    await this.page.getByPlaceholder('Select target language(s)').fill('de-DE');
    await this.page.keyboard.press("Enter");
  }

  async clickOnManagerDocExpressTab() {
    await expect(this.page.getByRole('link', { name: managerDocExpressPageLocators.docExpressTab})).toBeVisible({timeout:30000});
    await this.page.getByRole('link', { name: managerDocExpressPageLocators.docExpressTab}).click();
  }

  async clickOnProjectTemplateDrpdwn() {
    await expect(this.page.getByRole('combobox', { name: managerDocExpressPageLocators.projectTemplateDrpdwn })).toBeVisible({timeout:30000});
    await this.page.getByRole('combobox', { name: managerDocExpressPageLocators.projectTemplateDrpdwn }).click();
  }

  async enterProjectTemplateName(templateName='MrA2ZTestChannel') {
    await expect(this.page.getByRole('searchbox')).toBeVisible();
    await this.page.getByRole('searchbox').fill(templateName);
  }

  async clickOnProjectTemplateNameList(templateName='MrA2ZTestChannel') {
    await expect(this.page.getByRole('option', { name: templateName })).toBeVisible();
    await this.page.getByRole('option', { name: templateName }).click();
  }

  async enterProjectUserQuota() {
    await expect(this.page.getByLabel(managerDocExpressPageLocators.projectUserQuota)).toBeVisible();
    await this.page.getByLabel(managerDocExpressPageLocators.projectUserQuota).fill('500');
  }

  async enterFileUserQuota() {
    await expect(this.page.getByLabel(managerDocExpressPageLocators.fileUserQuota)).toBeVisible();
    await this.page.getByLabel(managerDocExpressPageLocators.fileUserQuota).fill('300');
  }

  async clickOnLaunchProject() {
    await expect(this.page.locator( managerDocExpressPageLocators.launchProject)).toBeVisible();
    await this.page.locator(managerDocExpressPageLocators.launchProject).click();
    await this.page.getByRole('button', { name: 'Yes' }).click();
  }

  async getProjectID() {
    await expect(this.page.locator(managerDocExpressPageLocators.projectIdOnManagerDashBoard)).toBeVisible({timeout:30000});
   const projectID =await this.page.textContent(managerDocExpressPageLocators.projectIdOnManagerDashBoard);
    return projectID;
  }

  async print(abx){
    const x=await abx.getProjectID();
    console.log(x);
  }

  async clickOnNext() {
    await expect(this.page.locator(managerDocExpressPageLocators.next)).toBeVisible({timeout:30000});
    await this.page.locator(managerDocExpressPageLocators.next).click();
  }

  async clickOnWorkflowAccordionDrpdwn() {
    await expect(this.page.locator(managerDocExpressPageLocators.workflowAccordionDrpdwn).nth(1)).toBeVisible({timeout:30000});
    await this.page.locator(managerDocExpressPageLocators.workflowAccordionDrpdwn).nth(1).click();
  }

  async clickOnChannelDrpdwn() {
    await expect(this.page.locator(managerDocExpressPageLocators.selectAChannel)).toBeVisible({timeout:30000});
    await this.page.locator(managerDocExpressPageLocators.selectAChannel).click();
  }

  async enterChannelName(channelName='AyazTestChannel') {
    await expect(this.page.getByRole('searchbox').nth(1)).toBeVisible({timeout:30000});
    await this.page.getByRole('searchbox').nth(1).fill(channelName);
  }

  async clickOnChannel(channelName) {
    await expect(this.page.getByRole('option', { name: channelName }).getByTitle(channelName)).toBeVisible({timeout:30000});
    await this.page.getByRole('option', { name: channelName }).getByTitle(channelName).click();
  }

  async clickOnAutomaticLaunch() {
    await expect(this.page.locator(managerDocExpressPageLocators.automaticLaunch)).toBeVisible();
    await this.page.locator(managerDocExpressPageLocators.automaticLaunch).click();
  } 

  async clickOnLockedSegments() {
    await expect(this.page.locator(managerDocExpressPageLocators.segmentLockingTogglehi).nth(16)).toBeVisible();
    await this.page.locator(managerDocExpressPageLocators.segmentLockingTogglehi).nth(16).click();
  }

  async clickOnUserManagementAccordionDrpdwn() {
    await expect(this.page.locator(managerDocExpressPageLocators.UserManagementAccordionDrpdwn)).toBeVisible();
    await this.page.locator(managerDocExpressPageLocators.UserManagementAccordionDrpdwn).click();
  }

  async clickOnExtractLanguages() {
    await expect(this.page.locator('[id="useExtractedLanguages"]')).toBeVisible();
    await this.page.locator('[id="useExtractedLanguages"]').click();
  }

  async waitForFileToBeUploaded() {
   // await this.page.waitForTimeout(15000);
    await this.page.locator('[role="progressbar"]').waitFor({state: "visible"});
  }

  async disableLinguist() {
    await this.page.locator('[value="28550"]').click();
    await this.page.locator('[title="Disable project visibility for selected user(s)"]').click();
  }

  async waitForSwitchAccount() {
    await this.page.getByTitle('Switch to admin account').waitFor({state: "visible"});
  }

  async validateText(text) {
    try{
      await expect(this.page.getByText(text).first()).toBeVisible({timeout:30000});
    }
    catch(error){
      await expect(this.page.getByText(text).first()).toBeVisible({timeout:30000});
      await expect(this.page.getByText(text).first()).toContainText(text);
    }
    await expect(this.page.getByText(text).first()).toContainText(text);
  }
}

module.exports = { ManagerDocExpressPage };
