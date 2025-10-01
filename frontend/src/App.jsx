import { lazy, useEffect } from "react"
import Register from "./components/Register";
import './App.css'
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./actions/userAction";
import { asyncLoadProducts } from "./actions/productAction";

const Nav = lazy(() => import('./components/Nav'));
const Home = lazy(() => import('./components/Home'));
const Product = lazy(() => import('./components/Product'));
const CreateProduct = lazy(() => import('./admin/CreateProduct'));
const ProductDetails = lazy(() => import('./components/ProductDetails'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));
const Profile = lazy(() => import('./components/Profile'));
const AuthWrapper = lazy(() => import('./components/AuthWrapper'));
const UnAuthWrapper = lazy(() => import('./components/UnAuthWrapper'));

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
        <Route path="/profile" element={
          <AuthWrapper>
            <Profile/>
          </AuthWrapper>
        } />
        <Route path="/product/:id" element={
          <AuthWrapper>
            <ProductDetails/>
          </AuthWrapper>
        } />
        <Route path="/admin/create-product" element={
          <AuthWrapper>
            <CreateProduct/>
          </AuthWrapper>
        } />
        <Route path="/login" element={
          <UnAuthWrapper>
            <Login/>
          </UnAuthWrapper>
        } />
        <Route path="/signup" element={
          <UnAuthWrapper>
            <Register/>
          </UnAuthWrapper>
        } />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App
