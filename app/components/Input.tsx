import { Label } from "@/components/ui/label";
import { Input as ShadInput } from "@/components/ui/input";

interface Props {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}
export default function Input({ label, type, placeholder, id }: Props) {
  return (
    <div className="w-[100%] ">
      <Label htmlFor={id} className="text-sm text-gray-300">
        {label}
      </Label>
      <ShadInput
        className="fill-none py-5 mb-2 text-sm rounded"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
