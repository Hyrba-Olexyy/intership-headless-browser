const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://pptr.dev/');

    await page.$eval('.navbar', (el) => {
        // eslint-disable-next-line no-param-reassign
        el.style.backgroundColor = '#1F54C0';
    });

    await page.screenshot({ path: './screenshots/color-change-test.png' });

    await browser.close();
})();
