'use client'
import IconCloud from "@/components/ui/icon-cloud";

import React from "react";

export default function TechStack() {
  const logos = [
    "html5",
    "css3",
    "javascript",
    "react",
    "nextdotjs",
    "supabase",
    "tailwindcss",
    "reacthookform",
    "reactquery",
    "reactrouter",
    "vite",
    "npm",
    "github",

    "chakraui",
    "shadcnui",
    "figma",
    "nextui",
    "netlify",
    "vercel",
    "bootstrap",
    "notion",
    "canva",
    "typescript",
    "git",
    "visualstudiocode",
  ];

  return (
    <section className="w-[100%]  py-[72px] lg:py-[92px] grid gap-5">
      <div className="text-center mx-auto ">
        <h2 className="font-semibold text-gray-400 text-3xl lg:text-4xl">
          Our tech stack
        </h2>
        <p className="text-gray-600 text-sm ">
          We use always use the latest tools in the market
        </p>
      </div>
      <div className="backdrop ">
        <IconCloud iconSlugs={logos} />
      </div>
    </section>
  );
}
