import React, { Suspense } from 'react'
import { getAllPosts } from '@/lib/actions'
import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';
import PostContainer from './PostContainer';
import PostCardLoader from '../Skeletons/PostCardLoader';
import dynamic from 'next/dynamic';

const CreatePost = dynamic(() => import('./CreatePost'), {
  ssr: false,
});

const MainSection = async() => {
  
    
  return (
    <main className='min-h-screen'>

        <CreatePost/>
        
        

        <PostContainer/>
        
       


    </main>
  )
}

export default MainSection