import Button from "../components/Button";

export default function Hero() {
  return (
    <div className="py-[100px] w-[100%] lg:py-[128px] px-5 lg:px-0 ">
      <div className=" text-center mx-auto">
        <h1 className="  text-center text-4xl lg:text-5xl font-bold text-gray-100">
          Get the best modern website you can
        </h1>
        <p className="text-gray-400 mt-1 text-sm lg:text-lg">
          We make the best website that customers love. Everyone who worked with
          us recommend us
        </p>
      </div>
      <div className="flex mx-auto gap-5 px-5 max-w-[500px] mt-[64px] ">
        <Button text="FAQ's" variant="outline" />
        <Button text="Contact us" variant="primary" />
      </div>
    </div>
  );
}
