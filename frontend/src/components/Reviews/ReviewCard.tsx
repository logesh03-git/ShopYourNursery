type ReviewPropsType = {
  card: {
    id: number;
    review: string;
    reviewer: string;
    avatar: string;
  };
};
export default function ReviewCard({ card }: ReviewPropsType) {
  return (
    <div className="bg-[#DDF2D0] rounded-[0.9375rem] w-[29rem] h-[16.2rem] pt-7  pl-10 pr-8 pb-8 shrink-0">
      <div className="text-center font-Inter ml-5 mt-2 mr-2">{card.review}</div>
      <div className="flex gap-x-5 items-center mt-8">
        <div className="rounded-full shrink-0 size-10 bg-slate-400 overflow-hidden">
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/bbc8/7665/fc96fdb4ad5809238807b7e4bdb0657a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CWR0Y1l8RLlESIHUvh1cW74yKUYqUbY8MotHSlAdUPPhbKIoJDKyobi13ttldlsPIM3NSmTaH8wm7WX~dlap5fVbUk2FZOodFO0YVJD39Prf0pDZ9-CfDM-cFq8tujWE5h3tMto6ZNGjz-DIDDgVVgl~R7ny-QPG8R-EnFvQo4oOG2CguFD-A0ekZfrK1CvnKqNia~bQKaIeuKm05cgi1JomztXqvHxDRvo~cwqTXEZBM0WCxW1sTugAi-M6Lvf0afUT5Jv4FbXlp4ynJXqWxYenaEni3QiMB082MmhsqpjsDWbAzGHg4l8sisLOuptu~l4ZDd8Y~KlvXF44~Nwhzg__"
            }
          />
        </div>
        <h3 className="font-Philosopher text-[#445839] font-bold">
          {card.reviewer}
        </h3>
      </div>
    </div>
  );
}
