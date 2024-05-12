"use client";
import { UserIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { logos } from "@/lib/utils";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { UserData } from "@/lib/definations";
import CreatePostModal from "./CreatePostModal";


const CreatePost = () => {
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const { data: session } = useSession();
  const userDetails: UserData = session?.user as UserData;
  const openModal = () => {
    setOpenCreatePostModal(true);
  };
  const closeModal = () => {
    setOpenCreatePostModal(false);
  };
  return (
    <>
      <section  className="max-w-md w-full mx-auto p-4 pb-2 bg-primary-light dark:bg-primary-dark shadow rounded-md">
        <div className="w-full flex gap-3 border-b pb-2">
          <UserIcon className="w-10 h-10 rounded-full bg-gray-200 dark:invert p-1.5 text-gray-800 " />
          <span
            onClick={openModal}
            className="cursor-pointer  bg-compo-light h-10 text-neutral-500 hover:bg-neutral-200 dark:hover:bg-compo-dark  dark:bg-neutral-900 rounded-full w-full px-4 py-2 "
          >
            What&apos;s on your mind, {userDetails?.name?.split(" ")[0]}?
          </span>
        </div>
        <div className="flex  justify-between pt-3">
          <div onClick={openModal} className="flex items-center gap-2 rounded-md hover:bg-hover-light dark:hover:bg-hover-dark w-fit p-2 py-3 cursor-pointer text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            <Image width={24} height={24} src={logos.live} alt="Live Video" />{" "}
            Live Video
          </div>
          <div onClick={openModal} className="flex items-center gap-2 rounded-md hover:bg-hover-light dark:hover:bg-hover-dark w-fit p-2 py-3 cursor-pointer text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            <Image width={24} height={24} src={logos.photos} alt="Photos" />
            Photo/Images
          </div>
          <div onClick={openModal} className="flex items-center gap-2 rounded-md hover:bg-hover-light dark:hover:bg-hover-dark w-fit p-2 py-3 cursor-pointer text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            <Image width={24} height={24} src={logos.emoji} alt="Feeling" />
            Feeling
          </div>
        </div>
      </section>
      <CreatePostModal openCreatePostModal={openCreatePostModal} handleClose={closeModal}/>
    </>
  );
};

export default CreatePost;
