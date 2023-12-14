import { test, expect } from '@playwright/test';

test('check that Mourtada Mbaye is present', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('heading', { name: 'Mourtada Mbaye' }).click();
});