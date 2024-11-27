import { Button } from "@/components/ui/button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

export default function Contact() {
  return (
    <section className="mx-auto w-[100%] px-3 py-[72px] lg:py-[92px] ">
      <div className="text-center mx-auto mb-[32px] ">
        <h2 className="font-semibold text-gray-400 text-3xl lg:text-4xl">
          Contact Us
        </h2>
        <p className="text-gray-600 text-sm ">
          Write us a message and we will try to respond as soon as possible
        </p>
      </div>
      <div className="md:flex justify-between gap-3 max-w-[700px] mx-auto">
        <Input
          id="email"
          type="emal"
          placeholder="example@gmail.com"
          label="Email"
        />
        <Input
          id="phone"
          type="tel"
          placeholder="+91 123 456 7890"
          label="Phone"
        />
      </div>

      <TextArea />

      <div className="max-w-[700px] mx-auto">
        <Button className="mt-5 bg-blue-600">Contact us now</Button>
      </div>
    </section>
  );
}
