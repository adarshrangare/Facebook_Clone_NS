import ProfileLoader from "@/components/Skeletons/ProfileLoader";
import { Skeleton } from "antd";
import React from "react";
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const loading = () => {
  return (
    <>
      <div
        className={
          "mx-auto w-full h-80 max-w-screen-2xl relative bg-gray-100 " + shimmer
        }
      >
        <div
          className={
            "w-full max-h-80 h-full object-cover object-center text-center" +
            shimmer
          }
        >
          Cover Image Loding...
        </div>

        <div
          className={`absolute -bottom-24 md:-bottom-32 left-4 md:left-[17%] shadow dark:bg-primary-dark rounded-full md:max-h-48 md:max-w-48 max-h-32 max-w-32 border-4 aspect-square border-[white] dark:border-[#18191a] bg-gray-100 ${shimmer}`}
        ></div>
      </div>

      <ProfileLoader />

      <Skeleton active />
    </>
  );
};

export default loading;
