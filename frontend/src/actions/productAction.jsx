import axios from "../api/axiosConfig";
import { loadProduct } from "../reducers/productSlice";

export const asyncLoadProducts = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/products');
    dispatch(loadProduct(data))
  } catch (error) {
    console.log(error);
    
  }
}

export const asyncCreateProduct = (product) => async (dispatch) => {
  try {
    const {data} = await axios.post('/products',product);
    dispatch(asyncLoadProducts());
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
