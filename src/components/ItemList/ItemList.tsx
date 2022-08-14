import IListBook from "../../models/IListBook";
import Item from "../Item/Item";

const ItemList = ( { items }: IListBook ) => {
      return (
            <div>
                  {
                        items.map( data => ( <Item key={data.id} item={data} /> ) )
                  }
            </div>
      );
}

export default ItemList;