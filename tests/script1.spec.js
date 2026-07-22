import {test} from "@playwright/test"
import exceljs from "exceljs"
import data from "../TEST DATA/home.json"
import { HomeFile } from "../POMPAGES/HomeFile.spec";
import { XLUtility } from "../UTILITIES/XLUtility";
import RandomNumberUtility from "../UTILITIES/RandomNumber_Utility"
import playwright_Utility from "../UTILITIES/Playwright_Utility"

test("scripttt --> 1",async({page})=>{
await page.goto(process.env.MAIN_URL,{waitUntil:'domcontentloaded'})
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
    
    let random_number=await r.generating_random_number()
    console.log(random_number)
    //let xx= await e.readdatafromXL("sheet1",1,0)
    //console.log(xx);
   // let yy=e.writedataIntoXL(sheet2,5,1)
await    h.dname.fill(depname+random_number)
await    h.email.fill(depemail+random_number+domainname)
await    h.phone.fill(depphone+random_number)
await    h.address.fill(depaddr)
await    h.female_radio_button.click()
await    h.wednesday_checkbox.click()
// await    p.selectoptionByValue(h.country,"India")
// await    p.selectoptionByValue(h.colors,"red")
// await    p.selectoptionByValue(h.sorted_list,"elephant")
await    h.monthformat(d.getSystemDate__MMDDYYYY)
await    h.dateformat(d.getSystemDate__DDMMYYYY)
await    h.fromdate(d.getSystemDate__DDMMYYYY)
await    h.todate(d.getDateByAddingDays(5))    
await    h.submit.click()
})