import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncCart } from "../actions/cartAction";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.id) {
      dispatch(asyncCart(user.id));
    }
  }, [dispatch, user?.id]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <span className="text-lg text-gray-500">No user logged in.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-8 ">
      <img
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-lg mb-4 border-4 border-purple-200"
      />
      <h2 className="text-3xl font-bold text-purple-700 mb-1">{user.name}</h2>
      <p className="text-gray-600 mb-6">{user.email}</p>
      <div className="w-full max-w-md mt-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Your Cart</h3>
        {user.cart && user.cart.length > 0 ? (
          <ul className="space-y-4">
            {user.cart.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 bg-purple-100 rounded-lg p-3">
                <img
                  src={item.product?.image || "https://via.placeholder.com/48"}
                  alt={item.product?.title || "Product"}
                  className="w-12 h-12 object-cover rounded-lg border-2 border-purple-200"
                />
                <div className="flex-1">
                  <span className="block text-base font-semibold text-purple-800">{item.product?.title || "Product"}</span>
                  <span className="block text-sm text-gray-600">{item.product?.category}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-purple-700 font-semibold">₹{item.product?.price}</span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full text-xs font-semibold mt-1">
                    Qty: {item.quantity}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-500 text-center">Your cart is empty.</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
