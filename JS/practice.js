const puppeteer = require('puppeteer');
(async () =>{
    const browser = await puppeteer.launch({headless:false,slowMo:10,args:['--start-maximized']});
    const page = await browser.newPage();
    await page.goto('https://www.amazon.in/');
    await page.waitForSelector('#twotabsearchtextbox');
    await page.type('#twotabsearchtextbox','amazon eco dot');
    await page.waitForTimeout('3000');
    await page.keyboard.press('Enter',{delay:10});
    await page.waitForTimeout('3000');
   // await browser.close();
})();