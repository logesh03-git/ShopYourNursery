import { FaChevronLeft } from "react-icons/fa6";
import SavedAddress from "../../components/Payments/SavedAddress";
import SavedCard from "../../components/Payments/SavedCard";
import AddCard from "../../components/Payments/AddCard";

export default function PayCheckout() {
  // const cards = [];
  return (
    <div className="my-5 w-full px-[4vw]">
      <div className="flex flex-col gap-y-4">
        <button className="flex items-center gap-x-2">
          <FaChevronLeft />
          <span>Checkout</span>
        </button>
        <div className="flex gap-x-10 ml-5">
          <SavedAddress
            address={{
              id: 1,
              fullname: "William J",
              contact: "(406) 555-0120",
              email: "tranthuy.nute@gmail.com",
              apartment: "",
              street: "502 Preston Rd",
              city: "Inglewood",
              state: "Maine",
              country: "United States",
              zipcode: "98380",
            }}
          />
          <SavedCard />
        </div>
      </div>
      <AddCard />
    </div>
  );
}
