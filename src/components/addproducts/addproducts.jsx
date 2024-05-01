import React, { useState } from 'react';
import axios from 'axios';

function Addproducts() {
    const [product, setProduct] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState()
    const [msg, setMsg] = useState("");
       
    const upload = () => {
        const formData = new FormData()
        formData.append("product", product);
        formData.append("brand", brand);
        formData.append("model", model);
        formData.append("price", price);
        formData.append('file', file)
        axios.post('http://localhost:3001/products/addproduct',formData )
        .then((response) => {
            console.log(response);
            if(response.data.Status === 'Success') {
                setMsg("File Successfully Uploaded");
            }else{
                setMsg("Uploaded");
            }
        })
        .catch(er => console.log(er))
    }
    return (
        <div className="container mx-auto mt-12">
        <h1 className="text-3xl font-bold mb-8">Insert Products</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <label htmlFor="product" className="block mb-1">Product Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded" placeholder='Enter Product Name' autoComplete='off' onChange={(e) => setProduct(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="brand" className="block mb-1">Brand</label>
                <input type="text" id="brand" className="w-full px-4 py-2 border rounded" placeholder='Enter Brand' autoComplete='off' onChange={(e) => setBrand(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="model" className="block mb-1">Model</label>
                <input type="text" id="model" className="w-full px-4 py-2 border rounded" placeholder='Enter Model' autoComplete='off' onChange={(e) => setModel(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="price" className="block mb-1">Price</label>
                <input type="text" id="price" className="w-full px-4 py-2 border rounded" placeholder='Enter Price(PHP)' autoComplete='off' onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className="col-span-2">
                <label htmlFor="file" className="block mb-1">Upload File</label>
                <input type="file" id="file" className="w-full px-4 py-2 border rounded" onChange={(e) => setFile(e.target.files[0])}/>
            </div>
        </div>
        <button type="button" className="block w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={upload}>Upload</button>
        <h1 className="text-center text-sm mt-6">{msg}</h1>
    </div>
  )
}

export default Addproducts;