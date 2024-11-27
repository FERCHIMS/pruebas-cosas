'use client'
import { useState, useRef, useEffect } from "react";
import Image from "next/image"
import Observador from "./Observador";


const Card1 = ({title1, textP, src, videoSrc }) => {
    /* const [isInView, setIsInView] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                if(entries.isIntersecting)
                setIsInView(true)
                
                    observer.unobserve(entries.target)
                
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
    }, []); */

    return (
        
        <div  className="relative overflow-hidden flex flex-col w-[100vw] h-[100vh] ">
            <div className="w-full bg-pink-300 bg-opacity-30 p-4 flex gap-2 flex-col z-10 overflow-hidden">
                <div>
                    <h2 className="font-bold leading-[0.8] text-[2rem] text-white">
                        {title1}
                    </h2>
                </div>
                <div>
                    <p className="font-regular leading-[1] tracking-wide text-[0.8rem] text-white">
                        {textP}
                    </p>
                </div>
            </div>
            <Observador>
            <div className="absolute w-full h-full top-0 right-0">
                {/* <video className="absolute object-contain w-full h-full top-0 right-0" autoPlay loop muted >
                    <source src={videoSrc} />
                </video> */}
                <Image className="w-full h-full object-cover " src={src} width={500} height={500} alt="foto1" />
                
            </div>
            </Observador>
        </div>
        
    )
}

export default Card1