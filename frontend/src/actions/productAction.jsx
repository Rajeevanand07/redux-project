import { toast } from "react-toastify";
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
    toast("Product Created Successfully");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export const asyncUpdateProduct = (id,product) => async (dispatch) => {
  try {
    const {data} = await axios.patch(`/products/${id}`, product);
    dispatch(asyncLoadProducts());
    console.log(data);
    toast("Product Updated Successfully");
  } catch (error) {
    console.log(error);
  }
}

export const asyncDeleteProduct = (id) => async (dispatch) => {
  try {
    const {data} = await axios.delete(`/products/${id}`);
    dispatch(asyncLoadProducts());
    console.log(data);
    toast("Product Deleted Successfully");
  } catch (error) {
    console.log(error);
    
  }
}
  

