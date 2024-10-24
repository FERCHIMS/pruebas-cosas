'use client'
import { useState, useRef, useEffect } from "react";


const NuevAnim = ({children, esto, otro, className=""}) => {
    const [isInView, setIsInView] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting);
            },
            {
                threshold: 0.5,
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
    <div ref={itemRef} className={`w-[50%] overflow-hidden  h-fit transition-all duration-[1500ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${className} ${isInView ? esto : otro} ` }>
        {children}
    </div>
  )
}

export default NuevAnim