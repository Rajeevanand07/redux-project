import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  user:null,
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {   //always handles synchronous code (here we cnnot call api)
      state.user = action.payload //{type:'user/loadUser',payload:data} 
    }
  },
})

export default userSlice.reducer
export const { loadUser } = userSlice.actions
