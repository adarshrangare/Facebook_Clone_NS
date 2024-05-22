import React, { ReactNode } from "react";
import ProfileCardNav from "../Header/ProfileCardNav";
import { GiMedicalPack } from "react-icons/gi";
import { menubarItems } from "@/lib/utils";
import Link from "next/link";

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

const Menubar = ()=> {
  return (
    <div className="sticky top-16 ">
      <ul className="w-full md:w-10/12 lg:w-9/12">
        <li className="py-2 ">
          <ProfileCardNav />
        </li>
        <li className="pt-2 px-2 rounded-md cursor-pointer hover:bg-zinc-200 dark:hover:bg-hover-dark">
          <div className="flex items-center gap-3  pb-2 dark:text-primary-dark text-primary-light">
            <GiMedicalPack className=" w-10 h-10 rounded-full   p-1 text-blue-500 " />
            <span className="font-semibold leading-5">
              COVID-19 Information Centre
            </span>
          </div>
        </li>

        {menubarItems.map((item,index) => (
          item.title === "Pages" ? (<li key={index} className="pt-2 px-2 rounded-md cursor-pointer hover:bg-zinc-200 dark:hover:bg-hover-dark">
          <Link href={"/page"} className="flex items-center gap-3  pb-2 dark:text-primary-dark text-primary-light">
            <i
              className=""
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')",
                backgroundPosition: item.bgPosition,
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span className="font-semibold leading-5">
              {item.title}
            </span>
          </Link>
        </li>) : (<li key={index} className="pt-2 px-2 rounded-md cursor-pointer hover:bg-zinc-200 dark:hover:bg-hover-dark">
          <div className="flex items-center gap-3  pb-2 dark:text-primary-dark text-primary-light">
            <i
              className=""
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')",
                backgroundPosition: item.bgPosition,
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span className="font-semibold leading-5">
              {item.title}
            </span>
          </div>
        </li>)
        ))}
      </ul>
    </div>
  );
};

export default Menubar;
