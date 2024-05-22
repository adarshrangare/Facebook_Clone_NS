// "use client"
// import { Header } from '@/components'
// import { useParams } from 'next/navigation'
import FacebookIcon from "@/assets/FacebookIcon";
import { ImageContainer, PostInteraction } from "@/components";
import HomePostCard from "@/components/HomeComponents/HomePostCard";
import { Carousel } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"


const Post = async ({ params }: { params: { id: string } | undefined }) => {
  let images;
  const res = await fetch(
    `https://academics.newtonschool.co/api/v1/facebook/post/${params?.id}`,
    {
      headers: {
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
      },
    }
  );

  const data = await res.json();
  // console.log(data);

  if (data.status === "success") {
    // setImages(data.data.images);
    images = data?.data?.images;
  }

  return (
    <main className="fixed z-20 w-full max-w-[100vw] bg-body-dark  h-screen max-h-screen overflow-y-auto">
      {/* <div className="h-20 bg-transparent p-4  "> */}
      <Link href={"/"}>
        <FacebookIcon className="m-4 absolute top-4 left-4 z-10" />
      </Link>
      {/* </div> */}
      <div className="w-11/12 h-full mx-auto flex max-md:flex-col ">
        <div className="img md:basis-3/4  h-full ">
          {/* <ImageContainer postId={params?.id}/> */}

          <div className="flex  w-full h-full items-center justify-center p-4 relative ">
            {!!images?.length && (
              // <div autoplay>
              //   {images?.map((image: string) => (
                  <Image
                    key={images[0]}
                    src={images[0] || fallbackImage}
                    alt={images[0]}
                    width={1000}
                    height={1000}
                    className=" max-w-full max-h-full w-auto h-auto "
                  />
              //   ))}
              // </div>
            )}
          </div>
        </div>
        <div className="interaction w-full max-md:h-full max-md:rounded-md md:flex items-center max-w-md  bg-primary-light dark:bg-primary-dark h-full max-h-full ">
          <PostInteraction />
        </div>
      </div>
    </main>
  );
};

export default Post;
