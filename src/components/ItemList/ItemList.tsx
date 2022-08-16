import  { TListBook } from "../../types/GlobalTypes";
import Item from "../Item/Item";

import "./ItemList.css";

const ItemList = ( { items }: TListBook ) => {
      return (
            <div className="item-list">
                  {
                        items.map( data => ( <Item key={data.id} item={data} /> ) )
                  }
            </div>
      );
}

export default ItemList;