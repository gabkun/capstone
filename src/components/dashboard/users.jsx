import React, { useEffect, useState } from 'react';
import Sidebar from "./sidebar";
import axios from 'axios';


function UsersTbl() {
  const [clients, setClients] = useState([]);
  const [editedClient, setEditedClient] = useState({
    id: '',
    username: '',
    password: ''
  });
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/users/getclients')
      .then(res => setClients(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (clientid) => {
    axios.delete(`http://localhost:3001/users/deleteclient/${clientid}`)
      .then(res => {
        if (res.status === 200) {
          setClients(prevClients => prevClients.filter(client => client.id !== clientid));
        } else {
          console.error('Failed to delete client');
        }
      })
      .catch(err => console.log(err));
  };

  const handleEdit = (client) => {
    setEditedClient(client);
    setShowEditForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedClient(prevClient => ({
      ...prevClient,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    Object.keys(editedClient).forEach(key => formData.append(key, editedClient[key]));
  
    axios.put(`http://localhost:3001/users/updateclient/${editedClient.id}`, formData)
      .then(res => {
        if (res.status === 200) {
          axios.get('http://localhost:3001/users/getclients')
            .then(res => {
              setClients(res.data);
              setShowEditForm(false);
              setEditedClient({
                id: '',
                clientid: '',
                username: '',
                password: ''
              });
            })
            .catch(err => console.log(err));
        } else {
          console.error('Failed to update client');
        }
      })
      .catch(err => console.log(err));
  };

    return (
      <>
        <div class="flex flex-row">
          <Sidebar />
          <div class ="w-full overflow-x-auto shadow rounded-md">
          <div class=" w-full h-20  text-2xl font-semibold  text-black bg-gray-200 flex items-center">
                   USERS TABLE
                </div>
            <table class="w-full min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client ID</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passowrd</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
              {clients.map((client, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td class="px-6 py-4 whitespace-nowrap">{client.clientid}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{client.username}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{client.password}</td>
                    <td class="px-6 py-4 whitespace-nowrap flex space-x-2"> 
                      <button class="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out" onClick={() => handleEdit(client)}>Edit</button>
                      <button class="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out " onClick={() => handleDelete(client.id)}>Delete</button>
                    </td>
                  </tr>
             ))}
              </tbody>
            </table>
            {showEditForm && (
                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">Edit Client</h2>
                        <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">UserName</label>
                                <input type="text" name="username" value={editedClient.username} onChange={handleEdit} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input type="text" name="password" value={editedClient.password} onChange={handleEdit} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Update
                                </button>
                                <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setShowEditForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
          </div>
        </div>
      </>
    );
  }


export default UsersTbl;
