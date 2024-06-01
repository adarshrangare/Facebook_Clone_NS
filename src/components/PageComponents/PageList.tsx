import { Page } from "@/lib/definations";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiSearchEyeLine } from "react-icons/ri";
const pageImagefallback =
  "https://logowik.com/content/uploads/images/facebook-grey-icon9715.jpg";
type Props = { pages: Page[] | null };

function PageList({ pages }: Props) {
  return (
    <div className="mx-auto w-full h-[92%] rounded-lg pb-6 overflow-y-auto space-y-4">
      {pages?.map((page) => (
        <div
          key={page._id}
          className="mx-auto  bg-primary-light dark:bg-primary-dark rounded-lg  overflow-hidden shadow-md max-w-md lg:max-w-lg w-full   cursor-pointer p-2"
          // href={`/page/${page._id}`}
        >
          <div className="flex w-full gap-2">
          <Image
            alt="pageImage"
            width={150}
            height={150}
            className="aspect-square shrink-0 w-20 h-20 object-cover rounded-full"
            src={page.image || pageImagefallback}
          />
          <div className="p-2">
            <h1 className="text-lg font-semibold py-1">{page.name}</h1>
            <p className="max-w-full text-xs text-neutral-500 dark:text-neutral-400 leading-4">
              {dayjs(page?.createdAt).format("dddd, DD MMM, YYYY ")}

            </p>
          </div>
          </div>
          
            <button className="w-full   py-2 shadow-md  bg-blue-100/65 hover:bg-blue-100 text-blue-500 font-semibold mt-2 rounded-md "><Link href={`/page/${page._id}`}> <RiSearchEyeLine  className="mx-1 inline" size={18}/> View Page</Link></button>
            
          
        </div>

      ))}
    </div>
  );
}

export default PageList;
