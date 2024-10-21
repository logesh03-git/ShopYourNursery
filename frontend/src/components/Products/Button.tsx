export default function Button({ className = "", text = "", onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-center font-Poppins cursor-pointer font-bold text-lg py-3 px-6 rounded-full ${className}`}
    >
      {text}
    </button>
  );
}
