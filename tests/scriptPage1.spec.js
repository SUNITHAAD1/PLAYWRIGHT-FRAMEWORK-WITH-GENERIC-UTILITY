import {test} from "@playwright/test"
import data from "../TEST DATA/home.json"
import dotenv from "dotenv"
import { HomeFile } from "../POMPAGES/HomeFile"
dotenv.config({path:'.env'})


test("script Page 1 @Smoke",async({page})=>{
await page.goto(process.env.MAIN_URL,{waitUntil:'load'})
let depname=data.dname
let depemail=data.email
let domainname=data.domainname
let depphone=data.phone
let depaddr=data.address
console.log(depname)
console.log(depemail)
console.log(domainname)
console.log(depphone)
console.log(depaddr)
    let e=await new XLUtility()
    let r=await new RandomNumberUtility() 
    let h=await new HomeFile(page)
    let p=await new playwright_Utility()
    let d=await new Date_Utility()

})
