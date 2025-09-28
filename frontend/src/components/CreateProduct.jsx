import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../actions/productAction";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const addProductFrom = (data) => {
    data.id = nanoid();
    dispatch(asyncCreateProduct(data))
    navigate("/products")
    reset()
  }
  return (
    <>
       <form onSubmit={handleSubmit(addProductFrom)} className="flex flex-col gap-[20px] justify-center items-center h-[80%] p-[20px]">
        <h1 className="text-3xl">Add Product</h1>
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
        <button className="px-6 rounded-lg text-lg py-2 bg-gray-700 text-white cursor-pointer">
          Add product
        </button>
      </form>
    </>
  )
}

export default CreateProduct
