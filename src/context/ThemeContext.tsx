import { ThemeProvider } from 'next-themes'
import React from 'react'

type Props = {}

const ThemeContext = ({children}:{children:React.ReactNode | React.ReactNode[]}) => {
  return (
    <>
        <ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange >
            {children}
        </ThemeProvider>
    
    </>
  )
}

export default ThemeContext