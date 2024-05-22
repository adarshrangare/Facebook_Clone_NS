import { Header } from "@/components";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="relative w-full  mt-2 container mx-auto min-h-screen">
        {children}
      </main>
    </>
  );
};

export default layout;
