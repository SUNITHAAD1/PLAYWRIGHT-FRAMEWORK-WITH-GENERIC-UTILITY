import exceljs from "exceljs"

export class XLUtility
{
    constructor()
    {
        this.path="E:/TEKPYRAMID/Desktop/playwright complete framework wirh all utilities/TEST DATA/Testdata.xlsx"
    }
    async readdatafromXL(sheet,row,col)
    {
    let book=new exceljs.workBook()
    book.xlsx.readFile(this.path)
    let sh=await book.getWorkSheet(sheet1)

        for(let i=1;i<sh.actualRowCount;i++)
            {
            let data= sh.getRow(row).getCell(col).toString()
            return data
            }

    }

    async writedataIntoXL(sheet,row,col,value)
    {
    let book=new exceljs.workBook()
    book.xlsx.readFile(this.path)
    let sh=book.getWorkSheet(sheet1)

        for(let i=1;i<sh.actualRowCount;i++)
            {
            let data=sh.getRow(row).getCell(col).toString()
            book.xlsx.writeFile(this.path)
        }
        
    }
}