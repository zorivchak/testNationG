import { Locator, Page } from "@playwright/test";


class BasePage {
    public page: Page;
    public pageUrl: string | null;

    constructor(page: Page) {
        this.page = page;
        this.pageUrl = null;
    }

    async navigate() {
        if (this.pageUrl) {
            await this.page.goto(this.pageUrl);
        }
        else {
            throw new Error('BasePage URL is not defined');
        }
    }
}


export default BasePage;