'use client'
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className='w-[200px] h-[100px] bg-red-400' onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
}