interface Price {
  paper: number;
  file: number;
  print: number;
  book: number;
}

interface Category {
  id: string;
  name: string;
}

interface Content {
  id: string;
  itemId: string;
  itemNo: string;
  name: string;
  pageStart: number;
  pageEnd: number;
  image: string;
  url: string;
}

interface ItemWork {
  rowId: string;
  id: string;
  type: string;
  group: string;
  header: string;
  name: string;
  paper: number;
  print: number;
  book: number;
  file: number;
  relationship: string;
  relationshipId: string;
  discount: string;
  discountName: string;
  imageBookFrontAndBlack: string;
  filePath: string;
  fileName: string;
  isAnswer: boolean;
  categoryId: string;
  categoryIndex: string;
  contentId: string;
  contentIndex: string;
  detail: string;
  color: string;
  price: Price;
  blackUrl: string;
  frontUrl: string;
  categoryList: Category[];
  content: Content[];
}

interface ItemPreview {
  id: string;
  name: string;
  detail: string;
  frontUrl?: string;
  color?: string;
  paper: number;
  print: number;
  book: number;
  file: number;
}

interface ItemPreviewList {
  item: ItemPreview[];
}
