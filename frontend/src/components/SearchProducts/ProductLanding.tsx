import { useParams } from "react-router-dom";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ProductDetails from "../Products/ProductDetails";
import ProductRow from "../Products/ProductRow";
import ProductDescription from "./ProductDescription";
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function ProductLanding() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await fetch(`${API_URL}/api/plants/${id}`); // Replace with actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch plants");
        }
        const data = await response.json();
        setProduct(data); // Update the plants state with the fetched data
      } catch (err: any) {
        setError(err.messsage); // Update error state if the fetch fails
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };
    fetchPlant();
  }, [id]);
  if (loading)
    return (
      <div className="h-96 flex flex-col justify-center items-center">
        Fetching ...
      </div>
    );
  else if (error)
    return (
      <div className="h-96 flex flex-col justify-center items-center">
        {error}
      </div>
    );
  return (
    <div className="flex flex-col max-w-[1600px] w-full px-[5vw] mb-10">
      <div className="mt-5 mb-8">
        <BreadCrumb plantName={product?.title} />
      </div>
      <ProductDetails product={product} />
      <ProductDescription product={product} />
      <div className="flex flex-col gap-y-20">
        <ProductRow title="Related Products" start={0} end={6} />
        <ProductRow title="You May Also Like" start={3} end={9} />
      </div>
    </div>
  );
}
