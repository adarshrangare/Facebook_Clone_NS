"use client"
import { Header } from '@/components'
import React from 'react'

const Post = async ({params}:{params:{id:string} | undefined}) => {
    
  return (
    <main className='fixed z-20 w-full max-w-[100vw] bg-black/90  h-screen max-h-screen'>
      
      <h1>Post {params?.id}</h1>
    </main>
  )
}

export default Post