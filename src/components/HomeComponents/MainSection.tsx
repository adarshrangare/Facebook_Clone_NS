import React, { Suspense } from "react";
import PostContainer from "./PostContainer";
import PostCardLoader from "../Skeletons/PostCardLoader";
import dynamic from "next/dynamic";

const CreatePost = dynamic(() => import("./CreatePost"), {
  ssr: false,
});

const MainSection = () => {
  return (
    <main className="min-h-screen">
      <CreatePost />
      
      <PostContainer />
    </main>
  );
};

export default MainSection;
