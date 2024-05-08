import './App.css';
import {
  BrowserRouter as Router,Routes,Route,Navigate, Switch} from "react-router-dom";
import Home from './components/landing/landing';
import About from './components/about/about';
import Products from './components/products/products';
import Form from './components/Form/form';
import SignUp from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import ProdTbl from './components/dashboard/products';
import RightBar from './components/dashboard/rightbar';
import SideBar from './components/dashboard/sidebar';
import UsersTbl from './components/dashboard/users';
import Addproducts from './components/addproducts/addproducts';
import Manageproducts from './components/manageproducts/manageproducts'
import AddClient from './components/addclient/addclient';
import ManageClients from './components/manageclient/manageclient';
import ClientDashboard from './components/ClientDashboard/clientdash';
import NotFound from './components/Not found/NotFound';


function App() {
  return (
<>
<div>

<Router> 

      <Routes>
   
        <Route path="/landing" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Form />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/rightbar" element={<RightBar />} />
        <Route path="/siddebar" element={<SideBar />} />
        <Route path="/userstbl" element={<UsersTbl />} />
        <Route path="/prodtbl" element={<ProdTbl />} />
        <Route path="/:clientid/addproducts" element={<Addproducts />} />
        <Route path="/manage" element={<Manageproducts />} />
        <Route path="/addclient" element={<AddClient />} />
        <Route path="/manageclient" element={<ManageClients />} />

        <Route path="*" element={<Navigate to="landing" />} />


        <Route path="/admindashboard" element={<Dashboard />} />
        <Route path="/dashboard/:clientid" element={<ClientDashboard />} />

        <Route component={NotFound} />

      </Routes>
      
    </Router>



</div>


</>
  );
}

export default App;
