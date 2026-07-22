import { count } from "node:console";

export class HiddenElements
{
    constructor(page)
    {
        this.page=page;
        this.checkbox1=page.locator("//input[@id='input1']")
        this.checkbox2=page.locator("//input[@id='input2']")

        this.toggle_inputbox=page.locator("//button[@id='toggleInput']")
        this.toggle_inputbox_status=page.locator("//span[@id='statusLabel']")
        
        this.toggle_checkbox=page.locator("//button[@id='toggleCheckbox']")
        this.toggle_checkbox_status=page.locator("//span[@id='statusLabel']")
        
        this.load_ajax_content=page.locator("//button[@id='loadContent']")
        this.load_ajax_content_status=page.locator("//span[@id='statusLabel']")
    }
    async hiddenElements()
    { //await  this.checkbox1.click()
       
        await this.toggle_inputbox.click()
        let x=await this.toggle_inputbox_status.textContent()

        await this.toggle_checkbox.click()
        let y=await this.toggle_checkbox_status.textContent()
    
         await load_ajax_content.click({clickcount:3})
        let z= await this.load_ajax_content_status.textContent()    
        
       return {x,
        y//,
        //z

       }
    }


}