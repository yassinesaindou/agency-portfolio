import Image, { StaticImageData } from "next/image";

interface Props {
  image: string | StaticImageData;
  title: string;
  description: string;
}
export default function ReasonCard({ image, title, description }: Props) {
  return (
    <div>
      <div className="border border-gray-500 w-fit rounded-[16px] p-3 grid gap-3 max-w-[400px] ">
        <div className="relative w-full h-[200px]">
          <Image src={image} alt="team" objectFit="contain" fill />
        </div>
        <h3 className="text-gray-300 font-semibold text-[24px]">{title}</h3>
        <p className="text-gray-400 text-md">{description}</p>
      </div>
    </div>
  );
}
