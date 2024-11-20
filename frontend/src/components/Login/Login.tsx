import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn } from "../../apiClient/apiClient";
import { useAppContext } from "../../contexts/AppContext";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    termsAndConditions: false,
  });
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data: any) => signIn(data),
    onSuccess: async (data) => {
      dispatch(login({ userId: data?.userId }));
      showToast({ message: "Login Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries({
        queryKey: ["validateToken"],
      });
      console.log(data);
      navigate("/");
    },
    onError(error) {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleLogin = (e: any) => {
    e.preventDefault();
    mutate(formData);
  };
  return (
    <div className="w-[100vw] h-[100vh] flex items-start justify-center bg-cover bg-center bg-authBg">
      <div className="flex items-start justify-center bg-black/[0.3] w-full h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-[5rem]">
          <h1 className="text-3xl font-semibold text-center mb-4 text-black font-['Pacifico'] leading-custom tracking-wide">
            Welcome Back
          </h1>
          <p className="text-center mb-6 text-[#8C8C8C] font-['Pacifico'] text-lg leading-normal">
            Plants are the earth's lungs
          </p>
          <div
            className={`${
              isError ? "text-red-500 flex" : "hidden"
            }  justify-center items-center`}
          >
            <p>{error?.message}</p>
          </div>
          <form className="mt-5" onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-black mb-1 font-Poppins text-base font-medium leading-[24px] tracking-wide"
                htmlFor="email"
              >
                Email{" "}
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                id="email"
                placeholder="johndoe@gmail.com"
                className="w-full  py-2 border-b border-gray-300 focus:outline-none text-gray-500 font-poppins text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 mb-1 font-Poppins text-base font-medium leading-[24px] tracking-wide"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Change input type based on state
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  id="password"
                  placeholder="Password"
                  className="w-full py-2 border-b border-gray-300 focus:outline-none text-gray-500 font-poppins text-sm pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {!showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <div className="mb-4 flex jusfity-center items-center">
              <input
                type="checkbox"
                name="termsAndConditions"
                checked={formData.termsAndConditions}
                onChange={handleChange}
                id="terms"
                className="mr-2 w-[17px] h-[15px] rounded border border-black"
                required
              />
              <label
                htmlFor="terms"
                className="text-gray-500 font-poppins text-sm font-medium  tracking-wide"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-[#6369FF] font-poppins text-sm font-semibold leading-normal underline underline-offset-[0.25rem]"
                >
                  Terms & conditions
                </a>
              </label>
            </div>
            <button
              disabled={isPending}
              type="submit"
              className="flex justify-center items-center gap-2 self-stretch rounded-[25px] bg-[#7AA262] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full px-40 py-2 mt-8"
            >
              <span className="text-white font-bold">
                {isPending ? "Processing..." : "Login"}
              </span>
            </button>
          </form>

          <p className="text-center text-[#8C8C8C] text-sm font-normal font-Poppins mt-5">
            Don't have an account ?{" "}
            <a
              onClick={() => navigate("/signup")}
              className="ml-2 cursor-pointer text-black text-base font-medium leading-6 tracking-[0.5px] font-Poppins "
            >
              {" "}
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
