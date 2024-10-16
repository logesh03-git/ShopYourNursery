type propsType = {
  title: string;
  icon: JSX.Element;
};
export default function IconVthText({ title, icon }: propsType) {
  return (
    <div className="flex flex-col max-w-28 w-full items-center gap-y-4">
      <div className="bg-[#DDFFC8] shadow-shadowDown size-16 rounded-full flex justify-center items-center">
        {icon}
      </div>
      <h6 className="text-center">{title}</h6>
    </div>
  );
}
