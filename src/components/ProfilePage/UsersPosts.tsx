import { Post, UserData } from "@/lib/definations";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HomePostCard from "../HomeComponents/HomePostCard";
import PostCardLoader from "../Skeletons/PostCardLoader";

const UsersPosts = ({ userInfo }: { userInfo: UserData | null }) => {
  const userId = userInfo?._id  ;
  console.log(userId);
  const { data: session } = useSession();

  const [posts, setPosts] = useState<Post[] | []>([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function getUsersPost() {
      try {
        const res = await fetch(
          `https://academics.newtonschool.co/api/v1/facebook/user/${userId}/posts?limit=1000&page=1`,
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
        setLoading(false)
      }
    }
    
    getUsersPost();
  }, []);

  return <div className="dark:bg-body-dark bg-body-light">

<div className=" w-full my-4 space-y-4 pt-4">
      {!loading
        ? posts?.map((post, index) => <HomePostCard key={index} post={post} onlyPost={true} />)
        : Array.from({ length: 4 }).map((_, index) => (
            <PostCardLoader key={index} />
          ))}
      <p className="text-center text-neutral-500 text-sm w-full">
        No more Posts Available
      </p>
    </div>

  </div>;
};

export default UsersPosts;
