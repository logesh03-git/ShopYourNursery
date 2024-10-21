type propsType = {
  card: {
    id: number;
    title: string;
    img: string;
  };
};
export default function Card({ card }: propsType) {
  return (
    <div className="px-6 py-7 pb-4 bg-[#F5F5F5] rounded-2xl w-[20rem] flex flex-col items-center gap-y-3">
      <div className="h-[17rem] w-[17rem] rounded border">
        <img src={card.img} className="rounded object-cover w-full h-full" />
      </div>
      <h2 className="text-[#9D7938] font-Philosopher text-center font-bold text-2xl ">
        {card.title}
      </h2>
    </div>
  );
}
