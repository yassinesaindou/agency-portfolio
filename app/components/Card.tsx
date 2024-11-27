import {
  CardContent,
  CardHeader,
  CardTitle,
  Card as ShadCard,
} from "@/components/ui/card";

import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  content: string;
  
}

export default function Card({
  children: icon,
  content,
  title,
 
}: Props) {
  return (
    <ShadCard className=" flex flex-col items-center gap-4 py-4 max-w-[400px] md:w-auto bg-inherit border border-gray-700">
      <CardHeader
        className={`text-gray-50 rounded-full w-fit `}>
        {icon}
      </CardHeader>
      <CardTitle
        className={`text-gray-100 text-center`}>
        {title}
      </CardTitle>
      <CardContent className="text-start text-gray-400">{content}</CardContent>
    </ShadCard>
  );
}
