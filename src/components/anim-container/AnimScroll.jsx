'use client'
import { useState, useEffect } from "react"

const AnimScroll = ({children}) => {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsScroll(true)
            }else {
                setIsScroll(false)
            }
            
            }
            window.addEventListener('scroll', handleScroll);
            return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div  className={ ` flex justify-center gap-3 items-center h-full transition- duration-[1200ms] ${isScroll ? "opacity-0 bg-blue-300" : "opacity-100 "} `}>
        {children}
    </div>
  )
}

export default AnimScroll