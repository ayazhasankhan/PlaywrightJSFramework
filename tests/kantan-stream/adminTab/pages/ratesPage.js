const { expect } = require('@playwright/test');
const ratesPageLocators = require('../components/ratesPageLocators');

class RatesPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async clickOnIndustryRates() {
    await expect(this.page.locator(ratesPageLocators.industryRates)).toBeVisible({timeout:30000});
    await this.page.locator(ratesPageLocators.industryRates).click();
  }
  async clickOnRatesAdd() {
    await expect(this.page.locator(ratesPageLocators.industryRatesADD)).toBeVisible({timeout:30000});
    await this.page.locator(ratesPageLocators.industryRatesADD).click();
  }
  async clickOnVendor() {
    await expect(this.page.locator(ratesPageLocators.vendorPriceLists)).toBeVisible({timeout:30000});
    await this.page.locator(ratesPageLocators.vendorPriceLists).click();

  } async clickOnVendorAdd() {
    await expect(this.page.locator(ratesPageLocators.vendorPriceListsADD)).toBeVisible();
    await this.page.locator(ratesPageLocators.vendorPriceListsADD).click();

  } async clickOnVendorViewPriceLists() {
    await this.page.locator(ratesPageLocators.vendorPriceListsViewDetails).nth(0).click();

  } async clickOnVendorEditPriceLists() {
    await this.page.locator(ratesPageLocators.vendorPriceListsEditDetails).nth(10).click();
  }
   async clickOnVendorDeletePriceLists(){
    await expect(this.page.locator(ratesPageLocators.vendorPriceListsDelete).nth(0)).toBeVisible({timeout:30000});
    await this.page.locator(ratesPageLocators.vendorPriceListsDelete).nth(0).click({timeout:30000});
   }
   async clickOnVendorDeletePriceListsDeleteYes() {
    await this.page.locator(ratesPageLocators.vendorPriceListsDeleteYes).click();
  }
   async clickOnVendorEditPriceListsUpdate() {
    await expect(this.page.locator(ratesPageLocators.vendorPriceListsEditUpdate)).toBeVisible();
    await this.page.locator(ratesPageLocators.vendorPriceListsEditUpdate).click();
  } 
  async enterVendorPriceName(priceListTest = 'cathaltest') {
    await this.page.locator(ratesPageLocators.vendorPriceListsNameCreate).fill(priceListTest);
  } 
  async clickOnVendorEditPriceListsNameCreateSave() {
    await expect(this.page.locator(ratesPageLocators.vendorPriceListsNameCreateSave)).toBeVisible();
    await this.page.locator(ratesPageLocators.vendorPriceListsNameCreateSave).click();
  } 
  async clickOnVendorEnterListName(vendorName = 'testing vendor cathal list') {
    await this.page.locator(ratesPageLocators.vendorPriceListsEnterPriceName).fill(vendorName);
  } 
  async clickOnVendorCreatePriceLists() {
    await expect(this.page.locator(ratesPageLocators.vendorPriceListsCreateVendorPriceList)).toBeVisible();
    await this.page.locator(ratesPageLocators.vendorPriceListsCreateVendorPriceList).click();
  }
   async clickOnVendorPriceDetails() {
    await expect(this.page.locator(ratesPageLocators.vendorPriceListsViewDetails)).toBeVisible();
    await this.page.locator(ratesPageLocators.vendorPriceListsViewDetails).nth(0).click();
  } 
  async clickOnVendorPriceReturnToPreviousTable() {
    await expect(this.page.locator(ratesPageLocators.vendorPriceListsReturnToPreviousTable)).toBeVisible();
    await this.page.locator(ratesPageLocators.vendorPriceListsReturnToPreviousTable).click();
  } 
  async clickOnVendorPriceEditName() {
    await expect(this.page.locator(ratesPageLocators.vendorPriceListsEditName)).toBeVisible();
    await this.page.locator(ratesPageLocators.vendorPriceListsEditName).nth(0).click();
  }
   async clickOnIndustryRatesTargetCode(targetCode = 'test1') {
    await this.page.locator(ratesPageLocators.industryRatesTargetCode).fill(targetCode);
  } 
  async clickOnIndustryRatesLow(Low = '10') {
    await this.page.locator(ratesPageLocators.industryRatesLowMedianHigh).nth(0).fill(Low);
  } 
  async clickOnIndustryRatesMedian(Median = '20') {
    await this.page.locator(ratesPageLocators.industryRatesLowMedianHigh).nth(1).fill(Median);
  } 
  async clickOnIndustryRatesHigh(High = '30') {
    await this.page.locator(ratesPageLocators.industryRatesLowMedianHigh).nth(2).fill(High);
  } 
  async clickOnIndustryRatesCreate() {
    await expect(this.page.locator(ratesPageLocators.industryRatesCreate)).toBeVisible();
    await this.page.locator(ratesPageLocators.industryRatesCreate).click();
  } 
  async clickOnIndustryRatesEditProperties() {
    await this.page.locator(ratesPageLocators.industryRatesEditProperties).nth(0).click();
  } 
  async clickOnIndustryRatesEditPropertiesClose() {
    await expect(this.page.locator(ratesPageLocators.industryRatesCloseEditProperties)).toBeVisible();
    await this.page.locator(ratesPageLocators.industryRatesCloseEditProperties).click();
  } 
  async validateText(text) {
    await expect(this.page.getByText(text).first()).toContainText(text);
  }
  async clickOnIndustryRatesHighest() {
    await this.page.locator(ratesPageLocators.IndustryRatesHigh).nth(0).click();
  } 
  async clickOnIndustryRatesClickReviewed() {
    await expect(this.page.locator(ratesPageLocators.industryRatesClickReviewed)).toBeVisible();
    await this.page.locator(ratesPageLocators.industryRatesClickReviewed).click();
  }
   async clickOnIndustryRatesClickDelete() {
    await this.page.locator(ratesPageLocators.industryRatesDelete).nth(0).click();
  }
   async clickOnIndustryRatesClickDeleteYes() {
    await expect(this.page.locator(ratesPageLocators.industryRatesDeleteYes)).toBeVisible();
    await this.page.locator(ratesPageLocators.industryRatesDeleteYes).click();
  }

  async clickOnIndustryRatesClickCreated() {
    await expect(this.page.locator(ratesPageLocators.vendorPriceListsCreated).nth(0)).toBeVisible({timeout:30000});
    await this.page.locator(ratesPageLocators.vendorPriceListsCreated).nth(0).click();
  }

  async clickOnIndustryRatesSubmit() {
    await this.page.locator(ratesPageLocators.industryRatesSubmit).click();

  }



}

module.exports = { RatesPage };
