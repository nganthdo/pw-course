import { test } from '@playwright/test';

test('Basic actions test', async ({ page }) => {

    await test.step("step 1", async () => {
        // enter code
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("step 2", async () => {
        // enter code
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("step 3", async () => {
        // enter code
        await page.locator("//input[@id='username']").fill("test"); //set giá trị cho textbox 1 phát
        await page.locator("//input[@id='email']").pressSequentially("test@test.com", { delay: 1_000 }); //mô phỏng gõ từng ký tự/phím theo thứ tự
    });

    await test.step("step 4", async () => {
        // enter code
        let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);

        await page.locator("//input[@id='male']").check();
        isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);
    });

    await test.step("step 5", async () => {
        //await page.locator("//select[@id='country']").selectOption('United States');

    });

    // upload file
    await test.step("step 6", async () => {
        await page.locator('input[type="file"]').setInputFiles('tests/lesson-05/data-test/data-test.txt');


    });
});

