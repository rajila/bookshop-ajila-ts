import useBooks from "../../hooks/useBooks";
import ItemList from "../ItemList/ItemList";

import { Spinner } from "react-bootstrap";

const ItemListContainer = () => {
      const { items, loading } = useBooks();
      return (
            <div>
                  {
                        loading ? <Spinner animation="border" role="status" /> : <ItemList items={items} />
                  }
            </div>
      );
}

export default ItemListContainer;