import { configureStore } from "@reduxjs/toolkit";
import mobNavReducer from "./features/mobNavSlice";
import activationReducer from "./features/activationSystem";
import cartSlice from "./features/cartSlice";

export const store  = configureStore({
    reducer:{
        mobNav: mobNavReducer,
        activation: activationReducer,
        cart: cartSlice
    }
})