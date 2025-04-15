import { default as playwright, Browser, Locator, Page } from 'playwright';
export { type Page, type Browser, type Locator };
export declare const launchBrowser: () => Promise<{
    page: playwright.Page;
    browser: playwright.Browser;
}>;
