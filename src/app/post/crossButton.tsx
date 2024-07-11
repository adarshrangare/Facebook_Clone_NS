"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
const CrossButton = () => {
  const router = useRouter();
  return (
    <IoClose
      size={24}
      className=" text-white m-4 absolute top-4 right-4 md:right-[32rem] z-10 cursor-pointer mix-blend-difference"
      onClick={() => {
        router.back();
      }}
    />
  );
};

export default CrossButton;
