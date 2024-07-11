
import { Skeleton } from "antd";
import SkeletonAvatar from "antd/es/skeleton/Avatar";
import React from "react";


const PostCardLoader = () => {
  return (
    <div className="max-w-xl max-lg:max-w-lg max-md:max-w-md mx-auto min-h-60 py-2 bg-primary-light dark:bg-primary-dark shadow rounded-md ">
      <div className="author flex items-center gap-4 mb-2 px-2">
        <SkeletonAvatar active size={"large"} className="dark:invert" />
        <Skeleton paragraph={{rows:0}} active className="dark:invert pt-4" />
      </div>
      <div className="captions px-4 pb-2 text-primary-light dark:text-primary-dark text-[15px] ">
        <Skeleton active className="dark:invert"/>
      </div>
      {/* // image Area */}

      <div className="image relative">{/* image skeleton */}</div>

      {/* Like and comment count */}
      <div className="counts w-full flex justify-between items-center px-4 space-x-48 ">
        
        <Skeleton paragraph={false} active className="dark:invert pt-4" />
        
        <Skeleton paragraph={false} active className="dark:invert pt-4" />
        
        
      </div>
      {/* Like and Comment Section */}
      <div className=" w-full ">
        <div className="w-11/12 mx-auto  flex pt-2  px-4 gap-4">
            
        <Skeleton paragraph={false} active  className=" dark:invert pt-4" />
          
            
        <Skeleton paragraph={false} active  className=" dark:invert pt-4" />
          
         <Skeleton paragraph={false} active  className=" dark:invert pt-4" />
            
          
        </div>
      </div>
    </div>
  );
};

export default PostCardLoader;
