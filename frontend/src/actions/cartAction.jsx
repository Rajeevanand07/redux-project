import axios from "../api/axiosConfig";
import { loadCart } from "../reducers/cartSlice";

const cartAction = () => async (dispatch) => {
  try{
    // console.log(getState());
    const res = await axios.get('/carts');
    dispatch(loadCart(res.data));
  }
  catch(err){
    console.log(err);
  }
}

export default cartAction
