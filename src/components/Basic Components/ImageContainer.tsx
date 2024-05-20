"use client";
import { Carousel } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ImageContainer({
  postId,
}: {
  postId: string | undefined;
}) {
  const [images, setImages] = useState<string[] | [] | null>([]);

  async function getImages() {
    try {
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/post/${postId}`,
        {
          headers: {
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
          },
        }
      );
  
      const data = await res.json();
      // console.log(data);
  
      if (data.status === "success") {
        setImages(data.data.images);
      } else {
        toast.error("Unable to get Image");
      }
    } catch (error) {
      toast.error("There is an error in Server")
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="flex  w-full h-full items-center justify-center p-4 relative ">
      { !!images?.length && <Carousel autoplay>
        {images?.map((image: string) => (
          <Image
            key={image}
            src={image}
            alt={image}
            width={600}
            height={600}
            className="max-w-10/12 max-h-10/12 "
          />
        ))}
      </Carousel>}
    </div>
  );
}
