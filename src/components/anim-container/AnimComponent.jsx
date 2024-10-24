'use client'
import { useState, useEffect, useRef } from "react";

const AnimComponent = ({children, esto, otro, className="", rootMargin, threshold}) => {
    const [isInView, setIsInView] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            {
                rootMargin: rootMargin,
                threshold: threshold
            }
        )
        if (itemRef.current) {
            observer.observe(itemRef.current)
        }
        return () => {
            if(itemRef.current) {
                observer.unobserve(itemRef.current)
            }
        }
    }, [])

  return (
    <div ref={itemRef} className={` ${className} ${isInView ? esto : otro} `} >
        {children}
    </div>
  )
}

export default AnimComponent