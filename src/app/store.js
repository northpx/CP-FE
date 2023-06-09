import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/users/userSlice'
import productReducer from '../features/products/productSlice'
import blogReducer from '../features/blogs/blogSlice'
import contactReducer from '../features/contacts/contactSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false,
  }),
});
