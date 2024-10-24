'use client'
import Image from "next/image"
import GridCont from "./GridCont"
import { useState, useRef, useEffect } from "react";
import './grid.css'
import Card from "../card/Card";

export const imagenes = [
    {
        id: "1",
        src: "https://iili.io/22QdLKv.png"
    },
    {
        id: "2",
        src: "https://iili.io/22QdPVa.png"
    },
    {
        id: "3",
        src: "https://iili.io/22QdiiJ.png"
    },
    {
        id: "4",
        src: "https://iili.io/22QdQlR.png"
    },
    {
        id: "5",
        /* src: "https://iili.io/22QdZSp.png", */
        src: "https://iili.io/23dcQp9.gif"
    },
    {
        id: "6",
        src: "https://iili.io/22QdbRI.png"
    },
    {
        id: "7",
        src: "https://iili.io/22QdmNt.png"
    },
    {
        id: "8",
        src: "https://iili.io/23dvBRe.gif"
    },
    {
        id: "9",
        src: "https://iili.io/22Q23l4.png"
    },
    {
        id: "10",
        src: "https://iili.io/22Q2HVs.png"
    },
    {
        id: "11",
        src: "https://iili.io/23dZj6X.gif"
    },
    {
        id: "12",
        src: "https://iili.io/22Q2BO7.png"
    },
    {
        id: "13",
        src: "https://iili.io/22Q2oxe.png"
    },
    {
        id: "14",
        src: "https://iili.io/22Q2zib.png"
    },
    {
        id: "15",
        src: "https://iili.io/22Q2xWu.png"
    },
    {
        id: "16",
        src: "https://iili.io/22Q2AUQ.png"
    },
    {
        id: "17",
        src: "https://iili.io/22Q275B.png"
    },
    {
        id: "18",
        src: "https://iili.io/22Q2lzF.png"
    },
    {
        id: "19",
        src: "https://iili.io/22Q2YOP.png"
    },
    {
        id: "20",
        src: "https://iili.io/22Q21sa.png"
    },
    {
        id: "21",
        src: "https://iili.io/22Q2VgR.png"
    },
    {
        id: "22",
        src: "https://iili.io/22Q2h5N.png"
    },
    {
        id: "23",
        src: "https://iili.io/22Q2jeI.png"
    },
    {
        id: "24",
        src: "https://iili.io/22Q2OzX.png"
    },
    {
        id: "25",
        src: "https://iili.io/22QdLKv.png"
    },
    {
        id: "26",
        src: "https://iili.io/22QdPVa.png"
    },
    {
        id: "27",
        src: "https://iili.io/22QdiiJ.png"
    },
    {
        id: "28",
        src: "https://iili.io/22QdQlR.png"
    },
    {
        id: "29",
        /* src: "https://iili.io/22QdZSp.png", */
        src: "https://iili.io/23dcQp9.gif"
    },
    {
        id: "30",
        src: "https://iili.io/22QdbRI.png"
    },
    {
        id: "31",
        src: "https://iili.io/22QdmNt.png"
    },
    {
        id: "32",
        src: "https://iili.io/23dvBRe.gif"
    },
    {
        id: "33",
        src: "https://iili.io/22Q23l4.png"
    },
    {
        id: "34",
        src: "https://iili.io/22Q2HVs.png"
    },
    {
        id: "35",
        src: "https://iili.io/23dZj6X.gif"
    },
    {
        id: "36",
        src: "https://iili.io/22Q2BO7.png"
    },
]



const ImagenesSrc = ({esto, otro}) => {
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
        <GridCont grande={4} numero={7}>
            {imagenes.map((imagen, index) => (
                <div  className="relative transition-all duration-[1200ms] " key={index}>
                    {/* <div className={`w-full h-full bg-pink-500 bg-opacity-50 z-30 transition-all duration-[700ms] object-cover absolute `}></div> */}
                    <Card >
                    <div  className={`w-full  h-full z-30 transition-all duration-[1200ms] object-cover absolute `}></div>
                        <Image  ref={itemRef} className={`rounded-full transition-all duration-[1200ms] min-h-full min-w-full ${isInView ? esto : otro} `} src={imagen.src} quality={100} width={500} height={500} alt="este es un grid" />
                    </Card>
                </div>
            ))}

        </GridCont>
    )
}

export default ImagenesSrc