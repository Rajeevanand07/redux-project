import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../actions/userAction";
import e_img1 from "/e_img1.png";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-between items-center px-20 py-5">
        <span className="w-15 overflow-hidden">
          <img className="h-[100%] w-[100%] object-cover" src={e_img1} alt="" />
        </span>
        <div className="flex gap-[40px] p-5 justify-center items-center hover:cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `animated-underline text-lg transition-colors duration-200 ${
                isActive ? "active" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `animated-underline text-lg transition-colors duration-200 ${
                isActive ? "active" : "text-gray-700"
              }`
            }
          >
            Products
          </NavLink>
          {user && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `animated-underline text-lg transition-colors duration-200 ${
                  isActive ? "active" : "text-gray-700"
                }`
              }
            >
              Profile
            </NavLink>
          )}
          {user?.isAdmin && (
            <NavLink
              to="/admin/create-product"
              className={({ isActive }) =>
                `animated-underline text-lg transition-colors duration-200 ${
                  isActive ? "active" : "text-gray-700"
                }`
              }
            >
              create product
            </NavLink>
          )}
        </div>
        <span>
          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              className="px-6 rounded-lg text-lg py-2 bg-gray-700 text-white cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="px-6 rounded-lg text-lg py-2 bg-gray-700 text-white cursor-pointer"
            >
              Login
            </button>
          )}
        </span>
      </div>
    </>
  );
};

export default Nav;
