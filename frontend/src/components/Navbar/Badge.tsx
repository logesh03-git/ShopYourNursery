export default function Badge({ count = 0 }: any) {
  return (
    <span className="rounded-full absolute -top-1 -right-1 text-xs bg-black/[0.8] shrink-0 size-[0.9rem] text-white text-center flex items-center justify-center">
      {count}
    </span>
  );
}
