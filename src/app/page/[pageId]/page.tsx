"use client";
import PagePosts from "@/components/PageComponents/PagePosts";
import CoverImage from "@/components/ProfilePage/CoverImage";
import ProfileArea from "@/components/ProfilePage/ProfileArea";
import { Page } from "@/lib/definations";
import dayjs from "dayjs";
import Link from "next/link";
import { useParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = { params: { pageId: string } };
const pageImagefallback =
  "https://blog.snappa.com/wp-content/uploads/2022/01/facebook-cover-photo-size.jpg";
export default function PageDetails() {
  const params = useParams();
  const [pageInfo, setPageInfo] = useState<Page | null>(null);
  useEffect(() => {
    async function getPageData() {
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/channel/${params.pageId}`,{
          headers:{
            projectID : process.env.NEXT_PUBLIC_PROJECT_ID as string
          }
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setPageInfo(data?.data);
      } else {
        toast.error(data?.message);
      }
    }

    getPageData();

  }, [params.pageId]);

  return (
    <>
      <CoverImage
        profileImage={pageInfo?.image || pageImagefallback}
        className="mx-auto w-full max-w-screen-2xl relative"
      />
      <div className="bg-primary-light dark:bg-primary-dark mx-auto  md:w-9/12 lg:w-8/12 p-4 w-full min-h-32 md:min-h-48 gap-2 pl-36 md:pl-60 ">
        <h1 className="text-2xl md:text-4xl font-bold">{pageInfo?.name}</h1>
        <p className="max-w-md my-2 pl-2 text-neutral-500 dark:text-neutral-300">{pageInfo?.description}</p>
        <p className="text-neutral-500 dark:text-neutral-300 text-sm p-2"><span className="font-medium">Created On :</span> {dayjs().format("DD, MMM YYYY")}</p>
        <Link href={`/profile/${pageInfo?.owner?._id}`} className="text-neutral-500 dark:text-neutral-300 text-sm p-2 hover:underline"> <span className="font-medium">Created By:</span> {pageInfo?.owner?.name} </Link>
      </div>
      
      <PagePosts />

    </>
  );
}
