'use client'

import { chesna } from "@/app/fuentes/Fonts";
import { freeman, inconsolata, lilitaOne } from "@/components/fonts/Fonts";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react"

const linksDrop = [
    {
        title: "Home",
        href: "/",
        src: "https://iili.io/dkfTeTb.png"
    },
    {
        title: "Pruebas",
        href: "/pruebas",
        src: "https://iili.io/dkfTkjj.png"
    },
    {
        title: "Mas",
        href: "/mas",
        src: "https://iili.io/dkfTvZx.png"
    },
    {
        title: "Esto",
        href: "/mas",
        src: "https://iili.io/dNg0cib.png"
    },
    {
        title: "Cosas",
        href: "/mas",
        src: "https://iili.io/dNg0Zg4.png"
    },

]

const links = [
    {
        title: "Home",
        href: "/",
        src: "https://iili.io/dkfTeTb.png"
    },
    {
        title: "Pruebas",
        href: "/pruebas",
        src: "https://iili.io/dkfTkjj.png"
    },
    {
        title: "Mas",
        href: "/mas",
        src: "https://iili.io/dkfTvZx.png"
    },
    {
        title: "Esto",
        href: "/mas",
        src: "https://iili.io/dNg0cib.png"
    },
    {
        title: "Cosas",
        href: "/mas",
        src: "https://iili.io/dNg0Zg4.png"
    },
    {
        title: "Estereotipos",
        href: "/mas",
        src: "https://iili.io/dNg1oI1.png"
    },
    {
        title: "Mas Cosas",
        href: "/mas",
        src: "https://iili.io/dNg1Arv.png"
    },
    {
        title: "Portfolio",
        href: "/mas",
        src: "https://iili.io/dNg177p.png"
    },
    {
        title: "Buscar",
        href: "/mas",
        src: "https://iili.io/dNg00fj.png"
    },
    {
        title: "Repetir",
        href: "/mas",
        src: "https://iili.io/dNg0WOP.png"
    },
]


const LinkHover = () => {
    const [isActive, setIsActive] = useState(null);
    const [isInView, setIsInView] = useState(false);
    const itemRef = useRef(null);

    const handleMouseEnter = (title, href) => {
        setIsActive(title, href)
    }
    const handleMouseLeave = () => {
        setIsActive(null)
    }



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting);
            },
            {
                threshold: 0.5,
                rootMargin: "100px"
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
        <div ref={itemRef} className={`relative  flex justify-center items-center h-16 px-2 py-2  bg-pink-300`}>
            <div className={` gap-4 flex  justify-center flex-wrap `} >
                {links.map((link) => (
                    <div
                        onMouseEnter={() => handleMouseEnter(link.title)}
                        onMouseLeave={handleMouseLeave}
                        key={link.title} className={`z-[60]  flex transition-all duration-[800ms]`}>
                        <div className=" ">
                            <Link
                                className={` z-10 leading-[0.8em] text-[1rem] uppercase h-fit text-[#777] transition-all duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] font-bold tracking-normal ${chesna.className} ${isActive ? "" : ""} `}
                                href={link.href}>
                                {link.title}
                            </Link>
                        </div>


                        {/* <div className="  ">
                            <div className={`absolute w-[150px] h-full z-50 top-full left-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${isActive === link.title ? "opacity-100 filter-none " : "opacity-0 filter-blur"} `}>
                                
                                <Image className=" w-full h-auto" src={link.src} width={500} height={500} alt="foto_link" />
                            </div>
                        </div> */}

                        <div className=" overflow-hidden bg-white z-50">
                            <div className={` absolute bg-pink-300 w-screen bottom-0 left-0 flex pt-[1rem] flex-col   transition-all duration-[1000ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${isActive === link.title ? " translate-y-[130px]" : " translate-y-[-190px]"} `}>
                                {linksDrop.map((link) => (
                                    <div key={link.title} className="bg-white w-full" >
                                        <Link  className="hover:bg-purple-300 bg-pink-300 w-fit " href={link.href} >{link.title} </Link>
                                        
                                    </div>
                                ))}
                                {/* <Image className=" w-full h-auto" src={link.src} width={500} height={500} alt="foto_link" /> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LinkHover

/* ${isActive === link.title ? "opacity-100 translate-y-[0vh] " : "opacity-0 translate-y-[-30vh]"} */