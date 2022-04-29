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
    await page.waitForSelector("[aria-label='To Sectionals']");
    await page.click("[aria-label='To Sectionals']");
   //  await page.$x("[aria-label='To Sectionals']").then(async seating=>{
   //     await seating[0].evaluate(b => b.click());
   // })
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
    await page.waitForXPath("//a[text()='Prospect 3-Drawer Low Dresser']");
    await page.$x("//a[text()='Prospect 3-Drawer Low Dresser']").then(async drawer =>{
        await drawer[0].evaluate(e=>e.click());
    })
    await page.waitForXPath("//body/div[@id='main']/div[1]/div[3]/div[1]/section[1]/section[1]/div[2]/div[2]/div[1]/div[1]/div[2]");
    await page.$x("//body/div[@id='main']/div[1]/div[3]/div[1]/section[1]/section[1]/div[2]/div[2]/div[1]/div[1]/div[2]").then(async coloroak=>{
        await coloroak[0].evaluate(e=>e.click());
    })
    await page.waitForXPath("//*[@class='pdp-add-select__single-value css-1uccc91-singleValue']");
    await page.$x("//*[@class='pdp-add-select__single-value css-1uccc91-singleValue']").then(async choose=>{
        await choose[0].evaluate(e=>e.click());
    })
    
    await page.waitForTimeout('5000');
    await browser.close();
})();