import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncLoginUser, asyncLogoutUser } from "../actions/userAction";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();


  const handleFrom = (data) => {
    dispatch(asyncLoginUser(data))
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFrom)} className="flex flex-col gap-[20px] justify-center items-center h-[80%] p-[20px]">
        <h1 className="text-3xl">LogIn</h1>
        <input
          {...register("email")}
          className="border-b-1 focus:outline-none w-80"
          type="email"
          placeholder="Email"
        />
        <input
          {...register("pass")}
          className="border-b-1 focus:outline-none w-80"
          type="password"
          placeholder="Pass"
        />
        <button className="px-6 rounded-lg text-lg py-2 bg-gray-700 text-white cursor-pointer">
          Login
        </button>
        <button type="button" onClick={()=> dispatch(asyncLogoutUser())} className="px-6 rounded-lg text-lg py-2 bg-gray-700 text-white cursor-pointer">
          Logout
        </button>
        <p className="flex justify-center items-center">Don't have an account? <Link className="border-b-2 text-blue-500 ml-1 hover:text-blue-300 transition-all ease-in-out duration-200" to="/signup">register</Link></p>
      </form>
    </>
  )
}

export default Login
