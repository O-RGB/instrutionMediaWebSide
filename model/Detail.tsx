import { DocumentReference, getDoc } from "firebase/firestore";
import { getByID } from "../api/fetch/fetchFirebase";

export class DetailModel implements DetailCollection {
  category_id: DocumentReference[] | any[] = [];
  exam_group_id: DocumentReference[] | any[] = [];

  public category: any[] = [];
  public exam_group: any[] = [];
  public content: string[] = [];
  public file: number = 0;
  public print: number = 0;
  public title: string = "";
  public titleDetail: string = "";

  resolveExamGroup(): Promise<void> {
    return new Promise((resolve) => {
      this.exam_group_id.forEach((element: any, index: number) => {
        getDoc(element).then((x) => {
          let temp: any = x.data();
          this.exam_group.push(temp);
          if (index == this.exam_group_id.length - 1) {
            return resolve();
          }
        });
      });
    });
  }

  resolveCategory(): Promise<void> {
    return new Promise((resolve) => {
      this.category_id.forEach((element: any, index: number) => {
        getDoc(element).then((x) => {
          let temp: any = x.data();
          this.category.push(temp.name);
          if (index == this.category_id.length - 1) {
            return resolve();
          }
        });
      });
    });
  }

  getDetailById(id: string): Promise<void> {
    return getByID("detail", id).then((e: DetailCollection) => {
      this.category_id = e.category_id;
      this.exam_group_id = e.exam_group_id;
      this.content = e.content;
      this.file = e.file;
      this.print = e.print;
      this.title = e.title;
      this.titleDetail = e.titleDetail;
    });
  }

  toJson(): any {
    return {
      category: this.category,
      exam_group: this.exam_group,
      content: this.content,
      file: this.file,
      print: this.print,
      title: this.title,
      titleDetail: this.titleDetail,
    };
  }

  toDetailCollection(): DetailCollection {
    return {
      category: this.category,
      category_id: this.category_id,
      content: this.content,
      exam_group: this.exam_group_id,
      exam_group_id: this.exam_group_id,
      file: this.file,
      print: this.print,
      title: this.title,
      titleDetail: this.titleDetail,
    };
  }
}
