import { createSlice } from '@reduxjs/toolkit'
const initialValue = false
const mobNavSlice = createSlice({
  name: 'mobNav',
  initialState: initialValue,
  reducers: {
    activeMobNav: (state) => {
      return !state
    },
  },
})

export const { activeMobNav } = mobNavSlice.actions
export default mobNavSlice.reducer
