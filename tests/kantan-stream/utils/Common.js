const { expect } = require('@playwright/test');
import { readFileSync } from 'fs';

class Common{
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
  }

  async uploadFile(filepath, locator){
  // Read your file into a buffer.
     const buffer = readFileSync(filepath);
  // Create the DataTransfer and File
    const dataTransfer = await this.page.evaluateHandle((data) => {
    const dt = new DataTransfer();
    // Convert the buffer to a hex array
    const file = new File([data.toString('hex')], '10Segments.txt', { type: 'application/txt' });
    dt.items.add(file);
    return dt;
    }, buffer);
  // Now dispatch
    await this.page.dispatchEvent(locator, 'drop', { dataTransfer });
    }

    async search(searchText, index=0) {
      await expect(this.page.locator('[type="search"]').nth(index)).toBeVisible({timeout:30000});
      await this.page.locator('[type="search"]').nth(index).fill(searchText);
      await this.page.waitForTimeout(5000);
    }

    async validateText(text) {
      await expect(this.page.getByText(text).first()).toBeVisible({timeout:30000});
      await expect(this.page.getByText(text).first()).toContainText(text);
    }

    async wait(time) {
      await this.page.waitForTimeout(time);
    }

    async pressEnterKey() {
      await this.page.keyboard.press('Enter');
    }

    async clickOnYes() {
      try{
        await expect(this.page.locator('[data-bb-handler="confirm"]')).toBeVisible();
        await this.page.locator('[data-bb-handler="confirm"]').click();
      }
      catch(err){

      }

    }
}

module.exports = { Common };
