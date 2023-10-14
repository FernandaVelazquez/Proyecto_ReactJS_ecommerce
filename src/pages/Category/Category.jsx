import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useParams } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import { Link } from "react-router-dom";

const Category = () => {
  const [items, setItems] = useState([]);

  let { categoryId } = useParams();

  useEffect(() => {
    axios.get("/products.json").then((res) => setItems(res.data));
  }, []);

  let filteredProducts = items.filter((item) => {
    return item.category === categoryId;
  });

  return (
    <div>
      <div>
        <Filters />
      </div>
      <div className="Products-category">
        {filteredProducts.map((item) => {
          return (
            <div className="Product-details" key={item.id}>
              <Link to={`/product/${item.id}`}>
              <ProductItem item={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
