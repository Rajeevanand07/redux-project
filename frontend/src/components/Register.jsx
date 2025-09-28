import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncPostUser } from "../actions/userAction";
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleFrom = (data) => {
    data.isAdmin = false;
    // console.log(data);
    toast.info("Registered Successfully");
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncPostUser(data));
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFrom)} className="flex flex-col gap-[20px] justify-center items-center h-[80%] p-[20px]">
        <h1 className="text-3xl">Resigter</h1>
        <input
          {...register("name")}
          className="border-b-1 focus:outline-none "
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email")}
          className="border-b-1 focus:outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          {...register("pass")}
          className="border-b-1 focus:outline-none"
          type="password"
          placeholder="Pass"
        />
        <button className="px-6 rounded-lg text-lg py-2 bg-gray-700 text-white cursor-pointer">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
