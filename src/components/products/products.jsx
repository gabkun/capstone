import React, { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    axios.get("http://localhost:3001/products/getproducts")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <body className="h-screen bg-gray-400">
      <div className="h-96 w-full bg-gray-500 flex items-center justify-around">
        {/* Map through products array and render a component for each product */}
        {products.map((product, index) => (
          <div key={index} className="h-56 w-56 bg-gray-900 text-white text-3xl">
            {/* Render product image */}
            <img src={`http://localhost:3001/products/images/${product.image}`} alt={product.product} className="w-full h-full object-cover" />
            {/* Render product details */}
            <p>{product.product}</p>
            <p>{product.brand}</p>
            <p>{product.model}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </body>
  );
}

export default Products;