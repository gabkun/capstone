import './App.css';
import {
  BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import Nav from './components/nav/nav';
import Home from './components/landing/landing';
import About from './components/about/about';
import Products from './components/products/products';
import Form from './components/Form/form';
import SignUp from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import Addproducts from './components/addproducts/addproducts';
import Manageproducts from './components/manageproducts/manageproducts'


function App() {
  return (
<>
<div>

<Router> 
<Nav/>
      <Routes>
   
        <Route path="/landing" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Form />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproducts" element={<Addproducts />} />
        <Route path="/manage" element={<Manageproducts />} />
        
        <Route path="*" element={<Navigate to="landing" />} />
      </Routes>
      
    </Router>



</div>


</>
  );
}

export default App;
