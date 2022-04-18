const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await page.goto('https://www.baidu.com')
  await new Promise(resolve => setTimeout(resolve, 2000))
  await page.type('.s_ipt', '测试', {
    delay: 500
  })
  await page.click('#su')
  await new Promise(resolve => setTimeout(resolve, 2000))
  await page.goBack()
 
  console.log('back')

  await new Promise(resolve => setTimeout(resolve, 2000))
  await page.goForward()

  console.log('forward')

  await browser.close()
})()