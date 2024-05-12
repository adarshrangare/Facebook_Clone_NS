"use client";
import React, { useEffect, useState } from "react";
import { Post } from "@/lib/definations";
import HomePostCard from "./HomePostCard";
import PostCardLoader from "@/components/Skeletons/PostCardLoader";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { baseURL } from "@/lib/utils";

const PostContainer = () => {
  async function getAllPosts(jwt: string, page: number) {
    try {
      const response = await fetch(
        `${baseURL}/post?limit=10&page=${page}&sort={"createdAt" : -1}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            projectID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const data = await response.json();
      if (data?.status === "fail") {
        throw new Error(data?.message);
      } else {
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [error, setError] = useState(false);
  const [loadMorePosts, setLoadMorePosts] = useState(false);
  const [moreResult, setMoreResult] = useState(true);
  const [reachedBottom, setReachedBottom] = useState(false);
  const router = useRouter();
  // const reachedBottom = usePageBottom();
  // const { reloadPosts, setReloadPosts } = useDataContext();
  // console.log("reachedBottom", reachedBottom);

  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 1;

      setReachedBottom(hasReachedBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (reachedBottom && moreResult) {
    if (!loadMorePosts) {
      setLoadMorePosts(true);
    }
  }

  // function handleGoToTop() {
  //   // window.scroll({ top: 0, behavior: "smooth" });
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  async function reload() {
    setLoadMorePosts(true);
    setPage(1);
    setPosts([]);
  }
  useEffect(() => {
    if (!loadMorePosts) {
      reload();
    }
  }, []);

  async function loadPosts() {
    setError(false);
    try {
      const postList = await getAllPosts(session?.token as string, page);

      if (postList.results < 10) {
        setMoreResult(false);
      } else {
        setPage((prev) => prev + 1);
      }
      // console.log(res);
      setPosts([...posts, ...postList.data]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      setLoadMorePosts(false);
    }
  }

  useEffect(() => {
    if (loadMorePosts) {
      loadPosts();
    }
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    if (status === "authenticated") loadPosts();
  }, [status]);

  return (
    <div className=" w-full my-4 space-y-4 ">
      {!loading
        ? posts?.map((post, index) => <HomePostCard key={index} post={post} />)
        : Array.from({ length: 10 }).map((_, index) => (
            <PostCardLoader key={index} />
          ))}
      <p className="text-center text-neutral-500 text-sm w-full">
        No more Posts Available
      </p>
    </div>
  );
};

export default PostContainer;
