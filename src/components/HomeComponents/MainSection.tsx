import React, { Suspense } from 'react'
import CreatePost from './CreatePost'
import { getAllPosts } from '@/lib/actions'
import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';
import PostContainer from './PostContainer';


const MainSection = async() => {
  
    
  return (
    <main className='min-h-screen'>

        <CreatePost/>
        

        <PostContainer/>
       


    </main>
  )
}

export default MainSection