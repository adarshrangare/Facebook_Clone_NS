// "use client"
// import { Header } from '@/components'
// import { useParams } from 'next/navigation'
import FacebookIcon from '@/assets/FacebookIcon'
import { ImageContainer, PostInteraction } from '@/components'
import HomePostCard from '@/components/HomeComponents/HomePostCard'
import React from 'react'

const Post = async ({params}:{params:{id:string} | undefined}) => {
    
  

  return (
    <main className='fixed z-20 w-full max-w-[100vw] bg-body-dark  h-screen max-h-screen '>
      {/* <div className="h-20 bg-transparent p-4  "> */}
        <FacebookIcon className='m-4 absolute top-4 left-4 z-10'/>
      {/* </div> */}
      <div className='w-11/12 h-full mx-auto flex max-md:flex-col '>
        <div className="img md:basis-3/4  h-full ">
 
            <ImageContainer postId={params?.id}/>


        </div>
      <div className="interaction w-full max-md:h-full max-md:rounded-md md:flex items-center max-w-md  bg-primary-light dark:bg-primary-dark h-full max-h-full overflow-y-auto">

        <PostInteraction/>

      </div>
      </div>
    </main>
  )
}

export default Post