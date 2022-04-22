const puppeteer = require('puppeteer');
(async () =>{
    const browser = await puppeteer.launch({headless:false,args:['--start-maximized']});
    const page = await browser.newPage();
    //set viewPort of the page
    await page.setViewport({
        "width":1400,
        "height":600
    });

    await page.goto('https://dev-pub.burrow.com/');
    //await page.waitForSelector('.bx-close-xsvg'); this code is for popup page
    //await page.click('.bx-close-xsvg');
    await page.waitForXPath("//*[text()='SHOP SEATING']");
    await page.$x("//*[text()='SHOP SEATING']").then(async shopseat =>{
       await shopseat[0].click();
   })
    await page.waitForSelector('.plp-toolbar-nav__layout-filter-wrapper__filter-button');
    await page.click('.plp-toolbar-nav__layout-filter-wrapper__filter-button');

    await page.waitForXPath("//input[@name='sofas']");
    await page.$x("//input[@name='sofas']").then(async sofas =>{
        await sofas[0].evaluate(b => b.click());
  })
    await page.waitForSelector('.filter-apply__text');
    await page.click('.filter-apply__text');

    await page.waitForXPath("//*[text()='Nomad Sofa']");
    await page.$x("//*[text()='Nomad Sofa']").then(async nomad =>{
        await nomad[0].click();
    })
    await page.waitForXPath("//*[text()='Moveable chaise']");
    await page.$x("//*[text()='Moveable chaise']").then(async moveable =>{
        await moveable[0].click();
    })
    await page.waitForXPath("//div[@class='pdp-add-button btn btn-yellow']");
    await page.$x("//div[@class='pdp-add-button btn btn-yellow']").then(async addcart =>{
        await addcart[0].click();
    })

    await page.waitForXPath("//button[@class='button btn-charcoal']");
    await page.$x("//button[@class='button btn-charcoal']").then(async checkout =>{
        await checkout[0].click();
    })
    await page.waitForTimeout('10000');
    await browser.close();
})();