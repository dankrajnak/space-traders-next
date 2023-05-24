"use client";
import { Container as ContainerLibComp } from "@nextui-org/react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <ContainerLibComp>
      {children}
    </ContainerLibComp>
  );
}
