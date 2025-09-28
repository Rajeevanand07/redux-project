import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  cart:[],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart: (state, action) => {   //always handles synchronous code (here we cnnot call api)
      state.cart = action.payload
    }
  },
})

export default cartSlice.reducer
export const { loadCart } = cartSlice.actions
