import { AdSection, Header, Menubar } from '@/components'
import PostCardLoader from '@/components/Skeletons/PostCardLoader'
import React from 'react'

const loading = () => {
  return (
    <>
      <Header />
      <main className="relative w-11/12  mt-2 container mx-auto md:grid grid-cols-4">
        <section className="col-start-1 relative  px-2 ">
          <Menubar/>           
        </section>
        <section className="col-start-2  col-end-4  container px-2 ">
          
            {Array.from({length:10}).map((_,index)=>(<PostCardLoader key={index}/>))}
          
        </section>
        <section className="col-start-4 relative px-2 ">
          <AdSection/>
        </section>
      </main>

    </>
  )
}

export default loading