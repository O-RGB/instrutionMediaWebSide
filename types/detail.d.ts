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
    category: any[]
    content: string[]
    examGroup: IExamGroup[]
    file: number
    print: number
    title: string
    titleDetail: string
}


interface IExamGroup{
    name:string,
    imagePath:string[]
}