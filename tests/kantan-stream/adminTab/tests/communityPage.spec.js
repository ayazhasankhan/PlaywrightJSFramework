const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const { CommunityPage } = require('../pages/CommunityPage');
const { Common } = require('../../utils/Common');

let loginPage;
let communityPage;
let common;
let commonPage;

const testData = [
                  'ayhasan@keywordsstudios.com',
                  'ayaz.hasan+rm@helpshift.com'
                ];

    test.describe('Community Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
        loginPage = new LoginPage(page, isMobile);
        communityPage = new CommunityPage(page, isMobile)
        common = new Common(page, isMobile);
        commonPage = new Common(page, isMobile);
    });

    test('Validate if Manager can view the Communitys details and add new Community', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress('cathald@kantanai.io');
        await loginPage.enterPassword('Xb0x-T0p1!!');
        await loginPage.clickOnLoginButton();
        await communityPage.clickOnCommunityTab();
        await communityPage.validateText("All Accounts");
        await communityPage.clickOnAddAccount();
        await communityPage.enteraccountEmail();
        await communityPage.enterManagerSelect("Cathal Doran");
        await communityPage.ClickOnCreate();
        await communityPage.validateText("Error!");
    })

    test('Validate account view user channel', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress('cathald@kantanai.io');
        await loginPage.enterPassword('Xb0x-T0p1!!');
        await loginPage.clickOnLoginButton();
        await communityPage.clickOnCommunityTab();
        await communityPage.clickOnViewAccountUsersChannels();
        await communityPage.validateText("User Channels");
        await communityPage.backToCommunityHomePage();
    })

    test('Validate account edit property', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress('cathald@kantanai.io');
        await loginPage.enterPassword('Xb0x-T0p1!!');
        await loginPage.clickOnLoginButton();
        await communityPage.clickOnCommunityTab();
        await communityPage.enterSearchBarTest();
        await communityPage.clickOnEditPropertiesAccount();
        await communityPage.editPrivateChannelsOn();
        await communityPage.clickOnEditPropertiesAccountSave();
        await communityPage.validateText("Success! ")
        await communityPage.clickOnEditPropertiesAccount();
        await communityPage.editPrivateChannelsOff(),
        await communityPage.clickOnEditPropertiesAccountSave();
        await communityPage.validateText("Success!")
    })

    test('Validate creating and deleting a resource manager user role within KantanStream', async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();
        await loginPage.enterEmailAddress('cathald@kantanai.io');
        await loginPage.enterPassword('Xb0x-T0p1!!');
        await loginPage.clickOnLoginButton();
        await communityPage.clickOnCommunityTab();
        await communityPage.validateText("All Accounts");
        await communityPage.clickOnAddAccount();
        await communityPage.newAccountUserRole('resource manager');
        await communityPage.enterAccountNewEmail(Math.random().toString().substr(2)+'@email.com');
        let date = new Date().toJSON();
        await communityPage.enterANewAccountName('cathalAccountTest'+date);
        await communityPage.enterANativeLanguage('English')
        await communityPage.enterASecondaryLangauge('Irish')
        await communityPage.enterManagerSelect("Cathal Doran");
        await communityPage.ClickOnCreate();
        await common.validateText("Success!")
        await common.search('cathalAccountTest')
        await communityPage.filterByUserRole();
        await communityPage.searchByUserRole('Resource Manager');
        await communityPage.clickOnApplyFilter();
        await communityPage.clickOnEditAccountProperties();
        await communityPage.clickOnDeleteAccount(); 
        await common.validateText("Success!")
    })
    
  for(const user of testData){

    test('Can add and delete language pair for -'+user, async () => {
        await loginPage.navigate();
        await loginPage.clickOnLoginLink();

        if(user.includes('ayhasan@keywordsstudios.com')){
            await loginPage.enterEmailAddress('ayhasan@keywordsstudios.com');
            await loginPage.enterPassword('Alliswell@3833');
            await loginPage.clickOnLoginButton();
            await communityPage.clickOnCommunityTab();
            await communityPage.clickOnAllUsers();
            await commonPage.search('ayaz.hasan+editor2@helpshift.com',1);
        }
        else{
            await loginPage.enterEmailAddress('ayaz.hasan+rm@helpshift.com');
            await loginPage.enterPassword('Alliswell@3832');
            await loginPage.clickOnLoginButton();
            await commonPage.search('ayaz.hasan+rmtrans@helpshift.com',0);
        }
        await communityPage.clickOnViewLanguagePair();
        await communityPage.clickOnAddLanguagePair();
        await communityPage.clickOnSourceLanguage();
        await commonPage.search('[en] English', 1);
        await commonPage.pressEnterKey();
        await communityPage.clickOnTargetLanguage();
        await commonPage.search('[hi] Hindi', 1);
        await commonPage.pressEnterKey();
        await communityPage.ClickOnCreate();
        await commonPage.validateText("Success!");
        await communityPage.clickOnDeleteIcon();
        await commonPage.clickOnYes();
        await commonPage.validateText("Success!");
    })
  }
    
});

