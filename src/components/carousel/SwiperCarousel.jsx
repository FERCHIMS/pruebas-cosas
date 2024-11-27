'use client'
import { Navigation, Pagination, Scrollbar, A11y,  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideNextButton from './SlideNextButton';
import AnimComponent from '../anim-container/AnimComponent';
import Image from 'next/image';

const SwiperCarousel = () => {
    return (

        <div className='w-full flex justify-center bg-orange-500'>
            <SlideNextButton />
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation={true}
                pagination={{ clickable: true }}
                /* scrollbar={{ draggable: true }} */
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='w-[40%]'
            >

                <SwiperSlide className='flex justify-center items-center w-[100%]  '>
                    <AnimComponent
                        esto="opacity-100 "
                        otro="opacity-0 "
                        threshold="0.4"
                        rootMargin="-100px"
                        className='w-full h-full flex items-center object-cover transition-all duration-[1200ms] '>
                        <div className=' w-full  bg-yellow-400 '>
                            <AnimComponent
                                esto="opacity-100 blur-[0rem] brightness-[100%]"
                                otro="opacity-[30%] blur-[0.2rem] brightness-[200%] saturate-[200%]"
                                threshold="0.4"
                                rootMargin="-100px"
                                className='overflow-hidden w-full object-cover  transition-all duration-[1200ms] ease-[cubic-bezier(0.76, 0, 0.24, 1)]'
                            >
                                <Image className='w-full object-cover' layout='responsive' src="https://iili.io/dLCAQvS.jpg" width={500} height={500} alt='foto1' />
                            </AnimComponent>
                            <AnimComponent
                                esto="opacity-100 transform translate-x-[-20vw]"
                                otro="opacity-0 transform translate-x-[0vw]"
                                threshold="0.5"
                                rootMargin="-100px"
                                className='transition-all relative flex justify-center items-center delay-500 duration-[1200ms] '
                            >
                                <h2 className='font-black text-[5rem] top-[-20vh] left-[26.5vw] z-10 filter backdrop-hue-rotate-90 text-white absolute'>FOTO</h2>
                                
                            </AnimComponent>
                        </div>
                    </AnimComponent>
                </SwiperSlide>

                <SwiperSlide className=' w-[100%] h-[600px]'>
                    <div>
                    <AnimComponent
                                esto="opacity-100 blur-[0rem] brightness-[100%] "
                                otro="opacity-[30%] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                                threshold="0.5"
                                rootMargin="-100px"
                                className='transition-all delay-500 duration-[1200ms] '
                            >
                        <video autoPlay muted loop>
                            <source src='https://res.cloudinary.com/dcqtminhu/video/upload/v1729516516/patinartisticofs---_nacfno.mp4' />
                        </video>
                        </AnimComponent>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' w-[100%] h-[600px]'>
                <div>
                    <AnimComponent
                                esto="opacity-100 blur-[0rem] brightness-[100%] "
                                otro="opacity-[30%] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                                threshold="0.5"
                                rootMargin="-100px"
                                className='transition-all delay-500 duration-[1200ms] '
                            >
                        <video autoPlay muted loop>
                            <source src='https://res.cloudinary.com/dcqtminhu/video/upload/v1729516534/_suttonranae_AQNzHcWA37kUkFGOO1h6H3Vf66KuAvhCbxHa0KD1N3U3F9xIkqsfVByoh4LGJFgirRiEkR59BOvkJmiXx7SQZcUH_ieohdd.mp4' />
                        </video>
                        </AnimComponent>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' w-[100%] h-[600px]'>
                <div>
                    <AnimComponent
                                esto="opacity-100 blur-[0rem] brightness-[100%] "
                                otro="opacity-[30%] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                                threshold="0.5"
                                rootMargin="-100px"
                                className='transition-all delay-500 duration-[1200ms] '
                            >
                        <video autoPlay muted loop>
                            <source src='https://res.cloudinary.com/dcqtminhu/video/upload/v1729516546/_suttonranae_AQPxcEn__YOiYQERC-4U2nscCiVPYVeig_WfklPwMb251Gpk_ZL17Ozl3MpdvpJqNLmm2Yn7ZjSgKeW221l3FYj6_dsi247.mp4' />
                        </video>
                        </AnimComponent>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' w-[100%] h-[600px]'>
                <div>
                    <AnimComponent
                                esto="opacity-100 blur-[0rem] brightness-[100%] "
                                otro="opacity-[30%] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                                threshold="0.5"
                                rootMargin="-100px"
                                className='transition-all delay-500 duration-[1200ms] '
                            >
                        <video autoPlay muted loop>
                            <source src='https://res.cloudinary.com/dcqtminhu/video/upload/v1729516554/4k_video_gqbfxm.mp4' />
                        </video>
                        </AnimComponent>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' w-[100%] h-[600px]'>
                <div>
                    <AnimComponent
                                esto="opacity-100 blur-[0rem] brightness-[100%] "
                                otro="opacity-[30%] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                                threshold="0.5"
                                rootMargin="-100px"
                                className='transition-all delay-500 duration-[1200ms] '
                            >
                        <video autoPlay muted loop>
                            <source src='https://res.cloudinary.com/dcqtminhu/video/upload/v1729704661/claudiatuppone_5A402FF9CBC96258BDD9622CAD4EAD94_ptProgressive_l4stau.mp4' />
                        </video>
                        </AnimComponent>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' w-[100%] h-[600px]'>
                <div>
                    <AnimComponent
                                esto="opacity-100 blur-[0rem] brightness-[100%] "
                                otro="opacity-[30%] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                                threshold="0.5"
                                rootMargin="-100px"
                                className='transition-all delay-500 duration-[1200ms] '
                            >
                        <video autoPlay muted loop>
                            <source src='https://res.cloudinary.com/dcqtminhu/video/upload/v1729704611/claudiatuppone_AQPz_6k9Wv59zQT03X3bhDCldbBZPV4T2Ec5eKgFRUMoBsI5KjOQwx57DGlbabOfHjFC8-45xnFZJ1bpUxcQY_fD_hjzqw0.mp4' />
                        </video>
                        </AnimComponent>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' w-[100%] h-[600px]'>
                <div>
                    <AnimComponent
                                esto="opacity-100 blur-[0rem] brightness-[100%] "
                                otro="opacity-[30%] blur-[0.2rem] brightness-[200%] saturate-[200%] "
                                threshold="0.5"
                                rootMargin="-100px"
                                className='transition-all delay-500 duration-[1200ms] '
                            >
                        <video autoPlay muted loop>
                            <source src='https://res.cloudinary.com/dcqtminhu/video/upload/v1729515215/Snapinsta.app_video_5E4BE088AEB2E2E692C09ED5B80A669B_video_dashinit_kvinvv.mp4' />
                        </video>
                        </AnimComponent>
                    </div>
                </SwiperSlide>

                <SlideNextButton />
            </Swiper>
        </div>
    )
}

export default SwiperCarousel;