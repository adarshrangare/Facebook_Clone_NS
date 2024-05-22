import CreatePageForm from "@/components/PageComponents/CreatePageForm";
import PageList from "@/components/PageComponents/PageList";
import { revalidatePath } from "next/cache";
import React, { Suspense } from "react";

type Props = {};

async function page({}: Props) {
  const res = await fetch(
    `https://academics.newtonschool.co/api/v1/facebook/channel?limit=1000&page=1`,
    {
      headers: {
        projectID: process.env.PROJECT_ID as string,
      },
    }
  );

  const data = await res.json();

  const error = !(data.status === "success");
  const result = data?.data;
    revalidatePath("/page");
  return (
    <main className="flex mx-auto min-h-screen max-md:flex-col">
      <div className="bg-primary-light dark:bg-primary-dark py-4 md:basis-1/4 ">
        <CreatePageForm />
      </div>
      <div className=" md:basis-3/4 md:w-3/4 h-screen  py-4">
      <h1 className="text-center w-full pb-4 text-2xl font-bold">Pages and Channels</h1>
        <PageList pages={result} />
      </div>
    </main>
  );
}

export default page;
