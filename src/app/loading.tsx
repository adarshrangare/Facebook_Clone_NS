import { AdSection, Header, Menubar } from '@/components'
import PostCardLoader from '@/components/Skeletons/PostCardLoader'
import { Skeleton } from 'antd'
import React from 'react'

const loading = () => {
  return (
    <>
      <Header />
      {/* <main className="relative w-11/12  mt-2 container mx-auto md:grid grid-cols-4 text-center">
        loading...
        <section className="col-start-1 relative  px-2 max-sm:hidden">
          <Skeleton/>          
          <Skeleton/>          
          <Skeleton/>          
        </section>
        <section className="col-start-2  col-end-4  container px-2 ">
          
            {Array.from({length:10}).map((_,index)=>(<PostCardLoader key={index}/>))}
          
        </section>
        <section className="col-start-4 relative px-2 ">
          <Skeleton/>
          <Skeleton/>
        </section>
      </main> */}

  

<div className="loader">
  <div className="square" id="sq1"></div>
  <div className="square" id="sq2"></div>
  <div className="square" id="sq3"></div>
  <div className="square" id="sq4"></div>
  <div className="square" id="sq5"></div>
  <div className="square" id="sq6"></div>
  <div className="square" id="sq7"></div>
  <div className="square" id="sq8"></div>
  <div className="square" id="sq9"></div>
</div>


    </>
  )
}

export default loading