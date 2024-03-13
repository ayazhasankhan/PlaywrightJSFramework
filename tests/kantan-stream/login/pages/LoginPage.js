const { expect } = require('@playwright/test');
const { formPathWithParams } = require('../../utils/RouteHelper');
const route = require('../../utils/constants/routes');
const pageLocators = require('../components/PageLocators');



class LoginPage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async navigate() {
    const urlWithParams = formPathWithParams(`${route.loginPage}`);
    await this.page.goto(urlWithParams, {timeout: 220 * 10000, waitUntil: 'load',});
  }

  async clickOnLoginLink() {
    if( this.page.url().includes("qa")){
      await expect(this.page.locator(pageLocators.loginLink)).toBeVisible({timeout:30000});
      await this.page.locator(pageLocators.loginLink).click();
    }
    else{
      
    }
  }

  async enterEmailAddress(emailAddress='cathald@kantanai.io') {
    if( this.page.url().includes("qa")){
    await expect(this.page.locator(pageLocators.email)).toBeVisible({timeout:30000});
    await this.page.locator(pageLocators.email).fill(emailAddress);
    }
    else{
    await expect(this.page.locator('#emailGroup')).toBeVisible({timeout:30000});
    await this.page.locator('#emailGroup').getByLabel('').fill(emailAddress);
}
  }

  async enterPassword(password='Xb0x-T0p1!!') {
    if( this.page.url().includes("qa")){
    await expect(this.page.locator(pageLocators.password)).toBeVisible();
    await this.page.locator(pageLocators.password).fill(password);
    }
    else{
      await expect(this.page.locator('#password')).toBeVisible({timeout:30000});
      await this.page.locator('#password').fill(password);
    }
  }

  async clickOnLoginButton() {
    if( this.page.url().includes("qa")){
    await expect(this.page.locator(pageLocators.loginButton)).toBeVisible();
    await this.page.locator(pageLocators.loginButton).click();
    }
    else{
      await this.page.getByRole('button', { name: 'Login' }).click();
    }
      
  }

  async validateEmailErrorMessage(errorMessage='Please enter your email') {
    if( this.page.url().includes("qa")){
    await expect(this.page.locator(pageLocators.emailError)).toBeVisible();
    await expect(this.page.locator(pageLocators.emailError)).toContainText(errorMessage);
    }    
    else{
      
    }
  }
    async validatePasswordErrorMessage(errorMessage='Please enter your password') {
      if( this.page.url().includes("qa")){
    await expect(this.page.locator(pageLocators.passwordError)).toBeVisible();
    await expect(this.page.locator(pageLocators.passwordError)).toContainText(errorMessage);
      }
      else{
      
      }
  }
  
  async clickOnOurPrivacyPolicyLink() {
    if( this.page.url().includes("qa")){
    await expect(this.page.locator(pageLocators.ourPrivacyPolicy)).toBeVisible();
    await this.page.locator(pageLocators.ourPrivacyPolicy).click();
    }
    else{
      
    }
  }

  async clickOnClosePrivacyPolicy() {
    if( this.page.url().includes("qa")){
    await expect(this.page.locator(pageLocators.closePrivacyPolicy).nth(4)).toBeVisible();
    await this.page.locator(pageLocators.closePrivacyPolicy).nth(4).click();
    }
    else{
      
    }
  }

  async clickOnTogglePassword() {
    if( this.page.url().includes("qa")){
    await expect(this.page.locator(pageLocators.togglePassword)).toBeVisible();
    await this.page.locator(pageLocators.togglePassword).click();
    }
    else{
      
    }
  }

  async clickOnLogOut() {
    await expect(this.page.locator(pageLocators.logout)).toBeVisible({timeout:30000});
    await this.page.locator(pageLocators.logout).click();
    }
  }


module.exports = { LoginPage };
