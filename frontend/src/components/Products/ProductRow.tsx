import { plantProducts } from "../../constants/tempProducts";
import ProductCard from "../RelatedProducts/ProductCard";

export default function ProductRow({
  title = "Products",
  start = 0,
  end = 0,
}: any) {
  const products = plantProducts.slice(start, end);
  return (
    <div className="flex flex-col">
      <h2 className="font-Poppins font-semibold text-xl mb-10">{title}</h2>
      <div className="flex gap-x-12 items-center overflow-x-auto no-scrollbar">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
