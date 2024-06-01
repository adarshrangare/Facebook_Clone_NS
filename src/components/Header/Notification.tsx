"use client";
import React, { useState } from "react";
import { GoBellFill } from "react-icons/go";
const Notification = () => {
  const [showNotifications, setNotifications] = useState(true);

  return (
    <div className="relative " 
    onMouseOver={()=>{
        setNotifications(true)
    }}
    onMouseOut={()=>[
        setNotifications(false)
    ]}>
      <GoBellFill
        className="w-9 h-9 cursor-pointer hover:bg-gray-200/55 rounded-full bg-gray-200 dark:invert p-1.5 text-gray-800"
        size={20}
        onClick={()=>{
            setNotifications(prev=>!prev)
        }}
      />
      <div
        className={`min-w-48  w-[90vw] p-1 md:w-72 min-h-[50vh] max-h-[50vh] max-w-md  md:absolute   bg-primary-light dark:bg-compo-dark border dark:border-none rounded-lg shadow-lg origin-top-right overflow-y-auto fixed left-4 top-14 md:-left-48  ${
          showNotifications ? "scale-100" : "scale-0"
        }`}
      >
        <div className="select-none text-center my-2 font-bold text-xl text-neutral-300 dark:text-neutral-500">
          No New Notifications
        </div>
      </div>
    </div>
  );
};

export default Notification;
