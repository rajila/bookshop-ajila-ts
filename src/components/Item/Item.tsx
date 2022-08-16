import { TItem } from "../../types/GlobalTypes";

import "./Item.css";

const Item = ( { item }: TItem ) => {    
      return (
            <div className="item">
                  <div className="card text-center">
                        <div className="card-header">
                              {item.title}
                        </div>
                        <div className="card-body">
                              <section>
                                    <img src={`/assets/img/books/${item.portada}`} alt={item.title} />
                              </section>
                              <section>
                                    <button className='btn btn-outline-primary'>Ver detalle</button>
                              </section>
                        </div>
                        <div className="card-footer">
                              Stock disponible: {item.stock}
                        </div>
                  </div>
            </div>
      );
}

export default Item;