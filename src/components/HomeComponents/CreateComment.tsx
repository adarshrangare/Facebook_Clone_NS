"use client";
import { User } from "@/lib/definations";
import React, { useState } from "react";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";
import { MdSend } from "react-icons/md";
import { postAComment } from "@/lib/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreateComment = ({ postId, user }: { postId: string; user: User }) => {
  const [commentInput, setCommentInput] = useState("");
  const router = useRouter();
  const handleSubmit = async () => {
    const res = await postAComment(user.jwt, postId, commentInput);
    if (res.message === "success") {
      toast.success("Comment is posted successfully");
      router.refresh();
      window.location.reload();
    } else {
      toast.error("Unable to add comment");
    }
  };

  return (
    <div className="w-full border-t py-2">
      <div className="flex items-center gap-1  font-medium">
        {user.profileImage ? (
          <Image
            className="w-6 h-6 rounded-full"
            src={user.profileImage}
            width={24}
            height={24}
            alt={user.name}
          />
        ) : (
          <UserIcon className="w-6 h-6 rounded-full bg-gray-200 dark:invert p-1.5 text-gray-800 " />
        )}
        <span>{user.name}</span>
      </div>
      <div className="w-full flex gap-3  p-1">
        <textarea
          value={commentInput}
          onChange={(e) => {
            setCommentInput(e.target.value);
          }}
          placeholder="Write a Comment..."
          className="ml-6 outline-none p-1.5 w-full resize-none min-h-8 bg-compo-light dark:bg-compo-dark rounded-lg"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="disabled:cursor-not-allowed mx-auto pl-2 min-w-8 disabled:opacity-70 text-primary-light dark:text-primary-dark"
          disabled={!commentInput}
        >
          <MdSend size={20} />{" "}
        </button>
      </div>
    </div>
  );
};

export default CreateComment;
