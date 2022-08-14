import { useEffect, useState } from "react";

import IBook from "../../models/IBook";
import BookService from "../../services/BookService";

const Books = () => {
      const [items, setItems] = useState([] as Array<IBook>);

      useEffect( () => {
            (new BookService()).getAll()
                  .then( data => {
                        setItems(data);
                  })
                  .catch(err => {
                        console.log('Error!!');
                  })
                  .finally( () => {
                        console.log('Fin!!');
                  });
      }, []);

      return (
            <div>
                  <h2>Books!!</h2>
                  <hr />
                  {
                        items.map( data => (<p key={data.id}>{data.id} - {data.title}</p>) )
                  }
            </div>
      );
}

export default Books;