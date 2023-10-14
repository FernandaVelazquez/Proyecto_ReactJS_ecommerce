import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios("./products.json").then((res) => setItems(res.data));
  });

  return (
    <div className="Products">
      {items.map((item) => {
        return (
            <div className="Card-Product" key={item.id}>
          <Link to={`/product/${item.id}`}>
            <ProductItem key={item.id} item={item} />
          </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
