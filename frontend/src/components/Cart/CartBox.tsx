import { useCart } from "../../hooks/useCart";
import CartCard from "./CartCard";

type cardBoxPropsType = {
  productsInCart: any;
};
export default function CartBox({ productsInCart }: cardBoxPropsType) {
  const { handleDeleteFromCart, setCart } = useCart();
  const handleIncrement = (productId: number, selectedSize: string) => {
    const updatedProducts = productsInCart.map((item: any) =>
      item.id === productId &&
      item.selectedSize === selectedSize &&
      item.count >= 0
        ? { ...item, count: item.count + 1 }
        : item
    );
    setCart(updatedProducts);
  };
  const handleDecrement = (productId: number, selectedSize: string) => {
    const updatedProducts = productsInCart.map((item: any) =>
      item.id === productId &&
      item.selectedSize === selectedSize &&
      item.count > 0
        ? { ...item, count: item.count - 1 }
        : item
    );
    setCart(updatedProducts);
  };
  const handleDelete = (productId: number, selectedSize: string) => {
    handleDeleteFromCart(productId, selectedSize);
  };
  return (
    <div className="bg-[#F5F5F5] px-12 py-9 my-10 flex flex-col gap-y-7 max-w-[50rem] w-full h-fit">
      {productsInCart.map((product: any) => {
        return (
          <CartCard
            key={product.id + product.selectedSize}
            product={product}
            handleIncrement={() =>
              handleIncrement(product.id, product.selectedSize)
            }
            handleDecrement={() =>
              handleDecrement(product.id, product.selectedSize)
            }
            handleDelete={() => handleDelete(product.id, product.selectedSize)}
          />
        );
      })}
    </div>
  );
}
