interface ButtonProps {
  text: string;
  variant?: "primary" | "outline";
}
export default function Button({ text, variant }: ButtonProps) {
  return (
    <button
      className={` text-gray-300 ${
        variant === "primary"
          ? "bg-blue-600 outline outline-blue-600 text-gray-100"
          : "outline outline-[1.75px]"
      } px-5 py-2  w-full text-nowrap rounded`}>
      {text}
    </button>
  );
}
