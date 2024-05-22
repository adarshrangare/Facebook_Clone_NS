import { Skeleton } from "antd";
import SkeletonImage from "antd/es/skeleton/Image";

import React from "react";

const loading = () => {
  return (
    <main className="flex mx-auto min-h-screen max-md:flex-col">
      <div className="bg-primary-light dark:bg-primary-dark py-4 md:basis-1/4 ">
        <Skeleton active/>
        <Skeleton  active/>
      </div>
      <div className=" md:basis-3/4 md:w-3/4 h-screen  py-4">
        <h1 className="text-center w-full pb-4 text-2xl font-bold">
          Pages and Channels
        </h1>
        <div className="mx-auto lg:w-9/12 md:w-10/12 w-full  gap-y-4 grid md:grid-cols-2 h-[92%] rounded-lg pb-6 overflow-y-auto ">
          {Array.from({ length: 20 }).map((page, index) => (
            <div
              key={index}
              className="mx-auto bg-primary-light dark:bg-primary-dark rounded-lg  overflow-hidden shadow-md max-w-96 w-96 min-h-36 flex cursor-pointer"
            >
              <SkeletonImage active className="aspect-square shrink-0 w-36 h-36 object-cover" />

              <div className="p-2">
                <Skeleton active />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default loading;
