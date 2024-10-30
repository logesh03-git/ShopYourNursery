import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="w-[45rem] pl-[53px] pr-[52px] pt-[59px] pb-[53.06px] bg-neutral-100 rounded-2xl shadow flex-col justify-end items-start gap-[30px] inline-flex">
      <div className="self-stretch h-[434.92px] flex-col justify-start items-start gap-[54px] inline-flex">
        <div className="self-stretch h-[75.46px] flex-col justify-start items-start gap-[8.41px] flex">
          <label className="self-stretch text-black text-[16.82px] font-normal font-Poppins">
            Name
            <span className="text-[#ff4949] text-[16.82px] font-normal font-Poppins">
              *
            </span>
          </label>
          <input
            className="h-[42.05px] w-full relative bg-white border border-[#b6b6b6]"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="self-stretch justify-start items-center gap-[49px] inline-flex">
          <div className="w-full flex-col justify-start items-start gap-[8.41px] inline-flex">
            <label className="self-stretch text-black text-[16.82px] font-normal font-Poppins">
              Email
              <span className="text-[#ff4949] text-[16.82px] font-normal font-Poppins">
                *
              </span>
            </label>
            <input
              className="h-[42.05px] w-full relative bg-white border border-[#b6b6b6]"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex-col justify-start items-start gap-[8.41px] inline-flex">
            <label className="self-stretch text-black text-[16.82px] font-normal font-Poppins">
              Number
              <span className="text-[#ff4949] text-[16.82px] font-normal font-Poppins">
                *
              </span>
            </label>
            <input
              className="h-[42.05px] w-full relative bg-white border border-[#b6b6b6]"
              type="tel"
              name="number"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="self-stretch h-44 flex-col justify-start items-start gap-[8.41px] flex">
          <label className="self-stretch text-black text-[16.82px] font-normal font-Poppins">
            Message
            <span className="text-[#ff4949] text-[16.82px] font-normal font-Poppins">
              *
            </span>
          </label>
          <textarea
            className="h-[143px] w-full relative bg-white border border-[#b6b6b6]"
            name="message"
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className=" self-stretch w-[172px] h-[42.94px] px-[42.96px] py-[2px] bg-[#7aa262] rounded-[28.02px] justify-center items-center gap-[9.34px] inline-flex "
      >
        <span className="text-[#f2f2f2] text-[14px] font-medium font-Poppins">
          Send Query
        </span>
      </button>
    </div>
  );
};

export default ContactForm;
