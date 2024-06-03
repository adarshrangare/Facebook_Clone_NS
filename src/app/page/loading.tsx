import { Skeleton } from "antd";
import SkeletonImage from "antd/es/skeleton/Image";

import React from "react";

const loading = () => {
  return (
    <main className="flex mx-auto min-h-screen max-md:flex-col">
      <div className="bg-primary-light dark:bg-primary-dark py-4 md:basis-1/4 ">
        <Skeleton active />
        <Skeleton active />
      </div>
      <div className=" md:basis-3/4 md:w-3/4 h-screen  py-4">
        <h1 className="text-center w-full pb-4 text-2xl font-bold">
          Pages and Channels
        </h1>
        <div className="loader">
          <div className="square" id="sq1"></div>
          <div className="square" id="sq2"></div>
          <div className="square" id="sq3"></div>
          <div className="square" id="sq4"></div>
          <div className="square" id="sq5"></div>
          <div className="square" id="sq6"></div>
          <div className="square" id="sq7"></div>
          <div className="square" id="sq8"></div>
          <div className="square" id="sq9"></div>
        </div>
      </div>
    </main>
  );
};

export default loading;
