"use client";
import { Post, UserData } from "@/lib/definations";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HomePostCard from "../HomeComponents/HomePostCard";
import PostCardLoader from "../Skeletons/PostCardLoader";

const UsersPosts = ({ userInfo }: { userInfo: UserData | null }) => {
  // const userId = userInfo?._id  ;
  // console.log(userId);
  const { data: session } = useSession();
  const params = useParams();
  const userId = params.userId;
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getUsersPost() {
      try {
        const res = await fetch(
          `https://academics.newtonschool.co/api/v1/facebook/user/${userId}/posts`,
          {
            headers: {
              Authorization: `Bearer ${session?.token}`,
              projectID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
            },
          }
        );

        const data = await res.json();

        if (data.status === "success") {
          setPosts(data?.data);
        } else {
          toast.error(data.message);
        }
        setLoading(false);
      } catch (error: any) {
        toast.error(error?.message);
        setLoading(true);
      }
    }

    getUsersPost();
  }, [session?.token]);

  return (
    <div className="dark:bg-body-dark bg-body-light">
      <div className=" w-full my-4 space-y-8 pt-4">
        {!loading
          ? posts?.map((post, index) => (
              <Link
                className="   mx-auto "
                key={index}
                href={`/post/${post?._id}`}
              >
                <HomePostCard post={post} onlyPost={true} />
                <div className="text-center font-semibold  max-w-md mx-auto px-4 py-4 mt-0.5 mb-4 rounded-md text-primary-light dark:text-primary-dark dark:bg-primary-dark bg-primary-light transition-all hover:scale-[0.99] dark:hover:bg-hover-dark hover:bg-hover-light shadow ">
                  View Post
                </div>
              </Link>
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <PostCardLoader key={index} />
            ))}
        <p className="text-center text-neutral-500 text-sm w-full">
          No more Posts Available
        </p>
      </div>
    </div>
  );
};

export default UsersPosts;
