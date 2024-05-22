
import React from 'react'
import FacebookIcon from '@/assets/FacebookIcon'
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import ProfileNav from '@/components/Header/ProfileNav'
import SearchArea from '../SearchArea/SearchArea';
const Header = () => {
  return (
    <div className='sticky z-40 top-0 h-14 bg-primary-light dark:bg-primary-dark w-full shadow-md'>
      <header className='mx-auto  container h-14 py-2 px-4 flex justify-between items-center   text-base gap-2 bg-primary-light dark:bg-primary-dark'>
          <div className="left-header flex gap-2">
          <Link href="/">
            <FacebookIcon />
          </Link>
      
      
          </div>
          <SearchArea/>
          {/* <Navbar className='md:w-1/2 bg-gray-50'/> */}
          <ProfileNav/>
      </header>
    </div>
  )
}

export default Header