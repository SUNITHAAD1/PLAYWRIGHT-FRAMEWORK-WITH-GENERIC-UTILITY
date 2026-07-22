import {test} from "@playwright/test"
import data from "../home.json"
import dotenv from "dotenv"
import { HomeFile } from "../POMPAGES/HomeFile.spec"
dotenv.config({path:{".env"}})


test("script >> 1",async({page})=>{
await page.goto(process.env.MAIN_URL,{waitUntil:'load'})


/*


*/


let h=await new HomeFile(page)
await h.alldataMethod()

/*
//      this.submit=page.locator("//button[@class='submit-btn']")

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