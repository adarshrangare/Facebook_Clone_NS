"use client";
import { Modal } from "antd";
import { useSession } from "next-auth/react";
import React, { FormEvent, useRef, useState } from "react";
import ProfileCardNav from "../Header/ProfileCardNav";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { logos } from "@/lib/utils";
import { createAPost } from "@/lib/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreatePostModal = ({
  openCreatePostModal,
  handleClose,
}: {
  openCreatePostModal: boolean;
  handleClose: () => void;
}) => {
  const { data: session } = useSession();
  const [postDescription, setPostDescription] = useState("");
  const [images, setImages] = useState<any[] | []>([]);
  const imagesInput = useRef(null);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // console.log(e);
    const formData = new FormData();
    formData.append("content", postDescription);

    if (images.length > 0) {
      images.forEach((img) => formData.append("images", img));
    }

    const response = await createAPost(session?.token as string, formData);

    // console.log({ response });

    if (response.message === "success") {
      toast.success("Post created.");
      setPostDescription("");
      setImages([]);
      setTimeout(() => {
        // router.push("/");
        // router.refresh();
        router.replace("")
      }, 100);
      handleClose();
    } else {
      toast.error("OOPS! Some error occurred.");
    }
  };

  function imagesBtnHandler(e: any) {
    setImages([...e.target.files]);
  }

  function handleRemoveFile(index: number) {
    const newFiles = [...images];
    newFiles.splice(index, 1);
    setImages(newFiles);
  }

  return (
    <Modal
      className="  dark:invert "
      zIndex={2}
      open={openCreatePostModal}
      centered={true}
      okButtonProps={{
        style: {
          display: "none",
        },
      }}
      cancelButtonProps={{
        style: {
          display: "none",
        },
      }}
      onCancel={handleClose}
      width={450}
    >
      <div className="w-full">
        <h1 className="text-center text-xl md:text-2xl font-bold border-b pb-2">
          Create Post
        </h1>

        <form className="py-2" onSubmit={handleSubmit}>
          <div className="scale-125 translate-x-12 py-2 pb-4 dark:invert ">
            <ProfileCardNav />
          </div>

          <textarea
            name="postDescription"
            id="createPostInput"
            placeholder={`What's on your mind, ${
              session?.user?.name?.split(" ")[0]
            }?`}
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            className="dark:invert rounded-md text-xl text-primary-light dark:text-primary-dark w-full  min-h-28 outline-none resize-none p-2 placeholder:text-xl"
          ></textarea>

          <div className="flex items-center w-full pt-2 ">
            {/* add overflow-y-scroll to dive below if want to add multiple images */}
            <div className="flex gap-4 flex-wrap max-h-[100px] w-full">
              {images.length > 0 &&
                images.map((file, index) => {
                  return (
                    <div
                      key={file.lastModified}
                      className="flex gap-1 relative dark:invert"
                    >
                      <div className="relative w-10 sm:w-14 h-10">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt="upload"
                          fill
                          sizes="48px"
                          className="aspect-square object-cover "
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="absolute -top-2 -right-2  bg-white dark:invert  rounded-2xl shadow bg-opacity-70"
                      >
                        <IoCloseOutline size={18} />
                      </button>
                    </div>
                  );
                })}
            </div>
            <label className="relative cursor-pointer">
              <input
                ref={imagesInput}
                type="file"
                className="absolute w-0 h-0"
                multiple
                name="images"
                accept="image/*"
                onChange={imagesBtnHandler}
              />
              <Image
                width={24}
                height={24}
                src={logos.photos}
                alt="Photos"
                className="dark:invert"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-[#2176ff] px-3 py-2 rounded-md text-base text-white font-medium disabled:bg-zinc-600 disabled:opacity-60 dark:invert disabled:cursor-not-allowed"
            disabled={!postDescription}
          >
            Post
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreatePostModal;
