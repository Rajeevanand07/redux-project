import { toast } from "react-toastify";
import axios from "../api/axiosConfig";
import { loadUser } from "../reducers/userSlice";

export const asyncPostUser = (user) => async () => {
  try{
    const res = await axios.post('/users',user);
    console.log(res.data);
  }
  catch(err){
    console.log(err);
  }
}

export const asyncLoginUser = (user) => async (dispatch) => {
  try {
    const {data} = await axios.get(`/users?email=${user.email}&pass=${user.pass}`);
    if(data[0] == undefined ) toast.error("login failed")
    else{
      localStorage.setItem("user", JSON.stringify(data[0]));
      toast.success("Login Successfully");
      dispatch(loadUser(data[0]))
    }
  } catch (error) {
    toast.error("Login Failed");
    console.log(error);
    
  }
}

export const asyncLogoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    toast("Logout Successfully");
    dispatch(loadUser(null))
  } catch (error) {
    console.log(error);
    
  }
}

export const asyncCurrentUser = () => async (dispatch) => {
  try{
    const currentUser = JSON.parse(localStorage.getItem("user"))
    console.log(currentUser);
    if (currentUser) dispatch(loadUser(currentUser));
    else console.log("login not found");
  }
  catch(err){
    console.log(err);
  }
}

