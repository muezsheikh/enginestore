import { createSlice } from '@reduxjs/toolkit'

const initialState = { fade: false }
const activationSystem = createSlice({
  name: 'activation',
  initialState,
  reducers: {
    activeFade: (state) => {
      const { fade } = state
      return !fade
    },
  },
})

export const { activeFade } = activationSystem.actions
export default activationSystem.reducer
