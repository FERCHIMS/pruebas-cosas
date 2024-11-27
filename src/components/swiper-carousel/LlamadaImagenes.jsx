
import Image from "next/image"
import getImages from "../llamadas/Llamadas"
import SwiperComponent from "./SwiperComponent"
import CardCarousel from "./CardCarousel"
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const LlamadaImagenes = async () => {
    const images = await getImages()
    return (
        <>
            
        </>
    )
}

export default LlamadaImagenes







