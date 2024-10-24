'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";


const AnimContainer = ({ threshold=0, rootMargin, duration=1200, children, className="", esto, otro, transition }) => {
    const [isInView, setIsInView] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting);
            },
            { threshold, rootMargin }
        );
    
        if (itemRef.current) {
            observer.observe(itemRef.current);
        }
        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, [threshold, rootMargin]);

    return (
        <div className={`${className} transition-${transition} duration-[${duration}ms] ${isInView ? esto : otro}`} ref={itemRef}>
            {children}
        </div>
    )
}

export default AnimContainer