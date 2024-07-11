"use client";
import React, { ReactNode } from "react";
import ProfileCardNav from "../Header/ProfileCardNav";
import { GiMedicalPack } from "react-icons/gi";
import { menubarItems } from "@/lib/utils";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaInfo } from "react-icons/fa6";
import Image from "next/image";
import { TbSettingsSearch } from "react-icons/tb";
const containerStyle = {
  backgroundImage:
    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')",
  backgroundPosition: "0 -259px",
  backgroundSize: "auto",
  width: "36px",
  height: "36px",
  backgroundRepeat: "no-repeat",
  display: "inline-block",
};

export const underConstructionToast = () => {
  toast.custom((t) => {
    setTimeout(() => {
      toast.dismiss(t.id);
    }, 1500);
    return (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white/90 backdrop-blur-sm dark:bg-black/50  shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1  p-4">
          <div className="flex items-center gap-3  justify-center">
            <TbSettingsSearch className="w-10 h-10 inline-block text-blue-600" />
            <h1 className="font-bold inline-block px-4 text-blue-600">
              Page is Under Construction
            </h1>
          </div>
        </div>
        {/* <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-0"
          >
            Close
          </button>
        </div> */}
      </div>
    );
  });
};

const Menubar = () => {
  return (
    <div className="sticky top-16 py-2 -translate-y-2 bg-white dark:bg-black/50 rounded-md px-4 flex w-full min-h-screen">
      <ul className="w-full md:w-10/12 ">
        <li className="py-2 ">
          <ProfileCardNav />
        </li>
        <li
          onClick={() => {
            underConstructionToast();
          }}
          className="pt-2 px-2 rounded-md cursor-pointer hover:bg-zinc-200 dark:hover:bg-hover-dark"
        >
          <span className="flex items-center gap-3  pb-2 dark:text-primary-dark text-primary-light">
            <GiMedicalPack className=" w-10 h-10 rounded-full   p-1 text-blue-500 " />
            <span className="font-semibold leading-5">
              COVID-19 Information Centre
            </span>
          </span>
        </li>

        {menubarItems.map((item, index) =>
          item.title === "Pages" ? (
            <li
              key={index}
              className="pt-2 px-2 rounded-md cursor-pointer hover:bg-zinc-200 dark:hover:bg-hover-dark"
            >
              <Link
                href={"/page"}
                className="flex items-center gap-3  pb-2 dark:text-primary-dark text-primary-light"
              >
                <i
                  className=""
                  style={{
                    backgroundImage:
                      "url('https://raw.githubusercontent.com/adarshrangare/Facebook_Clone_NS/main/src/assets/icons2.png')",
                    backgroundPosition: item.bgPosition,
                    backgroundSize: "auto",
                    width: "36px",
                    height: "36px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                ></i>
                <span className="font-semibold leading-5">{item.title}</span>
              </Link>
            </li>
          ) : (
            <li
              key={index}
              className="opacity-60 cursor-pointer pt-2 px-2  rounded-md  hover:bg-zinc-200 dark:hover:bg-hover-dark"
              onClick={() => {
                underConstructionToast();
              }}
            >
              <div className="flex items-center gap-3  pb-2 dark:text-primary-dark text-primary-light">
                <i
                  className=""
                  style={{
                    backgroundImage:
                      "url('https://raw.githubusercontent.com/adarshrangare/Facebook_Clone_NS/main/src/assets/icons2.png')",
                    backgroundPosition: item.bgPosition,
                    backgroundSize: "auto",
                    width: "36px",
                    height: "36px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                ></i>
                <span className="font-semibold leading-5">{item.title}</span>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Menubar;
