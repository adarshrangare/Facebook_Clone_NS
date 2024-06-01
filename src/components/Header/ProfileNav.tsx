"use client";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/solid";
import React, {useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import ProfileCardNav from "./ProfileCardNav";
import { signOut } from "next-auth/react";
import ThemeSwitch from "./ThemeSwitch";
const ProfileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
   

  return (
    <div className="mx-2">
      <button
        className="relative z-10 cursor-pointer active:scale-95  transition-all duration-200 "
        onClick={(e: any) => {
          setShowMenu(!showMenu);
        }}
      >
        <UserIcon className="w-10 h-10 rounded-full bg-gray-200  dark:invert p-1.5 text-gray-800 " />
        <ChevronDownIcon
          className={`w-4  h-4 rounded-full dark:invert bg-gray-200 text-gray-800 absolute p-0.5 border-2 border-white  -right-1 -bottom-1 ${
            showMenu && "rotate-180"
          }`}
        />

        <div
          className={` z-20 bg-primary-light dark:bg-primary-dark px-1 py-2 absolute top-full border dark:border-gray-700 right-0 menu min-w-60 min-h-16 shadow-md origin-top-right translate-y-1 rounded-md ${
            showMenu ? "scale-100 " : "scale-0 "
          }`}
        >
          <div className="card mx-2 my-2 px-2 py-2 rounded-md border shadow-sm hover:shadow-lg ">
            <ProfileCardNav  />

          </div>
          <ul className="w-full dark:text-primary-dark text-primary-light  ">
            <li
              className="px-4 py-2 rounded-md flex items-center font-semibold text-primary-light hover:bg-hover-light hover:dark:bg-hover-dark gap-3"
              onClick={(e: any) => {
                signOut();
                  setShowMenu(false);
              }}
            >
              <HiOutlineLogout className="w-8 h-8 p-1 pl-1.5 inline bg-gray-200 dark:invert rounded-full" />
              <span className="dark:text-primary-dark text-primary-light"> Logout</span>
            </li>
              <ThemeSwitch/>
            
          </ul>
        </div>
      </button>
    </div>
  );
};

export default ProfileNav;
