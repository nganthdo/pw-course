import {test, expect} from '@playwright/test';

test('add product to cart', async ({ page }) => {

    // navigate to page material.playwrightvn.com
    await page.goto('https://material.playwrightvn.com/');

    // step 1: click on Bài học 2: Product page
    await test.step("click on register page link", async () => {
        await page.locator('//a[text()="Bài học 2: Product page"]').click();
    });

    // step 2: check redirect to register page correcly
    await test.step('check redirect to register page correcly', async () => {
        await expect(page).toHaveTitle(/Simple E-commerce/);
    });

    // step 3: add to cart
    await test.step('add product to cart ', async () => {
        // product 1: 2 items
        await page.locator('//button[@data-product-id="1"]').click({clickCount: 2});
        // product 2: 3 items
        await page.locator('//button[@data-product-id="2"]').click({clickCount: 3});
        // product 3: 1 item
        await page.locator('//button[@data-product-id="3"]').click();
    });
});