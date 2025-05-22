import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner01 from '../../assets/banner-01.jpg'
import banner02 from '../../assets/banner-02.jpg'
import banner03 from '../../assets/banner-03.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className='my-3'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                effect={'overflow'}
                spaceBetween={10}
                slidesPerView={1}
                initialSlide={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                className="w-full cursor-pointer"
            >
                <SwiperSlide>
                    <img className='max-h-[80vh] w-11/12 mx-auto rounded-xl' src={banner01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-h-[80vh] w-11/12 mx-auto rounded-xl' src={banner02} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-h-[80vh] w-11/12 mx-auto rounded-xl' src={banner03} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;