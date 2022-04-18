const puppeteer = require('puppeteer');
(async ()=>{
    const browser = await puppeteer.launch({headless:false,slowMo:20});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.waitForSelector('.a4bIc');
    await page.type('.a4bIc','dragon ball k');
    await page.waitForTimeout('2000');
    await page.keyboard.press('Backspace',{delay:10});//work with keyboard
    await page.type('.a4bIc','z');
    await page.keyboard.press('Enter',{delay:10});//work with keyboard
    await page.waitForXPath("//a[text()='Images']");//work with xpath
   // const [images] = await page.$x("//a[text()='Images']");//in-order to use xpath we need to create an object
   // await images.click();
   await page.$x("//a[text()='Images']").then(async Image =>{
       await Image[0].click();                              //modified way to use xpath without creating an object
   } )
    await page.waitForTimeout('3000');
    await browser.close();  
})();