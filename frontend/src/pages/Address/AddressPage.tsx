import OrderSummary from "../../components/Address/OrderSummary";
import Address from "./Address";

export default function () {
  return (
    <div className="flex gap-x-10 w-full py-10 px-[4vw] max-w-[1600px] overflow-hidden">
      <Address />
      <OrderSummary />
    </div>
  );
}
