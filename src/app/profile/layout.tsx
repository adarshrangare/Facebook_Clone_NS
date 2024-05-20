import { Header } from '@/components'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <>
       <Header />
    <main className="relative w-full  mt-2 container mx-auto ">
        
        {children}
    </main>
    </>
  )
}

export default layout