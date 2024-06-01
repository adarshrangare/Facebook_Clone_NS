"use client";
import { Post } from "@/lib/definations";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HomePostCard from "../HomeComponents/HomePostCard";
import PostCardLoader from "../Skeletons/PostCardLoader";

const PagePosts = () => {
  const params = useParams();
  const [postsList, setPostsList] = useState<Post[] | []>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function getPagePosts() {
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/channel/${params.pageId}/posts`,
        {
          headers: {
            projectID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
          },
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        console.log(data?.data);
        setPostsList(data?.data);
        setLoading(false);
      } else {
        toast.error("Unable to get Page Posts");
      }
    }

    getPagePosts();
  }, []);

  return (
    <div className="dark:bg-body-dark bg-body-light">
      <div className=" w-full my-4 space-y-8 pt-4">
        {!loading
          ? postsList.map((post, index) => {
              if (post) {
                return (
                  <Link
                    className="my-4 py-4"
                    key={index}
                    href={`/post/${post?._id}`}
                  >
                    <HomePostCard post={post} onlyPost={true} />
                    <div className="text-center font-semibold  max-w-md mx-auto px-4 py-4 mt-0.5 mb-4 rounded-md text-primary-light dark:text-primary-dark dark:bg-primary-dark bg-primary-light transition-all hover:scale-[0.99] dark:hover:bg-hover-dark hover:bg-hover-light shadow ">
                  View Post
                </div>
                  </Link>
                );
              }
            })
          : Array.from({ length: 1 }).map((_, index) => (
              <PostCardLoader key={index} />
            ))}
        <p className="text-center text-neutral-500 text-sm w-full">
          No more Posts Available
        </p>
      </div>
    </div>
  );
};

export default PagePosts;
