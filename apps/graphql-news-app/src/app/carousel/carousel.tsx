import { FC, FunctionComponent } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';

import './carousel.css';

const Carousel: FC<{ slides: { Component: FunctionComponent }[] }> = ({ slides }) => {
  return (
    <Swiper
      className={'w-full'}
      navigation={true}
      slidesPerView={3}
      spaceBetween={20}
      modules={[Navigation]}
    >
      {slides.map(item => <SwiperSlide>{item.Component}</SwiperSlide>)}
    </Swiper>
  );
};

export default Carousel;
