import { useState, useEffect, useCallback } from "react";
import { plantProducts } from "../../constants/tempProducts";
import { useCart } from "../../hooks/useCart";
import CartBox from "./CartBox";
import OrderSummary from "./OrderSummary";
import { productProps } from "../../constants/products";
import { cartItem } from "../../contexts/CartProvider";

export type cartProductsType = productProps & cartItem;

export default function ProductsCart() {
  const { cart } = useCart();
  const [productsInCart, setProductsInCart] = useState<any[]>([]);
  useEffect(() => {
    const cartProducts: any = [];
    cart.forEach((value, productId) => {
      const product = plantProducts.find((item) => item.id === productId);
      if (product) {
        cartProducts.push({ ...product, ...value });
      }
    });
    setProductsInCart(cartProducts);
  }, [cart]);

  const calculateTotalPrices = useCallback(() => {
    const shippingCharges = 5;
    const couponDiscount = 0;
    const totals = productsInCart.reduce(
      (totals, product) => {
        totals.totalPrice += product.price * product.count;
        totals.totalItems += product.count;
        return totals;
      },
      { totalPrice: 0, totalItems: 0 } // Initial values
    );
    const totalAmount = shippingCharges + couponDiscount + totals.totalPrice;
    return { ...totals, shippingCharges, couponDiscount, totalAmount };
  }, [productsInCart]);
  const priceSummary = calculateTotalPrices();
  return (
    <div className="flex gap-x-10 w-full justify-center items-start">
      <CartBox
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      />
      <OrderSummary priceSummary={priceSummary} />
    </div>
  );
}
