const { expect } = require('@playwright/test');
const resourceManagerOnboardingPageLocators = require('../components/ResourceManagerOnboardingPageLocators');

class ResourceManagerOnboardingPage {
    constructor(page, isMobile) {
        this.page = page;
        this.isMobile = isMobile;
    }
    async clickOnOnboarding() {
        await expect(this.page.locator(resourceManagerOnboardingPageLocators.onboarding)).toBeVisible();
        await this.page.locator(resourceManagerOnboardingPageLocators.onboarding).click();
    }
    async clickOnUserOnboarding() {
        await expect(this.page.locator(resourceManagerOnboardingPageLocators.onboarding).nth(1)).toBeVisible();
        await this.page.locator(resourceManagerOnboardingPageLocators.onboarding).nth(1).click();
    }
    async clickOnRecruitmentTemplate() {
        await expect(this.page.locator(resourceManagerOnboardingPageLocators.templates)).toBeVisible();
        await this.page.locator(resourceManagerOnboardingPageLocators.templates).click();
    }
}

module.exports = { ResourceManagerOnboardingPage };