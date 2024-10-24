'use client'
import Card from "../card/Card"
import { useState, useRef, useEffect } from "react";


const Titles = () => {
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
        <div className="">
            <h2 ref={itemRef} className={`absolute z-50 top-[10rem] left-[0rem] text-[#1e4786] leading-[1] font-black w-fit text-[10rem] tracking-[-0.6rem] delay-100 transition-all duration-[1200ms] ${isInView ? "opacity-100 " : "opacity-0 "} `}  >MUCHAS</h2>
            <h2 ref={itemRef} className={`absolute z-50 top-[20rem] left-[30rem] text-[#cc4210] leading-[1] font-black w-fit text-[5rem] tracking-[-0.2rem] delay-200 transition-all duration-[1200ms] ${isInView ? "opacity-100 " : "opacity-0 "} `}>MARCAS DE</h2>
            <h2 ref={itemRef} className={`absolute z-50 top-[25rem] left-[15rem] text-[#cc1055] leading-[1] font-black w-fit text-[10rem] tracking-[-0.6rem] delay-300 transition-all duration-[1200ms] ${isInView ? "opacity-100 " : "opacity-0 "} `}>ROPA</h2>
        </div>

    )
}

export default Titles