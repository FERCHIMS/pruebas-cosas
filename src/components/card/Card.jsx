'use client'
import { useState, useRef, useEffect } from "react";

const Card = ({children, className=""}) => {
  const [isInView, setIsInView] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting);
            },
            {
                /* threshold: 1.0, */
                rootMargin:"-100px"
            }
        );
    
        if (itemRef.current) {
            observer.observe(itemRef.current);
        }
        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);
  
  return (
    <div ref={itemRef} className={`${className} w-full h-full transition-all duration-[1200ms] ${isInView ? " filter-blur-0" : " filter-blur-10 "} `}>
        {children}
    </div>
  )
}

export default Card