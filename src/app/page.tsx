import React, { Suspense } from "react";

import { Header, Menubar, AdSection, MainSection } from "@/components";

export default async function Home() {
  // const session = await getServerSession();
  // console.log(session);
  return (
    <>
      <Header />
      <main className="relative w-11/12  mt-2 container mx-auto md:grid grid-cols-4">
        <section className="col-start-1 relative  px-2 ">
          <Menubar />
        </section>
        <section className="col-start-2  col-end-4  container px-2 ">
          <Suspense fallback={<h1>Loading...</h1>}>
            <MainSection />
          </Suspense>
        </section>
        <section className="col-start-4 relative px-2 ">
          <AdSection />
        </section>
      </main>
    </>
  );
}
