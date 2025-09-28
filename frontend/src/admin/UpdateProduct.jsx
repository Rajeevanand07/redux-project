import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncDeleteProduct, asyncUpdateProduct } from "../actions/productAction";
import { useNavigate } from "react-router-dom";

const UpdateProduct = ({product}) => {
  const { register, handleSubmit, reset } = useForm(
    {
      defaultValues: {
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image
      }
    }
  );
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const updateProductFrom = (data) => {
    dispatch(asyncUpdateProduct(product.id, data));
    reset();
    navigate("/products");
  }

  const handleDelete = (id) => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  }

  return (
    <>
      <form onSubmit={handleSubmit(updateProductFrom)} className="flex flex-col gap-[20px] justify-center items-center h-[80%] p-[20px]">
        <h1 className="text-3xl">Update</h1>
        <input
          {...register("title")}
          className="border-b-1 focus:outline-none w-80"
          type="text"
          placeholder="Title"
        />
        <input
          {...register("price")}
          className="border-b-1 focus:outline-none w-80"
          type="number"
          placeholder="$Price"
        />
        <textarea
          {...register("description")}
          className="border-b-1 focus:outline-none w-80"
          type="text"
          placeholder="About product"
        ></textarea>
        <input
          {...register("category")}
          className="border-b-1 focus:outline-none w-80"
          type="text"
          placeholder="Category"
        />
        <input
          {...register("image")}
          className="border-b-1 focus:outline-none w-80"
          type="url"
          placeholder="Image URL"
        />
        <div className="flex gap-4">
          <button className="px-6 rounded-lg text-lg py-2 bg-gray-700 text-white cursor-pointer">
            Update
          </button>
          <button onClick={()=> handleDelete(product.id)} className="px-6 rounded-lg text-lg py-2 bg-red-500 text-white cursor-pointer">
            Delete
          </button>
        </div>
      </form>
    </>
  )
}

export default UpdateProduct
