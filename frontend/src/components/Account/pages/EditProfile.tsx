const EditProfile = () => {
  return (
    <div className="flex flex-col w-[908px] h-[741px] p-10">
      <div className="mb-8">
        <h1 className="text-black font-poppins text-[24px] font-medium leading-normal mb-5">
          User Profile
        </h1>
      </div>
      <div className="mb-8">
        <form className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="title"
                value="Ms/Mrs"
                className="text-black font-inter text-[16px] font-normal leading-normal mr-2 accent-green-600"
              />
              <span className="text-black font-inter text-[16px] font-normal leading-normal mr-20">
                Ms/Mrs
              </span>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="title"
                value="Mr"
                className="text-black font-inter text-[16px] font-normal leading-normal mr-2 accent-green-600"
              />
              <span className="text-black font-inter text-[16px] font-normal leading-normal">
                Mr
              </span>
            </div>
          </div>
        </form>
      </div>

      <div className="w-[818px] h-auto mb-10">
        <div className="flex mb-[32px] ">
          <div className="w-[818px] h-[72px] flex space-x-4">
            <div className="w-1/2">
              <label className="block text-black font-poppins text-[16px] font-normal leading-normal mb-2">
                First name
              </label>
              <input
                type="text"
                value="Cameron"
                className=" bg-[#F5F5F5] p-2 w-full"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-black font-poppins text-[16px] font-normal leading-normal mb-2">
                Last name
              </label>
              <input
                type="text"
                value="Williamson"
                className=" bg-[#F5F5F5] p-2 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex mb-[32px] ">
          <div className="w-[818px] h-[72px] flex space-x-4">
            <div className="w-1/2">
              <label className="block text-black font-poppins text-[16px] font-normal leading-normal mb-2">
                Contact Number
              </label>
              <input
                type="text"
                value="(239) 555-0108"
                className=" bg-[#F5F5F5] p-2 w-full"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-[#848484] font-poppins text-[16px] font-normal leading-normal mb-2">
                Verify OTP
              </label>
              <input type="text" className=" bg-[#F5F5F5] p-2 w-full" />
            </div>
          </div>
        </div>

        <div className="w-[818px] h-[72px] ">
          <div className="w-1/2">
            <label className="block text-black font-poppins text-[16px] font-normal leading-normal mb-2">
              Email
            </label>
            <input type="email" className=" bg-[#F5F5F5] p-2 w-full" />
          </div>
        </div>
      </div>

      <div className="mb-[70px]">
        <button
          type="button"
          className="flex justify-center items-center gap-[9.339px] w-[172px] p-[7.471px] rounded-[28.017px] bg-[#7AA262] text-white"
        >
          Save
        </button>
      </div>

      <div className="flex justify-end">
        <button className="mt-10 flex w-[256px] h-[48px] py-[7.471px] px-[42.96px] justify-center items-center gap-[9.339px] flex-shrink-0 rounded-[28.017px] border border-[#D9D9D9] bg-white ">
          {" "}
          <span className="text-[#3A3A3A] font-poppins text-[18.678px] font-normal leading-normal">
            Delete Account
          </span>
        </button>
      </div>
    </div>
  );
};
export default EditProfile;
