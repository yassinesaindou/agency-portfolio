import { Textarea as ShadTextArea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function TextArea() {
  return (
      <div className="max-w-[700px] mx-auto">
          <Label className="text-sm text-gray-300" htmlFor="message">Message</Label>
      <ShadTextArea
        placeholder="Write your message here"
              className=" text-sm fill-none min-h-[150px] md:min-h-[250px] py-3"
              id="message"
          />

    </div>
  );
}
