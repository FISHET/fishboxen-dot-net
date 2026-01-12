import {Page} from "@playwright/test";

export default class IntroPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToHomePage() {
        await this.page.getByTestId('big-avatar').click();
    }

}