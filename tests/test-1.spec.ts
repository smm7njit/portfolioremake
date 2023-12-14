import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Skills' }).click();
await page.getByRole('button', { name: 'Education' }).click();
await page.getByText('New Jersey Institute of').click();
await page.getByRole('button', { name: 'Skills' }).click();
await page.getByText('Node.js').click();
await page.getByText('JavaScript').click();
await page.getByText('React').click();
await page.getByRole('heading', { name: 'My Projects' }).click();
await page.locator('.overlay').first().click();
await page.locator('div:nth-child(2) > .h-52 > .overlay').click();
await page.locator('div:nth-child(3) > .h-52 > .overlay').click();
await page.getByRole('heading', { name: 'My Links' }).click();
await page.getByRole('link', { name: 'Github Icon' }).click();
});
