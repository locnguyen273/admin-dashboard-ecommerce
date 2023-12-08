import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AuthContextProvider from './components/context/Auth'

import Header from './components/Shared/Header'
import Menu from './components/Shared/Menu';

import Product from './components/Product/Product'
import CreateProduct from './components/Product/CreateProduct'
import UpdateProduct from './components/Product/UpdateProduct'

import Category from './components/Category/Category'
import CreateCategory from './components/Category/CreateCategory'
import DetailCategory from './components/Category/DetailCategory'
import UpdateCategory from './components/Category/UpdateCategory'

import Permission from './components/Permission/Permission'
import CreatePermission from './components/Permission/CreatePermission'
import UpdatePermission from './components/Permission/UpdatePermission'

import User from './components/User/User'
import CreateUser from './components/User/CreateUser'
import UpdateUser from './components/User/UpdateUser'

import UserCus from './components/UserCus/UserCus'
import CreateUserCus from './components/UserCus/CreateUserCus'
import UpdateUserCus from './components/UserCus/UpdateUserCus'

import Order from './components/Order/Order'
import DetailOrder from './components/Order/DetailOrder'
import ConfirmOrder from './components/Order/ConfirmOrder'
import Delivery from './components/Order/Delivery'
import ConfirmDelivery from './components/Order/ConfirmDelivery'
import CompletedOrder from './components/Order/CompletedOrder'
import CancelOrder from './components/Order/CancelOrder'
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Coupon from './components/Conpon/Coupon';

import CreateCoupon from './components/Conpon/CreateCoupon';
import UpdateCoupon from './components/Conpon/UpdateCoupon';
import Sale from './components/Sale/Sale';
import CreateSale from './components/Sale/CreateSale';
import UpdateSale from './components/Sale/UpdateSale';

function App() {
  return (
    <AuthContextProvider>
      <Router>

        <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">

          <Header />
          <Menu />

          <Switch>
            <Route exact path='/' component={Login} />

            <Route exact path='/customer' component={UserCus} />
            <Route path='/customer/create' component={CreateUserCus} />
            <Route path='/customer/update/:id' component={UpdateUserCus} />


            <Route exact path='/product' component={Product} />
            <Route path='/product/create' component={CreateProduct} />
            <Route path='/product/update/:id' component={UpdateProduct} />

            <Route exact path='/category' component={Category} />
            <Route path='/category/create' component={CreateCategory} />
            <Route path='/category/update/:id' component={UpdateCategory} />
            <Route path='/category/:id' component={DetailCategory} />

            {/* 
          <Route exact path='/producer' component={Category} />
          <Route path='/producer/create' component={CreateCategory} />
          <Route path='/producer/update/:id' component={UpdateCategory} />
          <Route path='/producer/:id' component={DetailCategory} /> */}


            <Route exact path='/permission' component={Permission} />
            <Route path='/permission/create' component={CreatePermission} />
            <Route path='/permission/update/:id' component={UpdatePermission} />

            <Route exact path='/user' component={User} />
            <Route path='/user/create' component={CreateUser} />
            <Route path='/user/update/:id' component={UpdateUser} />

            <Route exact path='/order' component={Order} />
            <Route path='/order/detail/:id' component={DetailOrder} />
            <Route path='/confirmorder' component={ConfirmOrder} />
            <Route path='/delivery' component={Delivery} />
            <Route path='/confirmdelivery' component={ConfirmDelivery} />
            <Route path='/completedorder' component={CompletedOrder} />
            <Route path='/cancelorder' component={CancelOrder} />

            <Route exact path='/coupon' component={Coupon} />
            <Route path='/coupon/create' component={CreateCoupon} />
            <Route path='/coupon/:id' component={UpdateCoupon} />

            <Route exact path='/sale' component={Sale} />
            <Route path='/sale/create' component={CreateSale} />
            <Route path='/sale/:id' component={UpdateSale} />

            <Route component={NotFound} />
          </Switch>;

      </div>

      </Router>
    </AuthContextProvider>




  );
}

export default App;
