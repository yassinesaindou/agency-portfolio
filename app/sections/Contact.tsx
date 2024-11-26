import Button from "../components/Button";

export default function Contact() {
  return <section className="mx-auto w-[100%] py-[72px] lg:py-[92px]">
<div className="text-center mx-auto " >
                <h2 className="font-semibold text-gray-400 text-3xl lg:text-4xl">Our services</h2>
                <p className="text-gray-600 text-sm ">These are what we do</p>
      </div>
      <div>
      <div className="flex mx-auto gap-5 px-5 max-w-[500px] mt-[24px] ">
        <Button text="FAQ's" variant="outline" />
        <Button text="Contact us" variant="primary" />
      </div>
      </div>
  </section>;
}
