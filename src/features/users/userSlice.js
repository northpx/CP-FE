import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from 'react-toastify'
export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        return await authService.register(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        return await authService.login(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getUserProductWishlist = createAsyncThunk('user/wishlist', async (thunkAPI) =>{
    try {
        return await authService.getUserWishlist()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const addProdToCart = createAsyncThunk('user/cart/add', async (cartData,thunkAPI) =>{
    try {
        return await authService.addToCart(cartData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getProdCart = createAsyncThunk('user/cart/get', async (thunkAPI) =>{
    try {
        return await authService.getCart()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getOrders = createAsyncThunk('user/order/get', async (thunkAPI) =>{
    try {
        return await authService.getMyOrders()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const removeProdCart = createAsyncThunk('user/cart/product/delete', async (id,thunkAPI) =>{
    try {
        return await authService.removeProdFromCart(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});
export const updateProdCart = createAsyncThunk('user/cart/product/update', async (cartDetail,thunkAPI) =>{
    try {
        return await authService.updateProdFromCart(cartDetail)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});
export const createAnOrder = createAsyncThunk('user/cart/create-order', async (orderDetail,thunkAPI) =>{
    try {
        return await authService.createOrder(orderDetail)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const updateAnUser = createAsyncThunk('user/profile/update', async (userData, thunkAPI) =>{
    try {
        return await authService.updateProfile(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const forgotPasswordToken = createAsyncThunk('user/password/token', async (userData, thunkAPI) =>{
    try {
        return await authService.forgotPassToken(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const resetPassword = createAsyncThunk('user/password/reset', async (userData, thunkAPI) =>{
    try {
        return await authService.resetPass(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


const getCustomerFromLocalStorage = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : null

const initialState = {
    user: getCustomerFromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            }).addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createUser = action.payload;
                if (state.isSuccess === true) {
                    toast.info("Create Successfully");
                }
            }).addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.error)
                }
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            }).addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                if (state.isSuccess === true) {
                    localStorage.setItem('token', action.payload.token)
                    toast.success("Login Successfully");
                }
            }).addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error('Incorrect Email or Password')
                }
            })
            .addCase(getUserProductWishlist.pending, (state) => {
                state.isLoading=true;
            }).addCase(getUserProductWishlist.fulfilled, (state, action) =>{
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.wishlist=action.payload;

            }).addCase(getUserProductWishlist.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(addProdToCart.pending, (state) => {
                state.isLoading=true;
            }).addCase(addProdToCart.fulfilled, (state, action) => {
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.cartProduct=action.payload;
                if(state.isSuccess){
                    toast.success("Product added to cart")
                }
            }).addCase(addProdToCart.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getProdCart.pending, (state) => {
                state.isLoading=true;
            }).addCase(getProdCart.fulfilled, (state, action) => {
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.cartProducts=action.payload;
            }).addCase(getProdCart.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(removeProdCart.pending, (state) => {
                state.isLoading=true;
            }).addCase(removeProdCart.fulfilled, (state, action) => {
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.deleteCartProduct=action.payload;
                if(state.isSuccess){
                    toast.success("Product deleted to cart")
                }
            }).addCase(removeProdCart.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if(state.isSuccess===false){
                    toast.error("Delete fail to cart")
                }
            })
            .addCase(updateProdCart.pending, (state) => {
                state.isLoading=true;
            }).addCase(updateProdCart.fulfilled, (state, action) => {
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.updateCartProduct=action.payload;
                if(state.isSuccess){
                    toast.success("Product updated to cart")
                }
            }).addCase(updateProdCart.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if(state.isSuccess===false){
                    toast.error("Somthing went wrong")
                }
            })
            .addCase(createAnOrder.pending, (state) => {
                state.isLoading=true;
            }).addCase(createAnOrder.fulfilled, (state, action) => {
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.orderedProduct=action.payload;
                if(state.isSuccess){
                    toast.success("Ordered successfully!")
                }
            }).addCase(createAnOrder.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if(state.isSuccess===false){
                    toast.error("Somthing went wrong")
                }
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading=true;
            }).addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.getorderedProduct=action.payload;
            }).addCase(getOrders.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateAnUser.pending, (state) => {
                state.isLoading=true;
            }).addCase(updateAnUser.fulfilled, (state, action) => {
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.updateUser=action.payload;
                if(state.isSuccess === true){
                    toast.success('Profile is updated')
                }
            }).addCase(updateAnUser.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if(state.isError === true){
                    toast.error('Something went wrong')
                }
            })
            .addCase(forgotPasswordToken.pending, (state) => {
                state.isLoading=true;
            }).addCase(forgotPasswordToken.fulfilled, (state, action) => {
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.token=action.payload;
                if(state.isSuccess === true){
                    toast.success('Email reset password sent successfully!')
                }
            }).addCase(forgotPasswordToken.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if(state.isError === true){
                    toast.error('Something went wrong!')
                }
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading=true;
            }).addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.pass=action.payload;
                if(state.isSuccess === true){
                    toast.success('Reset password successfully!')
                }
            }).addCase(resetPassword.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if(state.isError === true){
                    toast.error('Something went wrong!')
                }
            })
    }
})

export default authSlice.reducer;