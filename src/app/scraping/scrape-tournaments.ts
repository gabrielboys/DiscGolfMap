import { chromium } from "playwright";

async function getTournaments(url:string) 
{
    const browser = await chromium.launch({
        headless: true,
    });
    
    const page = await browser.newPage();
    await page.goto(url);

    //const html = await page.content()
}

export default getTournaments;