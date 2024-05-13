import Image from 'next/image'
import React from 'react'
import { adData } from '@/lib/utils'
const AdSection =  () => {
  return (
    <aside className='sticky top-16'>

        <h1>Sponsored</h1>

        <div className='max-w-sm w-full'>

            <div className="card w-full space-y-4 p-2">

                {adData.map((ad,index)=>(
                    
                    <a key={index} href={`https://${ad.link}`} target="_blank" property='priority' className='h-fit  rounded-lg overflow-hidden w-full flex items-center  hover:bg-neutral-200 dark:hover:bg-hover-dark'>
                        <Image src={ad.img} width={100} height={100} alt={ad.text} />
                        <div className='p-2 text-ellipsis font-medium'>
                            <h1>{ad.text}</h1>
                            <p className='font-normal text-sm text-neutral-500'>{ad.link}</p>
                        </div>
                    </a>
                ))}


            </div>

        </div>   
    
    
    </aside>
  )
}

export default AdSection