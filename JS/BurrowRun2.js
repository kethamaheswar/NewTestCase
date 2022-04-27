const puppeteer = require('puppeteer');
(async ()=> {
    const browser = await puppeteer.launch({headless:false,args:['--start-maximized']});
    const page = await browser.newPage();
    //set viewport of the page
    await page.setViewport({
        'width':1400,
        'height':600
    });
    await page.goto('https://dev-pub.burrow.com/');
    await page.waitForXPath("//header/div[3]/div[1]/div[1]/div[1]/button[1]/span[1]");
    await page.$x("//header/div[3]/div[1]/div[1]/div[1]/button[1]/span[1]").then(async seating=>{
        await seating[0].evaluate(b => b.click());
    })
    await page.waitForXPath("//header/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await page.$x("//header/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]").then(async seating=>{
        await seating[0].click();
    })
    await page.goBack();
    await page.waitForXPath("//header/div[3]/div[1]/div[1]/div[3]/button[1]/span[1]");
    await page.$x("//header/div[3]/div[1]/div[1]/div[3]/button[1]/span[1]").then(async seating=>{
        await seating[0].evaluate(b => b.click());
})
    await page.waitForXPath("//header/div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await page.$x("//header/div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]").then(async dresser=>{
        await dresser[0].evaluate(e=>e.click());
    })
    await page.waitForTimeout('5000');
    await browser.close();
})();