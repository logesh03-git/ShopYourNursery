import EmptyCart from "../../components/Cart/EmptyCart";
import ProductsCart from "../../components/Cart/ProductsCart";
import { useCart } from "../../hooks/useCart";

export default function CartPage() {
  const { cart } = useCart();
  // console.log(cart);
  return (
    <div className="max-w-[1600px] w-full">
      {cart.length === 0 ? <EmptyCart /> : <ProductsCart />}
    </div>
  );
}
