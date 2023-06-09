import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPws from './pages/ForgotPws';
import Signup from './pages/Signup';
import ResetPws from './pages/ResetPws';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { PrivateRouting } from './routing/PrivateRouting';
import { OpenRouting } from './routing/OpenRouting';
import Order from './pages/Order';
import Profile from './pages/Profile';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='product' element={<OurStore/>}/>
            <Route path='product/:id' element={<SingleProduct/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='blog/:id' element={<SingleBlog/>}/>
            <Route path='cart' element={<PrivateRouting><Cart/></PrivateRouting>}/>
            <Route path='order' element={<PrivateRouting><Order/></PrivateRouting>}/>
            <Route path='profile' element={<PrivateRouting><Profile/></PrivateRouting>}/>
            <Route path='checkout' element={<PrivateRouting><Checkout/></PrivateRouting>}/>
            <Route path='compare-product' element={<CompareProduct/>}/>
            <Route path='wishlist' element={<PrivateRouting><Wishlist/></PrivateRouting>}/>
            <Route path='login' element={<OpenRouting><Login/></OpenRouting>}/>
            <Route path='forgot-password' element={<ForgotPws/>}/>
            <Route path='signup' element={<OpenRouting><Signup/></OpenRouting>}/>
            <Route path='reset-password/:token' element={<ResetPws/>}/>
            <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='refund-policy' element={<RefundPolicy/>}/>
            <Route path='shipping-policy' element={<ShippingPolicy/>}/>
            <Route path='term-condition' element={<TermAndCondition/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
