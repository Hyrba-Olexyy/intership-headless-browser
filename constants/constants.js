const URL = 'https://pptr.dev/';
const SCREENSHOT_SAVE_OPTIONS = { path: './screenshots/color-change-test.png' };
const PDF_SAVE_OPTIONS = { path: './pdf/search-test.pdf', format: 'a4' };
const BAR_SELECTOR = '.navbar';
const LOAD_OPTIONS = { waitUntil: 'networkidle0' };
const BROWSER_START_OPTIONS = { headless: true };

module.exports = {
    URL,
    SCREENSHOT_SAVE_OPTIONS,
    BAR_SELECTOR,
    PDF_SAVE_OPTIONS,
    LOAD_OPTIONS,
    BROWSER_START_OPTIONS,
};
