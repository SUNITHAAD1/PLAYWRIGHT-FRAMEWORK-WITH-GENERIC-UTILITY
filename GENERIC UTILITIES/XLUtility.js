import exceljs from "exceljs"

export class XLUtility
{
    constructor()
    {
        this.path="E:/TEKPYRAMID/Desktop/playwright complete framework wirh all utilities/TEST DATA/Testdata.xlsx"
    }
    async readdatafromXL(sheet,row,col)
    {
    let book=await new exceljs.workBook()
    await book.xlsx.readFile(this.path)
    let sh=await book.getWorkSheet(sheet1)

        for(let i=1;i<sh.actualRowCount;i++)
            {
            let data=await sh.getRow(row).getCell(col).toString()
            return data
            }

    }

    async writedataIntoXL(sheet,row,col,value)
    {
    let book=await new exceljs.workBook()
    await book.xlsx.readFile(this.path)
    let sh=await book.getWorkSheet(sheet1)

        for(let i=1;i<sh.actualRowCount;i++)
            {
            let data=await sh.getRow(row).getCell(col).toString()
            await book.xlsx.writeFile(this.path)
        }
        
    }
}