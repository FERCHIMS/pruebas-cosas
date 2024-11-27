'use client'


import CardCarousel from '@/components/swiper-carousel/CardCarousel'
import Card1 from '@/components/swiper-carousel/cards-carousel/Card1'
import { Slide1, Slide6 } from '@/components/swiper-carousel/cards-carousel/ContCards'



const arrayComponents = [
    <Card1 />
]


const Mas = () => {


    return (
        <div className="overflow-hidden w-full bg-[#ffffff] ">

            {/* <div className="flex justify-center items-center flex-col w-[90%]  pt-10 absolute bg-[#77777700] h-fit p-1 ">
                <div className="flex flex-col justify-start w-[100%] gap-3 pb-2">
                    <h2 className=" leading-[1] font-black w-fit text-[3rem] tracking-[0.001rem]   ">ESTO ES UN TITULO</h2>
                    <p className="leading-[1] text-[0.9rem] font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iusto suscipit consequatur! Perspiciatis dolores ut laboriosam veritatis eligendi atque </p>
                </div>



            </div> */}
            <div className="w-full flex justify-center h-screen bg-[#000] ">
                <CardCarousel />
            </div>
            {/* <div className='w-full h-[100vh] bg-pink-300 flex flex-wrap'>
               
                
            </div> */}
        </div>
    )
}

export default Mas



/* const gifs = [
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

] */