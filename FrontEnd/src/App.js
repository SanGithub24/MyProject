
import React from 'react'
import './index.css'
import NavBar from './components/Header/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Account from './pages/Account/Account';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Cart from './components/Cart/Cart';
import FoodCategory from './pages/FoodCategory/FoodCategory';
import Dashboard from './pages/Dashboard/Dash';
import Contact from './components/Footer/Contact';
import Forgotpwd from './pages/Login/Forgotpassword';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Pizza from './pages/FoodCategory/Pizza';
import SLfoods from './pages/FoodCategory/SLfoods';
import Burger from './pages/FoodCategory/Burger';
import Indian from './pages/FoodCategory/Indian';
import Beverages from './pages/FoodCategory/Beverages';
import Desserts from './pages/FoodCategory/Desserts';

import PizzaPD from './pages/ProductDisplay/PizzaPD';
import SLfoodsPD from './pages/ProductDisplay/SLfoodsPD';
import BurgerPD from './pages/ProductDisplay/BurgerPD';
import IndianPD from './pages/ProductDisplay/IndianPD';
import BeveragesPD from './pages/ProductDisplay/BeveragesPD';
import DessertsPD from './pages/ProductDisplay/DessertsPD';
import Productdisplay from './pages/ProductDisplay/Productdisplay';

import BeveragesNav from './pages/ProductDisplay/BeveragesNav';
import BurgerNav from './pages/ProductDisplay/BurgerNav';
import DessertsNav from './pages/ProductDisplay/DessertsNav';
import IndianNav from './pages/ProductDisplay/IndianNav';
import PizzaNav from './pages/ProductDisplay/PizzaNav';
import SLfoodsNav from './pages/ProductDisplay/SLfoodsNav';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Combine from './pages/ProductDisplay/Combine';
import { Payment } from './pages/Payment/Payment';


function App() {
    return ( 
      <>
      <Router>
        
        <div>
            
        <NavBar/>
          <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/cart" element={<Cart/>} />

            <Route path="/foodcat" element={<FoodCategory/>} />
            <Route path="/pizza" element={<Pizza/>} />
            <Route path="/slfoods" element={<SLfoods/>} />
            <Route path="/burger" element={<Burger/>} />
            <Route path="/indian" element={<Indian/>} />
            <Route path="/beverages" element={<Beverages/>} />
            <Route path="/desserts" element={<Desserts/>} />

            <Route path="/combine" element={<Combine/>} />
            <Route path="/payment" element={<Payment/>} /> 


            <Route path="/forgotpwd" element={<Forgotpwd/>} />
            <Route path="/dashboard" element={<Dashboard/>} />  


            <Route path="/account" element={<Account/>} />
            <Route path="/prodisplay" element={<Productdisplay/>} />
            <Route path="/pizzapd" element={<PizzaPD/>} />
            <Route path="/slfoodspd" element={<SLfoodsPD/>} />
            <Route path="/burgerpd" element={<BurgerPD/>} />
            <Route path="/indianpd" element={<IndianPD/>} />
            <Route path="/beveragespd" element={<BeveragesPD/>} />
            <Route path="/dessertspd" element={<DessertsPD/>} />

            
            <Route path="/pizzanav" element={<PizzaNav/>} />
            <Route path="/slfoodsnav" element={<SLfoodsNav/>} />
            <Route path="/burgernav" element={<BurgerNav/>} />
            <Route path="/indiannav" element={<IndianNav/>} />
            <Route path="/beveragesnav" element={<BeveragesNav/>} />
            <Route path="/dessertsnav" element={<DessertsNav/>} />
            
          </Routes>

          <ToastContainer />
            <Contact/>
       </div>
      
     </Router>
     </>
    );
}

export default App;