const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://pptr.dev/', { waitUntil: 'networkidle0' });

    await page.focus('input');

    await page.keyboard.press('p');

    await page.keyboard.press('d');

    await page.keyboard.press('f');

    await page.waitForNetworkIdle({ waitUntil: 'networkidle0' });

    await page.keyboard.press('Enter');

    await page.pdf({ path: './pdf/search-test.pdf', format: 'a4' });

    await browser.close();
})();
