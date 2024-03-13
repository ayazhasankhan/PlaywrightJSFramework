const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { Common } = require('../../utils/Common');
const { ResourceManagerOnboardingPage } = require('../pages/ResourceManagerOnboardingPage');

let loginPage;
let common;
let resourceManagerOnboardingPage;

test.describe('Resource Manager Onboarding Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        common = new Common(page, isMobile);
        resourceManagerOnboardingPage = new ResourceManagerOnboardingPage(page, isMobile);
    });

    const testData = {
        ResourceManagerEmail:'wofogek679@namewok.com',
        ResourceManagerPassword:'Password1234!!',
    };

    test('Validate that resource manager user role Tabs work as expected', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress(testData.ResourceManagerEmail);
        await loginPage.enterPassword(testData.ResourceManagerPassword);
        await loginPage.clickOnLoginButton();
        await common.validateText('Accounts/Users Management');
        await resourceManagerOnboardingPage.clickOnOnboarding();
        await common.validateText("Onboarding")
        await resourceManagerOnboardingPage.clickOnRecruitmentTemplate();
        await common.validateText("Recruitment Template")
        await resourceManagerOnboardingPage.clickOnUserOnboarding();
        await common.validateText("User Onboarding")
    })
});
