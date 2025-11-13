const { test, expect } = require('@playwright/test');

test('homepage screenshot', async ({ page }) => {
  await page.goto('http://localhost:8000');
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
