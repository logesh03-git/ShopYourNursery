export default function DiffCard({ item }: any) {
  return (
    <div className="bg-[#F5F5F5] px-8 py-5 rounded-xl flex gap-x-8">
      <div className="size-20 bg-[#DDF2D0] rounded-xl p-5 overflow-hidden">
        <img src={item.img} className="object-contain" />
      </div>
      <div className="flex flex-col gap-y-4 justify-center">
        <h2 className="font-Poppins font-semibold text-lg">{item.title}</h2>
        <p className="font-Poppins">{item.content}</p>
      </div>
    </div>
  );
}
