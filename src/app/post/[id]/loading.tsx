import FacebookIcon from "@/assets/FacebookIcon";
import PostCardLoader from "@/components/Skeletons/PostCardLoader";

import SkeletonImage from "antd/es/skeleton/Image";
import React from "react";

const loading = () => {
  return (
    <main className="fixed z-20 w-full max-w-[100vw] bg-black/90  h-screen max-h-screen ">
      {/* <div className="h-20 bg-transparent p-4  "> */}
      <FacebookIcon className="m-4 absolute top-4 left-4 " />
      {/* </div> */}
      <div className="w-11/12 h-full mx-auto flex max-md:flex-col">
        <div className="img md:basis-3/4  h-full flex items-center justify-center">
          <SkeletonImage active className="w-72 h-72 scale-150" />
        </div>
        <div className="interaction rounded-sm w-full flex items-center max-w-md bg-primary-light dark:bg-primary-dark h-full max-h-full overflow-y-auto">
          <div className="flex-1">
            <PostCardLoader />
          </div>
        </div>
      </div>
    </main>
  );
};

export default loading;
