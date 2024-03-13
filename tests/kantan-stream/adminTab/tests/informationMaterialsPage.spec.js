
const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { InformationMaterialsPage } = require('../pages/informationMaterialsPage');

let loginPage;
let informationMaterialsPage;

test.describe('Information Materials Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        informationMaterialsPage = new InformationMaterialsPage(page, isMobile)
    });

    test('Validate Information Materials, Add and delete User Guide Information Materials', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await informationMaterialsPage.clickOnInformationMaterials();
        await informationMaterialsPage.clickOnInformationMaterialsAdd();
        await informationMaterialsPage.clickOnInformationMaterialsAddSubject();
        await informationMaterialsPage.clickOnInformationMaterialsAddContent();
        await informationMaterialsPage.clickOnInformationMaterialsContentCreate();
        await informationMaterialsPage.validateText('Success!');
        await informationMaterialsPage.clickOnInformationMaterialsDelete();
        await informationMaterialsPage.clickOnInformationMaterialsDeleteYes();
        await informationMaterialsPage.validateText("Success!")
    })

    test('Validate Information Materials, Add and delete FAQ Information Materials', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress();
        await loginPage.enterPassword();
        await loginPage.clickOnLoginButton();
        await informationMaterialsPage.clickOnInformationMaterials();
        await informationMaterialsPage.clickOnInformationMaterialsAdd();
        await informationMaterialsPage.clickOnInformationMaterialsType();
        await informationMaterialsPage.clickOnInformationMaterialsAddSubject();
        await informationMaterialsPage.clickOnInformationMaterialsAddContent();
        await informationMaterialsPage.clickOnInformationMaterialsContentCreate();
        await informationMaterialsPage.validateText('Success!');
        await informationMaterialsPage.clickOnInformationMaterialsDelete();
        await informationMaterialsPage.clickOnInformationMaterialsDeleteYes();
        await informationMaterialsPage.validateText("Success!")
    })
});





