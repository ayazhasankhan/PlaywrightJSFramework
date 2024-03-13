import { expect } from '@playwright/test';
const managerTemplatesPageLocators = require('../components/ManagerTemplatesPageLocators');

class ManagerTemplatesPage {

  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnManagerTemplatesTab() {
    await expect(this.page.locator(managerTemplatesPageLocators.templatesTab)).toBeVisible({timeout:30000});
    await this.page.locator(managerTemplatesPageLocators.templatesTab).scrollIntoViewIfNeeded();
    await this.page.locator(managerTemplatesPageLocators.templatesTab).click();
  }
  async clickOnAddTemplatesBtn() {
    await expect(this.page.locator(managerTemplatesPageLocators.addTemplatesBtn)).toBeVisible({timeout:30000});
    await this.page.locator(managerTemplatesPageLocators.addTemplatesBtn).click();
  }
  async enterTemplatesName(TemplatesName) {
    await expect(this.page.locator(managerTemplatesPageLocators.templatesName)).toBeVisible({timeout:30000});
    await this.page.locator(managerTemplatesPageLocators.templatesName).fill(TemplatesName);
  }

  async clickOnProjectTypeDrpdwn() {
    await expect(this.page.locator(managerTemplatesPageLocators.projectType)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.projectType).click();
  }

  async clickOnStandard() {
    await expect(this.page.getByRole('treeitem', { name: managerTemplatesPageLocators.standard})).toBeVisible();
    await this.page.getByRole('treeitem', { name: managerTemplatesPageLocators.standard}).click();
  }

  async clickOnSourceLanguageDrpdwn() {
    await expect(this.page.locator(managerTemplatesPageLocators.sourceLanguage)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.sourceLanguage).click();
  }

  async enterSourceLanguage() {
    await expect(this.page.locator(managerTemplatesPageLocators.sourceSearch)).toBeVisible({timeout:30000});
    await this.page.locator(managerTemplatesPageLocators.sourceSearch).fill('english {en}');
  }

  async clickOnSourceLanguage() {
    await expect(this.page.getByRole('treeitem', { name: 'English {en}' }).getByText('English {en}')).toBeVisible({timeout:30000});
    await this.page.getByRole('treeitem', { name: 'English {en}' }).getByText('English {en}').click();
  }

  async clickOnTargetLanguageDrpdwn() {
    await expect(this.page.getByPlaceholder(managerTemplatesPageLocators.targetLanguage)).toBeVisible();
    await this.page.getByPlaceholder(managerTemplatesPageLocators.targetLanguage).click();
  }

  async enterTargetLanguage() {
    await expect(this.page.getByPlaceholder(managerTemplatesPageLocators.targetLanguage)).toBeVisible();
    await this.page.getByPlaceholder(managerTemplatesPageLocators.targetLanguage).fill('Hindi {hi}');
  }

  async clickOnTargetLanguage() {
    await expect(this.page.getByRole('treeitem', { name: 'Hindi {hi}' }).getByText('Hindi {hi}')).toBeVisible();
    await this.page.getByRole('treeitem', { name: 'Hindi {hi}' }).getByText('Hindi {hi}').click();
  }

  async clickOnNext() {
    await expect(this.page.getByRole('button', { name: 'Next' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Next' }).click();
  }

  async clickOnChannelDrpdwn() {
    await expect(this.page.locator(managerTemplatesPageLocators.channelDrpdwn)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.channelDrpdwn).click();
  }

  async enterChannelName() {
    await expect(this.page.locator(managerTemplatesPageLocators.channelNameInput)).toBeVisible({timeout:3000});
    await this.page.locator(managerTemplatesPageLocators.channelNameInput).fill('AyazTestChannel');
  }

  async clickOnChannel() {
    await expect(this.page.getByRole('treeitem', { name: 'AyazTestChannel' }).getByText('AyazTestChannel')).toBeVisible();
    await this.page.getByRole('treeitem', { name: 'AyazTestChannel' }).getByText('AyazTestChannel').click();
  }

  async clickOnStyleGuidesDrpdwn() {
    await expect(this.page.locator(managerTemplatesPageLocators.styleGuideDrpdwn)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.styleGuideDrpdwn).click();
  }

  async enterStyleGuidesName() {
    await expect(this.page.getByRole('textbox')).toBeVisible();
    await this.page.getByRole('textbox').fill('AyazTestStyleGuide');
  }

  async clickOnStyleGuides() {
    await expect(this.page.getByTitle('AyazTestStyleGuide', { exact: true })).toBeVisible({timeout:30000});
    await this.page.getByTitle('AyazTestStyleGuide', { exact: true }).click();
  }

  async clickOnReview() {
    await expect(this.page.locator(managerTemplatesPageLocators.review).getByText('No')).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.review).getByText('No').click();
  }

  async enterBatchSizeWC() {
    await expect(this.page.locator(managerTemplatesPageLocators.batchSizeWC)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.batchSizeWC).fill('5000');
  }

  async enterReviewerDeadlineInput() {
    await expect(this.page.locator(managerTemplatesPageLocators.reviewerDeadlineInput)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.reviewerDeadlineInput).fill('60');
  }

  async clickOnProjectRuleTemplatesDrpdwn() {
    await expect(this.page.locator(managerTemplatesPageLocators.projectRuleTemplatesDrpdwn)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.projectRuleTemplatesDrpdwn).click();
  }

  async enterProjectRuleTemplatesNameOnAddProjectTemplate() {
    await expect(this.page.locator(managerTemplatesPageLocators.projectRuleTemplateInput)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.projectRuleTemplateInput).fill('AyazTestProjectRuleTemplate');
  }

  async clickOnProjectRuleTemplates() {
    await expect(this.page.getByRole('treeitem',{name:'AyazTestProjectRuleTemplate'})).toBeVisible({timeout:30000});
    await this.page.getByRole('treeitem',{name:'AyazTestProjectRuleTemplate'}).click();
  }

  async clickOnCreate() {
    await expect(this.page.getByRole('button',{name:'Create'})).toBeVisible();
    await this.page.getByRole('button',{name:'Create'}).click();
  }

  async clickOnUpdate() {
    await expect(this.page.locator('#createProjectTemplateBtn')).toBeVisible();
    await this.page.locator('#createProjectTemplateBtn').click();
  }
  
  async validateTemplateIsCreated(templatesName) {
    await expect(this.page.getByText(templatesName)).toBeVisible({timeout:30000});
  }
  
  async clickOnDeleteConfigTemplatesIcon() {
    await expect(this.page.locator(managerTemplatesPageLocators.deleteConfigTemplates)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.deleteConfigTemplates).click();
  }

  async clickOnDeleteRuleTemplatesIcon() {
    await expect(this.page.locator(managerTemplatesPageLocators.deleteRuleTemplates)).toBeVisible();
    await this.page.locator(managerTemplatesPageLocators.deleteRuleTemplates).click();
  }

  async clickOnYes() {
    await expect(this.page.getByRole('button',{name:managerTemplatesPageLocators.yes})).toBeVisible();
    await this.page.getByRole('button',{name:managerTemplatesPageLocators.yes}).click();
  }

  async clickOnProjectRuleTemplatesTab() {
    await expect(this.page.locator(managerTemplatesPageLocators.projectRuleTemplates1).nth(1)).toBeVisible({timeout:30000});
    await this.page.locator(managerTemplatesPageLocators.projectRuleTemplates1).nth(1).click({timeout:30000});
  }

  async clickOnAddProjectRuleTemplatesBtn() {
    await expect(this.page.locator(managerTemplatesPageLocators.addProjectRuleTemplates)).toBeVisible({timeout:30000});
    await this.page.locator(managerTemplatesPageLocators.addProjectRuleTemplates).click();
  }

  async enterProjectRuleTemplatesName(ruleTemplatesName) {
    await expect(this.page.locator(managerTemplatesPageLocators.projectRuleTemplatesName)).toBeVisible({timeout:30000});
    await this.page.locator(managerTemplatesPageLocators.projectRuleTemplatesName).fill(ruleTemplatesName);
  }

  async validateRuleTemplateIsCreated(templatesName) {
    await expect(this.page.getByTitle(templatesName).first()).toBeVisible({timeout:30000});
  }

  async clickOnEditProjectConfigTemplates() {
    await expect(this.page.locator(managerTemplatesPageLocators.editProjectConfigTemplates)).toBeVisible({timeout:30000});
    await this.page.locator(managerTemplatesPageLocators.editProjectConfigTemplates).click();
  }

  async clickOnEditProjectRuleTemplates() {
    await expect(this.page.locator(managerTemplatesPageLocators.editProjectRuleTemplates)).toBeVisible({timeout:30000});
    await this.page.locator(managerTemplatesPageLocators.editProjectRuleTemplates).click();
  }
}
module.exports = { ManagerTemplatesPage };
