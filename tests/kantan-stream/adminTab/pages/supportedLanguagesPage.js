const { expect } = require('@playwright/test');
const controlPanelSupportedLanguagesPageLocators = require('../components/supportedLanguagesPageLocators');

class ControlPanelSupportedLanguagesPage {
    constructor(page, isMobile) {
        this.page = page;
        this.isMobile = isMobile;
    }
    async clickOnSupportedLanguages() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguages).click();
    }
    async clickOnSupportedLanguagesShowEntries() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesShowEntries).click();
    }
    async clickOnSupportedLanguagesRefresh() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesRefresh).click();
    }
    async clickOnSupportedLanguagesAdd() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesAdd).click();
    }
    async clickOnSupportedLanguagesLanguage() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesLanguages).nth(0).click();
    }
    async clickOnSupportedLanguagesCode() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesReadingDirectionCode).nth(0).click();
    }
    async clickOnSupportedLanguagesReadingDirection() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesReadingDirectionCode).nth(1).click();
    }
    async clickOnSupportedLanguagesNameAdd(addName = 'Irish Test 1') {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesName).fill(addName);
    }

    async clickOnSupportedLanguagesLangauegCode(addCode = 'Irish') {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesCode).fill(addCode);
    }
    async clickOnSupportedLanguagesClickOnRedingDirection() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLangaugesReadingDirection).click();
        await this.page.keyboard.press('Enter');
    }
    async clickOnSupportedLanguagesLeftToRight() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesClickOnReadingDirection).click();
    }
    async clickOnSupportedLanguagesCreate() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesCreate).click();
    }
    async clickOnSupportedLanguagesSearchBar(searchBar = 'Irish') {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesSearchBarAdd).fill(searchBar);
    }
    async clickOnSupportedLanguagesDelete() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.supportedLanguagesdelete).click();
    }
    async validateText(text) {
    await expect(this.page.getByText(text).first()).toContainText(text);
      }
      async clickOnDeleteLanguage() {
        await this.page.locator(controlPanelSupportedLanguagesPageLocators.deleteLanguage).click();
    }


}

module.exports = { ControlPanelSupportedLanguagesPage };