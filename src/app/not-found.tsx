import { Header } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const notFound = () => {
  return (
    <>
      <Header />
      <main className="relative w-full  mt-2 container mx-auto min-h-screen flex items-center justify-center">
        <div className="mx-auto text-center">
          <Image
            src="https://www.facebook.com/images/comet/empty_states_icons/permissions/permissions_gray_wash.svg"
            alt="notfound"
            width={400}
            height={400}
            className="max-w-60 mx-auto"
          />
          <h1 className="max-w-md text-xl font-extrabold text-neutral-500 dark:text-neutral-400">This content isn&apos;t available right now</h1>
          <p className="max-w-md text-neutral-500 dark:text-neutral-400">
            When this happens, it&apos;s usually because the owner only shared it
            with a small group of people, changed who can see it or it&apos;s been
            deleted.
          </p>
          <Link href={"/"} className=" bg-[#0861f2] max-w-sm mx-auto block text-white px-10 rounded-lg hover:scale-95 py-3 font-medium my-6">Go to NewsFeed</Link>
        


        </div>
      </main>
    </>
  );
};

export default notFound;
