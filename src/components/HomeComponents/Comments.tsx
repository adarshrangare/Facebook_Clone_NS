"use client";
import { Comment, User, UserData } from "@/lib/definations";
import { Skeleton } from "antd";
import SkeletonInput from "antd/es/skeleton/Input";
import { useSession } from "next-auth/react";
import React, { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import CommentsContainer from "./CommentsContainer";
import CreateComment from "./CreateComment";

const Comments = ({ postId }: { postId: string }) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[] | []>([]);
  const [loading, setLoading] = useState(false);
  // const [authorDetails, setAuthorDetails] = useState<UserData | null>(null);
  const fetchComments = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${session?.token}`,
            projectID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
          },
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setTimeout(() => {
          setComments(data?.data.reverse());
        }, 1000);
        // setAuthorDetails(data?.data?.author_details)
        setLoading(false);
      } else {
        // toast.error(data?.message);
        setLoading(false);
      }
    } catch (error) {
      toast.error("Unable to load comments, Please Try Again Later");
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="mx-auto  max-w-md w-full px-4 py-2 text-xs">
      <CreateComment user={session?.user as User} postId={postId} />

      {!!comments.length && (
        <CommentsContainer user={session?.user as User} comments={comments} />
      )}
    </div>
  );
};

export default Comments;
