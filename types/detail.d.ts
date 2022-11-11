interface DetailCollection {
    category_id: DocumentReference[] | any[]
    category: any[]
    content: string[]
    exam_group_id: DocumentReference[] | any[]
    exam_group: any[]
    file: number
    print: number
    title: string
    titleDetail: string
}
interface IDetailMock {
    url:string
    color:string
    category: any[]
    content: string[]
    examGroup: IExamGroup[]
    file?: number
    print?: number
    title: string
    titleDetail: string

    paperNumber:number
    paperCheck:boolean
    pdfEdit:boolean
    craditOnPaper:boolean
    freeMode:boolean
    downLoadFile?:boolean

    scrollAuto:boolean

    imageHaderFront: string
    imageHaderFrontWindows?: string
    imageHaderEnd: string
}


interface IExamGroup{
    name:string,
    pageNumber:string,
    imagePath:string[]
}