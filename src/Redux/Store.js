
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";
const Store = configureStore({
    reducer: {
        productReducer: productReducer,
        cartReducer:cartReducer 
    }
})
export default Store;