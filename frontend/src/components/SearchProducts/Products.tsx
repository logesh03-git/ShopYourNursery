import ProductCard from "../RelatedProducts/ProductCard";

export default function Products({ products }: any) {
  return (
    <div className="flex gap-10 flex-wrap">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
