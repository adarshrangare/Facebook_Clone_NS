"use client";
import { Post, UserData } from "@/lib/definations";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
const fallbackImage =
  "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
const SearchArea = () => {
  const [postList, setPostList] = useState<Post[] | null>(null);
  const [userList, setUserList] = useState<UserData[] | null>(null);
  const [searchWindowVisible, setSearchWindowVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(0);
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setSearchWindowVisible(true);
    } else {
      setSearchWindowVisible(false);
    }

    async function getPostsBySearch() {
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/post?search={"content":${JSON.stringify(
          searchTerm
        )},"title":${JSON.stringify(searchTerm)},"author.name":${JSON.stringify(
          searchTerm
        )}}`,
        {
          headers: {
            projectID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
          },
        }
      );

      const data = await res.json();

      if (data?.status === "success") {
        setPostList(data?.data);
        setResults(data?.results);
      }
    }

    getPostsBySearch();
  }, [searchTerm]);

  return (
    <div className="searchInput dark:bg-compo-dark bg-compo-light h-full rounded-full flex  items-center px-2 w-fit relative">
      <label htmlFor="search">
        <IoSearch className="inline  text-blue-600 w-5 h-5 my-1" />{" "}
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="w-full md:w-72 shrink bg-transparent outline-none text-inherit placeholder:text-sm placeholder:text-gray-500 px-2 mr-3 rounded-full"
        placeholder="Search Facebook"
      />
      
      <div
        className={`md:left-0 md:right-0 w-[90vw] p-1 md:w-full min-h-[50vh] max-h-[50vh] max-w-md  absolute top-10 -left-10 bg-primary-light dark:bg-compo-dark border dark:border-none rounded-lg shadow-lg origin-top overflow-y-auto ${
          searchWindowVisible ? "scale-100" : "scale-0"
        }`}
      >
        <div className="mx-1">
          <h1 className="font-medium text-neutral-600 dark:text-neutral-300 ">
            Posts
          </h1>
          {!!results ? (
            postList?.map((post: Post, index: number) => (
              <Link key={post?._id} href={`/post/${post?._id}`} className="w-full shadow bg-slate-100 dark:bg-neutral-800 mb-2  hover:bg-black/10 dark:hover:bg-neutral-900 flex max-h-20 h-20 rounded-full">
                <Image
                  src={post?.images[0] || fallbackImage}
                  alt="image"
                  width={100}
                  height={100}
                  className={`object-cover object-center w-20 h-full shrink-0 p-1 rounded-full ${
                    !post?.images[0] && "dark:invert"
                  }`}
                />
                <div className="text-sm flex flex-col justify-between my-2 px-2 overflow-ellipsis">
                  <p className="max-h-12 overflow-hidden  ">{post?.content}</p>

                  <p className="text-xs py-1 text-neutral-400 dark:text-neutral-500">
                    PostedBy : <span>{post?.author?.name}</span>{" "}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center my-2 font-bold text-xl text-neutral-300 dark:text-neutral-500">
              No posts Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
