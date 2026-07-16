import {test} from "@playwright/test"
import exceljs from "exceljs"
import playwright_Utility from "../GENERIC UTILITIES/Playwright_Utility"
import { XLUtility } from "../GENERIC UTILITIES/XLUtility";
import RandomNumberUtility from "../GENERIC UTILITIES/RandomNumber_Utility"
import data from "../TEST DATA/home.json";
import { HomeFile } from "../POMPAGES/HomeFile.spec";
import { Date_Utility } from "../GENERIC UTILITIES/Date_Utility";

test("scripttt -->>>> 1",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil:'load'})
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
    let xx= await e.readdatafromXL("sheet1",1,0)
    console.log(xx);
   // let yy=e.writedataIntoXL(sheet2,5,1)
await    h.dname.fill(depname+random_number)
await    h.email.fill(depemail+random_number+domainname)
await    h.phone.fill(depphone+random_number)
await    h.address.fill(depaddr)
await    h.female_radio_button.click()
await    h.wednesday_checkbox.click()
await    p.selectoptionByIndex(h.country,1)
await    p.selectoptionByValue(h.colors,"red")
await    p.selectoptionByValue(h.sorted_list,"elephant")
await    h.monthformat(d.getSystemDate__MMDDYYYY)
await    h.dateformat(d.getSystemDate__DDMMYYYY)
await    h.fromdate(d.getSystemDate__DDMMYYYY)
await    h.todate(d.getDateByAddingDays(5))    
await    h.submit.click()

/*      this.submit=page.locator("//button[@class='submit-btn']")

        //right side
        // tabs
        this.tab_text=page.locator("//span[@class='wikipedia-input-box']")
        this.tab_search=page.locator("//input[@class='wikipedia-search-button']")
        this.tab_results=page.locator("//div[@id='wikipedia-search-result-link']")

        //dynamic buttons

        this.start_button=page.locator("//div[@class='widget-content']/child::button[@class='start']")
        this.stop_button=page.locator("//div[@class='widget-content']/child::button[@class='stop']")

        //pop up
        this.simple_alert=page.locator("//button[@id='alertBtn']")

        this.confirm_alert=page.locator("//button[@id='confirmBtn']")

        this.prompt_alert=page.locator("//button[@id='promptBtn']")

        //windows
        this.newtabbbb=page.locator("//div[@class='widget-content']/child::button[text()='New Tab']")
        this.pointme=page.locator("//div[@class='dropdown']/child::button[@class='dropbtn']")
        
        this.doubleclick_copy=page.locator("//input[@value='Hello World!']")
        //this.doublclick_paste=page.locator("")

        //drag and drop

        this.drag=page.locator("//div[@id='draggable']")
        this.drop=page.locator("//div[@id='droppable']")
        this.scroll_left=page.locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default']")
        this.scroll_right=page.locator("(//span[@class='ui-slider-handle ui-corner-all ui-state-default'])[2]")        
        this.allitems=page.locator("//div[@id='dropdown']")

        this.mobile_label=page.locator("//div[@id='mobiles']")
        this.laptop_link=page.locator("//div[@id='laptops']")
        this.broken_link=page.locator("//div[@id='broken-links']")
        this.vistor_count=page.locator("//span[@class='counter-wrapper text-counter-wrapper']")
        this.shadow_host=page.locator("//div[@id='shadow_host']")
        this.youtube_link=page.locator("//a[text()='Youtube']")


*/


})