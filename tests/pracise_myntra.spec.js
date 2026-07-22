import {test} from "@playwright/test"

test("Myntra APP",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.myntra.com/women-kurtas-kurtis-suits")
    await Page.locator("//li[@class='product-base']/descendant::span[@class='product-discountedPrice']").first().waitFor()
    let p=await Page.locator("//li[@class='product-base']/descendant::span[@class='product-discountedPrice']").first().textContent()
    
    console.log(p)

})