import { useQuery } from "@tanstack/react-query";
import InfiniteXScroll from "../InfiniteXScroll/InfiniteXScroll";
import ReviewCard from "./ReviewCard";
import * as apiClient from "../../apiClient/apiClient";
import Loading from "../Loading/Loading";
export default function CustomerReviews() {
  const { data, isLoading } = useQuery({
    queryKey: ["fetchReviews"],
    queryFn: () => apiClient.fetchReviews(),
  });
  const config = data ? [...data] : [];
  return (
    <div className="flex flex-col gap-y-14  my-10 sm:my-10 sm:mb-20 max-w-[1600px] w-full">
      <h1 className="px-[4vw] font-Philosopher text-3xl text-center sm:text-left sm:text-4xl md:text-5xl ">
        Customer Reviews
      </h1>
      {isLoading ? (
        <Loading text={"Fetching..."} />
      ) : (
        <div className="flex flex-col gap-y-20">
          <InfiniteXScroll>
            {config.map((reviewCard, index) => (
              <ReviewCard key={index} card={reviewCard} />
            ))}
          </InfiniteXScroll>
          <InfiniteXScroll right={true}>
            {config.map((reviewCard, index) => (
              <ReviewCard key={index} card={reviewCard} />
            ))}
          </InfiniteXScroll>
        </div>
      )}
    </div>
  );
}
