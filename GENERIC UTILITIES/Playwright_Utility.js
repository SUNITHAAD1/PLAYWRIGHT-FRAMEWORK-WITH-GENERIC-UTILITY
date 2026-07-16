export default class Playwright_Utility
{

 upload_file(element)
 {
let [page]=await promise.all([page.waitForEvent('download'),
                          element.click()    

])
 }
 download_file(element)
 {
let [page]=await promise.all([page.waitForEvent('download'),
                              element.click()
          ])
 }



  /*


h.selectOption({index:1})

h.selectOption({value:jh})
h.selectOption({label:jdk})

*/

async selectoptionByIndex(element,option)
{
  await element.selectOption({index:option})
}
async selectoptionByValue(element,option)
{
  await element.selectOption({value:option})
}
async selectoptionByLabel(element,option)
{
  await element.selectOption({Label:option})  
}


async upload_file(element,path)
{
  await element.setInputFiles(path)
}





}