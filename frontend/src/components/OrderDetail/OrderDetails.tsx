import DeliveryDetail from "./DeliveryDetail";
import GrandTotal from "./GrandTotal";
import Review from "./Review";
import Shippingaddress from "./Shippingaddress";

export default function OrderDetails() {
  return (
    <div className="flex flex-col">
      <DeliveryDetail />
      <Shippingaddress />
      <Review />
      <GrandTotal />
    </div>
  );
}
