import IBook from "../models/IBook"

export type TItem = {
      item: IBook
}

export type TListBook =  {
      items: Array<IBook>;
}