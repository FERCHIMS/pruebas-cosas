'use client'
import { useState, useRef, useEffect } from "react";
import ImagenesSrc from "../grid-cont/ImagenesSrc";

const AnimImages = () => {
    const [isInView, setIsInView] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting);
            },
            {
                threshold: 1.0,
                /* rootMargin:"-20px" */
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
    <div ref={itemRef} className={`transition-all duration-[1200ms]  `}>
        <ImagenesSrc 
        esto="opacity-0 backdrop-blur-md bg-white bg-opacity-50"
        otro="opacity-[30%] backdrop-blur-none transparent "
        />
    </div>
  )
}

export default AnimImages