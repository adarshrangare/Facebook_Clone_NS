"use client";
import { Carousel } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ImageContainer({
  postId,
}: {
  postId: string | undefined;
}) {
  const [images, setImages] = useState<string[] | [] | null>(null);

  async function getImages() {
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
    setImages(data?.data?.images);
    // console.log(images);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="flex  w-full h-full items-center justify-center p-4 relative">
      <Carousel autoplay>
        {images?.map((image: string) => (
          <Image
            key={image}
            src={image}
            alt={image}
            width={600}
            height={600}
            className="max-w-10/12 max-h-10/12"
          />
        ))}
      </Carousel>
    </div>
  );
}
