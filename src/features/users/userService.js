import axios from 'axios'
import { base_url, config } from '../../utils/axiosConfig';


const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, JSON.stringify(userData), { headers: { 'Content-Type': 'application/json' } });
    if (response.data) {
        localStorage.setItem('customer', JSON.stringify(response.data))
        return response.data;
    }

}
const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, JSON.stringify(userData), { headers: { 'Content-Type': 'application/json' } });
    if (response.data) {
        localStorage.setItem('customer', JSON.stringify(response.data))
        return response.data;
    }

}

const getUserWishlist = async () =>{
    const response = await axios.get(`${base_url}user/getwishlist`, config)
    if(response.data){
        return response.data
    }
}

const addToCart = async (cartData) =>{
    const response = await axios.post(`${base_url}user/cart`, cartData, config)
    if(response.data){
        return response.data
    }
}
 
const getCart = async () =>{
    const response = await axios.get(`${base_url}user/cart`, config)
    if(response.data){
        return response.data
    }
}

const removeProdFromCart = async (id) => {
    const response = await axios.delete(`${base_url}user/delete-product-cart/${id}`, config)
    if(response.data){
        return response.data
    }
}
const updateProdFromCart = async (cartDetail) => {
    const response = await axios.delete(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, config)
    if(response.data){
        return response.data
    }
}

const createOrder = async (orderDetail) =>{
    const response = await axios.post(`${base_url}user/cart/cash-order`,orderDetail, config)
    if (response.data){
        return response.data
    }
}

const getMyOrders = async () =>{
    const response = await axios.get(`${base_url}user/getorders`, config)
    if(response.data){
        return response.data
    }
}
const updateProfile = async (userData) =>{
    const response = await axios.put(`${base_url}user/edit-user`, userData, config)
    if(response.data){
        return response.data
    }
}

const forgotPassToken = async (userData) =>{
    const response = await axios.post(`${base_url}user/forgot-password-token`, userData)
    if(response.data){
        return response.data
    }
}

const resetPass = async (userData) =>{
    const response = await axios.put(`${base_url}user/reset-password/${userData.token}`, {password:userData?.password})
    if(response.data){
        return response.data
    }
}



export const authService = { register, login, getUserWishlist, addToCart, getCart, removeProdFromCart, updateProdFromCart, createOrder, getMyOrders, updateProfile, forgotPassToken, resetPass }