import { languagesName } from "@/lib//utils";
import React from "react";

const Footer = () => {
  return <div className=" container w-screen  mx-auto bg-primary-light dark:bg-primary-dark min-h-28 max-h-auto h-28  md:w-9/12 lg:w-8/12 p-4">
    
        <div className="flex gap-2 text-sm text-slate-400 pb-3 border-b flex-wrap">
        {languagesName.map((lang:string)=>(<span key={lang} className="hover:text-slate-600 cursor-not-allowed">{` ${lang} `}</span>))}

        </div>

  </div>;
};

export default Footer;
