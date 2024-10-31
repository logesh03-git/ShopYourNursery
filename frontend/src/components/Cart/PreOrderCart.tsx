import { usePreOrder } from "../../hooks/usePreOrder";
import CartCard from "./CartCard";

export default function PreOrderCart({ productsInCart }: any) {
  const { setPreOrderCart, handleDeleteFromPreOrderCart, handleDeleteProduct } =
    usePreOrder();
  const handleIncrement = (productId: number, selectedSize: string) => {
    const updatedProducts = productsInCart.map((item: any) =>
      item.id === productId &&
      item.selectedSize === selectedSize &&
      item.count >= 0
        ? { ...item, count: item.count + 1 }
        : item
    );
    setPreOrderCart(updatedProducts);
  };
  const handleDecrement = (productId: number, selectedSize: string) => {
    let flag = false;
    const updatedProducts = productsInCart.map((item: any) => {
      if (item.count == 1) {
        flag = true;
        handleDeleteProduct(productId, selectedSize);
        return;
      }
      return item.id === productId &&
        item.selectedSize === selectedSize &&
        item.count > 0
        ? { ...item, count: item.count - 1 }
        : item;
    });
    if (!flag) setPreOrderCart(updatedProducts);
  };
  const handleDelete = (productId: number, selectedSize: string) => {
    handleDeleteFromPreOrderCart(productId, selectedSize);
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
