const puppeteer = require('puppeteer');
(async ()=>{
    const browser = await puppeteer.launch({headless:false,slowMo:20});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.waitForSelector('.a4bIc');
    await page.type('.a4bIc','dragon ball k');
    await page.waitForTimeout('2000');
    await page.keyboard.press('Backspace',{delay:10});
    await page.type('.a4bIc','z');
    await page.keyboard.press('Enter',{delay:10});
    await page.waitForTimeout('2000');
    await browser.close();
})();