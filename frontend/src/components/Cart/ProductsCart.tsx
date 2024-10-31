import { useCallback } from "react";
import CartBox from "./CartBox";
import OrderSummary from "./OrderSummary";
import { productProps } from "../../constants/products";
import { cartItem } from "../../contexts/CartProvider";
import PreOrderCart from "./PreOrderCart";

export type cartProductsType = productProps & cartItem;

export default function ProductsCart({ cart, flag }: any) {
  const calculateTotalPrices = useCallback(() => {
    const shippingCharges = 5;
    const couponDiscount = 0;
    const totals = cart.reduce(
      (totals: any, product: any) => {
        totals.totalPrice = parseFloat(
          (product.price * product.count).toFixed(2)
        );
        totals.totalItems = product.count;
        return totals;
      },
      { totalPrice: 0, totalItems: 0 } // Initial values
    );
    const totalAmount = shippingCharges + couponDiscount + totals.totalPrice;
    return { ...totals, shippingCharges, couponDiscount, totalAmount };
  }, [cart]);
  const priceSummary = calculateTotalPrices();
  return (
    <div className="flex gap-x-10 w-full justify-center items-start">
      {flag === "preorder" ? (
        <PreOrderCart productsInCart={cart} />
      ) : (
        <CartBox productsInCart={cart} />
      )}
      <OrderSummary
        text={
          flag === "preorder" ? "Proceed to Pre-order" : "Proceed to Checkout"
        }
        products={cart}
        priceSummary={priceSummary}
      />
    </div>
  );
}
