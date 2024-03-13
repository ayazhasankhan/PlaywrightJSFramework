const { expect } = require('@playwright/test');
const invigilationPageLocators = require('../components/invigilationPageLocators');

class InvigilationPage {
    constructor(page, isMobile) {
        this.page = page;
        this.isMobile = isMobile;
    }
    async clickOnInvigilation() {
        await this.page.locator(invigilationPageLocators.invigilation).click();
    }
    async clickOnInvigilationSaveToExcel() {
        await this.page.locator(invigilationPageLocators.invigilationSaveToExcel).click();
    }
    async clickOnInvigilationID() {
        await this.page.locator(invigilationPageLocators.invigilationID).nth(0).click();
    }
    async clickOnInvigilationSearchBar() {
        await this.page.locator(invigilationPageLocators.invigilationSearchBar).click();
    }
    async clickOnInvigilationHelpBox() {
        await this.page.locator(invigilationPageLocators.invigilationHelpBox).click();
    }
    async clickOnQuality() {
        await this.page.locator(invigilationPageLocators.quality).click();
    }
    async clickOnQualityFor() {
        await this.page.locator(invigilationPageLocators.qualityFor).nth(1).click();
        await this.page.keyboard.press('ArrowUp');
        await this.page.keyboard.press('Enter');

    } async clickOnQualitySavePageToExcel() {
        await this.page.locator(invigilationPageLocators.qualitySavePageToExcel).click();
    } async clickOnQualitysearchBar() {
        await this.page.locator(invigilationPageLocators.qualitySearchBar).click();
    }
    async validateText(text) {
        await expect(this.page.getByText(text).first()).toContainText(text);
    }
    async productivitybtn() {
        await this.page.locator(invigilationPageLocators.productivity).click();
    }
    async productivityForBTN () {
        await this.page.locator(invigilationPageLocators.productivityFor).click();
        await this.page.keyboard.press('ArrowUp');
        await this.page.keyboard.press('Enter');
    }
    async productivitySaveToExcelBTN() {
        await this.page.locator(invigilationPageLocators.productivitySaveToExcel).click();
    }
    async strokesBTN() {
        await this.page.locator(invigilationPageLocators.strokes).click();
    }
    async strokesSavePageToExcel() {
        await this.page.locator(invigilationPageLocators.strokesSavePageToExcel).click();
    }



}

module.exports = { InvigilationPage };
