import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Customers from './pages/Customers';
import Users from './pages/Users';
import AddProduct from './pages/AddProduct';
import AddOffers from './pages/AddOffers';
import Categories from './pages/Categories';
import Gallery from './pages/Gallery';
import Orders from './pages/Orders';
import Layout from './components/Layout/Layout';
import CatDisplay from './displayTable/CatDisplay';
import Account from './pages/Account';
import AccountEmp from './pages/AccountEmp';
import LoginAdmin from './pages/LoginAdmin';
import CusDetails from './pages/CusDetails';
import ModalFirst from './ModalFirst';
import HomeScreen from './components/HomeScreen/HomeScreen';


const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>

      <Route exact path="/modal">
        <ModalFirst/>
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/layout">
        <Layout />
      </Route>

      <Route exact path="/full">
        <HomeScreen />
      </Route>

      <Route exact path="/admin">
        <LoginAdmin />
      </Route>

      <Route exact path="/registration">
        <Registration />
      </Route>

      <Route exact path="/home">
        <Homepage />
      </Route>

      <Route exact path="/addproduct">
        <AddProduct />
      </Route>

      <Route exact path="/addoffers">
        <AddOffers />
      </Route>

      <Route exact path="/categories">
        <Categories />
      </Route>

      <Route exact path="/gallery">
        <Gallery />
      </Route>

      <Route exact path="/orders">
        <Orders />
      </Route>

      <Route exact path="/customers">
        <Customers />
      </Route>

      <Route exact path="/cusdetails">
        <CusDetails />
      </Route>

      <Route exact path="/users">
        <Users />
      </Route>

      <Route exact path="/catdis">
        <CatDisplay />
      </Route>

      <Route exact path="/accountadmin">
        <Account />
      </Route>

      <Route exact path="/accountemp">
        <AccountEmp />
      </Route>
    </>
  );
};

export default Routes;
