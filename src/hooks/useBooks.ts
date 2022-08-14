import { useState, useEffect } from "react";

import IBook from "../models/IBook";
import BookService from "../services/BookService";

const useBooks = () => {
      const [items, setItems] = useState([] as Array<IBook>);
      const [loading, setLoading] = useState(true);

      useEffect( () => {
            (new BookService()).getAll()
                  .then( data => {
                        setItems(data);
                  })
                  .catch(err => {
                        console.log('Error!!');
                  })
                  .finally( () => {
                        setLoading(false);
                        console.log('Fin!!');
                  });
      }, []);

      return { 
                  items,
                  loading
            };
}

export default useBooks;