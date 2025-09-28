import axios from "../api/axiosConfig";
import { loadUser, postUser } from "../reducers/userSlice";

export const asyncPostUser = (user) => async (dispatch) => {
  try{
    const res = await axios.post('/users',user);
    dispatch(postUser(res.data))
    console.log(res.data);
  }
  catch(err){
    console.log(err);
  }
}

export const asyncGetUser = () => async (dispatch) => {
  try{
    const res = await axios.get('/users');
    dispatch(loadUser(res.data))
  }
  catch(err){
    console.log(err);
  }
}

