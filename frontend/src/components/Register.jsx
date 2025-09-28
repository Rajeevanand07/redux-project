import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncPostUser } from "../actions/userAction";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleFrom = (data) => {
    data.isAdmin = false;
    toast.info("Registered Successfully");
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncPostUser(data));
    reset();
    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFrom)} className="flex flex-col gap-[20px] justify-center items-center h-[80%] p-[20px]">
        <h1 className="text-3xl">Resigter</h1>
        <input
          {...register("name")}
          className="border-b-1 focus:outline-none w-80"
          type="text"
          placeholder="Name"
        />
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
          Register
        </button>
        <p className="flex justify-center items-center">Already have an account! <Link className="border-b-2 text-blue-500 ml-1 hover:text-blue-300 transition-all ease-in-out duration-200" to="/login">login</Link></p>
      </form>
    </>
  );
};

export default Register;
