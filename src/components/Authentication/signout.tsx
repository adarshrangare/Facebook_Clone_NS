"use client"

import React from 'react'
import { signOut } from 'next-auth/react'
const Signout = () => {
  return (
    <button className="bg-red-400" onClick={(e)=>{
        signOut()
      }}>Logout</button>
  )
}

export default Signout