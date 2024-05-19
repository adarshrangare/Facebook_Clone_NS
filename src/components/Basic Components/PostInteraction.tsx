"use client";
import { Post } from "@/lib/definations";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HomePostCard from "../HomeComponents/HomePostCard";

const PostInteraction = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  const { data: session } = useSession();

  useEffect(() => {
    async function getPost() {
      // console.log("...getting Post Data...");
      try {
        const res = await fetch(
          `https://academics.newtonschool.co/api/v1/facebook/post/${id}`,
          {
            headers: {
              Authorization: `Bearer ${session?.token}`,
              projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
            },
          }
        );

        const data = await res.json();

        console.log({ data });

        if (data.status === "success") {
          setPost(data?.data);
        } else {
          toast.error("Unable to get Data from Server");
        }
      } catch (error: any) {
        // toast.error(error?.message);
      }
    }
    getPost();
  }, []);

  return (
    <div className="flex-1">
      {post && <HomePostCard post={post as Post} removeImages={true} comments={true} />}

      {/* po */}
    </div>
  );
};

export default PostInteraction;
