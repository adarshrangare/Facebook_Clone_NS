"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import CommentsContainer from './CommentsContainer';
import CreateComment from './CreateComment';


const Comments =  ({postId}:{postId:string}) => {
  
  const { data: session } = useSession();
  
  const fetchComments = async ()=>{
      const res = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`)
  }
    useEffect(()=>{

        

    },[])

  return (
    <div className='mx-auto bg-white max-w-md w-full px-4 py-2 text-sm'>

        <CreateComment/>
        <CommentsContainer/>


    </div>
  )
}

export default Comments