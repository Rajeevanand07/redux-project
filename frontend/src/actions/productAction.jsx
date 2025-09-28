import axios from "../api/axiosConfig";
import { loadProduct } from "../reducers/productSlice";

const productAction = () => async (dispatch) => {
  try{
    // console.log(getState());
    const res = await axios.get('/products');
    dispatch(loadProduct(res.data));
  }
  catch(err){
    console.log(err);
  }
}

export default productAction
