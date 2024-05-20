import SkeletonButton from 'antd/es/skeleton/Button';
import SkeletonInput from 'antd/es/skeleton/Input';
import React from 'react'


const ProfileLoader = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold  p-4 "> <SkeletonInput size='large' active/> </h1>

        <SkeletonButton active className='bg-primary-light dark:bg-primary-dark mx-auto  md:w-9/12 lg:w-8/12 p-4 w-full min-h-32 md:min-h-48 flex justify-between gap-2 flex-wrap pl-36 md:pl-48'/>

    </div>
  )
}

export default ProfileLoader