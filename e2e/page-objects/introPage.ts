import {Locator, Page} from "@playwright/test";

export default class IntroPage {

    readonly page: Page;
    readonly headerMenu: Locator;
    readonly siteName: Locator;
    readonly iconList: Locator;
    readonly bigAvatar: Locator;
    readonly title: Locator;
    readonly subTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerMenu = page.getByTestId('header-menu');
        this.siteName = this.headerMenu.getByTestId('site-name');
        this.iconList = this.headerMenu.getByRole('listitem');
        this.bigAvatar = page.getByTestId('big-avatar');
        this.title = page.getByTestId('title-name');
        this.subTitle = page.getByTestId('subtitle-role');
    }

    /**
     * Navigates to the home page using the avatar
     */
    async goToHomePage() {
        await this.bigAvatar.click();
    }
}