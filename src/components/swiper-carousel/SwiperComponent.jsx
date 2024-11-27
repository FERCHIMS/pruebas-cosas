'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
/* import 'swiper/css';
import 'swiper/css/navigation'; */
import Image from 'next/image';
import LlamadaImagenes from './LlamadaImagenes';

const SwiperComponent = () => {
  return (
    <Swiper
    /* className="h-full absolute bg-orange-300"
  spaceBetween={10}
  slidesPerView={3}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)} */
    >
      <SwiperSlide className="w-full h-screen">
        {/* <Image  src={image.src} width={500} height={500} alt="foto" /> */}
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperComponent


{/* <SwiperSlide
          key={index}
          className="bg-yellow-300 flex items-center justify-center"
          style={{ width: '900px' }}
        >
          
        </SwiperSlide> */}



{/* <Swiper
      className="w-[40%] h-full max-w-full absolute bg-orange-300"
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    > */}
{/* <SwiperSlide> */ }

{/* </SwiperSlide> */ }
/* </Swiper> */