import Image from 'next/image';
import React from 'react'
// const coverImageFallaback = "https://wallpapers.com/downloads/high/thank-you-in-black-a6qwok10xl6m3pkr.webp" 
const coverImageFallaback = "https://img.freepik.com/free-vector/purple-pink-halftone-background-vector_53876-67278.jpg?w=740&t=st=1716273672~exp=1716274272~hmac=53f3f2ee16798a04874631d0bf7ddeada2d19674b6ae477e1d3fa36eb0831770" 
// const profileImageFallback = "https://miro.medium.com/v2/resize:fit:828/format:webp/1*_ARzR7F_fff_KI14yMKBzw.png"
const profileImageFallback = "https://i.pinimg.com/564x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg"
export default function CoverImage({profileImage,className}:{profileImage:string;className:string}) {
  return (
    <div className={className}>

        <Image src={profileImage || coverImageFallaback} alt="cover image" width={1000} height={1000} 
        className="w-full max-h-80 object-cover object-center "/>

        <Image src={profileImage || profileImageFallback} alt="profile image" width={400} height={400} 
        className="absolute -bottom-24 md:-bottom-32 left-4 md:left-[17%] shadow dark:bg-primary-dark rounded-full md:max-h-48 md:max-w-48 max-h-32 max-w-32 border-4 aspect-square border-[white] dark:border-[#18191a] " />

    </div>
  )
}

