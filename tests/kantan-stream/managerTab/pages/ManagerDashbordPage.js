const { expect } = require('@playwright/test');
const managerDashbordPageLocators = require('../components/ManagerDashbordPageLocators');

class ManagerDashbordPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }


  async clickOnProfilePicture() {
    await expect(this.page.locator(managerDashbordPageLocators.profileImage)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.profileImage).click();
  }
  async validateProfileName() {
    await expect(this.page.locator(managerDashbordPageLocators.profileName)).toBeVisible();
  }

  async clickOnProfileName() {
    await expect(this.page.locator(managerDashbordPageLocators.profileName)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.profileName).click();
  }
  async validateLogoutButton() {
    await expect(this.page.locator(managerDashbordPageLocators.logout)).toBeVisible();
  }
  async clickOnManagerDashboardTab() {
    await expect(this.page.locator(managerDashbordPageLocators.managerDashboardTab)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.managerDashboardTab).click();
  }

  async clickOnAllFlter() {
    await expect(this.page.locator(managerDashbordPageLocators.allEntries)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.allEntries).click();
  }

  async clickOnActiveFlter() {
    await expect(this.page.locator(managerDashbordPageLocators.filterActiveProjects)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.filterActiveProjects).click();
  }

  async clickOnAdvancedFilterBtn() {
    await expect(this.page.locator(managerDashbordPageLocators.advancedFilterBtn)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.advancedFilterBtn).click();
  }

  async clickOnAllStatus() {
    await expect(this.page.getByPlaceholder(managerDashbordPageLocators.allStatuses)).toBeVisible({timeout:3000});
    await this.page.getByPlaceholder(managerDashbordPageLocators.allStatuses).click();
  }

  async clickOnAvailable() {
    await expect(this.page.locator(managerDashbordPageLocators.available)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.available).click();
  }

  async clickOnAllChannel() {
    await expect(this.page.getByPlaceholder(managerDashbordPageLocators.allChannels)).toBeVisible({timeout:3000});
    await this.page.getByPlaceholder(managerDashbordPageLocators.allChannels).click();
  }

  async clickOnFirstChannel() {
    await expect(this.page.getByRole('option',{name:' MrA2ZTestChannel [#2928]'})).toBeVisible({timeout:3000});
    await this.page.getByRole('option', { name: ' MrA2ZTestChannel [#2928]' }).click();
  }

  async clickOnApplyFilter() {
    await expect(this.page.locator(managerDashbordPageLocators.btnApplyFilter)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.btnApplyFilter).click();
  }

  async clickOnFirstProjectCheckbox() {
    await expect(this.page.locator(managerDashbordPageLocators.projectCheckbox).nth(3)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.projectCheckbox).nth(3).click();
  }

  async clickOnCancel() {
    await expect(this.page.locator(managerDashbordPageLocators.btnCancelProjects)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.btnCancelProjects).click();
  }

  async clickOnActive() {
    await expect(this.page.locator(managerDashbordPageLocators.active)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.active).click();
  }

  async clickOnPauseResume() {
    await expect(this.page.locator(managerDashbordPageLocators.btnPauseProjects)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.btnPauseProjects).click();
  }

  async clickOnUrgent() {
    await expect(this.page.locator(managerDashbordPageLocators.btnUrgentProjects)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.btnUrgentProjects).click();
  }

  async clickOnEdit() {
    await expect(this.page.locator(managerDashbordPageLocators.btnDeadlineProjects)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.btnDeadlineProjects).click();
  }

  async clickOnClearCalendar() {
    await expect(this.page.locator(managerDashbordPageLocators.clearCalendar)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.clearCalendar).click();
  }

  async clickOnUpdate() {
    await expect(this.page.locator(managerDashbordPageLocators.update)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.update).click();
  }

  async clickOnExport() {
    await expect(this.page.locator(managerDashbordPageLocators.saveToExcel)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.saveToExcel).click();
  }

  async clickOnDownload() {
    await expect(this.page.locator(managerDashbordPageLocators.downloadBtn)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.downloadBtn).click();
  }

  async clickOnExpand() {
    await expect(this.page.locator(managerDashbordPageLocators.expandProject).first()).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.expandProject).first().click();
  }

  async clickOnDownloadOriginalSourceFile() {
    await expect(this.page.getByTitle(managerDashbordPageLocators.downloadOriginalSourceFile)).toBeVisible();
    await this.page.getByTitle(managerDashbordPageLocators.downloadOriginalSourceFile).click();
  }

  async clickOnFiles() {
    await expect(this.page.locator(managerDashbordPageLocators.files)).toBeVisible();
    await this.page.locator(managerDashbordPageLocators.files).click();
  }

  async validateText(text) {
    await expect(this.page.getByText(text).first()).toBeVisible();
    await expect(this.page.getByText(text).first()).toContainText(text);
  }

  async clickOnViewProjectAnalytics() {
    await expect(this.page.locator(managerDashbordPageLocators.viewProjectAnalytics)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.viewProjectAnalytics).click();
  }

  async clickOnUserManagementTab() {
    await expect(this.page.locator(managerDashbordPageLocators.userManagementTab)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.userManagementTab).click();
  }

  async selectEditorUser() {
    await expect(this.page.locator(managerDashbordPageLocators.editorUser)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.editorUser).click();
  }

  async clickOnEnableUser() {
    await expect(this.page.locator(managerDashbordPageLocators.enableUser)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.enableUser).click();
  }

  async clickOnDisableUser() {
    await expect(this.page.locator(managerDashbordPageLocators.disableUser)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.disableUser).click();
  }

  async clickOnEnableUser() {
    await expect(this.page.locator(managerDashbordPageLocators.enableUser)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.enableUser).click();
  }

  async clickOnYes() {
    await expect(this.page.locator(managerDashbordPageLocators.yes)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.yes).click();
  }

  async clickOnFilter() {
    await expect(this.page.locator(managerDashbordPageLocators.filterUserManagementDtBtn)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.filterUserManagementDtBtn).click();
  }

  async clickOnSelectUserDrpwn() {
    await expect(this.page.getByPlaceholder(managerDashbordPageLocators.selectUserRole)).toBeVisible({timeout:30000});
    await this.page.getByPlaceholder(managerDashbordPageLocators.selectUserRole).click();
  }

  async clickOnEditor() {
    await expect(this.page.locator(managerDashbordPageLocators.editor)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.editor).click();
  }

  async validateEditor() {
    await expect(this.page.getByTitle('Editor : ayaz.hasan+editor1@helpshift.com')).toBeVisible({timeout:30000});
  }

  async clickOnReviewer() {
    await expect(this.page.locator(managerDashbordPageLocators.reviewer)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.reviewer).click();
  }

  async validateReviewer() {
    await expect(this.page.getByTitle('Reviewer : ayaz.hasan+reviewe@helpshift.com')).toBeVisible({timeout:30000});
  }
  
  async clickOnTranslator() {
    await expect(this.page.locator(managerDashbordPageLocators.translator)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.translator).click();
  }

  async validateTranslator() {
    await expect(this.page.getByTitle('Translator : ayaz.hasan+trans@helpshift.com')).toBeVisible({timeout:30000});
  }

  async clickOnFilterSubmit() {
    await expect(this.page.locator(managerDashbordPageLocators.submitUserManagementFiltersBtn)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.submitUserManagementFiltersBtn).click();
  }

  async clickOnHelp() {
    await expect(this.page.locator(managerDashbordPageLocators.help)).toBeVisible({timeout:30000});
    await this.page.locator(managerDashbordPageLocators.help).click();
  }

  async clickOnEditProjectProperties() {
    await expect(this.page.getByTitle(managerDashbordPageLocators.editProjectProperties).first()).toBeVisible();
    await this.page.getByTitle(managerDashbordPageLocators.editProjectProperties).first().click();
  }

  async clickOnEditingOfLockedSegmentsYes() {
    await expect(this.page.getByText('Yes', { exact: true }).nth(2)).toBeVisible();
    await this.page.getByText('Yes', { exact: true }).nth(2).click();
  }

  async clickOnEditingOfLockedSegmentsNo() {
    await expect(this.page.getByText('No', { exact: true }).nth(2)).toBeVisible();
    await this.page.getByText('No', { exact: true }).nth(2).click();
  }

  async clickOnUpdate() {
    await expect(this.page.getByRole('button', { name: 'Update' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Update' }).click();
  }

}

module.exports = { ManagerDashbordPage };
