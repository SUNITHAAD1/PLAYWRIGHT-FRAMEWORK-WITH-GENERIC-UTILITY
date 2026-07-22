export class HomeFile
{
    constructor(page)
    {
        this.dname=page.locator("//input[@id='name']")
        this.email=page.locator("//input[@id='email']")
        this.phone=page.locator("//input[@id='phone']")
        this.address=page.locator("//textarea[@id='textarea']")
        this.male_radio_button=page.locator("//input[@id='male']")
        this.female_radio_button=page.locator("//input[@id='female']")

        //this.sunday_checkbox=page.getByRole("checkbox",{name:'sunday'})
        // this.monday_checkbox=page.getByRole("checkbox",{name:'sunday'})
        // this.tuesday_checkbox=page.getByRole("checkbox",{name:'sunday'})
            this.wednesday_checkbox=page.locator("//input[@id='wednesday']")
        this.country=page.locator("//select[@id='country']")
        this.colors=page.locator("//select[@id='colors']")
        this.sorted_list=page.locator("//select[@id='animals']")
        this.monthformat=page.locator("//input[@id='datepicker']")
        this.dateformat=page.locator("//input[@id='txtDate']")
        this.fromdate=page.locator("//input[@id='start-date']")
        this.todate=page.locator("//input[@id='end-date']")
        this.submit=page.locator("//button[@class='submit-btn']")

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



        //form page

        this.section1=page.locator("//input[@id='input1']")
        this.submit1=page.locator("//button[@id='btn1']")
        this.section2=page.locator("//input[@id='input2']")
        this.submit2=page.locator("//button[@id='btn2']")
        this.section3=page.locator("//input[@id='input3']")
        this.submit3=page.locator("//button[@id='btn3']")

    }

    async alldataMethod()
    {
        /*
                this.dname=page.locator("//input[@id='name']")
        this.email=page.locator("//input[@id='email']")
        this.phone=page.locator("//input[@id='phone']")
        this.address=page.locator("//textarea[@id='textarea']")
        this.male_radio_button=page.locator("//input[@id='male']")
        this.female_radio_button=page.locator("//input[@id='female']")

        //this.sunday_checkbox=page.getByRole("checkbox",{name:'sunday'})
        // this.monday_checkbox=page.getByRole("checkbox",{name:'sunday'})
        // this.tuesday_checkbox=page.getByRole("checkbox",{name:'sunday'})
            this.wednesday_checkbox=page.locator("//input[@id='wednesday']")
        this.country=page.locator("//select[@id='country']")
        this.colors=page.locator("//select[@id='colors']")
        this.sorted_list=page.locator("//select[@id='animals']")
        this.monthformat=page.locator("//input[@id='datepicker']")
        this.dateformat=page.locator("//input[@id='txtDate']")
        this.fromdate=page.locator("//input[@id='start-date']")
        this.todate=page.locator("//input[@id='end-date']")
        this.submit=page.locator("//button[@class='submit-btn']")

        */




    }

}