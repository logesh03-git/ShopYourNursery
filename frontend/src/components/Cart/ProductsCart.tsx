import { useCallback } from "react";
import { useCart } from "../../hooks/useCart";
import CartBox from "./CartBox";
import OrderSummary from "./OrderSummary";
import { productProps } from "../../constants/products";
import { cartItem } from "../../contexts/CartProvider";

export type cartProductsType = productProps & cartItem;

export default function ProductsCart() {
  const { cart } = useCart();
  const calculateTotalPrices = useCallback(() => {
    const shippingCharges = 5;
    const couponDiscount = 0;
    const totals = cart.reduce(
      (totals: any, product: any) => {
        totals.totalPrice += product.price * product.count;
        totals.totalItems += product.count;
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
      <CartBox productsInCart={cart} />
      <OrderSummary products={cart} priceSummary={priceSummary} />
    </div>
  );
}
