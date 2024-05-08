import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ClientDashboard(setProducts) {

  const products = [
    { name: "Product 1", price: "$10" },
    { name: "Product 2", price: "$20" },
    { name: "Product 3", price: "$30" },
  ];



  useEffect(() => {
    axios.get(`http://localhost:3001/products/getproducts/${clientid}`)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
}, []);


  const { clientid } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/getclient/${clientid}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [clientid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex">

      {/* Sidebar Navigation */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2"><Link to={`/${clientid}/dashboard`} className="block">Dashboard</Link></li>
          <li className="mb-2"><Link to={`/${clientid}/profile`} className="block">Profile</Link></li>
        </ul>

        {/* Products */}
        <h3 className="text-lg font-bold mt-8 mb-4">Products</h3>
        {products.length === 0 ? (
          <p>No products. Add products now.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-600">Product Name</th>
                <th className="py-2 px-4 border border-gray-600">Price</th>
                <th className="py-2 px-4 border border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border border-gray-600">{product.name}</td>
                  <td className="py-2 px-4 border border-gray-600">{product.price}</td>
                  <td className="py-2 px-4 border border-gray-600">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">User Dashboard</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-lg font-semibold">User ID: {clientid}</p>
            {userData && (
              <div className="mt-4">
                <p className="text-lg font-semibold">Username: {userData.username}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4">
                  <Link to={`/${clientid}/addproducts`}> Add +</Link>
                </button>
                {/* Render other user-specific data */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;