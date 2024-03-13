
const { expect } = require('@playwright/test');
const informationMaterialsPageLocators = require('../components/informationMaterialsPageLocators');

class InformationMaterialsPage {
    constructor(page, isMobile) {
        this.page = page;
        this.isMobile = isMobile;
    }
    async clickOnInformationMaterials() {
        await this.page.locator(informationMaterialsPageLocators.informationMaterials).click();
    }
    async clickOnInformationMaterialsAdd() {
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsAdd).click();
    }
    async clickOnInformationMaterialsAddSubject(addSubject = 'test') {
        await expect(this.page.locator(informationMaterialsPageLocators.informationMaterialsAddSubject)).toBeVisible();
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsAddSubject).fill(addSubject);
    }
    async clickOnInformationMaterialsAddContent(addContent = 'test 1') {
        await expect(this.page.locator(informationMaterialsPageLocators.informationMaterialsAddCotent)).toBeVisible();
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsAddCotent).fill(addContent);
    }
    async clickOnInformationMaterialsContentCreate() {
        await expect(this.page.locator(informationMaterialsPageLocators.informationMaterialsAddCreate)).toBeVisible();
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsAddCreate).click();
    }
    async clickOnInformationMaterialsViewFiles() {
        await expect(this.page.locator(informationMaterialsPageLocators.informationMaterialsViewFiles)).toBeVisible();
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsViewFiles).nth(0).click();
    }
    async clickOnInformationMaterialsEditPropertiesSave() {
        await expect(this.page.locator(informationMaterialsPageLocators.informationMaterialsEditPropertiesSave)).toBeVisible();
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsEditPropertiesSave).click();
    }
    async clickOnInformationMaterialsEditProperties() {
        await expect(this.page.locator(informationMaterialsPageLocators.informationMaterialsEditProperties)).toBeVisible();
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsEditProperties).nth(0).click();
    }
    async clickOnInformationMaterialsEditPublished() {
        await expect(this.page.locator(informationMaterialsPageLocators.informationMaterialsPublished)).toBeVisible();
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsPublished).nth(0).click();
    }
    async clickOnInformationMaterialsDelete() {
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsDelete).nth(0).click();
    }
    async clickOnInformationMaterialsDeleteYes() {
        await expect(this.page.locator(informationMaterialsPageLocators.informationMaterialsDeleteYes)).toBeVisible();
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsDeleteYes).click();
    }
    async validateText(text) {
        await expect(this.page.getByText(text).first()).toContainText(text);
    }

    async clickOnInformationMaterialsType() {
        await expect(this.page.locator(informationMaterialsPageLocators.informationMaterialsType)).toBeVisible();
        await this.page.locator(informationMaterialsPageLocators.informationMaterialsType).click();
        await this.page.keyboard.press('ArrowUp');
        await this.page.keyboard.press('Enter');
    }

    



}

module.exports = { InformationMaterialsPage };





