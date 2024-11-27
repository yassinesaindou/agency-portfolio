import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="w-[100%]  py-[72px] lg:py-[92px] grid gap-5 md:min-w-[600px] px-3">
      <div className="text-center mx-auto ">
        <h2 className="font-semibold text-gray-400 text-3xl lg:text-4xl">
          Why should you choose us?
        </h2>
        <p className="text-gray-600 text-sm ">
          Our customers always recommend us
        </p>
      </div>
      <div>
        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-[100%]">
            <AccordionItem value="item1">
              <AccordionTrigger className="text-gray-400 font-semibold">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
