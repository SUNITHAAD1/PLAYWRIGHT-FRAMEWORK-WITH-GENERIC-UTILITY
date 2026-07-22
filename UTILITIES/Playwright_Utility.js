export default class Playwright_Utility
{     
      constructor(page)
      {
        this.page=page;
      }      
      //frame
      async frameByURL(frameurl)
      {  
        return this.page.frame({url:frameurl})
      }
      async frameName(frameName)
      {
        return this.page.frame({name:frameName})
      }

      // windows
      async windowFile(element)
      {        let [popup] = await Promise.all([ 
                                      this.page.waitForEvent('popup'),
                                      element.click()
                                    ])
                return popup;
      }

      //alerts
      async dialogAccept() 
      {
        this.page.once("dialog",async dialog=>{  if(dialog.type()=='alert')
                                                 {   await dialog.accept() }
                                                })
      }

      


      //selectOption
      async selectOptionByIndex(element,index)
      {
        await element.selectOption({index})
      }
      async selectOptionByValue(element,value)
      {
        await element.selectOption({value})
      }
      async selectOptionByLabel(element,label)
      {
        await element.selectOption({label})  
      }

      //upload file
      async uploadFile(element,path)
      {       
        element.setInputFiles(path)
      }
      // download file
      async downloadFile(element)
      {        let [download] = await Promise.all([ 
                                      page.waitForEvent('download'),
                                      element.click()
                                    ])
                return download;
      }

      




    }