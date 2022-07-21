const puppeteer = require('puppeteer');
const {
    URL,
    LOAD_OPTIONS,
    PDF_SAVE_OPTIONS,
    BROWSER_START_OPTIONS,
} = require('./constants/constants');

(async () => {
    const browser = await puppeteer.launch(BROWSER_START_OPTIONS);
    const page = await browser.newPage();
    await page.goto(URL, LOAD_OPTIONS);

    await page.focus('input');

    await page.keyboard.press('p');

    await page.keyboard.press('d');

    await page.keyboard.press('f');

    await page.waitForNetworkIdle(LOAD_OPTIONS);

    await page.keyboard.press('Enter');

    await page.waitForNetworkIdle(LOAD_OPTIONS);

    await page.pdf(PDF_SAVE_OPTIONS);

    await browser.close();
})();
