import IBook from "../../models/IBook";

interface IItem {
      item: IBook;
}

const Item = ( { item }: IItem ) => {    
      return (
            <div>
                  <p>{item.id}</p>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
            </div>
      );
}

export default Item;