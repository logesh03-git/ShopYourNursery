import OrderCart from "./OrderCart";
import Frame1 from "../../../../assets/featured/emerald.png";
import Frame2 from "../../../../assets/featured/hydragea.png";
import Frame3 from "../../../../assets/featured/lemon.png";

const Onderdetails = [
  {
    orderID: "SYN0112312",
    images: [Frame1, Frame2],
    deliveryDetail:
      "Preparing to pack the items (Estimated delivery by Oct 14)",
  },
  {
    orderID: "SYN0114021",
    images: [Frame1, Frame2, Frame3],
    deliveryDetail: "3 items delivered on Tue, August 8, 2024",
  },
  {
    orderID: "SYN0412177",
    images: [Frame1],
    deliveryDetail: "1 item delivered on  Mon, July 22, 2024",
  },
];

function Orders() {
  return (
    <section className="Order font-['Poppins']">
      <div className="Order-Cart flex flex-col gap-8">
        <h1 className="text-center md:text-left text-[24px] font-medium">
          Orders
        </h1>
        {Onderdetails.map((orderdetail) => (
          <div key={orderdetail.orderID} className="">
            <OrderCart
                order={orderdetail}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Orders;
