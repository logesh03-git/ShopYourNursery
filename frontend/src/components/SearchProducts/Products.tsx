import ProductCard from "../RelatedProducts/ProductCard";

export default function Products({ products }: any) {
  return (
    <div className="grid grid-cols-4 auto-rows-max gap-16">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
