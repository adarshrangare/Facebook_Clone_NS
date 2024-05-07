
import React from 'react'
import FacebookIcon from '@/assets/FacebookIcon'
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import ProfileNav from '@/components/Header/ProfileNav'
const Header = () => {
  return (
    <div className='sticky z-40 top-0 h-14 bg-primary-light dark:bg-primary-dark w-full shadow-md'>
      <header className='mx-auto  container h-14 py-2 px-4 flex justify-between items-center   text-base gap-2 bg-primary-light dark:bg-primary-dark'>
          <div className="left-header flex gap-2">
          <Link href="/">
            <FacebookIcon />
          </Link>
      
      
          </div>
          <div className="searchInput dark:bg-compo-dark bg-compo-light h-full rounded-full flex  items-center px-2 w-fit">
              <label htmlFor="search"> <IoSearch className='inline  text-blue-600 w-5 h-5 my-1'/> </label>
              <input type="text" className='w-full md:w-72 shrink bg-transparent outline-none text-inherit placeholder:text-sm placeholder:text-gray-500 px-2 mr-3 rounded-full' placeholder='Search Facebook' />
          </div>
          {/* <Navbar className='md:w-1/2 bg-gray-50'/> */}
          <ProfileNav/>
      </header>
    </div>
  )
}

export default Header