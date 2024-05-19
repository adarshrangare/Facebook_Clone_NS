import Image from "next/image";
import React, { Ref, useEffect, useRef, useState } from "react";
import { Post, UserData } from "@/lib/definations";
import {
  ChatBubbleOvalLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { logos } from "@/lib/utils";
import dayjs from "dayjs";
import { Carousel, Dropdown, Modal } from "antd";
import { useSession } from "next-auth/react";
import { deletePost, likePost } from "@/lib/actions";
import toast from "react-hot-toast";
import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";
import MenuPopUp from "../Basic Components/MenuPopUp";
import { useRouter } from "next/navigation";
import EditPostModal from "./EditPostModal";
import Comments from "./Comments";
// import likePost from "../api/likePost";
// import disLikePost from "../api/dislikePost";

const HomePostCard = ({
  post,
  menuOption = false,
  removeImages = false,
  comments = false
}: {
  post: Post;
  menuOption?: true | false;
  removeImages?:boolean;
  comments?:boolean
}) => {
  const getTimeDiff = (postDate: string) => {
    const currentDay = dayjs();
    const minutes = currentDay.diff(dayjs(postDate), "minutes");
    const hours = currentDay.diff(dayjs(postDate), "hours");
    const day = currentDay.diff(dayjs(postDate), "day");
    const week = currentDay.diff(dayjs(postDate), "week");
    // const month = currentDay.diff(dayjs(postDate), "month");
    // const year = currentDay.diff(dayjs(postDate), "year");

    return minutes < 59
      ? `${minutes}m`
      : hours < 24
      ? `${hours}h`
      : day < 7
      ? `${day}d`
      : `${week}w`;
  };

  const carouselRef = useRef<any>();
  const [liked, setLiked] = useState(post?.isLiked || false);
  const [likeCount, setLikeCount] = useState(post?.likeCount);

  const { data: session } = useSession();
  const userDetails: UserData = session?.user as UserData;
  const [menuOptions, setMenuOptions] = useState(menuOption);
  const [openComments, setComments] = useState(comments);
  useEffect(() => {
    // console.log(userDetails?.id)
    setMenuOptions(post?.author?._id === userDetails.id);
  }, []);

  // console.log(menuOption)

  const handleLike = async () => {
    // console.log(token)
    const response = await likePost(session?.token as string, post?._id, "POST");
    if (response.message === "success") {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    } else {
      // setLiked(false);
      toast.error("Unable to Like this Post");
    }
  };
  const handleDislike = async () => {
    const response = await likePost(
      session?.token as string,
      post._id,
      "DELETE"
    );
    if (response.message === "success") {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      // setLiked(false);
      toast.error("Unable to Dislike this Post");
    }
  };

  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);

  const router = useRouter();
  const handleDelete = async () => {
    const resposne = await deletePost(session?.token as string, post._id);

    console.log(resposne);
    if (resposne?.message === "success") {
      toast.success("Post is deleted Successfully");
      if (window) {
        window.location.reload();
      } else {
        router.refresh();
      }
    } else {
      toast.error("Unable to Delete this Post");
    }
  };

  return (
    <>
      <div className=" max-w-md mx-auto py-2  bg-primary-light dark:bg-primary-dark shadow rounded-md ">
        <div className="author flex justify-between   px-2">
          <Link
            className="author flex items-center gap-4 mb-2 px-2"
            href={`/profile/${post?.author?._id}`}
          >
            {post?.author?.profileImage ? (
              <Image
                className="w-10 h-10 rounded-full"
                src={post?.author?.profileImage}
                width={24}
                height={24}
                alt={post?.author?.name}
              />
            ) : (
              <UserIcon className="w-10 h-10 rounded-full bg-gray-200 dark:invert p-1.5 text-gray-800 " />
            )}
            <div>
              <div className="font-semibold leading-5 text-primary-light dark:text-primary-dark ">
                {post?.author?.name}
              </div>
              <div className="text-xs text-neutral-500">
                {getTimeDiff(post?.createdAt)}
              </div>
            </div>
          </Link>
          {menuOptions && (
            <MenuPopUp
              label={
                <HiDotsHorizontal
                  size={24}
                  className="text-neutral-600 mr-2 hover:text-neutral-700 cursor-pointer "
                />
              }
              items={[
                <h1
                  onClick={() => {
                    setOpenConfirmModal(true);
                  }}
                  key={1}
                >
                  Delete
                </h1>,
                <h1
                  onClick={() => {
                    setOpenEditModal(true);
                  }}
                  key={2}
                >
                  Edit
                </h1>,
              ]}
            />
          )}
        </div>
        <EditPostModal
          id={post?._id}
          openEditModal={openEditModal}
          handleClose={() => {
            setOpenEditModal(false);
          }}
          description={post?.content}
          imagesList={post?.images}
        />
        <Modal
          open={openConfirmModal}
          onCancel={() => {
            setOpenConfirmModal(false);
          }}
          zIndex={2}
          centered={true}
          closeIcon={null}
          okText="Confirm"
          okButtonProps={{
            className: "font-medium border-none  bg-[#2176ff] mx-4 dark:invert",
          }}
          cancelButtonProps={{
            className: "font-medium border-none  mx-4 ",
          }}
          className="dark:invert "
          onOk={() => {
            handleDelete();
            setOpenConfirmModal(false);
          }}
        >
          <h1 className="font-medium pb-4 text-lg">
            Do you Really want to Delete this Post?
          </h1>
        </Modal>
        <div className="captions px-4 pb-2 text-primary-light dark:text-primary-dark text-[15px] ">
          <p className="font-medium">{post?.title}</p>
          <p>{post?.content}</p>
        </div>
        {/* // image Area */}
        {!removeImages &&  post?.images?.length !== 0 && (
          <div className="image relative">
            <Link href={`/post/${post._id}`}>
              <Carousel className="w-full" ref={carouselRef} dots={false}>
                {post?.images?.map((img: string, index: number) => (
                  <Image
                    key={index}
                    priority
                    alt={post?.title || post?.content}
                    width={400}
                    height={400}
                    src={img}
                  />
                ))}
              </Carousel>
            </Link>
            {post?.images?.length > 1 && (
              <div className="absolute top-1/2 buttons w-full flex justify-between">
                <button
                  onClick={() => {
                    carouselRef.current.prev();
                  }}
                >
                  <ChevronLeftIcon className="w-8 h-8 text-neutral-500" />
                </button>
                <button
                  onClick={() => {
                    carouselRef.current.next();
                  }}
                >
                  <ChevronRightIcon className="w-8 h-8 text-neutral-500" />
                </button>
              </div>
            )}
          </div>
        )}
        {/* Like and comment count */}
        <div className="counts flex justify-between items-center px-4 ">
          <Link href={`/post/${post?._id}`}>
            <div className="flex gap-1.5 my-2 font-light opacity-85 text-primary-light dark:text-primary-dark text-sm cursor-pointer">
              <Image src={logos.like} alt="like" width={18} height={18} />
              <span>{likeCount}</span>
            </div>
          </Link>
          <Link href={`/post/${post?._id}`}>
            <div className="flex gap-1.5 my-2 font-light opacity-85 text-primary-light dark:text-primary-dark text-sm cursor-pointer">
              <span className="hover:underline">{post?.commentCount}</span>
              <ChatBubbleOvalLeftIcon className="w-5 h-5 opacity-80" />
            </div>
          </Link>
        </div>
        {/* Like and Comment Section */}
        <div className=" w-full select-none ">
          <div className="w-11/12 mx-auto border-t flex pt-2 ">
            {liked ? (
              <div
                className={`flex  gap-2 rounded-md hover:bg-hover-light dark:hover:bg-hover-dark w-fit p-2 py-3 cursor-pointer text-sm font-semibold text-neutral-500 dark:text-neutral-400 text-center flex-1 items-center justify-center `}
                onClick={() => {
                  handleDislike();
                }}
              >
                <i
                  className={`   ${liked ? " opacity-100 duration-100" : ""}`}
                  style={{
                    backgroundImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/GAaxJlSQY0r.png)",
                    backgroundPosition: `${
                      liked ? "0px -676px" : "0px -739px"
                    }`,
                    backgroundSize: "25px 1427px",
                    width: "20px",
                    height: "20px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                ></i>
                <span className={`${liked ? "text-blue-500" : ""}`}>Like</span>
              </div>
            ) : (
              <div
                className={`flex  gap-2 rounded-md hover:bg-hover-light dark:hover:bg-hover-dark w-fit p-2 py-3 cursor-pointer text-sm font-semibold text-neutral-500 dark:text-neutral-400 text-center flex-1 items-center justify-center `}
                onClick={() => {
                  handleLike();
                }}
              >
                <i
                  className={`opacity-70  dark:invert ${
                    liked ? " opacity-100 duration-100" : ""
                  }`}
                  style={{
                    backgroundImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/GAaxJlSQY0r.png)",
                    backgroundPosition: `${
                      liked ? "0px -676px" : "0px -739px"
                    }`,
                    backgroundSize: "25px 1427px",
                    width: "20px",
                    height: "20px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                ></i>
                <span className={`${liked ? "text-blue-500" : ""}`}>Like</span>
              </div>
            )}
            <div
              onClick={() => {
                setComments((prev) => !prev);
              }}
              className="flex  gap-2 rounded-md hover:bg-hover-light dark:hover:bg-hover-dark w-fit p-2 py-3 cursor-pointer text-sm font-semibold text-neutral-500 dark:text-neutral-400 text-center flex-1 items-center justify-center"
            >
              <i
                className="opacity-70  dark:invert"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/GAaxJlSQY0r.png)",
                  backgroundPosition: "0px -550px",
                  backgroundSize: "25px 1427px",
                  width: "20px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
              <span>Comment</span>
            </div>
            <div className="flex gap-2 rounded-md hover:bg-hover-light dark:hover:bg-hover-dark w-fit p-2 py-3 cursor-pointer text-sm font-semibold text-neutral-500 dark:text-neutral-400 text-center flex-1 items-center justify-center">
              <i
                className="opacity-70 dark:invert"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/GAaxJlSQY0r.png)",
                  backgroundPosition: "0px -886px",
                  backgroundSize: "25px 1427px",
                  width: "20px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
              <span>Share</span>
            </div>
          </div>
        </div>
        {openComments && <Comments postId={post?._id} />}
      </div>
    </>
  );
};

export default HomePostCard;
