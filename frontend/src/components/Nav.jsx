import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <div className="flex gap-[40px] p-5 justify-center items-center hover:cursor-pointer">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Products</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </>
  )
}

export default Nav
