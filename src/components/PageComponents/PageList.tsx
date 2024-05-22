import { Page } from "@/lib/definations";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const pageImagefallback =
  "https://newsfeed.org/wp-content/uploads/Facebook-Page-Logo.png";
type Props = { pages: Page[] | null };

function PageList({ pages }: Props) {
  return (
    <div className="mx-auto lg:w-9/12 md:w-10/12 w-full  gap-y-4 grid md:grid-cols-2 h-[92%] rounded-lg pb-6 overflow-y-auto ">
      {pages?.map((page) => (
        <Link
          key={page._id}
          className="mx-auto bg-primary-light dark:bg-primary-dark rounded-lg  overflow-hidden shadow-md max-w-96 w-96 min-h-36 flex cursor-pointer"
          href={`/page/${page._id}`}
        >
          <Image
            alt="pageImage"
            width={150}
            height={150}
            className="aspect-square shrink-0 w-36 h-36 object-cover"
            src={page.image || pageImagefallback}
          />
          <div className="p-2">
            <h1 className="text-lg font-semibold py-1">{page.name}</h1>
            <p className="max-w-full text-sm text-neutral-500 dark:text-neutral-400 leading-4">
              {page.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PageList;
