const { test, expect } = require('@playwright/test');

const portfolioURL = 'http://localhost:3000';

test('Check if Mourtada Mbaye is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByRole('heading', { name: 'Mourtada Mbaye' }).click();
});

test('Check if hero image is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByRole('img', { name: 'Hero image' }).click();
});

test('Check if hero text is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByText('Web Developer | Web Designer').click();
});


test('Check if About image is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.locator('#about').getByRole('img').click();

});

test('Check if About Me text is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByText('I made this website as a redo').click();

});

test('Check if Skills section is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByRole('button', { name: 'Skills' }).click();
});

test('Check if text in Skills section is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByText('Node.js').click();
});

test('Check if 2nd line of text in Skills section is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByText('JavaScript').click();
});

test('Check if 3rd line of text in Skills section is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByText('React').click();
});

test('Check if Education section is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByRole('button', { name: 'Education' }).click();
});

test('Check if my Projects section has header', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByRole('heading', { name: 'My Projects' }).click();
});

test('Check if overlay is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.locator('.overlay').first().click();
});

test('Check if second overlay is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.locator('div:nth-child(2) > .h-52 > .overlay').click();
});

test('Check if third overlay is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.locator('div:nth-child(3) > .h-52 > .overlay').click();
});

test('Check if Links heading is functional', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByRole('heading', { name: 'My Links' }).click();
});

test('Check if Github Icon link works', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByRole('link', { name: 'Github Icon' }).click();
});

test('Check if Email button works', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByRole('button', { name: 'Send Message' }).click();
});

test('Check if Message Placeholder in Email section works', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByPlaceholder('Let\'s talk about...').click();
});

test('Check if Your Email Placeholder in Email section works', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.getByPlaceholder('jacob@google.com').click();
});

test('Check if Contact section is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.locator('#contact div').filter({ hasText: 'My Links' }).click();
});

test('Check if Footer div is present', async ({ page }) => {
    await page.goto(portfolioURL);
    await page.locator('footer div').click();

});















