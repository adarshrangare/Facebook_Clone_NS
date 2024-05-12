"use client";
import React, { ReactNode, useState } from "react";

const MenuPopUp = ({
  label,
  items,
}: {
  label: ReactNode;
  items: [] | ReactNode[];
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      <div
        className="label"
        onMouseEnter={() => {
          setOpenMenu(true);
        }}
        onMouseLeave={() => {
          setOpenMenu(false);
        }}
      >
        {label}
      </div>
      <ul
        onMouseEnter={() => {
          setOpenMenu(true);
        }}
        onMouseLeave={() => {
          setOpenMenu(false);
        }}
        className={`itemsList absolute top-5 right-0 shadow-md border bg-white p-1 dark:bg-compo-dark rounded-xl dark:border-black/50  z-20 origin-top ${
          openMenu ? "scale-100" : "scale-0"
        }`}
      >
        {items?.map((item, index) => (
          <li key={index} className="py-1 hover:bg-black/10 text-sm px-6 rounded-lg hover:scale-105 cursor-pointer ">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPopUp;
