import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/');
})

test('navigate to home page', async ({page}) => {
    // const logo = page.getByRole('img', { name: "logo" });
    const logo = page.getByTestId('big-avatar');
    await logo.first().click();

    await expect(page).toHaveURL('http://localhost:5173/#home');
})