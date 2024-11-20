import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../../apiClient/apiClient";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useAppContext } from "../../contexts/AppContext";

const OtpForm = () => {
  const navigate = useNavigate();
  const data = JSON.parse(useLocation().state);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<any>([]);

  const handleChange = (index: any, value: any) => {
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (e: any) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, otp.length);
    const newOtp = [...otp];

    for (let i = 0; i < pasteData.length; i++) {
      if (/^\d$/.test(pasteData[i])) {
        newOtp[i] = pasteData[i];
      }
    }

    setOtp(newOtp);

    const nextIndex =
      pasteData.length < otp.length ? pasteData.length : otp.length - 1;
    inputRefs.current[nextIndex].focus();
  };

  const handleBackspace = (index: any, e: any) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const date1 = new Date(data?.otpExpiry);
  const [timeLeft, setTimeLeft] = useState(
    Math.floor((date1.getTime() - new Date().getTime()) / 1000)
  );
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: () =>
      verifyOtp({
        email: data?.email,
        otp: otp.join(""),
        userId: data?.userId,
      }),
    onError: () => {},
    onSuccess: async (data) => {
      dispatch(login({ userId: data?.userId }));
      showToast({
        message: "Signup Success! You are in",
        type: "SUCCESS",
      });
      await queryClient.invalidateQueries({
        queryKey: ["validateToken"],
      });
      navigate("/");
    },
  });
  useEffect(() => {
    if (!data || !data?.flag || data.flag != "signup") {
      console.log(data);
    }
    const interval = setInterval(() => {
      const timeRemain = (date1.getTime() - new Date().getTime()) / 1000;
      setTimeLeft(Math.floor(timeRemain));
      if (timeRemain <= 0) {
        setTimeLeft(0);
        clearInterval(interval); // Stop the countdown when it reaches zero
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [date1]);
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="w-[30.5rem] bg-white rounded-[1.25rem] shadow border border-[#f2f4f1]  flex justify-center items-center py-12 px-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
          }}
          className="border-none self-stretch h-[31.313rem] flex-col justify-start items-center gap-[7.125rem] inline-flex"
        >
          <div className="self-stretch h-[31.313rem] flex-col justify-start items-center gap-[2.938rem] flex">
            <div className="h-[4.875rem] flex-col justify-center items-center gap-[1.375rem] flex">
              <h1 className="self-stretch text-center text-black text-[2.188rem] font-normal font-['Pacifico'] leading-normal tracking-wide">
                Welcome Back
              </h1>
              <h3 className="w-[15.438rem] text-[#8b8b8b] text-lg font-normal font-['Pacifico'] ">
                Plants are the earth's lungs
              </h3>
              {isError ? (
                <p className="text-red-500">{error.message} </p>
              ) : null}
            </div>
            <div className="self-stretch h-[23.5rem] flex-col justify-start items-center gap-[2rem] flex">
              <h5 className="w-[20.688rem] text-black text-base font-medium font-Poppins leading-normal tracking-wide text-center">
                A 4-digit OTP was sent to your email ({data?.email}) for
                verification.{" "}
              </h5>
              <div className="self-stretch h-[15.313rem] flex-col justify-start items-center gap-12 flex">
                <div className="h-[6.188rem] flex-col justify-center items-center gap-5 flex">
                  <div className="self-stretch justify-center items-center gap-[2.563rem] inline-flex">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleBackspace(index, e)}
                        onPaste={index === 0 ? handlePaste : undefined}
                        ref={(el) => (inputRefs.current[index] = el)}
                        maxLength={1}
                        required={true}
                        className="w-[3.438rem] h-[3.438rem] relative text-center text-[1.5rem] rounded-[15px] border border-[#adabab]"
                      />
                    ))}
                  </div>
                  <div className="justify-start items-center gap-2 inline-flex">
                    <p className="text-[#8b8b8b] text-base font-medium font-Poppins leading-normal tracking-wide">
                      Didn't get the OTP?
                    </p>
                    <div className="pr-1 justify-start items-center flex">
                      <h5 className="text-black text-lg font-semibold font-Poppins cursor-pointer ">
                        Resend OTP
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[6.125rem] flex-col justify-center items-center gap-4 flex">
                  <button
                    type="submit"
                    className="self-stretch px-[9.75rem] py-[1.063rem] bg-[#7aa262] rounded-[1.563rem] shadow justify-center items-center gap-2.5 inline-flex text-white text-lg font-bold font-Poppins leading-normal tracking-wide"
                  >
                    {isPending ? "Verifying..." : "Verify"}
                  </button>
                  <p className="self-stretch text-center text-[#e03333] text-base font-medium font-Poppins leading-normal tracking-wide">
                    Valid for {timeLeft} seconds{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpForm;
