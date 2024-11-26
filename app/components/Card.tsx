import {
  CardContent,
  CardHeader,
  CardTitle,
  Card as ShadCard,
} from "@/components/ui/card";

import React, { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  content: string;
}

export default function Card({ icon, content, title }: Props) {
  return (
    <ShadCard className="text-center flex flex-col items-center gap-4 py-4 max-w-[400px] md:w-auto bg-inherit border border-gray-700">
      <CardHeader className="text-gray-50 w-fit rounded-full bg-gray-900">
        {icon}
      </CardHeader>
      <CardTitle className="text-gray-100">{title}</CardTitle>
      <CardContent className="text-start text-gray-400">{content}</CardContent>
    </ShadCard>
  );
}
