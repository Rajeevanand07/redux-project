import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  product:[],
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProduct: (state, action) => {   //always handles synchronous code (here we cnnot call api)
      state.product = action.payload
    }
  },
})

export default productSlice.reducer
export const { loadProduct } = productSlice.actions
