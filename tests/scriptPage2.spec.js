import {test} from "@playwright/test"
import { HiddenElements } from "../POMPAGES/HiddenElements.spec"
import dotenv from 'dotenv'
dotenv.config({path:'.env'})

test("Hidden elements page 2",async({page})=>{
await page.goto(process.env.HIDDENELEMENT_URL,{waitUntil:'domcontentloaded'})

let h=await new HiddenElements(page)
let aa=await h.hiddenElements()
console.log(aa)

})