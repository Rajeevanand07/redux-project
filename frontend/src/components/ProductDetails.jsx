import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UpdateProduct from "../admin/UpdateProduct";
import { asyncUpdateUser } from "../actions/userAction";
import { toast } from "react-toastify";


const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(
    (state) =>
      state.productReducer.products.find((prod) => prod.id === id)
  );
  const user = useSelector((state) => state.userReducer.user);


  const addToCartHandler = () => {
    const copyUser = {...user, cart:[...user.cart]};
    const x = copyUser.cart.findIndex(item => item.product.id === product.id); 
    
    if(x == -1){
      copyUser.cart.push({product, quantity:1});
    }
    else{
      copyUser.cart[x] ={
        product,
        quantity: copyUser.cart[x].quantity + 1
      };
    }
    dispatch(asyncUpdateUser(copyUser));
    toast("Product added to cart");
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-gray-500">Product not found.</span>
      </div>
    );
  }

  return (
    <div className="h-[80%] flex gap-7 items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row max-w-3xl w-full overflow-hidden">
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-200 p-8">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-64 w-64 rounded-xl"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-purple-700 mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mb-4">
              {product.category}
            </span>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-2xl font-bold text-purple-700">${product.price}</span>
            <button onClick={()=>addToCartHandler()} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {user?.isAdmin && <UpdateProduct product={product} />}
    </div>
  );
};

export default ProductDetails;
