import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartList: [] },
  reducers: {
    addToCart: (state, action) => {
      const existingProd = state.cartList.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      )
      if (existingProd) {
        existingProd.quantity++
      } else {
        state.cartList = [...state.cartList, action.payload] // Use spread operator to create a new array
      }
    },
    decreaseQ: (state, action) => {
      const existingProdQ = state.cartList.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      )
      if (existingProdQ && existingProdQ.quantity > 1) {
        existingProdQ.quantity--
      }
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      state.cartList = state.cartList.filter((item) => !(item.id === id && item.size === size));
    }
    
  },
})

export const { addToCart, decreaseQ, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
