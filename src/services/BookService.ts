import IService from "../models/IService";
import IBook from "../models/IBook";

import { dataBook } from "../helpers/BookUtil";

class BookService implements IService <IBook> {
      getAll(): Promise<Array<IBook>> {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        resolve(dataBook);
                  }, 2000);
            });
      }
}

export default BookService;