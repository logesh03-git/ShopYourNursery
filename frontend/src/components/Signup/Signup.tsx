import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../apiClient/apiClient";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAndConditions: false,
  });
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data: any) => signUp(data),
    onSuccess(data) {
      if (data?.email && data?.otpExpiry) {
        data.flag = "signup";
        navigate("verify-otp", { state: JSON.stringify(data) });
      }
    },
    onError: (data) => {
      console.log(data);
    },
  });
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSignUp = (e: any) => {
    e.preventDefault();
    mutate(formData);
  };
  return (
    <div className="w-[100vw] h-[100vh] flex items-start justify-center bg-cover bg-center bg-authBg">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-[5rem]">
        <h1 className="text-3xl font-semibold text-center mb-4 text-black font-['Pacifico'] leading-custom tracking-wide">
          Welcome Back
        </h1>
        <p className="text-center mb-6 text-gray-400 font-['Pacifico'] text-lg leading-normal">
          Plants are the earth's lungs
        </p>
        <div
          className={`${
            isError ? "text-red-500 flex" : "hidden"
          }  justify-center items-center`}
        >
          <p>{error?.message}</p>
        </div>
        <form className="mt-10" onSubmit={handleSignUp}>
          <div className="mb-4 flex justify-between ">
            <div className="flex flex-col ">
              <label
                className=" text-black mb-1 font-Poppins text-base font-medium leading-[24px] tracking-wide "
                htmlFor="firstName"
              >
                First Name{" "}
              </label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                id="firstName"
                placeholder="John"
                className="w-full  py-2 border-b border-gray-300 focus:outline-none text-gray-500 font-poppins text-sm"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                className=" text-black mb-1 font-Poppins text-base font-medium leading-[24px] tracking-wide "
                htmlFor="lastName"
              >
                Last Name{" "}
              </label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                id="lastName"
                placeholder="Doe"
                className="w-full  py-2 border-b border-gray-300 focus:outline-none text-gray-500 font-poppins text-sm"
                required
              />
            </div>
          </div>
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
            <span className="text-white">
              {isPending ? "Processing..." : "Sign Up"}
            </span>
          </button>
        </form>

        {/* <div className="flex justify-center gap-10 mb-[40px] mt-[40px]">
          <button className="text-gray-700 hover:text-gray-900 transition">
            <img src={""} alt="" />
          </button>
          <button className="text-gray-700 hover:text-gray-900 transition">
            <img src={""} alt="" />
          </button>
        </div> */}

        <p className="text-center text-[#8C8C8C] text-sm font-normal font-Poppins mt-5">
          Already have an account ?{" "}
          <a
            onClick={() => navigate("/login")}
            className="ml-2 cursor-pointer text-black text-base font-medium leading-6 tracking-[0.5px] font-Poppins "
          >
            {" "}
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
