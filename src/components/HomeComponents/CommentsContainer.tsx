import { Comment, User, UserData } from "@/lib/definations";
import Image from "next/image";
import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { HiDotsHorizontal } from "react-icons/hi";
import MenuPopUp from "../Basic Components/MenuPopUp";
import { deleteComment } from "@/lib/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CommentsContainer = ({
  user,
  comments,
}: {
  user: User;
  comments: Comment[] | null | [];
}) => {
  // const  authorDetails =  comments?.author_details as UserData;

  // const [authorDetails, setAuthorDetails] = useState<UserData | null>(comments?.author_details || null)
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
   const router = useRouter();
  const handleDelete = async (id:string)=>{

    const res = await deleteComment(user.jwt,id)

    console.log(res);
    if(res.message === "success"){
      toast.success("comment is deleted");
      router.refresh();
    }else{
      toast.error(`something went wrong `);
    }

  }

  return (
    <div className="w-full max-w-md px-2 py-2 border-t space-y-2 max-h-72 overflow-y-auto">
      {comments
        ? comments?.map((comment: Comment) => (
            <div className="bg-compo-light dark:bg-compo-dark rounded-2xl p-2 relative">
              {comment.author_details?._id === user.id && (
                <MenuPopUp
                  label={
                    <HiDotsHorizontal
                      size={24}
                      className="text-neutral-600 mr-2 hover:text-neutral-700 cursor-pointer absolute right-0 scale-75"
                    />
                  }
                  items={[
                    <h1
                      onClick={async() => {
                        handleDelete(comment._id as string)
                      }}
                      key={1}
                    >
                      Delete
                    </h1>,
                  ]}
                />
              )}
              <div className="flex items-center gap-1  font-medium  ">
                {comment.author_details?.profileImage ? (
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={comment.author_details?.profileImage}
                    width={24}
                    height={24}
                    alt={comment.author_details?.name as string}
                  />
                ) : (
                  <UserIcon className="w-6 h-6 rounded-full bg-gray-200 dark:invert p-1.5 text-gray-800 " />
                )}
                <div>
                  <div>{comment.author_details?.name}</div>
                </div>
              </div>
              <div className="mx-8 text-xs mt-0.5">{comment.content}</div>
            </div>
          ))
        : "Loading"}
    </div>
  );
};

export default CommentsContainer;
