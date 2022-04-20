const puppeteer = require('puppeteer');
(async () =>{
    const browser = await puppeteer.launch({headless:false,slowMo:10,args:['--start-maximized']});
    const page = await browser.newPage();
    await page.goto('https://www.amazon.in/');
    await page.waitForSelector('#twotabsearchtextbox');
    await page.type('#twotabsearchtextbox','amazon eco dot');
    await page.waitForTimeout('3000');
    await page.keyboard.press('Enter',{delay:10});
    await page.waitForXPath("//span[contains(text(),'Echo Dot (3rd Gen) - #1 smart speaker brand in Ind')]");
    //await page.$x("//span[contains(text(),'Echo Dot (3rd Gen) - #1 smart speaker brand in Ind')]").then(async picture =>{
     //   await picture[0].click();
  //  }) 
    await page.waitForTimeout('3000');
    const [picture] = await page.$x("//span[contains(text(),'Echo Dot (3rd Gen) - #1 smart speaker brand in Ind')]");
    await picture.click();
    
    await page.waitForSelector('#quantity');
    await page.select('#quantity','2');
    await page.waitForSelector('#add-to-cart-button');
    await page.click('#add-to-cart-button',{clickCount: 1});  
    await page.waitForTimeout('5000');
    await browser.close();
})();