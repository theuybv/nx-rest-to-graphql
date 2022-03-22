import {FC, FunctionComponent} from 'react';
import {useGetBreakpoint} from "../hooks/tailwind";

import 'swiper/css';
import 'swiper/css/navigation';

import {Swiper, SwiperSlide} from 'swiper/react';

import {Navigation} from 'swiper';

import './carousel.css';

const Carousel: FC<{ slides: { Component: FunctionComponent }[] }> = ({slides}) => {
  const {breakpoint} = useGetBreakpoint();
  return (
    <Swiper
      autoHeight
      className={'w-full'}
      navigation={true}
      slidesPerView={breakpoint === 'xs' ? 2 : 3}
      spaceBetween={20}
      modules={[Navigation]}
    >
      {slides.map((item, index) => <SwiperSlide key={index}>{item.Component}</SwiperSlide>)}
    </Swiper>
  );
};

export default Carousel;
