const puppeteer = require('puppeteer');
const URL ='https://dev-pub.burrow.com/';
const elements = {
    seating : "//span[text()='Seating']",
    fieldCollections : "a[href='/living-room/seating/field']",
    threePieceSofa: "a[href^='/field-fabric/3-piece-sofa']",
    bedRoom : "//span[text()='Bedroom']",
    dressers : "a[aria-label='To Dressers']",
    lowDresser : ".product-card__details [href*='sku=FBRSR-DR-PS-L1-WN-DW']",
    color : "div[class='OK color-picker-color']",
    quanityTextBox : "div[class$='css-1uccc91-singleValue']",
    addToCart : "div[aria-label='Add to cart']",
    secureCheckout : "button[class='button btn-charcoal']",
    quantitySelector : ".pdp-add > .pdp-add-select"
};
(async ()=> {
    const browser = await puppeteer.launch({headless:false,args:['--start-maximized']});
    const page = await browser.newPage();
    //set viewport of the page
    await page.setViewport({
        'width':1400,
        'height':600
    });
    await page.goto(URL);
    await page.waitForXPath(elements.seating);
    await page.$x(elements.seating).then(async seating=>{
        await seating[0].evaluate(d=>d.click());
    })
    
   await page.waitForSelector(elements.fieldCollections);
   await page.click(elements.fieldCollections);

    await page.waitForSelector(elements.threePieceSofa);
    await page.click(elements.threePieceSofa);
   
    //await page.goBack();

    await page.waitForXPath(elements.bedRoom);
    await page.$x(elements.bedRoom).then(async bedroom =>{
        await bedroom[0].evaluate(b=>b.click());
    })
  
    await page.waitForSelector(elements.dressers);
    await page.click(elements.dressers);

    await page.waitForSelector(elements.lowDresser);
    await page.click(elements.lowDresser);

   await page.waitForSelector(elements.color);
    await page.click(elements.color);

   
    await page.waitForSelector(elements.quanityTextBox);
    await page.click(elements.quanityTextBox);
    await page.click(elements.quantitySelector,"2");
   
    await page.waitForSelector(elements.addToCart);
    await page.click(elements.addToCart);

    await page.waitForSelector(elements.secureCheckout);
    await page.select(elements.secureCheckout);
    await page.waitForTimeout("5000");
    await browser.close();
})();