'use client'
import { useState, useRef, useEffect } from "react";

const Observador = ({children}) => {
    const [isInView, setIsInView] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting);
            },
            {
                threshold: 0.5,
                rootMargin:"150px"
            },
            
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
    <div ref={itemRef} className={`transition-all duration-[1600ms] ${isInView ? "opacity-100" : "opacity-0"} `}>
        {children}
    </div>
  )
}

export default Observador