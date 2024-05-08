import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from '../nav/nav';

function Products() {
  
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:3001/products/getproducts")
      .then(res => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter(product =>
      product.product.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.model.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
    <Nav />
    <div className="h-screen bg-gray-400">
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-500 rounded-md"
        />
      </div>
      <div className="h-96 w-full bg-gray-500 flex items-center justify-around mt-4">

        {filteredProducts.map((product, index) => (
          <div key={index} className="h-56 w-56 bg-gray-900 text-white text-3xl">

            <img src={`http://localhost:3001/products/images/${product.image}`} alt={product.product} className="w-full h-full object-cover" />

            <p>{product.product}</p>
            <p>{product.brand}</p>
            <p>{product.model}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Products;