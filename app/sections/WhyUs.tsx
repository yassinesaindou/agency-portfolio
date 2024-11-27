import { customer, newtech, team } from "@/public/elements";
import ReasonCard from "../components/ReasonCard";

export default function WhyUs() {
  return (
    <section className="w-[100%]  py-[72px] lg:py-[92px] grid gap-5">
      <div className="text-center mx-auto ">
        <h2 className="font-semibold text-gray-400 text-3xl lg:text-4xl">
          Why should you choose us?
        </h2>
        <p className="text-gray-600 text-sm ">
          Our customers always recommend us
        </p>
      </div>
      <div className="px-2 gap-4 flex flex-col place-items-center md:grid md:grid-cols-2 mx-auto lg:grid-cols-3 w-[100%]">
        <ReasonCard
          description="We make the best website that customers love. Everyone who worked with us recommend us"
          image={customer}
          title="Customer Centered"
        />
        <ReasonCard
          description="We make the best website that customers love. Everyone who worked with us recommend us"
          image={team}
          title="Experienced Team"
        />
        <ReasonCard
          description="We make the best website that customers love. Everyone who worked with us recommend us"
          image={newtech}
          title="Latest technologies"
        />
      </div>
    </section>
  );
}
