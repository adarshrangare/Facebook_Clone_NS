import Image from "next/image";
import React, { Ref, useRef, useState } from "react";
import { Post } from "@/lib/definations";
import {
  ChatBubbleOvalLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { logos } from "@/lib/utils";
import dayjs from "dayjs";
import { Carousel } from "antd";
import { useSession } from "next-auth/react";
import { likePost } from "@/lib/actions";
import toast from "react-hot-toast";
// import likePost from "../api/likePost";
// import disLikePost from "../api/dislikePost";
const HomePostCard = ({ post }: { post: Post }) => {
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
  const [liked, setLiked] = useState(post.isLiked || false);
  const [likeCount, setLikeCount] = useState(post.likeCount);

  const { data: session } = useSession();

  const handleLike = async () => {
    // console.log(token)
    const response = await likePost(session?.token as string, post._id, true);
    if (response.message === "success") {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    } else {
      // setLiked(false);
      toast.error("Unable to Like this Post");
    }
  };
  const handleDislike = async () => {
    const response = await likePost(session?.token as string, post._id, false);
    if (response.message === "success") {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      // setLiked(false);
      toast.error("Unable to Dislike this Post");
    }
  };

  return (
    <div className=" max-w-md mx-auto py-2 bg-primary-light dark:bg-primary-dark shadow rounded-md ">
      <div className="author flex items-center gap-4 mb-2 px-2">
        {post.author.profileImage ? (
          <Image
            className="w-10 h-10 rounded-full"
            src={post.author.profileImage}
            width={24}
            height={24}
            alt={post.author.name}
          />
        ) : (
          <UserIcon className="w-10 h-10 rounded-full bg-gray-200 dark:invert p-1.5 text-gray-800 " />
        )}
        <div>
          <div className="font-semibold leading-5 text-primary-light dark:text-primary-dark ">
            {post.author.name}
          </div>
          <div className="text-xs text-neutral-500">
            {getTimeDiff(post.createdAt)}
          </div>
        </div>
      </div>
      <div className="captions px-4 pb-2 text-primary-light dark:text-primary-dark text-[15px] ">
        <p className="font-medium">{post.title}</p>
        <p>{post.content}</p>
      </div>
      {/* // image Area */}
      {post.images.length !== 0 && (
        <div className="image relative">
          <Carousel className="w-full" ref={carouselRef} dots={false}>
            {post.images.map((img: string, index: number) => (
              <Image
                key={index}
                priority
                alt={post.title}
                width={400}
                height={400}
                src={img}
              />
            ))}
          </Carousel>
          {post.images.length > 1 && (
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
        <div className="flex gap-1.5 my-2 font-light opacity-85 text-primary-light dark:text-primary-dark text-sm cursor-pointer">
          <Image src={logos.like} alt="like" width={18} height={18} />
          <span>{likeCount}</span>
        </div>
        <div className="flex gap-1.5 my-2 font-light opacity-85 text-primary-light dark:text-primary-dark text-sm cursor-pointer">
          <span className="hover:underline">{post.commentCount}</span>
          <ChatBubbleOvalLeftIcon className="w-5 h-5 opacity-80" />
        </div>
      </div>
      {/* Like and Comment Section */}
      <div className=" w-full ">
        <div className="w-11/12 mx-auto border-t flex pt-2 ">
          <div
            className={`flex  gap-2 rounded-md hover:bg-hover-light dark:hover:bg-hover-dark w-fit p-2 py-3 cursor-pointer text-sm font-semibold text-neutral-500 dark:text-neutral-400 text-center flex-1 items-center justify-center `}
            onClick={() => {
              if (liked) {
                handleDislike();
              } else {
                handleLike();
              }
            }}
          >
            <i
              className={`opacity-70  dark:invert ${
                liked ? " opacity-100 duration-100" : ""
              }`}
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/GAaxJlSQY0r.png)",
                backgroundPosition: `${liked ? "0px -676px" : "0px -739px"}`,
                backgroundSize: "25px 1427px",
                width: "20px",
                height: "20px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>

            <span className={`${liked ? "text-blue-500" : ""}`}>Like</span>
          </div>
          <div className="flex  gap-2 rounded-md hover:bg-hover-light dark:hover:bg-hover-dark w-fit p-2 py-3 cursor-pointer text-sm font-semibold text-neutral-500 dark:text-neutral-400 text-center flex-1 items-center justify-center">
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
    </div>
  );
};

export default HomePostCard;
