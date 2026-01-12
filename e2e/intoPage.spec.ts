import {test, expect} from '@playwright/test';
import IntroPage from "./page-objects/introPage.ts";

let introPage: IntroPage;

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/');
    introPage = new IntroPage(page);
})

test.describe('E2E tests for the header menu', () => {

    let headerMenuItems = new Map<String, String>(
        [
            ["menu-item-linked-in", 'https://www.linkedin.com/in/tifisher'],
            ["menu-item-github", 'https://github.com/FISHET'],
            ["menu-item-spotify", 'https://open.spotify.com/user/flying_hellfish'],
            ["menu-item-bluesky", 'https://bsky.app/profile/fishboxen.net']
        ]
    );

    test('the site name is correct', async () => {
        await expect(introPage.siteName).toHaveText("FISHBOXEN.NET");
    })

    test('the item URLs should be correct', async () => {

        await expect(introPage.iconList).toHaveCount(4);

        // looping this is ... less straightforward, but let's look into it
        await checkLink("menu-item-linked-in", "https://www.linkedin.com/in/tifisher");
        await checkLink("menu-item-github", "https://github.com/FISHET");
        await checkLink("menu-item-spotify", "https://open.spotify.com/user/flying_hellfish");
        await checkLink("menu-item-bluesky", "https://bsky.app/profile/fishboxen.net");
    })

    async function checkLink(testId: string, link: string) {
        expect(
            await introPage.page.getByTestId(testId)
                .getByRole("link")
                .getAttribute("href"))
            .toEqual(link);

    }
})

test.describe('E2E tests for the intro page', () => {

    test('avatar image is visible', async () => {
        await expect(introPage.bigAvatar).toBeVisible();
    })

    test('avatar image has correct altText', async () => {
        await expect(introPage.bigAvatar).toHaveAttribute("alt", "Come on in");
    })

    test('title is my name', async () => {
        await expect(introPage.title).toHaveText("TOM FISHER")
    })

    test('subtitle is my role', async () => {
        await expect(introPage.subTitle).toHaveText("Experienced SDET & Quality Coach")
    })

    test('navigate to home page', async ({page}) => {
        await introPage.goToHomePage();

        await expect(page).toHaveURL('http://localhost:5173/#home');
    })

})

