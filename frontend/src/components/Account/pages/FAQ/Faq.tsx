import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[800px]  h-auto mt-8 ml-10">
      <h1 className="text-2xl font-semibold mb-3">FAQ</h1>

      <div className="border-gray-300 mb-10 mt-10">
        <button
          className="w-full flex justify-between items-center p-4 text-left bg-[#F5F5F5] rounded-xl"
          onClick={() => toggle(0)}
        >
          <span>Can I track my order after it's shipped?</span>
          <span>
            {openIndex === 0 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </button>
        {openIndex === 0 && (
          <div className="p-4  text-gray-700 border rounded-xl">
            Yes! Once your order is shipped, we'll send you a tracking number.
            You can also log into your account and track your order status
            directly on our website.
          </div>
        )}
      </div>

      <div className=" border-gray-300 mb-10">
        <button
          className="w-full flex justify-between items-center p-4 text-left bg-[#F5F5F5] rounded-xl"
          onClick={() => toggle(1)}
        >
          <span>Are there any discounts or promotions available?</span>
          <span>
            {openIndex === 1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </button>
        {openIndex === 1 && (
          <div className="p-4 border rounded-xl text-black font-poppins text-[16px] leading-8">
            We regularly offer promotions and discounts! Be sure to subscribe to
            our newsletter and follow us on social media to stay updated on our
            latest offers.
          </div>
        )}
      </div>

      <div className=" border-gray-300 mb-10">
        <button
          className="w-full flex justify-between items-center p-4 text-left bg-[#F5F5F5] rounded-xl"
          onClick={() => toggle(2)}
        >
          <span>What is the return policy for plants?</span>
          <span>
            {openIndex === 2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </button>
        {openIndex === 2 && (
          <div className="p-4 border rounded-xl text-black font-poppins text-[16px] leading-8">
            We offer a hassle-free return policy for all plants. If you’re not
            satisfied, contact us within 7 days of receiving your order, and
            we’ll arrange for a return or exchange.
          </div>
        )}
      </div>

      <div className=" border-gray-300 mb-10">
        <button
          className="w-full flex justify-between items-center p-4 text-left bg-[#F5F5F5] rounded-xl"
          onClick={() => toggle(3)}
        >
          <span>Can I cancel my order?</span>
          <span>
            {openIndex === 3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </button>
        {openIndex === 3 && (
          <div className="p-4  text-gray-700 border rounded-xl">
            Orders can be canceled before they are shipped. If you wish to
            cancel, please reach out to our support team as soon as possible.
            Once shipped, cancellations are not possible, but you can initiate a
            return.
          </div>
        )}
      </div>

      <div className=" border-gray-300 mb-10 ">
        <button
          className="w-full flex justify-between items-center p-4 text-left bg-[#F5F5F5] rounded-xl"
          onClick={() => toggle(4)}
        >
          <span>
            What should I do if my plant arrives damaged or unhealthy?
          </span>
          <span>
            {openIndex === 4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </button>
        {openIndex === 4 && (
          <div className="p-4  text-gray-700 border rounded-xl">
            Please contact our customer service within 48 hours of receiving
            your plant with photos of the issue. We’ll review your case and
            offer a replacement or refund based on the situation.
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
