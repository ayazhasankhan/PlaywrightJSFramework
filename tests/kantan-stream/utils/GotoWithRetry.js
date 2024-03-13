const { page } = require('@playwright/test');

/**
 * Due to the rare 502 error, we are using this method to navigate to the page
 * by using a retry mechanism on scenarios where the page is not loaded correctly.
 */

/*
const GotoWithRetry = async (page, url, retryCount= 5) => {
  if (retryCount < 0) {
    throw new Error(`Failed to navigate to ${process.env.BASE_URL}${url} after 5 retries.`);
  }
  await Promise.all([
    page.waitForResponse((response) => response.url().endsWith(url) && response.status() !== 502 && response.status() !== 503, { timeout: 5000 }),
    page.goto(url, {
      timeout: 220 * 1000,
      waitUntil: 'load',
    }),
  ]).catch(() => GotoWithRetry(page, url, retryCount - 1));
};

module.exports = { Retry };
*/