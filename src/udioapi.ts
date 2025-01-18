import {chromium} from 'playwright';

export default async function udioapi(description: string, lyrics: string) {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
        // Navigate to Udio (replace with actual URL)
        await page.goto('https://udio.com/create');

        // Fill in song description
        await page.fill('[placeholder="Describe Your Song"]', description);

        // Select Custom radio button
        await page.click('text=Custom');

        // Fill in lyrics
        await page.fill('.lyric-editor textarea', lyrics);

        // Click Create button
        await page.click('button:has-text("Create")');

        // Wait for new songs to appear in the list
        await page.waitForSelector('.song-list-item');

        // Click three dots menu on the first song
        await page.click('.song-list-item:first-child button[aria-label="More options"]');

        // Click Share option
        await page.click('text=Share');

        // Click Embed tab
        await page.click('text=Embed');

        // Get the text from the copy textbox (assuming it's an input or textarea)
        return await page.inputValue('input[type="text"], textarea'); //iframe text
    } catch (error) {
        console.error('Automation failed:', error);
        throw error;
    } finally {
        await browser.close();
    }
}