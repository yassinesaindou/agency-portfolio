import React from "react";
import Card from "../components/Card";
import { CodeXml, PenTool, WandSparkles } from "lucide-react";

export default function Services() {
  return (
    <section className="w-[100%]  py-[32px] lg:pb-[92px] grid gap-5 ">
      <div className="text-center mx-auto ">
        <h2 className="font-semibold text-gray-400 text-3xl lg:text-4xl">
          Our services
        </h2>
        <p className="text-gray-600 text-sm ">These are what we do</p>
      </div>

      <div className="px-2 gap-4 flex flex-col place-items-center md:grid md:grid-cols-2 mx-auto lg:grid-cols-3 w-[100%]">
        <Card
          title="Website Development"
          content="This is some dummy data that I am going to delete soon 
so let’s try to add something here and see the reaction of this auto layout. but I really this  is just doing fine.">
          {" "}
          <CodeXml />
        </Card>
        <Card
          title="UI/UX Design"
          content="This is some dummy data that I am going to delete soon 
so let’s try to add something here and see the reaction of this auto layout . but I really this  is just doing fine.">
          <PenTool />{" "}
        </Card>
        <Card
          title="Rebranding"
          content="This is some dummy data that I am going to delete soon 
so let’s try to add something here and see the reaction of this auto layout . but I really this is just doing fine.">
          {" "}
          <WandSparkles />
        </Card>
      </div>
    </section>
  );
}
