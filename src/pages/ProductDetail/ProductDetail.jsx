import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import Filters from "../../components/Filters/Filters";

const ProductDetail = () => {
    let { id } = useParams();
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      axios.get('/products.json').then((res) => {
        const product = res.data.find(item => item.id === parseInt(id));
        setItem(product);
      });
    }, [id]);
  
    return (
      <div>
        <div>
          <Filters/>
        </div>
        
      <div className='Product-details'>
        {item ? <ProductItem item={item} /> : null}
      </div>
      </div>
    );
  };
  
  export default ProductDetail;