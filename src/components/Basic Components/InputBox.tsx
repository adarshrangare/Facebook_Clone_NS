"use client";

import React, { useEffect, useRef, useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { InputBoxProps } from "@/lib/definations";

const InputBox: React.FC<InputBoxProps> = ({
  type = "text",
  placeholder,
  className,
  name,
  value,
  onChange,
  passwordIconClass,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [inputType, setInputType] = useState("password");
  // console.log("component render");

  return (
    <div className="relative w-full h-fit my-1">
      <input
        value={value}
        placeholder={placeholder}
        type={type === "password" ? inputType : type}
        name={name}
        className={`p-3 bg-compo-light text-black outline-none w-full rounded-lg border-2 focus:border-blue-500 box-border ${className} ${
          type === "password" ? "pr-4" : ""
        }`}
        onChange={onChange}
        {...rest}
      />

      {type === "password" &&
        (showPassword ? (
          <EyeIcon
            className={`absolute w-6 h-8 right-4 rounded-full  pl-2 text-gray-500 top-1/2 -translate-y-1/2 cursor-pointer bg-transparent `}
            onClick={(e: any): void => {
              e.preventDefault();
              setShowPassword((prev) => !prev);
              setInputType("text");
            }}
          />
        ) : (
          <EyeSlashIcon
            className={`absolute w-6 h-8 right-4 rounded-full  pl-2 text-gray-500 top-1/2 -translate-y-1/2 cursor-pointer bg-transparent `}
            onClick={(e: any): void => {
              e.preventDefault();
              setShowPassword((prev) => !prev);
              setInputType("password");
            }}
          />
        ))}
    </div>
  );
};

export default InputBox;
