import { test, expect } from '@playwright/test';
import path from 'path';

test('register user', async ({ page }) => {

    // navigate to page material.playwrightvn.com
    await page.goto('https://material.playwrightvn.com/');

    // step 1: click on Bài học 1: Register Page (có đủ các element)
    await test.step("click on register page link", async () => {
        await page.locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]').click();
    });

    // step 2: check redirect to register page correcly
    await test.step('check redirect to register page correcly', async () => {
        await expect(page).toHaveTitle(/User Registration/);
    });

    // step 3: input user
    await test.step('input username', async () => {
        // username
        await page.locator('//input[@id="username"]').fill('emma');


    });

    // step 4: email
    await test.step('sinput email', async () => {
        await page.locator('//input[@id="email"]').fill('emma@test.com');

    });

    // step 5: gender
    await test.step('select gender', async () => {
        // radio button: gender
        await page.getByLabel('Female').check();

    });

    // step 6: select hobbies
    await test.step('select hobbies', async () => {
        await page.locator('//input[@id="reading"]').click();

    });

    // step 7: select interests
    await test.step('select interests', async () => {
        await page.locator('//select[@id="interests"]').selectOption(['Technology', 'Music']);
    });

    // step 8: select contry
    await test.step('select country', async () => {
        await page.locator('//select[@id="country"]').selectOption(['Canada']);
    });

    // step 9: select b-day
    await test.step('select birthday', async () => {
        await page.locator('//input[@id="dob"]').fill("1998-02-02");
    });

    // step 10: upload file
    await test.step("upload profile picture", async () => {
        await page.locator('//input[@type="file"]').setInputFiles(path.join(__dirname, 'data-test/data-test.txt'));

    });

    // step 11: input biography
    await test.step("input biography", async () => {
        await page.locator('//textarea[@id="bio"]').fill("This is me");

    });

    // step 12: rate us 
    await test.step("change rate us", async () => {
        await page.locator('//input[@id="rating"]').fill('8');

    });

    // step 13: favorite color 
    await test.step("change favorite color", async () => {
        await page.locator('//input[@id="favcolor"]').fill("#000000");

    });

    // step 14: check Newsletter 
    await test.step("check newsletter", async () => {
        await page.locator('//input[@id="newsletter"]').check();
    });

    // step 15: enable feature
    await test.step("enable feature", async () => {
        await page.locator('//span[@class="slider round"]').click();
    });

    //step 16: rating stars
    await test.step("rate stars", async () => {
        const starRating = page.locator('//div[@id="starRating"]');        
        await starRating.click();
    });

    //click Register button
    await test.step("click register button", async () => {
        await page.locator('//button[@type="submit"]').click();
    });









});