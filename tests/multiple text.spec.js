import {test,expect} from "@playwright/test"

test.skip("multiple test",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil:'load'})
await page.locator("//table[@name='BookTable']").first().waitFor()
let alldata=await page.locator("//table[@name='BookTable']").allTextContents()

for(let t of alldata)
{
  console.log(t)
    await expect.soft(page.locator("//table[@name='BookTable']")).toContainText("Java")
}
await console.log(`last line executed`)

})


test("multiple dropdown",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil:'load'})
await page.locator("//select[@id='colors']").first().waitFor()
await page.locator("//select[@id='colors']").first().waitFor()
let dropdowndata=await page.locator("//select[@id='colors']").first().allTextContents()

for(let l of dropdowndata)
{
    console.log(l)
    if(l=='Red')
        {         await l.click() 
                 await page.screenshot({path:"SCREENSHOTS/file1.png"})
                 await console.log(`Red color found in multiselect dropdown `) 
                 await expect.soft(l).toHaveValues(["Red","Red"])
        }
}
await console.log(`last line executed`)
})

test.skip("new ip address- framework",async({page})=>{

await page.goto("https://practicetestautomation.com/",{waituntil:'load'})

})