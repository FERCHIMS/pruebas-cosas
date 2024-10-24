'use client'
import LinkHover from "@/components/link-hover/LinkHover"
import LinksHeight from "@/components/links-altura/LinksHeight"
import Image from "next/image"
import Card from "@/components/card/Card"
import GridCont from "@/components/grid-cont/GridCont"
import GetImages from "@/components/grid-images/GetImages"
import ImagenesSrc from "@/components/grid-cont/ImagenesSrc"
import Titles from "@/components/titles/Titles"
import '../../components/grid-cont/grid.css'
import AnimImages from "@/components/anim-container/AnimImages"

const gifs = [
    {
        id: "1",
        src: "https://iili.io/23dcQp9.gif"
    },
    {
        id: "2",
        src: "https://iili.io/23dvBRe.gif"
    },
    {
        id: "3",
        src: "https://iili.io/23dZj6X.gif"
    },
    {
        id: "4",
        src: "https://iili.io/23dcQp9.gif"
    },
    {
        id: "5",
        src: "https://iili.io/23dvBRe.gif"
    },
    {
        id: "6",
        src: "https://iili.io/23dZj6X.gif"
    },
    {
        id: "7",
        src: "https://iili.io/23dcQp9.gif"
    },
    {
        id: "8",
        src: "https://iili.io/23dvBRe.gif"
    },
    {
        id: "9",
        src: "https://iili.io/23dZj6X.gif"
    },
    {
        id: "10",
        src: "https://iili.io/23dZj6X.gif"
    },

]



const Mas = () => {


    return (
        <div className="overflow-hidden flex justify-center w-full bg-[#ffffff] ">

            <div className="flex justify-center items-center flex-col w-[90%]  pt-10 absolute bg-[#77777700] h-fit p-1 ">
                <div className="flex flex-col justify-start w-[100%] gap-3 pb-2">
                    <h2 className=" leading-[1] font-black w-fit text-[3rem] tracking-[0.001rem]   ">ESTO ES UN TITULO</h2>
                    <p className="leading-[1] text-[0.9rem] font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iusto suscipit consequatur! Perspiciatis dolores ut laboriosam veritatis eligendi atque </p>
                </div>
                <div className="relative  flex flex-wrap w-[100%] overflow-hidden">
                    <div className="h-[100vh]">
                        <ImagenesSrc />
                    </div>
                    <div className="w-full z-[60] h-full flex justify-center ">
                        <Titles />
                    </div>
                </div>
                <div className="py-20 w-full relative justify-center flex flex-wrap">
                    <div className="absolute w-full flex justify-center">
                        <h2 className="absolute z-50 top-[5rem] left-[0rem] text-[#1e4786] leading-[1] font-black w-fit text-[10rem] tracking-[-0.6rem] delay-100 uppercase transition-all duration-[1200ms]"  >calidad</h2>
                        <h2 className="absolute z-50 top-[14rem] left-[30rem] text-[#cc4210] leading-[1] font-black w-fit text-[5rem] tracking-[-0.2rem] delay-200 uppercase transition-all duration-[1200ms]">asegurada</h2>
                    </div>

                    <GridCont numero={5}>
                        {gifs.map((gif) => (
                            <div key={gif.id} className="opacity-50">
                                <Image className="w-[500px] rounded-full " src={gif.src} width={500} height={500} alt="imagen 2" />
                            </div>
                        ))}
                    </GridCont>
                </div>
                <div>
                    <video loop muted autoPlay>
                        <source src="https://res.cloudinary.com/dtxyn8cnq/video/upload/v1726452901/99999999_tai5vj.mp4 " />
                    </video>
                </div>
                <div>
                    <AnimImages />
                </div>
            </div>

        </div>
    )
}

export default Mas