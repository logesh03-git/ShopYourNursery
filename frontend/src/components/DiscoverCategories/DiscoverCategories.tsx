import Card from "./Card";
// import bonsai from "../../assets/discover/bonsai.png";
// import houseplant from "../../assets/discover/houseplant.png";
// import sympathy from "../../assets/discover/sympathy.png";
// import floorplant from "../../assets/discover/floorplant.png";
import saccilent from "../../assets/discover/saccilent.png";
// import decorative from "../../assets/discover/decorative.png";
import trees from "../../assets/discover/trees.png";
import perrenials from "../../assets/discover/perrenials.png";
import ornamentals from "../../assets/discover/ornamentals.png";
import annuals from "../../assets/discover/annuals.png";
import tropicals from "../../assets/discover/tropicals.png";
export default function DiscoverCategories() {
  const config = [
    { id: 1, title: "Trees & Shrubs", img: trees },
    { id: 2, title: "Ornamentals", img: ornamentals },
    { id: 3, title: "Annuals", img: annuals },
    { id: 4, title: "Tropicals", img: tropicals },
    { id: 5, title: "Succulents", img: saccilent },
    { id: 6, title: "Perrenials", img: perrenials },
  ];
  return (
    <div className="flex flex-col gap-y-14 px-[4vw] my-10 sm:my-20 max-w-[1600px] w-full">
      <h1 className="font-Philosopher text-3xl text-center sm:text-left sm:text-4xl md:text-5xl">
        Discover by Categories
      </h1>
      <div className="grid grid-cols-[20rem] md:grid-cols-[20rem_20rem] min-[1200px]:grid-cols-[20rem_20rem_20rem] min-[1200px]:gap-20 gap-14  place-content-center">
        {config.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </div>
    </div>
  );
}
