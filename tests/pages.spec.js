// Definitions only: run only after explicit permission to run UI tests.
const { test, expect } = require('@playwright/test');
const baseURL = process.env.SCANDOC_SITE_URL || 'https://ondrejnovotny.github.io/scandoc';
for (const language of ['cs', 'en']) {
  test(`${language}: privacy, deletion, terms, contact and responsive language switch`, async ({ page }) => {
    await page.goto(`${baseURL}/${language}/`);
    await expect(page.locator('html')).toHaveAttribute('lang', language);
    for (const section of ['privacy', 'deletion', 'terms', 'contact']) {
      await expect(page.locator(`#${section}`)).toBeAttached();
    }
    await expect(page.locator('#contact a')).toHaveAttribute('href', 'mailto:info@vyvojari-uo.cz');
    await expect(page.locator('.brand img')).toBeVisible();
    await expect(page.locator('body')).not.toContainText('TODO');
    await page.setViewportSize({ width: 375, height: 812 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
    const other = language === 'cs' ? 'en' : 'cs';
    await page.locator(`.languages a[hreflang="${other}"]`).click();
    await expect(page.locator('html')).toHaveAttribute('lang', other);
    await page.locator('a[href="#deletion"]').click();
    await expect(page).toHaveURL(/#deletion$/);
    await page.screenshot({ path: `tests/artifacts/scandoc-web-${other}.png`, fullPage: true });
  });
}
