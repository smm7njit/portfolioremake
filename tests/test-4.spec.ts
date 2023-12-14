import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Send Message' }).click();
  await page.getByPlaceholder('Let\'s talk about...').click();
  await page.getByPlaceholder('Enter subject here:').click();
  await page.getByPlaceholder('jacob@google.com').click();
  await page.getByText('My Links Your').click();
  await page.locator('footer div').click();
  await page.getByText('I made this website as a redo').click();
  await page.getByRole('img', { name: 'Hero image' }).click();
  await page.getByText('Web Developer | Web Designer').click();
  await page.locator('#contact div').filter({ hasText: 'My Links' }).click();
});