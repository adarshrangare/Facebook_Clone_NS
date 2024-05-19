import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

export default async function ImageContainer({ postId }: { postId: string | undefined }) {
 
    const res = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/post/${postId}`,
        {
          headers: {
            projectId: process.env.PROJECT_ID as string,
          },
        }
      );
    
      const data = await res.json();
        // console.log(data);
      const images  = data?.data?.images;
        console.log(images);
  return (<div className="flex  w-full h-full items-center justify-center p-4 relative">

    <Carousel autoplay >

    {
        images?.map((image:string) => (<Image key={image} src={image} alt={data?.data?.content} width={600} height={600} className="max-w-10/12 max-h-10/12" />))

    }
    
    </Carousel>

  </div>);
}
