import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../redux/cartSclice";


export const store = configureStore({
    reducer:{
        cart:cartSliceReducer
    }
})