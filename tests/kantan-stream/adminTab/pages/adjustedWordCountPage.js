const { expect } = require('@playwright/test');
const adjustedWordCountPageLocators = require('../components/adjustedWordCountPageLocators');

class AdjustedWordCountPage {
    constructor(page, isMobile) {
        this.page = page;
        this.isMobile = isMobile;
    }


    async validateText(text) {
        await expect(this.page.getByText(text).first()).toBeVisible();
        await expect(this.page.getByText(text).first()).toContainText(text);
    }
    async clickOnAdjustedWordCount() {
        await expect(this.page.locator(adjustedWordCountPageLocators.adjustedWordCount)).toBeVisible();
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCount).click();
    }
    async clickOnadjustedWordCountGridsAdd() {
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountGridsAdd).click();
    }
    async clickOnadjustedWordCountGridCategoriesAdd() {
        await expect(this.page.locator(adjustedWordCountPageLocators.adjustedWordCountGridCategoriesAdd)).toBeVisible();
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountGridCategoriesAdd).click();
    }
    async enterAdjustedWordCountGridName(gridName = 'cathaltest') {
        await expect(this.page.locator(adjustedWordCountPageLocators.adjustedWordCountGridName)).toBeVisible();
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountGridName).fill(gridName);
    }
    async clickOnAdjustedWordCountCreate() {
        await expect(this.page.locator(adjustedWordCountPageLocators.adjustedWordCountCreate)).toBeVisible();
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountCreate).click();
    }
    async enterAdjustedWordCountViewGridDetails() {
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountViewDetails).nth(0).click();
    }
    async clickOnAdjustedWordCountEditProperties() {
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountEditProperties).nth(0).click();

    } async clickOnAdjustedWordCountEditPropertiesUpdate() {
        await expect(this.page.locator(adjustedWordCountPageLocators.adjustedWordCountEditDetailsUpdate)).toBeVisible();
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountEditDetailsUpdate).click();

    } async clickOnAdjustedWordCountVDelete() {
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountDelete).nth(0).click();
    }
    async clickOnAdjustedWordCountDeleteYes() {
        await expect(this.page.locator(adjustedWordCountPageLocators.adjustedWordCountDeleteYes)).toBeVisible();
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountDeleteYes).click();
    }

    async clickOnAdjustedWordCountStatusUpdate() {
        await expect(this.page.locator(adjustedWordCountPageLocators.adjustedWordCountStatusUpdate)).toBeVisible();
        await this.page.locator(adjustedWordCountPageLocators.adjustedWordCountStatusUpdate).click();
    }



}
module.exports = { AdjustedWordCountPage };      