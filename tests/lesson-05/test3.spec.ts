import { test, expect } from '@playwright/test';

test('add to do list', async ({ page }) => {

    // navigate to page material.playwrightvn.com
    await page.goto('https://material.playwrightvn.com/');

    // step 1: click on Bài học 3: Todo page
    await test.step("click on register page link", async () => {
        await page.locator('//a[text()="Bài học 3: Todo page"]').click();
    });

    // step 2: check redirect to register page correcly
    await test.step('check redirect to register page correcly', async () => {
        await expect(page).toHaveTitle(/To-Do List/);
    });

    // step 3: add 100 to-do items
    await test.step('add 100 to do item', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`To do ${i}`);
            await page.locator('//button[@id="add-task"]').click();

        }
    });

    // step 4: delete to do số lẻ
    await test.step('delete odd to do items', async () => {
        page.on('dialog', dialog => dialog.accept());
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id = "to-do-${i}-delete"]`).click();

            }
        }
    });
});