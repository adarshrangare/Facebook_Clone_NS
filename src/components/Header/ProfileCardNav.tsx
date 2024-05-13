"use client"
import { UserIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { UserData } from '@/lib/definations'
import { useSession } from 'next-auth/react'
import { Skeleton } from 'antd'
import SkeletonInput from 'antd/es/skeleton/Input'
const ProfileCardNav = ({...rest}) => {
    
    const sessionData = useSession();
    const {data:session} = useSession();
    const userDetails:UserData = session?.user as UserData;
    

    console.log(sessionData.data)
  
  return (
    <>
     <div className='flex items-center gap-3  dark:text-primary-dark text-primary-light'>
     <UserIcon className=" w-8 h-8 rounded-full bg-gray-200 dark:invert  p-1 text-gray-800 " />
      {!userDetails?.name ? <div className='w-8/12 bg-neutral-200 animate-pulse h-8 rounded-md'> </div> :  <span className='font-semibold ease-in '>{ userDetails?.name }</span>}
     </div>
    </>
  )
}

export default ProfileCardNav