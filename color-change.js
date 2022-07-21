const puppeteer = require('puppeteer');
const {
    URL,
    SCREENSHOT_SAVE_OPTIONS,
    BAR_SELECTOR,
    BROWSER_START_OPTIONS,
    LOAD_OPTIONS,
} = require('./constants/constants');

(async () => {
    const browser = await puppeteer.launch(BROWSER_START_OPTIONS);
    const page = await browser.newPage();

    await page.goto(URL, LOAD_OPTIONS);

    await page.$eval(BAR_SELECTOR, (el) => {
        // eslint-disable-next-line no-param-reassign
        el.style.backgroundColor = '#1F54C0';
    });

    // await page.$eval(BAR_SELECTOR, ((color) => (el) => el.backgroundColor = color )(NEW_COLOR));

    await page.screenshot(SCREENSHOT_SAVE_OPTIONS);

    await browser.close();
})();
