import {test} from "@playwright/test"

test("Handling frames",async({browser})=>{
let context=await browser.newContext()
let page=await context.newPage()
await page.goto("https://ui.vision/demo/webtest/frames/")

let f1=await page.locator("//frame[@src='frame_1.html']").contentFrame()
await f1.locator("//input[@name='mytext1']").fill("frame 111111111111111111111")
await page.waitForTimeout(2000)

let f2=await page.locator("//frame[@src='frame_2.html']").contentFrame()
await f2.locator("//input[@name='mytext2']").fill("frame 2222222222222222222222")
await page.waitForTimeout(2000)

let f3=await page.locator("//frame[@src='frame_3.html']").contentFrame()
await f3.locator("//input[@name='mytext3']").fill("frame 3333333333333333333333")
await page.waitForTimeout(2000)

let f4=await page.locator("//frame[@src='frame_4.html']").contentFrame()
await f4.locator("//input[@name='mytext4']").fill("frame 4444444444444444444444")
await page.waitForTimeout(2000)



})