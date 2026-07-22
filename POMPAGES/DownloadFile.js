export class Downloadpage
{
    constructor(page)
    {
        this.page=page;
        this.download_with_text=page.locator("//textarea[@id='inputText']")
        this.generate_and_download_textfile=page.getByRole("button",{name:'generateTxt'})
        this.generate_and_download_pdffile=page.getByRole("button",{name:'generatePdf'})
        this.pdffile=page.locator("//button[text()='Download PDF File']")
    
        this.singlefile=page.locator("//input[@id='singleFileInput']")
        this.uploadsinglefilebutton=page.getByRole("button",{name:'Upload Single File'})
        this.singleFileStatus=page.locator("//p[@id='singleFileStatus']")

        this.multiplefile=page.locator("//input[@id='multipleFilesInput']")
        this.uploadmultiplefilebutton=page.getByRole("button",{name:'Upload Multiple Files'})
        this.multipleFileStatus=page.locator("//p[@id='multipleFilesStatus']")
        
        this.static_webtable=page.locator("//div[@class='widget-content']/descendant::table[@name='BookTable']")
        this.dynamic_webtable=page.locator("//div[@id='HTML12']/descendant::div[@class='widget-content']")
        this.pagination_webtable=page.locator("//div[@class='table-container']")
        //below all are working
        //this.static_webtable=page.locator("//div[@id='HTML1']")
        //this.dynamic_webtable=page.locator("//div[@id='HTML12']/child::div[@class='widget-content']")
        //this.pagination_webtable=page.locator("//div[@id='HTML8']/child::div[@class='widget-content']")
    }
    
    async downloadmethod()
    {
        await this.download_with_text.fill('I am downloading file')
        await this.pdffile.click()
    
        await this.static_webtable.first().waitFor()
        let sta_table=await this.static_webtable.first().allTextContents()
        
        await this.pagination_webtable.last().waitFor()
        let pag_table=await this.pagination_webtable.last().allTextContents()        
        
        await this.dynamic_webtable.first().waitFor()
        let dyn_table=await this.dynamic_webtable.first().allTextContents()
    return {sta_table,pag_table,dyn_table}    
    }
}