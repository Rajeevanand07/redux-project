import { useEffect } from "react"
import Register from "./components/Register";
import './App.css'
import Nav from "./components/Nav";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./actions/userAction";
import Product from "./components/Product";
import CreateProduct from "./components/CreateProduct";
import { asyncLoadProducts } from "./actions/productAction";

const App = () => {

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser())
    dispatch(asyncLoadProducts())
  },[dispatch])
  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/admin/create-product" element={<CreateProduct/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
