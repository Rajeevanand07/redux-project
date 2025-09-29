import axios from "../api/axiosConfig";
import { loadCart } from "../reducers/cartSlice";

export const asyncCart = (userId) => async (dispatch) => {
  try {
    const {data} = await axios.get(`/carts?userId=${userId}`);
    dispatch(loadCart(data[0]));
  } catch (error) {
    console.log(error);
    
  }
}

export const asyncAddToCart = (product) => async () => {
  try {
    const {data} = await axios.post('/carts',product);
    
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
}
