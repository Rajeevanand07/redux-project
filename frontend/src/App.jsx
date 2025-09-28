import { useEffect } from "react"
import Register from "./components/Register";
import './App.css'
import Nav from "./components/Nav";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUser } from "./actions/userAction";

const App = () => {
  const users = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  console.log(users);
  
  useEffect(() => {
    dispatch(asyncGetUser())
  },[dispatch])
  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
