import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  

  const handleFrom = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
      toast.error("User not found, Please register first");
      return;
    }
    console.log(data);
    toast.success("Login Successfully");
    localStorage.setItem("user", JSON.stringify(data));
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFrom)} className="flex flex-col gap-[20px] justify-center items-center h-[80%] p-[20px]">
        <h1 className="text-3xl">LogIn</h1>
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
          Login
        </button>
      </form>
    </>
  )
}

export default Login
