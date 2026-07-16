export class HiddenElements
{
    constructor(page)
    {
        this.page=page;
        this.checkbox1=page.locator("//input[@id='input1']")
        this.checkbox2=page.locator("//input[@id='input2']")

        this.toggle_inputbox=page.locator("//button[@id='toggleInput']")
        this.toggle_checkbox=page.locator("//button[@id='toggleCheckbox']")
        this.load_ajax_content=page.locator("//button[@id='loadContent']")
        

    }


}