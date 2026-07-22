import {test} from "@playwright/test"
import dotenv from "dotenv"
dotenv.config({path:".env"})
import { Downloadpage } from "../POMPAGES/DownloadFile"

test("script 3 @Smoke",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto(process.env.BASE_URL)
    let d=await new Downloadpage(page)
    let x=  await d.downloadmethod()
    console.log(x)
    console.log(`smoke tag is executing`)
    console.log(`last line executed`)
    
})