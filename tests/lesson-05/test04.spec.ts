import { test, expect } from '@playwright/test';

// add personal note
test('add personal notes', async ({ page }) => {

    // navigate to page material.playwrightvn.com
    await page.goto('https://material.playwrightvn.com/');

    // step 1: click on Bài học 4: Personal notes
    await test.step("click on register page link", async () => {
        await page.locator('//a[text()="Bài học 4: Personal notes"]').click();
    });

    // step 2: check redirect to register page correcly
    await test.step('check redirect to register page correcly', async () => {
        await expect(page).toHaveTitle(/Personal Notes/);
    });

    // step 3: add note from data table
    const notes = [
        { title: 'click', content: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web' },
        { title: 'fill', content: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web' },
        { title: 'type', content: 'Hàm type dùng để nhập từng ký tự vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng' },
        { title: 'hover', content: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover' },
        { title: 'check', content: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked' },
        { title: 'uncheck', content: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked' },
        { title: 'selectOption', content: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown' },
        { title: 'press', content: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác' },
        { title: 'dblclick', content: 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web' },
        { title: 'dragAndDrop', content: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web' },
    ];
    await test.step('add note', async () => {
        for (let key in notes) {
            await page.locator('//input[@id="note-title"]').fill(notes[key].title);
            await page.locator('//textarea[@id="note-content"]').fill(notes[key].content);
            await page.locator('//button[@id="add-note"]').click();
        }
    });

    // step 4: check note count = 10
    await test.step('check note count', async () => {
        await expect(page.locator('//div[@id="note-count"]')).toHaveText("Total Notes: 10");
    });


    // step 5: search item with keyword: một hoặc nhiều
    await test.step('search one keyword', async () => {
        await page.locator('//input[@id="search"]').fill('một hoặc nhiều');
        const items = await page.locator('//ul[@id="notes-list"]//li').count();

        for (let i = 1; i <= items; i++) {
            let text = await page.locator(`//ul[@id="notes-list"]/li[${i}]//div[1]`).innerText();
            expect(text).toContain(("một hoặc nhiều").toLowerCase());
        }

    });

    // // step 6: search item with many keyword
    // await test.step('search many keyword', async () => {
    //     await page.locator('//input[@id="search"]').fill('phần tử');
    //     const items = await page.locator('//ul[@id="notes-list"]//li').count();

    //     for (let i = 1; i <= items; i++) {
    //         let text = await page.locator(`//ul[@id="notes-list"]/li[${i}]//div[1]`).innerText();
    //         expect(text).toContain(("phần tử").toLowerCase());
    //     }

    // });


});