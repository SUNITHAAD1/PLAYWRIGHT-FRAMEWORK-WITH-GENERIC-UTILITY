import {test} from "@playwright/test"
import { Downloadpage } from "../POMPAGES/DownloadFile.spec"
test("script1",async({browser})=>{

    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    let d=await new Downloadpage(page)
    await d.downloadmethod()
    await d.static_webtable.first().waitFor()
    let s= await d.static_webtable.first().allTextContents()
    console.log(s)

    await d.dynamic_webtable.first().waitFor()
    let t= await d.dynmaic_webtable.last().allTextContents()
    console.log(t)
    
    await d.pagination_webtable.first().waitFor()
    let u= await d.pagination_webtable.first().allTextContents()
    console.log(u)
    

})