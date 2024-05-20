"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  // console.log("theme switched");
  useEffect(() => {
    setMounted(true);
    return () => {
      // setTheme("light")
    };
  }, []);

  if (!mounted) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {resolvedTheme === "dark" ? (
        <li
        className="px-4 py-2 rounded-md flex items-center font-semibold hover:bg-hover-light dark:hover:bg-hover-dark gap-3"
        onClick={(e: any) => {
          setTheme("light");
        }}
      >
          <SunIcon
            className="w-8 h-8 p-1 pl-1.5 inline dark:invert bg-gray-200  text-primary-light rounded-full"
            onClick={(e) => {
              setTheme("light");
            }}
          />
          <span>Turn Light Mode On</span>
        </li>
      ) : (
        <li
          className="px-4 py-2 rounded-md flex items-center font-semibold hover:bg-zinc-100 gap-3"
          onClick={(e: any) => {
            setTheme("dark");
          }}
        >
          <MoonIcon className="w-8 h-8 p-1 pl-1.5 inline  bg-compo-light dark:bg-compo-dark rounded-full" />
          <span>Turn Dark Mode On</span>
        </li>
      )}
    </>
  );
};

export default ThemeSwitch;
