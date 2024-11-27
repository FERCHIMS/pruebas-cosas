'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel, Parallax, autoPlay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { easeInOut } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6 } from './cards-carousel/ContCards';
import Observador from './cards-carousel/Observador';
import { Container } from 'postcss';


const arrayComponents = [
    <Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />, <Slide6 />
]

const CardCarousel = () => {
    /* const [images, setImages] = useState([])

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch("https://greftom4.github.io/apiEstaticaProds/modelos.json")
                const data = await res.json()
                setImages(data)
            } catch (error) {
                console.error("error", error);

            }
        }
        fetchImages()
    }, []) */

    return (
        
            <Swiper
            modules={[Keyboard, Mousewheel]}
            direction="vertical"
                /* className='swiper' */
                /* style={{ width: '100%', height: '100%' }} */
                style={{ height: "100vh" }} 
                keyboard={{ enabled: true }}
                speed={500}
                cssMode={false}
                autoPlay={true}
                EffectFade={true}
                /* Parallax={true} */
                /* loop={true} */
                freeMode={true}
                mousewheel
                /* effect="fade" */
                /* spaceBetween={10} */
                slidesPerView={1}
            /* fadeEffect={{ crossFade: true }}
            pagination={{ clickable: false }}
            navigation={false} */

            >
                {arrayComponents.map((component, index) => (
                    <SwiperSlide className='swiper-slide' style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }} key={index}>

                        {component}

                    </SwiperSlide>
                ))}

                {/* {images.map((image, index) => (
                    <SwiperSlide className='swiper-slide' style={{display:"flex", width:"50%", justifyContent: "center", alignItems: "center"}} key={index}>
                        <Image className='object-cover h-fit max-h-dvh w-fit max-w-fit' src={image.src} width={500} height={500} alt="foto" />
                    </SwiperSlide>
                ))} */}
                {/* <div className='absolute top-0 left-0 '>
                <video autoPlay muted loop>
                    <source src='https://res.cloudinary.com/dcqtminhu/video/upload/v1729516554/4k_video_gqbfxm.mp4' />
                </video>
            </div> */}
                {/* <div className='absolute w-full top-0 left-0 '>
                <Image className='object-cover w-full' src="https://iili.io/2chnB0Q.png" width={500} height={500} alt="foto" />
            </div> */}
            </Swiper>
            
    )
}

export default CardCarousel



/* className='max-h-full max-w-fit h-full w-fit'  */